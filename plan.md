# Revert Guide Next Improvement Plan

## 1. Purpose

This document is the ongoing user-facing improvement plan for Revert Guide. It replaces the previous plan and starts from the current application state after all work described in that plan was completed or carried forward.

This is a planning document only. Do not implement features from this file until a phase is explicitly selected for implementation.

After each phase is completed, a short completion note must be added directly to that phase section in this file. The note should state what was finished, any content or scope that was changed during implementation, and anything that was deferred. This keeps the plan accurate for future phases.

---

## 2. Non-Negotiable Constraints

- All new features, UI changes, illustrations, copy, educational content, source presentation, tool pages, print views, and roadmap details must follow `brand-guidelines.md`.
- New work must be English only.
- Other languages must be added only after the English version has been manually tested and approved.
- Do not add features focused on app stabilization, CI/CD, deployment pipelines, infrastructure, or engineering process improvements.
- Do not add local progress tracking, bookmarks, saved progress, saved notes, reminders, accounts, user profiles, or similar persistence-based features.
- Do not add search-related features or search improvements. Existing search surfaces may remain, but this plan must not expand them.
- Focus only on user-facing application features, content, tools, resources, and roadmap improvements.
- Do not add content from anonymous, weak, untraceable, or unreviewed sources.
- Every factual, religious, educational, health, financial, resource, tool, or community claim added by this plan must be backed by authentic and trustworthy sources where online sources are available.
- If an authoritative online source cannot be found for a claim, do not publish the claim or label it clearly as requiring local or manual verification.
- Do not present religious, medical, legal, financial, or safety content as personalized advice. Use clear disclaimers and refer users to qualified local imams, scholars, clinicians, crisis services, legal professionals, financial professionals, or official agencies as appropriate.

---

## 3. Source And Trust Policy

Every phase must begin with source discovery and source mapping before content is written.

Required source rules:

- Prefer primary or official sources: Quran text providers, hadith collection references, official organization pages, official public-health pages, official masjid or community pages, official API documentation, official public-rights pages, official Hajj or Umrah platforms, and recognized qualified educational institutions.
- Quran Arabic text must come from a verified Quran text source such as Tanzil or Quran.com or the Quran Foundation.
- Quran translations must be labeled as translations of meaning. Do not imply that a translation is the Arabic Quran itself.
- Hadith must include collection name, hadith number or stable reference, source URL, and grading where available.
- Religious guidance must stay introductory and practical. Differences of opinion should be acknowledged when relevant without overwhelming beginners.
- Medical and mental-health content must cite official public-health or qualified clinical sources and state that the app is not a substitute for professional care.
- Legal-adjacent content must cite official public-rights sources and state that the app is not legal advice.
- Financial content such as zakat must remain educational and recommend qualified review for personal cases.
- Local community and masjid data must come from official masjid or community websites, direct organization contact, or a documented trusted directory. If not verified, label it local verification needed.
- YouTube or video resources may be added only when the channel is official, the speaker or organization is identifiable, and the content fits brand-guidelines.md.
- Do not cite social media posts, Reddit threads, anonymous PDFs, unattributed quote images, or unreviewed blogs.
- Do not add a new resource unless the author, publisher, organization, and purpose are clear.

Current trusted source categories to prefer:

- Quran text and translation: Tanzil, Quran.com, Quran Foundation, The Clear Quran.
- Hadith: Sunnah.com for accessible references plus original collection names and numbers.
- New Muslim education: New Muslim Academy, SeekersGuidance, WhyIslam, Yaqeen Institute, ICNA New Muslim Support, and local masjid or convert-support programs with official websites.
- Mental health and crisis: 988 Suicide and Crisis Lifeline, SAMHSA 988, CDC suicide-prevention resources, Crisis Text Line, Naseeha, Khalil Center.
- Public rights and safety: Ontario Human Rights Commission pages for creed or religious accommodation, relevant official local public-safety resources, and local legal or professional referral wording.
- Tools and maps: AlAdhan prayer times API, OpenStreetMap, Nominatim usage policy.
- Hajj and Umrah: Nusuk Hajj or Umrah official platforms and official government travel guidance.
- Zakat education: Quran 9:60, Islamic Relief USA zakat FAQ, LaunchGood zakat policy, and qualified local scholarly review before detailed rulings.
- Seerah: Yaqeen Institute seerah collection, SeekersGuidance seerah courses, New Muslim Academy.

Source registry requirements:

- Add or reuse entries in locales/en/sources.json.
- Each source entry should include stable source ID, title, organization, category, URL, source type, source label, access or review date, review status, and a short trust note.
- Attach source IDs to content records wherever practical.
- Display source tags or source panels visibly on pages that add factual or religious guidance.
- External source links must open in a new tab with rel="noopener noreferrer".
- Source tags must not imply endorsement by the external organization.

Internal review states:

- draft: written but not source-checked.
- source-checked: citations and URLs checked against trusted online sources.
- review-needed: needs qualified review because it touches religious rulings, mental health, safety, legal-adjacent, financial, or sensitive family issues.
- approved: manually reviewed and approved for the English version.

---

## 4. Brand And Content Direction

All new features, UI changes, and content must follow brand-guidelines.md.

The Revert Guide voice must remain:

