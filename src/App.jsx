import React, { useState, useMemo, useCallback } from 'react';
import {
    Layers, ChevronLeft, ChevronRight, ArrowRight, ArrowLeft,
    Search, X, Menu, Languages
} from 'lucide-react';
import { getUI } from './i18n/ui.js';
import { languageOptionsList } from './i18n/languages.js';
import { getPortfolioData } from './data/portfolio.js';
import Sidebar from './components/Sidebar.jsx';
import HomeView from './components/HomeView.jsx';
import CategoryView from './components/CategoryView.jsx';
import ProductView from './components/ProductView.jsx';
import SearchResults from './components/SearchResults.jsx';

export default function App() {
    const [lang, setLang] = useState('en');
    const [activeCategory, setActiveCategory] = useState(null);
    const [activeProduct, setActiveProduct] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [selectedTier, setSelectedTier] = useState(null);

    const isRtl = lang === 'ar';
    const ChevronForward = useMemo(() => (isRtl ? ChevronLeft : ChevronRight), [isRtl]);
    const ArrowBack = useMemo(() => (isRtl ? ArrowRight : ArrowLeft), [isRtl]);

    // Memoize portfolio tree to avoid rebuilding it on every render; only rebuild when language changes.
    const mappedPortfolio = useMemo(() => getPortfolioData(lang), [lang]);

    const handleBack = useCallback(() => {
        if (activeProduct) { setActiveProduct(null); setSelectedTier(null); }
        else if (activeCategory) setActiveCategory(null);
    }, [activeProduct, activeCategory]);

    const navigateTo = useCallback((category, product = null) => {
        setActiveCategory(category);
        setActiveProduct(product);
        setSearchQuery('');
        setMobileMenuOpen(false);
        setSelectedTier(null);
    }, []);

    const openMobileMenu = useCallback(() => setMobileMenuOpen(true), []);
    const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);
    const clearSearch = useCallback(() => setSearchQuery(''), []);
    const onSearchChange = useCallback((e) => setSearchQuery(e.target.value), []);
    const onLangChange = useCallback((e) => setLang(e.target.value), []);

    const sidebarProps = useMemo(
        () => ({ lang, isRtl, activeCategory, activeProduct, searchQuery, mappedPortfolio, navigateTo }),
        [lang, isRtl, activeCategory, activeProduct, searchQuery, mappedPortfolio, navigateTo]
    );

    const mainContent = useMemo(() => {
        if (searchQuery) {
            return <SearchResults lang={lang} searchQuery={searchQuery} mappedPortfolio={mappedPortfolio} navigateTo={navigateTo} />;
        }
        if (activeProduct) {
            return <ProductView lang={lang} isRtl={isRtl} activeCategory={activeCategory} activeProduct={activeProduct} mappedPortfolio={mappedPortfolio} selectedTier={selectedTier} setSelectedTier={setSelectedTier} />;
        }
        if (activeCategory) {
            return <CategoryView lang={lang} isRtl={isRtl} activeCategory={activeCategory} mappedPortfolio={mappedPortfolio} navigateTo={navigateTo} ChevronForward={ChevronForward} />;
        }
        return <HomeView lang={lang} isRtl={isRtl} mappedPortfolio={mappedPortfolio} navigateTo={navigateTo} ChevronForward={ChevronForward} />;
    }, [searchQuery, activeProduct, activeCategory, lang, isRtl, mappedPortfolio, navigateTo, selectedTier, ChevronForward]);

    const localizedName = (node) => node?.locales?.[lang]?.name || node?.locales?.en?.name || '';

    const headerTitle = useMemo(() => {
        if (searchQuery) return getUI('searchResults', lang);
        if (activeProduct) return localizedName(activeProduct);
        if (activeCategory) return localizedName(activeCategory);
        return getUI('home', lang);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchQuery, activeProduct, activeCategory, lang]);

    return (
        <div dir={isRtl ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-50/50 text-slate-800 flex overflow-hidden selection:bg-blue-200 selection:text-blue-900 font-sans">

            <aside className={`w-[300px] shrink-0 bg-white border-slate-200 flex-col shadow-[rgba(0,0,0,0.02)_4px_0_24px] z-20 hidden lg:flex ${isRtl ? 'border-l' : 'border-r'}`}>
                <Sidebar {...sidebarProps} />
            </aside>

            {mobileMenuOpen && (
                <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden" onClick={closeMobileMenu}></div>
            )}

            <aside className={`fixed inset-y-0 ${isRtl ? 'right-0' : 'left-0'} w-4/5 max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300 flex flex-col lg:hidden ${mobileMenuOpen ? 'translate-x-0' : (isRtl ? 'translate-x-full' : '-translate-x-full')}`}>
                <button onClick={closeMobileMenu} className={`absolute top-5 p-2 bg-slate-100 rounded-full text-slate-600 ${isRtl ? 'left-5' : 'right-5'}`}>
                    <X size={20} />
                </button>
                <Sidebar {...sidebarProps} />
            </aside>

            <div className="flex-1 flex flex-col h-screen overflow-hidden relative min-w-0">
                <div className="lg:hidden bg-white border-b border-slate-200 px-5 py-4 flex items-center justify-between sticky top-0 z-30 shadow-sm">
                    <div className="flex items-center gap-3">
                        <Layers className="text-blue-600" size={24} />
                        <span className="font-extrabold text-lg text-slate-900 truncate">{getUI('appTitle', lang)}</span>
                    </div>
                    <button onClick={openMobileMenu} className="p-2 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors">
                        <Menu size={24} className="text-slate-700" />
                    </button>
                </div>

                <header className="bg-white/80 backdrop-blur-xl border-b border-slate-200 sticky top-[64px] lg:top-0 z-10 px-5 md:px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3 overflow-hidden">
                        {(activeCategory || activeProduct) && !searchQuery && (
                            <button onClick={handleBack} className="p-2 bg-slate-50 hover:bg-slate-100 rounded-full transition-all group shrink-0">
                                <ArrowBack size={20} className="text-slate-600 group-hover:text-slate-900" />
                            </button>
                        )}
                        <h2 className="text-lg md:text-xl font-bold text-slate-800 tracking-tight truncate hidden sm:block">
                            {headerTitle}
                        </h2>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <div className="relative flex-1 sm:w-64 lg:w-80">
                            <Search size={18} className={`absolute top-[13px] text-slate-400 ${isRtl ? 'right-3.5' : 'left-3.5'}`} />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={onSearchChange}
                                placeholder={getUI('searchPlaceholder', lang)}
                                className={`w-full bg-slate-100 border border-transparent rounded-xl py-2.5 text-sm font-medium focus:bg-white focus:border-blue-300 focus:ring-4 focus:ring-blue-100 outline-none transition-all placeholder-slate-400 ${isRtl ? 'pr-10 pl-9' : 'pl-10 pr-9'}`}
                            />
                            {searchQuery && (
                                <button onClick={clearSearch} className={`absolute top-[13px] text-slate-400 hover:text-slate-600 ${isRtl ? 'left-3.5' : 'right-3.5'}`}>
                                    <X size={16} />
                                </button>
                            )}
                        </div>

                        <div className="flex items-center bg-slate-100 p-1.5 rounded-xl border border-slate-200 shrink-0 hover:bg-slate-200 transition-colors">
                            <Languages size={16} className={`text-slate-600 ${isRtl ? 'ml-1.5' : 'mr-1.5'}`} />
                            <select
                                value={lang}
                                onChange={onLangChange}
                                className="bg-transparent border-none text-xs font-normal text-slate-700 focus:ring-0 cursor-pointer outline-none appearance-none pr-1"
                            >
                                {languageOptionsList.map((lng) => (
                                    <option key={lng.code} value={lng.code}>{lng.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto p-5 md:p-8 scroll-smooth pb-24">
                    {mainContent}
                </main>
            </div>
        </div>
    );
}
