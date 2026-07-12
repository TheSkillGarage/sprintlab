# sprintlab

React frontend for SprintLab.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- ESLint, Prettier, Husky, lint-staged

## Structure

- `src/components/ui` reusable UI primitives like buttons, inputs, and loaders
- `src/components/home` page sections and shared home-page image handling
- `src/content/home.ts` home-page data, section copy, and image path definitions
- `src/pages` route-level page components
- `src/styles.css` Tailwind import and global base styles

## Images

- Add project images under `public/images/home`
- Update the path map in `src/content/home.ts` when you add or rename assets
- Home page images render a visual placeholder until the real files exist, so the page stays usable while you build the asset set

## Setup

```bash
npm install
npm run dev
```
