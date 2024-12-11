import imageTab1 from "../../assets/illustration-features-tab-1.svg";
import imageTab2 from "../../assets/illustration-features-tab-2.svg";
import imageTab3 from "../../assets/illustration-features-tab-3.svg";
import Button from "../Button/Button";

interface SlideProps {
  title: string;
  image: string;
  description: string;
  buttonText: string;
}

const Slide = ({ title, image, description, buttonText }: SlideProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-[125px]">
      <img
        src={
          image === "imageTab1"
            ? imageTab1
            : image === "imageTab2"
              ? imageTab2
              : imageTab3
        }
        alt="Main Image"
        className="relative z-10 w-full"
      />

      <div className="flex flex-col justify-start font-rubik">
        <p className="text-[32px] text-darkText mb-[24px] leading-[52px] tracking-[-0.15px]">
          {title}
        </p>
        <p className="text-[18px] leading-[28px] font-light text-darkText opacity-50 mb-[32px]">
          {description}
        </p>
        <div className="flex gap-[16px]">
          <Button variant="primary" label={buttonText} />
        </div>
      </div>
    </div>
  );
};

export default Slide;
