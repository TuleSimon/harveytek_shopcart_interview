/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        outline: {
          100: "#4353ff",
        },
        primary: {
          100: "#003D29",
          200 : "#08AC0A"
        },
      },
      screens:{
        'xs':{max:'320px'},
        'sm':{max:'520px'},
        'sm2':{max:'768px'},
        'tab':{max:'1120px'},
        'lgh': {'raw': '(max-height: 1100px)'},
        'mdh': {'raw': '(max-height: 1000px)'},
        'smh': {'raw': '(max-height: 800px)'},
        'smh2': {'raw': '(max-height: 700px)'},
        'xsh': {'raw': '(max-height: 600px)',},
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
  ],
};
