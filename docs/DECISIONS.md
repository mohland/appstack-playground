# Design Decisions Log

## 2024-11-18: Initial Setup

### Technology Choices
- **Framework**: Rails 8 with Hotwire (Stimulus + Turbo)
- **CSS**: Tailwind CSS (utility-first)
- **JS**: Stimulus (Rails-native, progressive enhancement)
- **Why not Alpine**: Maintaining Rails conventions, Stimulus already included

### Project Structure
- Original AppStack files in `vendor/appstack/` (read-only reference)
- New components in `app/views/components/` (Tailwind versions)
- Demo pages in `app/views/playground/` (testing ground)
- Documentation in `docs/` (living documentation)

### Approach
1. Mobile-first responsive design
2. Match AppStack visual design exactly
3. Use only Tailwind utility classes (no custom CSS if possible)
4. Progressive enhancement with Stimulus
5. One component at a time, documented as we go

### Next Steps
1. Copy AppStack files to `vendor/appstack/`
2. Extract color palette to `docs/COLORS.md`
3. Build sidebar navigation component
4. Create component demos as we convert
