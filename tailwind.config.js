/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
'./app/**/*.{js,ts,jsx,tsx}',
'./components/**/*.{js,ts,jsx,tsx}'
],
theme: {
extend: {
fontFamily: {
sans: ['var(--font-roboto)', 'sans-serif']
},
colors: {
lifestyle: {
primary: '#1c1c1c', // main text
gray: '#6b6b6b', // secondary text
bg: '#f5f5f5', // light background sections
accent: '#ea008a', // pink accent
border: '#e5e5e5'
}
},
boxShadow: {
subtle: '0 1px 3px rgba(0,0,0,0.08)'
},
spacing: {
header: '72px' // real site approx height
}
}
},
plugins: []
}