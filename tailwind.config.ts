import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            mobile: '320px',
            tablet: '768px',
            desktop: '1280px',
        },

        extend: {
            lineClamp: {
                10: '10',
            },

            animation: {
                'infinite-scroll': 'infinite-scroll 50s linear infinite',
            },
            keyframes: {
                'infinite-scroll': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            fontFamily: {
                primary: ['var(--font-primary)'],
                secondary: ['var(--font-secondary)'],
                accent: ['var(--font-accent)'],
            },
        },
    },
    plugins: [],
}
export default config