# Tooliva

A collection of fast, clean developer utilities — JSON formatter, JWT decoder, Base64 encoder, and more.

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Commands

| Command | Action |
| :------ | :----- |
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

## Deployment

The site builds to static files in `dist/` and is deployed automatically on push to `main`:

| Platform | URL | Trigger |
| :------- | :-- | :------ |
| **Vercel** | production URL | GitHub Actions + `vercel deploy --prebuilt` |
| **Cloudflare Pages** | `tooliva.pages.dev` | GitHub Actions + `wrangler pages deploy` |
| **GitHub Pages** | `oatmealyn-creator.github.io/tooliva` | GitHub Actions + `actions/deploy-pages` |

### Manual deploy

```sh
# Cloudflare Pages
npm run build && npx wrangler pages deploy dist/ --project-name tooliva

# Vercel
npm run build && npx vercel deploy --prebuilt --prod
```

## Secrets required in GitHub

| Secret | Used by |
| :----- | :------ |
| `CLOUDFLARE_API_TOKEN` | Cloudflare deploy |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare deploy |
| `VERCEL_TOKEN` | Vercel deploy |
