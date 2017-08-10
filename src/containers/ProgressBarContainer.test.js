/**
 * Created by Katarzyna_Bak on 01.06.2017.
 */

import React from 'react';
import { shallow } from 'enzyme';
import ProgressBarContainer from './ProgressBarContainer';
import configureStore from 'redux-mock-store';
// import { addTask, doneTask } from '../actions';


describe('[Container] ProgressBarContainer)', () => {

    const initialState = { todos: {
        present: [
            {id: 1, name: 'task 1', categoryId: 1, isDone: false},
            {id: 2, name: 'task 2', categoryId: 1, isDone: false}
        ]}, categories: {
        present: [
                {id: 1, name: 'category 1', parentId: null},
                {id: 2, name: 'category 2', parentId: null}
        ]}
    };

    const initialStateDone = { todos: {
        present: [
            {id: 1, name: 'task 1', categoryId: 1, isDone: true},
            {id: 2, name: 'task 2', categoryId: 1, isDone: true}
        ]}, categories: {
        present: [
            {id: 1, name: 'category 1', parentId: null},
            {id: 2, name: 'category 2', parentId: null}
        ]}
    };

    const mockStore = configureStore();
    let store, storeDone, progressbarContainer, progressbarContainerDone, categoryId;

    beforeEach( () => {
        categoryId = 1;
        store = mockStore(initialState);
        storeDone = mockStore(initialStateDone);
        progressbarContainer = shallow(<ProgressBarContainer store={store} /> );
        progressbarContainerDone = shallow(<ProgressBarContainer store={storeDone} /> );
    });

    it('render the connected component', () => {
        expect(progressbarContainer.length).toEqual(1)
    });

    it('render the connected component with taska done', () => {
        expect(progressbarContainerDone.length).toEqual(1)
    });

});

