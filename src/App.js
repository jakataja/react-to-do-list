import React, { Component } from 'react';
import { BrowserRouter as Router, browserHistory, Route, Switch } from 'react-router-dom';
import { fromJS, List } from 'immutable';
import './App.css';
import './fontello.css';
import ProgressBarContainer from './containers/ProgressBarContainer';
import CategoriesContainer from './containers/CategoriesContainer';
import ModalCategory from './ModalCategory';
import MainView from './MainView';
import EditView from './EditView';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
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
            nextTaskId: 6,
            showDone: false,
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
        this.handleShowDone =  this.handleShowDone.bind(this);
        this.handleSetDone =  this.handleSetDone.bind(this);
        this.handleSaveTask =  this.handleSaveTask.bind(this);
    }

    handleSelectCategory(category) {
        this.setState({
            activeCategory: category
        });
    }

    handleAddCategory(category) {
        if(category.name === '') return;

        const newCategory = {
            id: this.state.nextCatId,
            name: category.name,
            parentId: null
        };

        let newList = this.state.categories;
        newList.unshift(newCategory);

        this.setState({
            categories: newList,
            nextCatId: this.state.nextCatId + 1
        });
    }

    handleAddTask(task) {

        if(task.name === '') return;

        const newTask = {
            id: this.state.nextTaskId,
            name: task.name,
            categoryId: task.categoryId,
            isDone: false
        };

        let newList = this.state.tasks;
        newList.unshift(newTask);

        this.setState({
            tasks: newList,
            nextTaskId: this.state.nextTaskId + 1
        });
    }

    handleAddSubcategory(parent) {

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

    handleSubmitModalCategory(categoryName) {

        if(this.state.modalCategoryState === 'update') {
            const list1 = fromJS(this.state.categories);
            const categoryIndex = this.state.categories.indexOf(this.state.categoryToUpdate);
            const list2 = list1.updateIn([categoryIndex, 'name'], name => categoryName).toJS();

            this.setState({
                modalCategoryActive: false,
                modalCategoryState: null,
                categoryToUpdate: null,
                categories: list2
            });

        } else if(this.state.modalCategoryState === 'add') {

            if(categoryName === '') return;

            const newCategory = {
                id: this.state.nextCatId,
                name: categoryName,
                parentId: this.state.categoryToUpdate.id
            };

            let list2 = this.state.categories;
            list2.unshift(newCategory);

            this.setState({
                modalCategoryActive: false,
                modalCategoryState: null,
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

    handleShowDone() {
        this.setState({ showDone: this.doneCheckbox.checked });
    }

    handleSetDone(task) {

        let tasks = fromJS(this.state.tasks);
        const taskIndex = this.state.tasks.indexOf(task);
        const newTasks = tasks.updateIn([taskIndex, 'isDone'], isDone => !task.isDone).toJS();

        this.setState({tasks: newTasks});
    }

    handleSaveTask(task) {

        const tasks = List(this.state.tasks);
        let taskIndex;
        this.state.tasks.filter((item, index) => {
            if(item.id === task.id) {
                taskIndex = index;
                return true;
            }
            return false;
        });
        const newTasks = tasks.update(taskIndex, item => task).toJS();

        this.setState({tasks: newTasks});

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
                      <label><input type="checkbox"
                                    ref={ input => {this.doneCheckbox = input}}
                                    onChange={this.handleShowDone}
                      /> Show done</label>
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
            {/*<ProgressBar tasks={this.state.tasks}*/}
                         {/*categories={this.state.categories}*/}
            {/*/>*/}
              <ProgressBarContainer />

            <main className="App-main">

                <Switch>
                    <Route exact path="/" component={ CategoriesContainer } />
                    <Route path="/category/:id/:done?" component={ MainView } />
                    <Route path="/task/:id" component={ EditView } />
                </Switch>

            </main>


            {this.state.modalCategoryActive &&
              <ModalCategory actionCancel={this.handleCancelModalCategory}
                             // actionChange={this.handleInputChange}
                             actionSubmit={this.handleSubmitModalCategory}
                             text={this.state.modalCategoryInputText}
                             ref={component => this.modalComponent = component} />
            }
          </div>
        );
    }
}

class App extends Component {


    render() {
        return (
            //<Router>
                //<Route component={Main} >
                    //<Switch>
                    //<Route path="/" component={Categories} />
                    //<Route path="/category/:id" component={Categories} />
                    //<Route path="/task/:id" component={TaskView} />
                    //</Switch>
                //</Route>
            //</Router>

                <Router history={browserHistory} >
                    <Main />
                </Router>

        )
    }
}

export default App;
