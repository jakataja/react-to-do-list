import React, { Component } from 'react';
import './ProgressBar.css';
// import ProgressBar from './ProgressBar';

class ProgressBar extends Component {



    render() {
        return (
            <section className="progress-bar">
                <div className="progress-bar__loader" ></div>
            </section>
        );
    }
}

export default ProgressBar;