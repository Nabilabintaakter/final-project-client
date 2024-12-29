import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';

const Category = () => {
    return (
        <Swiper
            slidesPerView={1} // Default for small screens
            spaceBetween={10} // Small gap for mobile
            breakpoints={{
                640: {
                    slidesPerView: 2, // Show 2 slides for screens >= 640px
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 3, // Show 3 slides for screens >= 768px
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 4, // Show 4 slides for screens >= 1024px
                    spaceBetween: 20,
                },
            }}
            freeMode={true}
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper font-cinzel px-2 md:px-4 w-[90%] lg:w-[95%] mx-auto max-w-7xl my-24 bg-green-300"
        >
            <SwiperSlide className="custom-slide">
                <img src={slide1} className="w-full" alt="" />
                <h3
                    className="text-3xl -mt-16 text-white font-bold text-center uppercase"
                    style={{
                        WebkitTextStroke: '1px gray',
                    }}
                >
                    Salads
                </h3>
            </SwiperSlide>
            <SwiperSlide className="custom-slide">
                <img src={slide2} className="w-full" alt="" />
                <h3
                    className="text-3xl -mt-16 text-white font-bold text-center uppercase"
                    style={{
                        WebkitTextStroke: '1px gray',
                    }}
                >
                    Pizzas
                </h3>
            </SwiperSlide>
            <SwiperSlide className="custom-slide">
                <img src={slide3} className="w-full" alt="" />
                <h3
                    className="text-3xl -mt-16 text-white font-bold text-center uppercase"
                    style={{
                        WebkitTextStroke: '1px gray',
                    }}
                >
                    Soups
                </h3>
            </SwiperSlide>
            <SwiperSlide className="custom-slide">
                <img src={slide4} className="w-full" alt="" />
                <h3
                    className="text-3xl -mt-16 text-white font-bold text-center uppercase"
                    style={{
                        WebkitTextStroke: '1px gray',
                    }}
                >
                    Desserts
                </h3>
            </SwiperSlide>
            <SwiperSlide className="custom-slide">
                <img src={slide5} className="w-full" alt="" />
                <h3
                    className="text-3xl -mt-16 mb-16 text-white font-bold text-center uppercase"
                    style={{
                        WebkitTextStroke: '1px gray',
                    }}
                >
                    Salads
                </h3>
            </SwiperSlide>
        </Swiper>
    );
};

export default Category;
