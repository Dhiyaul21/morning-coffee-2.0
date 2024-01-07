/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./dist/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: "Poppins, ui-serif",
            },
            colors: {
                mainColor: "#F2F1EB",
                ijoStb: "#88AB8E",
                mocca: "#f1d3c0",
                whiteMocca: "#EEE7DA",
            },
        },
    },
    plugins: [],
};
