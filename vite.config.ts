import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
base: '/',

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
