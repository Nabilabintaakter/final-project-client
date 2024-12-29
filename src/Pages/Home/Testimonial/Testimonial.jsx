import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Header from '../../../Shared/Header/Header';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
        <div className="w-[90%] mx-auto max-w-7xl my-16 md:my-20">
            <Header title={'What Our Clients Say'} subTitle={'TESTIMONIALS'}></Header>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                <div>
                    {
                        reviews.map(review =>
                            <SwiperSlide key={review._id}><div className='text-center w-[70%] mx-auto'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    className='block mx-auto mb-5 md:mb-7'
                                />
                                <FaQuoteLeft className='block mx-auto text-6xl mb-5 md:mb-7' />
                                <p className='text-xl text-[#444444]'>{review.details}</p>
                                <p className='uppercase text-3xl md:text-[32px] text-[#CD9003] mt-3'>{review.name}</p>
                            </div></SwiperSlide>

                        )
                    }
                </div>

            </Swiper>
        </div>
    );
};

export default Testimonial;