/**
 * Created by Katarzyna_Bak on 27.03.2017.
 */

import React from 'react';
import './CategoryItem.css';


const Subcategories = (props) => {
    if (props.list.length === 0) {
        return null;
    }

    const subcategoryItems = props.list.map((category) =>
        <CategoryItem key={category.num.toString()}
                      item={category}
                      onSelect={props.action}
                      isActive={props.isActive}/>
    );

    return (
        <ul>
            {subcategoryItems}
        </ul>
    );
};

const CategoryItem = (props) => {

    let acitveClass = '';
    if (props.item === props.isActive && props.item.subcategories.length > 0) {
        acitveClass = 'active';
    }

    return (
        <li className={"CategoryItem " + acitveClass} onClick={() => props.onSelect(props.item) }>
            <div className="CategoryItem__wrapper">
                <span className="CategoryItem__down-icon">
                    <i className="icon-down-open"></i>
                </span>
                <span className="CategoryItem__name">{props.item.name}</span>
                <span className="CategoryItem__edit-icon icon-edit"></span>
                <span className="CategoryItem__delete-icon">
                    <i className="icon-trash-empty"></i>
                </span>
                <span className="CategoryItem__add-icon icon-plus"></span>
                <span className="CategoryItem__back-icon icon-reply"></span>
            </div>
            <Subcategories list={props.item.subcategories}
                           action={props.onSelect}
                           isActive={props.isActive} />
        </li>
    );
};

export default CategoryItem;
