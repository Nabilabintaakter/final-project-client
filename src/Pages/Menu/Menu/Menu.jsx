import React from 'react';
import { Helmet } from 'react-helmet';
import Cover from '../../../Shared/Cover/Cover';
import img from '../../../assets/menu/banner3.jpg'

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={img} title={'our menu'} description={'Would you like to try a dish?'}></Cover>
        </div>
    );
};

export default Menu;