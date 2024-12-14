import { create } from "zustand";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

interface Plan {
  type: string;
  billing: "monthly" | "yearly";
}

interface Addon {
  name: string;
  price: { monthly: number; yearly: number };
  selected: boolean;
}

interface FormStore {
  step: number;
  formData: FormData;
  plan: Plan;
  addons: Addon[];
  submitted: boolean;
  toggleAddon: (name: string) => void;
  errors: Partial<FormData>;
  nextStep: () => void;
  prevStep: () => void;
  specificStep: (step: number) => void;
  updateFormData: (data: Partial<FormData>) => void;
  updatePlan: (plan: Plan) => void;
  validateStep: () => boolean;
  submitForm: () => void;
}

export const useFormStore = create<FormStore>((set, get) => ({
  step: 0,
  formData: {
    name: "",
    email: "",
    phone: "",
  },
  plan: {
    type: "Arcade",
    billing: "monthly",
  },

  errors: {},
  nextStep: () => {
    const isValid = get().validateStep();
    if (isValid) {
      set((state) => ({ step: state.step + 1, errors: {} }));
    }
  },
  prevStep: () => set((state) => ({ step: Math.max(state.step - 1, 0) })),
  specificStep: (step: number) => set(() => ({ step })),
  updateFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),
  updatePlan: (plan: Plan) =>
    set(() => ({
      plan,
    })),
  addons: [
    {
      name: "Online service",
      price: { monthly: 1, yearly: 10 },
      selected: false,
    },
    {
      name: "Larger storage",
      price: { monthly: 2, yearly: 20 },
      selected: false,
    },
    {
      name: "Customizable profile",
      price: { monthly: 2, yearly: 20 },
      selected: false,
    },
  ],
  toggleAddon: (name: string) =>
    set((state) => ({
      addons: state.addons.map((addon) =>
        addon.name === name ? { ...addon, selected: !addon.selected } : addon
      ),
    })),
  validateStep: () => {
    const { formData } = get();
    const errors: Partial<FormData> = {};

    if (!formData.name.trim()) errors.name = "This field is required";
    if (!formData.email.trim()) errors.email = "This field is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errors.email = "Invalid email address";
    if (!formData.phone.trim()) errors.phone = "This field is required";

    set({ errors });
    return Object.keys(errors).length === 0;
  },
  submitted: false,
  submitForm: () => set({ submitted: true }),
}));
