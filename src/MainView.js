import React, {Component} from 'react';
import Categories from "./Categories";
import TaskView from './TaskView';

class MainView extends Component {
    render() {
        return(
            <div className="view-container">
                <Categories list={this.props.state.categories}
                    categoryAction={this.props.categoryAction}
                    isActive={this.props.state.activeCategory}
                     router={this.props.router}
                />

                <TaskView
                    inputValue={this.props.state.taskInputText}
                    category={this.props.state.activeCategory}
                    tasks={this.props.state.tasks}
                    done={this.props.state.showDone}
                    taskAction={this.props.taskAction}
                    router={this.props.router}
                />
            </div>
        )
    }
};

export default MainView;