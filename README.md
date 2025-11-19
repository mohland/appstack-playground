# AppStack to Tailwind Conversion Playground

A Rails 8 application for converting AppStack Bootstrap 5 components to Tailwind CSS while maintaining visual fidelity.

## Purpose

This is a design system playground where we:
1. Reference the original AppStack Bootstrap theme
2. Rebuild components using Tailwind CSS
3. Test responsive behavior and interactions
4. Document the conversion process

## Project Structure
```
├── vendor/appstack/          # Original AppStack files (DO NOT MODIFY)
│   ├── dist/                 # Compiled distribution files
│   │   ├── css/app.css       # Compiled CSS (use for color extraction)
│   │   ├── js/app.js         # Compiled JS
│   │   ├── img/              # Images
│   │   └── fonts/            # Fonts
│   ├── src/                  # Source files
│   │   ├── scss/             # SCSS source files
│   │   │   ├── 1-variables/  # Sass variables (COLOR DEFINITIONS HERE!)
│   │   │   ├── 2-mixins/     # Sass mixins
│   │   │   ├── 3-components/ # Component styles
│   │   │   ├── 4-utilities/  # Utilities/helpers
│   │   │   ├── 5-vendor/     # 3rd party styling
│   │   │   └── app.scss      # Main SCSS entry point
│   │   └── js/               # JavaScript source
│   └── docs/                 # HTML demo files (VISUAL REFERENCE)
├── app/
│   ├── views/
│   │   ├── playground/       # Demo pages for each component
│   │   └── components/       # Converted Tailwind components
│   ├── javascript/
│   │   └── controllers/      # Stimulus controllers
│   └── controllers/
│       └── playground_controller.rb
├── docs/
│   ├── COMPONENTS.md         # Conversion progress tracker
│   ├── COLORS.md             # Extracted color palette
│   └── DECISIONS.md          # Design decisions log
└── public/screenshots/       # Visual comparisons
    ├── appstack-original/
    └── tailwind-converted/
```

## Getting Started

### 1. Copy AppStack Files

After downloading AppStack from bootlab.io, extract and copy the files:
```bash
# Copy the entire AppStack distribution
cp -r /path/to/appstack-x.x.x/dist vendor/appstack/
cp -r /path/to/appstack-x.x.x/src vendor/appstack/
cp -r /path/to/appstack-x.x.x/docs vendor/appstack/

# Verify the structure
ls vendor/appstack/
# Should show: dist/ src/ docs/
```

### 2. Extract Color Palette

Colors are defined in the SCSS variables:
```bash
# View the color definitions
cat vendor/appstack/src/scss/1-variables/_colors.scss
# OR
cat vendor/appstack/src/scss/1-variables/_variables.scss
# OR check the main compiled CSS
grep -i "primary\|success\|danger" vendor/appstack/dist/css/app.css | head -20

# Update docs/COLORS.md with the values found
```

### 3. Browse HTML Examples

AppStack's HTML demo files are your visual reference:
```bash
# List available demos
ls vendor/appstack/docs/

# Open a demo in your browser to see components
open vendor/appstack/docs/dashboard-default.html
open vendor/appstack/docs/pages-blank.html
```

### 4. Start the Server
```bash
bin/rails server
open http://localhost:3000
```

### 5. Browse Components

Visit `http://localhost:3000/playground` to see the component gallery.

## Development Workflow

### Converting a Component

1. **Find the component** in AppStack's HTML docs (`vendor/appstack/docs/*.html`)
2. **Inspect the styles** in AppStack's SCSS source (`vendor/appstack/src/scss/3-components/`)
3. **Create a demo page** in `app/views/playground/[component].html.erb`
4. **Build Tailwind version** in `app/views/components/_[component].html.erb`
5. **Add Stimulus controller** if needed in `app/javascript/controllers/`
6. **Update progress** in `docs/COMPONENTS.md`
7. **Screenshot comparison** in `public/screenshots/`

### Example: Converting the Sidebar
```bash
# 1. View the original sidebar HTML
open vendor/appstack/docs/dashboard-default.html

# 2. Check the SCSS for sidebar styles
cat vendor/appstack/src/scss/3-components/_sidebar.scss

# 3. Build your Tailwind version in app/views/components/_sidebar.html.erb
# 4. Test at http://localhost:3000/playground/navigation
```

