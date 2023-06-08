import React from 'react';
import './experience.css';

export default function Experience(props) {
    return (
        <div className="experience" id='Experience'>
            <div className="achievement">
                <div className="circle">6+</div>
                <span>Months</span>
                <span>Experience</span>
            </div>
            <div className="achievement">
                <div className="circle">5+</div>
                <span>Completed</span>
                <span>Projects</span>
            </div>
            <div className="achievement">
                <div className="circle">10+</div>
                <span>Web Development</span>
                <span>Technologies</span>
            </div>
        </div>
    )
}