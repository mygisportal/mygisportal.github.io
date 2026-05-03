# Required Images

This folder needs the following images. The site will work without them
(graceful fallbacks are in place), but adding them makes everything feel
much more polished.

## Required

| File                  | Size           | Purpose                                  |
|-----------------------|----------------|------------------------------------------|
| `avatar.jpg`          | 800×1000 (4:5) | Your portrait — homepage card, blog author |
| `og-default.png`      | 1200×630       | Default social-share preview (Open Graph) |
| `favicon.svg`         | square         | Browser tab icon (vector preferred)       |
| `favicon.ico`         | 32×32 / 48×48  | Fallback favicon for older browsers       |

## Recommended

| Folder      | Purpose                                                   |
|-------------|-----------------------------------------------------------|
| `projects/` | Cover image per project (16:10 aspect ratio, ~1600×1000)  |
| `blog/`     | Cover image per blog post (16:10 aspect ratio)            |

## Naming convention

Use kebab-case filenames matching your project/post slug:

```
projects/spam-purwakarta-cover.jpg
projects/citarum-flood-cover.jpg
blog/s2-cloudmask-cover.jpg
blog/parcels-vs-points-cover.jpg
```

## Generating images

For social-share images (`og-default.png`), tools like [Canva], [Figma],
or [og-image.vercel.app] work well. Aim for a clean composition:
your name + tagline + a subtle map background.

## Optimisation

Before committing images, compress them:

- **JPG**: target 80–85% quality (use [Squoosh] or `cwebp`).
- **PNG**: lossless via [TinyPNG].
- Aim for under 200 KB per image where possible.

[Canva]: https://canva.com
[Figma]: https://figma.com
[og-image.vercel.app]: https://og-image.vercel.app
[Squoosh]: https://squoosh.app
[TinyPNG]: https://tinypng.com
