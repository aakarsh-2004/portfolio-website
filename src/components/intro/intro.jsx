import React, { useContext } from 'react';
import './intro.css';
import '../../App.css'
import githubImage from '../../img/github.png';
import linkedinImage from '../../img/linkedin.png';
import twitterImage from '../../img/twitter.png'
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Boy from '../../img/boy.png';
import thumbsUp from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesEmoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/floatingdiv.jsx';
import { themeContext } from '../../context';
// import { motion } from 'framer-motion';


export default function Intro() {
    const transition = {duration: 2, type: 'spring'}
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{color: darkMode ? 'white' : ''}}>Heyy! I Am</span>
                    <span>Aakarsh Beohar</span>
                    <span>Full Stack Web Developer with decent level of experience in making web apps, designing ui-ux and providing top quality work!</span>
                </div>
                <a href="mailto:aakarshbeohar2004@gmail.com"> <button className='button i-button'>Hire Me</button> </a>
                <div className="i-icons">
                    <a href="https://github.com/aakarsh-2004" target='_blank'><img src={githubImage} alt="" /></a>
                    <a href="https://www.linkedin.com/in/aakarsh-beohar-75476a27a/" target='_blank'><img src={linkedinImage} alt="" /></a>
                    <a href="https://twitter.com/Aakarsh_beohar" target='_blank'><img src={twitterImage} alt="" className='twitter' /></a>
                </div>
            </div>
            <div className="i-right">
                    <img src={Vector1} alt="" />
                    <img src={Vector2} alt="" />
                    <img src={Boy} alt="" />
                    <img src={glassesEmoji} alt="" />
                    {/* <motion.img src={glassesEmoji} alt="" 
                    initial= {{left: '-36%'}} whileInView= {{left: '-24%'}} transition={transition}
                    /> */}
                    <div style={{top: '-4%', left: '64%'}} className='floating-div'>
                        <FloatingDiv image = {Crown} txt1 = 'Web' txt2 = 'Developer' />
                    </div>
                    <div style={{top: '18rem', left: '0rem'}} className='floating-div'>
                        <FloatingDiv image = {thumbsUp} txt1 = 'Best Design' txt2 = 'Award'/>
                    </div>
                    {/* Blur divs */}
                    <div className="blur" style={{backgroundColor: 'rgb(238 210 255)'}}></div>
                    <div className="blur" style={{background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem'}}></div>
            </div>
        </div>
    )
}