<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

Frontend-only Next.js 16 app (App Router, Tailwind v4, Turbopack). No backend/database. Standard commands live in `README.md` / `package.json` scripts: `npm run dev` (port 3000), `npm run lint`, `npm run build`.

- Node version: this project runs on Node 24 (pinned in `.nvmrc`). Node is managed by `nvm`, with `default -> 24`.
- Gotcha: the harness puts `/exec-daemon/node` (Node 22) early on `PATH`, which shadows nvm's node in raw non-login shells. `~/.bashrc` prepends nvm's default (Node 24) so login/interactive shells resolve `node -> v24`. Run the dev server from a login shell (e.g. a tmux session started with `bash -l`) so it uses Node 24; verify with `node -v` before `npm run dev`.
- `npm install` on npm 11 prints an `allow-scripts` warning that `unrs-resolver`'s postinstall was skipped. This is harmless — the resolver ships prebuilt platform binaries, and lint/build/dev all pass without approving it.
