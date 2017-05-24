/**
 * Created by Katarzyna_Bak on 28.03.2017.
 */

import React from 'react';
import './Categories.css';
import CategoryItem from './CategoryItem';

const Categories = ({ categories, onAddCategory, onAddSubcategory, onDeleteCategory, onEditCategory }) => {

    const level = categories.filter((category) => {
            return category.parentId === null;
        }
    );

    const categoryItems = level.map((category) =>

        <CategoryItem key={category.id.toString()}
                      onAddSubcategory={onAddSubcategory}
                      onDeleteCategory={onDeleteCategory}
                      onEditCategory={onEditCategory}
                      {...category}
                      categories={categories}
        />
    );

    let input;

    return (

        <section className="categories">
            <div className="categories-add-form">
                <input type="text" placeholder="Enter category title"
                    ref={ node => {input = node} }
                />
                <button type="button" onClick={() => {onAddCategory(input.value); input.value = '';}}>Add</button>
            </div>

            <ul className="category-list">
                {categoryItems}
            </ul>
        </section>
    );
};

export default Categories;
