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
});

