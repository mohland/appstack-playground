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
| Primary | `#____` | `--bs-primary` | Primary buttons, links, active states |
| Success | `#____` | `--bs-success` | Success messages, positive actions |
| Info | `#____` | `--bs-info` | Informational messages |
| Warning | `#____` | `--bs-warning` | Warning messages, caution states |
| Danger | `#____` | `--bs-danger` | Error messages, destructive actions |
| Secondary | `#____` | `--bs-secondary` | Secondary buttons |
| Light | `#____` | `--bs-light` | Light backgrounds |
| Dark | `#____` | `--bs-dark` | Dark backgrounds |

### Gray Scale

| Name | Hex | Usage |
|------|-----|-------|
| Gray 100 | `#____` | Backgrounds, subtle surfaces |
| Gray 200 | `#____` | Borders, dividers |
| Gray 300 | `#____` | Disabled states |
| Gray 400 | `#____` | Placeholders |
| Gray 500 | `#____` | Secondary text |
| Gray 600 | `#____` | Body text |
| Gray 700 | `#____` | Headings |
| Gray 800 | `#____` | Dark surfaces |
| Gray 900 | `#____` | Darkest text |

### Sidebar/Navigation Colors

AppStack often uses custom colors for the sidebar. Check:
- `vendor/appstack/src/scss/3-components/_sidebar.scss`
- Look for variables like `$sidebar-bg`, `$sidebar-color`, etc.

| Element | Color | Notes |
|---------|-------|-------|
| Sidebar Background | `#____` | |
| Sidebar Text | `#____` | |
| Sidebar Active | `#____` | |
| Sidebar Hover | `#____` | |

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
        // AppStack theme colors (update with actual hex values)
        'appstack': {
          primary: '#____',     // Update from SCSS variables
          secondary: '#____',
          success: '#____',
          info: '#____',
          warning: '#____',
          danger: '#____',
          light: '#____',
          dark: '#____',
        },
        // AppStack sidebar colors
        'sidebar': {
          bg: '#____',
          text: '#____',
          active: '#____',
          hover: '#____',
        }
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