- Gentle, practical, and spiritually grounded.
- Beginner-readable without talking down to the user.
- Non-judgmental and non-pressuring.
- Mainstream Sunni-oriented without sectarian argument.
- Clear about what matters now and what can wait.
- Honest about difficulty without overwhelming the user.
- Structured with short summaries first and deeper detail behind accordions, secondary sections, or print views.
- Careful with Arabic, transliteration, translation labels, lang="ar", and dir="rtl" where needed.
- Accessible on mobile and desktop with clear touch targets, visible focus states, readable contrast, and reduced-motion-friendly behavior.

Use existing component patterns first. Add a new component only if the feature genuinely needs it and the component fits brand-guidelines.md.

---

## 5. Current State Of The Application

### Platform and structure

- Next.js 14 App Router project with static export. React 18, TypeScript, Tailwind CSS, Serwist, Leaflet, Capacitor.
- Localized route structure under app/[locale]. Supported locales: en, fr, es, hi, ur, zh, tl, pa, pt, ko, fa, ru, bn.
- English is the default and only fully developed locale.
- Shared UI components: Button, Card, Callout, Accordion, AnimateIn, Breadcrumb, Icon, SourceTags, SourcesPanel, PrintButton, GlossaryTooltip, LanguageSwitcher, Navbar, MobileNav, Footer, OfflineIndicator.

### English content inventory (current)

- Roadmap stages: 6 (day-0-1, week-1, week-2-3, month-1-2, month-3-6, month-6-plus).
- Roadmap steps: 20 (shahada, first-24-hours, ghusl, prayer-on-ramp, prayer, first-masjid-visit, first-jumuah, community, daily-dua-dhikr, family-and-friends, halal-eating-practical, modesty-and-clothing, questions-and-doubts, quran, halal-haram, fasting, character, knowledge, asking-an-imam, zakat-hajj).
- Topics: 15 (beliefs, character, community, dua-and-dhikr, family-and-identity, fasting, halal-living, masjid-and-community, modesty, new-muslim-basics, prayer, prophet-muhammad, purification, questions-and-doubts, quran).
- Glossary entries: 109.
- Source registry entries: 112.
- Resources: 35.
- Masjid records: 12 (Toronto area).

### Public pages and tools

- Home page with journey entry points and quick-access links.
- Roadmap hub, stage pages, and step detail pages.
- Topic hub and topic detail pages.
- Glossary page.
- Resources page.
- Sources and citations page.
- About, accessibility, privacy, terms, offline, and not-found pages.
- Ramadan guide.
- Mental health page.
- Prayer times tool using AlAdhan API.
- Qibla finder with geolocation, manual coordinate support, and compass.
- 99 Names of Allah tool using AlAdhan API with in-page filtering.
- Find a Masjid page with Leaflet map, OpenStreetMap tiles, Nominatim geocoding, list and map views, filters, source tags, and directions links.
- Wudu and ghusl worship learning tool.
- Practical life guide hub with 11 guides: family-and-friends, first-masjid-visit, work-and-school, identity-and-culture, relationships-and-marriage-basics, loneliness-and-belonging, healthy-community-signs, halal-living-in-daily-life, modesty-and-clothing, how-to-ask-for-help, guide-for-mentors.
- Seasonal guide hub with 8 guides: eid-al-fitr, dhul-hijjah-hajj-umrah, zakat, islamic-calendar, muharram-ashura, rabi-al-awwal-seerah, rajab-shaban-preparation, year-round-charity-service.
- Salah learning companion tool at /en/tools/salah-companion.
- Dua and dhikr reference page at /en/dua-dhikr.
- Quran starter path page at /en/quran-starter.
- Prophet Muhammad and seerah topic expanded with full beginner-readable sections.

### Hidden route state

- Hidden dawah guide at /en/dawah-guide-personal and root alias /dawah-guide-personal.
- Noindexed, out of public navigation.
- English and Bengali versions generated.
- English guide status: source-checked, not yet approved.
- Includes GORAP-style flow, quick reference, print action, tone principles, common questions, misconception responses, scenarios, dua reminders, and training cards.

### What is not yet done

- Printable beginner pack hub was planned in the previous plan but not implemented. This remains the highest-priority pending item.
- Resource page still displays a flat list. Curated named collections for beginner themes were planned but not fully built.
- Masjid records have not been enriched with new-Muslim-specific profile notes from official source data.
- Additional practical life guides from the backlog are not yet built: parents or spouses guide, Muslim student association guide, accessibility in the masjid guide, online misinformation guide, community service guide.
- Glossary has 109 entries; many terms introduced in newer tools and guides lack matching entries.
- Several important beginner topics are either absent or very short: tazkiyah and heart purification basics, istikhara prayer, daily sunnah habits, Islamic aqeedah depth, janazah awareness, and a seeker or pre-Shahada public guide.
- No structured page covers the perspective of someone exploring Islam before they take Shahada.
- Dawah guide placeholder content and some approval upgrades from the previous plan remain in progress.
- English manual approval and translation readiness have not been completed.

---

## 6. Recommended Phase Order

1. Phase 1: Printable beginner packs (pending carry-over).
2. Phase 2: Seeker and pre-Shahada public guide.
3. Phase 3: Roadmap step content depth expansion.
4. Phase 4: Topic additions and depth expansion.
5. Phase 5: Glossary expansion.
6. Phase 6: Additional practical life guides.
7. Phase 7: Resource collections and masjid enrichment.
8. Phase 8: Hidden dawah guide completion.
9. Phase 9: English manual approval readiness.

