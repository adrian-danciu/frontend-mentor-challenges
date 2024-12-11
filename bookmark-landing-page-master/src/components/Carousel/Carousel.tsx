import { useState } from "react";
import Slide from "./Slide";

const carouselItems = [
  {
    tab: "Simple Bookmarking",
    title: "Bookmark in one click",
    image: "imageTab1",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    buttonText: "More Info",
  },
  {
    tab: "Speedy Searching",
    title: "Intelligent search",
    image: "imageTab2",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    buttonText: "More Info",
  },
  {
    tab: "Easy Sharing",
    title: "Share your bookmarks",
    image: "imageTab3",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    buttonText: "More Info",
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  const underlineTop = 66 + activeIndex * 69;
  const underlineWidth = `${carouselItems[0].tab.length * 10}px`;

  return (
    <div className="flex flex-col justify-center items-center mb-16 mx-8 md:mx-[165px] md:mb-[149px]">
      <p className="text-[24px] md:text-[32px] text-darkText font-medium leading-10 mb-[16px]">
        Features
      </p>
      <p className="text-[15px] md:text-[18px] leading-7 font-light text-darkText opacity-50 md:mb-[72px] w-full md:w-[38%] text-center">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>

      <div className="relative w-full max-w-3xl mb-[72px]">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 items-center text-center border-t md:border-t-0 md:border-b border-gray-300 pb-[31px]">
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

      <Slide
        title={carouselItems[activeIndex].title}
        image={carouselItems[activeIndex].image}
        description={carouselItems[activeIndex].description}
        buttonText={carouselItems[activeIndex].buttonText}
      />
    </div>
  );
};

export default Carousel;
