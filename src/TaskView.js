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


        const taskArray = (this.props.category !== null) ? this.props.category.tasks : [];
        const taskItems = taskArray.map((task) =>
            <TaskItem key={task.id.toString()} num={task.id}/>
        );

        if (this.props.mode === 0) {
            return (
                <section className="tasks">
                    <div className="tasks-add-form">
                        <input type="text" placeholder=""
                               value={this.props.inputValue}
                               ref={input => {this.taskInput = input}}
                               onChange={this.props.actionChange}
                        />
                        <button type="button">Add</button>
                    </div>
                    <ul className="tasks-list">{taskItems}</ul>
                </section>
            )
        }
        return <TaskEdit />;
    }

}

export default TaskView;