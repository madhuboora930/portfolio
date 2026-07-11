# Madhu Boora — Developer Portfolio

A case-study-style developer portfolio built with React, Vite, Tailwind CSS v4, and Framer Motion.
Sticky sidebar layout with a single mint-green accent — deliberately distinct in design from the
main [resume site](https://madhuboora.online), to showcase a different visual approach.

## Stack

- React 19 + Vite
- Tailwind CSS v4 (CSS-first config via `@theme` in `src/index.css`)
- Framer Motion for scroll reveals and micro-interactions
- react-icons for social icons

No external APIs or environment variables are used — this is a fully static, content-driven site.

## Getting Started

```bash
npm install
npm run dev
```

## Editing Content

All content lives in [`src/data/portfolioData.js`](src/data/portfolioData.js) — name, tagline,
about copy, skills, case studies (`work`), and contact links. Update your real **email** and
**GitHub URL** there before deploying.

## Project Structure

```
src/
  data/portfolioData.js   # all content
  components/layout/      # Sidebar, Footer
  components/sections/    # About, Work, Contact
  components/ui/          # SectionHeading, SocialLinks
  hooks/useActiveSection.js
  lib/motion.js           # shared Framer Motion variants
```

## Build

```bash
npm run build
```

## Deploying to Netlify

`netlify.toml` is already configured (build command `npm run build`, publish directory `dist`).

1. Push this project to a GitHub repo.
2. In Netlify: "Add new site" → "Import an existing project" → pick the repo. Build settings
   auto-detect from `netlify.toml`. Click Deploy.
3. Once you have a live URL, update the placeholder `https://your-site.netlify.app` references in
   `public/robots.txt`, `public/sitemap.xml`, and the `og:image`/`twitter:image` tags in
   `index.html`.
