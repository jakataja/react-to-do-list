/**
 * Created by Katarzyna_Bak on 15.05.2017.
 */
import { combineReducers } from 'redux';
import todos from './todos';
import categories from './categories';

const todoApp = combineReducers({
    todos,
    categories
});

export default todoApp;