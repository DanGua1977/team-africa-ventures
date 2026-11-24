// How TAV works. Sources: "Our Process" slide and the positioning slide in
// Team_Africa_Ventures_Overview.pptx; investment criteria from the live site.

export const modes = [
  {
    title: 'We build',
    body: 'We look for defendable niches in markets we know, then build the company ourselves: we find the opportunity, assemble the team and run it alongside them until it can stand on its own.',
    examples: ['Twangoo', 'Glambox', 'Click2Sure', 'Hyperli'],
  },
  {
    title: 'We back',
    body: 'We invest in founders whose businesses fit what we know, and work with them as operators rather than observers. Where it helps, we partner with world-leading organisations to give the company a better shot.',
    examples: ['Lula', 'Conversio', '8bit'],
  },
];

// The platform founders get. Source: positioning slide, "resident tools, expertise, network & capital".
export const platform = [
  { title: 'Capital', body: 'Early cheques from people who have raised capital and sold companies themselves.' },
  { title: 'Expertise', body: 'Partners who have run companies through launch, scale and sale, and can sit in the work with you.' },
  { title: 'Network', body: 'Introductions to customers, co-investors, acquirers and hires across South Africa and beyond.' },
  { title: 'Resident tools', body: 'The systems, processes and playbooks we use on our own companies, available from day one.' },
];

export const stages = [
  {
    title: 'Idea and market validation',
    summary: 'We pressure-test the opportunity before anyone commits.',
    questions: [
      'Do we have personal experience and a network in this market?',
      'Who are the main incumbents?',
      'Do we have access to customers?',
      'Can we build a sustainable advantage?',
      'What are the barriers to entry?',
      'Why is now the right time to launch this business?',
    ],
  },
  {
    title: 'Build or partner',
    summary: 'We decide the fastest route to success, then put the team in place.',
    questions: [
      'Will partnering or building give the business the better chance?',
      'Build an A-grade executional team.',
      'Set KPIs, monthly recurring revenue targets and a plan to scale.',
      'Core and executional teams launch the business side by side.',
    ],
  },
  {
    title: 'Scale and manage',
    summary: 'We hand over deliberately and stay close while it grows.',
    questions: [
      'Transfer knowledge to the executional team.',
      'Keep consistent contact between the core and executional teams.',
      'Iterate and grow using lean start-up methods.',
    ],
  },
];

// Source: live site, "Who we invest in".
export const criteria = [
  { title: 'Clarity of purpose', body: 'You can explain the business in 30 seconds.' },
  { title: 'Large markets', body: 'The market is big and growing fast, or changing fast.' },
  { title: 'Focus', body: 'A simple product with one clear value proposition.' },
  { title: 'Original thinking', body: 'Unconventional answers to problems others have accepted.' },
  { title: 'Exceptional teams', body: 'Founders who can build, sell and hire.' },
  { title: 'Frugality', body: 'Every rand goes where it moves the business.' },
  { title: 'Agility', body: 'You change course quickly when the evidence says so.' },
];
