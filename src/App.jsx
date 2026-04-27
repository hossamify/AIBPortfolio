import React, { useState, useMemo, useCallback, useEffect, useRef, useDeferredValue, lazy, Suspense } from 'react';
import {
    Layers, ChevronLeft, ChevronRight, ArrowRight, ArrowLeft,
    Search, X, Menu, Languages, Sun, Moon
} from 'lucide-react';
import { getUI } from './i18n/ui.js';
import { languageOptionsList } from './i18n/languages.js';
import { getPortfolioData, loadLanguage, isLanguageLoaded } from './data/portfolio.js';
import { usePersistedState } from './hooks/usePersistedState.js';
import Sidebar from './components/Sidebar.jsx';
import HomeView from './components/HomeView.jsx';
import Spinner from './components/Spinner.jsx';

// Route-level views are code-split: only HomeView is in the initial bundle.
// CategoryView/ProductView/SearchResults/AgentsView (and the heavy data they
// pull in: pricing.js, licenseDetails.*.js, agentsTranslations.js, all 17
// BusinessValue*.jsx modules) load on demand the first time the user
// navigates to them.
const CategoryView = lazy(() => import('./components/CategoryView.jsx'));
const ProductView = lazy(() => import('./components/ProductView.jsx'));
const SearchResults = lazy(() => import('./components/SearchResults.jsx'));
const AgentsView = lazy(() => import('./components/AgentsView.jsx'));

// Hover/focus prefetch helpers — kick off the dynamic import early so the
// chunk is already in the browser cache by the time the user actually clicks.
// Awaiting the import is unnecessary; we only care about the side effect of
// fetching, and React.lazy will reuse the in-flight promise when the
// component is rendered.
const prefetchCategory = () => { import('./components/CategoryView.jsx'); };
const prefetchProduct = () => { import('./components/ProductView.jsx'); };
const prefetchSearch = () => { import('./components/SearchResults.jsx'); };

