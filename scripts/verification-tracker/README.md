# Content verification tracker

`build.py` generates `docs/content-verification-tracker.xlsx`, the workbook the
review team (scholars, mentors, Bengali reviewers, professionals) uses to verify
the site's text one section at a time.

## What is in the workbook

| Sheet | Contents |
| --- | --- |
| Read me | How to use the workbook, column legend, review types, house rules (English and Bengali). |
| Summary | Formula-driven progress counts by area, review type, reviewer, priority and Bengali status. |
| Review rows | One row per text section: English, Bengali, priority, review needed, suggested reviewer, current `reviewStatus`, sources, key points, pre-check flags, and the team's verdict, reviewer, comment, done and date columns. |
| Items | One row per content item (step, topic, guide, FAQ entry, glossary entry, tool, page section) with item-level rollups of the rows. |
| Sources | Every entry of `locales/en/sources.json` with its note, usage count and verdict columns. |
| Masjids | Every entry of `locales/en/masjids.json` with English and Bengali notes and verdict columns. |

The generated columns come from `locales/en` and `locales/bn`. The yellow
columns are for the team; rebuild with `--previous` (below) to carry them over.

## Inputs kept next to the script

| File | Purpose |
| --- | --- |
| `classification/*.json` | Per-item review types, reviewers, priority, key points and pre-check flags (see below). |
| `ui-inventory.json` | Which second-level keys of `ui.json` carry reviewable text, with a label and the page URL, from a read of the route files. Used together with the `ui:` classification records. |
| `site-notes.json` | Cross-cutting findings for the 'Site team notes' sheet. Edit or add entries by hand. |

## Classification data

`classification/*.json` holds one record per item key (`step:<id>`,
`topic:<id>`, `guide:<id>`, `seasonal:<id>`, `faq:<id>`, `glossary:<id>`,
`tool:<name>`, `page:ramadan-planning`, `dawah:personal`, `resource:<id>`,
`collection:<file>`, `ui:pages.<page>.<key>`) with the review types, suggested
reviewers, priority, key points to check and pre-check flags. They were
produced by an assisted read of the English content against the rules in
CLAUDE.md and can be edited by hand. Items without a record fall back to
keyword rules in `build.py`. For `ui:` records, `include: false` keeps a
chrome-only block of `ui.json` out of the workbook.

## Running it

```bash
pip install openpyxl            # once
python3 scripts/verification-tracker/build.py
# after content changes, keep the team's verdicts and comments from the copy they filled in:
python3 scripts/verification-tracker/build.py --previous ~/Downloads/content-verification-tracker.xlsx
# other options
python3 scripts/verification-tracker/build.py --out /tmp/tracker.xlsx --dump-json /tmp/rows.json
```

`--previous` matches 'Review rows' on Item key plus JSON location, 'Items' on
Item key, 'Sources' and 'Masjids' on their ids and 'Site team notes' on the
finding text, and copies the yellow columns across. Row IDs are positional and
shift when content is added, so never merge on them.

The script prints the row counts per area and the number of items that had no
classification record. Formulas are written without cached values and calculate
when the workbook opens; the committed copy under `docs/` was opened and saved
once through LibreOffice so that file previews also show the numbers. Do the
same (Excel or LibreOffice, save once) after regenerating.

## What the workbook covers

Every reviewable text in `locales/en` (stages, steps, topics, life guides,
seasonal guides, FAQ, glossary, the four tools, the Ramadan planning sections,
the hidden dawah guide, resources, resource collections, seasonal calendar,
source categories), the content-bearing parts of `ui.json`, the English text
baked into `public/graphics/*.svg`, plus the sources and masjid directories on
their own sheets. Not covered: the 99 names page (data fetched from the AlAdhan
API at run time) and live prayer-times data.