Phases can be implemented independently, but each phase must begin with source discovery and source mapping before content is written.

---

## 7. Phase 1: Printable Beginner Packs

### Status

Not yet started. Carried over from the previous plan. This is the highest-priority pending item.

### Goal

Create printable, offline-friendly English learning packs that help new Muslims and mentors use key guidance away from the app without adding saved state.

### User-facing outcomes

- Users can print or save concise packs as PDFs using the browser.
- Mentors can share beginner materials in classes or one-on-one support.
- Important guidance remains usable when live tools or APIs are unavailable.
- Packs link back to the full guide pages for deeper reading.

### Planned packs

1. First Week Pack
   - Shahada meaning and what changes immediately.
   - First 24 hours summary.
   - Ghusl essentials.
   - Prayer on-ramp.
   - First masjid visit summary.
   - What can wait.

2. Prayer Basics Pack
   - Wudu essentials with sequence.
   - Prayer times overview and how to find them.
   - Prayer movement sequence for two rak'ah.
   - Al-Fatiha and short surah learning notes.
   - Common beginner mistakes and gentle corrections.
   - What to ask an imam.

3. Community And Conversations Pack
   - First masjid visit.
   - Friday prayer basics.
   - How to ask for help.
   - Family and friend conversation scripts from the life guide.
   - Work and school accommodation scripts.

4. Ramadan And Eid Pack
   - First fast.
   - Suhoor and iftar.
   - Taraweeh basics.
   - Laylat al-Qadr.
   - Eid al-Fitr guide summary.
   - Fasting hardship and health disclaimer.

5. Mentor Quick Pack
   - How to welcome a new Muslim.
   - First meeting checklist.
   - What not to overwhelm them with.
   - Referral prompts for scholars, clinicians, and safety professionals.
   - Questions not to answer alone.

### Implementation steps

1. Create an English-only print pack hub at /en/print-packs.
2. Create individual pack pages under /en/print-packs/[packSlug].
3. Build pages using existing cards, callouts, source panels, and PrintButton patterns.
4. Keep content self-contained enough to print, but cross-link to full guide pages.
5. Apply print CSS from brand-guidelines.md: single-column layout, hidden nav, visible URLs after links, expanded accordions, readable black text, and page-break avoidance.
6. Attach source IDs to each pack and show a printed source list.
7. Do not add downloaded generated files, saved pack selections, bookmarks, check-off state, or progress persistence.

### Trusted source starting points

- Existing source registry entries for Shahada, ghusl, prayer, masjid visits, Ramadan, zakat, and mental health.
- Tanzil or Quran.com for Quran references.
- Sunnah.com for hadith references.
- New Muslim Academy, SeekersGuidance, WhyIslam, and Yaqeen Institute for beginner educational framing.

### Completion criteria

- At least three English print packs are live and printable.
- Source panels or printed source lists are visible.
- No persistence, tracking, bookmarks, search changes, infrastructure work, or non-English expansion is introduced.

### Completion note

_Not yet completed. To be filled in after implementation._

---

## 8. Phase 2: Seeker And Pre-Shahada Public Guide

### Goal

Add a public English guide for people who are curious about Islam or seriously considering the Shahada but have not yet converted. This guide must be warm, non-pressuring, and entirely free of any urgency framing.

### User-facing outcomes

- Seekers can read about Islam without feeling pushed.
- They understand what the Shahada means and what it does not require overnight.
- They can take their time without the app implying they should hurry.
- They can find basic next steps if they decide to take Shahada, without the guide replacing a local imam or community.

### Planned content

- Route: /en/guides/before-shahada or a dedicated /en/before-shahada page linked from the home page.
- Sections:
  - What brings people to this point: diverse paths without romanticizing or pressuring.
  - What the Shahada is: the declaration of faith in one God and the prophethood of Muhammad.
  - What the Shahada is not: not an overnight transformation, not a required name change, not a requirement to know everything first.
  - What changes and what does not have to change immediately.
  - Common sincere questions: Do I have to leave my family or culture? What if I am not sure yet? Do I have to change my name? What happens if I take Shahada and struggle? Can I take Shahada privately?
  - How to take Shahada: with a local imam, with a witness, or privately with intention.
  - What happens next summary pointing to the main roadmap.
  - It is okay to wait and keep learning reassurance block.
  - Ask before you decide prompt: local masjid, WhyIslam live chat, New Muslim Academy contact.

### Implementation steps

1. Source-check all religious and pastoral guidance before writing page copy.
2. Add source registry entries for seeker-focused educational content from WhyIslam, New Muslim Academy, Yaqeen Institute, and SeekersGuidance.
3. Build the guide page using existing card and callout components.
4. Link from the home page as a contextual entry point for people who have not yet converted.
5. Keep tone exploratory and welcoming with no urgency.
6. Do not add a Take Shahada now button or conversion call-to-action.

### Trusted source starting points

- WhyIslam new Muslim resources at whyislam.org.
- New Muslim Academy at newmuslimacademy.org.
- Yaqeen Institute becoming Muslim content.
- SeekersGuidance articles on the beginning of the spiritual path.

