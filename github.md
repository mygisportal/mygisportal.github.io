repo: mygisportal/mygisportal.github.io
branch: master
path: (repo root)

## Last sync
date: 2026-09-21T09:36:24Z

### Updated in this project
- Rebuilt the site as a React + Vite static project (previous repo was a mixed Jekyll/legacy-HTML/qgis2web tree with merge-conflict markers in index.html).
- Pulled real content from the repo's Jekyll data/pages (about.html, index.html, publications.html, research.html, _data/experience.yml, _data/skills.yml, header/footer includes) and from the user's uploaded CV (DOCX) to populate src/data/*.js.
- Carried over the visual direction implied by the existing site (editorial "Tufte" prose style, ocean/forest accent palette, serif display type) into a new design token system in src/styles/global.css.

## Screen map
| Project screen/page | Source material |
|---|---|
| Home (src/pages/Home.jsx) | index.html hero/sections, profile.js stats |
| About (src/pages/About.jsx) | about.html bio + quick facts, _data/experience.yml, CV education/work history |
| Research (src/pages/Research.jsx) | research.html, _projects/2024-spam-purwakarta.md, CV "Pengalaman Riset" |
| Publications (src/pages/Publications.jsx) | publications.html, _publications/2025-solar-wrf-lstm.md, CV publication/book/patent lists |
| Teaching (src/pages/Teaching.jsx) | CV teaching role + EDOM awards (not present in old repo) |
| Contact (src/pages/Contact.jsx) | contact.html intent, CV email, user-provided Scholar/Scopus/ORCID/ResearchGate links |
