import { useState } from "react";
import { carouselItems } from "../../constants";
import Slide from "./Slide";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  const underlineTop = 66 + activeIndex * 69;
  const underlineWidth = `${carouselItems[0].tab.length * 10}px`;

  return (
    <div
      className="flex flex-col justify-center items-center mb-16 mx-8 md:mx-40 md:mb-36"
      id="features"
    >
      <p className="text-2xl md:text-3xl text-darkText font-medium leading-10 mb-4">
        Features
      </p>
      <p className="text-base md:text-lg leading-7 font-light text-darkText opacity-50 md:mb-20 w-full md:w-5/12 text-center">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>

      <div className="relative w-full max-w-3xl mb-20">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 items-center text-center border-t md:border-t-0 md:border-b border-gray-300 pb-8">
          {carouselItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`px-6 py-6 md:py-2 text-sm font-medium transition-colors text-darkText border-b border-gray-300 md:border-0`}
            >
              {item.tab}
            </button>
          ))}
        </div>

        <div
          className="absolute md:hidden h-1 bg-customRed transition-all duration-300"
          style={{
            width: underlineWidth,
            top: `${underlineTop}px`,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        ></div>

        <div
          className="hidden md:block absolute md:bottom-0 h-1 bg-customRed transition-transform duration-300"
          style={{
            width: `${100 / carouselItems.length}%`,
            transform: `translateX(${activeIndex * 100}%)`,
          }}
        ></div>
      </div>

      <div className="relative">
        <div className="absolute md:top-[80%] sm:top-[40%] top-[25%] md:left-[-165px] md:w-[80%] w-[130%] lg:h-[352px] h-[200px] bg-[#5267DF] transform -translate-x-[30%] -translate-y-[50%] rounded-r-full -z-10"></div>

        <Slide
          title={carouselItems[activeIndex].title}
          image={carouselItems[activeIndex].image}
          description={carouselItems[activeIndex].description}
          buttonText={carouselItems[activeIndex].buttonText}
        />
      </div>
    </div>
  );
};

export default Carousel;
