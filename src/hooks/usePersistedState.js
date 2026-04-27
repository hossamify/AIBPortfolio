import { useEffect, useState } from 'react';

// Tiny hook that mirrors useState but transparently reads/writes a single
// localStorage key. The optional `validate` callback is run against the
// stored value before adoption so callers can defend against corrupted
// values (e.g., a renamed enum) without spreading try/catch boilerplate
// across components. Falls back to `defaultValue` if storage is unavailable
// (private mode, SSR, etc.) or the stored value fails validation.
export function usePersistedState(key, defaultValue, validate) {
    const [value, setValue] = useState(() => {
        if (typeof window === 'undefined') return defaultValue;
        try {
            const stored = window.localStorage.getItem(key);
            if (stored == null) return defaultValue;
            if (validate && !validate(stored)) return defaultValue;
            return stored;
        } catch {
            return defaultValue;
        }
    });

    useEffect(() => {
        try { window.localStorage.setItem(key, value); } catch { /* ignore */ }
    }, [key, value]);

    return [value, setValue];
}
