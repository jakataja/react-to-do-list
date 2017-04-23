import React, {Component} from 'react';
import './ProgressBar.css';


class ProgressBar extends Component {

    countCategories(list) {

        let counter = 0;

        list.forEach((item, index, array) => {
            let subcounter = 0;
            if(item.subcategories.length > 0) {
                subcounter = this.countCategories(item.subcategories);
            }
            counter = ++counter + subcounter;
        });

        return counter;
    }

    isDone(element, index, array) {
        return element.isDone;
    }

    countCompleted(list) {
        let completedCounter = 0;

        list.forEach((item, index, array) => {
            let completedSubcounter = 0;

            if(item.tasks.length === 0) {
                ++completedCounter;
            } else {
                if(item.tasks.every(this.isDone)) {
                    ++completedCounter;
                }
            }
            completedSubcounter = this.countCompleted(item.subcategories);
            completedCounter += completedSubcounter;
        });

        return completedCounter;
    }

    render() {

        const length = this.countCategories(this.props.list);
        const progress = this.countCompleted(this.props.list) / length * 100;

        const barWidth = { width: progress + '%'};

        return (
            <section className="Progressbar">
                <div className="Progressbar__loader" style={barWidth} ></div>
            </section>
        );
    }
};

export default ProgressBar;