/** @type {import('tailwindcss').Config} */
const config = {
  plugins: ["@tailwindcss/postcss"],
  theme: {
    extend: {
      colors: {
        'light-lilac': '#f0f0f8', // Add your custom color here
        'dark-lilac': '#b084cc', // Add your custom color here
        // ... other colors
      },
      boxShadow: {
        'dark-lilac-md': '0 4px 6px rgba(117, 97, 143, 0.25)',
        // ... other custom shadows
      },
    },
  },
};

export default config;