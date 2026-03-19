
## Topics (`locales/en/topics/`)

Each topic is a JSON file with: id, slug, title, description, sections (array of {heading, content}), relatedStepIds, relatedGlossaryIds, relatedResourceIds.

**Existing (7 topics):** beliefs, prayer, quran, community, fasting, character, purification

**To add USING AUTHETIC SOURCES AND MAKING IT EASY FOR NEW REVERTS -HELPFUL and UDNERSTANDING TONE (LIKE WHAT I ALREADY HAVE THROUGHOUT):**

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

## How to Add Content


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


### Adding a step
1. Create `locales/en/steps/{slug}.json` following the Step schema
2. Update the parent stage in `locales/en/stages.json` — add the step id to `stepIds`
