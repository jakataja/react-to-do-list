import React, { PropTypes } from 'react';
import './ProgressBar.css';


// class ProgressBar extends Component {
//
//     countCategories(list) {
//
//         let counter = 0;
//
//         list.forEach((item, index, array) => {
//             let subcounter = 0;
//             if(item.subcategories.length > 0) {
//                 subcounter = this.countCategories(item.subcategories);
//             }
//             counter = ++counter + subcounter;
//         });
//
//         return counter;
//     }
//
//     isDone(element, index, array) {
//         return element.isDone;
//     }
//
//     countDoneTasks(categories, tasks) {
//         let completedCategories = 0;
//
//         categories.forEach((category) => {
//
//             let cTasks = tasks.filter((task) => {
//                 return task.categoryId === category.id;
//             });
//
//             if(cTasks.length === 0) {
//                 ++completedCategories;
//             } else {
//                 if(cTasks.every(this.isDone)) {
//                     ++completedCategories;
//                 }
//             }
//         });
//
//         return completedCategories;
//     }
//
//     render() {
//
//         const length = this.props.categories.length;//this.countCategories(this.props.list);
//         const progress = this.countDoneTasks(this.props.categories, this.props.tasks) / length * 100;
//
//         const barWidth = { width: progress + '%'};
//
//         return (
//             <section className="Progressbar">
//                 <div className="Progressbar__loader" style={barWidth} ></div>
//             </section>
//         );
//     }
// }


const ProgressBar = ({ progress }) => (
    <section className="Progressbar">
        <div className="Progressbar__loader"
             style={{
                 width: progress + '%'
             }}
        ></div>
    </section>
);



export default ProgressBar;