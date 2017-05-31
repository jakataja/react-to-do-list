/**
 * Created by Katarzyna_Bak on 31.05.2017.
 */

import modal from './modal';

describe('[Reducer] Modal', () => {

    it('reducer for SHOW_MODAL', () => {
        let state = {
            categoryId: null,
            isActive: false,
            type: null
        };
        const state2 = {
            categoryId: 1,
            isActive: true,
            type: 'EDIT'
        };

        state = modal(state, { type: 'SHOW_MODAL', id: 1, mode: 'EDIT'});
        expect(state).toEqual(state2);
    });

    it('reducer for HIDE_MODAL', () => {
        let state = {
            categoryId: 1,
            isActive: true,
            type: 'EDIT'
        };
        const state2 = {
            categoryId: null,
            isActive: false,
            type: null
        };

        state = modal(state, { type: 'HIDE_MODAL'});
        expect(state).toEqual(state2);
    });

    it('reducer for default', () => {
        let state;
        const state2 = {
            categoryId: null,
            isActive: false,
            type: null
        };

        state = modal(undefined, {});
        expect(state).toEqual(state2);
    });
});