/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        marineBlue: "hsl(213, 96%, 18%)",
        purpleBlue: "hsl(243, 100%, 62%)",
        pastelBlue: "hsl(228, 100%, 84%)",
        lightBlue: "hsl(206, 94%, 87%)",
        strawberryRed: "hsl(354, 84%, 57%)",
        background: "#EFF5FF",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      backgroundImage: {
        "sidebar-desktop": "url('/src/assets/bg-sidebar-desktop.svg')",
        "sidebar-mobile": "url('/src/assets/bg-sidebar-mobile.svg')",
      },
    },
  },
  plugins: [],
};
