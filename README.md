# Chennai Fintech Job Openings | 12 November 2026

Static mobile-first job directory for @productwithsasi. Adapted from the layout/structure of [WorldTradeCenterjobsnov](https://github.com/Sasisampath/WorldTradeCenterjobsnov); **the source repository is unchanged**.

- **21 role cards from 11 fintech & payments companies**.
- Each role gets its own compact card with an external link.
- Search matches company, title and job keywords.
- Navbar icon and sticky Follow me on LinkedIn link: https://linkedin.openinapp.co/f9dyq
- HTML/CSS/JS only. No npm, framework or backend.

## Local preview

```bash
python3 -m http.server 5600
```

Open http://localhost:5600.

## Deploy

Push the files **at the repository root** to the already-created personal repository:
https://github.com/Sasisampath/November-12-fintechchennaihiring

In Vercel, import that repository, select **Other** framework, and deploy without build/install commands.

## Edit roles

Only `jobs.js` needs to change to add or remove positions. Its entries use:
`id`, `company`, `role`, `category`, `location`, `experience`, `url`, `sourceType`, `actionLabel`, `note`, `keywords`.

**Verification notes:** A link existing does not mean a company is still accepting applications. Sources were found on 12 Nov 2026; listings can change. M2P roles lacking a verified dedicated URL link to its official careers search, clearly labelled **View careers**. FSS roles link to its official careers page. A Fiserv QA listing (R-10391986) was excluded because its employer page says the role is filled. Naukri's job pages could not be directly verified, so no Naukri-only links are included.

**Profile photo:** This site loads the avatar from your existing public GitHub repository. To make the new project fully standalone, download `assets/profile.webp` from `WorldTradeCenterjobsnov` and change the `<img>` path in `index.html` to `assets/profile.webp`.

See `SOURCES.md` for original job links and source checks. Do not imply that every position is open today or suitable for freshers.
