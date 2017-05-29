/**
 * Created by Katarzyna_Bak on 27.03.2017.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import './TaskItem.css';

const TaskItem = ({id, name, categoryId, isDone, onTaskDone}) => (
    <li className="task-list__item">
        <label className="task-list__item-name" style={{
          textDecoration: isDone ? 'line-through' : 'none'
        }}>
            <input type="checkbox"
                   className="task-list__item-checkbox"
                   checked={isDone}
                   onChange={ () => onTaskDone(id) }
            /> To-do Item: {name}
        </label>
        <Link to={`${categoryId}/task/${id}` }  ><span className="icon-edit"></span></Link>
    </li>
);

export default TaskItem;