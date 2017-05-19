/**
 * Created by Katarzyna_Bak on 19.05.2017.
 */

import { connect } from 'react-redux';
import Categories from './../Categories';

const mapStateToProps = (state) => {
  return {
      categories: state.categories
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};

const CategoriesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Categories);

export default CategoriesContainer;