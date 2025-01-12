import iconAdvanced from "../../assets/icon-advanced.svg";
import iconArcade from "../../assets/icon-arcade.svg";
import iconPro from "../../assets/icon-pro.svg";
import { useFormStore } from "../../store";

const PlanSelection = () => {
  const { plan, updatePlan } = useFormStore();

  const handlePlanChange = (type: string) => {
    updatePlan({ ...plan, type });
  };

  const handleBillingToggle = () => {
    updatePlan({
      ...plan,
      billing: plan.billing === "monthly" ? "yearly" : "monthly",
    });
  };

  const plans = [
    {
      name: "Arcade",
      priceMonthly: "$9/mo",
      priceYearly: "$90/yr",
      bonus: "2 months free",
    },
    {
      name: "Advanced",
      priceMonthly: "$12/mo",
      priceYearly: "$120/yr",
      bonus: "2 months free",
    },
    {
      name: "Pro",
      priceMonthly: "$15/mo",
      priceYearly: "$150/yr",
      bonus: "2 months free",
    },
  ];

  return (
    <div className="flex flex-col md:mx-[100px] md:mt-14 font-ubuntu">
      <p className="text-4xl font-bold text-marineBlue mb-3">
        Select your plan
      </p>
      <p className="text-xl text-gray-400">
        You have the option of monthly or yearly billing.
      </p>

      <div className="mt-10 grid md:grid-cols-3 grid-cols-1 gap-4">
        {plans.map((planOption) => (
          <div
            key={planOption.name}
            onClick={() => handlePlanChange(planOption.name)}
            className={`cursor-pointer border rounded-lg p-6 ${
              plan.type === planOption.name
                ? "border-purpleBlue bg-gray-100"
                : "border-gray-200"
            }`}
          >
            <img
              className="mb-10"
              src={
                planOption.name === "Arcade"
                  ? iconArcade
                  : planOption.name === "Advanced"
                    ? iconAdvanced
                    : iconPro
              }
            />

            <p className="text-xl font-bold text-marineBlue">
              {planOption.name}
            </p>
            <p className="text-lg text-gray-400">
              {plan.billing === "monthly"
                ? planOption.priceMonthly
                : planOption.priceYearly}
            </p>
            {plan.billing === "yearly" && (
              <p className="text-sm text-marineBlue mt-2">{planOption.bonus}</p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center items-center gap-4">
        <p
          className={`text-lg ${plan.billing === "monthly" ? "text-marineBlue" : "text-gray-400"}`}
        >
          Monthly
        </p>
        <div
          onClick={handleBillingToggle}
          className="w-12 h-6 bg-marineBlue rounded-full flex items-center px-1 cursor-pointer"
        >
          <div
            className={`w-4 h-4 bg-white rounded-full transition-transform ${
              plan.billing === "yearly" ? "translate-x-6" : ""
            }`}
          ></div>
        </div>
        <p
          className={`text-lg ${plan.billing === "yearly" ? "text-marineBlue" : "text-gray-400"}`}
        >
          Yearly
        </p>
      </div>
    </div>
  );
};

export default PlanSelection;
