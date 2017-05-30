/**
 * Created by Katarzyna_Bak on 24.05.2017.
 */
import { connect } from 'react-redux';
import TaskEdit from '../TaskEdit';
import { updateTask } from '../actions';


const getTaskById = (todos, id) => {
    return todos.filter(task => task.id === parseInt(id, 10))[0];
};

const mapStateToProps = (state, ownProps) => {
    return {
        categories: state.categories.present,
        task: getTaskById(state.todos.present, ownProps.id),
        history: ownProps.history,
        cid: parseInt(ownProps.cid, 10),
        tid: parseInt(ownProps.id, 10)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTaskUpdate: (id, text, isDone) => {
            dispatch(updateTask(id, text, isDone));
        }
    }
};


const TaskEditContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskEdit);

export default TaskEditContainer;