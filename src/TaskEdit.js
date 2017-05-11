/**
 * Created by Katarzyna_Bak on 03.04.2017.
 */

import React, { Component } from 'react';
import './TaskEdit.css';

const getItemById = (id, list) => {
    return list.filter((item) => item.id === id)[0];
};

class TaskEdit extends Component {

    constructor(props) {
        super(props);

        this.router = this.props.router;
        const taskId = parseInt(this.router.match.params.id, 10);
        const task = getItemById(taskId, this.props.state.tasks);

        this.state = {
            taskId: taskId,
            taskName: task.name,
            taskIsDone: task.isDone,
            taskCategory: task.categoryId
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleTaskDone = this.handleTaskDone.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleInputChange (e) {
        this.setState({taskName: e.target.value});
    }

    handleTaskDone (e) {
        this.setState({taskIsDone: !this.state.taskIsDone});
    }

    handleCancel () {
        this.props.router.history.push(`/category/${this.state.taskCategory}`);
    }

    handleSave () {
        const task = {
            id: this.state.taskId,
            name: this.state.taskName,
            categoryId: this.state.taskCategory,
            isDone: this.state.taskIsDone,
        };
        this.props.taskAction.saveTask(task);
        this.props.router.history.push(`/category/${this.state.taskCategory}`);
    }

    render () {

        return (
            <section className="TaskEdit">
                <div className="TaskEdit__row TaskEdit__row--buttons">
                    <button type="button" className="TaskEdit__save-btn"
                    onClick={this.handleSave}>Save changes</button>
                    <button type="button" className="TaskEdit__cancel-btn"
                            onClick={this.handleCancel}>Cancel</button>
                </div>
                <div className="TaskEdit__row">
                    <input type="text" placeholder="Task name" className="TaskEdit__task-title"
                           value={this.state.taskName}
                           onChange={this.handleInputChange}
                    />
                </div>
                <div className="TaskEdit__row">
                    <label className="TaskEdit__task-done">
                        <input type="checkbox"
                               checked={this.state.taskIsDone}
                               onChange={this.handleTaskDone}
                        /> Done
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