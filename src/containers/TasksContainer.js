/**
 * Created by Katarzyna_Bak on 18.05.2017.
 */

import { connect } from 'react-redux';
import { addTask, doneTask } from '../actions';
import TaskView from '../TaskView';

const getTasksFromCategory = (todos, categoryId) => {
  return todos.filter(todo => todo.categoryId === parseInt(categoryId, 10));
};


const mapStateToProps = (state, ownProps) => {
    return {
        tasks: getTasksFromCategory(state.todos, ownProps.categoryId),
        parent: parseInt(ownProps.categoryId, 10)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddTask: (text, parent) => {
            dispatch(addTask(text, parent));
        },
        onTaskDone: (id) => {
            dispatch(doneTask(id));
        }
    }
};

const TaskContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskView);

export default TaskContainer;