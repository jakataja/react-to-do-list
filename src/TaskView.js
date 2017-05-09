/**
 * Created by Katarzyna_Bak on 28.03.2017.
 */

import React, {Component} from 'react';
import './Tasks.css';
import './fontello.css';
import TaskItem from './TaskItem';
import TaskEdit from './TaskEdit';

class TaskView extends Component {

    render () {

        const {router} = this.props;

        const taskArray = this.props.tasks.filter((task) => {
            if(this.props.done) {
                return task.categoryId === router.match.params.id
                && task.isDone === true;
            }

            return task.categoryId === parseInt(router.match.params.id, 10);
        });

        const taskItems = taskArray.map((task) =>
             <TaskItem key={task.id.toString()}
                       item={task}
                       setDone={this.props.setDone}
             />
        );

        return (
            <section className="tasks">
                <div className="tasks-add-form">
                    <input type="text" placeholder=""
                           value={this.props.inputValue}
                           ref={input => {this.taskInput = input}}
                           onChange={this.props.actionChange}
                    />
                    <button type="button" onClick={this.props.actionAdd}>Add</button>
                </div>
                <ul className="tasks-list">{taskItems}</ul>
            </section>
        )
    }

}

export default TaskView;