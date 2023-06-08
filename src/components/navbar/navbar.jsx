import React from 'react';
import './navbar.css';
import '../../App.css';
import Toggle from '../toggle/toggle.jsx';
import {Link} from 'react-scroll'

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
                        <Link spy= {true} to= 'Navbar' activeClass = 'activeClass' smooth ={true}>
                            <li>Home</li>
                        </Link>
                        <Link spy= {true} to= 'Services' activeClass = 'activeClass' smooth ={true}>
                            <li>Services</li>
                        </Link>
                        <Link spy= {true} to= 'Experience' activeClass = 'activeClass' smooth ={true}>
                            <li>Experience</li>
                        </Link>
                        <Link spy= {true} to= 'Portfolio'activeClass = 'activeClass' smooth ={true}>
                            <li>Portfolio</li>
                        </Link>
                        <Link spy= {true} to= 'Testimonials' activeClass = 'activeClass' smooth ={true}>
                            <li>Testimonials</li>
                        </Link>
                    </ul>
                </div>
                
                    <a href="mailto:aakarshbeohar2004@gmail.com"> 
                        <button className='button n-btn'>Contact</button>
                    </a>
                
            </div>
        </div>
    )
}