import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import {
    Layers, ChevronLeft, ChevronRight, ArrowRight, ArrowLeft,
    Search, X, Menu, Languages, Sun, Moon
} from 'lucide-react';
import { getUI } from './i18n/ui.js';
import { languageOptionsList } from './i18n/languages.js';
import { getPortfolioData } from './data/portfolio.js';
import Sidebar from './components/Sidebar.jsx';
import HomeView from './components/HomeView.jsx';
import CategoryView from './components/CategoryView.jsx';
import ProductView from './components/ProductView.jsx';
import SearchResults from './components/SearchResults.jsx';
import AgentsView from './components/AgentsView.jsx';

export default function App() {
    const [lang, setLang] = useState(() => {
        if (typeof window === 'undefined') return 'en';
        const stored = window.localStorage.getItem('lang');
        // Only honour stored value if it matches one of the supported language codes.
        if (stored && languageOptionsList.some((l) => l.code === stored)) return stored;
        return 'en';
    });
    const [activeCategory, setActiveCategory] = useState(null);
    const [activeProduct, setActiveProduct] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [selectedTier, setSelectedTier] = useState(null);
    const [theme, setTheme] = useState(() => {
        if (typeof window === 'undefined') return 'light';
        const stored = window.localStorage.getItem('theme');
        if (stored === 'light' || stored === 'dark') return stored;
        // Default to light mode regardless of system preference; users can opt into dark via the toggle.
        return 'light';
    });

    const isDark = theme === 'dark';
    const toggleTheme = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), []);

    const isRtl = lang === 'ar';
    const ChevronForward = useMemo(() => (isRtl ? ChevronLeft : ChevronRight), [isRtl]);
    const ArrowBack = useMemo(() => (isRtl ? ArrowRight : ArrowLeft), [isRtl]);

    // Keep <html lang> and <html dir> in sync with the active language for screen readers and CSS.
    useEffect(() => {
        document.documentElement.lang = lang;
        document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
        try { window.localStorage.setItem('lang', lang); } catch { /* ignore */ }
    }, [lang, isRtl]);

    // Apply dark class on <html> and persist preference.
    useEffect(() => {
        const root = document.documentElement;
        if (isDark) root.classList.add('dark');
        else root.classList.remove('dark');
        try { window.localStorage.setItem('theme', theme); } catch { /* ignore */ }
    }, [isDark, theme]);

    // Refs for the mobile drawer: one for the dialog itself (focus trap + inert),
    // one to remember which element opened it so focus can return on close.
    const mobileDrawerRef = useRef(null);
    const lastFocusedBeforeDrawer = useRef(null);

    // Manage Escape-to-close, focus trap, and focus restoration for the mobile drawer.
    useEffect(() => {
        if (!mobileMenuOpen) return undefined;
        lastFocusedBeforeDrawer.current = document.activeElement;
        const drawer = mobileDrawerRef.current;
        const focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

        // Move focus into the drawer (first focusable element) for keyboard/AT users.
        const focusables = drawer ? drawer.querySelectorAll(focusableSelector) : [];
        if (focusables.length > 0) focusables[0].focus();

        const onKeyDown = (e) => {
            if (e.key === 'Escape') {
                e.preventDefault();
                setMobileMenuOpen(false);
                return;
            }
            if (e.key !== 'Tab' || !drawer) return;
            const items = drawer.querySelectorAll(focusableSelector);
            if (items.length === 0) return;
            const first = items[0];
            const last = items[items.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
            // Restore focus to whichever control opened the drawer.
            const prev = lastFocusedBeforeDrawer.current;
            if (prev && typeof prev.focus === 'function') prev.focus();
        };
    }, [mobileMenuOpen]);

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
            if (activeCategory.id === 'ai-agents') {
                return <AgentsView lang={lang} isRtl={isRtl} activeCategory={activeCategory} />;
            }
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
        <div dir={isRtl ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-50/50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 flex overflow-hidden selection:bg-blue-200 selection:text-blue-900 dark:selection:bg-blue-700 dark:selection:text-blue-50 font-sans">

            <aside aria-label={getUI('aria_mainNav', lang)} className={`w-[300px] shrink-0 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 flex-col shadow-[rgba(0,0,0,0.02)_4px_0_24px] z-20 hidden lg:flex ${isRtl ? 'border-l' : 'border-r'}`}>
                <Sidebar {...sidebarProps} />
            </aside>

            {mobileMenuOpen && (
                <button type="button" aria-label={getUI('aria_closeMenu', lang)} className="fixed inset-0 bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm z-40 lg:hidden cursor-default" onClick={closeMobileMenu}></button>
            )}

            <aside ref={mobileDrawerRef} role="dialog" aria-modal={mobileMenuOpen || undefined} aria-hidden={!mobileMenuOpen} inert={mobileMenuOpen ? undefined : ''} aria-label={getUI('aria_mobileNav', lang)} className={`fixed inset-y-0 ${isRtl ? 'right-0' : 'left-0'} w-4/5 max-w-sm bg-white dark:bg-slate-900 shadow-2xl z-50 transform transition-transform duration-300 motion-reduce:transition-none flex flex-col lg:hidden ${mobileMenuOpen ? 'translate-x-0' : (isRtl ? 'translate-x-full' : '-translate-x-full')}`}>
                <button type="button" onClick={closeMobileMenu} aria-label={getUI('aria_closeMenu', lang)} className={`absolute top-5 p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 focus-visible:outline-none ${isRtl ? 'left-5' : 'right-5'}`}>
                    <X size={20} />
                </button>
                <Sidebar {...sidebarProps} />
            </aside>

            <div className="flex-1 flex flex-col h-screen overflow-hidden relative min-w-0">
                <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-5 py-4 flex items-center justify-between sticky top-0 z-30 shadow-sm">
                    <div className="flex items-center gap-3">
                        <Layers className="text-blue-600 dark:text-blue-400" size={24} />
                        <span className="font-extrabold text-lg text-slate-900 dark:text-slate-100 truncate">{getUI('appTitle', lang)}</span>
                    </div>
                    <button onClick={openMobileMenu} aria-label={getUI('aria_openMenu', lang)} className="p-2 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 focus-visible:outline-none">
                        <Menu size={24} className="text-slate-700 dark:text-slate-300" />
                    </button>
                </div>

                <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 sticky top-[64px] lg:top-0 z-10 px-5 md:px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3 overflow-hidden">
                        {(activeCategory || activeProduct) && !searchQuery && (
                            <button type="button" onClick={handleBack} aria-label={getUI('aria_back', lang)} className="p-2 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-all group shrink-0 focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 focus-visible:outline-none">
                                <ArrowBack size={20} className="text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-100" />
                            </button>
                        )}
                        {/* Visual-only echo of the page title; the real <h1> lives inside each view to avoid duplicate headings being announced by screen readers. */}
                        <span aria-hidden="true" className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-200 tracking-tight truncate hidden sm:block">
                            {headerTitle}
                        </span>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <div className="relative flex-1 sm:w-64 lg:w-80">
                            <Search aria-hidden="true" size={18} className={`absolute top-[13px] text-slate-500 dark:text-slate-400 ${isRtl ? 'right-3.5' : 'left-3.5'}`} />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={onSearchChange}
                                placeholder={getUI('searchPlaceholder', lang)}
                                aria-label={getUI('aria_search', lang)}
                                className={`w-full bg-slate-100 dark:bg-slate-800 border border-transparent rounded-xl py-2.5 text-sm font-medium focus:bg-white dark:focus:bg-slate-900 focus:border-blue-300 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-500/30 outline-none transition-all placeholder-slate-500 dark:placeholder-slate-400 ${isRtl ? 'pr-10 pl-9' : 'pl-10 pr-9'}`}
                            />
                            {searchQuery && (
                                <button onClick={clearSearch} aria-label={getUI('aria_clearSearch', lang)} className={`absolute top-[13px] text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 rounded focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 focus-visible:outline-none ${isRtl ? 'left-3.5' : 'right-3.5'}`}>
                                    <X size={16} />
                                </button>
                            )}
                        </div>

                        <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 shrink-0 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                            <Languages aria-hidden="true" size={16} className={`text-slate-600 dark:text-slate-300 ${isRtl ? 'ml-1.5' : 'mr-1.5'}`} />
                            <select
                                value={lang}
                                onChange={onLangChange}
                                aria-label={getUI('aria_languageSelect', lang)}
                                className="bg-transparent border-none text-xs font-normal text-slate-700 dark:text-slate-200 focus:ring-0 cursor-pointer outline-none appearance-none pr-1 dark:[color-scheme:dark]"
                            >
                                {languageOptionsList.map((lng) => (
                                    <option key={lng.code} value={lng.code} className="bg-white text-slate-700 dark:bg-slate-800 dark:text-slate-100">{lng.label}</option>
                                ))}
                            </select>
                        </div>

                        <button
                            type="button"
                            onClick={toggleTheme}
                            aria-label={getUI(isDark ? 'aria_themeToLight' : 'aria_themeToDark', lang)}
                            aria-pressed={isDark}
                            className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors shrink-0 text-slate-700 dark:text-slate-200 focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 focus-visible:outline-none"
                        >
                            {isDark ? <Sun size={16} /> : <Moon size={16} />}
                        </button>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto p-5 md:p-8 scroll-smooth pb-24">
                    {mainContent}
                </main>
            </div>
        </div>
    );
}
