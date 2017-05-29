/**
 * Created by Katarzyna_Bak on 27.03.2017.
 */

import React from 'react';
import './CategoryItem.css';
import CategoryItemEditContainer from './containers/CategoryItemEditContainer';

const CategoryEditLevel = ({ categories, pid, cid, tid, history}) => {

    const level = categories.map(category =>
        <CategoryItemEditContainer
            key={category.id.toString()} id={category.id} cid={cid} tid={tid} history={history} />
    );

    return (
        <ul className={pid ? '' : 'category-list'} >
            {level}
        </ul>
    );
};

export default CategoryEditLevel;

