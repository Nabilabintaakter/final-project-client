import featuredImg from '../../../assets/home/featured.jpg';
import Header from '../../../Shared/Header/Header';

const Featured = () => {
    return (
        <div>
            <div
                className="hero items-start h-[905px] md:h-[778px] bg-fixed"
                style={{
                    backgroundImage: `url(${featuredImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%'
                }}>
                <div className="hero-overlay  bg-opacity-60"></div>
                <div className=" py-8 md:py-12 lg:py-20 w-[90%] mx-auto max-w-7xl">
                    {/* header */}
                    <div className='flex font-inter justify-center '>
                        <div>
                            <p className="border-b-[4px] border-b-[#E8E8E8] pb-3 text-xl italic text-[#D99904] inline-block w-[400px] text-center">
                                ---Check it out---
                            </p>
                            <h1 className='text-white text-3xl md:text-[40px] uppercase text-center mt-5 pb-6 mb-8 md:mb-12 border-b-[4px] border-b-[#E8E8E8]'>FROM OUR MENU</h1>
                        </div>
                    </div>
                    <div className='md:flex items-center md:gap-8 lg:gap-16 text-white'>
                        <div className='w-full md:w-1/2'><img className='h-[400px]' src={featuredImg} alt="" /></div>
                        <div className='mt-8 md:mt-0 text-xl w-fit md:w-1/2 '>
                            <p>February 17, 2029</p>
                            <h1 className='uppercase'>Where can i get some?</h1>
                            <p>Discover Bistro Boss, where exquisite flavors meet exceptional dining. Enjoy gourmet dishes, outstanding service, and a warm ambiance, creating memorable moments. Experience culinary perfection crafted with passion, ensuring every visit feels special.</p>
                            <button className='mt-6 uppercase text-xl font-medium bg-[#1f29372f] rounded-b-[8px] border-b-[3px] border-b-white px-5 md:px-[30px] py-2 md:py-5 hover:bg-[#1F2937] text-white hover:shadow-md  transition-all duration-300'>order now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;