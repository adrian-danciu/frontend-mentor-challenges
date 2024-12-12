import { useState } from "react";
import iconError from "../../assets/icon-error.svg";
import Button from "../Button/Button";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleValidation = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(email));
  };

  return (
    <div
      className="bg-customBlue font-rubik text-white flex flex-col justify-center items-center pt-[54px] pb-[74px]"
      id="contact"
    >
      <p className="font-normal text-[13px] leading-[40px] tracking-[6px] mb-[24px]">
        35,000+ ALREADY JOINED
      </p>
      <p className="text-[32px] leading-[40px] font-normal mb-[36px] text-center md:w-[30%]">
        Stay up-to-date with what we’re doing
      </p>

      <form
        className="flex flex-col md:flex-row justify-center items-center gap-4"
        onSubmit={handleValidation}
      >
        <div className="relative w-[300px]">
          <input
            type="text"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`h-[48px] px-6 rounded-md w-full text-[14px] text-black placeholder:opacity-50 ${
              !isValid ? "border-2 border-red-500" : "border border-gray-300"
            }`}
          />
          {!isValid && (
            <img
              className="absolute z-10 top-[14px] right-[14px]"
              src={iconError}
            />
          )}
          {!isValid && (
            <p className="absolute font-rubik text-white text-[10px] bg-red-500 mt-[-5px] w-full left-0 p-2 rounded-b-md">
              Please enter a valid email address.
            </p>
          )}
        </div>
        <Button variant="secondary" label="Contact Us" />
      </form>
    </div>
  );
};

export default Newsletter;
