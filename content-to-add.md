# Content to Add

Reference for expanding the Revert Guide content library. Each section shows what already exists and what could be added. Content lives in `locales/en/` as JSON files.

---

## Glossary Terms (`locales/en/glossary.json`)

**Existing (43 terms):** allah, aqeedah, asr, ayah, dhikr, dhuhr, dua, eid, fajr, fitrah, ghusl, hadith, hajj, halal, haram, hijab, imam, iman, islam, isha, jumuah, khutbah, maghrib, masjid, muslim, niyyah, quran, rakah, ramadan, sadaqah, salah, salam, sawm, shahada, sunnah, surah, tafsir, tajweed, tawbah, umrah, wudu, zakat

**To add:**

- adhan — the call to prayer
- akhlaq — character / ethics
- amanah — trustworthiness
- awrah — parts of the body to cover
- barakah — blessings
- bidah — innovation in religious matters
- burqa / niqab — face coverings (clarify differences)
- dajjal — the false messiah (end times)
- dawah — invitation to Islam
- deen — religion / way of life
- fard — obligatory act
- fatwa — Islamic legal ruling
- fitnah — trial / tribulation
- haya — modesty / shyness
- hijrah — migration (historically, from Mecca to Medina)
- ibadah — worship / acts of devotion
- iftar — meal to break the fast
- ihram — sacred state for Hajj/Umrah
- ihsan — excellence in worship
- ijma — scholarly consensus
- ijtihad — independent reasoning
- ilm — knowledge
- istikhara — prayer for guidance
- janazah — funeral prayer
- jannah — paradise
- jahannam — hellfire
- jihad — struggle / striving (inner and outer)
- jinn — unseen beings created from fire
- kaaba — sacred structure in Mecca
- kafir — disbeliever (use carefully, explain context)
- khalifah — steward / representative
- khushoo — humility and focus in prayer
- makruh — disliked but not forbidden
- maqasid — objectives of Islamic law
- mahr — bridal gift
- miswak — teeth cleaning stick (Sunnah)
- muadhin — person who calls the adhan
- mubah — permissible
- muhajir — one who migrates for faith
- mustahabb — recommended act
- nafl — voluntary / extra worship
- nikah — marriage contract
- qadr — divine decree / predestination
- qiblah — direction of prayer (toward Kaaba)
- qiyam — standing in prayer / night prayer
- riba — interest / usury
- ruku — bowing in prayer
- sabr — patience
- sajdah — prostration
- salaf — early Muslim generations
- sharia — Islamic law / moral framework
- shirk — associating partners with God
- shukr — gratitude
- sirah — biography of Prophet Muhammad
- suhoor — pre-dawn meal before fasting
- taharah — ritual purity
- takbir — saying "Allahu Akbar"
- taqwa — God-consciousness
- tashahhud — sitting testimony in prayer
- tawhid — oneness of God
- ummah — the global Muslim community
- witr — odd-numbered prayer after Isha
- wajib — obligatory (Hanafi term)
- zam zam — sacred water from Mecca

---

## Topics (`locales/en/topics/`)

Each topic is a JSON file with: id, slug, title, description, sections (array of {heading, content}), relatedStepIds, relatedGlossaryIds, relatedResourceIds.

**Existing (7 topics):** beliefs, prayer, quran, community, fasting, character, purification

**To add:**

