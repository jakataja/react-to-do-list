/**
 * Created by Katarzyna_Bak on 15.05.2017.
 */
import * as types from '../actionTypes';

export const addCategory = (name) => ({ type: types.ADD_CATEGORY, name});
export const addSubcategory = (name, parent) => ({ type: types.ADD_SUBCATEGORY, name, parent});
export const editCategory = (id, name) => ({ type: types.EDIT_CATEGORY, id, name});
export const deleteCategory = (id) => ({ type: types.DELETE_CATEGORY, id});

export const addTask = (name, parent, done) => ({ type: types.ADD_TASK, name, parent, done });
export const editTask = (name, done) => ({ type: types.EDIT_TASK });
export const deleteTask = (name, done) => ({ type: types.DELETE_TASK });
export const moveTask = (id, parentId) => ({ type: types.MOVE_TASK });

export const searchTask = (text) => ({ type: types.SEARCH_TASK, text });
export const filterDone = () => ({ type: types.FILTER_DONE });

