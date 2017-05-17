/**
 * Created by Katarzyna_Bak on 15.05.2017.
 */
import { combineReducers } from 'redux';
import todos from './todos';

const todoApp = combineReducers({
    todos
});

export default todoApp;