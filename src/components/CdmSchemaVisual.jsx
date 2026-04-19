import React from 'react';
import { getUI } from '../i18n/ui.js';

// Visual representation of the Common Data Model schema, inspired by the
// Microsoft "Integrate & Disambiguate Data with the Common Data Model" diagram.
// Pure data + Tailwind layout; no external assets. Fully responsive.

const CORE_ENTITIES = [
    'Account', 'Activity', 'Contact', 'Currency', 'Email', 'Goal',
    'Letter', 'Note', 'Owner', 'Organization', 'Position', 'Task'
];

// Shared CRM activity entities (left of Sales in the diagram, no header).
const SHARED_ENTITIES = [
    'Account', 'Appointment', 'Campaign', 'Contact', 'Lead',
    'Marketing List', 'Phone Call', 'Social Activity'
];

const D365_GROUPS = [
    { title: 'Sales', entities: ['Competitor', 'Discount', 'Invoice', 'Opportunity', 'Order', 'Order Product', 'Quote'] },
    { title: 'Service', entities: ['Case', 'Contract', 'Entitlement', 'Resource', 'Service', 'Scheduling Group', 'Task'] },
    { title: 'Finance', entities: ['Main accounts', 'General Ledger', 'Budget', 'Bank', 'Fixed assets', 'Dimensions'] },
    { title: 'Supply Chain', entities: ['Product Information Management', 'Procurement', 'Trade Agreements', 'Sales', 'Production', 'Warehouse and Transportation', 'Asset Management'] },
    { title: 'Commerce', entities: ['Channel', 'Product catalog', 'Prices & Discounts', 'Sales transaction', 'Payment instrument', 'Customer loyalty', 'Worker'] },
    { title: 'Marketing', entities: ['Account', 'Contact', 'Event', 'Marketing Email', 'Marketing Page'], highlightFirst: true }
];

const INDUSTRY_GROUPS = [
    { title: 'Web', entities: ['Link Clicks', 'Web Interactions', 'Web Page'], dashed: true },
    { title: 'Project Operations', entities: ['Project Planning', 'Project Resourcing', 'Project Time and Expense', 'Project Invoicing', 'Project Accounting'], dashed: true },
    { title: 'Human Resources', entities: ['Department', 'Job Positions', 'Worker'], dashed: true },
    { title: 'Globalization', entities: ['Tax determination and calculation', 'E-invoicing & real time reporting', 'Payment formats', 'Tax and audit reports', 'Business documents', 'Fiscal integrations for Retail'], dashed: true },
    { title: 'Healthcare', entities: ['Patient', 'Practitioner', 'Device', 'Care Plan', 'Risk Assessment', 'Medication', 'Procedure', 'Encounter', 'Episode of Care'] }
];

const ACCOUNT_DETAIL = {
    name: 'Account',
    description: 'Business that represents a customer or potential customer.',
    attributes: ['accountNumber', 'accountRatingCode', 'createdOn', 'creditLimit', 'openDeals', 'openRevenue', 'territoryId', 'hotelGroup']
};

function EntityChip({ label, highlight = false }) {
    return (
        <div
            id={highlight ? 'cdm-marketing-account' : undefined}
            className={`text-[9px] sm:text-[10px] font-semibold rounded px-1.5 py-1 leading-tight text-center border break-words hyphens-auto min-w-0 ${highlight ? 'bg-slate-900 text-white border-slate-900 ring-2 ring-slate-700 shadow' : 'bg-white text-slate-800 border-slate-300'}`}
        >
            {label}
        </div>
    );
}

function GroupPanel({ title, entities, dashed = false, accent = 'blue', highlightFirst = false, showDots = true }) {
    const accentMap = {
        blue: dashed
            ? 'bg-white/40 border-slate-500'
            : 'bg-slate-200 border-slate-400',
        teal: 'bg-slate-300 border-slate-400',
        plain: 'bg-slate-100 border-slate-300'
    };
    return (
        <div className={`rounded-md p-2 ${accentMap[accent]} ${dashed ? 'border border-dashed' : 'border'}`}>
            {title && (
                <p className="text-[10px] sm:text-xs font-extrabold tracking-wider uppercase mb-2 text-center text-slate-800">
                    {title}
                </p>
            )}
            <div className="space-y-1.5">
                {entities.map((e, i) => (
                    <EntityChip key={i} label={e} highlight={highlightFirst && i === 0} />
                ))}
                {showDots && (
                    <div className="text-slate-600 text-center text-[10px] tracking-widest">•••</div>
                )}
            </div>
        </div>
    );
}

