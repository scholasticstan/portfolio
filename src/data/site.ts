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

// What an employer gets. Every line is backed by something in the repos; the proof links are the evidence.
export type Offer = { title: string; body: string; proof: { label: string; href: string }[] };
export const offer: Offer[] = [
  {
    title: 'I ship whole products, not just screens',
    body: 'Payroid is a live fintech I founded and built: customer app, operator console and Flutter app, about 94k lines. The Bethadel Media site went from brief to launch in a week. LinkBolt has a UI, server actions, a Postgres schema and a JSON API.',
    proof: [{ label: 'Payroid', href: '/projects/payroid/' }, { label: 'Bethadel Media', href: '/projects/bethadel-media/' }, { label: 'LinkBolt', href: '/projects/linkbolt/' }],
  },
  {
    title: 'Tests and CI from the first commit, every time',
    body: '33 tests, unit and integration, run in GitHub Actions on every push with a real Postgres service. Lint, typecheck, build. Nothing merges red.',
    proof: [{ label: 'CI runs', href: 'https://github.com/scholasticstan/linkbolt/actions' }, { label: 'Test suite', href: 'https://github.com/scholasticstan/linkbolt/tree/main/tests' }],
  },
  {
    title: 'Performance decisions I can explain in review',
    body: 'Redirects answer from a bounded cache and record the click after the response is sent. I can tell you why it is a 302 and not a 301, and what that costs.',
    proof: [{ label: 'The redirect handler', href: 'https://github.com/scholasticstan/linkbolt/blob/main/src/app/%5Bslug%5D/route.ts' }],
  },
  {
    title: 'I know what the framework is hiding',
    body: 'I wrote a Unix shell and printf in C during ALX. When a React abstraction leaks, I know what it is hiding.',
    proof: [{ label: 'Simple Shell', href: '/projects/simple-shell/' }, { label: 'printf', href: '/projects/printf/' }],
  },
  {
    title: 'Code and pull requests you can read cold',
    body: 'Small commits, comments that say why, READMEs that list the trade-offs. The next engineer should not need me in the room.',
    proof: [{ label: 'LinkBolt README', href: 'https://github.com/scholasticstan/linkbolt#readme' }, { label: 'Commit history', href: 'https://github.com/scholasticstan/linkbolt/commits/main' }],
  },
  {
    title: 'I notice what users notice',
    body: 'Payroid locks the rate at submit and refuses a KYC backdoor for app reviewers. LinkBolt counts bots separately and hashes visitors instead of storing IPs.',
    proof: [{ label: 'Payroid decisions', href: '/projects/payroid/#decisions-i-would-defend' }, { label: 'LinkBolt decisions', href: '/projects/linkbolt/#decisions-i-would-defend-in-a-review' }],
  },
];

export const stats = [
  { value: 'LinkBolt', label: 'Link platform: Next.js, Postgres, tested, with an API' },
  { value: '33', label: 'Automated tests on it, run in CI on every push' },
  { value: 'ALX SE', label: 'Software engineering programme: C, Python, Linux, 2022 – 2024' },
  { value: 'Payroid', label: 'Frontend Developer, current' },
];
