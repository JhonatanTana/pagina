import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scale:{
      '121': '1.2',
      '290': '1.8',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        //aqui voce vai colocar o nome da cor entre aspas simples dar dois pontos e entre aspas simples dnv coloca o codigo da cor, e termina com virgula para fazer outra cor
        //caso de erro use o comando npm run build, se der erro me manda msg que eu arrumo
        'custom-blue-1': '#2B7D8F',
        'custom-blue-2': '#293D8F',
        'custom-blue-3': '#295D8F',
        'custom-blue-4': '#3C8E82',
        'custom-blue-5': '#36298F',
        'custom-blue-6': '#7E868F',
        'paleta-1.1': '#3d348b',
        'paleta-1.2': '#7678ED',
        'paleta-1.3': '#c3c3c3',
        'paleta-1.4': '#6E675F',
        'paleta-1.5': '#cec3c1',           
        'paleta-2.1': '#242038',
        'paleta-2.2': '#9067c6',
        'paleta-2.3': '#8d86c9',
        'paleta-2.4': '#b3dee2',
        'paleta-2.5': '#eaf2d7',        
        'paleta-3.1': '#242038',
        'paleta-3.2': '#9067c6',
        'paleta-3.3': '#8d86c9',
        'paleta-3.4': '#b3dee2',
        'paleta-3.5': '#eaf2d7',
        'paleta-3.6': '#242038',
        'paleta-3.7': '#9067c6',
        'paleta-3.8': '#8d86c9',
        'paleta-3.9': '#b3dee2',
        'paleta-3.10': '#eaf2d7',
       'cor-do-jhonatan':'#ffcbdb',
      },
    },
  },
  plugins: [],
};
export default config;
