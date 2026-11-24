// Site-wide facts. Every figure carries its source so it can be checked.
// Anything marked ⚠ VERIFY is unconfirmed — owner: Dan.

export const site = {
  name: 'Team Africa Ventures',
  shortName: 'TAV',
  url: 'https://www.teamafricaventures.com',
  email: 'info@teamafricaventures.com', // source: live site footer
  city: 'Cape Town, South Africa', // source: live site
  description:
    'Team Africa Ventures is an early-stage fund and company builder run by entrepreneurs in Cape Town. We put time, expertise and capital behind founders building technology businesses.',
};

export const nav = [
  { href: '/portfolio/', label: 'Portfolio' },
  { href: '/approach/', label: 'Approach' },
  { href: '/team/', label: 'Team' },
  { href: '/contact/', label: 'Contact' },
];

export type Stat = { value: string; label: string; source: string; verify?: string };

// Track record. Source for most lines: "Team Africa Ventures Achievements" slide,
// Team_Africa_Ventures_Overview.pptx (deck is undated, circa 2019).
export const stats: Stat[] = [
  {
    value: '18',
    label: 'Companies built or backed',
    source: 'Dan, Nov 2026',
    verify: '⚠ VERIFY — the overview deck lists 16 partner companies; two are missing from the portfolio list.',
  },
  {
    value: '6',
    label: 'Exits',
    source: 'Overview deck, achievements slide',
    verify: '⚠ VERIFY — figure is from the circa-2019 deck; update if there have been exits since.',
  },
  {
    value: '550+',
    label: 'Jobs created',
    source: 'Overview deck, achievements slide',
    verify: '⚠ VERIFY — circa-2019 figure.',
  },
  {
    value: '$18m+',
    label: 'Raised by our companies',
    source: 'Overview deck, achievements slide',
    verify: '⚠ VERIFY — circa-2019 figure.',
  },
  {
    value: '$100m+',
    label: 'Value of the companies we have built or invested in',
    source: 'Overview deck: "Built or invested in + $100m worth of opportunities"',
    verify: '⚠ VERIFY — circa-2019 figure; wording softened from the deck.',
  },
];
