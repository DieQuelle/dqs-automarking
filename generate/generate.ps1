$csvPath = "generations\icc_trash.csv"
$outputPath = "generations\output.txt"

$csvContent = Import-Csv -Path $csvPath -Delimiter ";"

$trashTemplate = Get-Content "generations\template_trash.txt" -Raw
$bossTemplate = Get-Content "generations\template_boss.txt" -Raw
$separatorTemplate = Get-Content "generations\template_seperator.txt" -Raw

$outputData = foreach ($row in $csvContent) {
  switch ($row.type) {
    "separator" {
        $separatorTemplate -replace '\$0', $row.zone
    }
    "trash" {
        $trashTemplate -replace '\$\{1\}', $row.npcid -replace '\$\{2\}', $row.monster
    }
    "boss" {
        $bossTemplate -replace '\$\{1\}', $row.npcid -replace '\$\{2\}', $row.monster
    }
}
}
$outputData | Out-File $outputPath -Encoding UTF8