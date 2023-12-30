const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js",
        'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}'
    ],
    plugins: [
        require('flowbite/plugin')
    ],
    theme: {
        extend: {},
        fontFamily: {
            sans: [
                'Manrope'
            ],
        },
        corePlugins: {
            fontWeight: 600
        }
    },
}