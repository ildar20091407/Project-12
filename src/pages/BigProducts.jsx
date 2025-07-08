import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Home from  './Products';


SwiperCore;

const navbars = [
    <SwiperSlide key="home"><Home /></SwiperSlide>,

];

function App() {
    const [currentSlide, setCurrentSlide] = useState(0);
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

                </button>

                    </div>
        </>
    );
}

export default App;
