import React, {useContext} from 'react';
import './portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import Sidebar from '../../img/sidebar.png';
import Ecommerce from '../../img/ecommerce.png';
import Hoc from '../../img/hoc.png';
import MusicApp from '../../img/musicapp.png';
import DrumKit from '../../img/drum-kit.png';
import DiceGame from '../../img/dice-game.png';
import WeatherApp from '../../img/weather-app.png';
import BlogWebsite from '../../img/blog.png';
import 'swiper/css';
import { themeContext } from '../../context';


export default function Portfolio() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="portfolio" id='Portfolio'>
            <span style={{color: darkMode ? 'white' : ''}}>Recent Projects</span>
            <span>Portfolio</span>

            {/* Slider */}
            <Swiper spaceBetween={30} slidesPerView={3} grabCursor = {true} className='portfolio-slider'
            >
                <SwiperSlide>
                    <a href="https://weatherapp-fk6n.onrender.com/" target='_blank'><img src= {WeatherApp} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://aakarsh-2004.github.io/drum-kit/" target='_blank'><img src= {DrumKit} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://aakarsh-2004.github.io/dice-game/" target='_blank'><img src= {DiceGame} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="" target='_blank'><img src= {BlogWebsite} alt="" /></a>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}