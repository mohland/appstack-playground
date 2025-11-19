const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      colors: {
        // AppStack theme colors
        'appstack': {
          primary: '#3F80EA',
          secondary: '#495057',
          success: '#4BBF73',
          info: '#1F9BCF',
          warning: '#E5A54B',
          danger: '#d9534f',
          light: '#eff2f5',
          dark: '#293042',
          // Additional brand colors
          blue: '#3F80EA',
          indigo: '#6610f2',
          purple: '#6f42c1',
          pink: '#e83e8c',
          red: '#d9534f',
          orange: '#fd7e14',
          yellow: '#E5A54B',
          green: '#4BBF73',
          teal: '#20c997',
          cyan: '#1F9BCF',
        },
        // AppStack gray scale (extends Tailwind's default gray)
        'gray': {
          100: '#f4f7f9',
          200: '#e2e8ee',
          300: '#dee6ed',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#6c757d',
          700: '#495057',
          800: '#020202',
          900: '#212529',
        },
        // AppStack sidebar colors
        'sidebar': {
          dark: '#293042',
          colored: '#2A64C1',
          light: '#ffffff',
        },
        // Background
        'body-bg': '#F7F9FC',
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: []
}
