/**
 * Created by Katarzyna_Bak on 24.05.2017.
 */
import { connect } from 'react-redux';
import { moveTask } from './../actions';
import CategoriesEdit from './../CategoriesEdit';

const mapStateToProps = (state, ownProps) => {
     return {
        categories: state.categories.present,
        taskId: ownProps.id,
        categoryId: ownProps.cid
     }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onMoveTask: (id, parentId) => {
            dispatch(moveTask(id, parentId));
        }
    }
};

const CategoriesEditContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoriesEdit);

export default CategoriesEditContainer;