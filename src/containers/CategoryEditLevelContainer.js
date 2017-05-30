/**
 * Created by Katarzyna_Bak on 26.05.2017.
 */
import { connect } from 'react-redux';
import CategoryEditLevel from '../CategoryEditLevel';

const getCategoriesByParentId = (categories, parentId) => {
    return categories.filter(category =>
        category.parentId === parentId);
};

const mapStateToProps = (state, ownProps) => {
    return {
        categories: getCategoriesByParentId(state.categories.present, ownProps.parentId),
        pid: ownProps.parentId,
        cid: ownProps.cid,
        tid: ownProps.tid,
        history: ownProps.history

    }
};

const CategoryEditLevelContainer = connect(
    mapStateToProps
)(CategoryEditLevel);

export default CategoryEditLevelContainer;