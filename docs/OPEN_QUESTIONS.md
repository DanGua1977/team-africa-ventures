# Open questions (⚠ VERIFY)

Owner for all items: Dan. Each one is also marked in the data file it lives in.

## Track record (`src/data/site.ts`)

1. **18 companies.** Dan's current figure. The overview deck only lists 16 partner companies. Which two are missing from the portfolio?
2. **6 exits, 550+ jobs, $18m+ raised, $100m+ built or invested.** These come from the undated deck (around 2019). Update them or confirm them.

## Portfolio (`src/data/portfolio.ts`)

3. **Twangoo.** The deck says it was sold in 125 days, started in 2010. The live site says it was co-founded in 2011. Dan has also said 156 days. The site copy says "under six months" until this is settled.
4. **Click2Sure.** Can the acquirer and exit year be named?
5. **WumDrop.** What was TAV's relationship to it? Is it one of the six exits? The site currently counts it.
6. **Latimer and JinPay.** No public description was found. Add a one-line summary and a sector for each.
7. **ekaya, LifeQ, wineowine.** The descriptions come from public sources. Confirm they are right.
8. **Roles.** Companies on the deck's logo slide without a success story are shown as "Partner company". Change any that should say Built, Co-founded or Seed and advisory.

## Team (`src/data/team.ts`)

9. **Wider team.** The 2019 list (Kobus Fourie, Kornel Steyn, Jayde Clayton, Celeste Vorster, William Chin, Michiel van Dijk, Jaime Lilford) is hidden. Set `SHOW_WIDER_TEAM = true` once you have confirmed who is current.
10. **Photos.** The current photos are 300px crops from the deck. Replace them with originals of at least 800px.
11. **LinkedIn.** Add profile URLs for Daniel and Wayne if you want them shown.
12. **Wayne.** Confirm Wayne is still a partner and has approved his bio.

## Site

13. **Domain and DNS.** Who controls teamafricaventures.com DNS? It's needed to point `www` at Railway.
