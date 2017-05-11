import React from 'react';
import CategoriesEdit from "./CategoriesEdit";
import TaskEdit from "./TaskEdit";

const EditView = (props) => {

    return (
        <div className="view-container">
            <CategoriesEdit list={props.state.categories}
                        actionSelect={props.categoryAction.handleSelectCategory}
                        actionAdd={props.categoryAction.handleAddCategory}
                        actionAddSubcategory={props.categoryAction.handleAddSubcategory}
                        actionUpdateCategory={props.categoryAction.handleUpdateCategory}
                        isActive={props.state.activeCategory}
                        actionChange={props.categoryAction.handleInputChange}
                        // ref={component => categoriesComponent = component}
                        inputValue={props.state.addCategoryInputText}
                        router={props.router}
            />

            <TaskEdit
                state={props.state}
                // actionChange={props.taskAction.handleInputChange}
                // actionAdd={props.taskAction.handleAddTask}
                // ref={component => tasksComponent = component}
                // inputValue={props.state.taskInputText}
                category={props.state.activeCategory}
                tasks={props.state.tasks}
                done={props.state.showDone}
                // setDone={props.taskAction.handleSetDone}
                router={props.router}
                taskAction={props.taskAction}
            />
        </div>
    );
};

export default EditView;