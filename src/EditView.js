import React from 'react';
// import CategoriesEditContainer from "./containers/CategoriesEditContainer";
import TaskEditContainer from "./containers/TaskEditContainer";

const EditView = ({match, history}) => {

    return (
        // <div className="view-container">
            // <CategoriesEditContainer id={match.params.id} cid={match.params.id} />
            <TaskEditContainer id={match.params.id} history={history} cid={match.params.cid} />
        // </div>
    );
};

export default EditView;