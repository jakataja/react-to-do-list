import React, { Component } from 'react';
import { BrowserRouter as Router, browserHistory, Route, Switch } from 'react-router-dom';
import './App.css';
import './fontello.css';
import ProgressBarContainer from './containers/ProgressBarContainer';
import CategoriesContainer from './containers/CategoriesContainer';
import ModalContainer from './containers/ModalContainer';
import FilterContainer from './containers/FilterContainer';
import MainView from './MainView';
import EditView from './EditView';
import UndoRedo from './containers/UndoRedo';

const Main = () => {
    return (
      <div className="App">
          <UndoRedo />
        <section className="App-header">
          <div>
            <h2>To-Do List</h2>
          </div>
          <FilterContainer />
        </section>
        <ProgressBarContainer />

        <main className="App-main" >

            <Switch>
                <Route exact path="/:done?" component={ CategoriesContainer } />
                <Route exact path="/category/:id/:done?" component={ MainView } />
                <Route path="/category/:cid/task/:id" component={ EditView } />
                <Route path="*" component={ CategoriesContainer } />
            </Switch>

        </main>
        <ModalContainer />
      </div>
    );
};

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
