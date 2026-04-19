import React from 'react';
import { Tag, DollarSign } from 'lucide-react';
import { getUI } from '../i18n/ui.js';
import { PRICING, getLocalizedPrice } from '../data/pricing.js';

export default function CategoryView({ lang, isRtl, activeCategory, mappedPortfolio, navigateTo, ChevronForward }) {
        if (!activeCategory) return null;
        const catData = mappedPortfolio.find(c => c.id === activeCategory.id);
        const ActiveCatIcon = catData.icon;
        const localeCat = catData.locales[lang];
        return (
            <div className="max-w-7xl mx-auto opacity-100 transition-opacity duration-500">
                <div className={`mb-10 p-8 md:p-12 rounded-[2.5rem] ${catData.theme.bg} flex flex-col md:flex-row items-center md:items-start gap-8 relative overflow-hidden shadow-sm border border-white`}>
                    <div className={`absolute top-0 ${isRtl ? 'left-0 bg-gradient-to-tr' : 'right-0 bg-gradient-to-tl'} w-full h-full opacity-30 from-white to-transparent pointer-events-none`}></div>
                    <div className={`p-5 rounded-3xl bg-white shadow-md shrink-0 relative z-10 ${catData.theme.iconColor}`}>
                        <ActiveCatIcon size={48} strokeWidth={1.5} />
                    </div>
                    <div className={`text-center relative z-10 ${isRtl ? 'md:text-right' : 'md:text-left'}`}>
                        <h1 className={`text-3xl md:text-4xl font-extrabold mb-4 ${catData.theme.text}`}>{localeCat.name}</h1>
                        <p className="text-slate-700 text-lg md:text-xl max-w-3xl leading-relaxed font-medium">{localeCat.description}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {catData.products.map((product) => {
                        const ProductIcon = product.icon;
                        const localeProd = product.locales[lang];
                        return (
                            <div
                                key={product.id}
                                onClick={() => navigateTo(catData, product)}
                                className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 cursor-pointer group flex flex-col h-full"
                            >
                                <div className="flex items-start justify-between mb-5">
                                    <div className={`p-3.5 rounded-2xl ${catData.theme.badgeBg} ${catData.theme.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                                        <ProductIcon size={24} />
                                    </div>
                                    <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-slate-400 hover:text-slate-600 bg-slate-50 p-2 rounded-full">
                                        <ChevronForward size={18} />
                                    </button>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{localeProd.name}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 flex-grow font-medium">{localeProd.shortDesc}</p>
                                {PRICING[product.id] && (
                                    <div className="mt-4 pt-4 border-t border-slate-100">
                                        {PRICING[product.id].model === 'end-of-sale' ? (
                                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1.5 rounded-lg">
                                                <Tag size={12} /> {getUI('endOfSale', lang)}
                                            </span>
                                        ) : (
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <DollarSign size={14} className="text-emerald-600 shrink-0" />
                                                <span className="text-sm font-bold text-emerald-700">
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
                            </div>
                        )
                    })}
                </div>
            </div>
        );
}
