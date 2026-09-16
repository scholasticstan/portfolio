export type Experience = {
  role: string;
  company: string;
  url?: string;
  period: string;
  summary: string;
  highlights: string[];
};

// TODO: LinkedIn hides titles and dates from the public profile. Check these.
export const experience: Experience[] = [
  {
    role: 'Frontend Developer',
    company: 'Payroid',
    url: 'https://payroid.co/',
    period: 'Present',
    summary: 'Payroll and payments product. I work on the web app.',
    highlights: [
      'Build and maintain React screens for customers and internal staff.',
      'Work with the backend team on API contracts so features ship in one go.',
      'Keep the UI consistent and quick on the low-end Android phones most users have.',
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
      'Learned to scope work, write it down, and say no to the fourth revision.',
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
      'Final project: a task scheduling web app with its own REST API.',
    ],
  },
];

export const education = [
  { title: 'University of Benin', detail: 'Bachelor’s degree', period: '2017 – 2021' }, // TODO: add the course name
  { title: 'ALX Software Engineering', detail: 'Full-stack track, project based', period: '2022 – 2024' },
  { title: 'The Fundamentals of Digital Marketing', detail: 'Google · Credential ID U89 QGD TKT', period: 'Sep 2022' },
];
