import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers/';
import { addTask } from './actions/';

const store = createStore(todoApp);

console.log('store', store);
console.log(store.getState());


let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

// Dispatch some actions
store.dispatch(addTask('Learn about actions', 1, false));

ReactDOM.render(
    <Provider store={store} >
        <App/>
    </Provider>,
  document.getElementById('root')
);
