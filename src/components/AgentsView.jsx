import React, { useState } from 'react';
import { Bot, ExternalLink, Film, Play, Sparkles } from 'lucide-react';
import { getUI } from '../i18n/ui.js';
import { AGENT_CATEGORIES, getAgentGroup } from '../data/agentsData.js';
import {
    getAgentDescription,
    getExtraName,
    getExtraDescription,
    getChapterTitle,
    getChapterDesc
} from '../data/agentsTranslations.js';

// Featured walkthrough video shown above the agent catalog. Chapter
// timestamps link back to the exact moment on YouTube.
const FEATURED_VIDEO_ID = '4Z6GYYoBm98';
// Use the privacy-enhanced (no-cookie) host. It also avoids the noisy
// "Failed to execute 'query' on 'Permissions': Illegal invocation" log
// that the standard YouTube player triggers in Chromium browsers.
const FEATURED_VIDEO_EMBED = `https://www.youtube-nocookie.com/embed/${FEATURED_VIDEO_ID}?si=uNUjXc5FG6GsZ8GF&autoplay=1`;
// Lightweight poster served by YouTube's CDN — used to defer loading the
// ~1 MB player bundle until the user actually clicks play.
const FEATURED_VIDEO_POSTER = `https://i.ytimg.com/vi/${FEATURED_VIDEO_ID}/hqdefault.jpg`;
const FEATURED_VIDEO_CHAPTERS = [
    {
        product: 'Dynamics 365 Sales',
        accent: 'rose',
        items: [
            { t: '02:50', s: 170, title: 'AI Agents for Sellers', desc: 'Introduction of AI agents designed to take over time-consuming administrative tasks, giving sellers time back to build relationships.' },
            { t: '03:37', s: 217, title: 'Sales Development Agent', desc: 'Automatically researches new leads (like event attendees), reaches out proactively, qualifies them, and seamlessly hands them off to the sales team once they are ready for a meeting.' },
            { t: '04:13', s: 253, title: 'Sales Close Agent', desc: 'Automated assistant that researches accounts, identifies key stakeholders, surfaces potential risks, and suggests relevant talking points to help close deals.' },
            { t: '08:46', s: 526, title: 'Conversational Pipeline Insights', desc: 'Sales Operations Managers can use plain language to ask questions about pipeline health, conversion trends, and emerging risks without having to pull complex reports.' }
        ]
    },
    {
        product: 'Dynamics 365 Customer Service & Contact Center',
        accent: 'teal',
        items: [
            { t: '10:36', s: 636, title: 'Proactive Customer Service', desc: 'Shift from reactive support to proactive engagement, letting the system anticipate customer needs and reach out first.' },
            { t: '11:40', s: 700, title: 'Supervisor Operational Insights', desc: 'AI agents spot emerging risks early — workload imbalances, misconfigurations, skill mismatches — and suggest actions like adjusting staffing.' },
            { t: '13:35', s: 815, title: 'Proactive Engagement AI Agent', desc: "Instantly detects a customer's intent from their messages and offers immediate, accurate responses (e.g., clarifying coverage details) without human intervention." },
            { t: '14:26', s: 866, title: 'Case Management Agent', desc: 'When an issue is escalated to a human rep, this agent has already created the case and captured key details so the representative has full context immediately.' },
            { t: '14:41', s: 881, title: 'Customer Intent Agent', desc: 'Surfaces relevant policy details, suggested next steps, and external knowledge via Copilot Studio to help live agents answer questions confidently.' },
            { t: '15:32', s: 932, title: 'Quality Evaluation Agent', desc: 'Consolidates team performance views for supervisors and automatically generates case-by-case evaluations with quality scores and reasoning.' }
        ]
    },
    {
        product: 'Dynamics 365 Supply Chain, Commerce & Finance',
        accent: 'indigo',
        items: [
            { t: '19:59', s: 1199, title: 'Agentic ERP & Demand Planning', desc: 'Integrates historical sales performance and market insights to deliver highly accurate, forward-looking demand forecasts, especially for seasonal transitions.' },
            { t: '21:17', s: 1277, title: 'Intelligent Inventory On-Hand Balancing', desc: 'Uses AI-driven forecasts to generate warehouse work orders that move specific items to optimal picking locations before a demand peak hits.' },
            { t: '21:46', s: 1306, title: 'Advanced Warehouse Picking Route Optimization', desc: 'Intelligently groups and sequences orders to minimize walking time and congestion within massive warehouses.' },
            { t: '22:35', s: 1355, title: 'B2B Multi-Outlet Commerce', desc: 'Unified purchasing experience where buyers can view and order for multiple authorized locations from a single sign-on.' },
            { t: '23:12', s: 1392, title: 'Commerce MCP Server Integration', desc: 'Deploys custom intelligent agents directly into Microsoft Teams to help call center employees quickly place compliant orders with full account context.' },
            { t: '24:21', s: 1461, title: 'Unified E-Invoicing Integration Framework', desc: 'Automatically generates and routes e-invoices across different countries without complex custom integrations, ensuring compliance with local regulations.' },
            { t: '25:22', s: 1522, title: 'AI-Powered Invoice Processing', desc: 'Automates the intake and matching of supplier invoices to purchase orders, increasing touchless processing rates.' },
            { t: '26:03', s: 1563, title: 'Account Reconciliation Agent', desc: "Automatically matches inventory movements with financial records, surfacing only the true exceptions that require a human's attention." }
        ]
    },
    {
        product: 'Dynamics 365 HR, Project Operations & Field Service',
        accent: 'purple',
        items: [
            { t: '27:48', s: 1668, title: 'LinkedIn HR Integration', desc: 'Allows talent acquisition teams to post job ads directly to boards like LinkedIn and manage recruiting workflows seamlessly.' },
            { t: '27:57', s: 1677, title: 'Onboarding Agent', desc: 'Embedded in Microsoft Teams, this agent automates document collection and role-specific training steps to bring new hires up to speed rapidly.' },
            { t: '30:11', s: 1811, title: 'Multi-Resource Booking (Project Operations)', desc: 'Resource managers can select and confirm multiple specialists at once from a schedule board, significantly speeding up project staffing.' },
            { t: '30:46', s: 1846, title: 'Automated Price Changes', desc: 'Automatically applies strategic rate updates and service bundle adjustments based on effective dates, ensuring pricing accuracy across client contracts.' },
            { t: '31:15', s: 1875, title: 'Timeline Staffing View', desc: 'Clear visual indicator of scheduled work versus bench time, helping leaders effectively reduce utilization volatility.' },
            { t: '32:11', s: 1931, title: 'Secure Agency Portal', desc: 'Replaces manual handoffs and guest access by bringing third-party recruitment agencies directly into enterprise workflows with role-based access.' },
            { t: '33:08', s: 1988, title: 'Mobile Note Control (Field Service)', desc: 'Allows field workers to easily capture text, images, and videos on the timeline without breaking their workflow.' },
            { t: '33:28', s: 2008, title: 'Scheduling Operations Agent', desc: 'Triggers ad-hoc optimization plans and allows scheduling adjustments directly from the board for constraint-driven field service environments.' }
        ]
    }
];

