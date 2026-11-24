# Ritesh Gupta – Developer Portfolio

React + Vite + TypeScript + Tailwind CSS (v4), Lucide icons, Framer Motion.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production build into dist/
npm run preview    # serve the production build
```

## Edit content
All text, links and project details are in `src/data/portfolio.ts`.
Assets are in `public/`: `Ritesh_Gupta_Resume.pdf` (the download), `ritesh-gupta.jpg` (hero photo), `og-image.png` (social preview).
To update your resume, replace the PDF and keep the same file name.

## Deploy on Vercel
1. Push this folder to a GitHub repository (`node_modules` and `dist` are ignored).
2. Go to vercel.com → **Add New… → Project** → import the repository.
3. Vercel detects Vite automatically. Settings should read: Build Command `npm run build`, Output Directory `dist`. Click **Deploy**.
4. Open the live URL and check: resume download, the project links, the dark/light toggle, and the mobile menu.
5. Optional custom domain: Project → Settings → Domains. Then add an environment variable `VITE_SITE_URL` = `https://your-domain.com` (Settings → Environment Variables) and redeploy, so the social-preview (Open Graph) tags use your domain. Without it, Vercel's own production URL is used.
6. To check the social preview, paste your URL into LinkedIn's Post Inspector.

## Notes
- The TestPortal identity-service repository is deliberately not linked until its scope is confirmed.
- The Institute CRM has no public links, so no link buttons are shown for it.
