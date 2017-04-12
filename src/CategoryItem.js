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
        <CategoryItem key={category.num.toString()}
                      item={category}
                      action={props.action}
                      active={props.active}/>
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

        let acitveClass = '';
        if (this.props.item === this.props.active && this.props.item.subcategories.length > 0) {
            acitveClass = 'active';
        }

        return (
            <li className={"CategoryItem " + acitveClass} onClick={e => this.props.action(this.props.item) }>
                <div className="CategoryItem__wrapper">
                    <span className="CategoryItem__down-icon">
                        <i className="icon-down-open"></i>
                    </span>
                    <span className="CategoryItem__name">{this.props.item.name}</span>
                    <span className="CategoryItem__edit-icon icon-edit"></span>
                    <span className="CategoryItem__delete-icon">
                        <i className="icon-trash-empty"></i>
                    </span>
                    <span className="CategoryItem__add-icon icon-plus"></span>
                    <span className="CategoryItem__back-icon icon-reply"></span>
                </div>
                <Subcategories list={this.props.item.subcategories}
                               action={this.props.action}
                               active={this.props.active} />
            </li>
        );
    }
}

export default CategoryItem;
