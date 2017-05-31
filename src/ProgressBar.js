import React  from 'react';
import './ProgressBar.css';

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