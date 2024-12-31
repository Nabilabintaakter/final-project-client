

const MenuItem = ({ item }) => {
    const { name, image, recipe, price } = item || {}
    return (
        <div className='flex items-start gap-5 group cursor-pointer'>
            <img className='w-[118px] h-[104px] object-cover rounded-tr-[200px] rounded-b-[200px] group-hover:border-[3px] group-hover:border-green-800 group-hover:scale-110 transition-all duration-300 ease-in-out' src={image} alt="item" />
            <div className='flex items-start gap-2'>
                <div>
                    <h1 className='font-cinzel text-xl group-hover:font-bold transition-all duration-300 ease-in-out'>{name}---------------</h1>
                    <h1 className='text-[#737373] font-inter'>{recipe}</h1>
                </div>
                <p className='text-[#BB8506] text-xl font-inter group-hover:font-bold transition-all duration-300 ease-in-out'>${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;