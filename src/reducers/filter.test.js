/**
 * Created by Katarzyna_Bak on 31.05.2017.
 */

import filter from './filter';

describe('[Reducer] Filter', () => {

    it('reducer for FILTER_TASKS', () => {
        let state = {
            type: 'SHOW_ALL',
            pattern: ''
        };
        const state2 = {
            type: 'SHOW_DONE',
            pattern: ''
        };

        state = filter(state, { type: 'FILTER_TASKS', filter: 'SHOW_DONE'});
        expect(state).toEqual(state2);
    });

    it('reducer for SEARCH_TASK', () => {
        let state = {
            type: 'SHOW_ALL',
            pattern: ''
        };
        const state2 = {
            type: 'SHOW_ALL',
            pattern: 'item 1'
        };

        state = filter(state, { type: 'SEARCH_TASK', text: 'item 1'});
        expect(state).toEqual(state2);
    });

    it('reducer for default', () => {
        let state;
        const state2 = {
            type: 'SHOW_ALL',
            pattern: ''
        };

        state = filter(undefined, {});
        expect(state).toEqual(state2);
    });
});