import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import img from '../assets/images/png-transparent-arrow-arrows-direction-universal-blue-line-filled-icon.png'
import SwiperCore from 'swiper';
import Home from './Home';
import Home1 from './Home1';
import Home2 from './Home2';

// Подключаем необходимые модули Swiper
SwiperCore

const navbars = [
    <SwiperSlide key="home"><Home /></SwiperSlide>,
    <SwiperSlide key="home1"><Home1 /></SwiperSlide>,
    <SwiperSlide key="home2"><Home2 /></SwiperSlide>,
];

function App() {
    const [currentSlide] = useState(0);
    const swiperRef = useRef(null);



    const goToPrevious = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const goToNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    return (
        <>
<div  className="div">

                <button onClick={goToPrevious } disabled={currentSlide === navbars.length - 1}>
        <img  className="img1" src={img} alt="" />
                    
                </button>
                <Swiper
                    ref={swiperRef}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    keyboard={{ enabled: true }}
                    mousewheel={true}
                    loop={false}
                    
                    effect="fade" // Добавлен эффект затухания
                    fadeEffect={{ crossFade: true }} // Плавный crossFade
                    >
                    {navbars.map((navbar) => navbar)}
                </Swiper>
                <button onClick={ goToNext}  disabled={currentSlide === navbars.length - 1}>
                    
                    <img  className="img" src={img} alt="" />
                </button>

                    </div>
        </>
    );
}

export default App;

