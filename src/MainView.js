import React from 'react';
import TasksContainer from './containers/TasksContainer';
import CategoriesContainer from './containers/CategoriesContainer';

const MainView = ({ match }) => {
    return(
        <div className="view-container">
            <CategoriesContainer />
            <TasksContainer categoryId={match.params.id}/>
        </div>
    )
};

export default MainView;