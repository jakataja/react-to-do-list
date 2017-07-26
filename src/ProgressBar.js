import React  from 'react';
import './ProgressBar.css';

const ProgressBar = ({ progress }) => (
    <section className="Progressbar">
        <div className="Progressbar__outer">
        <div className="Progressbar__loader"
             style={{
                 width: progress + '%'
             }}
        ></div>
        </div>
    </section>
);

export default ProgressBar;