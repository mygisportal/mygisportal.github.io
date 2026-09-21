# Satria Indratmoko — Personal Academic Website

A static personal academic portfolio for **Satria Indratmoko** (Geographer ·
Researcher · Lecturer · GIS & Remote Sensing Practitioner), built with
**React + Vite**. No backend, no database, no server — 100% static, ready for
GitHub Pages.

## Stack

- React 18 + Vite
- `react-router-dom` (HashRouter — works on GitHub Pages with zero server
  config, no 404-redirect trick needed)
- Plain modern CSS (`src/styles/global.css`) — no CSS framework
- All content is **data-driven**: edit the files in `src/data/` to update
  publications, projects, experience, teaching, and profile info — no need to
  touch layout components.

## Project structure

```
src/
  data/          ← EDIT THESE to update content
    profile.js       Name, bio, stats, social links, quick facts
    education.js      Degrees
    experience.js      Professional / consulting engagements
    research.js        Grant-funded research projects
    publications.js    Journal articles, conference papers, books, patents
    teaching.js        Courses taught
    awards.js          Awards & recognitions
  components/     Header, Footer, cards, list items (reused across pages)
  pages/          One file per route: Home, About, Research, Publications,
                  Teaching, Contact
  styles/global.css  Design tokens (colors, type) + all styling
public/
  images/avatar.jpg          Profile photo
  documents/                 CV file served for download
```

## Adding content

Each data file exports a plain array or object. For example, to add a new
publication, open `src/data/publications.js` and add an object to the
`publications` array:

```js
{
  year: "2026",
  type: "Journal",
  authors: "Indratmoko, S., & Co-author, A.",
  title: "Your paper title",
  venue: "Journal name, volume(issue), pages",
  link: "https://doi.org/...",
}
```

No layout code needs to change — the Publications page renders whatever is in
this array, grouped by year automatically.

## Local development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

## Deploying to GitHub Pages

This repo is set up as a **user/organization page**
(`mygisportal.github.io`), served from the domain root.

**Recommended: GitHub Actions (already included)**

`.github/workflows/deploy.yml` builds the site and deploys it automatically
on every push to `master`. In the repo settings, go to **Settings → Pages**
and set the source to **GitHub Actions**. That's it — push to `master` and
the site publishes at `https://mygisportal.github.io`.

**Manual alternative:** run `npm run build`, then push the contents of
`dist/` to the `master` branch root (or configure Pages to serve from a
`gh-pages` branch containing the build output).

> If you ever turn this into a **project page** instead
> (`username.github.io/repo-name`), change `base` in `vite.config.js` to
> `"/repo-name/"`.

## Content notes

- `public/documents/CV_Satria_Indratmoko.docx` is the CV file linked from the
  About page's "Download CV" button — replace it with an updated file (PDF
  recommended) and update `cvFile` in `src/data/profile.js` if you rename it.
- `public/images/avatar.jpg` is the profile photo shown on the homepage —
  swap the file to update it.
