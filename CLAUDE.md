# Team Africa Ventures website

## What this is
The public marketing site for Team Africa Ventures, an early-stage fund and company builder in Cape Town.
It is a static Astro site, served by `server.mjs` (Node, no dependencies) and deployed with the `Dockerfile` to Railway.
Open questions: `docs/OPEN_QUESTIONS.md`.

## Run it
- Install: `npm ci`
- Dev server: `npm run dev` → http://localhost:4321
- Production build and serve: `npm run preview` → http://localhost:8080

## Test it (the gate)
- Build and type check: `npm run build`. It must report 0 errors.
- End to end: `npm run test:e2e` (Playwright, 1280 and 390 px, against `dist/`)
- Everything CI runs: `npm run test:all`
- Tests never call external services.

## How we work
- One change, one branch, one PR. Never merge or deploy; Dan does.
- Tests first for new behaviour. Never change an existing test to make it pass.
- Stage files by path. Never commit `.env*`.
- Content lives in `src/data/*.ts`. Every figure keeps a `source`. Anything unconfirmed gets `⚠ VERIFY`
  and a line in `docs/OPEN_QUESTIONS.md`.
- Production runs only from tagged `main` on Railway. Don't touch it outside a deploy Dan has approved.

## Rules that are law here
- No figure, date or company claim goes on the site without a source in the data file.
- The `/healthz` route returns 200 `ok`, because the deploy health check depends on it.
- The pages have no horizontal scroll at 390 px (tested).

## Gotchas
- Don't use `vector-effect: non-scaling-stroke` on the mark. It breaks the `pathLength` draw animation.
  Set `strokeWidth` in viewBox units instead.
- Each `<Mark>` on a page needs a unique `idPrefix`. Otherwise the gradient IDs collide.
- Railway's `railway.json` and `railway.toml` are deprecated as of 1 Dec 2026. Use the Dockerfile.
