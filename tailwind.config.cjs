/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                pattern: "url('/img/bg-pattern.svg')"
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
                pacifico: ['Pacifico', 'sans-serif']
            },
            fontSize: {
                xxxs: '.4rem',
                xxs: '.5rem'
            }
        }
    },
    plugins: []
}
