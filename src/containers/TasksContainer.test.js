/**
 * Created by Katarzyna_Bak on 31.05.2017.
 */

import React from 'react';
import { shallow } from 'enzyme';
import TasksContainer from './TasksContainer';
import configureStore from 'redux-mock-store';
import { addTask, doneTask } from '../actions';


describe('[Container] TaskContainer)', () => {

    const initialState = { todos: {
        present: [
            {id: 1, name: 'task 1', categoryId: 1, isDone: false},
            {id: 2, name: 'task 2', categoryId: 1, isDone: false}
        ]},
        filter: { type: 'SHOW_ALL', pattern: '' }
    };

    const initialStateDone = { todos: {
        present: [
            {id: 1, name: 'task 1', categoryId: 1, isDone: false},
            {id: 2, name: 'task 2', categoryId: 1, isDone: false}
        ]},
        filter: { type: 'SHOW_DONE', pattern: '' }
    };

    const mockStore = configureStore();
    let store, storeDone, taskContainer, taskContainerDone, categoryId;

    beforeEach( () => {
        categoryId = 1;
        store = mockStore(initialState);
        storeDone = mockStore(initialStateDone);
        taskContainer = shallow(<TasksContainer store={store} categoryId={categoryId} /> );
        taskContainerDone = shallow(<TasksContainer store={storeDone} categoryId={categoryId} /> );
    });

    it('render the connected component with filter SHOW_ALL', () => {
        expect(taskContainer.length).toEqual(1)
    });

    it('render the connected component with filter SHOW_DONE', () => {
        expect(taskContainerDone.length).toEqual(1)
    });

    it('check action on dispatching ', () => {
        let action;
        store.dispatch(addTask('some task to do', 1));
        store.dispatch(doneTask(2));
        action = store.getActions();
        expect(action[0].type).toBe('ADD_TASK');
        expect(action[1].type).toBe('DONE_TASK');
    });

});

