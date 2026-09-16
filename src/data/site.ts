// Edit this file to personalise the whole site.
export const site = {
  name: 'Stanley Alu',
  firstName: 'Stanley',
  handle: 'scholasticstan',
  title: 'Frontend Engineer & Founder',
  tagline:
    'Frontend engineer who ships the whole feature. Founder of Payroid, a live fintech with a web app, operator console and Flutter app; contract builder of the Bethadel Media site; author of LinkBolt. Next.js, TypeScript, Postgres, Flutter, Astro. Available now for frontend or full-stack roles, remote across EMEA or in Nigeria.',
  location: 'Nigeria',
  email: 'hello@scholasticstanley.com',
  linkedin: 'https://www.linkedin.com/in/scholasticstan',
  github: 'https://github.com/scholasticstan',
  twitter: 'https://x.com/AluStanley',
  company: { name: 'Payroid', url: 'https://payroid.co/' },
  resume: '/resume.pdf', // TODO: drop your CV at public/resume.pdf
  available: true,
};

export const nav = [
  { label: 'Work', href: '/#projects' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Hire me', href: '/#contact' },
];

// What an employer gets. Every line is backed by something in the repos.
export const offer = [
  { title: 'Whole products, not just screens', body: 'Payroid is a live fintech I founded and built: customer app, operator console and Flutter app, about 94k lines. The Bethadel Media site went from brief to launch in a week. LinkBolt has a UI, server actions, a Postgres schema and a JSON API.' },
  { title: 'Tests and CI from the first commit', body: '33 tests, unit and integration, run in GitHub Actions on every push with a real Postgres service. Lint, typecheck, build. Nothing merges red.' },
  { title: 'Performance decisions I can explain', body: 'Redirects answer from a bounded cache and record the click after the response is sent. I can tell you why it is a 302 and not a 301, and what that costs.' },
  { title: 'Foundations below the framework', body: 'I wrote a Unix shell and printf in C during ALX. When a React abstraction leaks, I know what it is hiding.' },
  { title: 'Readable code, readable PRs', body: 'Small commits, comments that say why, READMEs that list the trade-offs. The next engineer should not need me in the room.' },
  { title: 'Product sense', body: 'Payroid locks the rate at submit and refuses a KYC backdoor for app reviewers. LinkBolt counts bots separately and hashes visitors instead of storing IPs. Details a user notices.' },
];

export const stats = [
  { value: 'LinkBolt', label: 'Link platform: Next.js, Postgres, tested, with an API' },
  { value: '33', label: 'Automated tests on it, run in CI on every push' },
  { value: 'ALX SE', label: 'Software engineering programme: C, Python, Linux, 2022 – 2024' },
  { value: 'Payroid', label: 'Frontend Developer, current' },
];
