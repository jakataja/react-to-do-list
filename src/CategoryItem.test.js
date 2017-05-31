/**
 * Created by Katarzyna_Bak on 31.05.2017.
 */

import React from 'react';
import { shallow } from 'enzyme';
import CategoryItem from './CategoryItem';


describe('CategoryItem', () => {

    let categoryItem, props, id, name, categories, active,
        onAddSubcategory, onDeleteCategory, onEditCategory;

    beforeEach(() => {
        onAddSubcategory = jest.fn();
        onDeleteCategory = jest.fn();
        onEditCategory = jest.fn();
        id = 1;
        name = 'category 1';
        categories = [
            { id:1, name: 'category 1', parentId: null},
            { id:2, name: 'category 2', parentId: 1}
        ];
        active = [1,2];
        props = {id: 1, name: 'category 1', categories: categories, active: active,
            onAddSubcategory: onAddSubcategory,
            onDeleteCategory: onDeleteCategory,
            onEditCategory: onEditCategory
        };

        categoryItem = shallow(<CategoryItem {...props} />);
    });

    it('renders without crashing', () => {
        shallow(<CategoryItem {...props} />);
    });

    it('call onEditCategory on click on icon', () => {
        expect(categoryItem.find('.CategoryItem__edit-icon').simulate('click'));
        expect(onEditCategory).toBeCalled();
    });

    it('call onDeleteCategory on click on icon', () => {
        expect(categoryItem.find('.CategoryItem__delete-icon').simulate('click'));
        expect(onDeleteCategory).toBeCalled();
    });

    it('call onAddSubcategory on click on icon', () => {
        expect(categoryItem.find('.CategoryItem__add-icon').simulate('click'));
        expect(onAddSubcategory).toBeCalled();
    });
});
