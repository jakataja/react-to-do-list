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
        <CategoryItemEdit key={category.id.toString()}
                      item={category}
                      onSelect={props.action}
                      isActive={props.isActive}
                      categories={props.categories}
        />
    );

    return (
        <ul>
            {subcategoryItems}
        </ul>
    );
};

const CategoryItemEdit = ({ id, name, parentId, categories, onMoveTask}) => {

    let acitveClass = '';

    // if (props.item === props.isActive) {
    //     acitveClass = 'active';
    // }

    const sublevel = categories.filter(item => {
        return parentId === item.id;
    });

    return (
        <li className={"CategoryItem " + acitveClass} >
            <div className="CategoryItem__wrapper">
                <span className="CategoryItem__down-icon">
                    <i className="icon-down-open"></i>
                </span>
                <span className="CategoryItem__name"
                      // onClick={() => props.onSelect(props.item) }
                >
                    {name}
                </span>
                <span className="CategoryItem__back-icon icon-reply"
                      onClick={ onMoveTask }
                ></span>
            </div>
            <Subcategories list={sublevel}
                           // action={props.onSelect}
                           // isActive={props.isActive}
                           // actionAddSubcategory={props.actionAddSubcategory}
                           // actionUpdateCategory={props.actionUpdateCategory}
                           categories={categories}
            />
        </li>
    );
};

export default CategoryItemEdit;
