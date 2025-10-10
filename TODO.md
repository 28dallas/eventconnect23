# HeroSection Simplification & Services Updates (Dark Theme)

## Completed Tasks
- [x] Simplify HeroSection.js to dark-themed centered search form.
- [x] Remove slideshow, benefits, trust badges, floating cards, decorations, animations from HeroSection.
- [x] Keep responsive design, ThemeContext, Tailwind dark classes in HeroSection.
- [x] Update TODO.md for HeroSection progress.

## New Tasks: Remove Prices & Fix Categories Dropdown
- [ ] Update TODO.md with new tasks (done).
- [x] Edit src/components/ServicesSection.js: Remove startingPrice from services array (9 objects), remove price display span, adjust professionals div to full width text-left.
- [ ] Edit src/pages/Browse.js: Remove pricing from professionals array (~40 objects), remove pricing display div (green card).
- [ ] Edit src/pages/Browse.js: Restructure categories to grouped object (e.g., Venues parent with Garden/Hall/Conference subs; Entertainment with Photography/Videography/etc.; Stylists with Gowns/Suits/etc.), replace <select> with custom nested dropdown (toggle button, ul/li for groups/subs with arrow icons, bold font-bold on all texts), update filtering/URL for subs (filter by parent category), add state for open groups/subs.
- [ ] Run `npm start` to verify changes.
- [ ] Test: Homepage service cards no prices, stats aligned; Browse page no pricing, dropdown expands nested bold items, filters by sub (e.g., Venues > Garden shows venue pros), responsive, no errors.
- [ ] Update TODO.md with completion.
- [ ] If issues, debug layout/filtering/console errors.

## Notes
- Groupings: Venues (Garden, Hall, Conference); Entertainment (Photography, Videography, Sound/PA, Stage, Lights, Mascot/Clowns, Face Painting); Stylists (Gowns, Suits, African Wear, Jewelry, Makeup, Hair/Barbers); others as singles.
- No new deps; use useState for dropdown toggles.
- Keep search, results count, grid, save in Browse.js.
