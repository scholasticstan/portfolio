---
title: Flex Gloss
description: Booking, shop and back office for a car detailing business in Benin City. Volunteer build. React, Express, Supabase, Paystack.
date: 2026-04-21
tags: [React, Express, Supabase, Paystack, Playwright]
featured: false
live: https://flexgloss.vercel.app
accent: '#f472b6'
---

## The brief

Flex Gloss details cars on Ihama Road in Benin City. They ran bookings over the phone and WhatsApp and had no way to sell packages, gift cards or products online. I built them a full system as a volunteer project in March and April 2026.

## What it does

- **Customers**: browse services and packages, book a slot and get a confirmation, track a job in progress, buy gift cards, shop products with a cart and Paystack checkout, leave reviews, use referral and loyalty rewards, read the blog. Two SEO landing pages target "car detailing Benin City" and "paint correction Benin City".
- **Staff**: a staff portal for the day's jobs and service reports with photos.
- **Owner**: an admin area for bookings, orders, products and stock movements, reviews, staff and an audit log.
- **Automation**: cron reminders before appointments, Paystack webhooks, Instagram feed on the home page, Cloudinary uploads, Resend email.

## How it is built

Vite and React 19 with React Router, Tailwind v4 and Framer Motion on the front. Express 5 on the back with Supabase Postgres, and middleware for auth with OTP codes, CSRF, rate limiting, input sanitising and audit logging. About 25,000 lines of TypeScript.

Playwright end-to-end tests cover the home page, booking, shop and admin flows. CI runs typecheck, lint, build and the e2e suite; a second workflow runs Lighthouse CI against the built site. There is a written audit of every Framer Motion usage with a plan to replace decorative fade-ins with a CSS observer, because the library was 15% of the bundle.

## Status

Live at flexgloss.vercel.app. The source is private at the owner's request.
