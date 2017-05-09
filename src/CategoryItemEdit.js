/**
 * Created by Katarzyna_Bak on 27.03.2017.
 */

import React from 'react';
import './CategoryItem.css';
import {Link} from 'react-router-dom';

const Subcategories = (props) => {
    if (props.list.length === 0) {
        return null;
    }

    const subcategoryItems = props.list.map((category) =>
        <CategoryItemEdit key={category.id.toString()}
                      item={category}
                      onSelect={props.action}
                      isActive={props.isActive}
                      actionAddSubcategory={props.actionAddSubcategory}
                      actionUpdateCategory={props.actionUpdateCategory}
                      categories={props.categories}

        />
    );

    return (
        <ul>
            {subcategoryItems}
        </ul>
    );
};

const CategoryItemEdit = (props) => {

    let acitveClass = '';
    // if (props.item === props.isActive && props.item.subcategories.length > 0) {
    if (props.item === props.isActive) {
        acitveClass = 'active';
    }

    const sublevel = props.categories.filter((item) => {
        return item.parentId === props.item.id;
    });

    return (
        <li className={"CategoryItem " + acitveClass} >
            <div className="CategoryItem__wrapper">
                <span className="CategoryItem__down-icon">
                    <i className="icon-down-open"></i>
                </span>
                <span className="CategoryItem__name"
                      onClick={() => props.onSelect(props.item) }>
                    <Link to={"/category/" + props.item.id}>{props.item.name}</Link>
                </span>
                {/*<span className="CategoryItem__edit-icon icon-edit"*/}
                      {/*onClick={() => props.actionUpdateCategory(props.item) }*/}
                {/*></span>*/}
                {/*<span className="CategoryItem__delete-icon">*/}
                    {/*<i className="icon-trash-empty"></i>*/}
                {/*</span>*/}
                <span className="CategoryItem__add-icon icon-plus" onClick={() => props.actionAddSubcategory(props.item) }></span>
                <span className="CategoryItem__back-icon icon-reply"></span>
            </div>
            <Subcategories list={sublevel}
                           action={props.onSelect}
                           isActive={props.isActive}
                           actionAddSubcategory={props.actionAddSubcategory}
                           actionUpdateCategory={props.actionUpdateCategory}
                           categories={props.categories}
            />
        </li>
    );
};

export default CategoryItemEdit;
