/**
 * Created by Kate on 2017-05-30.
 */
import * as actions from './index';

describe('Actions', () => {

    it('should return ADD_CATEGORY action', () => {
        expect(actions.addCategory('new category')).toEqual({type: 'ADD_CATEGORY', name: 'new category'});
    });

    it('should return ADD_SUBCATEGORY action', () => {
        expect(actions.addSubcategory('new subcategory', 13)).toEqual({type: 'ADD_SUBCATEGORY', name: 'new subcategory', parentId: 13});
    });

    it('should return EDIT_CATEGORY action', () => {
        expect(actions.editCategory(2, 'some category')).toEqual({type: 'EDIT_CATEGORY', id: 2, name: 'some category'});
    });

    it('should return DELETE_CATEGORY action', () => {
        expect(actions.deleteCategory(1)).toEqual({type: 'DELETE_CATEGORY', id: 1});
    });

    it('should return ADD_TASK action', () => {
        expect(actions.addTask('new task', 14)).toEqual({type: 'ADD_TASK', name: 'new task', parent: 14});
    });

    it('should return UPDATE_TASK action', () => {
        expect(actions.updateTask(23, 'task new name', false)).toEqual({type: 'UPDATE_TASK', id: 23, name: 'task new name', done: false});
    });

    it('should return DELETE_TASK action', () => {
        expect(actions.deleteTask(3)).toEqual({type: 'DELETE_TASK', parent: 3});
    });

    it('should return MOVE_TASK action', () => {
        expect(actions.moveTask(3, 14)).toEqual({type: 'MOVE_TASK', id: 3, parentId: 14});
    });

    it('should return DONE_TASK action', () => {
        expect(actions.doneTask(3)).toEqual({type: 'DONE_TASK', id: 3});
    });

    it('should return SEARCH_TASK action', () => {
        expect(actions.searchTask('task to find')).toEqual({type: 'SEARCH_TASK', text: 'task to find'});
    });

    it('should return FILTER_TASKS action', () => {
        expect(actions.filterTask('SHOW_ALL')).toEqual({type: 'FILTER_TASKS', filter: 'SHOW_ALL'});
    });

    it('should return FILTER_TASKS action', () => {
        expect(actions.showModal(2, 'EDIT')).toEqual({type: 'FILTER_TASKS', id: 2, mode: 'EDIT'});
    });

    it('should return HIDE_MODAL action', () => {
        expect(actions.hideModal()).toEqual({type: 'HIDE_MODAL'});
    });

});
