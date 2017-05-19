/**
 * Created by Katarzyna_Bak on 18.05.2017.
 */

import { connect } from 'react-redux';
import { doneTask } from '../actions';
import TaskView from '../TaskView';

const getTasksFromCategory = (todos, categoryId) => {
  return todos.filter(todo => todo.categoryId === parseInt(categoryId));
};


const mapStateToProps = (state, ownProps) => {
    return {
        tasks: getTasksFromCategory(state.todos, ownProps.categoryId)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
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