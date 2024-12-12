import google from "../../assets/logo-chrome.svg";
import firefox from "../../assets/logo-firefox.svg";
import opera from "../../assets/logo-opera.svg";
import { CardProps } from "../../types";

import Button from "../Button/Button";

const Card = ({ image, title, subtitle, index }: CardProps) => {
  return (
    <div
      className="flex flex-col justify-center items-center w-72 pt-12 pb-6 shadow-lg rounded-lg font-rubik"
      style={{ marginTop: index === 1 ? "40px" : index === 2 ? "80px" : "0px" }}
    >
      <img
        className="mb-8"
        src={
          image === "google" ? google : image === "firefox" ? firefox : opera
        }
      />
      <p className="text-xl font-medium">{title}</p>
      <p className="text-sm leading-7 font-normal text-darkText opacity-50">
        {subtitle}
      </p>
      <div className="relative w-full flex flex-col items-center pt-8">
        <div className="relative w-full flex justify-center items-center">
          <div className="flex space-x-3.5">
            {Array.from({ length: 280 / 17 }).map((_, index) => (
              <div
                key={index}
                className="w-1 h-1 bg-[#495DCF] opacity-20 rounded-full"
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
