/**
 * Created by Katarzyna_Bak on 28.03.2017.
 */

import React from 'react';
import './Categories.css';
import CategoryItem from './CategoryItem';

const Categories = (props) => {

    const categoryItems = props.list.map((category) =>
        <CategoryItem key={category.num.toString()}
                      item={category}
                      onSelect={props.action}
                      isActive={props.isActive} />
    );

    return (
        <section className="categories">
            <div className="categories-add-form">
                <input type="text" placeholder="Enter category title" />
                <button type="button">Add</button>
            </div>

            <ul className="category-list">
                {categoryItems}
            </ul>
        </section>
    );

}

export default Categories;