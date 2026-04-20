import React from 'react';
import { Users, Link as LinkIcon, CheckCircle, DollarSign, Tag, Info, ExternalLink, PlayCircle } from 'lucide-react';
import { getUI } from '../i18n/ui.js';
import { PRICING, getLocalizedPrice } from '../data/pricing.js';
import { getLicenseDetails } from '../data/licenseDetails.js';
import CdmSchemaVisual from './CdmSchemaVisual.jsx';

// Official Microsoft product page per product id. Used to make the product icon
// and title in the header act as deep links to the corresponding microsoft.com page.
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

// Microsoft guided/click-through tour path segments per product id. The full
// URL is composed at render time from the active language so the user lands on
// the localized walkthrough when one is published. Italian falls back to en-us
// because Microsoft does not publish an it-it variant for these tours.
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

const buildDemoUrl = (productId, lang) => {
    const path = DEMO_PATHS[productId];
    if (!path) return null;
    const locale = DEMO_LOCALES[lang] || 'en-us';
    return `https://guidedtour.microsoft.com/${locale}/guidedtour/${path}/1/1`;
};

export default function ProductView({ lang, isRtl, activeCategory, activeProduct, mappedPortfolio, selectedTier, setSelectedTier }) {
        if (!activeProduct || !activeCategory) return null;
        const catData = mappedPortfolio.find(c => c.id === activeCategory.id);
        const prodData = catData.products.find(p => p.id === activeProduct.id);
        const ProductIcon = prodData.icon;
        const localeProd = prodData.locales[lang];
        const localeCat = catData.locales[lang];
        const pricing = PRICING[prodData.id];
        const licenseDetails = getLicenseDetails(prodData.id, lang);
        const hasLicenseDetails = licenseDetails && licenseDetails.length > 0;
        const productUrl = PRODUCT_URLS[prodData.id];
        const demoUrl = buildDemoUrl(prodData.id, lang);

        return (
            <div className="max-w-6xl mx-auto bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden opacity-100 transition-opacity duration-500">
                <div className={`p-8 md:p-12 border-b border-slate-100 dark:border-slate-800 ${catData.theme.bg} relative overflow-hidden`}>
                    <div className={`relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 text-center ${isRtl ? 'md:text-right' : 'md:text-left'}`}>
                        {productUrl ? (
                            <a
                                href={productUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={`${localeProd.name} — microsoft.com`}
                                className={`p-5 rounded-[2rem] bg-white dark:bg-slate-900 shadow-md shrink-0 ${catData.theme.iconColor} transition-transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${catData.theme.ring}`}
                            >
                                <ProductIcon size={56} strokeWidth={1.5} />
                            </a>
                        ) : (
                            <div className={`p-5 rounded-[2rem] bg-white dark:bg-slate-900 shadow-md shrink-0 ${catData.theme.iconColor}`}>
                                <ProductIcon size={56} strokeWidth={1.5} />
                            </div>
                        )}
                        <div>
                            <div className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-4 bg-white/60 dark:bg-slate-900/60 shadow-sm backdrop-blur-sm ${catData.theme.text}`}>
                                {getUI('partOf', lang)} {localeCat.name}
                            </div>
                            <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-slate-100 mb-4 leading-tight">
                                {productUrl ? (
                                    <a
                                        href={productUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title={`${localeProd.name} — microsoft.com`}
                                        className={`inline-flex items-center gap-2 hover:underline decoration-2 underline-offset-4 ${catData.theme.text.replace('text-', 'hover:text-')} transition-colors`}
                                    >
                                        <span>{localeProd.name}</span>
                                        <ExternalLink size={20} strokeWidth={2.25} className="opacity-60 shrink-0" />
                                    </a>
                                ) : (
                                    localeProd.name
                                )}
                            </h1>
                            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed font-medium">{localeProd.shortDesc}</p>
                            {demoUrl && (
                                <a
                                    href={demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`mt-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 text-sm font-bold ${catData.theme.text} hover:shadow-md hover:scale-[1.02] transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${catData.theme.ring}`}
                                >
                                    <PlayCircle size={18} strokeWidth={2.25} />
                                    <span>{getUI('guidedTour', lang)}</span>
                                    <ExternalLink size={14} strokeWidth={2.25} className="opacity-60" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                <div className="p-8 md:p-12 space-y-10 bg-slate-50/30 dark:bg-slate-900/30">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                        <div className="lg:col-span-8">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-5 flex items-center gap-3">
                                <CheckCircle className={catData.theme.iconColor} size={22} />
                                {getUI('capabilities', lang)}
                            </h3>
                            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 text-start">
                                <ul className="space-y-3">
                                    {localeProd.capabilities.map((cap, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className={`shrink-0 text-base leading-relaxed ${catData.theme.ring.replace('ring-', 'text-')}`}>•</span>
                                            <span className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-medium">{cap}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="lg:col-span-4">
                            <div className={`lg:sticky lg:top-8 ${catData.theme.bg} rounded-2xl border ${catData.theme.border} p-6 text-start relative overflow-hidden`}>
                                <div className={`absolute -bottom-6 ${isRtl ? '-left-6' : '-right-6'} w-24 h-24 rounded-full opacity-10 ${catData.theme.ring.replace('ring-', 'bg-')}`}></div>
                                <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/80 dark:bg-slate-900/70 ${catData.theme.iconColor} mb-4 shadow-sm`}>
                                    <Users size={22} />
                                </div>
                                <h3 className={`text-lg font-bold ${catData.theme.text} mb-4`}>{getUI('targetAudience', lang)}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {localeProd.targetAudience.split(/[,،、·]+/).map((persona, i) => (
                                        <span key={i} className={`inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-bold bg-white/90 dark:bg-slate-900/70 text-slate-800 dark:text-slate-200 shadow-sm border border-white dark:border-slate-700`}>
                                            {persona.trim()}
                                        </span>
                                    ))}
                                </div>
                                {localeProd.architecture && (
                                    <div className="mt-5 pt-4 border-t border-white/50 dark:border-slate-700/50 relative z-10">
                                        <h4 className={`text-xs font-bold ${catData.theme.text} mb-2 uppercase tracking-wider`}>{getUI('architecture', lang)}</h4>
                                        <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-medium">{localeProd.architecture}</p>
                                    </div>
                                )}
                                {localeProd.integrations && (
                                    <div className="mt-5 pt-4 border-t border-white/50 dark:border-slate-700/50 relative z-10">
                                        <h4 className={`text-xs font-bold ${catData.theme.text} mb-3 uppercase tracking-wider`}>{getUI('integrations', lang)}</h4>
                                        <div className="flex flex-wrap gap-1.5">
                                            {localeProd.integrations.split(/[,،、·]+/).map((intg, i) => (
                                                <span key={i} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-white/70 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border border-white/80 dark:border-slate-700/70">
                                                    <LinkIcon size={10} className="shrink-0" />
                                                    {intg.trim()}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {prodData.id === 'dataverse-cdm' && (
                        <CdmSchemaVisual lang={lang} />
                    )}

                    {PRICING[prodData.id] && (
                        <section>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-3">
                                <DollarSign className={catData.theme.iconColor} size={26} />
                                {getUI('pricing', lang)}
                            </h3>

                            {PRICING[prodData.id].model === 'end-of-sale' ? (
                                <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-2xl p-6 flex items-center gap-4 text-start">
                                    <Tag size={24} className="text-amber-600 dark:text-amber-400 shrink-0" />
                                    <div>
                                        <p className="font-bold text-amber-800 dark:text-amber-200 text-lg">{getUI('endOfSale', lang)}</p>
                                        <p className="text-amber-700 dark:text-amber-300 text-sm mt-1 font-medium">
                                            {lang === 'en' ? 'This product has reached end of sale as a standalone capacity add-on.' : getUI('endOfSale', lang)}
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {(() => {
                                        const allTiers = PRICING[prodData.id].tiers;
                                        const isBaseAttach = PRICING[prodData.id].model === 'base-attach';

                                        const renderTierCard = (tier, i) => {
                                            const tierUnit = tier.unit || PRICING[prodData.id].unit;
                                            const isSelected = selectedTier === i;
                                            const interactiveProps = hasLicenseDetails
                                                ? {
                                                    role: 'button',
                                                    tabIndex: 0,
                                                    onClick: () => setSelectedTier(isSelected ? null : i),
                                                    onKeyDown: (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelectedTier(isSelected ? null : i); } }
                                                }
                                                : {};
                                            return (
                                                <div key={i} {...interactiveProps} className={`bg-white dark:bg-slate-900 border rounded-2xl p-6 shadow-sm transition-all duration-200 text-start ${hasLicenseDetails ? 'cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 focus-visible:outline-none' : ''} ${isSelected ? 'border-2 ' + catData.theme.border + ' ring-2 ring-inset ' + catData.theme.ring + ' scale-[1.02] shadow-lg' : 'border-slate-200 dark:border-slate-800 hover:shadow-md'}`}>
                                                    <div className="flex items-center justify-between gap-2 mb-3">
                                                        <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{tier.name}</p>
                                                        {tier.sku && (
                                                            <span className="font-mono text-[10px] font-bold tracking-wide px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 shrink-0">{tier.sku}</span>
                                                        )}
                                                    </div>
                                                    {isBaseAttach ? (
                                                        <div className="space-y-3">
                                                            {(() => {
                                                                const basePrice = getLocalizedPrice(tier.sku, tier.base, lang);
                                                                return (
                                                                    <div>
                                                                        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">{getUI('pricingBase', lang)}</span>
                                                                        <p className="text-3xl font-black text-slate-900 dark:text-slate-100">
                                                                            <span className="text-lg align-top text-slate-500 dark:text-slate-400">{basePrice.symbol}</span>{basePrice.amount.toLocaleString()}
                                                                            <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">{getUI(tierUnit, lang)}</span>
                                                                        </p>
                                                                    </div>
                                                                );
                                                            })()}
                                                            {tier.attach != null && (
                                                                <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                                                                    <div className="flex items-center justify-between gap-2">
                                                                        <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">{getUI('pricingAttach', lang)}</span>
                                                                        {tier.attachSku && (
                                                                            <span className="font-mono text-[10px] font-bold tracking-wide px-1.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 shrink-0">{tier.attachSku}</span>
                                                                        )}
                                                                    </div>
                                                                    {(() => {
                                                                        const attachPrice = getLocalizedPrice(tier.attachSku, tier.attach, lang);
                                                                        return (
                                                                            <p className="text-2xl font-black text-emerald-700 dark:text-emerald-300">
                                                                                <span className="text-base align-top text-emerald-600 dark:text-emerald-400">{attachPrice.symbol}</span>{attachPrice.amount.toLocaleString()}
                                                                                <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">{getUI(tierUnit, lang)}</span>
                                                                            </p>
                                                                        );
                                                                    })()}
                                                                    {tier.attachQualifiers && (
                                                                        <div className="mt-3">
                                                                            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">{getUI('attachQualifiers', lang)}</p>
                                                                            <div className="flex flex-wrap gap-0.5">
                                                                                    {tier.attachQualifiers.map((q, qi) => (
                                                                                        <span key={qi} className="inline-flex items-center px-1.5 py-px rounded text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                                                                                            {q}
                                                                                        </span>
                                                                                    ))}
                                                                                </div>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            )}
                                                        </div>
                                                    ) : (
                                                        (() => {
                                                            const standalonePrice = getLocalizedPrice(tier.sku, tier.price, lang);
                                                            return (
                                                                <div>
                                                                    <p className="text-3xl font-black text-slate-900 dark:text-slate-100">
                                                                        <span className="text-lg align-top text-slate-500 dark:text-slate-400">{standalonePrice.symbol}</span>{standalonePrice.amount.toLocaleString()}
                                                                        <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">{tier.label ? ` ${tier.label}` : getUI(tierUnit, lang)}</span>
                                                                    </p>
                                                                </div>
                                                            );
                                                        })()
                                                    )}
                                                </div>
                                            );
                                        };

                                        const detailsPanel = hasLicenseDetails && selectedTier !== null ? (
                                            <div className="space-y-4 pt-2">
                                                {(PRICING[prodData.id].independent || PRICING[prodData.id].tiers[selectedTier]?.independent
                                                    ? [licenseDetails[selectedTier]].filter(Boolean).map((d) => ({ detail: d, idx: selectedTier }))
                                                    : licenseDetails.slice(0, selectedTier + 1).map((d, idx) => ({ detail: d, idx }))
                                                ).map(({ detail, idx }) => (
                                                    <div key={idx} className={`rounded-2xl border p-6 text-start transition-all duration-300 ${
                                                        idx === selectedTier
                                                            ? catData.theme.bg + ' border-2 ' + catData.theme.border + ' shadow-md'
                                                            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
                                                    }`}>
                                                        <div className="flex items-center gap-2 mb-4">
                                                            <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg ${
                                                                PRICING[prodData.id].independent || PRICING[prodData.id].tiers[selectedTier]?.independent
                                                                    ? 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                                                                    : (idx === 0
                                                                        ? 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                                                                        : 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300')
                                                            }`}>{detail.label}</span>
                                                            <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{detail.tier}</span>
                                                        </div>
                                                        <ul className="space-y-2">
                                                            {detail.features.map((feat, fi) => (
                                                                <li key={fi} className="flex items-start gap-2.5">
                                                                    <CheckCircle size={15} className={`mt-0.5 shrink-0 ${
                                                                        idx === selectedTier ? catData.theme.iconColor : 'text-slate-500 dark:text-slate-400'
                                                                    }`} />
                                                                    <span className={`text-sm leading-relaxed font-medium ${
                                                                        idx === selectedTier ? 'text-slate-800 dark:text-slate-200' : 'text-slate-600 dark:text-slate-400'
                                                                    }`}>{feat}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : null;

                                        // Split tiers into "primary" (non-independent) and "independent" groups.
                                        // For products like d365-cs (3 + 3) we render two grids so the details
                                        // panel can appear directly under the group of the selected tier.
                                        // For products like d365-field (1 primary + 1 independent) we keep a single
                                        // row in the natural data order (e.g. Field Service on the left, Field
                                        // Service Contractor on the right).
                                        const primaryTiers = allTiers.map((t, i) => ({ tier: t, idx: i })).filter(x => !x.tier.independent);
                                        const independentTiers = allTiers.map((t, i) => ({ tier: t, idx: i })).filter(x => x.tier.independent);
                                        const hasBothGroups = primaryTiers.length > 0 && independentTiers.length > 0;
                                        const shouldSplitGroups = hasBothGroups && primaryTiers.length >= 2 && independentTiers.length >= 2;

                                        if (!shouldSplitGroups) {
                                            return (
                                                <>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                                        {allTiers.map((t, i) => renderTierCard(t, i))}
                                                    </div>
                                                    {detailsPanel}
                                                </>
                                            );
                                        }

                                        const selectedIsIndependent = selectedTier !== null && allTiers[selectedTier]?.independent;
                                        return (
                                            <>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                                    {primaryTiers.map(({ tier, idx }) => renderTierCard(tier, idx))}
                                                </div>
                                                {selectedTier !== null && !selectedIsIndependent && detailsPanel}
                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                                    {independentTiers.map(({ tier, idx }) => renderTierCard(tier, idx))}
                                                </div>
                                                {selectedTier !== null && selectedIsIndependent && detailsPanel}
                                            </>
                                        );
                                    })()}

                                    {PRICING[prodData.id].note && (
                                        <div className="bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 rounded-2xl p-5 flex items-start gap-3 text-start">
                                            <Info aria-hidden="true" size={18} className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                                            <p className="text-blue-800 dark:text-blue-200 text-sm font-medium leading-relaxed">
                                                {PRICING[prodData.id].note[lang] || PRICING[prodData.id].note['en']}
                                            </p>
                                        </div>
                                    )}

                                    {PRICING[prodData.id].addOns && PRICING[prodData.id].addOns.map((addOn) => (
                                        <div key={addOn.id} className="space-y-3 pt-2 text-start">
                                            <h4 className={`text-sm font-bold uppercase tracking-wider ${catData.theme.text}`}>
                                                {addOn.label[lang] || addOn.label['en']}
                                            </h4>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                                {addOn.tiers.map((t, i) => {
                                                    const meterName = addOn.meter[lang] || addOn.meter['en'];
                                                    const rangeLabel = t.rangeTo === null || t.rangeTo === undefined
                                                        ? `${getUI('moreThan', lang)} ${t.rangeFrom.toLocaleString('en-US')}`
                                                        : `${t.rangeFrom.toLocaleString('en-US')}–${t.rangeTo.toLocaleString('en-US')}`;
                                                    return (
                                                        <div key={i} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm transition-all flex flex-col">
                                                            <div className="flex items-center justify-between mb-3">
                                                                <span className={`text-xs font-extrabold px-2.5 py-1 rounded-lg ${catData.theme.bg} ${catData.theme.text}`}>{t.tier}</span>
                                                                {t.sku ? (
                                                                    <span className="font-mono text-[10px] font-bold tracking-wide px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800">{t.sku}</span>
                                                                ) : (
                                                                    <Users aria-hidden="true" size={14} className="text-slate-500 dark:text-slate-400" />
                                                                )}
                                                            </div>
                                                            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">{getUI('tierRange', lang)}</p>
                                                            <p className="text-base font-extrabold text-slate-900 dark:text-slate-100 leading-tight">{rangeLabel}</p>
                                                            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">{meterName}</p>
                                                            <div className={`rounded-lg px-3 py-2 mb-3 ${catData.theme.bg}`}>
                                                                <p className={`text-[11px] font-bold uppercase tracking-wider ${catData.theme.text} opacity-70`}>{getUI('soldInPacksOf', lang)}</p>
                                                                <p className={`text-sm font-extrabold ${catData.theme.text}`}>
                                                                    {t.packSize.toLocaleString('en-US')} <span className="font-semibold opacity-80">{meterName}</span>
                                                                </p>
                                                            </div>
                                                            <div className="mt-auto pt-3 border-t border-slate-100 dark:border-slate-800">
                                                                {(() => {
                                                                    const packPrice = getLocalizedPrice(t.sku, t.price, lang);
                                                                    return (
                                                                        <div className="flex items-baseline gap-1">
                                                                            <span className="text-lg font-black text-slate-900 dark:text-slate-100">{packPrice.symbol}{packPrice.amount.toLocaleString('en-US')}</span>
                                                                            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{getUI(addOn.unit || PRICING[prodData.id].unit, lang)}</span>
                                                                        </div>
                                                                    );
                                                                })()}
                                                                <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5">{getUI('paidYearly', lang)}</p>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </section>
                    )}
                </div>
            </div>
        );
}
