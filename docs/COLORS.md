# AppStack Color Palette

**Location**: Extract from `vendor/appstack/src/scss/1-variables/`

## Extraction Steps

1. **Find the variables file**:
```bash
   # Look for color definitions in these files:
   ls vendor/appstack/src/scss/1-variables/
   
   # Common filenames:
   # - _colors.scss
   # - _variables.scss
   # - _bootstrap-variables.scss
```

2. **Extract color values**:
```bash
   # View SCSS variables
   cat vendor/appstack/src/scss/1-variables/_colors.scss
   
   # OR search the compiled CSS
   grep -E "(primary|success|danger|warning|info).*#[0-9a-fA-F]{6}" vendor/appstack/dist/css/app.css
```

3. **Visual reference**:
   - Open `vendor/appstack/docs/ui-buttons.html` in a browser
   - Use DevTools to inspect button colors
   - Note hex values from computed styles

## Color Definitions

### Theme Colors

| Name | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| Primary | `#3F80EA` | `--bs-primary` | Primary buttons, links, active states |
| Success | `#4BBF73` | `--bs-success` | Success messages, positive actions |
| Info | `#1F9BCF` | `--bs-info` | Informational messages |
| Warning | `#E5A54B` | `--bs-warning` | Warning messages, caution states |
| Danger | `#d9534f` | `--bs-danger` | Error messages, destructive actions |
| Secondary | `#495057` | `--bs-secondary` | Secondary buttons |
| Light | `#eff2f5` | `--bs-light` | Light backgrounds |
| Dark | `#293042` | `--bs-dark` | Dark backgrounds |

### Gray Scale

| Name | Hex | Usage |
|------|-----|-------|
| Gray 100 | `#f4f7f9` | Backgrounds, subtle surfaces |
| Gray 200 | `#e2e8ee` | Borders, dividers |
| Gray 300 | `#dee6ed` | Disabled states |
| Gray 400 | `#ced4da` | Placeholders |
| Gray 500 | `#adb5bd` | Secondary text |
| Gray 600 | `#6c757d` | Body text |
| Gray 700 | `#495057` | Headings |
| Gray 800 | `#020202` | Dark surfaces |
| Gray 900 | `#212529` | Darkest text |

### Sidebar/Navigation Colors

AppStack often uses custom colors for the sidebar. Check:
- `vendor/appstack/src/scss/3-components/_sidebar.scss`
- Look for variables like `$sidebar-bg`, `$sidebar-color`, etc.

| Element | Color | Notes |
|---------|-------|-------|
| Sidebar Background (Dark) | `#293042` | Default dark sidebar |
| Sidebar Background (Colored) | `#2A64C1` | Blue sidebar variant |
| Sidebar Background (Light) | `#ffffff` | Light sidebar variant |
| Body Background | `#F7F9FC` | Main app background |

## Tailwind Config

Once extracted, add to `config/tailwind.config.js`:
```javascript
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
        // AppStack gray scale
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
    },
  },
  plugins: []
}
```

## Quick Color Test

After updating `tailwind.config.js`, test your colors at:
`http://localhost:3000/playground/colors`

The test page shows all theme colors and verifies they match AppStack's visual design.