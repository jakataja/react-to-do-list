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
                ], tasks: [
                    {id: 12, name: "To-do item 1", isDone: false}
                ]},
                {id: 2, name: "Category 2", subcategories: [
                    {id: 7, name: "Subcategory 2", subcategories: [], tasks: []}
                ], tasks: [
                    {id: 11, name: "To-do item 1", isDone: true}
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
            categories: [
                {id: 1, name: "Category 1", parentId: null },
                {id: 2, name: "Category 2", parentId: null },
                {id: 3, name: "Category 3", parentId: null },
                {id: 4, name: "Category 4", parentId: null },
                {id: 5, name: "Category 5", parentId: 1 },
                {id: 6, name: "Category 6", parentId: 1 },
                {id: 7, name: "Category 7", parentId: 2 },
                {id: 8, name: "Category 8", parentId: 4 },
                {id: 9, name: "Category 9", parentId: 4 },
                {id: 10, name: "Category 10", parentId: 4 },
            ],
            tasks: [
                {id: 1, name: "To-do item 1", categoryId: 1, isDone: false},
                {id: 2, name: "To-do item 2", categoryId: 2, isDone: false},
                {id: 3, name: "To-do item 3", categoryId: 4, isDone: false},
                {id: 4, name: "To-do item 4", categoryId: 4, isDone: true},
                {id: 5, name: "To-do item 5", categoryId: 4, isDone: false}
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
            nextCatId: 13,
            nextTaskId: 4,
        };

        this.handleSelectCategory = this.handleSelectCategory.bind(this);
        this.handleAddCategory = this.handleAddCategory.bind(this);
        this.handleAddTask = this.handleAddTask.bind(this);
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
            // subcategories: [],
            // tasks: []
            parentId: null
        };

        // let newList = this.state.list;
        // newList.unshift(newCategory);

        let newList = this.state.categories;
        newList.unshift(newCategory);

        this.setState({
            // list: newList,
            categories: newList,
            addCategoryInputText: '',
            nextCatId: this.state.nextCatId + 1
        });
    }

    handleAddTask(e) {
        if(this.state.taskInputText === '') return;

        const newTask = {
            id: this.state.nextTaskId,
            name: this.state.taskInputText,
            // subcategories: [],
            // tasks: []
            categoryId: this.state.activeCategory.id,
            isDone: false
        };

        let newList = this.state.tasks;
        newList.unshift(newTask);

        this.setState({
            // list: newList,
            tasks: newList,
            taskInputText: '',
            nextTaskId: this.state.nextTaskId + 1
        });
    }

    getPath(list, node) {
        console.log('id', node.id);

        let path = [];

        return path;
    }

    handleAddSubcategory(parent) {

        this.getPath(this.state.list, parent);

        this.setState({
            modalCategoryActive: true,
            modalCategoryState: 'add',
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

        if(this.state.modalCategoryState === 'update') {
            // const list1 = fromJS(this.state.list);
            const list1 = fromJS(this.state.categories);
            const categoryIndex = this.state.categories.indexOf(this.state.categoryToUpdate);
            const list2 = list1.updateIn([categoryIndex, 'name'], name => this.state.modalCategoryInputText).toJS();

            this.setState({
                modalCategoryActive: false,
                modalCategoryState: null,
                modalCategoryInputText: '',
                categoryToUpdate: null,
                // list: list2
                categories: list2
            });

        } else if(this.state.modalCategoryState === 'add') {

            if(this.state.modalCategoryInputText === '') return;

            const newCategory = {
                id: this.state.nextCatId,
                name: this.state.modalCategoryInputText,
                parentId: this.state.categoryToUpdate.id
            };

            let list2 = this.state.categories;
            list2.unshift(newCategory);

            this.setState({
                modalCategoryActive: false,
                modalCategoryState: null,
                modalCategoryInputText: '',
                categoryToUpdate: null,
                nextCatId: this.state.nextCatId + 1
            });

        }
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
                {/*<Categories list={this.list}*/}
                <Categories list={this.state.categories}
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
                          actionAdd={this.handleAddTask}
                          ref={component => this.tasksComponent = component}
                          inputValue={this.state.taskInputText}
                          category={this.state.activeCategory}
                          tasks={this.state.tasks}
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
