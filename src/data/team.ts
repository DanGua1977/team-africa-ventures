// Team. Sources: "Meet the team" slides in Team_Africa_Ventures_Overview.pptx,
// the live site bios, and Dan's own profile. Photos are cropped from the deck (300px):
// ⚠ VERIFY — replace with higher-resolution originals (at least 800px square).

export type Partner = {
  name: string;
  role: string;
  photo: string;
  bio: string[];
  linkedin?: string; // ⚠ VERIFY — add profile URLs
};

export const partners: Partner[] = [
  {
    name: 'Daniel Guasco',
    role: 'Partner',
    photo: '/images/team/daniel.jpg',
    bio: [
      'Daniel started his first business at 12. He co-founded Twangoo, sold it to Groupon, and went on to co-run Groupon in South Africa and across Central and Eastern Europe.',
      'Since then he has built and backed companies including Click2Sure, which he founded and exited, and Hyperli, where he remains an investor and advisor. He is a former chairman of Silicon Cape.',
      'He holds an MBA from London Business School and completed the Singularity University executive programme.',
    ],
  },
  {
    name: 'Wayne Gosling',
    role: 'Partner',
    photo: '/images/team/wayne.jpg',
    bio: [
      'Wayne sold his first business while still at university. He co-founded Twangoo, sold it to Groupon and became Groupon’s South African CEO.',
      'He is a strong advocate of lean start-ups and an exit-centric focus: a quick build from concept to execution, based on experience, talent and insight. His strengths are systems, processes and execution.',
    ],
  },
];

// Wider team from the circa-2019 deck. Hidden until Dan confirms who is current.
// ⚠ VERIFY — set SHOW_WIDER_TEAM to true once the list is confirmed.
export const SHOW_WIDER_TEAM = false;
export const widerTeam = [
  { name: 'Kobus Fourie', role: 'Head of Finance' },
  { name: 'Kornel Steyn', role: 'Head of Technology' },
  { name: 'Jayde Clayton', role: 'Head of Marketing' },
  { name: 'Celeste Vorster', role: 'Head of Talent' },
  { name: 'William Chin', role: 'Entrepreneur in Residence' },
  { name: 'Michiel van Dijk', role: 'Head of Growth and Business Intelligence' },
  { name: 'Jaime Lilford', role: 'Head of Legal' },
];
