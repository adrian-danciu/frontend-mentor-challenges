import React from "react";
import { ButtonProps } from "../../types";

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  onClick,
}) => {
  const buttonClass = `rounded-lg font-normal focus:outline-none transition ease-in-out px-8 py-3 text-sm font-rubik shadow-md border-transparent border-2
    ${variant === "primary" ? "bg-customBlue text-white hover:bg-white hover:text-customBlue hover:border-customBlue" : ""}
    ${variant === "secondary" ? "bg-customRed text-white hover:bg-white hover:text-customRed hover:border-customRed" : ""}
    ${variant === "tertiary" ? "bg-[#F7F7F7] text-[#5B6074] hover:bg-white hover:border-[#5B6074]" : ""}`;

  return (
    <button className={buttonClass.trim()} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