### Completion criteria

- English seeker guide is live and linked from the home page.
- No pressure, countdown, or conversion call-to-action is present.
- Source panel is visible.
- No persistence, search changes, or non-English expansion is introduced.

### Completion note

_Not yet completed. To be filled in after implementation._

---

## 9. Phase 3: Roadmap Step Content Depth Expansion

### Goal

Enrich specific existing roadmap steps with more practical obstacles, scripts, cross-links, ask-an-imam-if blocks, and source tags. The later-stage steps deserve the same depth as the first-week steps.

### Steps targeted for enrichment

1. character (month-3-6 stage)
   - Add practical examples of Islamic character in difficult situations: patience with a hostile family member, honesty when it costs you, mercy toward people you disagree with.
   - Add Sunnah in small moments list cross-linked to Prophet Muhammad topic.
   - Add source tags for hadith on character from existing registry.

2. knowledge (month-3-6 stage)
   - Add a How to find a teacher practical sub-section.
   - Add How to tell if a source is reliable beginner checklist.
   - Add Avoid before you are ready section: debate channels, fatwa shopping, complex polemical content.
   - Add source tags pointing to New Muslim Academy and SeekersGuidance for structured learning paths.

3. community (week-1 stage)
   - Add a section for converts who do not have a local community nearby.
   - Add online community options with identifiable organizations only.
   - Add a gentle warning signs in community cross-link to the healthy-community-signs life guide.
   - Add source tags for ICNA and New Muslim Academy community resources.

4. asking-an-imam (month-1-2 stage)
   - Add a sample first conversation script.
   - Add How to frame a question respectfully guidance.
   - Add a list of topics that do not require an imam right now versus topics that benefit from qualified guidance.
   - Clarify the difference between asking an imam, using an online fatwa site, and watching YouTube.

5. halal-haram (month-1-2 stage)
   - Add a Start with the big picture section: avoid what is clearly prohibited, be gentle with grey areas, ask qualified scholars before major decisions.
   - Add a Halal certification: what to know sub-section with honest framing.
   - Cross-link to the halal-living-in-daily-life life guide.

6. zakat-hajj (month-6-plus stage)
   - Add a Zakat before Hajj priority note.
   - Add a First Hajj: plan years ahead practical framing.
   - Enrich the Hajj planning section with Nusuk source reference.
   - Cross-link to the dhul-hijjah-hajj-umrah seasonal guide.
   - Add source tags for Quran 2:196-197 and Islamic Relief USA zakat FAQ.

7. fasting (month-3-6 stage)
   - Add a What to do if you miss a fast beginner orientation (not rulings, just direction to a qualified teacher).
   - Add a Fasting with a health condition disclaimer pointing to healthcare professionals and a local imam.
   - Cross-link to the Ramadan seasonal guide and Eid al-Fitr guide.

### New content to add as a topic (not a step)

Add a missed-prayers orientation as a topic page at /en/topics/missed-prayers rather than a numbered step, to avoid it feeling like a task or tracker. Content: qada concept, how to ask a qualified teacher, avoiding paralysis, not abandoning prayer out of guilt.

### Implementation steps

1. Source-check all new additions before writing.
2. Update the affected step JSON files in locales/en/steps/.
3. Add any new source IDs to locales/en/sources.json.
4. Use existing component patterns for scripts and scenario blocks.
5. Cross-link to related tools, life guides, seasonal guides, and topics.

### Trusted source starting points

- Existing source registry (112 entries) should cover most references needed.
- Sunnah.com for character and knowledge hadith.
- SeekersGuidance and New Muslim Academy for learning-path framing.
- Nusuk Hajj and Islamic Relief USA for zakat and Hajj enrichment.
- Qualified review before adding fasting health guidance.

### Completion criteria

- At least five of the seven targeted steps have been enriched.
- The missed-prayers topic page is live as a topic, not a step.
- New source tags are visible on enriched content.
- No persistence, search changes, or non-English expansion is introduced.

### Completion note

_Not yet completed. To be filled in after implementation._

---

## 10. Phase 4: Topic Additions And Depth Expansion

### Goal

Add missing beginner-essential topics and enrich existing thin topics so the topic hub covers the full range of a new Muslim's learning needs in the first year.

### New topics to add

#### Topic A: Missed Prayers Orientation

- Route: /en/topics/missed-prayers
- Explain qada at an introductory level.
- Frame the approach: pray going forward, ask a qualified teacher about making up past prayers, do not let perfectionism become a barrier.
- Ask qualified help if block: how much to make up, combining makeup prayers, specific health situations.
- Review status: review-needed until scholar review.

#### Topic B: Tazkiyah - Heart Purification Basics

- Route: /en/topics/tazkiyah
- Introduce tazkiyah al-nafs for a complete beginner in practical Quranic terms.
- Sections: what tazkiyah means; tawbah as an everyday practice; husn al-dhann as a foundation; taqwa in small choices; works of the heart a beginner can start with.
- Source from Quran 91:9-10, Quran 2:222, relevant hadith on tawbah and intention via Sunnah.com, and introductory tazkiyah content from SeekersGuidance or Yaqeen Institute.
- Cross-link to character step, dua-and-dhikr topic, mental health page.
- Review status: review-needed before publishing.

#### Topic C: Istikhara - Seeking Guidance In Decisions

