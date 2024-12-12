import Button from "../Button/Button";
import Accordion from "./Accordion";

const faqs = [
  {
    title: "What is Bookmark?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget",
  },
  {
    title: "How can I request a new browser?",
    description:
      "Vivamus luct us urna sed urna ultrices, ac dictum ex tempor. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.",
  },
  {
    title: "Is there a mobile app?",
    description:
      "Pellentesque nec sapien sit amet erat moll is suscipit. Praesent id quam vel sem maximus posuere. Nullam vel.",
  },
  {
    title: "What about other Chromium browsers?",
    description:
      "Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
  },
];

const Faq = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-16 mx-8 md:mx-[165px]">
      <p className="text-[24px] md:text-[32px] text-darkText font-medium leading-10 mb-[16px]">
        Frequently Asked Questions
      </p>
      <p className="text-[15px] md:text-[18px] leading-7 font-light text-darkText opacity-50 md:mb-[48px] w-full md:w-[38%] text-center">
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          title={faq.title}
          description={faq.description}
        />
      ))}
      <div className="mt-[48px] md:mt-[54px]">
        <Button variant="primary" label="More info" />
      </div>
    </div>
  );
};

export default Faq;
