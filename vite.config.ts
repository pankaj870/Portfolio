import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Amplify hosts this app at the domain root, whereas GitHub Pages hosts it
  // below /Portfolio/. The workflow sets DEPLOY_TARGET for the latter build.
  base: process.env.DEPLOY_TARGET === 'github-pages' ? '/Portfolio/' : '/',
plugins: [
// The React and Tailwind plugins are both required for Make
react(),
tailwindcss(),
],

resolve: {
alias: {
'@': path.resolve(__dirname, './src'),
},
},

assetsInclude: ['**/*.svg', '**/*.csv'],
})
