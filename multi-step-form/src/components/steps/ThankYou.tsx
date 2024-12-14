import thankYouIcon from "../../assets/icon-thank-you.svg";

const ThankYou = () => {
  return (
    <div className="flex flex-col items-center justify-center md:mx-[100px] md:mt-14 font-ubuntu text-center h-full">
      <img src={thankYouIcon} alt="Thank You Icon" className="mb-6 w-20 h-20" />

      <p className="text-4xl font-bold text-marineBlue mb-4">Thank you!</p>

      <p className="text-xl text-gray-400 leading-7">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default ThankYou;
