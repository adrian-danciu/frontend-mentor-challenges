import Card from "../Card/Card";

const cardsConfig = [
  {
    image: "google",
    title: "Add to Chrome",
    subtitle: "Minimum version 62",
  },
  {
    image: "firefox",
    title: "Add to Firefox",
    subtitle: "Minimum version 55",
  },
  {
    image: "opera",
    title: "Add to Opera",
    subtitle: "Minimum version 46",
  },
];

const CardsSection = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-16 mx-8 md:mx-[165px]">
      <p className="text-[24px] md:text-[32px] text-darkText font-medium leading-10 mb-[16px]">
        Download the extension
      </p>
      <p className="text-[15px] md:text-[18px] leading-7 font-light text-darkText opacity-50 md:mb-[48px] w-full md:w-[38%] text-center">
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>
      <div className="flex flex-col md:flex-row md:items-start items-center justify-center gap-[34px]  md:mb-[149px]">
        {cardsConfig.map((card, index) => (
          <Card
            index={index}
            key={index}
            image={card.image}
            title={card.title}
            subtitle={card.subtitle}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsSection;
