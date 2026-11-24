# Team Africa Ventures website

The public site for Team Africa Ventures. It is a static site built with Astro. A small Node server with no dependencies serves it, so it runs on Railway, Render, Fly.io or any Docker host.

Pages: Home, Portfolio, Approach, Team, Contact and a 404 page.

## Run it locally

```bash
npm ci
npm run dev        # http://localhost:4321, with hot reload
npm run preview    # production build, served by server.mjs on $PORT (default 8080)
```

Node 20.3 or newer is required. Node 22 is recommended.

## Edit the content

You can change all the words and figures without touching layout code.

| What | File |
|---|---|
| Email, city, track-record numbers | `src/data/site.ts` |
| Portfolio companies | `src/data/portfolio.ts` |
| Partners, bios and the wider team | `src/data/team.ts` |
| Process, criteria and what founders get | `src/data/approach.ts` |
| Team photos | `public/images/team/` (square JPG, at least 800px) |

Each entry records its source. Anything unconfirmed is marked `⚠ VERIFY` and listed in `docs/OPEN_QUESTIONS.md`.

## Test it

```bash
npm run build      # type check and build; fails on any error
npm run test:e2e   # Playwright at 1280px and 390px against the built site
npm run test:all   # both, exactly what CI runs
```

The first time on a new machine, run `npx playwright install chromium`.

## Deploy to Railway

The repo has a `Dockerfile`, so Railway builds it with Docker automatically. Nothing else needs configuring.

1. Push this repo to GitHub.
2. In Railway, choose **New project**, then **Deploy from GitHub repo**, and pick the repo.
3. Optional: under **Settings**, then **Deploy**, set the health check path to `/healthz`.
4. Under **Settings**, then **Networking**, generate a Railway domain to check the deploy.
5. Add the custom domain `www.teamafricaventures.com`. Railway shows a CNAME record. Add it at your DNS provider, then redirect the bare domain to `www`.
6. If the site will live on a different URL, set the variable `SITE_URL`, for example `https://tav.up.railway.app`. It sets canonical links, the sitemap and social cards. The default is `https://www.teamafricaventures.com`.

Railway sets `PORT` itself. No secrets are needed.

Railway's older `railway.json` / `railway.toml` config files are deprecated and stop being read on 1 December 2026, so this repo leaves them out.

### Other hosts

- **Render, Fly.io or Cloud Run:** deploy the `Dockerfile` as it is. Health check: `GET /healthz`.
- **Any static host** (Netlify, Cloudflare Pages, Vercel): build command `npm run build`, output folder `dist`. You won't need `server.mjs`.

## Brand

- **Colours:** from the brand guide (`TeamAfricaVentures-PPT.pptx`). Navy `#282557`, indigo `#454E9C`, teal `#6AC1B7`, ember `#EA5B31` and peach `#F19D69`.
- **Logo:** the mark is rebuilt as vector geometry in `src/components/Mark.astro`. It has three parts: the seed, the founder shape and the partner circle. The process sections build the mark up one part per stage.
- **Type:** Urbanist (open source, self-hosted) stands in for the brand's Mont and Geomanist, which are licensed fonts. To use the real fonts, add the licensed web-font files and change `--font` in `src/styles/global.css`.
- **Social card and icons:** run `node scripts/render-brand-assets.mjs` to regenerate them.
