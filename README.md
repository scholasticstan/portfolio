# Stanley Alu — Portfolio

Personal portfolio built with [Astro](https://astro.build). Fully static, no client-side framework, dark/light theme, and a Markdown-driven project collection.

## Commands

| Command           | Action                                      |
| ----------------- | ------------------------------------------- |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start dev server at `localhost:4321`        |
| `npm run build`   | Build the production site to `./dist/`      |
| `npm run preview` | Preview the production build locally        |

## Customising

All personal content lives in a few files so you never need to touch the components:

- `src/data/site.ts` – name, title, tagline, links, email, nav, hero stats
- `src/data/skills.ts` – skill groups with 1–5 levels, plus the "also fluent with" tags
- `src/data/experience.ts` – work history timeline
- `src/content/projects/*.md` – one Markdown file per project. Frontmatter controls title, tags, links, featured flag, and accent colour; the body becomes the case study page at `/projects/<filename>/`
- `public/resume.pdf` – drop your CV here (linked from the Contact section)

Fields marked `TODO` in `src/data/site.ts` and `src/data/experience.ts` (email, GitHub, job titles and dates, degree name) still need your real values.
- `astro.config.mjs` – set `site` to your real domain for correct canonical URLs

## Deploying

The output is plain static files. Deploy `dist/` to Netlify, Vercel, Cloudflare Pages, GitHub Pages, or any static host.
