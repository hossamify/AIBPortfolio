import React from 'react';
import { Search, Bot } from 'lucide-react';
import { getUI } from '../i18n/ui.js';
import { AGENT_GROUPS, AGENT_CATEGORIES } from '../data/agentsData.js';
import { getAgentDescription, getExtraName, getExtraDescription } from '../data/agentsTranslations.js';

// Returns true if any of the provided strings (after coercion) contains `term`.
const matchesAny = (term, ...values) =>
    values.some((v) => {
        if (!v) return false;
        if (Array.isArray(v)) return v.some((x) => typeof x === 'string' && x.toLowerCase().includes(term));
        return typeof v === 'string' && v.toLowerCase().includes(term);
    });

export default function SearchResults({ lang, searchQuery, mappedPortfolio, navigateTo }) {
        const term = searchQuery.toLowerCase();

        const allProducts = mappedPortfolio.flatMap((cat) =>
            cat.products.map((p) => ({ ...p, category: cat }))
        );

        const results = allProducts.filter((p) => {
            const lp = p.locales[lang];
            const lc = p.category.locales[lang];
            return matchesAny(
                term,
                lp.name,
                lp.shortDesc,
                lc.name,
                lp.capabilities,
                lp.targetAudience,
                lp.integrations
            );
        });

        // AI Capabilities pillar (rendered by AgentsView, not as standard product
        // cards in mappedPortfolio). We surface its agents and the MCP extras
        // banner here so the search bar reflects the full content of the app.
        const aiAgentsCategory = mappedPortfolio.find((c) => c.id === 'ai-agents');

        // Flatten agents from AGENT_GROUPS, matching against English source
        // (name, description, productName) plus the localized description overlay.
        const agentResults = aiAgentsCategory
            ? AGENT_GROUPS.flatMap((group) =>
                group.agents
                    .filter((a) => matchesAny(
                        term,
                        a.name,
                        a.description,
                        getAgentDescription(a.id, lang),
                        group.productName
                    ))
                    .map((a) => ({
                        kind: 'agent',
                        id: a.id,
                        name: a.name,
                        description: getAgentDescription(a.id, lang) || a.description,
                        productName: group.productName,
                        icon: group.icon || group.fallbackIcon || Bot
                    }))
            )
            : [];

        // Category-wide extras (e.g. the MCP servers banner under ERP).
        const extraResults = aiAgentsCategory
            ? AGENT_CATEGORIES.flatMap((cat) =>
                (cat.extras || [])
                    .filter((e) => matchesAny(
                        term,
                        e.name,
                        e.description,
                        getExtraName(e.id, lang),
                        getExtraDescription(e.id, lang)
                    ))
                    .map((e) => ({
                        kind: 'extra',
                        id: e.id,
                        name: getExtraName(e.id, lang) || e.name,
                        description: getExtraDescription(e.id, lang) || e.description,
                        productName: getUI(cat.labelKey, lang),
                        icon: Bot
                    }))
            )
            : [];

        const aiResults = [...agentResults, ...extraResults];
        const totalCount = results.length + aiResults.length;

        return (
            <div className="max-w-7xl mx-auto">
                <div className="mb-10 pb-6 border-b border-slate-200 dark:border-slate-800">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 dark:text-slate-200">
                        {getUI('searchResults', lang)} <span className="text-blue-600 dark:text-blue-400">"{searchQuery}"</span>
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">{getUI('found', lang)} {totalCount} {getUI('itemsMatching', lang)}</p>
                </div>

                {results.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {results.map((product) => {
                            const ProductIcon = product.icon;
                            const localeProd = product.locales[lang];
                            const localeCat = product.category.locales[lang];
                            return (
                                <div
                                    key={product.id}
                                    role="button"
                                    tabIndex={0}
                                    onClick={() => navigateTo(product.category, product)}
                                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigateTo(product.category, product); } }}
                                    className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all cursor-pointer group flex flex-col h-full text-start focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 focus-visible:outline-none"
                                >
                                    <div className={`p-3.5 rounded-2xl inline-block mb-5 w-max ${product.category.theme.badgeBg} ${product.category.theme.iconColor}`}>
                                        <ProductIcon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">{localeProd.name}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 mb-6 flex-grow font-medium">{localeProd.shortDesc}</p>
                                    <div className={`mt-auto text-xs font-bold px-3 py-1.5 rounded-lg inline-block w-max ${product.category.theme.bg} ${product.category.theme.text}`}>
                                        {getUI('partOf', lang)} {localeCat.name}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                ) : null}

                {aiResults.length > 0 && aiAgentsCategory && (
                    <div className={results.length > 0 ? 'mt-10' : ''}>
                        <h3 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-200 mb-5 tracking-tight">
                            {aiAgentsCategory.locales[lang].name}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {aiResults.map((item) => {
                                const ItemIcon = item.icon;
                                return (
                                    <div
                                        key={item.kind + ':' + item.id}
                                        role="button"
                                        tabIndex={0}
                                        onClick={() => navigateTo(aiAgentsCategory)}
                                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigateTo(aiAgentsCategory); } }}
                                        className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all cursor-pointer group flex flex-col h-full text-start focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 focus-visible:outline-none"
                                    >
                                        <div className={`p-3.5 rounded-2xl inline-block mb-5 w-max ${aiAgentsCategory.theme.badgeBg} ${aiAgentsCategory.theme.iconColor}`}>
                                            <ItemIcon size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">{item.name}</h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 mb-6 flex-grow font-medium">{item.description}</p>
                                        <div className={`mt-auto text-xs font-bold px-3 py-1.5 rounded-lg inline-block w-max ${aiAgentsCategory.theme.bg} ${aiAgentsCategory.theme.text}`}>
                                            {getUI('partOf', lang)} {item.productName}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {totalCount === 0 && (
                    <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm max-w-2xl mx-auto">
                        <div className="w-20 h-20 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Search aria-hidden="true" size={32} className="text-slate-400 dark:text-slate-500" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-2">{getUI('noResults', lang)}</h3>
                        <p className="text-base text-slate-500 dark:text-slate-400 font-medium">{getUI('checkSpelling', lang)}</p>
                    </div>
                )}
            </div>
        );
}
