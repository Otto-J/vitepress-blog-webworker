/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./.vitepress/**/*.{js,ts,vue}",
    "./posts/**/*.md",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
}
