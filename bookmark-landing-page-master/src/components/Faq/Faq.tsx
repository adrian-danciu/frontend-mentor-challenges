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
    <div>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          title={faq.title}
          description={faq.description}
        />
      ))}
    </div>
  );
};

export default Faq;