// Maps the lightweight `accent` string on each strategic category to a set
// of Tailwind classes. Listed literally so the JIT compiler keeps them.
const ACCENTS = {
    rose:   { bg: 'bg-rose-50 dark:bg-rose-950/40',   text: 'text-rose-700 dark:text-rose-300',   border: 'border-rose-200 dark:border-rose-800',   dot: 'bg-rose-500',   ring: 'ring-rose-500' },
    indigo: { bg: 'bg-indigo-50 dark:bg-indigo-950/40', text: 'text-indigo-700 dark:text-indigo-300', border: 'border-indigo-200 dark:border-indigo-800', dot: 'bg-indigo-500', ring: 'ring-indigo-500' },
    teal:   { bg: 'bg-teal-50 dark:bg-teal-950/40',   text: 'text-teal-700 dark:text-teal-300',   border: 'border-teal-200 dark:border-teal-800',   dot: 'bg-teal-500',   ring: 'ring-teal-500' },
    purple: { bg: 'bg-purple-50 dark:bg-purple-950/40', text: 'text-purple-700 dark:text-purple-300', border: 'border-purple-200 dark:border-purple-800', dot: 'bg-purple-500', ring: 'ring-purple-500' },
    green:  { bg: 'bg-green-50 dark:bg-green-950/40',  text: 'text-green-700 dark:text-green-300',  border: 'border-green-200 dark:border-green-800',  dot: 'bg-green-500',  ring: 'ring-green-500' }
};

// Tailwind safelist for the per-row column counts. Cards always collapse to
// 1 column on mobile and 2 columns on small screens; on large screens they
// expand to one column per product (capped at 4 to stay readable).
const COLS_LG = {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4'
};

