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
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-32">
      <img
        src={
          image === "imageTab1"
            ? imageTab1
            : image === "imageTab2"
              ? imageTab2
              : imageTab3
        }
        alt="Main I"
        className="relative z-10 w-full"
      />

      <div className="flex flex-col md:justify-start justify-center md:items-start items-center font-rubik">
        <p className="text-3xl text-darkText mb-6 md:text-left text-center">
          {title}
        </p>
        <p className="text-lg font-light text-darkText opacity-50 mb-8 md:text-left text-center">
          {description}
        </p>
        <div className="flex gap-4">
          <Button variant="primary" label={buttonText} />
        </div>
      </div>
    </div>
  );
};

export default Slide;
