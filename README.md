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
│   ├── css/                  # Compiled CSS
│   ├── js/                   # Compiled JS
│   ├── scss/                 # Source SCSS files
│   └── html/                 # HTML template examples
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

Copy your licensed AppStack theme files into `vendor/appstack/`:
- CSS files → `vendor/appstack/css/`
- JS files → `vendor/appstack/js/`
- SCSS source → `vendor/appstack/scss/`
- HTML examples → `vendor/appstack/html/`

### 2. Extract Color Palette
```bash
# View AppStack's color definitions
cat vendor/appstack/scss/_variables.scss

# Update docs/COLORS.md with the values
# Then add to config/tailwind.config.js
```

### 3. Start the Server
```bash
bin/rails server
open http://localhost:3000
```

### 4. Browse Components

Visit `http://localhost:3000/playground` to see the component gallery.

## Development Workflow

### Converting a Component

1. **Choose a component** from AppStack HTML examples in `vendor/appstack/html/`
2. **Create a demo page** in `app/views/playground/[component].html.erb`
3. **Build Tailwind version** in `app/views/components/_[component].html.erb`
4. **Add Stimulus controller** if needed in `app/javascript/controllers/`
5. **Update progress** in `docs/COMPONENTS.md`
6. **Screenshot comparison** in `public/screenshots/`

### Example: Converting a Button
```erb
<!-- app/views/components/_button.html.erb -->
<%= link_to_unless button_url.nil?, "#", 
    class: "inline-flex items-center px-4 py-2 border border-transparent 
           text-sm font-medium rounded-md shadow-sm text-white 
           bg-blue-600 hover:bg-blue-700 focus:outline-none 
           focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" do %>
  <%= button_text %>
<% end %>
```
```erb
<!-- app/views/playground/buttons.html.erb -->
<% content_for :page_title, "Buttons" %>

<div class="space-y-8">
  <div>
    <h2 class="text-xl font-semibold mb-4">Primary Buttons</h2>
    <%= render "components/button", button_text: "Click me" %>
  </div>
</div>
```

## Tech Stack

- **Rails 8**: Latest Rails with modern defaults
- **Tailwind CSS**: Utility-first CSS framework
- **Hotwire**: Stimulus (JS) + Turbo (page updates)
- **Importmap**: No npm, no build step for JS
- **SQLite**: Simple database (not really used in this playground)

## Goals

- [x] Project setup
- [ ] Extract color palette
- [ ] Sidebar navigation (mobile + desktop)
- [ ] Button variants
- [ ] Form elements
- [ ] Cards
- [ ] Tables
- [ ] Modals
- [ ] Dropdowns

See `docs/COMPONENTS.md` for detailed progress.

## Guidelines

### Working Rules
1. **NEVER modify** files in `vendor/appstack/` - reference only
2. **ALWAYS create NEW** files in `app/views/components/` or `app/views/playground/`
3. **Update docs** when completing a component
4. **Mobile-first**: Test at 375px, 768px, 1024px, 1440px breakpoints
5. **Match visual design exactly** using AppStack as reference

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

## License

This playground uses a licensed copy of AppStack. Do not redistribute AppStack files.

## Questions?

Check the docs:
- Component progress: `docs/COMPONENTS.md`
- Color palette: `docs/COLORS.md`
- Design decisions: `docs/DECISIONS.md`
