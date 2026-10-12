import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  // Relative `./` assets 404 when GitHub Pages serves the repo without a
  // trailing slash, or when the unbuilt source index.html is published.
  base: process.env.GITHUB_ACTIONS
    ? '/phillipines-paxsilica-conflict-casestudy/'
    : '/',
})
