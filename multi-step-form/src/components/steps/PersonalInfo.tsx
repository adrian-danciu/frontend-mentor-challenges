import { useFormStore } from "../../store";

const PersonalInfo = () => {
  const { formData, updateFormData, errors } = useFormStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  return (
    <div className="flex flex-col md:mx-[100px] md:mt-10 font-ubuntu md:bg-transparent">
      <p className="text-4xl font-bold text-marineBlue mb-3">Personal info</p>
      <p className="text-xl text-gray-400">
        Please provide your name, email address, and phone number.
      </p>

      <div className="mt-10 flex flex-col gap-4">
        <div className="flex flex-col gap-2 relative">
          <label htmlFor="name">Name</label>
          {errors.name && (
            <p className="text-red-500 text-sm absolute right-0 font-bold">
              {errors.name}
            </p>
          )}
          <input
            type="text"
            name="name"
            placeholder="e.g. Stephen King"
            value={formData.name}
            className={`w-full border px-4 py-4 rounded-lg ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-2 relative">
          <label htmlFor="email">Email Address</label>
          {errors.email && (
            <p className="text-red-500 text-sm absolute right-0 font-bold">
              {errors.email}
            </p>
          )}
          <input
            type="email"
            name="email"
            placeholder="e.g. stephenking@lorem.com"
            value={formData.email}
            className={`w-full border px-4 py-4 rounded-lg ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-2 relative">
          <label htmlFor="phone">Phone Number</label>
          {errors.phone && (
            <p className="text-red-500 text-sm absolute right-0 font-bold">
              {errors.phone}
            </p>
          )}
          <input
            type="tel"
            name="phone"
            placeholder="e.g. +1 234 567 890"
            value={formData.phone}
            className={`w-full border px-4 py-4 rounded-lg ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
