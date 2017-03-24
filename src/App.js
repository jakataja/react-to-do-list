import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ProgressBar from './ProgressBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="App-header">
          <h2>To-Do List</h2>
        </section>
        <ProgressBar />
        <main>
            {/*<Categories />*/}
            {/*<Tasks />*/}
        </main>
      </div>
    );
  }
}

export default App;
