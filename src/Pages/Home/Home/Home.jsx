import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Header from '../../../Shared/Header/Header';
import RestaurantIntro from '../RestaurantIntro/RestaurantIntro';
import PopularMenu from '../PopularMenu/PopularMenu';
import CallUs from '../CallUs/CallUs';
import ChefRecommends from '../ChefRecommends/ChefRecommends';
import Featured from '../Featured/Featured';
import Testimonial from '../Testimonial/Testimonial';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <RestaurantIntro></RestaurantIntro>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <ChefRecommends></ChefRecommends>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;