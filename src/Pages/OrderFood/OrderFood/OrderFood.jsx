import React from 'react';
import { Helmet } from 'react-helmet';
import Cover from '../../../Shared/Cover/Cover';
import img from '../../../assets/shop/banner2.jpg';

const OrderFood = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order</title>
            </Helmet>
            <Cover img={img} title={'order food'} description={'Would you like to try a dish?'}></Cover>
        </div>
    );
};

export default OrderFood;