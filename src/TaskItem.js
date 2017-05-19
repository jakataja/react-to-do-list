/**
 * Created by Katarzyna_Bak on 27.03.2017.
 */

import React from 'react';
import {Link} from 'react-router-dom';
import './TaskItem.css';

// class TaskItem extends Component {
//
//     constructor (props) {
//         super(props);
//
//         this.state = {
//
//         };
//
//         this.handleTaskDone = this.handleTaskDone.bind(this);
//
//     }
//
//     handleTaskDone () {
//         this.props.setDone(this.props.item);
//     }
//
//     render() {
//
//         const style = this.props.item.isDone
//             ? { 'textDecoration': 'line-through'}
//             : {};
//
//         return (
//             <li className="task-list__item">
//                 <label className="task-list__item-name" style={style}>
//                     <input type="checkbox"
//                            className="task-list__item-checkbox"
//                            checked={this.props.item.isDone}
//                            onChange={this.handleTaskDone}
//                     /> To-do Item: {this.props.item.name}
//                 </label>
//                 <Link to={"/task/" + this.props.item.id}  ><span className="icon-edit"></span></Link>
//             </li>
//         );
//     }
// }

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
        <Link to={"/task/" + id }  ><span className="icon-edit"></span></Link>
    </li>
);

export default TaskItem;