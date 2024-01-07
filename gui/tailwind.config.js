/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "font-color": "#051006",
        "background-color": "#f7fdf8",
        "primary-color": "#4dcb5e",
        "secondary-color": "#e0f6e2",
        "accent-color": "#195721",
        "font-color/dark": "#f7fdf8",
        "background-color/dark": "#051006",
        "primary-color/dark": "#4dcb5e",
        "secondary-color/dark": "#0e3011",
        "accent-color/dark": "#41c853",
      },
      keyframes: () => ({
        highlight: {
          "0%": {
            transform: "translateX(-15%)",
            opacity: "0%",
          },
          "15%": {
            transform: "translateX(-15%)",
            opacity: "0%",
          },
          "65%": {
            opacity: "100%",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        "highlight-slash": {
          "0%": {
            transform: "translateX(-150%)",
            opacity: "0%",
          },
          "15%": {
            transform: "translateX(-150%)",
            opacity: "0%",
          },
          "65%": {
            opacity: "100%",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        "bounce-back": {
          "0%": {
            transform: "none;",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1);"
          },
          "50%": {
            transform: "translateX(-25%);",
            "animation-timing-function": "cubic-bezier(0,0,0.2,1);"
          },
          "100%": {
            transform: "none;",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1);"
          }
        },
        "bounce-forward": {
          "0%": {
            transform: "none;",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1);"
          },
          "50%": {
            transform: "translateX(25%);",
            "animation-timing-function": "cubic-bezier(0,0,0.2,1);"
          },
          "100%": {
            transform: "none;",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1);"
          }
        },
        "bounce-small": {
          "0%": {
            transform: "none;",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1);"
          },
          "50%": {
            transform: "translateY(10%);",
            "animation-timing-function": "cubic-bezier(0,0,0.2,1);"
          },
          "100%": {
            transform: "none;",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1);"
          }
        },
        "bounce-normal": {
          "0%": {
            transform: "none;",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1);"
          },
          "50%": {
            transform: "translateY(-25%);",
            "animation-timing-function": "cubic-bezier(0,0,0.2,1);"
          },
          "100%": {
            transform: "none;",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1);"
          }
        },
        "rotate": {
          "0%": {
            transform: "none;",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1);"
          },
          "50%": {
            transform: "rotate(90deg);",
            "animation-timing-function": "cubic-bezier(0,0,0.2,1);"
          },
          "100%": {
            transform: "none;",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1);"
          }
        },
        "maximize": {
          "0%": {
            transform: "none;",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1);",
          },
          "50%": {
            transform: "translate(-15%, 15%);",
            "animation-timing-function": "cubic-bezier(0,0,0.2,1);",
          },
        }
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
};
