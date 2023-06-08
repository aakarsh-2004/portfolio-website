import React from 'react';
import './floatingdiv.css';

export default function FloatingDiv(props) {
    return (
        <div className='floatingdiv'>
            <img src={props.image} alt="" />
            <span>
                {props.txt1}
                <br />
                {props.txt2}
            </span>
        </div>
    )
}