### Color Extraction Helper
```ruby
# tmp/extract_colors.rb
#!/usr/bin/env ruby

# Extract colors from AppStack's compiled CSS
css_file = 'vendor/appstack/dist/css/app.css'

unless File.exist?(css_file)
  puts "❌ AppStack CSS not found. Have you copied the files to vendor/appstack/?"
  exit 1
end

content = File.read(css_file)

# Find Bootstrap color variable usage
%w[primary secondary success danger warning info light dark].each do |name|
  # Look for background-color declarations
  if content =~ /\.bg-#{name}\s*\{[^}]*background-color:\s*([^;]+)/
    puts "#{name}: #{$1}"
  end
end

# Find all unique hex colors
hex_colors = content.scan(/#[0-9a-fA-F]{6}/).uniq.sort
puts "\nUnique hex colors found: #{hex_colors.length}"
puts hex_colors.join(', ')
```

Run it:
```bash
ruby tmp/extract_colors.rb
```

## Tech Stack

- **Rails 8**: Latest Rails with modern defaults
- **Tailwind CSS**: Utility-first CSS framework
- **Hotwire**: Stimulus (JS) + Turbo (page updates)
- **Importmap**: No npm, no build step for JS
- **SQLite**: Simple database (not really used in this playground)

## AppStack Reference Points

| What to Convert | Where to Find It | Where to Put It |
|----------------|------------------|-----------------|
| Visual Design | `vendor/appstack/docs/*.html` | Reference only |
| Colors | `vendor/appstack/src/scss/1-variables/` | `docs/COLORS.md` → `tailwind.config.js` |
| Component Styles | `vendor/appstack/src/scss/3-components/` | `app/views/components/` (as Tailwind) |
| Interactions | `vendor/appstack/src/js/modules/` | `app/javascript/controllers/` (as Stimulus) |

## Goals

- [x] Project setup
- [ ] Extract color palette from `src/scss/1-variables/`
- [ ] Sidebar navigation (reference: `docs/dashboard-default.html`)
- [ ] Button variants (reference: `docs/ui-buttons.html`)
- [ ] Form elements (reference: `docs/forms-basic.html`)
- [ ] Cards (reference: `docs/ui-cards.html`)
- [ ] Tables (reference: `docs/tables-bootstrap.html`)
- [ ] Modals (reference: `docs/ui-modals.html`)
- [ ] Dropdowns (reference: `docs/ui-dropdowns.html`)

See `docs/COMPONENTS.md` for detailed progress.

## Guidelines

### Working Rules
1. **NEVER modify** files in `vendor/appstack/` - reference only
2. **ALWAYS create NEW** files in `app/views/components/` or `app/views/playground/`
3. **Use AppStack's HTML docs** as visual reference
4. **Use AppStack's SCSS source** to understand component structure
5. **Update docs** when completing a component
6. **Mobile-first**: Test at 375px, 768px, 1024px, 1440px breakpoints
7. **Match visual design exactly** using AppStack as reference

### Tailwind Principles
- Use utility classes only (avoid custom CSS)
- Mobile-first responsive design (`sm:`, `md:`, `lg:`, `xl:`)
- Semantic color names from extracted palette
- Component composition via partials

### Stimulus Principles
- Progressive enhancement
- Data attributes for behavior (`data-controller`, `data-action`)
- Clear target naming (`data-[controller]-target`)
- Lifecycle callbacks (`connect`, `disconnect`)

## Common AppStack Files Reference

| File | Purpose |
|------|---------|
| `docs/dashboard-default.html` | Main dashboard layout with sidebar |
| `docs/pages-blank.html` | Minimal page template |
| `docs/ui-buttons.html` | All button variants |
| `docs/ui-cards.html` | Card components |
| `docs/forms-basic.html` | Form elements |
| `docs/tables-bootstrap.html` | Table styles |
| `src/scss/1-variables/_colors.scss` | Color definitions |
| `src/scss/3-components/_sidebar.scss` | Sidebar styles |
| `dist/css/app.css` | Compiled CSS for color extraction |

## License

This playground uses a licensed copy of AppStack. Do not redistribute AppStack files.

## Questions?

Check the docs:
- Component progress: `docs/COMPONENTS.md`
- Color palette: `docs/COLORS.md`
- Design decisions: `docs/DECISIONS.md`