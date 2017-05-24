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
        this.handleAddSubcategory = this.handleAddSubcategory.bind(this);
        this.handleUpdateCategory = this.handleUpdateCategory.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCancelModalCategory = this.handleCancelModalCategory.bind(this);
        this.handleSubmitModalCategory = this.handleSubmitModalCategory.bind(this);
        this.handleShowDone =  this.handleShowDone.bind(this);
    }

    handleSelectCategory(category) {
        this.setState({
            activeCategory: category
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

    handleShowDone() {
        this.setState({ showDone: this.doneCheckbox.checked });
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
            <ProgressBarContainer />

            <main className="App-main" >

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
            <Router history={browserHistory} >
            <Main />
            </Router>
        )
    }
}

export default App;
