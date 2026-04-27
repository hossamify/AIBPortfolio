import {
    Network, Users, Building, Layers, Zap, Leaf, Bot
} from 'lucide-react';
import { D } from './translations/index.js';
import { getDict, getCat } from '../i18n/helpers.js';
import { createBrandIcon } from '../components/BrandIcon.jsx';

// Re-export so callers don't need to know about the per-language split.
export { loadLanguage, isLanguageLoaded } from './translations/index.js';

// Microsoft brand icons. SVG assets live under src/assets/icons/ and are
// wrapped via createBrandIcon() to expose the same { size, className } API as lucide.
import dataverseSvg from '../assets/icons/Dataverse.svg';
import salesSvg from '../assets/icons/Sales.svg';
import customerServicesSvg from '../assets/icons/CustomerServices.svg';
import customerInsightsSvg from '../assets/icons/CustomerInsights.svg';
import fieldServiceSvg from '../assets/icons/FieldService.svg';
import financeSvg from '../assets/icons/Finance.svg';
import supplyChainSvg from '../assets/icons/SupplyChainManagement.svg';
import projectOperationsSvg from '../assets/icons/ProjectOperations.svg';
import humanResourcesSvg from '../assets/icons/HumanResources.svg';
import commerceSvg from '../assets/icons/Commerce.svg';
import businessCentralSvg from '../assets/icons/BusinessCentral.svg';
import copilotStudioSvg from '../assets/icons/CopilotStudio.svg';
import powerAppsSvg from '../assets/icons/PowerApps.svg';
import powerAutomateSvg from '../assets/icons/PowerAutomate.svg';
import powerPagesSvg from '../assets/icons/PowerPages.svg';
import sustainabilitySvg from '../assets/icons/Sustainability.svg';
import defenderSvg from '../assets/icons/Defender.svg';

const DataverseIcon = createBrandIcon(dataverseSvg, 'Dataverse');
const SalesIcon = createBrandIcon(salesSvg, 'Dynamics 365 Sales');
const CustomerServicesIcon = createBrandIcon(customerServicesSvg, 'Dynamics 365 Customer Service');
const CustomerInsightsIcon = createBrandIcon(customerInsightsSvg, 'Dynamics 365 Customer Insights');
const FieldServiceIcon = createBrandIcon(fieldServiceSvg, 'Dynamics 365 Field Service');
const FinanceIcon = createBrandIcon(financeSvg, 'Dynamics 365 Finance');
const SupplyChainIcon = createBrandIcon(supplyChainSvg, 'Dynamics 365 Supply Chain Management');
const ProjectOperationsIcon = createBrandIcon(projectOperationsSvg, 'Dynamics 365 Project Operations');
const HumanResourcesIcon = createBrandIcon(humanResourcesSvg, 'Dynamics 365 Human Resources');
const CommerceIcon = createBrandIcon(commerceSvg, 'Dynamics 365 Commerce');
const BusinessCentralIcon = createBrandIcon(businessCentralSvg, 'Dynamics 365 Business Central');
const CopilotStudioIcon = createBrandIcon(copilotStudioSvg, 'Copilot Studio');
const PowerAppsIcon = createBrandIcon(powerAppsSvg, 'Power Apps');
const PowerAutomateIcon = createBrandIcon(powerAutomateSvg, 'Power Automate');
const PowerPagesIcon = createBrandIcon(powerPagesSvg, 'Power Pages');
const SustainabilityIcon = createBrandIcon(sustainabilitySvg, 'Microsoft Sustainability Manager');
const DefenderIcon = createBrandIcon(defenderSvg, 'Microsoft Defender');

// Portfolio tree: categories and their products, decorated with icons and theme colors.
// Icons/themes are UI concerns; translated text comes from D via helpers.

// Cache the built tree per language so toggling back to a previously-seen
// language returns referentially-stable nodes (lets useMemo/useEffect skip
// downstream work) and avoids re-walking the large `D` translations dictionary.
const portfolioCache = new Map();

