import Button from "../Button/Button";

const Newsletter = () => {
  return (
    <div className="bg-customBlue font-rubik text-white flex flex-col justify-center items-center pt-[54px] pb-[74px]">
      <p className="font-normal text-[13px] leading-[40px] tracking-[6px] mb-[24px]">
        35,000+ ALREADY JOINED
      </p>
      <p
        className="text-[32px] leading-[40px] font-normal mb-[36px] text-center md:w-[30%]
      "
      >
        Stay up-to-date with what we’re doing
      </p>
      <form className="flex justify-center items-center gap-4">
        <input
          type="text"
          placeholder="Enter your email address"
          className="h-[48px] px-6 rounded-md w-[300px] text-[14px] text-black placeholder:opacity-50"
        />
        <Button variant="secondary" label="Contact Us" />
      </form>
    </div>
  );
};

export default Newsletter;
