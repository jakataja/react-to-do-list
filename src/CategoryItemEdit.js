/**
 * Created by Katarzyna_Bak on 27.03.2017.
 */

import React from 'react';
import './CategoryItem.css';
import CategoryEditLevelContainer from './containers/CategoryEditLevelContainer';

const CategoryItemEdit = ({ category, isActive, cid, tid, onMoveTask, history }) => {

    let acitveClass = '', currClass = '';

    if (isActive) {
        acitveClass = 'active';
    }

    if (category.id === cid) {
        currClass = 'current';
    }

    const handleMoveTask = () => {
        onMoveTask(tid, category.id);
        history.push(`/category/${category.id}/task/${tid}`);
    };

    const handleClick = (e) => {
        e.target.parentNode.classList.toggle('active');
    };

    return (
        <li className={`CategoryItem ${acitveClass} ${currClass}`} >
            <div className="CategoryItem__wrapper"
                onClick={ handleClick }
                >
                <span className="CategoryItem__down-icon">
                    <i className="icon-down-open"></i>
                </span>
                <span className="CategoryItem__name">
                    {category.name}
                </span>
                <span className="CategoryItem__back-icon icon-reply"
                      onClick={ handleMoveTask }
                ></span>
            </div>
            <CategoryEditLevelContainer parentId={category.id} cid={cid} tid={tid} history={history}/>
        </li>
    );
};

export default CategoryItemEdit;
