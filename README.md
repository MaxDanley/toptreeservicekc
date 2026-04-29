# GradeATree.com SEO Website

React + Vite website built as a Kansas City tree service guide and comparison hub focused on driving traffic and quote requests to Grade A Tree.

## Local Development

- `npm install`
- `npm run dev`

## Production Build

- `npm run lint`
- `npm run build`

## Site Structure

- Homepage with authority-guide style content blocks
- Service pages (`/services/:serviceSlug`)
- Location pages (`/locations/:citySlug`)
- Service + location long-tail pages (`/locations/:citySlug/:serviceSlug`)
- Neighborhood landing pages (`/neighborhoods/:neighborhoodSlug`)
- Comparison pages (`/compare/:comparisonSlug`)
- Guide pages (`/guides/:guideSlug`)
- FAQ hub (`/faqs`)

## SEO Files

- `public/robots.txt`
- `public/sitemap.xml`
- `npm run sitemap` auto-generates all route URLs from source data
