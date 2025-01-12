import { useFormStore } from "../../store";

const Summary = () => {
  const { plan, addons, specificStep } = useFormStore();

  const selectedBilling = plan.billing.toLowerCase() as "monthly" | "yearly";
  const planPrice =
    selectedBilling === "monthly"
      ? plan.type === "Arcade"
        ? 9
        : plan.type === "Advanced"
          ? 12
          : 15
      : plan.type === "Arcade"
        ? 90
        : plan.type === "Advanced"
          ? 120
          : 150;

  const addonTotal = addons
    .filter((addon) => addon.selected)
    .reduce((total, addon) => total + addon.price[selectedBilling], 0);

  const totalPrice = planPrice + addonTotal;

  return (
    <div className="flex flex-col md:mx-[100px] md:mt-14 font-ubuntu">
      <p className="text-4xl font-bold text-marineBlue mb-3">Finishing up</p>
      <p className="text-xl text-gray-400 mb-6">
        Double-check everything looks OK before confirming.
      </p>

      <div className="bg-gray-100 p-6 rounded-lg">
        <div className="flex justify-between items-center mb-6 border-b pb-6">
          <div>
            <p className="text-lg font-bold text-marineBlue">
              {plan.type} ({plan.billing})
            </p>
            <button
              className="text-sm text-gray-500 underline hover:text-purpleBlue"
              onClick={() => specificStep(1)}
            >
              Change
            </button>
          </div>
          <p className="text-lg font-bold text-marineBlue">
            ${planPrice}/{plan.billing === "monthly" ? "mo" : "yr"}
          </p>
        </div>

        <div className="space-y-4">
          {addons
            .filter((addon) => addon.selected)
            .map((addon) => (
              <div key={addon.name} className="flex justify-between">
                <p className="text-gray-500">{addon.name}</p>
                <p className="text-marineBlue">
                  +${addon.price[selectedBilling]}/
                  {plan.billing === "monthly" ? "mo" : "yr"}
                </p>
              </div>
            ))}
        </div>
      </div>

      <div className="flex justify-between items-center mt-6 px-6">
        <p className="text-gray-500">
          Total (per {plan.billing.toLowerCase()})
        </p>
        <p className="text-2xl font-bold text-purpleBlue">
          +${totalPrice}/{plan.billing === "monthly" ? "mo" : "yr"}
        </p>
      </div>
    </div>
  );
};

export default Summary;
