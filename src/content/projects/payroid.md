---
title: Payroid
description: A fintech I founded and built. Nigerians sell gift cards and crypto for naira at a rate locked the moment they submit, and pay bills from the same wallet. Web app, operator console, Flutter mobile app.
date: 2026-09-01
tags: [Next.js, TypeScript, PostgreSQL, Drizzle, Flutter, Fintech]
featured: true
live: https://payroid.co/
accent: '#9d8cff'
---

## What it is

Payroid turns gift cards that cannot be spent in Nigeria (Amazon, Apple, Steam, PlayStation, Xbox and over 100 others) and crypto into naira in the user's own bank account. The rate is locked the moment a trade is submitted. A person reviews every card before money moves, and payouts land in minutes. Airtime, data, electricity, cable and internet payments sit in the same wallet. It is operated by Payroid Synergy Limited, a registered Nigerian company.

I founded it in May 2026 and I have built all of it.

## What is in the box

One repository, four deliverables:

- **The customer app** (Next.js 16, React 19, TypeScript). Sign in by emailed code, password or passkey, with two-factor and a transaction PIN that guards every payment. KYC in tiers: BVN, NIN, selfie, address. Wallet top-up and withdrawal, bank accounts and beneficiaries, sell gift cards, buy gift cards, sell crypto, pay bills, receipts, statements, referrals, device management, account closure.
- **The operator console.** Trade and card review desks, gift card and country rate tables, crypto trades, bill runs, a compliance queue, support tickets, treasury with a scheduled sweep, account management, and an internal mail suite. Each desk sees only its own work.
- **The mobile app** (Flutter). Same account, biometric unlock, secure storage, push notifications for money movements.
- **A static-IP proxy** on Fly.io, because Flutterwave's live API whitelists source addresses and Vercel functions egress from a rotating pool.

Behind it: Postgres through Drizzle, web push, webhooks through Svix, per-component health endpoints, Vitest.

## Decisions I would defend

**Three hosts, one app.** payroid.co, app.payroid.co and admin.payroid.co are served by one Next.js deployment. An edge proxy verifies the right session cookie with Web Crypto and rewrites to clean URLs, so users never see an `/app` prefix or an auth redirect.

**Lock the rate at submit.** Competitors quote after review, when the user can no longer walk away. Payroid shows the rate and fee first and holds it. It costs margin on volatile days and it is the whole pitch.

**No reviewer backdoor.** Apple needs working credentials to review a login-gated app. The easy route is an `isReviewAccount` flag that skips KYC. In a regulated money app that flag is a backdoor, so instead a real account is verified by an operator with an audit note and funded with real money.

**The PIN guards the vault, not the door.** Signing in is easy. Moving money asks again, every time.

## Scale

324 commits since May 2026. About 94,000 lines of TypeScript across 424 files, plus 112 Dart files for the mobile app. Live and taking real trades; the mobile apps are in store review.
