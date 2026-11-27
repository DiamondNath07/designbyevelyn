# nathmond.co.uk — Nathaniel Diamond's portfolio

Next.js 16 (App Router, Cache Components) + Tailwind CSS 4. Pages are statically prerendered; the only server code is the contact form (`/api/contact`, sends via Resend).

## Structure

| Path | What it is |
| --- | --- |
| `src/content/site.ts` | Name, headline, availability, experience, skills, testimonials |
| `src/content/projects.ts` | The three case studies (Talstrike, Swiftpoint, Bradcoin) |
| `src/app/*` | Pages: `/`, `/work`, `/work/[slug]`, `/ai`, `/about`, `/cv`, `/contact` |
| `src/lib/media.ts` + `asset-manifest.json` | Maps image paths to pre-optimised WebP files on Cloudflare R2 |
| `public/media/` | Small cropped app screens used in case studies |
| `public/Nathaniel-Diamond-CV.pdf` | Generated from `/cv` with `npm run cv:pdf` |

Most edits are text changes in `src/content/`.

## Develop

```bash
cp .env.example .env.local   # then fill in values
npm install
npm run dev
```

## Media (Cloudflare R2)

Images and video are **not** in git. They are served from `NEXT_PUBLIC_ASSET_BASE_URL` (`https://assets.nathmond.co.uk`, an R2 bucket).
Images are converted once to WebP at several widths, so the site never uses Vercel image optimisation (which is metered).

To add or change media:

1. Put originals in `media-source/` (e.g. `media-source/images/new.png`, `media-source/videos/clip.mp4`).
2. `npm run assets:prepare` — writes WebP variants to `media-source/optimized/` and updates `src/lib/asset-manifest.json`.
3. `npm run assets:upload` — uploads to R2 (needs the `R2_*` keys in `.env.local`).
4. Commit `src/lib/asset-manifest.json`.

## Update the CV PDF

```bash
npm run dev        # in one terminal
npm run cv:pdf     # in another (needs Playwright installed)
```

## Deploy (Vercel)

1. Import this GitHub repo as a new Vercel project (framework: Next.js; no build settings needed).
2. Add environment variables from `.env.example` (all except `R2_*`).
3. Add domains: `www.nathmond.co.uk` (primary), and `nathmond.co.uk`, `nathmond.com`, `www.nathmond.com` redirecting to it.
4. In Cloudflare DNS, point each domain at Vercel with **DNS only** (grey cloud) records, using the values Vercel shows.

Old URLs (`/projects/*`) redirect to `/work/*`.
