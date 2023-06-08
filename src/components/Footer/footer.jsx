import React from 'react';
import './footer.css';
import Wave from '../../img/wave.png';
import Github from '@iconscout/react-unicons/icons/uil-github';
import Twitter from '@iconscout/react-unicons/icons/uil-twitter';
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';

export default function Footer() {
    return (
        <div className="footer">
            <img src={Wave} alt="" style={{width: '100%'}}/>
            <div className="f-content">
                <span>aakarshbeohar2004@gmail.com</span>
                <div className="f-icons">
                    <a href="https://github.com/aakarsh-2004" target='_blank'>
                        <Github color='white' size='3rem'/>
                    </a>
                    <a href="https://twitter.com/Aakarsh_beohar" target='_blank'>
                        <Twitter color='white' size='3rem'/>
                    </a>
                    <a href="https://www.linkedin.com/in/aakarsh-beohar-75476a27a/" target='_blank'>
                        <Linkedin color='white' size='3rem'/>
                    </a>
                </div>
            </div>
        </div>
    )
}