- Route: /en/topics/istikhara
- Explain istikhara as sincere guidance-seeking, not a sign system.
- Sections: what istikhara is and when to use it; the prayer and dua with Arabic, transliteration, and translation; common misunderstandings; what to do after making istikhara.
- Source the istikhara dua from Sahih al-Bukhari, Book 19, Hadith 1166 via Sunnah.com.
- Cross-link to salah topic, dua-and-dhikr page, questions-and-doubts topic.
- Review status: source-checked.

#### Topic D: Daily Sunnah Habits

- Route: /en/topics/daily-sunnah-habits
- Practical topic of beginner-accessible Sunnah practices from daily life.
- Sections: morning dhikr on waking; bismillah before starting anything; saying salam to people you meet; using the right hand for eating and giving; miswak or tooth-cleaning intention; sleeping on the right side with a short dua; choose one this week framing.
- Source each Sunnah from specific hadith references via Sunnah.com.
- Cross-link to dua-and-dhikr page, Prophet Muhammad topic, character step.
- Review status: source-checked after hadith verification.

#### Topic E: Janazah Awareness For New Muslims

- Route: /en/topics/janazah
- Brief practical topic so new Muslims know what to expect when someone in their community passes away.
- Sections: the Islamic view of death and afterlife; what janazah is; what to do when someone in your community dies; attending a janazah as a new Muslim; inna lillahi wa inna ilayhi rajiun with Arabic, transliteration, meaning; grief in Islam.
- Source from Quran 2:156, relevant hadith on janazah and condolence via Sunnah.com, and brief educational framing from SeekersGuidance or New Muslim Academy.
- Cross-link to mental health page, community life guide, and glossary entries for janazah and sabr.
- Review status: review-needed for fiqh details. Janazah prayer rulings are not explained in detail; new Muslims are directed to ask their imam.

### Existing topics to enrich

#### beliefs topic (enrich significantly)

Current state: present but comparatively thin given the importance of the six pillars of iman.

Planned additions:
- Expand to cover all six pillars of iman in beginner terms: belief in Allah, angels, revealed books, prophets, the Day of Judgment, and divine decree.
- Add What tawhid means in everyday life practical section.
- Add Angels: what Muslims believe and what this means for daily life section.
- Add Books and prophets before Muhammad brief orientation without interfaith debate.
- Add Day of Judgment: hope and purpose, not only fear section.
- Add Qadar and free will: a beginner question section with honesty about complexity and direction to qualified teachers.
- Source from Quran references for each pillar via Tanzil and Quran.com, plus introductory aqeedah content from New Muslim Academy or SeekersGuidance.
- Review status: review-needed.

#### questions-and-doubts topic (enrich)

Planned additions:
- Types of doubts new Muslims face: intellectual, emotional, social, and spiritual.
- Why doubts are not the same as hypocrisy or loss of faith.
- Doubts versus waswasah (intrusive whispers): brief distinction.
- How to write down a question before bringing it to a teacher.
- Sources of reliable answers vs sources to approach cautiously.
- If a verse or hadith disturbs you: step-by-step framing.
- Cross-link to prophet-muhammad topic (when online claims disturb you) and asking-an-imam step.

### Implementation steps

1. Start with source discovery for all new topics before writing any content.
2. Add source registry entries for any sources not already in locales/en/sources.json.
3. Create new topic JSON files in locales/en/topics/.
4. Create new topic [topicSlug]/page.tsx pages using the existing topic page pattern.
5. Add new topic slugs to any hub or listing that surfaces them.
6. Enrich the two existing topics by editing their JSON files.
7. Cross-link all new topics to related steps, glossary entries, tools, and life guides.
8. Add source panels to each new topic page.

### Trusted source starting points

- Quran.com and Tanzil for Quran references.
- Sunnah.com for hadith: istikhara (Bukhari 1166), daily habits, tazkiyah, janazah.
- SeekersGuidance and New Muslim Academy for introductory aqeedah, tazkiyah, and istikhara explanations.
- Yaqeen Institute for aqeedah and doubt-related content.
- Qualified scholar review before aqeedah, tazkiyah, and janazah content is marked approved.

### Completion criteria

- At least three new topic pages are live with source panels and cross-links.
- beliefs topic is significantly enriched.
- questions-and-doubts topic has the new sub-sections.
- No persistence, search changes, or non-English expansion is introduced.

### Completion note

_Not yet completed. To be filled in after implementation._

---

## 11. Phase 5: Glossary Expansion

### Goal

Add 20 to 30 new glossary terms that appear in the newer tools, topics, and life guides but do not yet have entries.

### Terms to add

Verify each term against locales/en/glossary.json before writing. Do not duplicate existing entries.

