

const Header = ({title, subTitle}) => {
    return (
        <div className='flex font-inter justify-center'>
            <div>
                <p className="border-b-[4px] border-b-[#E8E8E8] pb-3 text-xl italic text-[#D99904] inline-block w-[400px] text-center">
                    ---{title}---
                </p>
                <h1 className='text-[#151515] text-3xl md:text-[40px] uppercase text-center mt-5 pb-6 mb-8 md:mb-12 border-b-[4px] border-b-[#E8E8E8]'>{subTitle}</h1>
            </div>
        </div>
    );
};

export default Header;