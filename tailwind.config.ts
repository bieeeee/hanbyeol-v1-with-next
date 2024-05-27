import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens:{
        'xl':'1440px'
      },
      fontFamily: {
        NEO: ['neodgm', 'sans-serif'],
        PSN: ['PSN', 'sans-serif']
      },
      colors:{
        'primaryColor':'#518581',
        'secondaryColor':'#FFB23F',
        'black':'#151411',
        'textColor':'#AFADB5'
      },
      backgroundImage: {
      },
    },
  },
  plugins: [],
}
export default config
