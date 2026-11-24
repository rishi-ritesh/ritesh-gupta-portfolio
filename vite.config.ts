import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * Fills the site URL into the HTML meta tags at build time.
 * Order: VITE_SITE_URL (your own domain) -> Vercel's production URL -> empty (relative paths).
 */
function siteUrlPlugin(): Plugin {
  const fromEnv = process.env.VITE_SITE_URL?.replace(/\/$/, '')
  const fromVercel = process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : ''
  const site = fromEnv || fromVercel
  return {
    name: 'site-url-meta',
    transformIndexHtml(html) {
      const withSite = html.replaceAll('%SITE_URL%', site)
      // Drop the canonical/og:url tags if no absolute URL is known.
      return site ? withSite : withSite.replace(/^.*data-needs-site.*\n/gm, '')
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), siteUrlPlugin()],
})
