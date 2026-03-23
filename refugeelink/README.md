# RefugeeLink (Vite + React + TypeScript)

## Run locally

```bash
npm install
npm run dev
```

## Deploy to Vercel

This project includes a `vercel.json` rewrite so React Router routes work in production.

1. Push this folder to a Git repository (GitHub/GitLab/Bitbucket).
2. Import the repository into [Vercel](https://vercel.com/new).
3. Keep the default Vite settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click Deploy.

After deployment, Vercel will serve `index.html` for all routes and the client router handles navigation.
