import illustration from "../../assets/illustration-hero.svg";
import Button from "../Button/Button";

const HeroBanner = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 md:justify-between items-center ml-8 md:ml-[165px] md:mr-[103px] mr-10 mb-[140px]">
      <div className="md:order-1 order-2 flex flex-col justify-start font-rubik text-center md:text-left">
        <p className="text-[30px] md:text-[48px] text-darkText mb-[24px] leading-[54px] tracking-[-0.15px">
          A Simple Bookmark Manager
        </p>
        <p className="text-[15px] md:text-[18px] leading-[28px] font-light text-darkText opacity-50 mb-[32px]">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex md:justify-start justify-center gap-[14px]">
          <Button variant="primary" label="Get it on Chrome" />
          <Button variant="tertiary" label="Get it on Firefox" />
        </div>
      </div>

      <img src={illustration} className="order-1 md:order-2" />
    </div>
  );
};

export default HeroBanner;
