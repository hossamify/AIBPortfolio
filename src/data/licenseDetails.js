// Progressive per-tier license detail breakdown.
// Update this file when license SKUs or entitlements change.

export const LICENSE_DETAILS = {
    'd365-sales': [
        {
            tier: 'Sales Professional',
            label: 'Base Level',
            features: [
                'Essential sales force automation (SFA) for organizations without complex sales processes.',
                'Create, read, update, and delete accounts, contacts, and leads.',
                'Manage invoices, orders, quotes, and price lists.',
                'Marketing campaigns and marketing lists.',
                'Up to 15 custom tables for application customization.',
                'Per Microsoft Dynamics 365 Licensing Guide: customers using Sales Professional cannot combine Sales Premium, Sales Enterprise, or Sales Insights within the same environment instance.'
            ]
        },
        {
            tier: 'Sales Enterprise',
            label: '+ Adds to Professional',
            features: [
                'Unrestricted customization — removes the 15 custom table limit.',
                'Embedded intelligence and manual forecasting.',
                'Limited-capacity Sales Premium features: Conversation Intelligence, Sales Accelerator (1,500 records/env/month), Lead & Opportunity scoring.',
                'Copilot in Dynamics 365 Sales.',
                '2,000 Customer Voice responses per tenant/month.'
            ]
        },
        {
            tier: 'Sales Premium',
            label: '+ Adds to Enterprise',
            features: [
                'Full, unrestricted access to all Sales Insights automation and AI.',
                'Predictive Forecasting, Relationship Analytics, Pipeline Intelligence.',
                'Assistant Studio, Connection Insights, and Notes Analysis.',
                'Business Card Reader (200 scans/user/month).',
                '1,000 Copilot Credits per user/month for AI agents.'
            ]
        }
    ],
    'd365-cs': [
        {
            tier: 'Customer Service Professional',
            label: 'Base Level',
            features: [
                'Streamlined resources for agents handling less complex scenarios.',
                'Basic case management and agent-to-team chat.',
                'Self-service website and knowledge base for customers.',
                'Up to 15 custom tables for customization.'
            ]
        },
        {
            tier: 'Customer Service Enterprise',
            label: '+ Adds to Professional',
            features: [
                'Advanced scheduling, dispatching, team creation, and resource management via Field Service & Project Operations integration.',
                'Intelligent unified routing (50 record routes/user/month).',
                'Customer Service Insights: AI-driven analytics, topic clustering, and sentiment analysis.',
                'Removes the custom table limit for full Dataverse customization.',
                '2,000 Customer Voice responses per user/month.'
            ]
        },
        {
            tier: 'Customer Service Premium',
            label: '+ Adds to Enterprise',
            features: [
                'Integrated Copilot-first contact center and CRM solution powered by generative AI.',
                'Comprehensive Contact Center (Digital + Voice) functionalities.',
                '1,000 Copilot Credits per user/month.',
                'Note: Upgrading to Premium removes the Customer Voice entitlement present in Enterprise.'
            ]
        },
        {
            tier: 'Contact Center',
            label: 'Independent License',
            features: [
                'All-in-one contact center with both digital and voice channels — no Customer Service CRM required.',
                'Digital engagement: live chat, SMS, email, social (Facebook, WhatsApp, LINE, Apple Messages for Business), and Microsoft Teams.',
                'Native voice powered by Azure Communication Services (carrier/ACS usage billed separately); supports Azure Direct Routing for existing carriers.',
                'AI-first routing: intelligent unified routing, skills-based assignment, and workforce management insights.',
                'Copilot-assisted agent desktop with real-time summaries, next-best-action suggestions, and conversation insights.',
                'Self-service: IVR, voicebots, and generative-AI-powered virtual agents built in Copilot Studio.',
                'Open and extensible — integrates into existing CRMs via APIs and adapters.',
                'Requires Copilot Credits (sold separately) for generative-AI scenarios; paid yearly.'
            ]
        },
        {
            tier: 'Contact Center Digital',
            label: 'Independent License',
            features: [
                'Digital-only contact center — messaging and chat channels without native voice.',
                'Live chat, SMS, email, social (Facebook, WhatsApp, LINE, Apple Messages for Business), and Microsoft Teams channels.',
                'AI-first unified routing with 50 record routes/user/month (excluding chats, calls, and text messages); skills-based assignment across digital channels.',
                'Copilot-assisted agent desktop with conversation summaries and next-best-action suggestions.',
                'Self-service chatbots and virtual agents built in Copilot Studio.',
                'Message capacity is purchased separately via Microsoft Copilot Studio.',
                'Open and extensible — integrates into existing CRMs via APIs and adapters.'
            ]
        },
        {
            tier: 'Contact Center Voice',
            label: 'Independent License',
            features: [
                'Voice-only contact center — native inbound and outbound voice without digital messaging channels.',
                'Native voice powered by Azure Communication Services (carrier/ACS usage billed separately); supports Azure Direct Routing for existing carriers.',
                'Capacity entitlements: 2,000 Intelligent Voicebot (IVR) minutes/user/month, 6,000 Call Intelligence minutes/user/month, and 35 GB of Dataverse file storage.',
                'AI-first routing, skills-based assignment, and workforce management insights for voice workloads.',
                'Copilot-assisted agent desktop with real-time transcription, call summaries, and next-best-action suggestions.',
                'Self-service IVR and voicebots built in Copilot Studio.',
                'Open and extensible — integrates into existing CRMs via APIs and adapters.'
            ]
        }
    ],
    'd365-field': [
        {
            tier: 'Field Service',
            label: 'Primary License',
            features: [
                'Full-time dispatchers, schedulers, and field technicians.',
                'Complete work-order lifecycle: creation, scheduling, dispatch, inventory, and returns.',
                'Schedule board, Resource Scheduling Optimization readiness, and route planning.',
                'Tight integration with Customer Service case management.',
                'Includes the latest Field Service Mobile application.',
                'Bing Maps Developer license included with limitations on billable transactions (see Microsoft Bing Maps licensing).',
                'Includes Dynamics 365 Guides and Remote Assist entitlement (until Dec 31, 2026).',
                '2,000 Customer Voice responses per tenant/month.'
            ]
        },
        {
            tier: 'Field Service Contractor',
            label: 'Add-on License',
            features: [
                'For third-party / part-time technicians — provides essential work-order management functionality to scale field operations.',
                'Execute and update work orders already assigned to them; create cases with limited edit capability (no SLAs/entitlements/case routing).',
                'View customer assets, manage own resources, and self-schedule (own resources and manual scheduling only).',
                'Includes the latest Field Service Mobile application.',
                'Does not include dispatch, scheduling administration, or inventory management.',
                'Per Microsoft Dynamics 365 Licensing Guide: organizations must already own a Field Service license before being eligible to purchase Field Service Contractor licenses.',
                'Field Service Contractor SLs do not include any Dataverse capacity entitlements.'
            ]
        }
    ],
    'd365-ci': [
        {
            tier: 'Customer Insights',
            label: 'Tenant License',
            features: [
                'Licensed per tenant; includes rights to install both Customer Insights – Journeys (formerly Marketing) and Customer Insights – Data (formerly Customer Insights) in an unlimited number of production or sandbox environments.',
                'Customer Insights – Journeys: create and execute personalized customer journeys across email, SMS, push notifications, and more.',
                'Customer Insights – Data: unify and enrich customer data with the Customer Data Platform (CDP) for deep insights into customer behavior, preferences, and interactions.',
                'Core capacities: 10,000 Interacted People (Journeys) and 100,000 Unified People (Data) per tenant/month.',
                'Scale each meter independently with Interacted People and Unified People add-on packs (T1/T2/T3 volume tiers).',
                'Attach price requires a minimum of 10 qualifying Dynamics 365 base licenses: Customer Service, Sales, Field Service, Finance, Supply Chain Management, or Commerce.'
            ]
        }
    ],
    'd365-finance': [
        {
            tier: 'Finance',
            label: 'Base Level',
            features: [
                'Intelligent, automated, and trusted core financial management with deep data and process integration across Dynamics 365, Microsoft 365, and partner applications.',
                'General ledger, accounts payable/receivable, fixed assets, budgeting, global cost accounting, and tax engine.',
                'Multi-entity, multi-currency, and multi-language consolidations with country-specific localizations.',
                'Read-only access to business performance planning (creating plans/budgets/forecasts requires Finance Premium).',
                'Copilot assistance for financial insights, vendor invoice processing, and collections workflows.',
                'Includes 100 electronic invoice and 100 invoice capture transactions per tenant/month.'
            ]
        },
        {
            tier: 'Finance Premium',
            label: '+ Adds to Finance',
            features: [
                'Advanced business performance management workspaces for planning, budgeting, and forecasting.',
                'Required license for users who need to natively create plans, budgets, forecasts, or financial analysis reports.',
                'Subscription billing with recurring revenue models and revenue recognition aligned with IFRS 15 / ASC 606.',
                'Advanced AI scenarios such as Copilot-assisted variance analysis and cash-flow forecasting.',
                'Doubles capacity to 200 electronic invoice and 200 invoice capture transactions per tenant/month.',
                '1,000 Copilot Credits per user/month.'
            ]
        }
    ],
    'd365-scm': [
        {
            tier: 'Supply Chain Management',
            label: 'Base Level',
            features: [
                'Real-time visibility and intelligence for manufacturers, distributors, and retailers — proactive operations across order fulfillment, planning, procurement, production, inventory, warehousing, and transportation.',
                'Advanced modules: asset management, cost accounting, engineering change management, and manufacturing execution.',
                'Discrete, process, lean, and project-based manufacturing modes with integrated quality management.',
                'Warehouse Management mobile app with handheld scanning, wave/pack/load processing, and license-plate inventory tracking.',
                'Copilot assistance for sourcing decisions, demand-forecasting insights, and exception handling across the supply chain.',
                'Default tenant capacities: 100 assets, 100 electronic invoice transactions, 100 invoice capture transactions, and 1,000 order lines per tenant/month.'
            ]
        },
        {
            tier: 'Supply Chain Management Premium',
            label: '+ Adds to SCM',
            features: [
                'Demand Planning with Copilot-driven forecast generation, segmentation, and exception management.',
                'Required license for users who need to natively create plans, budgets, forecasts, or demand analysis reports.',
                'Advanced inventory and replenishment optimization with multi-echelon planning across sites and warehouses.',
                'Embedded scenario simulation and what-if analysis for supply/demand balancing.',
                'Doubles invoicing capacity to 200 electronic invoice and 200 invoice capture transactions per tenant/month (asset and order-line capacities remain at 100 and 1,000).',
                '1,000 Copilot Credits per user/month.'
            ]
        }
    ],
    'd365-hr': [
        {
            tier: 'Human Resources',
            label: 'Primary License',
            features: [
                'Full compensation, benefits, leave/absence tracking, regulatory compliance, and performance feedback.',
                'Standardized training programs management with course catalogs, enrollments, and completions.',
                'Organization management: position hierarchies, jobs, departments, and worker lifecycle (hire-to-retire) workflows.',
                'Centralized people data extensible via Dataverse and Power Platform; integrates with payroll partner solutions.',
                'Copilot assistance for employee inquiries, document drafting, and HR analytics.',
                '2,000 Customer Voice responses per tenant/month.'
            ]
        },
        {
            tier: 'HR Self Service',
            label: 'Independent License',
            features: [
                'Employee self-serve: update personal info, report sick leave, view benefits, submit vacation requests, and download pay statements.',
                'Manager self-serve: approve employee leave, view team reporting information, and access basic team analytics.',
                'Mobile-friendly access via the Dynamics 365 / Power Apps companion experiences.',
                'Per Microsoft Dynamics 365 Licensing Guide: only grants access to Human Resources, not any other Dynamics 365 product.',
                'Does not include full HR user rights — provides only the self-service functionality employees and managers commonly need.',
                'Designed for the broad employee base; full HR specialists must be licensed with Human Resources.'
            ]
        }
    ],
    'd365-commerce': [
        {
            tier: 'Commerce',
            label: 'Base Level',
            features: [
                'Unified in-store, back office, and call center in one end-to-end retail platform.',
                'Modern Point of Sale (POS) on Windows, iOS, and Android with offline support and clienteling tools.',
                'Intelligent forecasting, AI-driven product recommendations, and personalized loyalty programs.',
                'Retail store operations, catalogs, merchandising strategy, pricing/discount engine, and subscription billing.',
                'Omnichannel order management: BOPIS (buy online, pick up in store), endless aisle, and ship-from-store.',
                '1,000 order lines per tenant/month.'
            ]
        },
        {
            tier: 'e-Commerce',
            label: '+ Adds to Commerce',
            features: [
                'Tenant-based tiers to fully support B2B and B2C e-commerce storefronts with AOV-based capacity bands.',
                'Commerce Scale Unit – Cloud for mission-critical peak-demand processing.',
                'API-driven headless commerce engine for emerging channels (social media, marketplaces, IoT).',
                'Built-in CMS with drag-and-drop authoring, A/B testing, and SEO optimization.',
                'Native integrations with payment connectors, tax services, and rating/reviews providers.',
                'Per Microsoft Dynamics 365 Licensing Guide: each additional e-commerce environment requires an additional e-Commerce Tier license.'
            ]
        }
    ],
    'd365-po': [
        {
            tier: 'Project Operations',
            label: 'Full License',
            features: [
                'Unified platform connecting sales, resourcing, project management, and finance in a single product.',
                'Opportunity-to-cash: project-based quotes with work breakdown structure (WBS), contracts, and fixed-price / time-and-materials / milestone billing.',
                'Project planning, scheduling, and resource management: Gantt, dependencies, baselines, skill-based resource requests, and capacity planning.',
                'Time, expense, and subcontractor management with policy-driven approval workflows and three-way matching against project budgets.',
                'Project accounting: cost rates, intercompany pricing, and revenue recognition (percent-complete / as-invoiced) aligned with IFRS 15 / ASC 606.',
                'Multi-project portfolio dashboards with earned value (EV), CPI/SPI, margin analysis, and Copilot assistance for status summaries and risk identification.'
            ]
        }
    ],
    'd365-bc': [
        {
            tier: 'Essentials',
            label: 'Base Level',
            features: [
                'Financial Management: AI-supported forecasting, bank reconciliation, deferrals, and multiple currencies.',
                'Supply chain: basic inventory, drop shipments, sales/purchase order management, and warehouse data capture.',
                'CRM campaigns, basic human resources, and project management tools.',
                'Wide range of operational and management capabilities tailored for SMBs.'
            ]
        },
        {
            tier: 'Premium',
            label: '+ Adds to Essentials',
            features: [
                'Service Order Management: planning, dispatching, and service contract management.',
                'Manufacturing: agile manufacturing, basic capacity planning, machine centers, and production BOMs.'
            ]
        }
    ],
    'power-apps': [
        {
            tier: 'Premium',
            label: 'Full License',
            features: [
                'Create and run unlimited custom applications and create and access unlimited Power Pages websites.',
                'Full Dataverse access with unrestricted creation of and access to custom tables.',
                'Standard, Premium, and custom connectors, plus on-premises and cloud services data transfer.',
                'Dedicated Dataverse capacity: 250 MB Database and 2 GB File accrued per user (at the tenant level).',
                'Power Automate use rights for cloud flows within the app context (RPA requires a separate Power Automate Premium purchase).',
                'Managed Environments for administration and governance at scale.',
                'Per Power Platform Licensing Guide April 2026: $20 per user/month, billed annually.'
            ]
        },
        {
            tier: 'Premium Volume',
            label: 'Volume License',
            features: [
                'Same Power Apps Premium entitlements as the standard $20/user/month SKU.',
                'Per Power Platform Licensing Guide April 2026: $12 per user/month with 2,000+ new licenses, billed annually.',
                'Targets large-scale enterprise rollouts standardizing on Power Apps for thousands of users.',
                'Procured via your Microsoft account team or Enterprise Agreement amendment.',
                'All other capabilities (Dataverse capacity, premium connectors, Managed Environments) are identical to the standard Premium SKU.'
            ]
        }
    ],
    'power-automate': [
        {
            tier: 'Premium',
            label: 'Primary License',
            features: [
                'Automate modern applications via API-based digital process automation (cloud flows: automated, instant, scheduled).',
                'Automate legacy applications via UI-based robotic process automation (attended desktop flows / RPA).',
                'Business process flows for structured, stateful, human-interactive workflows.',
                'Process Mining: visualize and analyze processes (additional Process Mining capacity available as a 100 GB/tenant/month add-on).',
                'Standard, Premium, and custom connectors, plus on-premises and cloud services data transfer.',
                'Dataverse use rights: 250 MB Database and 2 GB File accrued per user (at the tenant level).',
                'Managed Environments for administration and governance at scale.',
                'Per Power Platform Licensing Guide April 2026: $15 per user/month, billed annually; one license allows the user (or capacity) to use Power Automate in any environment in the tenant.'
            ]
        },
        {
            tier: 'Process',
            label: 'Independent License',
            features: [
                'Licenses a single "automation" bot for unattended robotic process automation (runs independently of a user) or a critical business process via UI-based digital process automation.',
                'Can alternatively license a core, top-level business process (e.g., HR onboarding) for org-wide access without per-user licensing.',
                'Per Power Platform Licensing Guide April 2026: $150 per bot/month (billed annually) — per environment/month; one license allows the bot or process to be used in a single environment, and an additional license is required if the same bot or process is deployed in another environment.',
                'Includes Dataverse use rights: 50 MB Database and 200 MB File accrued per license.'
            ]
        }
    ],
    'power-pages': [
        {
            tier: 'Authenticated T1',
            label: 'Entry Tier',
            features: [
                'Licenses authenticated visitors who sign in through an identity provider (Microsoft Entra ID, social providers, B2C, SAML, OpenID, or custom).',
                'Each pack covers 100 logged-in users per site per month.',
                'Starter tier — no minimum pack commitment.',
                'Unrestricted use of Standard, Premium, and custom connectors.',
                'Full Dataverse access (including custom and complex tables); accrues 2 GB Database + 16 GB File capacity per pack.',
                'Managed Environments for administration and governance at scale.'
            ]
        },
        {
            tier: 'Authenticated T2',
            label: 'Volume Tier',
            features: [
                'Same entitlements as Authenticated T1 (100 logged-in users/site/month per pack) at a reduced per-pack price.',
                'Minimum purchase: 100 packs (= 10,000 authenticated users/site/month).',
                'Target use case: medium-to-large external portals with steady authenticated traffic.'
            ]
        },
        {
            tier: 'Authenticated T3',
            label: 'High-Volume Tier',
            features: [
                'Same entitlements as Authenticated T1 at the lowest per-pack price.',
                'Minimum purchase: 1,000 packs (= 100,000 authenticated users/site/month).',
                'Target use case: enterprise-scale external portals, partner/customer communities, and B2B marketplaces.'
            ]
        },
        {
            tier: 'Anonymous T1',
            label: 'Entry Tier',
            features: [
                'Licenses anonymous visitors who access sites without logging in.',
                'Each pack covers 500 anonymous users per site per month.',
                'Starter tier — no minimum pack commitment.',
                'Unrestricted use of Standard, Premium, and custom connectors.',
                'Full Dataverse access (including custom and complex tables); accrues 500 MB Database + 4 GB File capacity per pack.',
                'Managed Environments for administration and governance at scale.'
            ]
        },
        {
            tier: 'Anonymous T2',
            label: 'Volume Tier',
            features: [
                'Same entitlements as Anonymous T1 (500 anonymous users/site/month per pack) at a reduced per-pack price.',
                'Minimum purchase: 20 packs (= 10,000 anonymous users/site/month).',
                'Target use case: marketing sites, knowledge bases, and public-facing portals with moderate traffic.'
            ]
        },
        {
            tier: 'Anonymous T3',
            label: 'High-Volume Tier',
            features: [
                'Same entitlements as Anonymous T1 at the lowest per-pack price.',
                'Minimum purchase: 200 packs (= 100,000 anonymous users/site/month).',
                'Target use case: high-traffic public websites, self-service portals, and large-scale external landing pages.'
            ]
        }
    ],
    'copilot-studio': [
        {
            tier: 'Capacity Pack',
            label: 'Tenant License',
            features: [
                'Tenant-wide license sold in capacity packs of 25,000 Copilot Credits at $200/pack/month.',
                'Each agent action or response consumes a variable number of Copilot Credits depending on the operation.',
                'Available in two billing models with identical product features: Pre-Purchase Plan (prepaid Copilot Credit Commit Units chosen up front, save up to 20% vs. pay-as-you-go, automatic pay-as-you-go fallback when prepaid credits run out) and Pay-as-you-go (no upfront commitment, billed monthly for actual consumption).',
                'Azure subscription required to link the environment for billing (especially for pay-as-you-go).',
                'Full rights to build intelligent agents and bots with graphical low-code authoring; publish to external channels (websites, apps, social platforms) and allow non-licensed users to consume them.',
                'Includes Power Automate cloud flows (automated, instant, scheduled) with up to 250,000 Power Platform Requests per day at the tenant level.',
                'Cloud flows do not consume primary Copilot Studio message/credit capacity.',
                'Full access to Standard, Premium, and custom connectors; on-premises and cloud services data transfer.',
                'Full Dataverse use rights: 250 MB Database and 2 GB File capacity per license.',
                'Managed Environments for comprehensive administration and governance at scale.'
            ]
        }
    ],
    'sust-emissions': [
        {
            tier: 'Essentials',
            label: 'Base Level',
            features: [
                'Foundational carbon (Scope 1 & 2), water, and waste tracking with pre-built data models.',
                'Ingest activity data from on-premises, cloud, and IoT sources via out-of-the-box connectors.',
                'Built-in emission factor libraries and automated calculations aligned with GHG Protocol.',
                'Interactive analytics, scorecards, and ESG reporting dashboards.',
                'Goal setting and progress tracking against sustainability targets.'
            ]
        },
        {
            tier: 'Premium',
            label: '+ Adds to Essentials',
            features: [
                'Advanced Scope 3 emissions tracking across the full value chain (upstream and downstream categories).',
                'Product Carbon Footprint (PCF) calculation and sharing with suppliers and customers.',
                'Copilot in Sustainability Manager for natural-language insights, reporting, and data quality checks.',
                'ESG value chain management and supplier engagement workflows.',
                'Expanded data ingestion capacity and advanced analytics for complex ESG reporting mandates.'
            ]
        }
    ]
};

