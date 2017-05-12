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
        <CategoryItem key={category.id.toString()}
                      item={category}
                      //onSelect={props.action}
                      isActive={props.isActive}
                      //actionAddSubcategory={props.actionAddSubcategory}
                      //actionUpdateCategory={props.actionUpdateCategory}
                      categories={props.categories}
                      router={props.router}
                      categoryAction={props.categoryAction}

        />
    );

    return (
        <ul>
            {subcategoryItems}
        </ul>
    );
};



const CategoryItem = (props) => {

    const {router} = props;

    let acitveClass = '';

    if (router && props.item.id === parseInt(router.match.params.id, 10)) {
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
                      // onClick={() => props.onSelect(props.item) }>
                    >
                    <Link to={`/category/${props.item.id}`}>{props.item.name}</Link>
                </span>
                <span className="CategoryItem__edit-icon icon-edit"
                      onClick={() => props.categoryAction.actionUpdateCategory(props.item) }
                ></span>
                <span className="CategoryItem__delete-icon">
                    <i className="icon-trash-empty"></i>
                </span>
                <span className="CategoryItem__add-icon icon-plus" onClick={() => props.categoryAction.actionAddSubcategory(props.item) }></span>
            </div>
            <Subcategories list={sublevel}
                           action={props.onSelect}
                           isActive={props.isActive}
                           categoryAction={props.categoryAction}
                           //actionAddSubcategory={props.actionAddSubcategory}
                           //actionUpdateCategory={props.actionUpdateCategory}
                           categories={props.categories}
                           router={router}
            />
        </li>
    );
};

export default CategoryItem;
