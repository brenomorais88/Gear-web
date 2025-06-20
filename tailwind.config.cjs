/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#B70000",
                gear: {
                    red: "#B70000",
                    gray: "#F6F6F7",
                    textGray: "#6B7280",
                    darkGray: "#9E9E9E",
                    ice: "#FFFFFF",
                    black: "#040404",
                },
            },
        },
    },
    plugins: [],
};