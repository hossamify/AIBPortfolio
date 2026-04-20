import React from 'react';
import { Layout, Blocks, Database, Plug, Link as LinkIcon, BrainCircuit } from 'lucide-react';
import { getUI } from '../i18n/ui.js';

export default function HomeView({ lang, isRtl, mappedPortfolio, navigateTo, ChevronForward }) {
    return (
        <div className="max-w-6xl mx-auto space-y-10 opacity-100 transition-opacity duration-500">

            <div className="text-center space-y-5 pt-6">
                <div className="inline-flex items-center justify-center p-3 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 rounded-2xl mb-2">
                    <Layout size={32} />
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight">
                    {getUI('heroTitle', lang)}
                </h1>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                    {getUI('heroDesc', lang)}
                </p>
            </div>

            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2rem] p-8 md:p-10 shadow-2xl text-white relative overflow-hidden mt-8 mb-12">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1 text-center md:text-start">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-white/10 text-blue-200">
                            <Blocks size={14} /> {getUI('coreFoundation', lang)}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black mb-5 leading-tight text-white">
                            {getUI('unifiedTitle', lang)}
                        </h2>
                        <div className="space-y-4 text-slate-300 font-medium">
                            <p className="flex items-start gap-3 text-start">
                                <Database className="shrink-0 mt-1 text-blue-400" size={20} />
                                <span>{getUI('unifiedDesc1', lang)}</span>
                            </p>
                            <p className="flex items-start gap-3 text-start">
                                <Plug className="shrink-0 mt-1 text-teal-400" size={20} />
                                <span>{getUI('unifiedDesc2', lang)}</span>
                            </p>
                            <p className="flex items-start gap-3 text-start">
                                <LinkIcon className="shrink-0 mt-1 text-purple-400" size={20} />
                                <span>{getUI('unifiedDesc3', lang)}</span>
                            </p>
                        </div>
                    </div>
                    <div className="hidden lg:flex w-72 shrink-0 justify-center items-center">
                        <div className="relative w-48 h-48">
                            <div className="absolute inset-0 border-4 border-dashed border-white/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
                            <div className="absolute inset-4 bg-white/5 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                                <BrainCircuit size={64} className="text-blue-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {mappedPortfolio.map((cat) => {
                    const CatIcon = cat.icon;
                    const localeCat = cat.locales[lang];
                    return (
                        <div
                            key={cat.id}
                            role="button"
                            tabIndex={0}
                            onClick={() => navigateTo(cat)}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigateTo(cat); } }}
                            className={`group relative bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-1 flex flex-col h-full focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 focus-visible:outline-none`}
                        >
                            <div className={`absolute top-0 ${isRtl ? 'right-0 rounded-bl-full' : 'left-0 rounded-br-full'} w-32 h-32 opacity-[0.04] ${cat.theme.bg} transition-transform duration-500 group-hover:scale-125`}></div>
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shrink-0 ${cat.theme.bg} ${cat.theme.iconColor} shadow-inner relative z-10`}>
                                <CatIcon size={28} strokeWidth={2} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 leading-tight relative z-10">{localeCat.name}</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-snug mb-6 text-sm font-medium flex-grow relative z-10">{localeCat.description}</p>
                            <div className={`flex items-center gap-2 text-sm font-bold mt-auto relative z-10 ${cat.theme.text} group-hover:gap-3 transition-all`}>
                                <span>{getUI('exploreProducts', lang)}</span>
                                <ChevronForward size={16} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
