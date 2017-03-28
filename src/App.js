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
            categoryList : ["Category1", "Category1", "Category1"]
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
            <Categories />
            <Tasks />
        </main>
      </div>
    );
  }
}

export default App;
