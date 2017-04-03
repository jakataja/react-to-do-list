/**
 * Created by Katarzyna_Bak on 27.03.2017.
 */

import React, { Component } from 'react';
import './CategoryItem.css';


function Subcategories(props) {
    if (props.list.length === 0) {
        return null;
    }

    const subcategoryItems = props.list.map((category) =>
        <CategoryItem key={category.num.toString()} item={category} />
    );

    return (
        <ul>
            {subcategoryItems}
        </ul>
    );
}


class CategoryItem extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <li className="category-list__item">
                <div className="category-list__item-wrapper">
                    <span className="category-list__item-name">{this.props.item.name}</span>
                    <span className="category-list__item__edit-icon icon-edit"></span>
                    <span className="category-list__item__delete-icon">
                        <i className="icon-trash-empty"></i>
                    </span>
                    <span className="category-list__item__add-icon icon-plus"></span>
                    <span className="category-list__item__back-icon icon-reply"></span>
                </div>
                <Subcategories list={this.props.item.subcategories} />
            </li>
        );
    }
}

export default CategoryItem;
