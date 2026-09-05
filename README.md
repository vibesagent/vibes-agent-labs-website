# VibesAgent

Brand site for VibesAgent and the VibesAgent Labs archive.

## Pages

- `/`: homepage and link to the proposed community research pilot.
- `/community`: proposed CAD 10,000 pilot, scope, terms, and contact details.
- `/samples/m3-mount-pleasant.pdf`: dated public-source M3 sample; no original interviews are implied.
- `/use-cases`: existing computer-use evaluation suites.

The community pilot copy is awaiting Ian's review. Committing source is not a
deployment; run the deployment command only after that review is complete.

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

Run `npm run lint` for static checks. To review the production build locally,
run `npm run preview -- --host 127.0.0.1 --port 4173` and open
`http://localhost:4173/community`.

## Deploy To Cloudflare Workers

This app is configured for Workers Static Assets. Build output is served from `dist/`, and SPA routes fall back to `index.html`.

```bash
npm run deploy
```

Use `VITE_APP_BASE_PATH` when this app is mounted under a path prefix instead of the domain root.

```bash
VITE_APP_BASE_PATH=/swarmfeed npm run deploy
```
