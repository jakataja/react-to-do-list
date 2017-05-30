/**
 * Created by Katarzyna_Bak on 03.04.2017.
 */

import React from 'react';
import './TaskEdit.css';
import CategoryEditLevelContainer from './containers/CategoryEditLevelContainer';

const TaskEdit = ({ categories, task, cid, tid, onTaskUpdate, history }) =>  {

    let input, checkInput;

    const handleTaskUpdate = () =>  {
        onTaskUpdate(task.id, input.value, checkInput.checked);
        history.push(`/category/${task.categoryId}`);
    };

    const handleCancel = () => {
        history.goBack();
    };

    return (
        <div className="view-container">
        <section className="categories">
            <CategoryEditLevelContainer parentId={null} cid={cid} tid={tid} history={history}/>
        </section>
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
                    <input type="checkbox" defaultChecked={task.isDone}
                           ref={ node => checkInput = node } />
                     Done
                </label>
            </div>
            <div className="TaskEdit__row">
                <textarea placeholder="Description" className="TaskEdit__task-desc"></textarea>
            </div>
        </section>
        </div>
    );

};

export default TaskEdit;