1. Tayammum - dry ablution using clean earth or dust when water is unavailable or harmful to use.
2. Wali - guardian; used in Islamic marriage context and also for a righteous close person.
3. Mahram - a close male relative a woman cannot marry, relevant for travel and modesty contexts.
4. Qada - making up a missed obligatory act of worship, primarily missed prayers or fasts.
5. Tarawih - additional voluntary night prayer performed during Ramadan, usually in congregation.
6. Itikaf - spiritual retreat in the masjid, especially in the last ten days of Ramadan.
7. Tawaf - ritual circumambulation of the Ka'bah during Hajj or Umrah.
8. Sa'i - walking seven times between the hills of Safa and Marwa during Hajj or Umrah.
9. Mawlid - the observance of the Prophet's birthday; entry must acknowledge scholarly differences without taking a sectarian position.
10. Ghayb - the unseen world: what is beyond human perception, including angels, the afterlife, and divine knowledge.
11. Tawbah - sincere repentance and turning back to Allah.
12. Taqwa - God-consciousness and mindful awareness of Allah in all situations.
13. Husn al-dhann - good opinion or positive interpretation, especially toward Allah and other people.
14. Waswasah - intrusive whispers or doubts, often attributed to Shaytan, that can disturb prayer or create unfounded fears.
15. Qiyas - analogical reasoning used by Islamic scholars to derive rulings; direct beginners to ask a qualified teacher.
16. Usul al-fiqh - the principles of Islamic jurisprudence; brief entry directing beginners to qualified teachers.
17. Istikhara - seeking guidance from Allah through a specific prayer and dua before important decisions.
18. Janazah - the Islamic funeral prayer and the broader rites for the deceased.
19. Barzakh - the intermediate state between death and the Day of Resurrection.
20. Akhirah - the hereafter, the life after death.
21. Adab - already present (id: adab); confirm the entry is adequate.
22. Niyyah - already present (id: niyyah); confirm the entry exists and is adequate.

Before adding any term, confirm it is not already present in glossary.json by checking its expected id.

### Content rules for glossary entries

- Keep definitions plain-language and beginner-readable.
- Include arabicText, transliteration, and seeAlso references.
- Do not add definitions that require detailed rulings without a review-needed marker.
- Entries with scholarly differences must acknowledge the difference without taking a sectarian position.

### Implementation steps

1. Audit locales/en/glossary.json for all existing IDs before writing any new entries.
2. Write new entries for confirmed-missing terms only.
3. Sort new entries into the alphabetical order of the JSON array.
4. Update seeAlso arrays in related existing entries where new terms connect.
5. Verify Arabic text and transliterations against identifiable educational sources before committing.

### Trusted source starting points

- Existing glossary entries for style and format reference.
- SeekersGuidance and New Muslim Academy for plain-language Islamic term definitions.
- Sunnah.com for hadith-based terms.
- Quran.com or Tanzil for Quran-based terms.

### Completion criteria

- At least 20 new terms are added with Arabic, transliteration, definition, and seeAlso.
- No existing entries are changed unless a factual error is found.
- All new entries follow the existing format exactly.

### Completion note

_Not yet completed. To be filled in after implementation._

---

## 12. Phase 6: Additional Practical Life Guides

### Goal

Add the remaining practical life guides from the previous plan's backlog that were not implemented.

### New guides to add

These guides follow the existing LifeGuide interface in lib/life-guides.ts.

#### Guide 1: Parents And Spouses Of New Muslims

- Slug: parents-and-spouses
- Audience: the partner, parent, sibling, or close family member of a new Muslim, or the new Muslim preparing to speak with them.
- Sections: what is happening from their perspective; what you can say and what can wait; common fears and honest responses; boundaries that protect the new Muslim without permanently damaging the relationship; when professional support helps; if the relationship is a spouse: what changes and what Canadian law requires.
- Scripts: A gentle first conversation with a worried parent. A brief explanation to a spouse.
- Source from New Muslim Academy, WhyIslam, Ontario Human Rights Commission, and official Muslim family support organizations.
- Review status: review-needed (spouse and family law framing needs qualified review).

#### Guide 2: Muslim Student Association Guide

- Slug: muslim-student-association
- Sections: what an MSA is and what it typically offers; how to find the MSA at your school; what to expect at your first meeting; how to use an MSA without letting group pressure replace personal learning; questions to ask the MSA before getting deeply involved; if your school does not have an MSA.
- Scripts: First message to an MSA. How to ask about prayer accommodation at school.
- Source from ISNA Canada, WhyIslam campus resources, and Ontario Human Rights Commission religious accommodation guidance.
- Review status: source-checked.

#### Guide 3: Accessibility In The Masjid

- Slug: accessibility-in-the-masjid
- Sections: how to find out whether a masjid is physically accessible before visiting; prayer for people who cannot stand or prostrate fully; who to contact at the masjid to arrange accommodations; women's prayer spaces; sensory or social considerations; ask before going script.
- Source from Ontario Human Rights Commission religious accommodation guidance, New Muslim Academy, and verified masjid accessibility resources.
- Review status: source-checked for general framing; review-needed for prayer-posture fiqh guidance.

#### Guide 4: Handling Online Misinformation As A New Muslim

- Slug: online-misinformation
- Sections: why new Muslims are often targeted by misinformation; types of misinformation: misquoted Quran, out-of-context hadith, fabricated hadith, anti-Islam polemics, and extreme fringe groups; how to verify a Quran verse is being used accurately; how to verify a hadith reference using Sunnah.com; warning signs of unreliable Islamic content; if something online disturbs you step-by-step framing.
- Cross-link to questions-and-doubts topic.
- Source from Yaqeen Institute media literacy content, SeekersGuidance, and New Muslim Academy.
- Review status: source-checked.

#### Guide 5: Community Service And Giving Beyond Zakat

