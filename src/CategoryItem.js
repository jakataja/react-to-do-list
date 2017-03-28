/**
 * Created by Katarzyna_Bak on 27.03.2017.
 */

import React, { Component } from 'react';
import './CategoryItem.css';


function Subcategories(props) {
    if (props.categoryArray.length === 0) {
        return null;
    }

    const subcategoryItems = props.categoryArray.map((category) =>
        <CategoryItem key={category.num.toString()} num={category.num} subcategories={category.subcategories}/>
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
                    <span className="category-list__item-name">Category {this.props.num}</span>
                    <span className="category-list__item__edit-icon icon-edit"></span>
                    <span className="category-list__item__delete-icon">
                        <i className="icon-trash-empty"></i>
                    </span>
                    <span className="category-list__item__add-icon icon-plus"></span>
                </div>
                <Subcategories categoryArray={this.props.subcategories} />
            </li>
        );
    }
}

export default CategoryItem;
