/**
 * Created by Katarzyna_Bak on 30.05.2017.
 */

import { connect } from 'react-redux';
import ModalCategory from '../ModalCategory';
import { addSubcategory, editCategory, hideModal } from '../actions';

const getCategoryById = (id, categories) => {
    return id !== null ? categories.filter(category =>
        category.id === id
    )[0] : { name: '' };
};

const mapStateToProps = (state) => {
    const category = getCategoryById(state.modal.categoryId, state.categories.present);

    return {
        id: category.id,
        name: category.name,
        isActive: state.modal.isActive,
        type: state.modal.type
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitAddSubcategory: (name, id) => {
            dispatch(addSubcategory(name, id));
            dispatch(hideModal());
        },
        onSubmitEditCategory: (id, name) => {
            dispatch(editCategory(id, name));
            dispatch(hideModal());
        },
        onHideModal: () => {
            dispatch(hideModal());
        }
    };
};

const ModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalCategory);

export default ModalContainer;

