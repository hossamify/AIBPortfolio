// Translation lookup helpers for the data (`D`) dictionary.
// Shape: D[lang][key] = [Name, ShortDesc, Capabilities[], Audience, Integrations, Architecture?]
// Architecture (slot 5) is optional and currently populated for English only;
// non-English locales fall back to the English entry. Integrations (slot 4)
// are sourced from English on purpose so proper product names stay consistent.
// Category entries only use [Name, Description].

const EMPTY_PRODUCT = { n: "", d: "", c: [], a: "", i: "", arch: "" };
const EMPTY_CATEGORY = { n: "", d: "" };

export function getDict(dict, key, lang) {
    const enDict = dict.en;
    const langDict = dict[lang] || enDict;
    const item = langDict?.[key] || enDict?.[key];
    if (!item) return EMPTY_PRODUCT;
    const enItem = enDict?.[key] || [];
    return {
        n: item[0] || "",
        d: item[1] || "",
        c: item[2] || [],
        a: item[3] || "",
        // Integrations always come from English to keep product/brand names accurate.
        i: enItem[4] || item[4] || "",
        // Architecture is English-only today; fall back gracefully for other locales.
        arch: item[5] || enItem[5] || ""
    };
}

export function getCat(dict, key, lang) {
    const langDict = dict[lang] || dict.en;
    const item = langDict?.[key] || dict.en?.[key];
    if (!item) return EMPTY_CATEGORY;
    return { n: item[0] || "", d: item[1] || "" };
}
