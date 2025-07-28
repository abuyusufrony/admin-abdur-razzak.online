import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import rightArrow from '../../assets/Frame 392.png';
import leftArrow from '../../assets/Frame 393.png';

import grass from '../../assets/grass.png';
import three from '../../assets/3rd.png';

const slides = [
    {
        image: grass,
        title: 'Premium Turf Mat',
        subtitle: 'The Perfect Blend Of Greenery',
    },
    {
        image: grass,
        title: ' JF Privezy Grass Wall',
        subtitle: 'Premium Turf Mat',
    },
    {
        image: three,
        title: 'Natural Feel Grass',
        subtitle: 'Soft Touch & Durable',
    },
];

const SlideContent = ({ image, title, subtitle, isActive, onPrev, onNext }) => {
    return (
        <div className="relative bg-[#f8f8f8] rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center gap-6 transition-all duration-300 font-popins">
            {/* Left Arrow - only if active */}


            {isActive && (
                <button
                    onClick={onPrev}
                    className="absolute left-[-30px] top-1/2 -translate-y-1/2 z-10 bg-[#C6E300] hover:bg-[#b8d900] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-md"
                >
                    <img src={leftArrow} alt="Prev" />
                </button>
            )}

            {/* Image */}
            <div className='border-dashed border-2 border-gray-300 '>
                <img src={image} alt={title} className="w-[250px] h-[250px] object-cover rounded-lg m-5 border-2 border-dashed border-gray-300" />
            </div>

            {/* Text */}
            <div className="text-center md:text-left">
                <h2 className="text-3xl font-semibold  text-black mb-2">{title}</h2>
                <p className="text-lg mb-4">{subtitle}</p>
                <button className="bg-lime-500 rounded-full px-8 py-2 text-sm hover:bg-lime-600">
                    Shop Now
                </button>
            </div>

            {/* Right Arrow - only if active */}
            {isActive && (
                <button
                    onClick={onNext}
                    className="absolute right-[-30px] top-1/2 -translate-y-1/2 z-10 bg-[#C6E300] hover:bg-[#b8d900] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-md"
                >
                    <img src={rightArrow} alt="Next" />
                </button>
            )}
        </div>
    );
};

const Carousel = () => {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(1); // Start at center

    return (
        <div className="px-4 lg:px-24 py-10">
            <Swiper
                spaceBetween={30}
                slidesPerView={'auto'}
                centeredSlides={true}
                initialSlide={1} // Center card on load
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="mySwiper"
            >
                {slides.map((slide, idx) => (
                    <SwiperSlide
                        key={idx}
                        className="max-w-[80%] md:max-w-[70%] lg:max-w-[60%] flex-shrink-0"
                    >
                        <SlideContent
                            {...slide}
                            isActive={idx === activeIndex}
                            onPrev={() => swiperRef.current?.slidePrev()}
                            onNext={() => swiperRef.current?.slideNext()}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
