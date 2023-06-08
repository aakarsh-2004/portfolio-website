import React, {useContext} from 'react';
import './works.css';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
import { themeContext } from '../../context';
import {Link} from 'react-scroll'

export default function Works(props) {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="works">
            {/* {left side} */}
            <div className="awesome">
                <span style={{color: darkMode ? 'white' : ''}}>My Best Works</span>
                <span>Till now!</span>
                <span>
                    I have put numerous hours, days and even weeks building these stunning web apps, websites and user interfaces.
                    <br />
                    Every one of them is different from each other and adds value!
                </span>
                <Link spy= {true} to= 'Contact' activeClass = 'activeClass' smooth ={true}><button className='button s-button'>Hire Me</button></Link>
            <div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>
            </div>
            {/* Right side */}
            <div className="w-right">
                <div className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                </div>
                {/* Background Circles */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}