// Portfolio. Source list: "Partner Companies" slide, Team_Africa_Ventures_Overview.pptx.
// Descriptions come from the "Proven success stories" slide unless a different source is noted.
// Leave `summary` empty rather than guess — the page handles a missing summary.

export type Role = 'Built' | 'Co-founded' | 'Seed and advisory' | 'Seed funding' | 'Partner';

export type Company = {
  name: string;
  summary?: string;
  sector?: string;
  role: Role;
  started?: number;
  outcome?: string; // shown only when sourced
  exited?: boolean;
  url?: string;
  source: string;
  verify?: string;
};

export const portfolio: Company[] = [
  {
    name: 'Twangoo',
    summary:
      'Group-buying site we built and sold to Groupon 156 days after founding. We then ran Groupon in South Africa for seven years.',
    sector: 'E-commerce',
    role: 'Built',
    started: 2010,
    outcome: 'Acquired by Groupon',
    exited: true,
    source: 'Overview deck; 156 days confirmed by Dan, 24 Nov 2026',
    verify: '⚠ VERIFY — start year: deck says 2010, live site says 2011.',
  },
  {
    name: '5 Ounces',
    summary: 'Online wine marketplace, scaled and sold to Naspers.',
    sector: 'E-commerce',
    role: 'Built',
    started: 2012,
    outcome: 'Acquired by Naspers, 2013',
    exited: true,
    source: 'Overview deck, success stories',
  },
  {
    name: 'Glambox',
    summary: 'Beauty subscription platform, scaled and sold to Naspers.',
    sector: 'Subscription commerce',
    role: 'Built',
    started: 2012,
    outcome: 'Acquired by Naspers, 2013',
    exited: true,
    source: 'Overview deck, success stories',
  },
  {
    name: 'Lula',
    summary:
      'Business funding platform for South African SMEs, formerly Lulalend. We seed-funded it and brought the founding team together.',
    sector: 'Fintech',
    role: 'Co-founded',
    started: 2015,
    outcome: 'Series B with IFC and Quona Capital, 2019',
    url: 'https://lula.co.za',
    source: 'Overview deck, success stories',
  },
  {
    name: 'Conversio',
    summary: 'E-commerce marketing automation. We provided seed funding and advised the founding team.',
    sector: 'Marketing software',
    role: 'Seed and advisory',
    started: 2016,
    outcome: 'Acquired by Campaign Monitor, 2019',
    exited: true,
    source: 'Overview deck, success stories',
  },
  {
    name: 'Click2Sure',
    summary:
      'Full-stack digital insurance platform that lets businesses sell and manage insurance products.',
    sector: 'Insurtech',
    role: 'Built',
    started: 2016,
    outcome: 'Exited',
    exited: true,
    source: 'Overview deck (Series A, 2017); exit per Dan',
    verify: '⚠ VERIFY — acquirer and year of exit, if they can be named.',
  },
  {
    name: 'Hyperli',
    summary: "South Africa's leading daily-deals marketplace.",
    sector: 'E-commerce',
    role: 'Built',
    started: 2017,
    url: 'https://www.hyperli.com',
    source: 'Overview deck, success stories',
  },
  {
    name: 'WumDrop',
    summary: 'Same-day, last-mile delivery across South African cities. We provided seed funding.',
    sector: 'Logistics',
    role: 'Seed funding',
    outcome: 'Acquired by Massmart',
    exited: true,
    url: 'https://www.wumdrop.com',
    source: 'Seed funding confirmed by Dan, 24 Nov 2026; acquisition per TechCentral and CB Insights',
  },
  {
    name: '8bit',
    summary: 'Cape Town content-discovery and native advertising platform.',
    sector: 'Media technology',
    role: 'Partner',
    started: 2014,
    source: 'HumanIPO, 2014 (Guasco and Gosling among investors)',
  },
  {
    name: 'ekaya',
    summary: 'Marketplace for long-term rentals in South Africa.',
    sector: 'Property',
    role: 'Partner',
    source: 'TechMoran, 2014',
    verify: '⚠ VERIFY — description from a 2014 article.',
  },
  {
    name: 'LifeQ',
    summary: 'Turns wearable sensor data into health insights.',
    sector: 'Health technology',
    role: 'Partner',
    url: 'https://www.lifeq.com',
    source: 'General knowledge',
    verify: '⚠ VERIFY — description.',
  },
  {
    name: 'Mixtiles',
    summary: 'Photo tiles that stick to the wall without nails.',
    sector: 'Consumer',
    role: 'Partner',
    url: 'https://www.mixtiles.com',
    source: 'General knowledge',
  },
  {
    name: 'Zilch',
    summary: 'UK payments company built around buy-now-pay-later.',
    sector: 'Fintech',
    role: 'Partner',
    url: 'https://www.payzilch.com',
    source: 'General knowledge',
  },
  {
    name: 'wineowine',
    summary: 'Italian online shop for wines from small producers.',
    sector: 'E-commerce',
    role: 'Partner',
    source: 'Logo tagline in deck: "Grandi vini di piccole cantine"',
    verify: '⚠ VERIFY — description.',
  },
  {
    name: 'Bulbshare',
    summary:
      'AI-powered platform that connects brands with their customers to co-create products, marketing and strategy before they reach the market.',
    sector: 'Consumer insights',
    role: 'Partner',
    outcome: 'Acquired by Service Management Group (SMG), 2024',
    exited: true,
    source:
      'Dan, 26 Nov 2026 (listed as "Latimer" in the old deck); Wayne\'s March 2026 site copy; acquisition per SMG/Brentwood press release (24 Oct 2024) and PitchBook (10 Oct 2024)',
    verify: '⚠ VERIFY — TAV role (Built, Seed funding or Partner) and the year TAV got involved (Wayne lists 2016).',
  },
  {
    name: 'JinPay',
    role: 'Partner',
    source: 'Overview deck logo only',
    verify: '⚠ VERIFY — no public description found. Add summary and sector.',
  },
];

export const exits = portfolio.filter((c) => c.exited);
