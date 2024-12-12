import { useState } from "react";

interface AccordionProps {
  title: string;
  description: string;
}

const Accordion = ({ title, description }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:w-[540px] w-full border-t border-b py-[19px] font-rubik">
      <button
        className="w-full flex flex-row justify-between items-center text-[18px] hover:text-[#FA5959]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <svg
          className={`transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"}`}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="12"
        >
          <path
            fill="none"
            stroke={`${isOpen ? "#FA5959" : "#5267DF"}`}
            strokeWidth="3"
            d="M1 1l8 8 8-8"
          />
        </svg>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="mt-4 text-[16px] leading-[36px] text-darkText opacity-75">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Accordion;
