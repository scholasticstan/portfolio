---
title: LinkBolt
description: A link shortener with analytics that separate people from bots, custom slugs, QR codes, expiry, and a JSON API. Next.js, TypeScript, Postgres.
date: 2026-09-16
tags: [Next.js, TypeScript, PostgreSQL, Drizzle, Vitest, GitHub Actions]
featured: true
repo: https://github.com/scholasticstan/linkbolt
live: https://linkbolt-jet.vercel.app
accent: '#7c9cff'
---

## Why I built it

I had written a URL shortener twice before. Both times it was a form, a JSON file and a redirect. Neither answered the question you actually have after sharing a link: who clicked, from where, and was it a person or a bot fetching a preview? LinkBolt is the version that answers that.

## What it does

- Shorten a URL to a 7-character slug, or pick your own. The alphabet drops `0/O` and `1/l/I` so links survive being read out loud.
- Record every click with referrer, country, device, browser and OS. Crawlers and link-preview bots (Twitterbot, LinkedInBot, Slackbot and friends) are detected from the user agent and reported separately, so the numbers you see are people.
- Count unique visitors without storing IP addresses: the visitor id is a salted hash of IP plus user agent that changes every day.
- Expiry dates. An expired link answers `410 Gone` instead of pretending to work.
- A QR code for every link as SVG or PNG.
- A JSON API with Bearer keys. Keys are shown once and stored as SHA-256 hashes. 120 requests a minute per key.
- A public stats page you can switch on per link.

## Decisions I would defend in a review

**302, not 301.** Browsers cache permanent redirects, so after the first visit they never come back to the server and the click count quietly stops. A temporary redirect costs one extra hop and keeps the data honest.

**Record the click after the response.** The redirect goes out first; the Postgres insert runs in `after()` once the response has been flushed. If the database is slow, the visitor does not notice.

**Cache misses too.** The slug lookup sits behind a bounded LRU with a 60-second TTL, and a missing slug is cached as `null`. Someone hammering random slugs hits memory, not the database.

**Sessions in the database, not JWTs.** Logging out actually revokes. The cookie holds a random token; only its hash is stored.

**Rate limiting is in-process and says so.** It is a sliding window over a `Map`. On one instance it is exact; on many it is approximate. The interface is one function, so swapping in Redis is a one-file change. I would rather ship an honest limitation than a fake distributed one.

## Testing

Thirty-three tests. Unit tests cover the pure modules: slug generation and validation, URL validation (schemes, private hosts, redirect loops back to the app, embedded credentials), the limiter, the cache, user-agent parsing and the visitor hash. Integration tests run against a real Postgres database: creating and resolving links, cache invalidation on update and delete, ownership checks, click recording, and the stats aggregation. GitHub Actions runs lint, typecheck, tests and a production build on every push with a Postgres service container.

## Stack

Next.js 16 with the App Router and server actions, TypeScript, Postgres through Drizzle, Tailwind v4, Zod, bcrypt, `isbot`, `ua-parser-js`, Vitest.

## What I would do next

Move the limiter and the slug cache to Redis for multi-instance deploys. Add link bundles and UTM helpers. Add an audit log for API key use.
