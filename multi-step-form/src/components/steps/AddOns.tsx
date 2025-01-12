import { useFormStore } from "../../store";

const Addons = () => {
  const { addons, toggleAddon, plan } = useFormStore();

  return (
    <div className="flex flex-col md:mx-[100px] md:mt-14 font-ubuntu">
      <p className="text-4xl font-bold text-marineBlue mb-3">Pick add-ons</p>
      <p className="text-xl text-gray-400">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="mt-10 flex flex-col gap-4">
        {addons.map((addon) => (
          <div
            key={addon.name}
            className={`flex items-center justify-between border rounded-lg px-6 py-4 cursor-pointer ${
              addon.selected
                ? "border-purpleBlue bg-gray-100"
                : "border-gray-200"
            }`}
            onClick={() => toggleAddon(addon.name)}
          >
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={addon.selected}
                onChange={() => {}}
                className="w-6 h-6"
              />
              <div>
                <p className="text-lg font-bold text-marineBlue">
                  {addon.name}
                </p>
                <p className="text-sm text-gray-400">
                  Access to multiplayer games
                </p>
              </div>
            </div>
            <p className="text-lg text-marineBlue font-bold">
              +$
              {plan.billing === "monthly"
                ? addon.price.monthly
                : addon.price.yearly}
              /{plan.billing.toLowerCase()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Addons;
