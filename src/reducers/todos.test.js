/**
 * Created by Katarzyna_Bak on 31.05.2017.
 */

import todos from './todos';

describe('[Reducer] Todos', () => {

    it('reducer for ADD_TASK', () => {
        let state = [
            {id: 5, name: 'task 1', categoryId: 1, isDone: false}
        ];
        const state2 = [
            {id: 5, name: 'task 1', categoryId: 1, isDone: false},
            {id: 6, name: 'task 2', categoryId: 1, isDone: false}
        ];

        state = todos(state, { type: 'ADD_TASK', name: 'task 2', parent: 1});
        expect(state).toEqual(state2);
    });

    it('reducer for UPDATE_TASK', () => {
        let state = [
            {id: 5, name: 'task 5', categoryId: 1, isDone: false},
            {id: 6, name: 'task 6', categoryId: 1, isDone: false}
        ];
        const state2 = [
            {id: 5, name: 'task 1 edited', categoryId: 1, isDone: false},
            {id: 6, name: 'task 6', categoryId: 1, isDone: false}
        ];

        state = todos(state, { type: 'UPDATE_TASK', id: 5, name: 'task 1 edited', done: false});
        expect(state).toEqual(state2);
    });

    it('reducer for MOVE_TASK', () => {
        let state = [
            {id: 5, name: 'task 5', categoryId: 1, isDone: false},
            {id: 6, name: 'task 6', categoryId: 1, isDone: false}
        ];
        const state2 = [
            {id: 5, name: 'task 5', categoryId: 1, isDone: false},
            {id: 6, name: 'task 6', categoryId: 2, isDone: false}
        ];

        state = todos(state, { type: 'MOVE_TASK', id: 6, parentId: 2});
        expect(state).toEqual(state2);
    });

    it('reducer for DELETE_TASK', () => {
        let state = [
            {id: 5, name: 'task 5', categoryId: 1, isDone: false},
            {id: 6, name: 'task 6', categoryId: 2, isDone: false}
        ];
        const state2 = [
            {id: 5, name: 'task 5', categoryId: 1, isDone: false},
        ];

        state = todos(state, { type: 'DELETE_TASK', parent: 2});
        expect(state).toEqual(state2);
    });

    it('reducer for DONE_TASK', () => {
        let state = [
            {id: 5, name: 'task 5', categoryId: 1, isDone: false},
            {id: 6, name: 'task 6', categoryId: 2, isDone: false}
        ];
        const state2 = [
            {id: 5, name: 'task 5', categoryId: 1, isDone: false},
            {id: 6, name: 'task 6', categoryId: 2, isDone: true}
        ];

        state = todos(state, { type: 'DONE_TASK', id: 6, isDone: true});
        expect(state).toEqual(state2);
    });

    it('reducer for default', () => {
        let state = [
            {id: 5, name: 'task 5', categoryId: 1, isDone: false},
            {id: 6, name: 'task 6', categoryId: 2, isDone: false}
        ];
        const state2 = [
            {id: 5, name: 'task 5', categoryId: 1, isDone: false},
            {id: 6, name: 'task 6', categoryId: 2, isDone: false}
        ];

        state = todos(state, {});
        expect(state).toEqual(state2);
    });

    it('reducer for default', () => {
        let state;
        const state2 = [
            {id: 1, name: "To-do item 1", categoryId: 1, isDone: false},
            {id: 2, name: "To-do item 2", categoryId: 2, isDone: false},
            {id: 3, name: "To-do item 3", categoryId: 4, isDone: false},
            {id: 4, name: "To-do item 4", categoryId: 4, isDone: true},
            {id: 5, name: "To-do item 5", categoryId: 4, isDone: false}
        ];

        state = todos(undefined, {});
        expect(state).toEqual(state2);
    });
});