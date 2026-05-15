# WarHQ Website

This repository contains the public WarHQ website and help docs built with Astro Starlight.

## Local Editing

Run commands from this folder:

```bash
npm install
npm run dev
```

The local site is served at:

```text
http://localhost:4321/
```

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

Static files that must be served from the site root live in:

```text
public/
```

The Microsoft identity association file is published from:

```text
public/.well-known/microsoft-identity-association.json
```

## GitHub Pages Deployment

The workflow at `.github/workflows/deploy.yml` builds this folder and deploys it to GitHub Pages.

After the workflow is committed and pushed:

1. Open the GitHub repository.
2. Go to **Settings > Pages**.
3. Set **Build and deployment > Source** to **GitHub Actions**.
4. Run the **Deploy WarHQ to GitHub Pages** workflow or push to `main`.

Published URL:

```text
https://warhq.net/
```
