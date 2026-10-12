import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Set base to '/<your-repo-name>/' for GitHub Pages project sites.
// Use '/' if the repo is named <username>.github.io.
export default defineConfig({ plugins: [react()], base: './' });
