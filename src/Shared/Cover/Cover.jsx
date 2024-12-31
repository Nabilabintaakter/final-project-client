

const Cover = ({ img, title, description }) => {
    return (
        <div className="font-cinzel ">
            <div
                className={`hero h-[300px] md:h-[400px] lg:h-[600px] `}
                style={{
                    backgroundImage: `url(${img})`,
                }}>
                <div className={`hero-overlay h-[150px] md:h-[200px] lg:h-[350px] mt-10 md:mt-20 bg-opacity-60 w-[80%] md:w-[60%] mx-auto  max-w-4xl `}></div>
                <div className="text-center mt-10 md:mt-14 lg:mt-20">
                    <div className=" text-white uppercase">
                        <h1 className="mb-5 text-4xl md:text-5xl lg:text-[88px] font-bold">{title}</h1>
                        <p className="mb-5 text-base md:text-xl lg:text-2xl font-semibold">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;