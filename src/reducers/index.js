/**
 * Created by Katarzyna_Bak on 15.05.2017.
 */
import { combineReducers } from 'redux';
import todos from './todos';
import categories from './categories';
import modal from './modal';
import filter from './filter';
import undoable from 'redux-undo';

const todoApp = combineReducers({
    todos: undoable(todos),
    categories: undoable(categories),
    modal,
    filter
});

export default todoApp;