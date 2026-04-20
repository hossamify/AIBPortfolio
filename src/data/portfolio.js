import {
    Network, Shield, Users, Building, Layers, Zap, Leaf, Cloud, Droplets, Factory, Bot
} from 'lucide-react';
import { D } from './translations.js';
import { getDict, getCat } from '../i18n/helpers.js';
import { createBrandIcon } from '../components/BrandIcon.jsx';

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

// Portfolio tree: categories and their products, decorated with icons and theme colors.
// Icons/themes are UI concerns; translated text comes from D via helpers.

export const getPortfolioData = (lang) => [
    {
        id: 'architecture', icon: Network,
        theme: { bg: 'bg-slate-100 dark:bg-slate-900/40', text: 'text-slate-800 dark:text-slate-200', border: 'border-slate-300 dark:border-slate-700', badgeBg: 'bg-slate-200 dark:bg-slate-700', iconColor: 'text-slate-700 dark:text-slate-300', ring: 'ring-slate-500' },
        locales: { [lang]: { name: getCat(D, 'cat_arch', lang).n, description: getCat(D, 'cat_arch', lang).d } },
        products: [
            { id: 'dataverse-cdm', icon: DataverseIcon, locales: { [lang]: { name: getDict(D, 'prod_dataverse', lang).n, shortDesc: getDict(D, 'prod_dataverse', lang).d, capabilities: getDict(D, 'prod_dataverse', lang).c, targetAudience: getDict(D, 'prod_dataverse', lang).a, integrations: getDict(D, 'prod_dataverse', lang).i, architecture: getDict(D, 'prod_dataverse', lang).arch } } },
            { id: 'enterprise-security', icon: Shield, locales: { [lang]: { name: getDict(D, 'prod_security', lang).n, shortDesc: getDict(D, 'prod_security', lang).d, capabilities: getDict(D, 'prod_security', lang).c, targetAudience: getDict(D, 'prod_security', lang).a, integrations: getDict(D, 'prod_security', lang).i, architecture: getDict(D, 'prod_security', lang).arch } } },
        ]
    },
    {
        // Special pillar: rendered by AgentsView (no standard product cards).
        // Products array is intentionally empty so HomeView/Sidebar/Search keep working.
        id: 'ai-agents', icon: Bot,
        theme: { bg: 'bg-rose-50 dark:bg-rose-950/40', text: 'text-rose-700 dark:text-rose-300', border: 'border-rose-200 dark:border-rose-800', badgeBg: 'bg-rose-100 dark:bg-rose-900/40', iconColor: 'text-rose-600 dark:text-rose-400', ring: 'ring-rose-500' },
        locales: { [lang]: { name: getCat(D, 'cat_agents', lang).n, description: getCat(D, 'cat_agents', lang).d } },
        products: []
    },
    {
        id: 'cx-front-office', icon: Users,
        theme: { bg: 'bg-blue-50 dark:bg-blue-950/40', text: 'text-blue-700 dark:text-blue-300', border: 'border-blue-200 dark:border-blue-800', badgeBg: 'bg-blue-100 dark:bg-blue-900/40', iconColor: 'text-blue-600 dark:text-blue-400', ring: 'ring-blue-500' },
        locales: { [lang]: { name: getCat(D, 'cat_cx', lang).n, description: getCat(D, 'cat_cx', lang).d } },
        products: [
            { id: 'd365-sales', icon: SalesIcon, locales: { [lang]: { name: getDict(D, 'prod_sales', lang).n, shortDesc: getDict(D, 'prod_sales', lang).d, capabilities: getDict(D, 'prod_sales', lang).c, targetAudience: getDict(D, 'prod_sales', lang).a, integrations: getDict(D, 'prod_sales', lang).i, architecture: getDict(D, 'prod_sales', lang).arch } } },
            { id: 'd365-cs', icon: CustomerServicesIcon, locales: { [lang]: { name: getDict(D, 'prod_cs', lang).n, shortDesc: getDict(D, 'prod_cs', lang).d, capabilities: getDict(D, 'prod_cs', lang).c, targetAudience: getDict(D, 'prod_cs', lang).a, integrations: getDict(D, 'prod_cs', lang).i, architecture: getDict(D, 'prod_cs', lang).arch } } },
            { id: 'd365-ci', icon: CustomerInsightsIcon, locales: { [lang]: { name: getDict(D, 'prod_ci', lang).n, shortDesc: getDict(D, 'prod_ci', lang).d, capabilities: getDict(D, 'prod_ci', lang).c, targetAudience: getDict(D, 'prod_ci', lang).a, integrations: getDict(D, 'prod_ci', lang).i, architecture: getDict(D, 'prod_ci', lang).arch } } },
            { id: 'd365-field', icon: FieldServiceIcon, locales: { [lang]: { name: getDict(D, 'prod_field', lang).n, shortDesc: getDict(D, 'prod_field', lang).d, capabilities: getDict(D, 'prod_field', lang).c, targetAudience: getDict(D, 'prod_field', lang).a, integrations: getDict(D, 'prod_field', lang).i, architecture: getDict(D, 'prod_field', lang).arch } } }
        ]
    },
    {
        id: 'erp-back-office', icon: Building,
        theme: { bg: 'bg-indigo-50 dark:bg-indigo-950/40', text: 'text-indigo-700 dark:text-indigo-300', border: 'border-indigo-200 dark:border-indigo-800', badgeBg: 'bg-indigo-100 dark:bg-indigo-900/40', iconColor: 'text-indigo-600 dark:text-indigo-400', ring: 'ring-indigo-500' },
        locales: { [lang]: { name: getCat(D, 'cat_erp', lang).n, description: getCat(D, 'cat_erp', lang).d } },
        products: [
            { id: 'd365-finance', icon: FinanceIcon, locales: { [lang]: { name: getDict(D, 'prod_finance', lang).n, shortDesc: getDict(D, 'prod_finance', lang).d, capabilities: getDict(D, 'prod_finance', lang).c, targetAudience: getDict(D, 'prod_finance', lang).a, integrations: getDict(D, 'prod_finance', lang).i, architecture: getDict(D, 'prod_finance', lang).arch } } },
            { id: 'd365-scm', icon: SupplyChainIcon, locales: { [lang]: { name: getDict(D, 'prod_scm', lang).n, shortDesc: getDict(D, 'prod_scm', lang).d, capabilities: getDict(D, 'prod_scm', lang).c, targetAudience: getDict(D, 'prod_scm', lang).a, integrations: getDict(D, 'prod_scm', lang).i, architecture: getDict(D, 'prod_scm', lang).arch } } },
            { id: 'd365-po', icon: ProjectOperationsIcon, locales: { [lang]: { name: getDict(D, 'prod_po', lang).n, shortDesc: getDict(D, 'prod_po', lang).d, capabilities: getDict(D, 'prod_po', lang).c, targetAudience: getDict(D, 'prod_po', lang).a, integrations: getDict(D, 'prod_po', lang).i, architecture: getDict(D, 'prod_po', lang).arch } } },
            { id: 'd365-hr', icon: HumanResourcesIcon, locales: { [lang]: { name: getDict(D, 'prod_hr', lang).n, shortDesc: getDict(D, 'prod_hr', lang).d, capabilities: getDict(D, 'prod_hr', lang).c, targetAudience: getDict(D, 'prod_hr', lang).a, integrations: getDict(D, 'prod_hr', lang).i, architecture: getDict(D, 'prod_hr', lang).arch } } },
            { id: 'd365-commerce', icon: CommerceIcon, locales: { [lang]: { name: getDict(D, 'prod_commerce', lang).n, shortDesc: getDict(D, 'prod_commerce', lang).d, capabilities: getDict(D, 'prod_commerce', lang).c, targetAudience: getDict(D, 'prod_commerce', lang).a, integrations: getDict(D, 'prod_commerce', lang).i, architecture: getDict(D, 'prod_commerce', lang).arch } } }
        ]
    },
    {
        id: 'smb-solutions', icon: Layers,
        theme: { bg: 'bg-teal-50 dark:bg-teal-950/40', text: 'text-teal-700 dark:text-teal-300', border: 'border-teal-200 dark:border-teal-800', badgeBg: 'bg-teal-100 dark:bg-teal-900/40', iconColor: 'text-teal-600 dark:text-teal-400', ring: 'ring-teal-500' },
        locales: { [lang]: { name: getCat(D, 'cat_smb', lang).n, description: getCat(D, 'cat_smb', lang).d } },
        products: [
            { id: 'd365-bc', icon: BusinessCentralIcon, locales: { [lang]: { name: getDict(D, 'prod_bc', lang).n, shortDesc: getDict(D, 'prod_bc', lang).d, capabilities: getDict(D, 'prod_bc', lang).c, targetAudience: getDict(D, 'prod_bc', lang).a, integrations: getDict(D, 'prod_bc', lang).i, architecture: getDict(D, 'prod_bc', lang).arch } } }
        ]
    },
    {
        id: 'power-platform', icon: Zap,
        theme: { bg: 'bg-purple-50 dark:bg-purple-950/40', text: 'text-purple-700 dark:text-purple-300', border: 'border-purple-200 dark:border-purple-800', badgeBg: 'bg-purple-100 dark:bg-purple-900/40', iconColor: 'text-purple-600 dark:text-purple-400', ring: 'ring-purple-500' },
        locales: { [lang]: { name: getCat(D, 'cat_pp', lang).n, description: getCat(D, 'cat_pp', lang).d } },
        products: [
            { id: 'copilot-studio', icon: CopilotStudioIcon, locales: { [lang]: { name: getDict(D, 'prod_copilot', lang).n, shortDesc: getDict(D, 'prod_copilot', lang).d, capabilities: getDict(D, 'prod_copilot', lang).c, targetAudience: getDict(D, 'prod_copilot', lang).a, integrations: getDict(D, 'prod_copilot', lang).i, architecture: getDict(D, 'prod_copilot', lang).arch } } },
            { id: 'power-apps', icon: PowerAppsIcon, locales: { [lang]: { name: getDict(D, 'prod_apps', lang).n, shortDesc: getDict(D, 'prod_apps', lang).d, capabilities: getDict(D, 'prod_apps', lang).c, targetAudience: getDict(D, 'prod_apps', lang).a, integrations: getDict(D, 'prod_apps', lang).i, architecture: getDict(D, 'prod_apps', lang).arch } } },
            { id: 'power-automate', icon: PowerAutomateIcon, locales: { [lang]: { name: getDict(D, 'prod_automate', lang).n, shortDesc: getDict(D, 'prod_automate', lang).d, capabilities: getDict(D, 'prod_automate', lang).c, targetAudience: getDict(D, 'prod_automate', lang).a, integrations: getDict(D, 'prod_automate', lang).i, architecture: getDict(D, 'prod_automate', lang).arch } } },
            { id: 'power-pages', icon: PowerPagesIcon, locales: { [lang]: { name: getDict(D, 'prod_pages', lang).n, shortDesc: getDict(D, 'prod_pages', lang).d, capabilities: getDict(D, 'prod_pages', lang).c, targetAudience: getDict(D, 'prod_pages', lang).a, integrations: getDict(D, 'prod_pages', lang).i, architecture: getDict(D, 'prod_pages', lang).arch } } }
        ]
    },
    {
        id: 'sustainability', icon: Leaf,
        theme: { bg: 'bg-green-50 dark:bg-green-950/40', text: 'text-green-700 dark:text-green-300', border: 'border-green-200 dark:border-green-800', badgeBg: 'bg-green-100 dark:bg-green-900/40', iconColor: 'text-green-600 dark:text-green-400', ring: 'ring-green-500' },
        locales: { [lang]: { name: getCat(D, 'cat_sust', lang).n, description: getCat(D, 'cat_sust', lang).d } },
        products: [
            { id: 'sust-emissions', icon: Cloud, locales: { [lang]: { name: getDict(D, 'prod_emissions', lang).n, shortDesc: getDict(D, 'prod_emissions', lang).d, capabilities: getDict(D, 'prod_emissions', lang).c, targetAudience: getDict(D, 'prod_emissions', lang).a, integrations: getDict(D, 'prod_emissions', lang).i } } },
            { id: 'esg-social', icon: Shield, locales: { [lang]: { name: getDict(D, 'prod_social', lang).n, shortDesc: getDict(D, 'prod_social', lang).d, capabilities: getDict(D, 'prod_social', lang).c, targetAudience: getDict(D, 'prod_social', lang).a, integrations: getDict(D, 'prod_social', lang).i } } },
            { id: 'sust-ingestion', icon: Layers, locales: { [lang]: { name: getDict(D, 'prod_ingestion', lang).n, shortDesc: getDict(D, 'prod_ingestion', lang).d, capabilities: getDict(D, 'prod_ingestion', lang).c, targetAudience: getDict(D, 'prod_ingestion', lang).a, integrations: getDict(D, 'prod_ingestion', lang).i } } },
            { id: 'esg-fabric', icon: Droplets, locales: { [lang]: { name: getDict(D, 'prod_fabric', lang).n, shortDesc: getDict(D, 'prod_fabric', lang).d, capabilities: getDict(D, 'prod_fabric', lang).c, targetAudience: getDict(D, 'prod_fabric', lang).a, integrations: getDict(D, 'prod_fabric', lang).i } } }
        ]
    },
    {
        id: 'industry-clouds', icon: Factory,
        theme: { bg: 'bg-orange-50 dark:bg-orange-950/40', text: 'text-orange-700 dark:text-orange-300', border: 'border-orange-200 dark:border-orange-800', badgeBg: 'bg-orange-100 dark:bg-orange-900/40', iconColor: 'text-orange-600 dark:text-orange-400', ring: 'ring-orange-500' },
        locales: { [lang]: { name: getCat(D, 'cat_ind', lang).n, description: getCat(D, 'cat_ind', lang).d } },
        products: [
            { id: 'industry-specific', icon: Layers, locales: { [lang]: { name: getDict(D, 'prod_ind', lang).n, shortDesc: getDict(D, 'prod_ind', lang).d, capabilities: getDict(D, 'prod_ind', lang).c, targetAudience: getDict(D, 'prod_ind', lang).a, integrations: getDict(D, 'prod_ind', lang).i } } }
        ]
    }
];
