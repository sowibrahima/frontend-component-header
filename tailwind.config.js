/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    DEFAULT: '#590D22',
                    burgundy: '#590D22',
                },
                action: {
                    gold: '#FFBA08',
                },
                neutral: {
                    bg: '#FAFAF7',
                    900: '#111827',
                    500: '#6B7280',
                    200: '#f8f8f4',
                    100: '#F3F4F6',
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            borderRadius: {
                xl: '24px',
                '3xl': '48px',
            },
            boxShadow: {
                premium: '0 4px 40px rgba(0,0,0,0.06)',
            },
        },
    },
    plugins: [],
};
