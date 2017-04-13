/**
 * Created by Katarzyna_Bak on 28.03.2017.
 */

import React from 'react';
import './Tasks.css';
import './fontello.css';
import TaskItem from './TaskItem';
import TaskEdit from './TaskEdit';

const TaskView = (props) => {

    const taskArray = [1, 2, 3];
    const taskItems = taskArray.map((taskNum) =>
        <TaskItem key={taskNum.toString()} num={taskNum}/>
    );

    if(props.mode === 0) {
        return (
            <section className="tasks">
                <div className="tasks-add-form">
                    <input type="text" placeholder=""/>
                    <button type="button">Add</button>
                </div>
                <ul className="tasks-list">{taskItems}</ul>
            </section>
        )
    }
    return <TaskEdit />;
}

export default TaskView;