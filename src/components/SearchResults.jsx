import React from 'react';
import { Search } from 'lucide-react';
import { getUI } from '../i18n/ui.js';

export default function SearchResults({ lang, searchQuery, mappedPortfolio, navigateTo }) {
        const allProducts = mappedPortfolio.flatMap((cat) =>
            cat.products.map((p) => ({ ...p, category: cat }))
        );

        const results = allProducts.filter((p) => {
            const lp = p.locales[lang];
            const lc = p.category.locales[lang];
            const term = searchQuery.toLowerCase();
            return (
                lp.name.toLowerCase().includes(term) ||
                lp.shortDesc.toLowerCase().includes(term) ||
                lc.name.toLowerCase().includes(term) ||
                lp.capabilities.some((c) => c.toLowerCase().includes(term))
            );
        });

        return (
            <div className="max-w-7xl mx-auto">
                <div className="mb-10 pb-6 border-b border-slate-200">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800">
                        {getUI('searchResults', lang)} <span className="text-blue-600">"{searchQuery}"</span>
                    </h2>
                    <p className="text-slate-500 mt-2 font-medium">{getUI('found', lang)} {results.length} {getUI('itemsMatching', lang)}</p>
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
                                    onClick={() => navigateTo(product.category, product)}
                                    className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all cursor-pointer group flex flex-col h-full text-start"
                                >
                                    <div className={`p-3.5 rounded-2xl inline-block mb-5 w-max ${product.category.theme.badgeBg} ${product.category.theme.iconColor}`}>
                                        <ProductIcon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{localeProd.name}</h3>
                                    <p className="text-slate-600 text-sm line-clamp-2 mb-6 flex-grow font-medium">{localeProd.shortDesc}</p>
                                    <div className={`mt-auto text-xs font-bold px-3 py-1.5 rounded-lg inline-block w-max ${product.category.theme.bg} ${product.category.theme.text}`}>
                                        {getUI('partOf', lang)} {localeCat.name}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 shadow-sm max-w-2xl mx-auto">
                        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Search size={32} className="text-slate-300" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-700 mb-2">{getUI('noResults', lang)}</h3>
                        <p className="text-base text-slate-500 font-medium">{getUI('checkSpelling', lang)}</p>
                    </div>
                )}
            </div>
        );
}
