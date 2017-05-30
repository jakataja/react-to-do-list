/**
 * Created by Katarzyna_Bak on 30.05.2017.
 */

import React from 'react';
import { connect } from 'react-redux';
import { filterTask, searchTask } from '../actions';

let FilterContainer = ({ dispatch }) => {

    const handleChange = (e) => {
        if(e.target.checked) {
            dispatch(filterTask('SHOW_DONE'));
        } else {
            dispatch(filterTask('SHOW_ALL'));
        }
    };

    const handleInputChange = (e) => {
        dispatch(searchTask(e.target.value));
    };

    return(
        <div className="search-wrapper">
            <div className="search__done">
                <label><input type="checkbox"
                    onChange={ handleChange }
                    defaultChecked={false}
                /> Show done</label>
            </div>
            <div className="search__box">
                <input type="text" placeholder="Search"
                    onChange={ handleInputChange }
                />
            </div>
        </div>
    );
};


FilterContainer = connect()(FilterContainer);

export default FilterContainer;