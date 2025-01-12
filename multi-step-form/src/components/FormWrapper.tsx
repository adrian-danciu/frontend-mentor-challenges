import { useFormStore } from "../store";
import Addons from "./steps/AddOns";
import PersonalInfo from "./steps/PersonalInfo";
import PlanSelection from "./steps/PlanSelection";
import Summary from "./steps/Summary";
import ThankYou from "./steps/ThankYou";

const stepsSummary = ["Your Info", "Select Plan", "Add-ons", "Summary"];

const FormWrapper = () => {
  const { step, submitted, submitForm, nextStep, prevStep } = useFormStore();

  const renderStep = () => {
    if (submitted) return <ThankYou />;
    switch (step) {
      case 0:
        return <PersonalInfo />;
      case 1:
        return <PlanSelection />;
      case 2:
        return <Addons />;
      case 3:
        return <Summary />;
      default:
        return <PersonalInfo />;
    }
  };

  return (
    <div className="h-[80%] md:w-[70%] w-[100%] md:mx-auto grid md:grid-cols-4 grid-cols-1 md:grid-rows-4 md:bg-white rounded-2xl md:p-4">
      <div className="col-span-4 md:col-span-1 md:row-span-4 row-span-1 flex md:flex-col flex-row md:justify-start justify-center relative bg-cover bg-no-repeat bg-center md:rounded-2xl bg-sidebar-mobile md:bg-sidebar-desktop h-[172px] md:h-auto">
        {stepsSummary.map((item, index) => (
          <div
            key={index}
            className="flex flex-row gap-4 font-ubuntu md:px-8 px-2 pt-10"
          >
            <div
              key={index}
              className={`${step === index ? "bg-lightBlue" : "bg-transparent"}
              ${step === index ? "text-marineBlue" : "text-white"}
              w-8 h-8 rounded-full flex items-center justify-center text-white font-bold border`}
            >
              {index + 1}
            </div>

            <div className="md:flex md:flex-col hidden">
              <p className="uppercase text-xs text-lightBlue opacity-80 font-thin">
                Step {index + 1}
              </p>
              <p className="text-white uppercase text-sm tracking-[1px] font-bold">
                {item}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="md:col-span-3 md:row-span-3 md:relative md:top-0 md:ml-0 md:mr-0 md:px-0 md:py-0 col-span-2 bg-white ml-4 mr-4 px-6 py-8 absolute top-[99px] rounded-2xl">
        {renderStep()}
      </div>
      {!submitted && (
        <div className="fixed bottom-0 flex justify-between items-center md:px-[100px] px-4 md:mt-16 h-[72px] col-span-3 font-ubuntu md:bg-transparent w-full bg-white md:relative">
          {step > 0 ? (
            <button
              onClick={prevStep}
              className="bg-transparent h-12 text-gray-400 font-medium px-6 rounded-lg"
            >
              Go Back
            </button>
          ) : (
            <div></div>
          )}
          {step < stepsSummary.length - 1 ? (
            <button
              onClick={nextStep}
              className="bg-marineBlue text-white px-6 h-12 rounded-lg"
            >
              Next Step
            </button>
          ) : (
            <button
              className="bg-purpleBlue text-white px-6 h-12 rounded-lg hover:opacity-80"
              onClick={() => submitForm()}
            >
              Confirm
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default FormWrapper;
