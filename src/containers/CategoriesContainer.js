/**
 * Created by Katarzyna_Bak on 19.05.2017.
 */

import { connect } from 'react-redux';
import Categories from './../Categories';
import { addCategory, addSubcategory, deleteCategory, editCategory, deleteTask } from './../actions';

const mapStateToProps = (state) => {
  return {
      categories: state.categories
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