- **hijab-and-modesty** — Understanding Islamic dress code, when and why, men and women, cultural vs religious, practical tips for converts
- **marriage-and-family** — Islamic perspective on marriage, finding a spouse as a convert, nikah process, rights and responsibilities, interfaith family dynamics
- **death-and-afterlife** — Islamic beliefs about death, funeral rites (janazah), grieving, afterlife concepts (jannah, jahannam, barzakh)
- **money-and-finance** — Halal income, avoiding riba (interest), Islamic banking basics, ethical spending, zakat calculation guide
- **daily-duas** — Essential supplications for daily life (waking, sleeping, eating, traveling, entering masjid, etc.)
- **islamic-history** — Brief overview of Prophet Muhammad's life, the four caliphs, spread of Islam, key events converts should know
- **mental-health-faith** — Dealing with doubt, loneliness after conversion, family rejection, finding balance, Islamic perspective on mental wellness
- **women-in-islam** — Rights of women, notable Muslim women in history, addressing misconceptions, practical guidance for female converts
- **converts-challenges** — Common challenges unique to converts: telling family, navigating social life, dealing with cultural vs religious expectations, finding belonging
- **hajj-umrah-guide** — Detailed guide to pilgrimage: preparation, rituals step-by-step, spiritual significance, practical tips
- **islamic-calendar** — Key dates and events: Ramadan, Eid al-Fitr, Eid al-Adha, Muharram, Mawlid, Laylatul Qadr, etc.
- **science-and-islam** — Historical contributions, Quran and science, how Islam views knowledge and learning
- **interfaith-relations** — How Islam views other religions, living in a diverse society, maintaining respect while holding faith, responding to questions
- **pets-and-animals** — Islamic guidelines on animals, which pets are permissible, treatment of animals, halal meat ethics
- **social-media-islam** — Navigating social media as a Muslim, finding good content, avoiding misinformation, online etiquette

---

## Resources (`locales/en/resources.json`)

Each resource has: id, title, type (article/video/book/app/community/pdf), url, description, relatedStepIds, relatedTopicIds.

**Existing (27 resources):** Various books, apps, videos, articles, and community links.

**To add:**

### Books
- **reclaim-your-heart-book** — "Reclaim Your Heart" by Yasmin Mogahed — spiritual healing and finding peace
- **being-mortal-muslim-book** — "Being Muslim: A Practical Guide" by Asad Tarsin — comprehensive intro for new Muslims
- **sealed-nectar-book** — "The Sealed Nectar" — award-winning biography of Prophet Muhammad
- **dont-be-sad-book** — "Don't Be Sad" by Aaidh al-Qarni — Islamic perspective on happiness and overcoming hardship
- **purification-of-heart-book** — "Purification of the Heart" by Hamza Yusuf — understanding and curing spiritual diseases

### Apps
- **quran-majeed-app** — Quran Majeed — offline Quran with translations and tafsir
- **salam-planet-app** — Salam Planet — all-in-one Islamic lifestyle app
- **pillars-app** — Pillars — educational app for learning Islamic basics
- **athan-app** — Athan Pro — prayer times with adhan notifications

### Videos / Channels
- **omar-suleiman-yaqeen** — Omar Suleiman's YouTube — accessible Islamic lectures for beginners
- **mufti-menk-channel** — Mufti Menk's YouTube — motivational Islamic reminders
- **nouman-ali-khan-channel** — Nouman Ali Khan — Quran-focused lectures and Arabic linguistics
- **merciful-servant-channel** — Merciful Servant — animated Islamic stories and reminders
- **free-quran-education** — Free Quran Education — visual Quran learning for beginners

### Articles / Websites
- **new-muslim-academy** — New Muslim Academy — structured courses for converts
- **islamqa-info** — IslamQA.info — searchable database of fatawa and Islamic rulings
- **productive-muslim-site** — Productive Muslim — practical Islam for daily life
- **islam-and-mental-health** — Yaqeen Institute mental health series — faith-based mental wellness

### Community
- **convert-support-groups** — Online convert support groups (Reddit r/converts, Facebook groups)
- **icna-why-islam** — ICNA's 877-WHY-ISLAM helpline — free mentoring for new Muslims
- **local-islamic-classes** — Al-Maghrib Institute / SeekersGuidance — structured Islamic education (online)

---

## Masjids (`locales/en/masjids.json`)

Each masjid has: id, name, address, city, stateProvince, country, postalCode, coordinates (lat/lng), phone, website, notes.

**Existing (12):** All in Toronto/Mississauga area.

**To add (Greater Toronto Area):**

