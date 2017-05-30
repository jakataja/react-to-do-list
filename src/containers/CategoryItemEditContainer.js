/**
 * Created by Katarzyna_Bak on 26.05.2017.
 */
import { connect } from 'react-redux';
import CategoryItemEdit from '../CategoryItemEdit';
import { moveTask } from '../actions';


const getActiveTreeById = (id, categories) => {
    let active = [];
    while(id !== null && id !== undefined) {
        id = parseInt(id, 10);
        active.push(id);
        id = categories.filter(category =>
            parseInt(category.id, 10) === id
        )[0].parentId;
    }

    return active;
};

const getCategoryById = (id, categories) => {
    return categories.filter(category => category.id === id)[0];
};

const isActiveCategory = (id, cid, categories) => {
    const activeArr = getActiveTreeById(cid, categories);
    const currCategory = getCategoryById(id, categories);
    return activeArr.indexOf(currCategory.id) > -1;
};


const mapStateToProps = (state, ownProps) => {
    return {
        category: getCategoryById(ownProps.id, state.categories.present),
        isActive: isActiveCategory(ownProps.id, ownProps.cid, state.categories.present),
        cid: ownProps.cid,
        tid: ownProps.tid,
        history: ownProps.history
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onMoveTask: (id, parentId) => {
            dispatch(moveTask(id, parentId));
        }
    }
};

const CategoryItemEditContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryItemEdit);

export default CategoryItemEditContainer;