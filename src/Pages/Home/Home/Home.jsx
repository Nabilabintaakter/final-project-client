import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Header from '../../../Shared/Header/Header';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='my-12 md:my-16'>
                <Header title={'From 11:00am to 10:00pm'} subTitle={'Order Online'}></Header>
                <Category></Category>
            </div>
        </div>
    );
};

export default Home;