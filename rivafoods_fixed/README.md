# Riva Fine Foods Canada

A simple, production-ready Next.js + Tailwind site.

## Run locally
1) Install Node.js LTS from nodejs.org (if not installed)
2) In the project folder, run:
```
npm install
npm run dev
```
Open http://localhost:3000

## Deploy on Vercel
- Push this folder to a new GitHub repo (drag & drop via GitHub's **Upload files**).
- In Vercel, click **New Project** → import the repo → **Deploy**.

## Connect your GoDaddy domain
Add these DNS records in GoDaddy (DNS → Manage DNS):
- A record: Host `@` → Points to `76.76.21.21`
- CNAME: Host `www` → Points to `cname.vercel-dns.com`

In Vercel → Project **Settings → Domains** → add `rivafoods.ca` and `www.rivafoods.ca`.
