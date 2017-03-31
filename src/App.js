import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './fontello.css';
import ProgressBar from './ProgressBar';
import Categories from './Categories';
import Tasks from './Tasks';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list : [
                {num: 1, name: "Category 1", subcategories: [], task: [{name: "To-do item 1"}] },
                {num: 2, name: "Category 2", subcategories: [], task: [
                    {name: "To-do item 1"},
                    {name: "To-do item 2"}
                ]},
                {num: 3, name: "Category 3", subcategories: [
                    {num: 1, name: "Subcategory 1", subcategories: []},
                    {num: 2, name: "Subcategory 2", subcategories: []},
                    {num: 3, name: "Subcategory 3", subcategories: []}
                ], task: [
                    {name: "To-do item 1"},
                    {name: "To-do item 2"},
                    {name: "To-do item 3"}
                ]}
            ]
        }
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
                <input type="text" placeholder="Search"/>
              </div>
          </div>
        </section>
        <ProgressBar />
        <main className="App-main">
            <Categories list={this.state.list} />
            <Tasks />
        </main>
      </div>
    );
  }
}

export default App;
