# WarHQ Help Site

This folder contains the public WarHQ help site built with Astro Starlight.

## Local Editing

Run commands from this folder:

```bash
npm install
npm run dev
```

The local site is served at:

```text
http://localhost:4321/warhq/
```

The `/warhq/` path is intentional because this repository deploys as a GitHub Pages project site.

## Content

Pages live in:

```text
src/content/docs/
```

Add or edit Markdown files there. The sidebar is configured in:

```text
astro.config.mjs
```

## Build

```bash
npm run build
```

The generated site is written to `dist/`, which is ignored by git. GitHub Actions builds it again during deployment.

## GitHub Pages Deployment

The workflow at `.github/workflows/deploy.yml` builds this folder and deploys it to GitHub Pages.

After the workflow is committed and pushed:

1. Open the GitHub repository.
2. Go to **Settings > Pages**.
3. Set **Build and deployment > Source** to **GitHub Actions**.
4. Run the **Deploy WarHQ Help to GitHub Pages** workflow or push to `main`.

Default published URL:

```text
https://makingwargames.github.io/warhq/
```

For a custom domain later, add `public/CNAME`, update `site` in `astro.config.mjs`, and remove the `base` setting.
