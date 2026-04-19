$ErrorActionPreference = 'Stop'
$root = Split-Path $PSScriptRoot -Parent
$utf8 = [System.Text.UTF8Encoding]::new($false)

function Remove-Lines($path, $ranges) {
    $lines = Get-Content -LiteralPath $path
    $toRemove = New-Object 'System.Collections.Generic.HashSet[int]'
    foreach ($r in $ranges) {
        for ($i = $r[0]; $i -le $r[1]; $i++) { [void]$toRemove.Add($i) }
    }
    $kept = @()
    for ($i = 1; $i -le $lines.Count; $i++) {
        if (-not $toRemove.Contains($i)) { $kept += ,$lines[$i-1] }
    }
    $content = ($kept -join "`r`n") + "`r`n"
    [System.IO.File]::WriteAllText($path, $content, $utf8)
    Write-Host "$path`: kept $($kept.Count) lines, removed $($toRemove.Count)"
}

Remove-Lines (Join-Path $root 'src\data\pricing.js') (,@(122,132))
Remove-Lines (Join-Path $root 'src\data\portfolio.js') (,@(62,63))

$portfolio = Join-Path $root 'src\data\portfolio.js'
$text = [System.IO.File]::ReadAllText($portfolio)
$text = $text.Replace('BarChart, BrainCircuit, ', '')
[System.IO.File]::WriteAllText($portfolio, $text, $utf8)
Write-Host "portfolio.js: cleaned unused imports"
Write-Host "Done."
