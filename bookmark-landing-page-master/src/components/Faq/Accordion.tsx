import { useState } from "react";

interface AccordionProps {
  title: string;
  description: string;
}

const Accordion = ({ title, description }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>{title}</button>
      {isOpen && <p>{description}</p>}
    </div>
  );
};

export default Accordion;
