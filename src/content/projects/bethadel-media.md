---
title: Bethadel Media
description: Company website for a Lagos event production and media firm. Contract work, built from scratch and shipped in a week on Astro and Vercel.
date: 2026-09-14
tags: [Astro, Tailwind, Vercel, Serverless, Edge middleware]
featured: true
live: https://www.bethadelmedia.com
accent: '#5ee7f2'
---

## The brief

Bethadel Media Limited does LED walls, sound, live streaming and stage design for events in Lagos. They needed a site that looked as considered as their work and that a non-technical team could keep updated. I handled everything: structure, design, content organisation, build, email, deployment, and the launch plan.

## What shipped

- **Pages**: home, about, services, a gallery organised into albums with album pages and a Flickr-style justified photostream, contact with a thank-you page, privacy and terms, a 404, and a sitemap.
- **Contact form** on a Vercel serverless function using Resend. Input limits and validation, a honeypot field, a notification to the team with reply-to set to the enquirer, and an acknowledgment email to the sender that follows transactional best practice. A failed acknowledgment never fails the submission.
- **Launch gating** with Vercel Edge middleware: while an environment variable is set, the public domain serves a coming-soon page and every other host serves the full site for review. Preview hosts get a noindex header so search engines never pick the wrong URL.
- **Theme switcher**, mega menu, partner logo marquee, WhatsApp button, back-to-top, share pills.
- **Performance and SEO**: immutable cache headers for images, video and downloads; a permanent redirect from the bare domain to www; clean URLs; Open Graph tags.

Live at [bethadelmedia.com](https://www.bethadelmedia.com).

## How it went

Sixty-six commits between 14 and 16 September 2026, from first commit to live. All content lives in typed data files, so the client edits services, partners and gallery albums without touching components.
