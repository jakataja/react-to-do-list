import React, {Component} from 'react';
import Categories from "./Categories";
import TaskView from './TaskView';

class MainView extends Component {
    render() {
        return(
            <div className="view-container">
                <Categories list={this.props.state.categories}
                    actionSelect={this.props.categoryAction.handleSelectCategory}
                    actionAdd={this.props.categoryAction.handleAddCategory}
                    actionAddSubcategory={this.props.categoryAction.handleAddSubcategory}
                    actionUpdateCategory={this.props.categoryAction.handleUpdateCategory}
                    isActive={this.props.state.activeCategory}
                    actionChange={this.props.categoryAction.handleInputChange}
                    ref={component => this.categoriesComponent = component}
                    inputValue={this.props.state.addCategoryInputText}
                     router={this.props.router}
                />

                <TaskView mode={this.props.state.mode}
                    actionChange={this.props.taskAction.handleInputChange}
                    actionAdd={this.props.taskAction.handleAddTask}
                    ref={component => this.tasksComponent = component}
                    inputValue={this.props.state.taskInputText}
                    category={this.props.state.activeCategory}
                    tasks={this.props.state.tasks}
                    done={this.props.state.showDone}
                    setDone={this.props.taskAction.handleSetDone}
                          router={this.props.router}
                />
            </div>
        )
    }
};

export default MainView;