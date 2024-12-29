

const ChefCard = ({item}) => {
    const { category,name, image, recipe, price } = item || {}
    return (
        <div className="h-[560px] bg-[#F3F3F3] font-inter group">
            <img className="w-full h-[300px] object-cover group-hover:scale-105 transition-all duration-700 ease-in-out" src={image} alt="" />
            <div className="flex flex-col py-8 space-y-4 justify-around items-center text-center px-6">
                <h1 className="text-2xl font-semibold">{category}</h1>
                <p className="text-[#151515]">{recipe}</p>
                <button className='mt-2 uppercase text-xl text-[#BB8506] font-medium bg-[#E8E8E8] rounded-[8px] border-b-[3px] border-b-[#BB8506] px-5 md:px-[30px] py-2 md:py-5 block mx-auto hover:bg-[#1F2937] hover:border-b-[#1F2937] transition-all duration-300'>Add to cart</button>
            </div>
        </div>
    );
};

export default ChefCard;