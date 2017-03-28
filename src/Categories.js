/**
 * Created by Katarzyna_Bak on 28.03.2017.
 */

import React, { Component } from 'react';
import './Categories.css';
import CategoryItem from './CategoryItem';


class Categories extends Component {

    render() {

        const categoryArray = [
            {num: 1, subcategories: []},
            {num: 2, subcategories: []},
            {num: 3, subcategories: [
                {num: 1, subcategories: []},
                {num: 2, subcategories: []},
                {num: 3, subcategories: []}
            ]}
        ];

        const categoryItems = categoryArray.map((category) =>
            <CategoryItem key={category.num.toString()} num={category.num} subcategories={category.subcategories}/>
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
};

export default Categories;