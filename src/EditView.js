import React from 'react';
import CategoriesEdit from "./CategoriesEdit";
import TaskEdit from "./TaskEdit";

const EditView = (props) => {

    return (
        <div className="view-container">
            <CategoriesEdit list={props.state.categories}
                        actionSelect={props.categoryAction.handleSelectCategory}
                        isActive={props.state.activeCategory}
                        router={props.router}
            />

            <TaskEdit
                state={props.state}
                category={props.state.activeCategory}
                tasks={props.state.tasks}
                done={props.state.showDone}
                router={props.router}
                taskAction={props.taskAction}
            />
        </div>
    );
};

export default EditView;