import React, { Component } from 'react';
import { fromJS } from 'immutable';
import './App.css';
import './fontello.css';
import ProgressBar from './ProgressBar';
import Categories from './Categories';
import TaskView from './TaskView';
import ModalCategory from './ModalCategory';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list : [
                {id: 1, name: "Category 1", subcategories: [
                    {id: 5, name: "Subcategory 1", subcategories: [], tasks: []},
                    {id: 6, name: "Subcategory 2", subcategories: [], tasks: []}
                ], tasks: [{name: "To-do item 1"}], isDone: false },
                {id: 2, name: "Category 2", subcategories: [
                    {id: 7, name: "Subcategory 2", subcategories: [], tasks: []}
                ], tasks: [
                    {name: "To-do item 1", isDone: true}
                ]},
                {id: 3, name: "Category 3", subcategories: [], tasks: []},
                {id: 4, name: "Category 4", subcategories: [
                    {id: 8, name: "Subcategory 1", subcategories: [], tasks: []},
                    {id: 9, name: "Subcategory 2", subcategories: [], tasks: []},
                    {id: 10, name: "Subcategory 3", subcategories: [], tasks: []}
                ], tasks: [
                    {id: 1, name: "To-do item 1", isDone: false},
                    {id: 2, name: "To-do item 2", isDone: false},
                    {id: 3, name: "To-do item 3", isDone: false}
                ]}
            ],
            mode: 0, // 0 - display, 1 - edit
            activeCategory: null,
            addCategoryInputText: '',
            taskInputText: '',
            searchInputText: '',
            modalCategoryInputText: '',
            modalCategoryActive: false,
            modalCategoryState: null,
            categoryToUpdate: null,
            nextCatId: 11,
            nextTaskId: 4,
        };

        this.handleSelectCategory = this.handleSelectCategory.bind(this);
        this.handleAddCategory = this.handleAddCategory.bind(this);
        this.handleAddSubcategory = this.handleAddSubcategory.bind(this);
        this.handleUpdateCategory = this.handleUpdateCategory.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCancelModalCategory = this.handleCancelModalCategory.bind(this);
        this.handleSubmitModalCategory = this.handleSubmitModalCategory.bind(this);
        this.handleCountCategories = this.handleCountCategories.bind(this);

        this.list = null;
    }

    handleSelectCategory(category) {
        this.setState({
            activeCategory: category
        });
    }

    handleAddCategory(e) {
        if(this.state.addCategoryInputText === '') return;

        const newCategory = {
            id: this.state.nextCatId,
            name: this.state.addCategoryInputText,
            subcategories: [],
            tasks: []
        };
        let newList = this.state.list;
        newList.unshift(newCategory);
        this.setState({
            list: newList,
            addCategoryInputText: '',
            nextCatId: this.state.nextCatId + 1
        });
    }

    handleAddSubcategory(parent) {

        this.setState({
            modalCategoryActive: true,
            categoryToUpdate: parent
        });
    }

    handleUpdateCategory(node) {

        this.setState({
            modalCategoryActive: true,
            modalCategoryState: 'update',
            modalCategoryInputText: node.name,
            categoryToUpdate: node
        });
    }

    handleCancelModalCategory() {
        this.setState({
            modalCategoryActive: false,
            modalCategoryState: null,
            modalCategoryInputText: '',
            categoryToUpdate: null
        });
    }

    handleSubmitModalCategory() {

        const list1 = fromJS(this.state.list);
        const list2 = list1.updateIn([0, 'name'], name => this.state.modalCategoryInputText).toJS();

        this.setState({
            modalCategoryActive: false,
            modalCategoryState: null,
            modalCategoryInputText: '',
            categoryToUpdate: null,
            list: list2
        });
    }

    handleInputChange() {

        this.setState({
            addCategoryInputText: this.categoriesComponent.addInput.value,
            taskInputText: this.tasksComponent.taskInput.value,
            searchInputText: this.searchInput.value,
        });

        if(this.state.modalCategoryActive) {
            this.setState({
                modalCategoryInputText: this.modalComponent.modalInput.value,
            });
        }
    }

    handleCountCategories() {
        this.setState({
            numOfCategories: this.state.numOfCategories + 1
        });
    }

    render() {

        this.list = this.state.list;

        return (
          <div className="App">
            <section className="App-header">
              <div>
                <h2>To-Do List</h2>
              </div>
              <div className="search-wrapper">
                  <div className="search__done">
                      <label><input type="checkbox" /> Show done</label>
                  </div>
                  <div className="search__box">
                    <input type="text" placeholder="Search"
                           ref={input => {this.searchInput = input}}
                           value={this.state.searchInputText}
                           onChange={this.handleInputChange}
                    />
                  </div>
              </div>
            </section>
            <ProgressBar list={this.state.list} />
            <main className="App-main">
                <Categories list={this.list}
                            actionSelect={this.handleSelectCategory}
                            actionAdd={this.handleAddCategory}
                            actionAddSubcategory={this.handleAddSubcategory}
                            actionUpdateCategory={this.handleUpdateCategory}
                            isActive={this.state.activeCategory}
                            actionChange={this.handleInputChange}
                            ref={component => this.categoriesComponent = component}
                            inputValue={this.state.addCategoryInputText}
                />
                <TaskView mode={this.state.mode}
                          actionChange={this.handleInputChange}
                          ref={component => this.tasksComponent = component}
                          inputValue={this.state.taskInputText}
                />
            </main>
            {this.state.modalCategoryActive &&
              <ModalCategory actionCancel={this.handleCancelModalCategory}
                             actionChange={this.handleInputChange}
                             actionSubmit={this.handleSubmitModalCategory}
                             text={this.state.modalCategoryInputText}
                             ref={component => this.modalComponent = component} />
            }
          </div>
        );
    }
}

export default App;
