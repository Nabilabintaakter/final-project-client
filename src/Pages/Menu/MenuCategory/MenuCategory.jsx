import React from 'react';
import MenuItem from '../../../Shared/MenuItem/MenuItem';
import CategoryCover from '../../../Shared/CategoryCover/CategoryCover';


const MenuCategory = ({items ,img, title, description}) => {
    return (
        <div className=' my-16 md:my-20'>
            {title && <CategoryCover img={img} title={title} description={description}></CategoryCover>}
            <div className='w-[90%] mx-auto max-w-7xl grid md:grid-cols-2 gap-6 lg:gap-10 mt-16 md:mt-20'>
                {
                    items.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <button className='mt-8 md:mt-12 uppercase text-xl font-medium bg-white rounded-b-[8px] border-b-[3px] border-b-[#1F2937] px-5 md:px-[30px] py-2 md:py-5 block mx-auto hover:bg-[#1F2937] hover:text-white hover:shadow-md hover:border-b-white transition-all duration-300'>ORDER YOUR FAVOURITE FOOD</button>
        </div>
    );
};

export default MenuCategory;