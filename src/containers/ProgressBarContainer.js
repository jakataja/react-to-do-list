/**
 * Created by Katarzyna_Bak on 18.05.2017.
 */

import { connect } from 'react-redux';
import ProgressBar from '../ProgressBar';
import '../ProgressBar.css';

const isDone = (element, index, array) => element.isDone;

const countDoneTasks = (categories, tasks) => {

    let completedCategories = 0;

    categories.forEach((category) => {

        let cTasks = tasks.filter((task) => {
            return task.categoryId === category.id;
        });

        if(cTasks.length === 0) {
            ++completedCategories;
        } else {
            if(cTasks.every(isDone)) {
                ++completedCategories;
            }
        }
    });

    return completedCategories;
};

const countProgress = (categories, tasks) => {
    const length = categories.length;
    const progress = countDoneTasks(categories, tasks) / length * 100;
    return progress;
};

const mapStateToProps = (state) => {
    return {
        progress: countProgress(state.categories.present, state.todos.present)
    }
};


const ProgressBarContainer = connect(
    mapStateToProps
)(ProgressBar);

export default ProgressBarContainer;