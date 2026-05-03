# Academic Portfolio — Jekyll + GitHub Pages

A bilingual (English / Indonesian) academic portfolio website for a researcher
in **GIS, remote sensing, and disaster management**. Built with Jekyll, designed
in a refined Tufte-inspired minimalist aesthetic, and deploys directly to
GitHub Pages with no build pipeline.

> **Live preview:** `https://yourusername.github.io` (after deployment)

---

## Table of Contents

1. [Stack & Architecture](#1-stack--architecture)
2. [Project Structure](#2-project-structure)
3. [First-Time Setup (Local Development)](#3-first-time-setup-local-development)
4. [Deploying to GitHub Pages](#4-deploying-to-github-pages)
5. [Personalising the Site](#5-personalising-the-site)
6. [Adding Content](#6-adding-content)
7. [Optional Integrations](#7-optional-integrations)
8. [Custom Domain](#8-custom-domain)
9. [Future Development](#9-future-development)
10. [Troubleshooting](#10-troubleshooting)

---

## 1. Stack & Architecture

| Layer            | Technology                        | Why                                    |
|------------------|-----------------------------------|----------------------------------------|
| Static generator | **Jekyll 4.x** (github-pages gem) | Native GitHub Pages — no build CI      |
| Styling          | **Tailwind CSS** (CDN runtime)    | Fast iteration, design-token system    |
| Typography       | Lora · Inter · JetBrains Mono     | Editorial serif + clean UI sans + code |
| Maps             | **Leaflet.js**                    | Lightweight, no API key required       |
| Comments         | **Giscus** (GitHub Discussions)   | No third-party DB, no ads              |
| Forms            | **Formspree**                     | No backend, free tier sufficient       |
| Hosting          | **GitHub Pages** (free)           | Zero-cost, automatic SSL, global CDN   |

The site is **content-driven**: adding a project, publication, or blog post
means creating a new markdown file. No code changes needed.

---

## 2. Project Structure

```
portfolio/
├── _config.yml            ← Site-wide configuration (EDIT FIRST)
├── Gemfile                ← Ruby dependencies (do not edit unless needed)
│
├── _data/                 ← Structured data, easy to edit
│   ├── i18n.yml             EN / ID translations of UI strings
│   ├── navigation.yml       Menu structure
│   ├── skills.yml           Skill categories + proficiency
│   └── experience.yml       Work history + education
│
├── _layouts/              ← Page templates (rarely edit)
├── _includes/             ← Reusable HTML partials (rarely edit)
│
├── _posts/                ← Blog posts (YYYY-MM-DD-slug.md)
├── _projects/             ← Research/projects (slug.md)
├── _publications/         ← Publications (slug.md)
│
├── pages/id/              ← Indonesian-language mirror pages
│
├── assets/
│   ├── css/main.css         Custom CSS (Tufte refinements)
│   ├── js/main.js           Theme toggle, mobile menu, filters
│   ├── js/tailwind-config.js Design tokens (colors, fonts)
│   ├── images/              Place your portrait, OG image, favicon
│   ├── bib/                 BibTeX files
│   ├── maps/                GeoJSON for WebGIS
│   └── cv/                  Your CV PDFs
│
├── index.html             ← English homepage
├── about.html             ← English About
├── research.html          ← Projects index (with filter)
├── publications.html      ← Publications by year
├── blog.html              ← Blog index
├── webgis.html            ← Interactive maps page
├── contact.html           ← Contact form + methods
└── 404.html               ← Custom error page
```

---

## 3. First-Time Setup (Local Development)

### Prerequisites

- **Ruby 3.0+** (3.1 or 3.2 recommended)
- **Bundler** (`gem install bundler`)
- **Git**

### Install & run

```bash
# Clone or download this folder, then:
cd portfolio

# Install dependencies
bundle install

# Start local server (with live reload)
bundle exec jekyll serve --livereload
```

Visit **`http://localhost:4000`** — your site is running. Edits to most files
trigger an automatic rebuild and browser refresh.

> **Windows note:** if you hit issues with `wdm` or `tzinfo`, the Gemfile
> already has the platform conditionals you need. Just `bundle install` again.

---

## 4. Deploying to GitHub Pages

### Step 1 — Create the repository

There are two repository naming options:

| Repository name              | URL                                | Notes                          |
|------------------------------|------------------------------------|--------------------------------|
| `yourusername.github.io`     | `https://yourusername.github.io`   | **Recommended** — clean URL    |
| `your-portfolio` (any name)  | `https://yourusername.github.io/your-portfolio` | Adjust `baseurl` in `_config.yml` |

### Step 2 — Push the code

```bash
cd portfolio

git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

### Step 3 — Enable Pages

In your repo on GitHub:

1. **Settings → Pages**
2. Under **Source**, select **Deploy from a branch**
3. Branch: **`main`** · Folder: **`/ (root)`**
4. Click **Save**

After ~1–2 minutes, your site is live. GitHub will rebuild automatically on
every `git push`.

### Step 4 — Update the URL in `_config.yml`

```yaml
url: "https://yourusername.github.io"
baseurl: ""        # leave empty for username.github.io repos
                   # set to "/repo-name" for project-style repos
```

---

## 5. Personalising the Site

Edit these in order — **most impact, easiest first**:

### `_config.yml` (5 minutes)

- `author.full_name`, `author.title_*`, `author.affiliation_*`
- `author.email`, `author.location`
- `social.*` — fill in usernames; leave `""` to hide an icon
- `url` — your GitHub Pages URL

### `_data/experience.yml`

Add your real positions and education. The About page reads from this file
automatically.

### `_data/skills.yml`

Adjust skill categories and proficiency levels (0–100). The progress bars on
the About page use these.

### `assets/images/`

Add `avatar.jpg`, `og-default.png`, `favicon.svg`. See `assets/images/README.md`
for sizes and tips.

### `assets/cv/`

Drop in `cv-en.pdf` and `cv-id.pdf`.

---

## 6. Adding Content

### Add a blog post

Create a file in `_posts/` named `YYYY-MM-DD-your-slug.md`:

```yaml
---
title: "How I cleaned 150,000 cadastral records with Pandas"
date: 2026-01-15
categories: [tutorial]
tags: [python, pandas, cadastral]
excerpt: "A short, opinionated workflow for de-duplicating and validating large parcel datasets."
image: /assets/images/blog/cleaning-cadastral-cover.jpg
---

Your post content here, in **Markdown**.

## Section heading

Body text. Use `code spans` and code blocks as needed.

```python
import pandas as pd
df = pd.read_csv("parcels.csv")
```
```

### Add a project

Create a file in `_projects/` named `slug.md`:

```yaml
---
title: "Citarum Basin Flood Susceptibility Map"
subtitle: "SRTM-derived flood susceptibility using AHP weighting and field validation."
date: 2025-06-01
period: "2025"
category: "disaster"          # remote-sensing | disaster | planning | webgis
role: "Lead Researcher"
location: "Citarum Basin"
status: "Completed"
tools:
  - "Google Earth Engine"
  - "QGIS"
  - "Python"
links:
  - { label: "Final report", url: "https://example.com/report.pdf" }
image: /assets/images/projects/citarum-flood-cover.jpg
---

## Background

Project body in Markdown...
```

### Add a publication

Create a file in `_publications/` named `slug.md`:

```yaml
---
title: "Your paper title"
year: 2026
pub_type: "Journal"            # Journal | Preprint | Conference | Report | Chapter
status: "Published"            # Published | Under review | Accepted | In prep
featured: true                 # true = appears on homepage
authors:
  - "Satria [Your Name]"
  - "Co-author"
venue: "Journal of Tropical Geospatial Research, vol. 12, no. 3"
doi: "10.1234/example.2026.001"
pdf: "/assets/papers/2026-paper.pdf"
code: "https://github.com/yourusername/paper-code"
data: "https://zenodo.org/record/12345"
tags: [remote-sensing, machine-learning]
abstract: >
  One paragraph abstract of your paper.
bibtex: |
  @article{yourname2026paper,
    title  = {Your paper title},
    author = {Satria, [Your Name] and Co-author},
    year   = {2026},
    journal = {Journal of Tropical Geospatial Research},
    volume = {12},
    number = {3}
  }
---

Optional extended notes about the paper, methodology, or follow-up work.
```

### Update navigation

Edit `_data/navigation.yml` to add or rearrange menu items. Both EN and ID
trees must be updated to keep the language switcher consistent.

---

## 7. Optional Integrations

### Giscus comments (free, GitHub-based)

1. Visit **<https://giscus.app>** and configure for your repo.
2. Make sure **Discussions** is enabled in repo Settings.
3. Copy the `data-repo-id` and `data-category-id` values.
4. Edit `_config.yml`:

```yaml
giscus:
  enabled: true
  repo: "yourusername/yourusername.github.io"
  repo_id: "R_kgDOXXXXXXX"
  category: "Announcements"
  category_id: "DIC_kwDOXXXXXXX"
```

Comments will appear under every blog post.

### Formspree contact form

1. Sign up at **<https://formspree.io>** (free tier: 50 submissions/month).
2. Create a new form, copy the form ID.
3. Replace `YOUR_FORM_ID` in `contact.html` and `pages/id/contact.html`.

### Google Analytics or Plausible

In `_config.yml`:

```yaml
analytics:
  google: "G-XXXXXXXXXX"          # Google Analytics 4 measurement ID
  plausible: "yourdomain.com"     # If you use Plausible (paid)
```

Leave both empty (`""`) for no tracking.

---

## 8. Custom Domain

If you own a domain (e.g. `satria.example`):

1. Create a file named **`CNAME`** at the repo root containing only your domain:
   ```
   satria.example
   ```
2. In your DNS provider, add either:
   - An **`A` record** pointing to GitHub's IPs:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Or a **`CNAME` record** pointing to `yourusername.github.io`
3. In repo Settings → Pages, enter your domain and tick **Enforce HTTPS**.

DNS can take up to 24 hours; usually it's live in under an hour.

Update `_config.yml`:
```yaml
url: "https://satria.example"
```

---

## 9. Future Development

When the site grows, consider these upgrades:

| Goal                     | Approach                                                   |
|--------------------------|------------------------------------------------------------|
| **Faster CSS**           | Migrate from Tailwind CDN to compiled output (PostCSS or Tailwind CLI) |
| **Full-text search**     | Add **Lunr.js** for client-side search of all posts/projects |
| **Advanced WebGIS**      | Switch Leaflet → **Mapbox GL JS** for vector tiles + 3D    |
| **Auto-bibliography**    | Add `jekyll-scholar` (requires GitHub Actions, not native Pages) |
| **Math rendering**       | Add **MathJax** or **KaTeX** for equations in posts        |
| **Image optimisation**   | GitHub Action to auto-compress images on push              |
| **Multilingual sitemap** | Custom `sitemap.xml` template with hreflang entries        |
| **Newsletter**           | **Buttondown** or **Substack** embed on the blog page      |

---

## 10. Troubleshooting

**`bundle install` fails with native extension errors**
Install build tools: macOS `xcode-select --install`, Ubuntu `sudo apt install build-essential`, Windows use Ruby+DevKit installer.

**Pages site shows 404 after first deploy**
Wait 2–3 minutes — first build is slow. Check **Actions** tab for build status.

**Custom CSS not applying**
Verify the front-matter `---` block at the top of `assets/css/main.css` exists (Jekyll won't process the file otherwise).

**Language switcher links to wrong URL**
Ensure each Indonesian page has a matching English page at the equivalent path, and vice versa. The switcher computes the alternate URL by adding/removing `/id` from the current path.

**Tailwind classes not styling on production**
The CDN includes everything by default. If you migrate to compiled Tailwind, make sure `content` paths in `tailwind.config.js` cover all `*.html`, `_includes/**/*.html`, and `_layouts/**/*.html`.

---

## License

Code: MIT. Content (your text, images): your own copyright — © {{ year }} Satria.

Built with care, ☕, and a lot of `bundle exec jekyll serve`.
