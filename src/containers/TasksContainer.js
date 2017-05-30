/**
 * Created by Katarzyna_Bak on 18.05.2017.
 */

import { connect } from 'react-redux';
import { addTask, doneTask } from '../actions';
import TaskView from '../TaskView';

const getTasksFromCategory = (todos, categoryId, filter) => {

    return todos.filter(todo =>
      filter.type === 'SHOW_DONE' ?
          todo.categoryId === parseInt(categoryId, 10) && todo.isDone === true :
          todo.categoryId === parseInt(categoryId, 10)
      ).filter(todo => {
        const pattern = new RegExp(filter.pattern,'gi');
        return todo.name.match(pattern);
      }
    );
};


const mapStateToProps = (state, ownProps) => {
    return {
        tasks: getTasksFromCategory(state.todos.present, ownProps.categoryId, state.filter),
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