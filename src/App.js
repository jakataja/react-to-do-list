import React, { Component } from 'react';
import './App.css';
import './fontello.css';
import ProgressBar from './ProgressBar';
import Categories from './Categories';
import TaskView from './TaskView';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list : [
                {num: 1, name: "Category 1", subcategories: [
                    {num: 1, name: "Subcategory 1", subcategories: []},
                    {num: 2, name: "Subcategory 2", subcategories: []}
                ], tasks: [{name: "To-do item 1"}] },
                {num: 2, name: "Category 2", subcategories: [
                    {num: 2, name: "Subcategory 2", subcategories: []}
                ], tasks: [
                    {name: "To-do item 1"}
                ]},
                {num: 3, name: "Category 3", subcategories: [], tasks: []},
                {num: 4, name: "Category 4", subcategories: [
                    {num: 1, name: "Subcategory 1", subcategories: []},
                    {num: 2, name: "Subcategory 2", subcategories: []},
                    {num: 3, name: "Subcategory 3", subcategories: []}
                ], tasks: [
                    {name: "To-do item 1"},
                    {name: "To-do item 2"},
                    {name: "To-do item 3"}
                ]}
            ],
            mode: 0, // 0 - display, 1 - edit
            activeCategory: null,
            addCategoryInputText: '',
            taskInputText: '',
            searchInputText: '',
        };

        this.handleSelectCategory = this.handleSelectCategory.bind(this);
        this.handleAddCategory = this.handleAddCategory.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSelectCategory(category) {
        this.setState({
            activeCategory: category
        });
    }

    handleAddCategory(e) {
        if(this.state.addCategoryInputText === '') return;

        const newCategory = {
            num: this.state.list.length + 1,
            name: this.state.addCategoryInputText,
            subcategories: [],
            tasks: []
        };
        let newList = this.state.list;
        newList.unshift(newCategory);
        this.setState({ list: newList});
    }

    handleInputChange() {
        this.setState({
            addCategoryInputText: this.categoriesComponent.addInput.value,
            taskInputText: this.tasksComponent.taskInput.value,
            searchInputText: this.searchInput.value
        });
    }

    render() {

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
                           onChange={this.handleInputChange}/>
                  </div>
              </div>
            </section>
            <ProgressBar />
            <main className="App-main">
                <Categories list={this.state.list}
                            actionSelect={this.handleSelectCategory}
                            actionAdd={this.handleAddCategory}
                            isActive={this.state.activeCategory}
                            actionChange={this.handleInputChange}
                            ref={component => this.categoriesComponent = component}
                />
                <TaskView mode={this.state.mode}
                          actionChange={this.handleInputChange}
                          ref={component => this.tasksComponent = component}/>
            </main>
          </div>
        );
    }
}

export default App;
