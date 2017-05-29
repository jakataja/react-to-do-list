/**
 * Created by Katarzyna_Bak on 19.05.2017.
 */

import { connect } from 'react-redux';
import Categories from './../Categories';
import { addCategory, addSubcategory, deleteCategory, editCategory, deleteTask } from './../actions';

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

const mapStateToProps = (state, ownProps) => {
  return {
      categories: state.categories,
      active: getActiveTreeById(ownProps.categoryId, state.categories)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      onAddCategory: (text) => {
          dispatch(addCategory(text));
      },
      onAddSubcategory: () => {
          dispatch(addSubcategory());
      },
      onDeleteCategory: (id) => {
          dispatch(deleteCategory(id));
          dispatch(deleteTask(id));
      },
      onEditCategory: () => {
          dispatch(editCategory());
      }
  }
};

const CategoriesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Categories);

export default CategoriesContainer;