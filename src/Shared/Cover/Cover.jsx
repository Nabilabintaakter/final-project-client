import { Parallax } from 'react-parallax';

const Cover = ({ img, title, description }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            strength={-200}
        >
            <div className="font-cinzel " style={{
                            backgroundImage: `url(${img})`,
                            backgroundSize: "cover", 
                            backgroundPosition: "center",
                        }}>
                <div
                    className={`hero h-[400px] lg:h-[600px] `}
                    >
                    <div className={`hero-overlay h-[200px] lg:h-[350px] mt-10 md:mt-20 bg-opacity-60 w-[80%] md:w-[70%] mx-auto  max-w-7xl `}></div>
                    <div className="text-center mt-14 lg:mt-20">
                        <div className=" text-white uppercase">
                            <h1 className="mb-5 text-4xl md:text-5xl lg:text-[88px] font-bold">{title}</h1>
                            <p className="mb-5 text-base md:text-xl lg:text-2xl font-semibold">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;