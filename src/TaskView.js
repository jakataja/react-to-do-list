/**
 * Created by Katarzyna_Bak on 28.03.2017.
 */

import React from 'react';
import './Tasks.css';
import './fontello.css';
import TaskItem from './TaskItem';

const TaskView = ({tasks, parent, onTaskDone, onAddTask}) => {

    let input;

    return (
        <section className="tasks">
            <div className="tasks-add-form">
                <input type="text" placeholder="Enter task text"
                    ref={ node => input = node }
                />
                <button type="button" onClick={() => {onAddTask(input.value, parent); input.value = ''; }  }>Add</button>
            </div>
            <ul className="tasks-list">

                {tasks.map((task) =>
                    <TaskItem key={task.id}
                              {...task}
                              onTaskDone={onTaskDone}
                    />
                )}

            </ul>
        </section>
)};

export default TaskView;