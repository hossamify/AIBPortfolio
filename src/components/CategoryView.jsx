import React from 'react';
import { Tag, DollarSign } from 'lucide-react';
import { getUI } from '../i18n/ui.js';
import { PRICING, getLocalizedPrice } from '../data/pricing.js';

export default function CategoryView({ lang, isRtl, activeCategory, navigateTo, ChevronForward, prefetchProduct }) {
        if (!activeCategory) return null;
        // activeCategory comes from the freshly-built mappedPortfolio in App.jsx
        // and now exposes flat localized fields directly (no locales[lang] wrapper).
        const catData = activeCategory;
        const ActiveCatIcon = catData.icon;
        return (
            <div className="max-w-7xl mx-auto opacity-100 transition-opacity duration-500">
                <div className={`mb-10 p-8 md:p-12 rounded-[2.5rem] ${catData.theme.bg} flex flex-col md:flex-row items-center md:items-start gap-8 relative overflow-hidden shadow-sm border border-white dark:border-slate-700`}>
                    <div className={`absolute top-0 ${isRtl ? 'left-0 bg-gradient-to-tr' : 'right-0 bg-gradient-to-tl'} w-full h-full opacity-30 dark:opacity-0 from-white to-transparent pointer-events-none`}></div>
                    <div className={`p-5 rounded-3xl bg-white dark:bg-slate-900 shadow-md shrink-0 relative z-10 ${catData.theme.iconColor}`}>
                        <ActiveCatIcon size={48} strokeWidth={1.5} />
                    </div>
                    <div className={`text-center relative z-10 ${isRtl ? 'md:text-right' : 'md:text-left'}`}>
                        <h1 className={`text-3xl md:text-4xl font-extrabold mb-4 ${catData.theme.text}`}>{catData.name}</h1>
                        <p className="text-slate-700 dark:text-slate-300 text-lg md:text-xl max-w-3xl leading-relaxed font-medium">{catData.description}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {catData.products.map((product) => {
                        const ProductIcon = product.icon;
                        return (
                            <button
                                key={product.id}
                                type="button"
                                onClick={() => navigateTo(catData, product)}
                                onMouseEnter={prefetchProduct}
                                onFocus={prefetchProduct}
                                className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 cursor-pointer group flex flex-col h-full text-start focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 focus-visible:outline-none"
                            >
                                <div className="flex items-start justify-between mb-5">
                                    <div className={`p-3.5 rounded-2xl ${catData.theme.badgeBg} ${catData.theme.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                                        <ProductIcon size={24} />
                                    </div>
                                    <span aria-hidden="true" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-slate-500 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 p-2 rounded-full">
                                        <ChevronForward size={18} />
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">{product.name}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3 flex-grow font-medium">{product.shortDesc}</p>
                                {PRICING[product.id] && (
                                    <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                                        {PRICING[product.id].model === 'end-of-sale' ? (
                                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 px-3 py-1.5 rounded-lg">
                                                <Tag size={12} /> {getUI('endOfSale', lang)}
                                            </span>
                                        ) : (
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <DollarSign size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                                                <span className="text-sm font-bold text-emerald-700 dark:text-emerald-300">
                                                    {(() => {
                                                        const t0 = PRICING[product.id].tiers[0];
                                                        const usd = t0.base ?? t0.price;
                                                        const { amount, symbol } = getLocalizedPrice(t0.sku, usd, lang);
                                                        return `${getUI('fromPrice', lang)} ${symbol}${amount.toLocaleString()}${getUI(PRICING[product.id].unit, lang)}`;
                                                    })()}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </button>
                        )
                    })}
                </div>
            </div>
        );
}