- **darul-tawheed-mississauga** — Darul Tawheed Islamic Centre, Mississauga
- **islamic-centre-of-markham** — Islamic Centre of Markham
- **muslim-association-of-canada-mississauga** — MAC Mississauga
- **pickering-islamic-centre** — Pickering Islamic Centre
- **islamic-society-of-ajax** — Islamic Society of Ajax
- **brampton-islamic-centre** — Brampton Islamic Centre
- **richmond-hill-islamic-centre** — Richmond Hill Islamic Centre
- **islamic-centre-of-scarborough** — Islamic Centre of Scarborough
- **sayeda-khadija-centre** — Sayeda Khadija Centre, Mississauga (women-focused)
- **masjid-bilal-toronto** — Masjid Bilal, Toronto
- **assunnah-muslim-association** — Assunnah Muslim Association, Ottawa (for GTA visitors)
- **hamilton-mountain-mosque** — Hamilton Mountain Mosque (nearby city)

---

## Steps (`locales/en/steps/`)

**Existing (10 steps):** shahada, ghusl, prayer, community, quran, halal-haram, fasting, character, knowledge, zakat-hajj

Steps are tied to stages. Adding new steps means updating the corresponding stage's `stepIds` array in `stages.json`.

**Potential additions (for existing stages or new ones):**

- **wudu** (stage: day-0-1) — Detailed guide to performing wudu (ablution before prayer)
- **first-masjid-visit** (stage: week-1) — What to expect, etiquette, what to wear, how to follow along
- **dua-basics** (stage: week-1) — Learning basic duas for daily life
- **friday-prayer** (stage: week-2-3) — Guide to attending Jumuah for the first time
- **telling-family** (stage: week-2-3) — How to tell family and friends about your conversion
- **ramadan-prep** (stage: month-1-2) — Preparing for your first Ramadan
- **islamic-dress** (stage: month-1-2) — Understanding modesty guidelines, practical first steps
- **finding-mentor** (stage: month-3-6) — How to find and work with an Islamic mentor or teacher

---

## Stages (`locales/en/stages.json`)

**Existing (6 stages):**
1. day-0-1 — Embrace Faith & Fresh Start (shahada, ghusl)
2. week-1 — Building Foundations (prayer, community)
3. week-2-3 — Strengthening Practice (quran)
4. month-1-2 — Broadening Practice (halal-haram, fasting)
5. month-3-6 — Deepening Faith (character, knowledge)
6. month-6-plus — Lifelong Growth (zakat-hajj)

No new stages needed for MVP. New steps should fit into existing stages.

---

## How to Add Content

### Adding a glossary term
Add an object to `locales/en/glossary.json`:
```json
{
  "id": "unique-id",
  "term": "Display Term",
  "arabicText": "Arabic script (optional)",
  "transliteration": "how to pronounce (optional)",
  "definition": "Plain language definition.",
  "seeAlso": ["related-term-id"]
}
```

### Adding a topic
Create `locales/en/topics/{slug}.json`:
```json
{
  "id": "slug",
  "slug": "slug",
  "title": "Topic Title",
  "description": "One-line summary.",
  "sections": [
    { "heading": "Section Heading", "content": "Paragraph content..." }
  ],
  "relatedStepIds": ["prayer"],
  "relatedGlossaryIds": ["salah"],
  "relatedResourceIds": ["learn-salah-guide"]
}
```

### Adding a resource
Add an object to `locales/en/resources.json`:
```json
{
  "id": "unique-id",
  "title": "Resource Title",
  "type": "article|video|book|app|community|pdf",
  "url": "https://...",
  "description": "Brief description.",
  "relatedStepIds": [],
  "relatedTopicIds": []
}
```

### Adding a masjid
Add an object to `locales/en/masjids.json`:
```json
{
  "id": "unique-slug",
  "name": "Masjid Name",
  "address": "123 Street",
  "city": "Toronto",
  "stateProvince": "Ontario",
  "country": "Canada",
  "postalCode": "M1A 1A1",
  "coordinates": { "lat": 43.6532, "lng": -79.3832 },
  "phone": "+1-416-555-0000",
  "website": "https://...",
  "notes": "Any special info for converts."
}
```

### Adding a step
1. Create `locales/en/steps/{slug}.json` following the Step schema
2. Update the parent stage in `locales/en/stages.json` — add the step id to `stepIds`
