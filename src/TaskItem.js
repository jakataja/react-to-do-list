/**
 * Created by Katarzyna_Bak on 27.03.2017.
 */

import React, { Component } from 'react';
import './TaskItem.css';

class TaskItem extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <li className="task-list__item">
                <label className="task-list__item-name">
                    <input type="checkbox" className="task-list__item-checkbox" /> To-do Item {this.props.num}
                </label>
                <span className="icon-edit"></span>
            </li>
        );
    }
}

export default TaskItem;