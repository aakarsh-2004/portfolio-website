import React from 'react';
import './testimonials.css';
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';
import profilePic1 from '../../img/1.jpg';
import profilePic2 from '../../img/2.jpg';
import profilePic3 from '../../img/3.png';


export default function Testimonials() {
    const clients = [
        {
            img: profilePic1,
            review: 'He always work so hard, when he is not sleeping he is working, that is how much of a working man he really is'
        },
        {
            img: profilePic2,
            review: 'He is like a big brother to me, we both work all day and interact with each other, he has helped me in making things easier for me to understand, be in web development or life'
        },
        {
            img: profilePic3,
            review: 'Whenever I had been stuck on some problem, I have always asked him and no matter how much time the problem took, he has always helped me solving my errors'
        }
    ];
    return (
        <div className="t-wrapper" id='Testimonials'>
            <div className="t-heading">
                <span>Some words of</span>
                <span> my friends </span>
                <span>for me!</span>
                <div className="blur t-blur1" style={{background: 'var(--purple)'}}></div>
                <div className="blur t-blur2" style={{background: 'skyblue'}}></div>
            </div>
            {/* Slider */}
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination= {{clickable: true}}
            >
                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                                <img src={client.img} alt="" />
                                <span>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}