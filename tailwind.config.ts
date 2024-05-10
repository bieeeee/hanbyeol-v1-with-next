import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      screens:{
        'xl':'1440px'
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
