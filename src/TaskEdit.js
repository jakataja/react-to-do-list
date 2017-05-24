/**
 * Created by Katarzyna_Bak on 03.04.2017.
 */

import React from 'react';
import './TaskEdit.css';

const TaskEdit = ({ task, onTaskUpdate, history }) =>  {

        let input, checkInput;

        const handleTaskUpdate = () =>  {
            onTaskUpdate(task.id, input.value, checkInput.checked);
            history.push(`/category/${task.categoryId}`);
        };

        const handleCancel = () => {
            history.goBack();
        };

        return (
            <section className="TaskEdit">
                <div className="TaskEdit__row TaskEdit__row--buttons">
                    <button type="button" className="TaskEdit__save-btn"
                            onClick={ handleTaskUpdate } >Save changes</button>
                    <button type="button" className="TaskEdit__cancel-btn"
                            onClick={ handleCancel }
                    >Cancel</button>
                </div>
                <div className="TaskEdit__row">
                    <input type="text" placeholder="Task name" className="TaskEdit__task-title"
                           defaultValue={task.name}
                           ref={ node => input = node }
                    />
                </div>
                <div className="TaskEdit__row">
                    <label className="TaskEdit__task-done">
                        {task.isDone ?
                            <input type="checkbox" defaultChecked
                                   ref={ node => checkInput = node }
                            /> :
                            <input type="checkbox"
                                   ref={ node => checkInput = node }
                            />

                        }
                         Done
                    </label>
                </div>
                <div className="TaskEdit__row">
                    <textarea placeholder="Description" className="TaskEdit__task-desc"></textarea>
                </div>
            </section>
        );

};

export default TaskEdit;