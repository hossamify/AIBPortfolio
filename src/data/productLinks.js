// Per-product Microsoft deep links. Kept out of ProductView.jsx so the view
// stays focused on rendering. `getProductLinks(productId, lang)` returns the
// three URLs the header offers; any of them may be `null` when Microsoft does
// not publish a corresponding page for that product.

// Official Microsoft product page per product id. The product icon and title
// in the header act as deep links to these pages.
const PRODUCT_URLS = {
    'dataverse-cdm': 'https://www.microsoft.com/en-us/power-platform/dataverse',
    'd365-sales': 'https://www.microsoft.com/en-us/dynamics-365/products/sales',
    'd365-cs': 'https://www.microsoft.com/en-us/dynamics-365/products/customer-service',
    'd365-ci': 'https://www.microsoft.com/en-us/dynamics-365/products/customer-insights',
    'd365-field': 'https://www.microsoft.com/en-us/dynamics-365/products/field-service',
    'd365-finance': 'https://www.microsoft.com/en-us/dynamics-365/products/finance',
    'd365-scm': 'https://www.microsoft.com/en-us/dynamics-365/products/supply-chain-management',
    'd365-po': 'https://www.microsoft.com/en-us/dynamics-365/products/project-operations',
    'd365-hr': 'https://www.microsoft.com/en-us/dynamics-365/products/human-resources',
    'd365-commerce': 'https://www.microsoft.com/en-us/dynamics-365/products/commerce',
    'd365-bc': 'https://www.microsoft.com/en-us/dynamics-365/products/business-central',
    'copilot-studio': 'https://www.microsoft.com/en-us/microsoft-365-copilot/microsoft-copilot-studio',
    'power-apps': 'https://www.microsoft.com/en-us/power-platform/products/power-apps',
    'power-automate': 'https://www.microsoft.com/en-us/power-platform/products/power-automate',
    'power-pages': 'https://www.microsoft.com/en-us/power-platform/products/power-pages',
    // All Microsoft Sustainability Manager modules link to the MSM product page.
    'sust-emissions': 'https://www.microsoft.com/en-us/sustainability/microsoft-sustainability-manager',
    'esg-social': 'https://www.microsoft.com/en-us/sustainability/microsoft-sustainability-manager',
    'sust-ingestion': 'https://www.microsoft.com/en-us/sustainability/microsoft-sustainability-manager',
    'esg-fabric': 'https://www.microsoft.com/en-us/sustainability/microsoft-sustainability-manager',
};

// Microsoft guided/click-through tour path segments per product id. Italian
// falls back to en-us because Microsoft does not publish an it-it variant for
// these tours.
const DEMO_PATHS = {
    'd365-sales': 'dynamics/sales-acceleration',
    'd365-cs': 'dynamics/customer-service',
    'd365-ci': 'dynamics/customer-insights',
    'd365-field': 'dynamics/field-service',
    'd365-finance': 'dynamics/finance-modernization',
    'd365-scm': 'dynamics/supply-chain-modernization',
    'd365-po': 'dynamics/project-operations',
    'd365-hr': 'dynamics/human-resources',
    'd365-bc': 'dynamics/business-central',
    'power-apps': 'power-platform/power-apps',
    'power-automate': 'power-platform/power-automate',
};

const DEMO_LOCALES = {
    en: 'en-us',
    fr: 'fr-fr',
    es: 'es-es',
    de: 'de-de',
    nl: 'nl-nl',
    ar: 'ar-sa',
};

// Microsoft Customer Stories search slugs per product id.
const CUSTOMER_STORIES_PATHS = {
    'd365-sales': 'dynamics-365/dynamics-365-sales',
    'd365-cs': 'dynamics-365/dynamics-365-customer-service',
    'd365-ci': 'dynamics-365/dynamics-365-customer-insights',
    'd365-field': 'dynamics-365/dynamics-365-field-service',
    'd365-finance': 'dynamics-365/dynamics-365-finance',
    'd365-scm': 'dynamics-365/dynamics-365-supply-chain-management',
    'd365-po': 'dynamics-365/dynamics-365-project-operations',
    'd365-hr': 'dynamics-365/dynamics-365-human-resources',
    'd365-commerce': 'dynamics-365/dynamics-365-commerce',
    'd365-bc': 'dynamics-365/dynamics-365-business-central',
    'copilot-studio': 'ai-microsoft-copilot/microsoft-copilot-studio',
    'power-apps': 'microsoft-power-platform/power-apps',
    'power-automate': 'microsoft-power-platform/power-automate',
    'power-pages': 'microsoft-power-platform/power-pages',
};

// Verified against the live site: en-us, en-gb, fr-fr, de-de, es-es, it-it,
// nl-nl all return 200. Country-scoped Arabic locales (ar-sa/ar-ae/ar-eg)
// return 404 but the bare `ar` locale serves the page, so we use that.
const CUSTOMER_STORIES_LOCALES = {
    en: 'en-us',
    'en-GB': 'en-gb',
    fr: 'fr-fr',
    de: 'de-de',
    es: 'es-es',
    it: 'it-it',
    nl: 'nl-nl',
    ar: 'ar',
};

const buildDemoUrl = (productId, lang) => {
    const path = DEMO_PATHS[productId];
    if (!path) return null;
    const locale = DEMO_LOCALES[lang] || 'en-us';
    return `https://guidedtour.microsoft.com/${locale}/guidedtour/${path}/1/1`;
};

const buildCustomerStoriesUrl = (productId, lang) => {
    const slug = CUSTOMER_STORIES_PATHS[productId];
    if (!slug) return null;
    const locale = CUSTOMER_STORIES_LOCALES[lang] || 'en-us';
    return `https://www.microsoft.com/${locale}/customers/search?filters=product%3A${encodeURIComponent(slug)}`;
};

export function getProductLinks(productId, lang) {
    return {
        productUrl: PRODUCT_URLS[productId] || null,
        demoUrl: buildDemoUrl(productId, lang),
        customerStoriesUrl: buildCustomerStoriesUrl(productId, lang),
    };
}
