import React, { useEffect, useState } from 'react';
import Header from '../../../Shared/Header/Header';
import MenuItem from '../../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item=> item.category === 'popular')
    return (
        <section className='w-[90%] mx-auto max-w-7xl'>
            <Header title={'Popular Items'} subTitle={'FROM OUR MENU'}></Header>
            <div className='grid md:grid-cols-2 gap-6'>
                {
                    popular.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <button className='mt-8 md:mt-12 uppercase text-xl font-medium bg-white rounded-b-[8px] border-b-[3px] border-b-[#1F2937] px-5 md:px-[30px] py-2 md:py-5 block mx-auto hover:bg-[#1F2937] hover:text-white hover:shadow-md hover:border-b-white transition-all duration-300'>View full menu</button>
        </section>
    );
};

export default PopularMenu;