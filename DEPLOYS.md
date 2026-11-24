# Deploys

One line per production deploy: tag, time, who approved it, result.

| Tag | Commit | Time (SAST) | Approved by | Target | Result |
|---|---|---|---|---|---|
| v2026.11.24-2 | 0d4994f | 2026-11-24 22:21 | Dan ("deploy v2026.11.24-2", 21:41) | Railway `team-africa-ventures` / `web` / production, pinned to commit, https://web-production-3596e84d.up.railway.app | Success. Smoke passed: /healthz 200, all 5 pages 200, 404 page, 301 trailing-slash redirect, llms.txt, sitemap, security headers, no console errors, fonts loaded at 1280 and 390. |

## Rollback
In Railway, open `web`, go to Deployments and choose **Rollback** on the previous good deploy. Or reconnect the source pinned to the previous release commit.

## Notes
- The service is pinned to a commit, so pushes to `main` do not deploy. To release, tag `main`, then repoint the pin at the new commit (Dan says "deploy <tag>").
- The release tags exist only in the local repo, because the session proxy refused tag pushes. Create `v2026.11.24-2` on GitHub at 0d4994f when convenient.
- teamafricaventures.com still points at the old host. The domain switch is pending DNS.