export default function App() {
    const [lang, setLang] = useState('en');
    // Always boots in English: only the English translation slice is in the
    // initial bundle. If a non-English preference is persisted, the mount
    // effect below loads its slice and switches to it (one English flash).
    // Store only the IDs of the active category/product. The fully-resolved
    // nodes are derived below from `mappedPortfolio` via useMemo so that, when
    // the language changes, children receive freshly-built nodes built for the
    // current language. Storing the objects directly would keep stale references
    // built for the previous language and crash on the first post-switch render.
    const [activeCategoryId, setActiveCategoryId] = useState(null);
    const [activeProductId, setActiveProductId] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    // Defer the value used by the (lazy) SearchResults view so each keystroke
    // updates the input immediately while the heavy filter render happens at a
    // lower priority. Cheap to add and noticeable on slower devices.
    const deferredSearchQuery = useDeferredValue(searchQuery);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [selectedTier, setSelectedTier] = useState(null);
    // Default to light mode regardless of system preference; users can opt into dark via the toggle.
    const [theme, setTheme] = usePersistedState('theme', 'light', (v) => v === 'light' || v === 'dark');

    const isDark = theme === 'dark';
    const toggleTheme = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), [setTheme]);

    const isRtl = lang === 'ar';
    const ChevronForward = useMemo(() => (isRtl ? ChevronLeft : ChevronRight), [isRtl]);
    const ArrowBack = useMemo(() => (isRtl ? ArrowRight : ArrowLeft), [isRtl]);

    // Keep <html lang> and <html dir> in sync with the active language for screen readers and CSS.
    useEffect(() => {
        document.documentElement.lang = lang;
        document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
        try { window.localStorage.setItem('lang', lang); } catch { /* ignore */ }
    }, [lang, isRtl]);
    // On first mount, honour any persisted non-English language preference by
    // dynamically loading its translation slice and then switching to it. This
    // avoids shipping every locale in the initial bundle while still preserving
    // the user's language across reloads.
    useEffect(() => {
        let cancelled = false;
        try {
            const stored = window.localStorage.getItem('lang');
            if (!stored || stored === 'en') return undefined;
            if (!languageOptionsList.some((l) => l.code === stored)) return undefined;
            loadLanguage(stored).then(() => {
                if (!cancelled) setLang(stored);
            });
        } catch { /* ignore — fall back to English */ }
        return () => { cancelled = true; };
    }, []);

    // Apply dark class on <html>; persistence is handled by usePersistedState.
    useEffect(() => {
        const root = document.documentElement;
        if (isDark) root.classList.add('dark');
        else root.classList.remove('dark');
    }, [isDark]);

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

    // Derive the active category/product synchronously from the current
    // language tree. This guarantees the node passed to children always has a
    // `locales[lang]` slot for the active language, even on the very first
    // render after `setLang(...)`.
    const activeCategory = useMemo(
        () => (activeCategoryId ? mappedPortfolio.find((c) => c.id === activeCategoryId) || null : null),
        [mappedPortfolio, activeCategoryId]
    );
    const activeProduct = useMemo(
        () => (activeCategory && activeProductId ? activeCategory.products?.find((p) => p.id === activeProductId) || null : null),
        [activeCategory, activeProductId]
    );

    const handleBack = useCallback(() => {
        if (activeProductId) { setActiveProductId(null); setSelectedTier(null); }
        else if (activeCategoryId) setActiveCategoryId(null);
    }, [activeProductId, activeCategoryId]);

    const navigateTo = useCallback((category, product = null) => {
        setActiveCategoryId(category ? category.id : null);
        setActiveProductId(product ? product.id : null);
        setSearchQuery('');
        setMobileMenuOpen(false);
        setSelectedTier(null);
    }, []);

    const openMobileMenu = useCallback(() => setMobileMenuOpen(true), []);
    const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);
    const clearSearch = useCallback(() => setSearchQuery(''), []);
    const onSearchChange = useCallback((e) => setSearchQuery(e.target.value), []);
    const onLangChange = useCallback((e) => {
        const next = e.target.value;
        if (next === lang) return;
        // Synchronously switch when the slice is already in memory; otherwise
        // dynamic-import it first so the portfolio tree never renders against
        // an empty/English-fallback slice.
        if (isLanguageLoaded(next)) {
            setLang(next);
        } else {
            loadLanguage(next).then(() => setLang(next));
        }
    }, [lang]);

    const sidebarProps = useMemo(
        () => ({ lang, isRtl, activeCategory, activeProduct, searchQuery, mappedPortfolio, navigateTo, prefetchCategory }),
        [lang, isRtl, activeCategory, activeProduct, searchQuery, mappedPortfolio, navigateTo]
    );

    const mainContent = useMemo(() => {
        if (searchQuery) {
            return <SearchResults lang={lang} searchQuery={deferredSearchQuery} mappedPortfolio={mappedPortfolio} navigateTo={navigateTo} />;
        }
        if (activeProduct) {
            return <ProductView key={activeProduct.id} lang={lang} isRtl={isRtl} activeCategory={activeCategory} activeProduct={activeProduct} selectedTier={selectedTier} setSelectedTier={setSelectedTier} />;
        }
        if (activeCategory) {
            if (activeCategory.id === 'ai-agents') {
                return <AgentsView lang={lang} isRtl={isRtl} activeCategory={activeCategory} />;
            }
            return <CategoryView lang={lang} isRtl={isRtl} activeCategory={activeCategory} navigateTo={navigateTo} ChevronForward={ChevronForward} prefetchProduct={prefetchProduct} />;
        }
        return <HomeView lang={lang} isRtl={isRtl} mappedPortfolio={mappedPortfolio} navigateTo={navigateTo} ChevronForward={ChevronForward} />;
    }, [searchQuery, deferredSearchQuery, activeProduct, activeCategory, lang, isRtl, mappedPortfolio, navigateTo, selectedTier, ChevronForward]);

    const headerTitle = useMemo(() => {
        if (searchQuery) return getUI('searchResults', lang);
        if (activeProduct) return activeProduct.name || '';
        if (activeCategory) return activeCategory.name || '';
        return getUI('home', lang);
    }, [searchQuery, activeProduct, activeCategory, lang]);

    return (
        <div dir={isRtl ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-50/50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 flex overflow-hidden selection:bg-blue-200 selection:text-blue-900 dark:selection:bg-blue-700 dark:selection:text-blue-50 font-sans">

            <aside aria-label={getUI('aria_mainNav', lang)} className={`w-[300px] shrink-0 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 flex-col shadow-[rgba(0,0,0,0.02)_4px_0_24px] z-20 hidden lg:flex ${isRtl ? 'border-l' : 'border-r'}`}>
                <Sidebar {...sidebarProps} />
            </aside>

            {mobileMenuOpen && (
                <button type="button" aria-label={getUI('aria_closeMenu', lang)} className="fixed inset-0 bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm z-40 lg:hidden cursor-default" onClick={closeMobileMenu}></button>
            )}

            <aside ref={mobileDrawerRef} role="dialog" aria-modal={mobileMenuOpen} aria-hidden={!mobileMenuOpen} inert={!mobileMenuOpen} aria-label={getUI('aria_mobileNav', lang)} className={`fixed inset-y-0 ${isRtl ? 'right-0' : 'left-0'} w-4/5 max-w-sm bg-white dark:bg-slate-900 shadow-2xl z-50 transform transition-transform duration-300 motion-reduce:transition-none flex flex-col lg:hidden ${mobileMenuOpen ? 'translate-x-0' : (isRtl ? 'translate-x-full' : '-translate-x-full')}`}>
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
                                onFocus={prefetchSearch}
                                placeholder={getUI('searchPlaceholder', lang)}
                                aria-label={getUI('aria_search', lang)}
                                className={`w-full bg-slate-100 dark:bg-slate-800 border border-transparent rounded-xl py-2.5 text-sm font-medium focus:bg-white dark:focus:bg-slate-900 focus:border-blue-300 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-500/30 outline-none transition-all placeholder-slate-600 dark:placeholder-slate-300 ${isRtl ? 'pr-10 pl-9' : 'pl-10 pr-9'}`}
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

                <main aria-label={getUI('aria_mainContent', lang)} className="flex-1 overflow-y-auto p-5 md:p-8 scroll-smooth pb-24">
                    <Suspense fallback={<Spinner className="max-w-6xl mx-auto py-24 flex items-center justify-center text-sm font-medium text-slate-500 dark:text-slate-400" />}>
                        {mainContent}
                    </Suspense>
                </main>
            </div>
        </div>
    );
}