- Slug: community-service-and-giving
- Sections: sadaqah: voluntary giving of time, skills, money, or kindness; the prophetic principle that removing something harmful from a path is charity; how to find authentic community service or charity opportunities in the Toronto area; questions to ask before giving to an organization: registration status, transparency, verified mission; simple everyday acts that count as sadaqah; avoiding burnout.
- Source from Quran 2:261, relevant hadith on charity via Sunnah.com, and verified Canadian Muslim charity organizations with CRA registration numbers where available.
- Review status: source-checked.

### Implementation steps

1. Add each guide to lib/life-guides.ts one at a time.
2. Source-check each guide before adding it.
3. Add source registry entries for any sources not already in locales/en/sources.json.
4. Add the guide slug to the guides hub page.
5. Cross-link each guide to relevant steps, topics, seasonal guides, and tools.
6. Add scripts and scenario blocks using existing patterns.
7. Mark all guides with appropriate reviewStatus.

### Trusted source starting points

- New Muslim Academy, WhyIslam, Yaqeen Institute, SeekersGuidance for general framing.
- Ontario Human Rights Commission for accommodation and legal-adjacent framing.
- ISNA Canada for student and community organization framing.
- Quran.com and Sunnah.com for sadaqah references.
- Qualified professional review before spouse and family-law framing is published.

### Completion criteria

- At least three of the five guides are live.
- Each guide has source tags, scenario blocks, scripts, and related links.
- Sensitive content is marked review-needed.
- No persistence, tracking, search changes, or non-English expansion is introduced.

### Completion note

_Not yet completed. To be filled in after implementation._

---

## 13. Phase 7: Resource Collections And Masjid Enrichment

### Goal

Make the resources and masjid areas more beginner-useful through named curated collections and richer masjid profile notes backed only by official source data.

### Planned resource page improvements

#### Named curated collections

Add the following named collections to the resources page, each grouping existing resources by beginner theme:

1. First Week Essentials - resources a new Muslim should know about in their first days.
2. Learn To Pray - prayer tutorial, wudu guides, and prayer-times tools.
3. Quran For Beginners - translation, recitation, and etiquette resources.
4. Family And Identity - resources on navigating family and community.
5. Mental Health And Crisis Support - Khalil Center, Naseeha, 988 Lifeline, Crisis Text Line.
6. Ramadan And Eid - seasonal guides and Ramadan-specific resources.
7. Zakat And Giving - Islamic Relief USA zakat FAQ, LaunchGood, sadaqah guidance.
8. For Mentors - New Muslim Academy mentor materials, guide-for-mentors life guide, mentor quick pack.

These collections are curated groupings of existing resources. No new resource entry should be added unless it passes the full source trust policy.

#### How to choose a resource guidance

Add a brief guidance block on the resources page:
- Who made it and are they identifiable?
- Is it beginner-friendly?
- Does it cite sources or just assert?
- Does it pressure or shame?
- Does it distinguish scholarly opinion from established rulings?

#### Resource trust warnings

Add a visible callout to the resources page:
- Avoid anonymous fatwa screenshots.
- Avoid debate-focused channels as your primary learning source.
- Avoid quote images without original sources.

#### New resource entries to evaluate

Only add resources that pass the full source trust policy. Candidates to verify against official pages:
- SeekersGuidance Islamic Studies curriculum at seekersguidance.org/courses.
- Yaqeen Institute Islamic Studies PDF series at yaqeeninstitute.org.
- ISNA Canada new Muslim resources at isnacanada.com.
- Official Seerah course from Yaqeen Institute (verify through official page only).

Do not add any of these unless the URL, author, and organization are confirmed from the official source page.

### Planned masjid improvements

For each of the 12 existing masjid records in locales/en/masjids.json, add or verify the following fields based only on official masjid website or documented official directory data:
- newMuslimContact: official contact point for new Muslims or revert support, or null.
- programsNote: brief note on classes or new Muslim programs if officially listed.
- womensSpaceNote: note on women's prayer space access if the masjid website states it.
- accessibilityNote: note on wheelchair access or prayer seating if officially listed.
- jumuhNote: Friday prayer time notes if the masjid website lists them.
- callBeforeVisiting: boolean or note about whether checking ahead is recommended.

If official source data does not confirm a field, set the value to null and do not add any unofficial claim.

Additionally, identify and add 3 to 5 new Toronto-area masjid records where a verifiable official website exists, the address and coordinates can be confirmed from the official page, and at least one source entry exists or can be created in locales/en/sources.json.

### Implementation steps

1. Verify every masjid website before updating any record.
2. Add only confirmed source-backed data to masjid records.
3. Add new masjid source entries to locales/en/sources.json before adding records to masjids.json.
4. Build the curated collection UI using existing card and section patterns.
5. Add the how-to-choose guidance and trust-warning callout to the resources page.
6. Do not add new search, saved locations, user reviews, or map infrastructure.

### Trusted source starting points

- Official masjid websites for all masjid data.
- Official organization or publisher pages for all resource data.
- OpenStreetMap only for coordinates attribution, not for religious program claims.

### Completion criteria

- Named curated collections are visible on the resources page.
- How to choose guidance and trust warnings are present.
- At least eight masjid records have at least one enriched field backed by an official source.
- Up to five new masjid records are added with confirmed source data.
- No search improvements, saved locations, user reviews, or persistence features are introduced.

