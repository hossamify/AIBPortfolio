import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin(), tailwindcss()],
    base: './',
    server: {
        port: 51404,
    },
    build: {
        // Split rarely-changing dependencies and the large data layer into
        // dedicated chunks so they can be cached across deploys, and so the
        // initial bundle isn't dominated by translations / pricing / license
        // data the home page never needs.
        rollupOptions: {
            output: {
                manualChunks: (id) => {
                    if (!id.includes('node_modules') && !id.includes('/src/')) return undefined;
                    if (id.includes('node_modules')) {
                        if (id.includes('react-dom')) return 'vendor-react-dom';
                        if (id.includes('react') || id.includes('scheduler')) return 'vendor-react';
                        if (id.includes('lucide-react')) return 'vendor-lucide';
                        return 'vendor';
                    }
                    // Per-language slices live under src/data/translations/<lang>.js.
                    // Each one is dynamically imported (except en.js which is
                    // statically imported by translations/index.js), so let
                    // Rollup decide their chunking - DO NOT collapse them into
                    // one shared chunk or every locale ships in the initial
                    // bundle. en.js naturally co-locates with the main entry
                    // because of its static import.
                    if (id.includes('/src/data/translations/')) return undefined;
                    if (id.includes('/src/data/pricing')) return 'data-pricing';
                    // Per-language license override slices (licenseDetails.<lang>.js)
                    // are dynamically imported by loadLicenseLanguage so each locale
                    // ships as its own ~30 KB chunk only when that language is selected.
                    // Letting Rollup chunk them naturally is critical - collapsing
                    // them into one 'data-licenses' chunk would defeat the lazy load.
                    // The English base (licenseDetails.js) is statically imported by
                    // ProductView so it co-locates with that route's chunk.
                    if (id.includes('/src/data/licenseDetails.') && !id.endsWith('/licenseDetails.js')) return undefined;
                    if (id.endsWith('/src/data/licenseDetails.js')) return 'data-licenses';
                    if (id.includes('/src/data/agents')) return 'data-agents';
                    return undefined;
                },
            },
        },
    },
});