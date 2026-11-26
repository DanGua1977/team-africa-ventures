# Team Africa Ventures website

The public site for Team Africa Ventures. It is a static site built with Astro. A small Node server with no dependencies serves it, so it runs on Railway, Render, Fly.io or any Docker host.

Pages: Home, How we build (`/approach/`), Portfolio, Team, Contact and a 404 page.

Positioning (v2, 24 Nov 2026): an operator-led venture studio that builds AI-first companies with founders. The companies run with minimal headcount and are built to replace manual, people-heavy service incumbents globally.

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
| Email, city, track record, the three audience paths | `src/data/site.ts` |
| Portfolio companies | `src/data/portfolio.ts` |
| Partners, studio team and bios | `src/data/team.ts` |
| Thesis, at-a-glance profile, studio vs fund, focus areas, process, criteria | `src/data/approach.ts` |
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

## Design system (v3, editorial)

- **Inspiration:** rocket-internet.com. The site is white and typographic:
  - bold geometric headlines (Urbanist) over serif reading text (Source Serif 4);
  - tracked small capitals for navigation and buttons, and square outlined buttons;
  - a two-tone rule over section titles;
  - a light-grey "what we do" band, outlined stat boxes and a dark footer.
- **Colour** comes from the TAV mark, plus peach and ember for small accents.
- **Brand anchors:** navy `#282557`, indigo `#454E9C`, teal `#6AC1B7`, ember `#EA5B31` and peach `#F19D69`.
- **Light and dark themes:** semantic tokens use `light-dark()`. Any section with the class `.on-dark` stays dark in both themes. The theme button remembers the reader's choice.
- **Home page:**
  - a centred hero with the mark drawing itself, the only animation on the page;
  - Build, Back and Scale;
  - the companies, with stats and a grid;
  - the thesis statement;
  - "Start here" paths for founders, operators and co-investors.
- **How we build** holds the details: the at-a-glance profile, the studio-versus-fund comparison, commitments, the process and the criteria.
- **Machine-readable:** `/llms.txt` gives AI assistants a plain-text summary, and every page carries Organization and portfolio schema.
- **Logo:** the vector mark is in `src/components/Mark.astro`. The Build, Back and Scale icons assemble it one part at a time.
- **Social card and icons:** run `node scripts/render-brand-assets.mjs` to regenerate them.