// Per-language override maps. Each file exports a structure mirroring
// LICENSE_DETAILS but only carries translated `label` and `features` fields
// (tier names, SKUs and acronyms remain English on purpose).
//
// The locale slices are loaded on demand via loadLicenseLanguage(lang) so the
// ~30 KB-per-locale modules are not bundled into the initial ProductView
// chunk. English visitors never download any of them; switching to e.g.
// French triggers a single 30 KB fetch instead of the 175 KB combined blob
// that the previous static-import setup shipped.
const LOCALE_OVERRIDES = {};

const loaders = {
    fr: () => import('./licenseDetails.fr.js').then((m) => m.LICENSE_DETAILS_FR),
    es: () => import('./licenseDetails.es.js').then((m) => m.LICENSE_DETAILS_ES),
    de: () => import('./licenseDetails.de.js').then((m) => m.LICENSE_DETAILS_DE),
    it: () => import('./licenseDetails.it.js').then((m) => m.LICENSE_DETAILS_IT),
    nl: () => import('./licenseDetails.nl.js').then((m) => m.LICENSE_DETAILS_NL),
    ar: () => import('./licenseDetails.ar.js').then((m) => m.LICENSE_DETAILS_AR),
};

const inFlight = new Map();

export function isLicenseLanguageLoaded(lang) {
    return lang === 'en' || Boolean(LOCALE_OVERRIDES[lang]);
}

