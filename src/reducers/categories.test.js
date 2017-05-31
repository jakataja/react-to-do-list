/**
 * Created by Katarzyna_Bak on 31.05.2017.
 */

import categories from './categories';

describe('[Reducer] Categories', () => {

    it('reducer for ADD_CATEGORY', () => {
        let state = [
            {id: 10, name: "Category 10", parentId: null }
        ];
        const state2 = [
            {id: 11, name: "Category 11", parentId: null },
            {id: 10, name: "Category 10", parentId: null }
        ];

        state = categories(state, { type: 'ADD_CATEGORY', name: 'Category 11'});
        expect(state).toEqual(state2);
    });

    it('reducer for ADD_SUBCATEGORY', () => {
        let state = [
            {id: 10, name: "Category 10", parentId: null }
        ];
        const state2 = [
            {id: 12, name: "Category 11", parentId: 10 },
            {id: 10, name: "Category 10", parentId: null}
        ];

        state = categories(state, { type: 'ADD_SUBCATEGORY', name: 'Category 11', parentId: 10});
        expect(state).toEqual(state2);
    });

    it('reducer for EDIT_CATEGORY', () => {
        let state = [
            {id: 10, name: "Category 10", parentId: null },
            {id: 11, name: "Category 11", parentId: null }
        ];
        const state2 = [
            {id: 10, name: "Category 100", parentId: null },
            {id: 11, name: "Category 11", parentId: null }
        ];

        state = categories(state, { type: 'EDIT_CATEGORY', name: 'Category 100', id: 10});
        expect(state).toEqual(state2);
    });

    it('reducer for DELETE_CATEGORY', () => {
        let state = [
            {id: 10, name: "Category 10", parentId: null },
            {id: 11, name: "Category 11", parentId: null }
        ];
        const state2 = [
            {id: 10, name: "Category 10", parentId: null }
        ];

        state = categories(state, { type: 'DELETE_CATEGORY', id: 11});
        expect(state).toEqual(state2);
    });

    it('reducer for default', () => {
        let state;
        const state2 = [
            {id: 1, name: "Category 1", parentId: null },
            {id: 2, name: "Category 2", parentId: null },
            {id: 3, name: "Category 3", parentId: null },
            {id: 4, name: "Category 4", parentId: null },
            {id: 5, name: "Category 5", parentId: 1 },
            {id: 6, name: "Category 6", parentId: 1 },
            {id: 7, name: "Category 7", parentId: 2 },
            {id: 8, name: "Category 8", parentId: 4 },
            {id: 9, name: "Category 9", parentId: 4 },
            {id: 10, name: "Category 10", parentId: 4 }
        ];

        state = categories(undefined, {});
        expect(state).toEqual(state2);
    });
});