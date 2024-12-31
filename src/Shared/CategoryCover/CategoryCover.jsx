import { Parallax } from 'react-parallax';

const CategoryCover = ({ img, title, description }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            strength={-200}
        >
            <div className=" " style={{
                            backgroundImage: `url(${img})`,
                            backgroundSize: "cover", // object-cover এর সমান
                            backgroundPosition: "center",
                        }}>
                <div
                    className={`hero h-[350px] md:h-[400px] lg:h-[500px] `}
                    >
                    <div className={`hero-overlay h-[240px] md:h-[300px] lg:h-[350px] bg-opacity-60 w-[80%] md:w-[70%] mx-auto max-w-5xl `}></div>
                    <div className="text-center mt-6 md:mt-14 ">
                        <div className=" text-white ">
                            <h1 className="font-cinzel uppercase mb-5 text-3xl lg:text-[45px] font-semibold">{title}</h1>
                            <p className="font-inter mb-5 text-base w-[70%] md:w-[50%] mx-auto font-semibold">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default CategoryCover;