export default function CdmSchemaVisual({ lang }) {
    return (
        <section className="space-y-4">
            <div className="rounded-2xl bg-gradient-to-br from-slate-100 to-slate-300 p-3 sm:p-5 border border-slate-300 shadow-sm">
                {/* Header bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="bg-slate-900 text-white px-4 py-2 rounded text-xs sm:text-sm font-extrabold tracking-wider">
                        COMMON DATA MODEL SCHEMA
                    </span>
                    <span className="text-slate-800 font-extrabold text-sm sm:text-base tracking-wide">Dynamics 365</span>
                </div>

                {/* Responsive layout: stacks on mobile, becomes the full diagram on lg+ */}
                <div className="relative grid gap-3 grid-cols-1 lg:grid-cols-12">

                    {/* CORE column */}
                    <div className="lg:col-span-2">
                        <p className="text-[10px] sm:text-xs font-extrabold tracking-wider uppercase mb-2 text-slate-800 text-center">Core</p>
                        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-1 gap-1.5">
                            {CORE_ENTITIES.map((e, i) => <EntityChip key={i} label={e} />)}
                            <div className="text-slate-600 text-center text-[10px] tracking-widest col-span-full lg:col-span-1">•••</div>
                        </div>
                        <p className="text-[10px] text-slate-700 mt-3 leading-snug text-center italic hidden lg:block">
                            {getUI('cdmCoreNote', lang)}
                        </p>
                    </div>

                    {/* Right side */}
                    <div className="lg:col-span-10 space-y-3">

                        {/* Top row: Shared + 6 D365 groups */}
                        <div className="bg-white/50 rounded-lg p-2 border border-slate-300">
                            <div className="grid gap-2 grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7">
                                <GroupPanel title="" entities={SHARED_ENTITIES} accent="plain" />
                                {D365_GROUPS.map((g, i) => (
                                    <GroupPanel key={i} title={g.title} entities={g.entities} highlightFirst={g.highlightFirst} />
                                ))}
                            </div>
                        </div>

                        {/* Bottom: industry row + Account detail card.
                            On lg+ the Account card sits to the right of the industry groups. */}
                        <div className="grid gap-3 grid-cols-1 lg:grid-cols-12">
                            <div className="lg:col-span-8">
                                <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
                                    {INDUSTRY_GROUPS.map((g, i) => (
                                        <GroupPanel
                                            key={i}
                                            title={g.title}
                                            entities={g.entities}
                                            dashed={g.dashed}
                                            accent={g.title === 'Healthcare' ? 'teal' : 'blue'}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div id="cdm-account-card" className="lg:col-span-4 relative">
                                <div className="bg-slate-800 border-2 border-slate-900 rounded-lg p-4 text-slate-100 shadow-md h-full">
                                    <p className="text-sm font-extrabold mb-2 text-white">{ACCOUNT_DETAIL.name}:</p>
                                    <p className="text-xs text-slate-200 leading-relaxed mb-3">
                                        {ACCOUNT_DETAIL.description}
                                    </p>
                                    <p className="text-[11px] font-bold uppercase tracking-wider mb-2 text-slate-300">{getUI('cdmAttributes', lang)}</p>
                                    <ul className="flex flex-col gap-1 text-[11px] font-mono text-slate-200 break-words">
                                        {ACCOUNT_DETAIL.attributes.map((a, i) => (
                                            <li key={i}>• {a}</li>
                                        ))}
                                        <li className="opacity-70">• …</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative arrow: Marketing → Account card. Only on lg+ where the layout matches the reference. */}
                    <svg
                        className="hidden lg:block absolute pointer-events-none"
                        style={{ top: 0, right: 0, width: '40%', height: '100%' }}
                        viewBox="0 0 400 400"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <defs>
                            <marker id="cdm-arrow-head" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                                <path d="M0,0 L10,5 L0,10 z" fill="#0f172a" />
                            </marker>
                        </defs>
                        {/* Curve from approximate Marketing.Account chip (top-right of upper row) down to Account detail card (bottom-right). */}
                        <path
                            d="M 360 60 C 405 120, 405 220, 360 290"
                            fill="none"
                            stroke="#0f172a"
                            strokeWidth="2"
                            markerEnd="url(#cdm-arrow-head)"
                        />
                    </svg>
                </div>

                {/* Mobile-only core note (hidden on lg, shown on mobile below the diagram) */}
                <p className="text-[11px] text-slate-700 mt-4 leading-snug italic lg:hidden">
                    {getUI('cdmCoreNote', lang)}
                </p>
            </div>

            <p className="text-xs text-slate-500 italic">{getUI('cdmCaption', lang)}</p>
        </section>
    );
}
