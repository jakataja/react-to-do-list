/**
 * Created by Katarzyna_Bak on 03.04.2017.
 */

import React, { Component } from 'react';
import './TaskEdit.css';

class TaskEdit extends Component {
    render () {
        return (
            <section className="TaskEdit">
                <div className="TaskEdit__row TaskEdit__row--buttons">
                    <button type="button" className="TaskEdit__save-btn">Save changes</button>
                    <button type="button" className="TaskEdit__cancel-btn">Cancel</button>
                </div>
                <div className="TaskEdit__row">
                    <input type="text" placeholder="Task name" className="TaskEdit__task-title"/>
                </div>
                <div className="TaskEdit__row">
                    <label className="TaskEdit__task-done">
                        <input type="checkbox" /> Done
                    </label>
                </div>
                <div className="TaskEdit__row">
                    <textarea placeholder="Description" className="TaskEdit__task-desc"></textarea>
                </div>
            </section>
        );
    }
}

export default TaskEdit;