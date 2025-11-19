# AppStack Color Palette

To be extracted from `vendor/appstack/scss/_variables.scss` or `vendor/appstack/css/app.css`

## Instructions
1. Find color definitions in AppStack source
2. Extract hex values
3. Add to `config/tailwind.config.js` under `theme.extend.colors`
4. Use semantic names like `appstack-primary`, `appstack-success`, etc.

## Primary Colors
- Primary: `#____` (to be filled)
- Success: `#____`
- Warning: `#____`
- Danger: `#____`
- Info: `#____`

## Grays
- Gray 50: `#____`
- Gray 100: `#____`
- Gray 200: `#____`
- Gray 300: `#____`
- Gray 400: `#____`
- Gray 500: `#____`
- Gray 600: `#____`
- Gray 700: `#____`
- Gray 800: `#____`
- Gray 900: `#____`

## Tailwind Config

Once extracted, add to `config/tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'appstack': {
          primary: '#____',
          success: '#____',
          warning: '#____',
          danger: '#____',
          info: '#____',
        }
      }
    }
  }
}
```
