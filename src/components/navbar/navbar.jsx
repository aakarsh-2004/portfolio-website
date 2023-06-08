import React from 'react';
import './navbar.css';
import '../../App.css';
import Toggle from '../toggle/toggle.jsx';

export default function Navbar(props) {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Aakarsh</div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Experience</li>
                        <li>Portfolio</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
                <button className='button n-btn'>
                    Contact
                </button>
            </div>
        </div>
    )
}