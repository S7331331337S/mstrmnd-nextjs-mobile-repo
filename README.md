# Next.js 16 Vercel homepage recreation

Greenfield [Next.js 16.3](https://nextjs.org/blog/next-16) App Router app that recreates the public [vercel.com](https://vercel.com) homepage as closely as possible.

This is a visual demo, not an official Vercel site. Product screenshots are original CSS mock UIs rather than hotlinked marketing assets.

## Stack

- Next.js 16.3.1, React 19.2, Tailwind CSS v4
- App Router + `src/` + TypeScript + ESLint + Turbopack
- React Compiler (`reactCompiler` + experimental Rust compiler on Turbopack)
- Cache Components (`cacheComponents`) and Partial Prefetching (`partialPrefetching`)
- Geist / Geist Mono via `next/font`
- Light / dark theme with `next-themes`

## Develop

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
```
