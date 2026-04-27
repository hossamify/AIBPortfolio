import React from 'react';
import {
    Target,
    Sparkles, Gauge, Database, TrendingUp, Trophy,
    UserRound, Users as UsersIcon, BarChart3, Briefcase, Building2, ArrowDown,
} from 'lucide-react';
import { getUI } from '../i18n/ui.js';

// Shared client-facing "Business Value" view used by every product. Each
// BusinessValue<Product>.jsx file now only owns its localized STRINGS table
// and (rarely) a custom rungMeta icon set; this component owns the entire
// JSX template, the KindBadge sub-component, and the default rung metadata.
//
// Localization notes:
// - All product-specific copy comes from the `s` prop the wrapper resolves as
//   `STRINGS[lang] || STRINGS.en`.
// - Reused chrome strings (badge labels, section legends, "Sources" header,
//   "What changes / What you get / Validated benchmarks", etc.) come from
//   src/i18n/ui.js via getUI('bv_*', lang) so they are translated once and
//   shared by every BusinessValue*.jsx file.

// Default rung metadata (icons + numbering); used unless a wrapper passes its
// own. A handful of products (Dataverse, Enterprise Security) override this.
const DEFAULT_RUNG_META = [
    { n: 1, AudienceIcon: UserRound, Icon: Sparkles },
    { n: 2, AudienceIcon: UsersIcon, Icon: Gauge },
    { n: 3, AudienceIcon: BarChart3, Icon: Database },
    { n: 4, AudienceIcon: Briefcase, Icon: TrendingUp },
    { n: 5, AudienceIcon: Building2, Icon: Trophy },
];

// Sensible neutral fallback palette if no theme is supplied (the wrapper is
// almost always invoked with the parent category's theme).
const DEFAULT_THEME = {
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    text: 'text-blue-700 dark:text-blue-300',
    border: 'border-blue-200 dark:border-blue-800',
    ring: 'ring-blue-300',
    iconColor: 'text-blue-600 dark:text-blue-400',
};

