// Site-wide facts. Every figure carries its source so it can be checked.
// Anything marked ⚠ VERIFY is unconfirmed — owner: Dan.

export const site = {
  name: 'Team Africa Ventures',
  shortName: 'TAV',
  url: 'https://www.teamafricaventures.com',
  email: 'info@teamafricaventures.com', // source: live site footer
  city: 'Cape Town, South Africa', // source: live site
  description:
    'Team Africa Ventures is an operator-led venture studio. We build AI-first companies with founders: small teams, software doing the work, built to replace manual service incumbents around the world.',
};

export const nav = [
  { href: '/approach/', label: 'How we build' },
  { href: '/portfolio/', label: 'Portfolio' },
  { href: '/team/', label: 'Team' },
  { href: '/contact/', label: 'Contact' },
];

export type Stat = { value: string; label: string; source: string; verify?: string };

// Track record. Source: Dan, 24 Nov 2026, unless noted.
export const stats: Stat[] = [
  {
    value: '18',
    label: 'Companies built or backed',
    source: 'Dan, Nov 2026',
    verify: '⚠ VERIFY — the portfolio page lists 16; two are not public.',
  },
  { value: '8', label: 'Exits', source: 'Dan, 24 Nov 2026' },
  { value: '1,000+', label: 'Jobs created', source: 'Dan, 24 Nov 2026' },
  { value: '$50m+', label: 'Raised by our companies', source: 'Dan, 24 Nov 2026' },
  {
    value: '$250m+',
    label: 'Value of the companies we have built or invested in',
    source: 'Dan, 24 Nov 2026',
  },
];

// Who the site is for. Each path lands on the matching part of the contact page.
export const audiences = [
  {
    id: 'founders',
    who: 'Founders',
    line: 'You know a service industry from the inside and can see the work software should do.',
    cta: 'Build with us',
  },
  {
    id: 'operators',
    who: 'Operators',
    line: 'You have run teams in a services business and want to be the founder of its replacement.',
    cta: 'Join a build',
  },
  {
    id: 'investors',
    who: 'Co-investors',
    line: 'You want access to studio-built companies with an operator team already inside them.',
    cta: 'Talk to us',
  },
];
