# Captains of Revelry — captainsofrevelry.com

Experiential event production site. Vite + React + GSAP/Lenis motion system (same stack as mattsillimandj.com).

## Pages

- `/` — Home: parallax hero, 3 pillars, corporate focus, weddings, testimonials, inquiry form
- `/corporate` — Corporate & brand activations
- `/airstream` — Rock the Disco Airstream (specs + 3 package tiers)
- `/weddings` — Weddings (3 package tiers)
- `/events` — Our event brands: Feelgood Sessions, Feelgood in the Park, Beats on the Lake, Alive at Five
- `/admin` — Hidden image CMS (not linked in nav). Log in with the same email/password as the DJ site CMS, then upload or delete photos in the Events gallery. Backend is the same Supabase project as the DJ site (`cor_gallery` table + `cor-images` storage bucket).

## Local dev

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
```

## Deploy to Cloudflare Pages

1. Push this repo to GitHub (`mattsillimanDJ/Captainsofrevelry`). First clear some stale lock files left over from the sandboxed build, then push:
   ```bash
   cd "~/Documents/Claude/Projects/Matt Silliman Websites/Captainsofrevelry"
   rm -f .git/HEAD.lock .git/index.lock .git/objects/maintenance.lock
   git add -A && git commit -m "README updates"
   git remote add origin https://github.com/mattsillimanDJ/Captainsofrevelry.git
   git push -u origin main
   ```
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git** → pick the repo.
3. Build settings: framework preset **Vite**, build command `npm run build`, output directory `dist`.
4. After the first deploy, add the custom domain `captainsofrevelry.com` under the project's **Custom domains** tab (Cloudflare walks you through the DNS change).

The `public/_redirects` file is already set up so page refreshes on `/corporate` etc. work.

## Inquiry form setup (2 minutes, one time)

The form uses [Web3Forms](https://web3forms.com) (free) to email leads to **mattsilliman@gmail.com**.

1. Go to web3forms.com, enter `mattsilliman@gmail.com`, click **Create Access Key** — the key arrives by email instantly.
2. Paste the key into `src/components/InquiryForm.tsx`, replacing `YOUR_WEB3FORMS_ACCESS_KEY`.
3. Commit + push. Done.

Until the key is set, the form falls back to opening a pre-filled email instead of failing silently.

## Images

All images live in `public/images/`. Current set was pulled from the old Squarespace site. To swap in the photos you attached in chat (especially the two AI Airstream renders and the corporate-lawn shots), drop them into `public/images/` and update the filenames referenced in `src/pages/*.tsx` — each page references images by simple names like `airstream-1.webp`, `pro-1.webp`, `hero-night.webp`.

Image strategy per the positioning doc: aspirational glam shots (heroes), operational credibility shots (specs/services sections), emotional reaction shots (weddings/testimonials).
