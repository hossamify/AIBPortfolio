import React from 'react';
import { Home } from 'lucide-react';
import { getUI } from '../i18n/ui.js';

export default function Sidebar({ lang, isRtl, activeCategory, activeProduct, searchQuery, mappedPortfolio, navigateTo }) {
    return (
        <>
            <div className="p-6 border-b border-slate-100 bg-white">
                <h1 className="font-black text-slate-900 flex items-center gap-2 whitespace-nowrap">
                    <span className="flex items-center gap-1 shrink-0">
                        <img src="/icons/Dynamics365_scalable.svg" alt="Dynamics 365" className="w-6 h-6" />
                        <img src="/icons/PowerPlatform_scalable.svg" alt="Power Platform" className="w-6 h-6" />
                    </span>
                    <span className="leading-tight text-lg">{getUI('appTitle', lang)}</span>
                </h1>
                <p className="text-xs text-slate-500 mt-2 font-medium">{getUI('appSubtitle', lang)}</p>
            </div>
            <nav className="flex-1 overflow-y-auto p-4 space-y-2 bg-white">
                <button
                    onClick={() => navigateTo(null)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${!activeCategory && !activeProduct && !searchQuery
                        ? 'bg-slate-800 text-white font-bold shadow-md'
                        : 'hover:bg-slate-50 text-slate-700 font-semibold'
                        }`}
                >
                    <Home size={20} />
                    <span>{getUI('home', lang)}</span>
                </button>

                <div className="pt-4 pb-2">
                    <p className={`text-[10px] font-bold text-slate-400 tracking-wider px-4 ${isRtl ? '' : 'uppercase'}`}>{getUI('mainCategories', lang)}</p>
                </div>

                {mappedPortfolio.map((cat) => {
                    const CatIcon = cat.icon;
                    const localeCat = cat.locales[lang];
                    return (
                        <button
                            key={cat.id}
                            onClick={() => navigateTo(cat)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-start ${activeCategory?.id === cat.id && !activeProduct && !searchQuery
                                ? cat.theme.bg + ' ' + cat.theme.text + ' font-bold shadow-sm ring-1 ring-inset ' + cat.theme.ring
                                : 'hover:bg-slate-50 text-slate-700 font-semibold text-sm'
                                }`}
                        >
                            <CatIcon size={20} className={`shrink-0 ${activeCategory?.id === cat.id && !activeProduct && !searchQuery ? cat.theme.iconColor : 'text-slate-400'}`} />
                            <span className="line-clamp-2 leading-tight">{localeCat.name}</span>
                        </button>
                    )
                })}
            </nav>
            <div className="p-4 border-t border-slate-100 bg-white text-[10px] text-slate-400 leading-relaxed">
                <p>
                    Made by{' '}
                    <a
                        href="https://www.linkedin.com/in/hossamahmarrass/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 font-semibold transition-colors"
                    >
                        Hossam Ahmar-Rass
                    </a>
                </p>
                <p className="mt-1">Updated for May 2026</p>
            </div>
        </>
    );
}
