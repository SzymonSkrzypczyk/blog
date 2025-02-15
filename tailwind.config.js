import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontSize: {
                sm: '0.750rem',
                base: '1rem',
                xl: '1.333rem',
                '2xl': '1.777rem',
                '3xl': '2.369rem',
                '4xl': '3.158rem',
                '5xl': '4.210rem',
            },
            fontFamily: {
                heading: 'Asar',
                body: 'Asar',
            },
            fontWeight: {
                normal: '400',
                bold: '700',
            },
            colors: {
                customCodeBg: '#b1a2d2',
                backgroundColor: "#0e0b14",
                textColor: "#e8e4ef",
                primaryColor: "#b1a2d2",
                secondaryColor: "#4d367a",
                accentColor: "#8567c2"
            },
        },
    },

    plugins: [
        forms,
        require('@tailwindcss/typography')
    ],
};
