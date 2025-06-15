// tailwind.config.js
export default {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}', // Important for Vue + Vite
    ],
    theme: {
        extend: {
            colors: {
                primary: '#3a86ff',
                secondary: '#8338ec',
                dark: '#1a1a2e',
                light: '#f8f9fa',
            },
            animation: {
                float: 'float 6s ease-in-out infinite',
                'fade-in': 'fadeIn 1s ease-in',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
