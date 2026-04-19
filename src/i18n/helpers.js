// Translation lookup helpers for the data (`D`) dictionary.
// Each entry in D is an object keyed by language code with an array value:
//   [Name, ShortDesc, Capabilities[], Audience, Integrations, Architecture?]
// Architecture (slot 5) is optional and currently populated for English only.
// Category entries only use [Name, Description].

const EMPTY_PRODUCT = { n: "", d: "", c: [], a: "", i: "", arch: "" };
const EMPTY_CATEGORY = { n: "", d: "" };

export function getDict(dict, key, lang) {
    if (!dict[key]) return EMPTY_PRODUCT;
    const item = dict[key][lang] || dict[key].en || Object.values(dict[key])[0] || [];
    // Architecture is currently English-only; fall back to the English entry
    // so that non-English UIs still show the architecture text when available.
    // Integrations are typically proper product names (Power BI, Teams, Dataverse, ...)
    // and many existing localizations had drifted to generic phrases or dropped
    // items, so we always source them from the English entry to stay accurate.
    const enItem = dict[key].en || [];
    return {
        n: item[0] || "",
        d: item[1] || "",
        c: item[2] || [],
        a: item[3] || "",
        i: enItem[4] || item[4] || "",
        arch: item[5] || enItem[5] || ""
    };
}

export function getCat(dict, key, lang) {
    if (!dict[key]) return EMPTY_CATEGORY;
    const item = dict[key][lang] || dict[key].en || Object.values(dict[key])[0] || [];
    return { n: item[0] || "", d: item[1] || "" };
}
