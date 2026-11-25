# Deploys

One line per production deploy: tag, time, who approved it, result.

| Tag | Commit | Time (SAST) | Approved by | Target | Result |
|---|---|---|---|---|---|
| v2026.11.24-2 | 0d4994f | 2026-11-24 22:21 | Dan ("deploy v2026.11.24-2", 21:41) | Railway `team-africa-ventures` / `web` / production, pinned to commit, https://web-production-3596e84d.up.railway.app | Success. Smoke passed: /healthz 200, all 5 pages 200, 404 page, 301 trailing-slash redirect, llms.txt, sitemap, security headers, no console errors, fonts loaded at 1280 and 390. |
| v2026.11.25-1 | 2d5bed4 | 2026-11-25 10:51 | Dan ("deploy v2026.11.25-1", 10:49) | Railway `team-africa-ventures` / `web` / production, pinned to commit | Success. Contains PR #6 (pin TypeScript 6, fixing the broken npm ci on main) and PR #7 (Daniel's bio no longer names Automaiq). Gate: clean npm ci, audit 0, astro check 0 errors, 33 e2e passed. Smoke: all pages 200, /healthz 200, 404 page, Automaiq absent from the live /team/. Previous deploy 130ff30a is still available for rollback. |

## Rollback
In Railway, open `web`, go to Deployments and choose **Rollback** on the previous good deploy. Or reconnect the source pinned to the previous release commit.

## Notes
- The service is pinned to a commit, so pushes to `main` do not deploy. To release, tag `main`, then repoint the pin at the new commit (Dan says "deploy <tag>").
- The release tags exist only in the local repo, because the session proxy refuses tag pushes. Create them on GitHub when convenient: `v2026.11.24-2` at 0d4994f and `v2026.11.25-1` at 2d5bed4.
- teamafricaventures.com still points at the old host. The domain switch is pending DNS.