const KindBadge = ({ kind, lang }) => {
    const isOutcome = kind === 'outcome';
    const label = getUI(isOutcome ? 'bv_kindOutcome' : 'bv_kindEfficiency', lang);
    const ariaLabel = getUI(isOutcome ? 'bv_outcomeMetricAria' : 'bv_efficiencyMetricAria', lang);
    return (
        <span
            aria-label={ariaLabel}
            className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider whitespace-nowrap ${
                isOutcome
                    ? 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800'
                    : 'bg-sky-100 dark:bg-sky-900/40 text-sky-800 dark:text-sky-200 border border-sky-200 dark:border-sky-800'
            }`}
        >
            {label}
        </span>
    );
};

export default function BusinessValueView({ s, theme, lang = 'en', rungMeta = DEFAULT_RUNG_META }) {
    const t = theme || DEFAULT_THEME;

    return (
        <div className="space-y-12 text-start">
            {/* Headline + value summary, addressed to the customer */}
            <section aria-labelledby="bv-summary-heading">
                <h3 id="bv-summary-heading" className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3 leading-tight">
                    {s.headline}
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium max-w-4xl">
                    {s.summary}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-6">
                    {s.kpis.map((k) => (
                        <div key={k.label} className={`rounded-2xl border ${t.border} ${t.bg} p-4 relative overflow-hidden`}>
                            <div aria-hidden="true" className={`absolute -top-3 -right-3 w-16 h-16 rounded-full opacity-10 ${t.ring.replace('ring-', 'bg-')}`} />
                            <p className={`text-3xl font-black ${t.text} leading-none`}>{k.value}</p>
                            <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mt-2 leading-snug">{k.label}</p>
                            <div className="mt-2"><KindBadge kind={k.kind} lang={lang} /></div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Strategic question — verbatim IBLQ from the executive value report,
                surfaced as a featured pull-quote so it lands with weight. */}
            <section aria-labelledby="bv-question-heading">
                <h3 id="bv-question-heading" className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                    <Target className={t.iconColor} size={20} aria-hidden="true" />
                    {getUI('bv_strategicQuestion', lang)}
                </h3>
                <figure>
                    <blockquote className={`relative rounded-2xl border-l-4 ${t.border.replace('border-', 'border-l-')} ${t.bg} p-6 md:p-8`}>
                        <Target aria-hidden="true" size={72} className={`absolute top-4 end-4 ${t.iconColor} opacity-10`} />
                        <p className="text-sm md:text-base font-medium text-slate-800 dark:text-slate-200 leading-relaxed max-w-4xl">
                            {s.bqPre}
                            <span className="font-black text-slate-900 dark:text-slate-100">{s.bqPct}</span>
                            {s.bqPost}
                        </p>
                        <p className="text-base md:text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug max-w-4xl mt-4">
                            {s.bqLeadIn}
                            <span className={t.text}>{s.bqHighlight}</span>
                        </p>
                    </blockquote>
                    <figcaption className="sr-only">{s.figcaption}</figcaption>
                </figure>

                <div className="flex items-center justify-center gap-2 mt-6 text-sm font-bold text-slate-600 dark:text-slate-400">
                    <span>{s.bridge}</span>
                    <ArrowDown size={16} aria-hidden="true" className={t.iconColor} />
                </div>
            </section>

            {/* Outcomes by role — the value ladder, reframed for the customer */}
            <section aria-labelledby="bv-outcomes-heading">
                <h3 id="bv-outcomes-heading" className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
                    <TrendingUp className={t.iconColor} size={20} aria-hidden="true" />
                    {getUI('bv_outcomesByRole', lang)}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 max-w-3xl">
                    {s.outcomesIntro}
                </p>

                <ol className="relative space-y-4">
                    <div aria-hidden="true" className={`absolute top-2 bottom-2 start-5 w-px ${t.border.replace('border-', 'bg-')} opacity-60`} />
                    {s.rungs.map((r, idx) => {
                        const meta = rungMeta[idx];
                        const Icon = meta.Icon;
                        const AudienceIcon = meta.AudienceIcon;
                        return (
                            <li key={meta.n} className="relative ps-14">
                                <div aria-hidden="true" className={`absolute start-0 top-1 w-10 h-10 rounded-2xl flex items-center justify-center font-black text-sm shadow-md border-2 bg-white dark:bg-slate-900 ${t.border} ${t.text}`}>
                                    {meta.n}
                                </div>
                                <div className={`bg-white dark:bg-slate-900 border ${t.border} rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow`}>
                                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                        <div className="flex items-center gap-3">
                                            <span aria-hidden="true" className={`inline-flex items-center justify-center w-9 h-9 rounded-xl ${t.bg} ${t.iconColor}`}>
                                                <Icon size={18} aria-hidden="true" />
                                            </span>
                                            <div>
                                                <p className="text-base font-bold text-slate-900 dark:text-slate-100 leading-tight">{r.title}</p>
                                                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 inline-flex items-center gap-1 mt-0.5">
                                                    <AudienceIcon size={12} aria-hidden="true" />
                                                    {r.audience}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                                        <div className="md:col-span-7 space-y-3">
                                            <div>
                                                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">{getUI('bv_whatChanges', lang)}</p>
                                                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">{r.what}</p>
                                            </div>
                                            <div className={`rounded-xl p-3 ${t.bg} border ${t.border}`}>
                                                <p className={`text-[11px] font-bold uppercase tracking-wider ${t.text} opacity-80 mb-0.5`}>{getUI('bv_whatYouGet', lang)}</p>
                                                <p className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-snug">{r.outcome}</p>
                                            </div>
                                        </div>
                                        <div className="md:col-span-5">
                                            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">{getUI('bv_validatedBenchmarks', lang)}</p>
                                            <ul className="space-y-2">
                                                {r.kpis.map((kpi) => (
                                                    <li key={kpi.label} className="flex items-start gap-2 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2">
                                                        <KindBadge kind={kpi.kind} lang={lang} />
                                                        <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">{kpi.label}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ol>

                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-600 dark:text-slate-400">
                    <span className="inline-flex items-center gap-1.5">
                        <KindBadge kind="efficiency" lang={lang} /> {getUI('bv_legendEfficiency', lang)}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                        <KindBadge kind="outcome" lang={lang} /> {getUI('bv_legendOutcome', lang)}
                    </span>
                </div>
            </section>

            {/* Sources — quiet, footnote-style references */}
            <section aria-labelledby="bv-refs-heading" className="pt-6 border-t border-slate-200 dark:border-slate-800">
                <h3 id="bv-refs-heading" className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                    {getUI('bv_sources', lang)}
                </h3>
                <ol className="space-y-1.5 text-xs text-slate-500 dark:text-slate-400 leading-relaxed list-decimal ps-5 marker:text-slate-400 dark:marker:text-slate-500">
                    {s.references.map((ref) => (
                        <li key={ref.title}>
                            <span className="font-medium text-slate-600 dark:text-slate-300">{ref.title}.</span> {ref.note}
                        </li>
                    ))}
                </ol>
            </section>
        </div>
    );
}