### Completion note

_Not yet completed. To be filled in after implementation._

---

## 14. Phase 8: Hidden Dawah Guide Completion

### Goal

Resolve the remaining placeholder content in the hidden dawah guide and add the missing approval-readiness content planned in the previous iteration.

### Remaining work

1. Resolve placeholder dua wording - Any dua using placeholder or paraphrased wording must be replaced with a verified Quranic or hadith dua with a full source reference, or clearly labeled as personal wording - not a sourced dua.

2. Post-Shahada handoff section - Add a structured handoff for the person supporting someone who just took Shahada:
   - What to do in the first hour: simple reassurance, not religious instruction overload.
   - First day: ghusl, basic prayer orientation, one trusted contact.
   - First week: connect to a masjid, one learning resource, and ongoing support.
   - Avoid overwhelming them practical list.
   - Connect to the main roadmap as the primary learning resource.

3. Questions not to answer alone - Add a structured list of topics to always refer to qualified people:
   - Marriage, divorce, and family situations.
   - Trauma or safety disclosures.
   - Mental health crisis.
   - Detailed fiqh questions.
   - Complex theology or polemical claims.
   - Legal or immigration issues.

4. Additional scenario cards:
   - Person with trauma from a previous religious background.
   - Person worried about family rejection.
   - Person interested but afraid to say Shahada publicly.
   - Person asks about women in Islam.
   - Person asks about suffering and evil in the world.
   - Person asks about terrorism or violence attributed to Muslims.

5. Mentor-use print section - Add a printable summary for in-person use.

### Constraints

- Keep route hidden, noindexed, and entirely out of public navigation.
- Do not add any public discovery links.
- Source-check all new religious claims and sensitive guidance.
- Keep English as the only expanded version.
- Review status must remain source-checked or review-needed until qualified approval is obtained.

### Trusted source starting points

- Quran.com and Tanzil for Quran references.
- Sunnah.com for hadith duas and references.
- New Muslim Academy, WhyIslam, Yaqeen Institute, and SeekersGuidance for dawah and post-Shahada framing.
- Official mental-health and crisis resources for safety referral language.
- Qualified scholar review required before marking any content approved.

### Completion criteria

- Placeholder dua wording is resolved.
- Post-Shahada handoff section is present.
- Questions not to answer alone section is present.
- At least three new scenario cards are added.
- Hidden route remains hidden and noindexed.
- Review status is accurately recorded.

### Completion note

_Not yet completed. To be filled in after implementation._

---

## 15. Phase 9: English Manual Approval Readiness

### Goal

Prepare the completed English content for manual review and eventual approval, and make the codebase translation-ready for future language work after English approval.

### English approval checklist

Before marking any page or feature approved, verify:

- Page works on mobile (375px) and desktop (1200px+).
- UI and copy follow brand-guidelines.md.
- Arabic text uses correct lang="ar" and dir="rtl" attributes.
- Transliteration and translation-of-meaning labels are clear and consistent.
- Source links open correctly in a new tab.
- Source tags appear on all new or changed content.
- Sensitive guidance has appropriate disclaimers.
- Religious content has source-checked or review-needed status accurately set.
- Mental health, legal-adjacent, safety, and financial content does not overstate advice.
- No persistence, bookmarks, reminders, accounts, search improvements, CI/CD, or non-English features were added.
- Print view is readable: single column, no nav, visible URLs, black text, no orphaned content.

### Steps

1. For each major section completed in Phases 1 through 8, record the review status in this plan file.
2. Mark content that still needs qualified review.
3. Identify strings in page files that belong in locales/en/ui.json versus inline content.
4. Prepare a translation note file listing: Arabic terms that must not be machine-translated, Quran translation policy, hadith reference format, source label format, and culturally sensitive wording notes.
5. Do not add any language translation until English approval is confirmed.

### Completion criteria

- All completed phases have a completion note in this plan.
- A list of review-needed items is recorded here.
- Translation notes are prepared.
- No non-English feature work has begun.

### Completion note

_Not yet completed. To be filled in after implementation._

---

## 16. Backlog - Not Yet Scheduled

These items are not in the current phase plan. Each requires source policy compliance, English-first rule, and brand-guidelines.md adherence before scheduling.

- Beginner what-can-wait hub page aggregating all can-wait content from steps and guides.
- Common Arabic words in prayer: a short reference for words a beginner hears but does not understand.
- Intro to madhhabs (the four main legal schools) without sectarian argument, explaining why differences exist and how beginners should approach them.
- Choosing a teacher or class: practical checklist for evaluating an Islamic class or teacher.
- Print-friendly glossary mini-pack.
- Islamic name explorer: informational only, for those curious about name changes. Must clearly state name change is not required.
- Guide for revert Muslims returning to faith after a gap: non-judgmental re-entry framing.
- Volunteer and sadaqah directory supplement: Toronto-area verified organizations accepting volunteers, requiring CRA registration confirmation for any included charity.
- My first Ramadan expanded guide as a standalone tool for converts experiencing Ramadan for the first time.
- Before you choose a masjid guide: what to look for, healthy community signs, and how to try more than one.
- Islamic art and geometry as context: a brief cultural note for converts from visual backgrounds. Culturally neutral, no faces or detailed figures.
