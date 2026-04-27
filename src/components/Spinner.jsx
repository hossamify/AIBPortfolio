import React from 'react';

// Neutral inline spinner used as a Suspense fallback for any code-split
// chunk (route views, BusinessValue panels, etc.). Honours `prefers-reduced-
// motion` and exposes status/sr-only labelling for assistive tech.
//
// `className` lets callers control surrounding spacing/alignment without
// the component dictating its own layout. The default works for a generic
// "block-level" placeholder.
export default function Spinner({ className = 'py-12 flex items-center justify-center text-sm font-medium text-slate-500 dark:text-slate-400' }) {
    return (
        <div role="status" aria-live="polite" className={className}>
            <span
                className="inline-block w-4 h-4 mr-3 rounded-full border-2 border-slate-300 dark:border-slate-600 border-t-transparent animate-spin motion-reduce:animate-none"
                aria-hidden="true"
            />
            <span className="sr-only">Loading…</span>
        </div>
    );
}
