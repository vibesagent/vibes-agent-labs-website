# VibesAgent

Brand site for VibesAgent and the VibesAgent Labs archive.

## Stack

- React
- TypeScript
- Vite
- React Router

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy To Cloudflare Workers

This app is configured for Workers Static Assets. Build output is served from `dist/`, and SPA routes fall back to `index.html`.

```bash
npm run deploy
```

Use `VITE_APP_BASE_PATH` when this app is mounted under a path prefix instead of the domain root.

```bash
VITE_APP_BASE_PATH=/swarmfeed npm run deploy
```
