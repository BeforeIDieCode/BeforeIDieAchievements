## Quick orientation for AI coding agents

This is a React single-page app (Create React App / `react-scripts`) that serves a gallery of contributor "Before I die" entries and a contributors map. The instructions below highlight project-specific structure, patterns, build/run commands and integration points so you can be productive quickly.

### Big picture
- Entry point: `src/index.js` — client-side routes are registered with `createBrowserRouter` (/, /Contributors, /contributors-map).
- UI: `src/App.js` composes `Header`, `MasonryLayout`, `ContainerCard`, `RandomContributors` and `Footer`. Contributor data is loaded from `src/Jsons/Contributors.json` (static JSON).
- Maps: two implementations exist:
  - `src/Components/MapContributors/MapContributors.jsx` — Leaflet + OpenCage geocoding (fetch to OpenCage API). Uses `process.env.REACT_APP_OPENCAGE_API_KEY`.
  - `src/Components/LocationMap/LocationMap.jsx` — Google Maps via `@react-google-maps/api` and Google geocoding. Uses `process.env.REACT_APP_GOOGLE_MAPS_API_KEY`.
- i18n: `src/i18nextConfig.js` loads locales from `src/locales/<code>/translation.json`. Adding a language requires adding a folder and updating this config (it uses require()).

### Build / run / test
- Start dev server (hot reload): `npm start` (uses `react-scripts start`).
- Build production bundle: `npm run build` (uses `react-scripts build`).
- Run tests: `npm test` (react-scripts test). There is no custom test setup in the repo.
- SCSS support via devDependency `sass`.

If you need maps to work locally, set these environment variables (create `.env.local` or export in your shell):
- `REACT_APP_GOOGLE_MAPS_API_KEY` for Google Maps geocoding/JS API
- `REACT_APP_OPENCAGE_API_KEY` for OpenCage geocoding used by the Leaflet component

Do NOT commit API keys to the repo. Use `.env.local` (gitignored by CRA) for local values.

### Project-specific conventions and patterns
- Static contributor data: `src/Jsons/Contributors.json`. Shape expected (example fields): `id`, `image` (relative path `img/bid_image/...`), `avatar` (`img/avatar/...`), `name`, `location`, `GitHub`, `text`. When adding contributors follow `CONTRIBUTION-GUIDELINES.md` and keep image files under `public/img/...` so the relative paths resolve in production.
- Component layout: components live in `src/Components/*`. Many use CSS Modules (filename.module.css). Header uses SCSS (`Header.scss`). Prefer matching the existing naming and CSS-module pattern when creating UI components.
- Translations: locales live in `src/locales/<lang>/translation.json`. `i18nextConfig.js` uses `require()` for each language — add the `require()` entry when adding a new language.
- Routing: Routes are defined in `src/index.js` using `createBrowserRouter`. If you add a new page, register it there.

### Maps & geocoding — important notes
- Leaflet map (`MapContributors`) iterates `Contributors.json` and geocodes each contributor location via OpenCage on the client. This can trigger rate limits — prefer mocking or caching results during development. The OpenCage key must be provided in `REACT_APP_OPENCAGE_API_KEY`.
- Google Maps (`LocationMap`) uses `@react-google-maps/api` and the Google Geocoding endpoint. Set `REACT_APP_GOOGLE_MAPS_API_KEY`. The code expects an HTTP JSON `status` field of `'OK'` to consider geocoding successful.

### Files to inspect for common edits or debugging
- `src/Jsons/Contributors.json` — add/modify contributors.
- `src/i18nextConfig.js` — language registration.
- `src/Components/MapContributors/MapContributors.jsx` — Leaflet + OpenCage integration.
- `src/Components/LocationMap/LocationMap.jsx` — Google Maps integration.
- `src/Components/MasonryLayout/MasonryLayout.jsx` — gallery layout (receives `users` prop).
- `src/index.js` — routes and app bootstrap.

### Quick examples for common tasks
- Add a contributor: append an object to `src/Jsons/Contributors.json` with fields shown above, add image files to `public/img/bid_image/` and `public/img/avatar/`, and open a preview with `npm start`.
- Add a new locale: create `src/locales/xx/translation.json`, add a `require('./locales/xx/translation.json')` entry in `src/i18nextConfig.js`, then test by switching `lng` or via UI language controls.
- Debugging maps: to avoid geocoding calls, stub `fetch` in the browser or hardcode lat/lng in `Contributors.json` (you can add `lat`/`lng` fields and update the components to prefer them).

### What to avoid / gotchas
- Don't assume server-side rendering: this is a client-side SPA. All JSON imports and environment reads happen in the browser bundle.
- Geocoding on every render will exceed free quotas; cache results or use a small sample during development.
- Asset paths in JSON are relative to the app root (`public/`), e.g. `img/avatar/Name.jpg` not `src/...`.

If anything above is unclear or you'd like me to expand specific areas (tests, a mock geocoder, or adding a contributor PR template), tell me which section to flesh out and I'll iterate.
