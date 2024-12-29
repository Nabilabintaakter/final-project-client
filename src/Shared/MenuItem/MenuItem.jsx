import React from 'react';

const MenuItem = ({ item }) => {
    const { name, image, recipe, price } = item || {}
    return (
        <div className='flex items-start gap-5'>
            <img className='w-[118px] h-[104px] object-cover rounded-tr-[200px] rounded-b-[200px]' src={image} alt="" />
            <div className='flex items-start gap-2'>
                <div>
                    <h1 className='font-cinzel text-xl'>{name}------------------</h1>
                    <h1 className='text-[#737373] font-inter'>{recipe}</h1>
                </div>
                <p className='text-[#BB8506] text-xl font-inter'>${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;