// AgentsView renders the autonomous-agents pillar.
// Layout:
//   - Hero header (category title + description, rose theme).
//   - One section per Strategic Category (Customer Experience, ERP & Back
//     Office, ...). Each section lays out its products as columns; every
//     column shows the product header + a stack of agent cards.
export default function AgentsView({ lang, isRtl, activeCategory }) {
    const [videoPlaying, setVideoPlaying] = useState(false);

    if (!activeCategory) return null;

    const categoryName = activeCategory.locales?.[lang]?.name
        || activeCategory.locales?.en?.name
        || 'Autonomous Agents';
    const categoryDesc = activeCategory.locales?.[lang]?.description
        || activeCategory.locales?.en?.description
        || '';

    return (
        <div className="max-w-7xl mx-auto opacity-100 transition-opacity duration-500 space-y-10">
            {/* Hero header */}
            <div className="p-8 md:p-12 rounded-[2.5rem] bg-rose-50 dark:bg-rose-950/40 flex flex-col md:flex-row items-center md:items-start gap-8 relative overflow-hidden shadow-sm border border-white dark:border-slate-700">
                <div className={`absolute top-0 ${isRtl ? 'left-0 bg-gradient-to-tr' : 'right-0 bg-gradient-to-tl'} w-full h-full opacity-30 dark:opacity-0 from-white to-transparent pointer-events-none`}></div>
                <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 shadow-md shrink-0 relative z-10 text-rose-600 dark:text-rose-400">
                    <Bot size={48} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <div className={`text-center relative z-10 ${isRtl ? 'md:text-right' : 'md:text-left'}`}>
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-rose-700 dark:text-rose-300">{categoryName}</h1>
                    <p className="text-slate-700 dark:text-slate-300 text-lg md:text-xl max-w-3xl leading-relaxed font-medium">{categoryDesc}</p>
                </div>
            </div>

            {/* Featured walkthrough video with timestamped chapter deep-links */}
            <section className="rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm">
                <header className="flex items-center gap-4 px-6 md:px-8 py-5 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                    <span className="p-2 rounded-xl bg-white dark:bg-slate-900 shadow-sm text-rose-600 dark:text-rose-400 shrink-0">
                        <Film size={22} strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <div className="flex-1 min-w-0 text-start">
                        <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 dark:text-slate-200 leading-tight">
                            {getUI('videoSectionTitle', lang)}
                        </h2>
                        <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">{getUI('videoSectionSubtitle', lang)}</p>
                    </div>
                </header>
                <div className="p-5 md:p-6 grid grid-cols-1 lg:grid-cols-5 gap-6">
                    <div className="lg:col-span-3">
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-800 bg-slate-900">
                            {videoPlaying ? (
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src={FEATURED_VIDEO_EMBED}
                                    title={getUI('videoIframeTitle', lang)}
                                    allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                                    allowFullScreen
                                />
                            ) : (
                                <button
                                    type="button"
                                    onClick={() => setVideoPlaying(true)}
                                    aria-label={getUI('videoPlayAria', lang)}
                                    className="group absolute inset-0 w-full h-full focus:outline-none focus:ring-4 focus:ring-rose-400/60"
                                >
                                    <img
                                        src={FEATURED_VIDEO_POSTER}
                                        alt=""
                                        loading="lazy"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10"></span>
                                    <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
                                        <span className="flex items-center justify-center w-20 h-20 rounded-full bg-white/95 shadow-2xl text-rose-600 dark:text-rose-400 group-hover:scale-110 group-hover:bg-white dark:bg-slate-900 transition-all">
                                            <Play size={36} strokeWidth={2.5} fill="currentColor" className="ms-1" />
                                        </span>
                                    </span>
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="lg:col-span-2 space-y-5 lg:max-h-[560px] lg:overflow-y-auto lg:pe-2">
                        {FEATURED_VIDEO_CHAPTERS.map((group) => {
                            const a = ACCENTS[group.accent] || ACCENTS.rose;
                            return (
                                <div key={group.product}>
                                    <div className={`flex items-center gap-2 mb-2 ${a.text}`}>
                                        <span aria-hidden="true" className={`w-1.5 h-5 rounded-full ${a.dot}`}></span>
                                        <h3 className="text-sm font-extrabold leading-snug">{group.product}</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {group.items.map((it) => {
                                            const chTitle = getChapterTitle(it, lang);
                                            const chDesc = getChapterDesc(it, lang);
                                            return (
                                                <li key={it.s}>
                                                    <a
                                                        href={`https://www.youtube.com/watch?v=${FEATURED_VIDEO_ID}&t=${it.s}s`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        aria-label={`${getUI('videoOpenAt', lang)} ${it.t} — ${chTitle}`}
                                                        className={`group flex gap-3 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm bg-white dark:bg-slate-900 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${a.ring} text-start`}
                                                    >
                                                        <span className={`shrink-0 h-fit px-2 py-0.5 rounded-md ${a.bg} ${a.text} text-[11px] font-extrabold tabular-nums`}>
                                                            {it.t}
                                                        </span>
                                                        <span className="flex-1 min-w-0">
                                                            <span className="block text-xs font-bold text-slate-900 dark:text-slate-100 leading-snug">{chTitle}</span>
                                                            <span className="block text-[11px] text-slate-600 dark:text-slate-400 font-medium leading-relaxed mt-0.5">{chDesc}</span>
                                                        </span>
                                                    </a>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Strategic categories — each renders its products as columns */}
            <div className="space-y-10">
                {AGENT_CATEGORIES.map((cat) => {
                    const accent = ACCENTS[cat.accent] || ACCENTS.rose;
                    const groups = cat.groupIds.map(getAgentGroup).filter(Boolean);
                    if (groups.length === 0) return null;
                    const colsClass = COLS_LG[Math.min(groups.length, 4)];

                    return (
                        <section
                            key={cat.id}
                            className={`rounded-[2rem] border ${accent.border} bg-white dark:bg-slate-900 overflow-hidden shadow-sm`}
                        >
                            {/* Category header */}
                            <header className={`flex items-center gap-4 px-6 md:px-8 py-5 ${accent.bg} border-b ${accent.border}`}>
                                <span aria-hidden="true" className={`w-2.5 h-10 rounded-full ${accent.dot} shrink-0`}></span>
                                <div className="flex-1 min-w-0 text-start">
                                    <h2 className={`text-xl md:text-2xl font-extrabold ${accent.text} leading-tight`}>
                                        {getUI(cat.labelKey, lang)}
                                    </h2>
                                </div>
                            </header>

                            {/* Products as columns; agents stacked inside each column */}
                            <div className={`p-5 md:p-6 grid grid-cols-1 sm:grid-cols-2 ${colsClass} gap-5`}>
                                {groups.map((group) => {
                                    const Icon = group.icon || group.fallbackIcon;
                                    return (
                                        <div
                                            key={group.id}
                                            className={`rounded-2xl border ${group.theme.border} bg-slate-50/40 flex flex-col overflow-hidden`}
                                        >
                                            {/* Product header (column top) */}
                                            <div className={`px-4 py-4 ${group.theme.bg} border-b ${group.theme.border} flex items-center gap-3`}>
                                                <div className={`p-2 rounded-xl bg-white dark:bg-slate-900 shadow-sm shrink-0 ${group.theme.iconColor}`}>
                                                    <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                                                </div>
                                                <div className="flex-1 min-w-0 text-start">
                                                    <h3 className={`text-sm font-extrabold ${group.theme.text} leading-snug`}>
                                                        {group.productName}
                                                    </h3>
                                                </div>
                                            </div>

                                            {/* Agents stacked */}
                                            <ul className={`flex-1 ${group.agentLayout === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2' : 'flex flex-col'} gap-3 p-4`}>
                                                {group.agents.map((agent) => (
                                                    <li
                                                        key={agent.id}
                                                        className="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col text-start"
                                                    >
                                                        <div className="flex items-start gap-2.5 mb-2">
                                                            <div className={`p-1.5 rounded-lg ${group.theme.bg} ${group.theme.iconColor} shrink-0 group-hover:scale-110 transition-transform`}>
                                                                <Bot size={15} strokeWidth={2} aria-hidden="true" />
                                                            </div>
                                                            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-snug flex-1">
                                                                {agent.name}
                                                            </h4>
                                                        </div>
                                                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                                            {getAgentDescription(agent, lang)}
                                                        </p>
                                                        <div className="mt-auto pt-3 flex flex-wrap items-center gap-1.5">
                                                            {agent.videoUrl && (
                                                                <a
                                                                    href={agent.videoUrl}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    aria-label={`${getUI('watchDemo', lang)}: ${agent.name}`}
                                                                    title={getUI('watchDemo', lang)}
                                                                    className="inline-flex items-center gap-1.5 h-7 px-2.5 rounded-md bg-rose-100 dark:bg-rose-900/40 hover:bg-rose-200 dark:hover:bg-rose-900/60 text-rose-700 dark:text-rose-300 text-[11px] font-bold transition-all focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-rose-300"
                                                                >
                                                                    <Play size={11} strokeWidth={2} aria-hidden="true" fill="currentColor" />
                                                                    <span>{getUI('watchDemo', lang)}</span>
                                                                </a>
                                                            )}
                                                            {agent.urls && agent.urls.length > 0 && agent.urls.map((u) => (
                                                                <a
                                                                    key={u.href}
                                                                    href={u.href}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    aria-label={`${getUI('readDocumentation', lang)} — ${u.label}`}
                                                                    title={`${getUI('readDocumentation', lang)} — ${u.label}`}
                                                                    className="inline-flex items-center gap-1.5 h-7 px-2.5 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-[11px] font-bold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-all focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-slate-400"
                                                                >
                                                                    <ExternalLink size={11} strokeWidth={2.25} aria-hidden="true" className="opacity-70" />
                                                                    <span>{u.label}</span>
                                                                </a>
                                                            ))}
                                                            {agent.url && (
                                                                <a
                                                                    href={agent.url}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    aria-label={`${getUI('readDocumentation', lang)}: ${agent.name}`}
                                                                    title={getUI('readDocumentation', lang)}
                                                                    className="inline-flex items-center gap-1.5 h-7 px-2.5 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-[11px] font-bold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-all focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-slate-400"
                                                                >
                                                                    <ExternalLink size={11} strokeWidth={2.25} aria-hidden="true" className="opacity-70" />
                                                                    <span>{getUI('readDocumentation', lang)}</span>
                                                                </a>
                                                            )}
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Category-wide capabilities (apply across all product groups) */}
                            {cat.extras && cat.extras.length > 0 && (
                                <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-1 space-y-3">
                                    {cat.extras.map((ex) => {
                                            const exName = getExtraName(ex, lang);
                                            const exDesc = getExtraDescription(ex, lang);
                                            return (
                                            <div
                                                key={ex.id}
                                                className={`rounded-2xl border ${accent.border} ${accent.bg} p-5 flex flex-col md:flex-row md:items-start gap-4`}
                                            >
                                                <div className={`p-3 rounded-xl bg-white dark:bg-slate-900 shadow-sm shrink-0 ${accent.text}`}>
                                                    <Sparkles size={22} strokeWidth={1.75} aria-hidden="true" />
                                                </div>
                                                <div className="flex-1 min-w-0 text-start">
                                                    <h3 className={`text-base font-extrabold ${accent.text} leading-snug mb-1.5`}>
                                                        {exName}
                                                    </h3>
                                                    <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                                                        {exDesc}
                                                    </p>
                                                <div className="mt-3 flex flex-wrap items-center gap-1.5">
                                                    {ex.videoUrl && (
                                                        <a
                                                            href={ex.videoUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                                    aria-label={`${getUI('watchDemo', lang)}: ${exName}`}
                                                            title={getUI('watchDemo', lang)}
                                                            className="inline-flex items-center gap-1.5 h-7 px-2.5 rounded-md bg-rose-100 dark:bg-rose-900/40 hover:bg-rose-200 dark:hover:bg-rose-900/60 text-rose-700 dark:text-rose-300 text-[11px] font-bold transition-all focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-rose-300"
                                                        >
                                                            <Play size={11} strokeWidth={2} aria-hidden="true" fill="currentColor" />
                                                            <span>{getUI('watchDemo', lang)}</span>
                                                        </a>
                                                    )}
                                                    {ex.urls && ex.urls.length > 0 && ex.urls.map((u) => (
                                                        <a
                                                            key={u.href}
                                                            href={u.href}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            aria-label={`${getUI('readDocumentation', lang)} — ${u.label}`}
                                                            title={`${getUI('readDocumentation', lang)} — ${u.label}`}
                                                            className="inline-flex items-center gap-1.5 h-7 px-2.5 rounded-md bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-[11px] font-bold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-all focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-slate-400"
                                                        >
                                                            <ExternalLink size={11} strokeWidth={2.25} aria-hidden="true" className="opacity-70" />
                                                            <span>{u.label}</span>
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        );
                                    })}
                                </div>
                            )}
                        </section>
                    );
                })}
            </div>
        </div>
    );
}
