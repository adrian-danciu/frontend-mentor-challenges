import google from "../../assets/logo-chrome.svg";
import firefox from "../../assets/logo-firefox.svg";
import opera from "../../assets/logo-opera.svg";

import Button from "../Button/Button";

interface CardProps {
  index: number;
  image: string;
  title: string;
  subtitle: string;
}

const Card = ({ image, title, subtitle, index }: CardProps) => {
  return (
    <div
      className="flex flex-col justify-center items-center w-[280px] pt-[49px] pb-[24px] shadow-lg rounded-lg font-rubik"
      style={{ marginTop: index === 1 ? "40px" : index === 2 ? "80px" : "0px" }}
    >
      <img
        className="mb-8"
        src={
          image === "google" ? google : image === "firefox" ? firefox : opera
        }
      />
      <p className="text-[20px] tracking-[0.25px] font-medium">{title}</p>
      <p className="text-[15px] leading-7 font-normal text-darkText opacity-50">
        {subtitle}
      </p>
      <div className="relative w-full flex flex-col items-center pt-8">
        <div className="relative w-full flex justify-center items-center">
          <div className="flex space-x-[13px]">
            {Array.from({ length: 280 / 17 }).map((_, index) => (
              <div
                key={index}
                className="w-[4px] h-[4px] bg-[#495DCF] opacity-20 rounded-full"
              ></div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <Button variant="primary" label="Add & Install Extension" />
        </div>
      </div>
    </div>
  );
};

export default Card;
