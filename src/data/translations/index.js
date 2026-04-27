// Aggregate loader for the per-language translation slices.
//
// Shape: D[lang][key] = [Name, ShortDesc, Capabilities[], Audience, Integrations, Architecture?]
// (categories use [Name, Description] only).
//
// English is statically imported because it is the default UI language AND
// the fallback for missing fields in other locales (architecture, integrations
// — see src/i18n/helpers.js). Every other language is dynamically imported
// the first time it is selected, so the initial bundle only carries en.js
// (~23 KB) instead of all 8 slices (~180 KB).
import { D_EN } from './en.js';

export const D = { en: D_EN };

const loaders = {
    'en-GB': () => import('./en-GB.js').then((m) => m.D_EN_GB),
    fr: () => import('./fr.js').then((m) => m.D_FR),
    de: () => import('./de.js').then((m) => m.D_DE),
    es: () => import('./es.js').then((m) => m.D_ES),
    it: () => import('./it.js').then((m) => m.D_IT),
    nl: () => import('./nl.js').then((m) => m.D_NL),
    ar: () => import('./ar.js').then((m) => m.D_AR),
};

// Track in-flight loads so concurrent callers share the same promise.
const inFlight = new Map();

export function isLanguageLoaded(lang) {
    return Boolean(D[lang]);
}

export function loadLanguage(lang) {
    if (D[lang]) return Promise.resolve();
    if (!loaders[lang]) return Promise.resolve();
    let promise = inFlight.get(lang);
    if (!promise) {
        promise = loaders[lang]().then((slice) => {
            D[lang] = slice;
            inFlight.delete(lang);
        });
        inFlight.set(lang, promise);
    }
    return promise;
}
