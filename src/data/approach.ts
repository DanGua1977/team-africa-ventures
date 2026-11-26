// How TAV works, AI-first studio model. Source: Dan, 24 Nov 2026 ("AI first with minimal headcount
// that will replace incumbent services, manual people-oriented businesses globally ... vs funding we
// more so look to build and internally develop with founders"), plus the process and criteria from
// the original deck and live site.

export const thesis = {
  statement:
    'Most service businesses still run on people doing repetitive work by hand. AI can now do much of that work. The next great companies will look like services to their customers and run like software inside.',
  principles: [
    {
      title: 'AI-first',
      body: 'Models and agents sit at the core of the product from day one. Nothing is bolted on later.',
    },
    {
      title: 'Minimal headcount',
      body: 'A small, senior team. Software carries the volume; people handle judgment and relationships.',
    },
    {
      title: 'Replace the incumbent, globally',
      body: 'We go after large service markets where the incumbent’s biggest cost is people, and sell beyond our home market from the start.',
    },
  ],
};

// At-a-glance profile, in the format founders use to compare investors.
export const profile = [
  { term: 'Model', detail: 'Venture studio. We build companies with founders, then fund what works.' },
  { term: 'Stage', detail: 'Before day one through seed.' },
  {
    term: 'What we commit',
    detail: 'Capital, a build team, our AI operating stack and our go-to-market network.',
    verify: '⚠ VERIFY — add a cheque range if you want one shown (e.g. "$250k to $1m").',
  },
  {
    term: 'Focus',
    detail: 'AI-first replacements for manual, people-heavy service businesses.',
  },
  {
    term: 'Geography',
    detail: 'Global markets, built from Cape Town and Lake Como.',
    verify: '⚠ VERIFY — confirm Lake Como should be named as a TAV base.',
  },
  {
    term: 'Track record',
    detail: '18 companies built or backed, 8 exits, including sales to Groupon, Naspers, Campaign Monitor, Massmart and SMG.',
  },
];

export const comparison = {
  columns: ['A typical seed fund', 'Team Africa Ventures'],
  rows: [
    { label: 'When we get involved', fund: 'After the company exists', tav: 'Before day one. We shape the idea with you.' },
    { label: 'What you get', fund: 'Capital and a board seat', tav: 'Capital, co-builders, our AI stack and our network' },
    { label: 'Who builds version one', fund: 'You and the people you hire', tav: 'Our team, side by side with yours' },
    { label: 'How the team grows', fund: 'Raise, then hire to grow', tav: 'Automate first. Hire only for judgment.' },
    { label: 'How decisions get made', fund: 'Partner meetings and committees', tav: 'Two operators who have done it before' },
  ],
};

// ⚠ VERIFY — focus areas are Claude's reading of "incumbent services, manual people-oriented
// businesses". Confirm or replace with the categories you actually want to build in.
export const focusAreas = [
  { title: 'Back-office services', body: 'Bookkeeping, payroll, collections, claims handling.' },
  { title: 'Customer operations', body: 'Support, bookings, sales development and account management.' },
  { title: 'Compliance and admin', body: 'Onboarding, verification and document-heavy workflows.' },
  { title: 'Commerce operations', body: 'Supplier onboarding, merchandising and fulfilment coordination.' },
];

export const bestFor = [
  'Founders who have worked inside the service they want to replace.',
  'Operators ready to run a company with a fraction of the incumbent’s headcount.',
  'Teams who want co-builders in the room, not a cheque and a quarterly call.',
];

export const commitments = [
  { title: 'Capital', body: 'Early capital from people who have raised money and sold companies themselves.' },
  { title: 'Co-builders', body: 'Partners and a studio team who ship the first version with you.' },
  { title: 'AI operating stack', body: 'The agents, workflows and playbooks we run on our own companies, from day one.' },
  { title: 'Go-to-market', body: 'Introductions to first customers, co-investors, acquirers and hires across markets.' },
];

export const stages = [
  {
    title: 'Find the weak point',
    summary: 'We pick an incumbent whose cost base is people doing work software can now do.',
    questions: [
      'Which work does the incumbent pay people to do by hand?',
      'How much of it can software do today, and how much next year?',
      'Do we have experience and a network in this market?',
      'Do we have access to the first customers?',
      'Why is now the right time to launch?',
    ],
  },
  {
    title: 'Build AI-first, with a founder',
    summary: 'We decide whether to build in the studio or partner, then ship version one together.',
    questions: [
      'Will building in the studio or partnering give the company the better chance?',
      'Put a small, A-grade core team in place.',
      'Set the measures that matter: revenue per person, gross margin, time to serve a customer.',
      'Studio and founding team launch the business side by side.',
    ],
  },
  {
    title: 'Scale without the headcount',
    summary: 'We grow revenue faster than the team, then hand over deliberately.',
    questions: [
      'Automate before you hire.',
      'Sell beyond the home market early.',
      'Transfer knowledge to the founding team and stay close.',
      'Iterate and grow using lean start-up methods.',
    ],
  },
];

// Source: live site "Who we invest in", adapted for the AI-first thesis.
export const criteria = [
  { title: 'Clarity of purpose', body: 'You can explain the business in 30 seconds.' },
  { title: 'Large service markets', body: 'Big spend today, mostly on people doing repeatable work.' },
  { title: 'Focus', body: 'One workflow done far better than the incumbent before anything else.' },
  { title: 'Original thinking', body: 'Unconventional answers to problems others have accepted.' },
  { title: 'Exceptional teams', body: 'Founders who can build, sell and decide quickly.' },
  { title: 'Minimal headcount', body: 'Revenue grows faster than the team.' },
  { title: 'Agility', body: 'You change course quickly when the evidence says so.' },
];
