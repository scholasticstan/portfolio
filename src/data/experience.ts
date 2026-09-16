export type Experience = {
  role: string;
  company: string;
  url?: string;
  period: string;
  summary: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    role: 'Founder & Lead Engineer',
    company: 'Payroid',
    url: 'https://payroid.co/',
    period: 'May 2026 – Present',
    summary: 'Gift cards and crypto to naira, plus bill payments. My company; I designed and built all of it.',
    highlights: [
      'Customer web app, operator console and Flutter mobile app from one monorepo: Next.js 16, TypeScript, Postgres via Drizzle. About 94k lines.',
      'KYC tiers (BVN, NIN, selfie), passkey and OTP sign-in, transaction PIN, wallet, payouts, bill payments, receipts, push notifications.',
      'Three hosts from one deployment through an edge proxy; a Fly.io static-IP proxy for Flutterwave; treasury cron; audit-logged operator desks.',
    ],
  },
  {
    role: 'Contract Web Developer',
    company: 'Bethadel Media Limited',
    url: 'https://www.bethadelmedia.com',
    period: 'Sep 2026',
    summary: 'Company website for a Lagos event production firm. Built from scratch and shipped in a week.',
    highlights: [
      'Astro and Tailwind on Vercel: home, about, services, gallery with albums and a photostream, legal pages, sitemap.',
      'Contact form on a serverless function with Resend: validation, honeypot, team notification and an acknowledgment email.',
      'Edge middleware that gates launch by hostname and marks preview deployments noindex.',
    ],
  },
  {
    role: 'Freelance Frontend Developer',
    company: 'Self-employed',
    period: 'Before Payroid',
    summary: 'Websites and small web apps for clients, mostly on the MERN stack.',
    highlights: [
      'React front ends with Tailwind, Firebase and REST APIs.',
      'Took projects from the first call to deployment and handover.',
    ],
  },
  {
    role: 'Software Engineering Student',
    company: 'ALX Africa',
    url: 'https://www.alxafrica.com/',
    period: '2022 – 2024',
    summary: 'Twelve-month programme built on the Holberton curriculum. Low-level first, web second.',
    highlights: [
      'Wrote a Unix shell and a printf implementation in C, with a teammate, from the man pages.',
      'Built the AirBnB clone through four versions: console, file and MySQL storage, Flask, REST API, dynamic front end.',
    ],
  },
];

export const education = [
  { title: 'University of Benin', detail: 'Bachelor’s degree', period: '2017 – 2021' }, // TODO: add the course name
  { title: 'ALX Software Engineering', detail: 'Full-stack track, project based', period: '2022 – 2024' },
  { title: 'The Fundamentals of Digital Marketing', detail: 'Google · Credential ID U89 QGD TKT', period: 'Sep 2022' },
];
