import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Header from '../../../Shared/Header/Header';
import RestaurantIntro from '../RestaurantIntro/RestaurantIntro';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='my-12 md:my-16'>
                <Header title={'From 11:00am to 10:00pm'} subTitle={'Order Online'}></Header>
                <Category></Category>
                <RestaurantIntro></RestaurantIntro>
            </div>
        </div>
    );
};

export default Home;