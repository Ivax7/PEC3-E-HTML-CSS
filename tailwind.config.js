/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',
    './**/*.js',

  ],
  theme: {
    extend: {
      letterSpacing: {
        'wide2': '2px',
      },
      colors: {
        primario: '#fff',
        'primario-oscuro': '#a8a8a8',
        secundario: 'color(display-p3 0.09 0.57 0.09)',
        'secundario-oscuro': '#198754',
        fondo: '#161616',
        'fondo-oscuro': '#464646',
        'fondo-claro': '#ffffff9d',
        terciario: '#2c7a7b',
        'terciario-transparente': '#2c7a7bd8',
        success: '#198754',
      },
      fontFamily: {
        principal: ['Neue Montreal', 'sans-serif'],
        secundaria: ['Neue Montreal Light', 'sans-serif'],
      },
    },
    plugins: [],
  }
}

