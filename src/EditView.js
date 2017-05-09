import React, {Component} from 'react';
import CategoriesEdit from "./CategoriesEdit";
import TaskEdit from "./TaskEdit";

const EditView = () => {
    return (
        <div className="view-container">
            <CategoriesEdit />
            <TaskEdit />
        </div>
    );
};

export default EditView;