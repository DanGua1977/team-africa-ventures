# Deploys

One line per production deploy: tag, time, who approved it, result.

| Tag | Commit | Time (SAST) | Approved by | Target | Result |
|---|---|---|---|---|---|
| v2026.11.24-2 | 0d4994f | 2026-11-24 22:21 | Dan ("deploy v2026.11.24-2", 21:41) | Railway `team-africa-ventures` / `web` / production, pinned to commit, https://web-production-3596e84d.up.railway.app | Success. Smoke passed: /healthz 200, all 5 pages 200, 404 page, 301 trailing-slash redirect, llms.txt, sitemap, security headers, no console errors, fonts loaded at 1280 and 390. |
| v2026.11.25-1 | 2d5bed4 | 2026-11-25 10:51 | Dan ("deploy v2026.11.25-1", 10:49) | Railway `team-africa-ventures` / `web` / production, pinned to commit | Success. Contains PR #6 (pin TypeScript 6, fixing the broken npm ci on main) and PR #7 (Daniel's bio no longer names Automaiq). Gate: clean npm ci, audit 0, astro check 0 errors, 33 e2e passed. Smoke: all pages 200, /healthz 200, 404 page, Automaiq absent from the live /team/. Previous deploy 130ff30a is still available for rollback. |
| v2026.11.25-2 | a847f6d | 2026-11-25 22:32 | Dan ("deploy v2026.11.25-2", 22:30) | Railway `team-africa-ventures` / `web` / production, pinned to commit | Success. Contains PR #9 (email-signature logo at /email/tav-logo.png, blank signature template) and PR #8 (setup-node 7 in CI). Gate: clean npm ci, audit 0, astro check 0 errors, 35 e2e passed. Smoke: all pages 200, /healthz 200, 404 page; the live logo is byte-identical to the committed file; the signatures file loads it. |
| v2026.11.26-1 | 5c53bf2 | 2026-11-26 12:23 | Dan ("deploy v2026.11.26-1", 12:21) | Railway `team-africa-ventures` / `web` / production, pinned to commit | Success. Contains PR #10 (editorial redesign after rocket-internet.com). Gate: clean npm ci, audit 0, astro check 0 errors, 35 e2e passed. Smoke: all pages 200, /healthz 200, 404 page, the signature logo still served, both web fonts loaded, no console errors, no horizontal scroll at 1280 and 390. |
| v2026.11.26-2 | 9383838 | 2026-11-26 16:32 | Dan ("deploy v2026.11.26-2", 16:29) | Railway `team-africa-ventures` / `web` / production, pinned to commit | Success. Contains PR #11 (Bugbot fixes: filter-button font, dt-before-dd, theme-color per scheme), PR #13 (Latimer is now Bulbshare, an exit to SMG in 2024) and the signature-template logo fix. Gate: clean npm ci, audit 0, astro check 0 errors, 45 e2e passed. Smoke: all pages 200, /healthz 200, 404 page; Bulbshare is live as an exit and Latimer is gone; 7 exits listed; filter font and dt/dd order verified; theme-color metas are present; no console errors or horizontal scroll at 1280 and 390. |

## Rollback
In Railway, open `web`, go to Deployments and choose **Rollback** on the previous good deploy. Or reconnect the source pinned to the previous release commit.

## Notes
- The service is pinned to a commit, so pushes to `main` do not deploy. To release, tag `main`, then repoint the pin at the new commit (Dan says "deploy <tag>").
- The release tags exist only in the local repo, because the session proxy refuses tag pushes. Create them on GitHub when convenient: `v2026.11.24-2` at 0d4994f, `v2026.11.25-1` at 2d5bed4 `v2026.11.25-2` at a847f6d `v2026.11.26-1` at 5c53bf2 and `v2026.11.26-2` at 9383838.
- teamafricaventures.com still points at the old host. The domain switch is pending DNS.
