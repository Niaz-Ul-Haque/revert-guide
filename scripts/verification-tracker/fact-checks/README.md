# Fact-check records

`results.json` feeds the two columns "Fact-check verdict" and "Niaz's fact check" on the
'Review rows' sheet of the verification workbook, and the "Fact-check discrepancies" count on
'Items'.

## How the records were made

Every text row of the workbook was checked by an AI research assistant working for the site
owner, in batches of about 45 rows, against the sources the row cites and one mainstream Sunni
reference (Quran.com, Sunnah.com, IslamQA, SeekersGuidance, AboutIslam, Yaqeen Institute) or,
for Canadian facts, the official site (federal or provincial government, the service's own site,
CRA, CAMH, 988.ca). The research environment could not open web pages directly (its network
policy allows web search only), so the evidence in each record rests on search-result snippets
from those sites. That is a sourcing check by a lay person with AI help, not a religious ruling:
`needs_scholar` marks the rows where the ruling itself is for a scholar to judge.

## Record shape

```json
{
  "key": "faq:faq-sup-001 | locales/en/faq.json › [id=faq-sup-001]",
  "row_id_at_check": "R1001",
  "batch": "batch-24.json",
  "text_hash": "3f2a9c1d0e",
  "checked_on": "2026-09-26",
  "verdict": "Verified with notes",
  "claims": [{"claim": "...", "result": "matches | differs | unsupported | not checked", "evidence": "source, URL, snippet gist"}],
  "notes": "...",
  "needs_scholar": true,
  "method": "3 web searches (sunnah.com, quran.com snippets); page fetch blocked"
}
```

`key` is the row's 'Item key' plus its 'JSON location', so a record still finds its row after a
rebuild. `text_hash` is the first ten hex digits of the SHA-1 of the English text at the time of
the check; when the text changes, the workbook appends "(text changed since this check)" to the
verdict so the row is checked again.

Verdicts: `Verified`, `Verified with notes`, `Discrepancy found`, `Could not verify online`,
`No factual claim to check`.
