# Design Decisions Log

## 2024-11-18: Initial Setup

### AppStack File Structure

AppStack uses a Webpack-based build system with the following structure:
- **`dist/`**: Compiled CSS/JS (what gets served to the browser)
- **`src/`**: Source SCSS and JS files
  - `src/scss/1-variables/`: Color and variable definitions
  - `src/scss/3-components/`: Component-specific styles
- **`docs/`**: HTML demo files showing all components in action

Reference: https://appstack.bootlab.io/docs-installation

### Key Reference Points

| What We Need | Where to Find It in AppStack |
|-------------|----------------------------|
| Color palette | `src/scss/1-variables/_colors.scss` or `_variables.scss` |
| Component visuals | `docs/*.html` (open in browser) |
| Component styles | `src/scss/3-components/*.scss` |
| Compiled CSS | `dist/css/app.css` (for color extraction fallback) |

### Technology Choices

- **Framework**: Rails 8 with Hotwire (Stimulus + Turbo)
- **CSS**: Tailwind CSS (utility-first)
- **JS**: Stimulus (Rails-native, progressive enhancement)
- **Why not Alpine**: Maintaining Rails conventions, Stimulus already included
- **Why not Bootstrap in Rails**: Poor integration with modern asset pipeline, mobile responsiveness issues

### Project Structure

- **AppStack files**: `vendor/appstack/` (read-only reference, never modify)
- **New components**: `app/views/components/` (Tailwind versions)
- **Demo pages**: `app/views/playground/` (testing ground)
- **Documentation**: `docs/` (living documentation)

### Conversion Approach

1. **Visual-first**: Open AppStack HTML docs (`vendor/appstack/docs/`) in browser
2. **Understand structure**: Check SCSS source (`vendor/appstack/src/scss/3-components/`)
3. **Extract colors**: Get from SCSS variables (`vendor/appstack/src/scss/1-variables/`)
4. **Rebuild in Tailwind**: Create equivalent using Tailwind utilities
5. **Add interactions**: Use Stimulus for behavior (replacing jQuery/Bootstrap JS)
6. **Test responsive**: Mobile-first approach (375px → 768px → 1024px → 1440px)
7. **Document**: Update `docs/COMPONENTS.md` as we go

### Design Principles

1. Mobile-first responsive design
2. Match AppStack visual design exactly
3. Use only Tailwind utility classes (no custom CSS if possible)
4. Progressive enhancement with Stimulus
5. One component at a time, documented as we go
6. Keep it simple - no build tools, no npm for the Rails app

### Next Steps

1. ✅ Create project structure
2. ⏭️ Copy AppStack files to `vendor/appstack/`
3. ⏭️ Extract color palette from `src/scss/1-variables/`
4. ⏭️ Add colors to `tailwind.config.js`
5. ⏭️ Build sidebar navigation component (reference: `docs/dashboard-default.html`)
6. ⏭️ Create component demos as we convert

### AppStack Version Notes

- Verify AppStack version in `package.json` after extraction
- Document any version-specific quirks or differences
- Check if using Bootstrap 5.x (likely) or 4.x (older)

## Future Decisions

As we convert components, we'll document:
- Which Tailwind patterns work best for specific AppStack components
- Any visual differences between AppStack and our Tailwind versions
- Performance improvements from dropping Bootstrap/jQuery
- Reusable component patterns that emerge