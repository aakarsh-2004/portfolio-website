import React, {useContext} from 'react';
import './services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../../components/Cards/card.jsx';
import Resume from '../../img/Resume.pdf';
import { themeContext } from '../../context';


export default function Services(props) {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="services" id='Services'>
            {/* {left side} */}
            <div className="awesome">
                <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
                <span>Services!</span>
                <span>
                    I give 100% from my side in the work I do. The websites or webapps I make are full fledged with right styling!
                    <br />
                    I do not believe in providing cheap quality 
                </span>
                <a href={Resume} download>
                    <button className='button s-button'>Download CV</button>
                </a>
                <div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>
            </div>
            {/* {right side} */}
            <div className="cards">
                <div style={{left: '11rem'}}>
                    <Card 
                        emoji = {HeartEmoji}
                        heading = 'Design'
                        detail = 'Figma, Sketch, Adobe Photoshop, Adobe llustrator, Adobe XD'
                    />
                </div>
                <div style={{top: '12rem', left: '-7rem'}}>
                    <Card 
                        emoji = {Glasses}
                        heading = 'Developer'
                        detail = 'HTML, CSS, JavaScript, React js, Node.js, Bootstrap, MongoDB, EJS'
                        />
                </div>
                <div style={{top: '19rem', left: '14rem'}}>
                    <Card 
                        emoji = {Humble}
                        heading = 'UI/UX'
                        detail = 'I make stunning websites with cool animations with a strong backend'
                        />
                </div>
            </div>
            <div className="blur s-blur2" style={{background: 'var(--purple)', marginTop: '1000px'}}></div>
        </div>
    )
}