/**
 * Created by Katarzyna_Bak on 28.03.2017.
 */

import React from 'react';
import './Tasks.css';
import './fontello.css';
import TaskItem from './TaskItem';

// class TaskView extends Component {
//
//     constructor (props) {
//         super(props);
//
//         this.state = {
//             newTaskInputText: ''
//         };
//
//         this.handleInputChange = this.handleInputChange.bind(this);
//         this.handleAddTask = this.handleAddTask.bind(this);
//
//     }
//
//     handleInputChange (e) {
//         this.setState({newTaskInputText: e.target.value});
//     }
//
//     handleAddTask () {
//         const task = {
//             name: this.state.newTaskInputText,
//             categoryId: parseInt(this.props.router.match.params.id, 10)
//         };
//         this.props.taskAction.actionAdd(task);
//     }
//
//     render () {
//
//         const {router} = this.props;
//
//         const taskArray = this.props.tasks.filter((task) => {
//             if(this.props.done) {
//                 return task.categoryId === router.match.params.id
//                 && task.isDone === true;
//             }
//
//             return task.categoryId === parseInt(router.match.params.id, 10);
//         });
//
//         const taskItems = taskArray.map((task) =>
//              <TaskItem key={task.id.toString()}
//                        item={task}
//                        setDone={this.props.taskAction.setDone}
//              />
//         );
//
//         return (
//             <section className="tasks">
//                 <div className="tasks-add-form">
//                     <input type="text" placeholder=""
//                            value={this.state.newTaskInputText}
//                            onChange={this.handleInputChange}
//                     />
//                     <button type="button" onClick={this.handleAddTask}>Add</button>
//                 </div>
//                 <ul className="tasks-list">{taskItems}</ul>
//             </section>
//         )
//     }
//
// }

const TaskView = ({tasks, onTaskDone, onAddTask}) => (


        // const {router} = this.props;
        //
        // const taskArray = tasks.filter((task) => {
        //     if(this.props.done) {
        //         return task.categoryId === router.match.params.id
        //             && task.isDone === true;
        //     }
        //
        //     return task.categoryId === parseInt(router.match.params.id, 10);
        // });

        <section className="tasks">
            <div className="tasks-add-form">
                <input type="text" placeholder=""
                    // value={this.state.newTaskInputText}
                    // onChange={this.handleInputChange}
                />
                <button type="button" onClick={onAddTask}>Add</button>
            </div>
            <ul className="tasks-list">

                {tasks.map((task) =>
                    <TaskItem key={task.id}
                              {...task} onTaskDone={onTaskDone}
                    />
                )}

            </ul>
        </section>
);

export default TaskView;