/**
 * Created by Katarzyna_Bak on 28.03.2017.
 */

import React, { Component } from 'react';
import './Categories.css';
import CategoryItem from './CategoryItem';


class Categories extends Component {

    render() {

        const categoryItems = this.props.list.map((category) =>
            <CategoryItem key={category.num.toString()}
                          item={category}
                          action={this.props.action}
                          active={this.props.active} />
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