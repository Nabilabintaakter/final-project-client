import chef from '../../../assets/home/chef-service.jpg';

const RestaurantIntro = () => {
    return (
        <div className='my-12 md:my-16 w-[90%] mx-auto max-w-7xl flex justify-center items-center bg-fixed' 
            style={{
                backgroundImage: `url(${chef})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '572px', 
                width: '100%'
            }}
        >
            <div className='bg-white w-[90%] py-16 md:w-[80%] text-center'>
                <h1 className='font-cinzel text-[#151515] text-[45px] '>Bistro Boss</h1>
                <p className='text-[#151515] w-[95%] md:w-[80%] mx-auto'>Welcome to Bistro Boss – where culinary artistry meets unforgettable dining experiences. Savor world-class cuisines crafted with passion, indulge in impeccable service, and immerse yourself in a warm, inviting ambiance that feels like home away from home.
                </p>
            </div>
        </div>
    );
};

export default RestaurantIntro;