export function loadLicenseLanguage(lang) {
    if (isLicenseLanguageLoaded(lang)) return Promise.resolve();
    if (!loaders[lang]) return Promise.resolve();
    let promise = inFlight.get(lang);
    if (!promise) {
        promise = loaders[lang]().then((overrides) => {
            LOCALE_OVERRIDES[lang] = overrides;
            inFlight.delete(lang);
        });
        inFlight.set(lang, promise);
    }
    return promise;
}

// Returns the license tier list for a product in the requested language.
// Per-tier behavior:
//   - tier name: always taken from English (intentional — official SKU name).
//   - label & features: taken from the locale override when present,
//     otherwise fall back to English so partial translations stay safe.
//
// Synchronous: callers that care about the localized version should await
// loadLicenseLanguage(lang) first; otherwise the English fallback is returned.
export function getLicenseDetails(productId, lang) {
    const base = LICENSE_DETAILS[productId];
    if (!base) return undefined;
    if (lang === 'en') return base;
    const overrides = LOCALE_OVERRIDES[lang]?.[productId];
    if (!overrides) return base;
    return base.map((tier, i) => {
        const o = overrides[i];
        if (!o) return tier;
        return {
            ...tier,
            label: o.label ?? tier.label,
            features: Array.isArray(o.features) && o.features.length === tier.features.length
                ? o.features.map((f, fi) => f ?? tier.features[fi])
                : tier.features,
        };
    });
}
