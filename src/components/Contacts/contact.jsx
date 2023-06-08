import React, {useRef, useState, useContext} from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import { themeContext } from '../../context';

export default function Contact() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef();
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_r6y0pop', 'template_txt3191', form.current, 'eQjd1EjlnE0-7vaNr')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console(error.text);
            });
        setDone(true);
    };
    return (
        <div className="contact contact-form" id='Contact'>
            <div className="n-left">
                <div className="awesome">
                    <span style={{color: darkMode ? 'white' : ''}}>Get in touch</span>
                    <span>Contact me</span>
                    <div className="blur s-blur" style={{background: '#ABF1FF94'}}>
                    </div>
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className='user' placeholder='Name' />
                    <input type="email" name="user_email" className='user' placeholder='Email' />
                    <textarea name='message' className='user' placeholder='Message'/>
                    <input type="submit" value="Send" className='button' />
                    <span>{done && 'Your message have been sent! Thank you for contacting :)'}</span>
                    <div className='blur c-blur1' style={{background: 'var(--purple)'}}></div>
                </form>
            </div>
        </div>
    )
}