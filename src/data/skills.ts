export type SkillGroup = {
  title: string;
  description: string;
  skills: { name: string; level: number }[]; // level: 1–5, my own honest rating
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    description: 'Where I spend most of my working day.',
    skills: [
      { name: 'React', level: 5 },
      { name: 'JavaScript', level: 5 },
      { name: 'TypeScript', level: 4 },
      { name: 'Next.js (App Router, server actions)', level: 5 },
      { name: 'HTML & CSS', level: 5 },
      { name: 'Tailwind CSS', level: 5 },
      { name: 'Astro', level: 4 },
      { name: 'Flutter / Dart', level: 3 },
    ],
  },
  {
    title: 'Backend & data',
    description: 'Enough to own a feature end to end.',
    skills: [
      { name: 'Node.js & Express', level: 4 },
      { name: 'PostgreSQL & Drizzle', level: 4 },
      { name: 'MongoDB', level: 3 },
      { name: 'Python & Flask', level: 3 },
      { name: 'Firebase', level: 3 },
      { name: 'REST API design', level: 4 },
      { name: 'Auth: OTP, passkeys, PIN, sessions', level: 4 },
      { name: 'Payments & webhooks (Flutterwave, Svix)', level: 3 },
    ],
  },
  {
    title: 'Systems & fundamentals',
    description: 'From the ALX programme: things I learned by writing them in C.',
    skills: [
      { name: 'C', level: 3 },
      { name: 'Linux & shell scripting', level: 4 },
      { name: 'Processes, fork/exec, signals', level: 3 },
      { name: 'Data structures & sorting', level: 3 },
      { name: 'HTTP, redirects, caching', level: 4 },
      { name: 'MySQL & SQLAlchemy', level: 3 },
    ],
  },
  {
    title: 'Tooling & delivery',
    description: 'How the work gets out the door.',
    skills: [
      { name: 'Git & GitHub', level: 4 },
      { name: 'Vitest & testing', level: 3 },
      { name: 'GitHub Actions CI', level: 3 },
      { name: 'Vercel & Netlify', level: 4 },
      { name: 'Docker & Fly.io', level: 3 },
      { name: 'SEO & digital marketing', level: 3 },
    ],
  },
];

export const tools = [
  'VS Code', 'Postman', 'Figma', 'Chrome DevTools', 'Lighthouse', 'Zod', 'Drizzle Kit', 'pnpm workspaces', 'Web Push', 'WebAuthn', 'Resend', 'Vite',
];
