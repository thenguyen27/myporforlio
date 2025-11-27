# Portfolio V2 — Quick Run Guide

A minimal guide to run this project locally.

Prerequisites
- Node.js (v18+ recommended)
- npm (or yarn)

Install dependencies

```powershell
npm install
# or
# yarn install
```

Create environment file (optional)

This project includes a `.env.local` example. If you need to provide an API key for local development, create a `.env.local` file at the project root with:

```env
GEMINI_API_KEY=your_key_here
```

Note: The repository previously exposed `GEMINI_API_KEY` to the client. That has been removed — do NOT place any real secret keys in client-side env variables. Prefer server-side proxies for secrets.

Run in development

```powershell
npm run dev
```

Open the site at http://localhost:3000 (or the port shown by the dev server).

Build for production

```powershell
npm run build
```

Preview production build locally

```powershell
npm run preview
```

Helpful tips
- `.env.local` is ignored by git (pattern `*.local` in `.gitignore`). Use `.env.example` if you want to share required variable names without values.
- If you plan to use API keys, create a small server-side proxy to keep secrets out of the browser.

That's it — simple steps to get the app running locally.