/**
 * Created by Katarzyna_Bak on 27.03.2017.
 */

import React from 'react';
import './CategoryItem.css';
import { Link } from 'react-router-dom';

const Subcategories = (props) => {

    if (props.categories.length === 0) {
        return null;
    }

    const subcategoryItems = props.categories.map(category =>
        <CategoryItem key={category.id.toString()}
                      onAddSubcategory={props.onAddSubcategory}
                      onDeleteCategory={props.onDeleteCategory}
                      onEditCategory={props.onEditCategory}
                      {...category}
                      categories={props.categories}
                      active={props.active}
        />
    );

    return (
        <ul>
            {subcategoryItems}
        </ul>
    );
};

const CategoryItem = (props) => {

    const {id, name, categories, active, onAddSubcategory, onDeleteCategory, onEditCategory } = props;

    let acitveClass = '';
    if (active.indexOf(id) !== -1) {
        acitveClass = 'active';
    }

    const sublevel = categories.filter(item => {
        return item.parentId === id;
    });

    return (
        <li className={`CategoryItem ${acitveClass}`} >
            <div className="CategoryItem__wrapper">
                <span className="CategoryItem__down-icon">
                    <i className="icon-down-open"></i>
                </span>
                <span className="CategoryItem__name">
                    <Link to={`/category/${id}`}>{name}</Link>
                </span>
                <span className="CategoryItem__edit-icon icon-edit"
                      onClick={() => onEditCategory()}
                ></span>
                <span className="CategoryItem__delete-icon icon-trash-empty"
                      onClick={ () => {
                          onDeleteCategory(id);
                      }}
                ></span>
                <span className="CategoryItem__add-icon icon-plus" onClick={() => onAddSubcategory() }></span>
            </div>

            <Subcategories
                           onAddSubcategory={onAddSubcategory}
                           onDeleteCategory={onDeleteCategory}
                           onEditCategory={onEditCategory}
                           active={active}
                           categories={sublevel}
            />
        </li>
    );
};
export default CategoryItem;
