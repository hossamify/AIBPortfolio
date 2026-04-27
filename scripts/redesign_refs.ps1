$ErrorActionPreference = 'Stop'

$newSection = @'
            {/* Sources — quiet, footnote-style references */}
            <section aria-labelledby="bv-refs-heading" className="pt-6 border-t border-slate-200 dark:border-slate-800">
                <h3 id="bv-refs-heading" className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                    Sources
                </h3>
                <ol className="space-y-1.5 text-xs text-slate-500 dark:text-slate-400 leading-relaxed list-decimal ps-5 marker:text-slate-400 dark:marker:text-slate-500">
                    {REFERENCES.map((ref) => (
                        <li key={ref.title}>
                            <span className="font-medium text-slate-600 dark:text-slate-300">{ref.title}.</span> {ref.note}
                        </li>
                    ))}
                </ol>
            </section>
'@

$pattern = '(?s)(\{\s*/\*\s*References[^*]*\*/\s*\}\s*)?<section aria-labelledby="bv-refs-heading">.*?</section>'

$files = Get-ChildItem src\components\BusinessValue*.jsx
foreach ($f in $files) {
    $text = [System.IO.File]::ReadAllText($f.FullName)
    $newText = [regex]::Replace($text, $pattern, [System.Text.RegularExpressions.Regex]::Escape($newSection).Replace('\ ', ' '))
    # The escape above wrecks the replacement; use a callback instead to insert literal text.
    $newText = [regex]::Replace($text, $pattern, { param($m) $newSection })

    # Strip BookOpen / ExternalLink from imports (any position).
    $newText = $newText -replace ',\s*BookOpen\b', ''
    $newText = $newText -replace '\bBookOpen\s*,\s*', ''
    $newText = $newText -replace ',\s*ExternalLink\b', ''
    $newText = $newText -replace '\bExternalLink\s*,\s*', ''

    if ($newText -ne $text) {
        [System.IO.File]::WriteAllText($f.FullName, $newText)
        Write-Host "Updated: $($f.Name)"
    } else {
        Write-Host "Unchanged: $($f.Name)"
    }
}