// Reusable Tailwind palette so themes are declared once and referenced by name.
// Adding a new colour means adding a single entry here.
const themes = {
    slate:  { bg: 'bg-slate-100 dark:bg-slate-900/40',  text: 'text-slate-800 dark:text-slate-200',  border: 'border-slate-300 dark:border-slate-700', badgeBg: 'bg-slate-200 dark:bg-slate-700',         iconColor: 'text-slate-700 dark:text-slate-300', ring: 'ring-slate-500' },
    rose:   { bg: 'bg-rose-50 dark:bg-rose-950/40',     text: 'text-rose-700 dark:text-rose-300',    border: 'border-rose-200 dark:border-rose-800',   badgeBg: 'bg-rose-100 dark:bg-rose-900/40',        iconColor: 'text-rose-600 dark:text-rose-400',   ring: 'ring-rose-500' },
    blue:   { bg: 'bg-blue-50 dark:bg-blue-950/40',     text: 'text-blue-700 dark:text-blue-300',    border: 'border-blue-200 dark:border-blue-800',   badgeBg: 'bg-blue-100 dark:bg-blue-900/40',        iconColor: 'text-blue-600 dark:text-blue-400',   ring: 'ring-blue-500' },
    indigo: { bg: 'bg-indigo-50 dark:bg-indigo-950/40', text: 'text-indigo-700 dark:text-indigo-300', border: 'border-indigo-200 dark:border-indigo-800', badgeBg: 'bg-indigo-100 dark:bg-indigo-900/40', iconColor: 'text-indigo-600 dark:text-indigo-400', ring: 'ring-indigo-500' },
    teal:   { bg: 'bg-teal-50 dark:bg-teal-950/40',     text: 'text-teal-700 dark:text-teal-300',    border: 'border-teal-200 dark:border-teal-800',   badgeBg: 'bg-teal-100 dark:bg-teal-900/40',        iconColor: 'text-teal-600 dark:text-teal-400',   ring: 'ring-teal-500' },
    purple: { bg: 'bg-purple-50 dark:bg-purple-950/40', text: 'text-purple-700 dark:text-purple-300', border: 'border-purple-200 dark:border-purple-800', badgeBg: 'bg-purple-100 dark:bg-purple-900/40', iconColor: 'text-purple-600 dark:text-purple-400', ring: 'ring-purple-500' },
    green:  { bg: 'bg-green-50 dark:bg-green-950/40',   text: 'text-green-700 dark:text-green-300',  border: 'border-green-200 dark:border-green-800', badgeBg: 'bg-green-100 dark:bg-green-900/40',      iconColor: 'text-green-600 dark:text-green-400', ring: 'ring-green-500' }
};

// Builders that read the localized dictionary entry once and emit the flat
// node shape consumers expect. Previously each product called getDict() six
// times per render and wrapped the result in a `locales[lang]` object that
// only ever held one language; consumers had to drill through `node.locales[lang]`
// and would crash with `undefined` if they accessed it under a different
// language. Flattening also halves the JSX in this file.
const buildProduct = (lang, id, icon, key) => {
    const t = getDict(D, key, lang);
    return {
        id, icon,
        name: t.n,
        shortDesc: t.d,
        capabilities: t.c,
        targetAudience: t.a,
        integrations: t.i,
        architecture: t.arch
    };
};
const buildCategory = (lang, id, icon, key, theme, products = []) => {
    const t = getCat(D, key, lang);
    return { id, icon, theme, name: t.n, description: t.d, products };
};

const buildPortfolioData = (lang) => {
    const p = (id, icon, key) => buildProduct(lang, id, icon, key);
    return [
        buildCategory(lang, 'architecture', Network, 'cat_arch', themes.slate, [
            p('dataverse-cdm', DataverseIcon, 'prod_dataverse'),
            p('enterprise-security', DefenderIcon, 'prod_security')
        ]),
        // Special pillar: rendered by AgentsView (no standard product cards).
        // Products array is intentionally empty so HomeView/Sidebar/Search keep working.
        buildCategory(lang, 'ai-agents', Bot, 'cat_agents', themes.rose, []),
        buildCategory(lang, 'cx-front-office', Users, 'cat_cx', themes.blue, [
            p('d365-sales', SalesIcon, 'prod_sales'),
            p('d365-cs', CustomerServicesIcon, 'prod_cs'),
            p('d365-ci', CustomerInsightsIcon, 'prod_ci'),
            p('d365-field', FieldServiceIcon, 'prod_field')
        ]),
        buildCategory(lang, 'erp-back-office', Building, 'cat_erp', themes.indigo, [
            p('d365-finance', FinanceIcon, 'prod_finance'),
            p('d365-scm', SupplyChainIcon, 'prod_scm'),
            p('d365-po', ProjectOperationsIcon, 'prod_po'),
            p('d365-hr', HumanResourcesIcon, 'prod_hr'),
            p('d365-commerce', CommerceIcon, 'prod_commerce')
        ]),
        buildCategory(lang, 'smb-solutions', Layers, 'cat_smb', themes.teal, [
            p('d365-bc', BusinessCentralIcon, 'prod_bc')
        ]),
        buildCategory(lang, 'power-platform', Zap, 'cat_pp', themes.purple, [
            p('copilot-studio', CopilotStudioIcon, 'prod_copilot'),
            p('power-apps', PowerAppsIcon, 'prod_apps'),
            p('power-automate', PowerAutomateIcon, 'prod_automate'),
            p('power-pages', PowerPagesIcon, 'prod_pages')
        ]),
        buildCategory(lang, 'sustainability', Leaf, 'cat_sust', themes.green, [
            p('sust-emissions', SustainabilityIcon, 'prod_emissions')
        ])
    ];
};

export const getPortfolioData = (lang) => {
    const cached = portfolioCache.get(lang);
    if (cached) return cached;
    const built = buildPortfolioData(lang);
    // Only cache once the language slice is actually loaded - otherwise the
    // first call for a not-yet-loaded language would freeze the English
    // fallback as the canonical entry. App.jsx awaits loadLanguage(lang)
    // before flipping state so by the time we reach this on the post-load
    // render, D[lang] is populated.
    if (D[lang]) portfolioCache.set(lang, built);
    return built;
};
