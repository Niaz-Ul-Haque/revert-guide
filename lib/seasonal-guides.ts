import fs from "fs";
import path from "path";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n";

export interface SeasonalSection {
  heading: string;
  body?: string;
  items?: string[];
}

export interface SeasonalScript {
  title: string;
  body: string;
}

export interface SeasonalGuide {
  id: string;
  slug: string;
  title: string;
  description: string;
  badge: string;
  intro: string;
  summary: string[];
  focusNow: string[];
  canWait: string[];
  sections: SeasonalSection[];
  scripts: SeasonalScript[];
  sourceIds: string[];
  relatedLinks: {
    label: string;
    href: string;
  }[];
  reviewStatus: "source-checked" | "review-needed";
}

export const seasonalGuides: SeasonalGuide[] = [
  {
    id: "eid-al-fitr",
    slug: "eid-al-fitr",
    title: "Eid al-Fitr Guide",
    description:
      "Know what Eid prayer is, what to expect, and how to handle Eid when you are new or alone.",
    badge: "Seasonal worship",
    intro:
      "Eid al-Fitr is the celebration at the end of Ramadan. This guide keeps the day simple: confirm the local prayer, go clean and modest, greet people warmly, and ask your masjid about Zakat al-Fitr if it applies to you.",
    summary: [
      "Eid prayer is usually in the morning and is often busier than a regular prayer.",
      "Wear clean, presentable clothes you can pray in. Cultural clothing is optional.",
      "Say Eid Mubarak if you want a simple greeting.",
      "Ask your masjid how they handle Zakat al-Fitr before Eid prayer.",
    ],
    focusNow: [
      "Confirm Eid date, prayer time, and location with a local masjid.",
      "Plan transportation, parking, and where you will put your shoes.",
      "Choose one person or group to greet so you are not standing alone the whole time.",
      "Ask about Zakat al-Fitr early if you are unsure.",
    ],
    canWait: [
      "Hosting a large Eid meal.",
      "Buying cultural clothing you cannot afford.",
      "Understanding every Eid custom in every Muslim culture.",
      "Detailed rulings about missed fasts without a qualified teacher.",
    ],
    sections: [
      {
        heading: "What Eid Prayer Is",
        body: "Eid prayer is a special congregational prayer held after Ramadan ends. It is usually prayed in a masjid, hall, park, or large community space. Details can differ locally, so follow your masjid's instructions.",
      },
      {
        heading: "Before You Go",
        items: [
          "Check the Eid date the night before because local moon-sighting announcements can vary.",
          "Find the prayer location, not just the regular masjid address. Some communities rent larger halls.",
          "Arrive early, especially if parking is limited.",
          "Bring a small bag for shoes if the location is crowded.",
          "Eat something light before going if you are celebrating Eid al-Fitr.",
        ],
      },
      {
        heading: "What To Wear",
        body: "Wear clean, modest clothing that lets you pray comfortably. You do not need an Arab, South Asian, Turkish, African, or any other cultural outfit to celebrate Eid. If you enjoy dressing up, that is fine; if you keep it simple, that is also fine.",
      },
      {
        heading: "What To Expect",
        items: [
          "The prayer may be short, but the crowd can be large.",
          "There may be a khutbah or reminder after the prayer.",
          "People may greet each other, hug, take photos, or go out for breakfast.",
          "You can leave after the main prayer if the crowd feels overwhelming.",
        ],
      },
      {
        heading: "If You Are Alone",
        body: "Eid can feel emotional when your family is not Muslim or you do not yet have close Muslim friends. Try to make one concrete plan: attend prayer, message a mentor, join a community breakfast, or invite one person for coffee. A small Eid still counts.",
      },
      {
        heading: "Zakat al-Fitr Overview",
        body: "Many Muslims give Zakat al-Fitr before Eid prayer as a Ramadan-related charity. Amounts, collection methods, and who must pay can vary by local scholarly guidance. Ask your masjid early instead of guessing at the last minute.",
      },
    ],
    scripts: [
      {
        title: "Asking a Masjid",
        body: "Assalamu alaykum. I am a new Muslim preparing for my first Eid. Could you tell me the Eid prayer time, location, and how your masjid handles Zakat al-Fitr?",
      },
      {
        title: "At Work or School",
        body: "Eid is an important religious holiday for me. I would like to request time away for the morning prayer and family or community celebration.",
      },
      {
        title: "With Non-Muslim Family",
        body: "Eid is the celebration after Ramadan. I may go to a morning prayer, then I would still like to spend some time with you later if that works.",
      },
    ],
    sourceIds: [
      "quran-fasting-2-183-185",
      "sunnah-bukhari-eid-fitr-eating",
      "sunnah-abudawud-zakat-al-fitr",
      "new-muslim-guide",
    ],
    relatedLinks: [
      { label: "Ramadan guide", href: "/ramadan" },
      { label: "Find a Masjid", href: "/resources/find-masjid" },
      { label: "Fasting topic", href: "/topics/fasting" },
    ],
    reviewStatus: "review-needed",
  },
  {
    id: "dhul-hijjah-hajj-umrah",
    slug: "dhul-hijjah-hajj-umrah",
    title: "Dhul Hijjah, Hajj, and Umrah Guide",
    description:
      "Understand the first ten days of Dhul Hijjah, Eid al-Adha, and pilgrimage basics without getting lost in advanced rulings.",
    badge: "Sacred season",
    intro:
      "Dhul Hijjah includes the days of Hajj and Eid al-Adha. Most new Muslims are not going to Hajj right away, but you can still benefit from the season through prayer, fasting if able, charity, remembrance, and learning the big picture.",
    summary: [
      "The first ten days are a time for extra worship and good deeds.",
      "Fasting on the Day of Arafah is recommended for those not performing Hajj and able to fast.",
      "Hajj is a future obligation when a Muslim is physically and financially able.",
      "Umrah is a separate pilgrimage that can be performed outside the Hajj season, but travel rules still need official checking.",
    ],
    focusNow: [
      "Learn what Dhul Hijjah is and mark the first ten days on your calendar.",
      "Choose one or two extra acts: dhikr, charity, Quran, fasting, or family kindness.",
      "Ask your masjid how Eid al-Adha prayer and qurbani/udhiyah are handled locally.",
      "If planning Hajj or Umrah, use official travel sources before paying anyone.",
    ],
    canWait: [
      "Detailed Hajj ritual rulings if you are not traveling soon.",
      "Comparing every qurbani organization.",
      "Buying travel packages before checking official requirements.",
      "Feeling guilty because you cannot fast every day.",
    ],
    sections: [
      {
        heading: "The First Ten Days",
        body: "The first ten days of Dhul Hijjah are treated as a special season of worship. A beginner can keep this practical: make more dhikr, read a little Quran, give charity, repair a relationship, or fast some days if health and schedule allow.",
      },
      {
        heading: "Arafah Fasting Note",
        body: "For Muslims not performing Hajj, fasting on the Day of Arafah is strongly encouraged in hadith. If fasting is medically difficult, unsafe, or confusing because of your situation, ask a qualified person and do another good deed instead.",
      },
      {
        heading: "Eid al-Adha Basics",
        body: "Eid al-Adha comes during the Hajj season and is connected to the story of Prophet Ibrahim, peace be upon him. Communities usually hold Eid prayer and many Muslims arrange qurbani or udhiyah through trusted organizations.",
      },
      {
        heading: "Qurbani or Udhiyah Overview",
        body: "Qurbani/udhiyah is the sacrifice offered around Eid al-Adha by those for whom it applies. Details differ by school of law, income, local availability, and charity provider. Ask your local imam or a trusted organization before treating a website checkout as a final ruling.",
      },
      {
        heading: "Hajj As A Future Obligation",
        body: "Hajj is one of the pillars of Islam for those who are able. New Muslims often need time to stabilize prayer, finances, travel documents, family responsibilities, and health before going. Learning the big picture now is enough unless you are actively planning travel.",
      },
      {
        heading: "Umrah Basics",
        body: "Umrah is a pilgrimage to Makkah outside the Hajj season. It is spiritually meaningful, but it still involves visas, health, money, safety, and reliable travel planning. Use official platforms and current government guidance before booking.",
      },
      {
        heading: "Official Travel Check",
        items: [
          "Check the official Nusuk Hajj or Nusuk Umrah platform before paying for pilgrimage travel.",
          "Review your country's travel guidance if it applies to you.",
          "Confirm vaccine, visa, permit, and booking rules close to your travel date.",
          "Ask a qualified teacher what you need to learn before departure.",
        ],
      },
    ],
    scripts: [
      {
        title: "Asking About Qurbani",
        body: "Assalamu alaykum. I am new and learning about Eid al-Adha. Does qurbani apply to me this year, and is there a trusted local or online option you recommend?",
      },
      {
        title: "Planning Hajj Later",
        body: "I am not ready for Hajj yet, but I want to understand what I should prepare over the next few years. What should I learn first?",
      },
      {
        title: "Checking A Travel Offer",
        body: "Before I pay, can you help me check whether this Hajj or Umrah package is using the official required process and whether anything looks risky?",
      },
    ],
    sourceIds: [
      "sunnah-muslim-arafah-fast",
      "yaqeen-dhul-hijjah",
      "new-muslim-guide-pilgrimage",
      "nusuk-hajj",
      "travel-state-hajj-umrah",
    ],
    relatedLinks: [
      {
        label: "Zakat and Hajj step",
        href: "/roadmap/month-6-plus/zakat-hajj",
      },
      { label: "Zakat guide", href: "/seasonal/zakat" },
      { label: "Ask an imam step", href: "/roadmap/month-3-6/asking-an-imam" },
    ],
    reviewStatus: "review-needed",
  },
  {
    id: "zakat",
    slug: "zakat",
    title: "Zakat Beginner Guide",
    description:
      "Learn what zakat is, what terms like nisab and hawl mean, and when to ask for qualified financial review.",
    badge: "Giving guide",
    intro:
      "Zakat is an obligation for Muslims who meet certain wealth conditions. This page explains the beginner vocabulary and decision points, but it is not a calculator or personal financial ruling.",
    summary: [
      "Zakat is not the same as general charity; sadaqah is voluntary charity.",
      "Common terms include nisab, hawl, and 2.5 percent.",
      "Different assets can be treated differently, so personal cases need review.",
      "Quran 9:60 names eight recipient categories for zakat.",
    ],
    focusNow: [
      "Learn the basic terms: zakat, sadaqah, nisab, hawl, and eligible recipients.",
      "Notice whether you may own savings or assets above a threshold.",
      "Ask a qualified person if you think zakat applies to you.",
      "Choose trusted organizations that explain their zakat policy clearly.",
    ],
    canWait: [
      "Building a calculator into this app.",
      "Detailed business, retirement, debt, crypto, inheritance, or investment calculations.",
      "Treating one online calculator as a final ruling.",
      "Arguing about every edge case before you know the basics.",
    ],
    sections: [
      {
        heading: "What Zakat Is",
        body: "Zakat is an obligatory form of giving when a Muslim meets the conditions. It purifies wealth and supports eligible recipients. It is different from sadaqah, which is voluntary charity that can be given at any time.",
      },
      {
        heading: "Who Generally Pays",
        body: "At a beginner level, zakat may apply when a Muslim owns zakatable wealth above the nisab threshold for a lunar year. The details can become complex, so do not panic if you are unsure. Ask a qualified scholar or trusted zakat institution.",
      },
      {
        heading: "Nisab, Hawl, and 2.5 Percent",
        items: [
          "Nisab is the minimum threshold of wealth for zakat to become relevant.",
          "Hawl is the passing of a lunar year over qualifying wealth in many zakat cases.",
          "2.5 percent is the familiar rate for many common zakat categories, but not every asset is handled the same way.",
          "Gold and silver thresholds and modern asset questions need current, qualified review.",
        ],
      },
      {
        heading: "Common Asset Categories",
        body: "Cash savings, gold, silver, business inventory, investments, debts owed to you, and retirement accounts can raise different questions. The point of this guide is to help you ask better questions, not to produce a final number.",
      },
      {
        heading: "Eight Recipient Categories",
        body: "Quran 9:60 names eight categories of zakat recipients. Because applying those categories can require knowledge of local need, organization policy, and scholarly interpretation, use trusted zakat organizations or ask a qualified person.",
      },
      {
        heading: "Choosing A Giving Organization",
        items: [
          "Look for a clear zakat policy or scholar review process.",
          "Check whether the organization explains eligible recipients and fees.",
          "Ask your local masjid who they trust for zakat distribution.",
          "Keep your own records, but do not save personal financial details in this app.",
        ],
      },
    ],
    scripts: [
      {
        title: "Asking A Scholar",
        body: "I am new and trying to understand whether zakat applies to me. I have savings, debts, and some assets. What information should I gather so you can review my case properly?",
      },
      {
        title: "Asking A Charity",
        body: "Do you have a public zakat policy, and can you explain how you decide which campaigns or recipients are zakat-eligible?",
      },
      {
        title: "When You Are Not Sure",
        body: "I do not want to guess with zakat. I will learn the basics first, then ask someone qualified before making a personal calculation.",
      },
    ],
    sourceIds: [
      "quran-zakat-9-60",
      "irusa-zakat",
      "launchgood-zakat",
      "islamicfinder-zakat",
      "seekersguidance",
    ],
    relatedLinks: [
      {
        label: "Zakat and Hajj step",
        href: "/roadmap/month-6-plus/zakat-hajj",
      },
      { label: "Halal living topic", href: "/topics/halal-living" },
      { label: "Ask an imam step", href: "/roadmap/month-3-6/asking-an-imam" },
    ],
    reviewStatus: "review-needed",
  },
  {
    id: "islamic-calendar",
    slug: "islamic-calendar",
    title: "Islamic Calendar Beginner Guide",
    description:
      "Understand lunar months, local date differences, and how to ask your masjid about announcements.",
    badge: "Calendar basics",
    intro:
      "The Islamic calendar is lunar. That means months begin with the new moon, and local announcements can differ by country, community, or moon-sighting method. This guide keeps it practical: learn the month names, confirm dates locally, and avoid treating a graphic online as the final word for your city.",
    summary: [
      "Islamic months follow the moon, so dates move through the solar year.",
      "Some communities follow local moon sighting, some follow regional or global announcements, and some use calculated calendars.",
      "Ramadan, Eid, Ashura, and Hajj-related days should be confirmed with a trusted local masjid or official community announcement.",
      "If two communities announce different dates, stay calm and ask which one your masjid follows.",
    ],
    focusNow: [
      "Learn the names of the months you are most likely to hear: Ramadan, Shawwal, Dhul Hijjah, Muharram, Rajab, and Sha'ban.",
      "Ask your masjid how they announce Ramadan, Eid, and Ashura dates.",
      "Follow one trusted local source so you are not overwhelmed by conflicting posts.",
      "Save detailed calendar debates for a qualified teacher.",
    ],
    canWait: [
      "Mastering every moon-sighting methodology.",
      "Arguing online about global versus local sighting.",
      "Building calendar reminders or saved date tracking in this app.",
      "Memorizing all month names before you know what they are used for.",
    ],
    sections: [
      {
        heading: "Why The Dates Move",
        body: "The Islamic calendar is based on lunar months, not the solar calendar used for most civil dates. Because lunar years are shorter than solar years, Ramadan, Eid, and other Islamic dates shift earlier through the seasons over time.",
      },
      {
        heading: "Why Dates May Differ Locally",
        body: "A month may be announced differently because communities use different moon-sighting policies or official calendars. For a new Muslim, the practical step is simple: follow the masjid or trusted Muslim organization you will pray and celebrate with.",
      },
      {
        heading: "How To Confirm A Date",
        items: [
          "Check your local masjid's website, email list, WhatsApp group, or social feed.",
          "Look for a clear announcement from a recognized local council or Muslim organization.",
          "If you are attending Eid prayer, confirm the location and time, not only the date.",
          "If announcements differ, ask politely which calendar your masjid follows.",
        ],
      },
      {
        heading: "Month Names You Will Hear Often",
        items: [
          "Ramadan: the fasting month.",
          "Shawwal: the month that begins with Eid al-Fitr.",
          "Dhul Hijjah: the month of Hajj and Eid al-Adha.",
          "Muharram: the first month of the Islamic year and the month of Ashura.",
          "Rajab and Sha'ban: months that often come up when people prepare for Ramadan.",
        ],
      },
      {
        heading: "A Calm Rule For Beginners",
        body: "Use calendars for planning, then confirm worship dates locally. That keeps you connected to the community and avoids panic when two posts online show different dates.",
      },
    ],
    scripts: [
      {
        title: "Asking A Masjid",
        body: "Assalamu alaykum. I am new and trying to follow the Islamic calendar. How does this masjid announce Ramadan, Eid, Ashura, and other important dates?",
      },
      {
        title: "When Dates Differ",
        body: "I saw different dates online. Which announcement should I follow if I am planning to attend prayer with your community?",
      },
      {
        title: "For Work Or School",
        body: "The exact date of this religious observance may be confirmed close to the day because it follows the Islamic lunar calendar. I will update you as soon as my community announces it.",
      },
    ],
    sourceIds: [
      "quran-calendar-2-189",
      "quran-sacred-months-9-36",
      "sunnah-bukhari-moon-sighting",
      "sunnah-bukhari-sacred-months",
      "aladhan-api",
    ],
    relatedLinks: [
      { label: "Ramadan guide", href: "/ramadan" },
      { label: "Eid al-Fitr guide", href: "/seasonal/eid-al-fitr" },
      { label: "Find a Masjid", href: "/resources/find-masjid" },
    ],
    reviewStatus: "review-needed",
  },
  {
    id: "muharram-ashura",
    slug: "muharram-ashura",
    title: "Muharram And Ashura Beginner Guide",
    description:
      "Learn what Muharram and Ashura are, how voluntary fasting fits in, and what to ask locally.",
    badge: "Sacred month",
    intro:
      "Muharram is the first month of the Islamic year and one of the sacred months. Ashura is the tenth day of Muharram. Beginners can keep this season simple: learn its meaning, confirm the local date, and fast if you are able and properly guided.",
    summary: [
      "Muharram is one of the four sacred months named in hadith.",
      "Ashura is the tenth day of Muharram.",
      "Voluntary fasting in Muharram, especially Ashura, is established in authentic hadith.",
      "If fasting is difficult, unsafe, or confusing, ask a qualified person and choose another good deed.",
    ],
    focusNow: [
      "Ask your masjid when they are observing Ashura.",
      "If you can fast safely, ask whether your community recommends fasting one or two days.",
      "Use the day for prayer, dhikr, charity, and reflection without inventing special practices.",
      "Avoid dramatic online claims unless they are taught by reliable sources.",
    ],
    canWait: [
      "Detailed historical debates you are not ready to assess.",
      "Treating every viral Ashura checklist as established Sunnah.",
      "Feeling guilty if health, work, medication, or confusion prevents voluntary fasting.",
      "Adding calendar reminders or saved fast tracking.",
    ],
    sections: [
      {
        heading: "What Muharram Is",
        body: "Muharram is the first month of the Islamic lunar year and one of the sacred months. A beginner does not need a complicated program; extra worship, repentance, charity, and kindness are enough as a starting point.",
      },
      {
        heading: "What Ashura Is",
        body: "Ashura is the tenth day of Muharram. Authentic hadith mention fasting on Ashura and connect it with gratitude to Allah. Ask your masjid for the date because local announcements can differ.",
      },
      {
        heading: "Fasting Without Pressure",
        items: [
          "Ashura fasting is voluntary, not the Ramadan fast.",
          "If you are able, ask a local teacher whether to fast Ashura alone or with another day.",
          "If fasting may harm you, speak with a clinician and a qualified religious teacher.",
          "If you cannot fast, make dhikr, give charity, read Quran, or do a quiet act of service.",
        ],
      },
      {
        heading: "Avoid Weakly Sourced Practices",
        body: "Do not treat every ritual, promise, or dramatic post about Ashura as established. If a practice is not clearly sourced from reliable Quran, hadith, or qualified teaching, keep it as a personal good deed or leave it until you can ask.",
      },
      {
        heading: "If The Day Feels Heavy",
        body: "Some communities discuss painful history around Muharram. You can listen respectfully without entering debates. Ask a reliable teacher what is most beneficial for a beginner to learn first.",
      },
    ],
    scripts: [
      {
        title: "Asking About Ashura",
        body: "Assalamu alaykum. I am new and heard about Ashura. What date is your community observing it, and what should a beginner focus on?",
      },
      {
        title: "Health Boundary",
        body: "I want to fast voluntarily, but I have a health or medication concern. Who can help me ask both the medical and religious sides properly?",
      },
      {
        title: "When A Post Seems Unclear",
        body: "I saw a list of special Ashura practices online. Can you help me tell what is authentic and what I should avoid treating as established?",
      },
    ],
    sourceIds: [
      "quran-sacred-months-9-36",
      "sunnah-bukhari-sacred-months",
      "sunnah-muslim-muharram-fast",
      "sunnah-bukhari-ashura-fast",
      "seekersguidance",
    ],
    relatedLinks: [
      { label: "Islamic calendar guide", href: "/seasonal/islamic-calendar" },
      { label: "Dua and dhikr reference", href: "/dua-dhikr" },
      { label: "Fasting topic", href: "/topics/fasting" },
    ],
    reviewStatus: "review-needed",
  },
  {
    id: "rabi-al-awwal-seerah",
    slug: "rabi-al-awwal-seerah",
    title: "Rabi al-Awwal And Seerah Learning Note",
    description:
      "Use Rabi al-Awwal as a gentle reminder to learn the Prophet's life and character without polemics.",
    badge: "Seerah learning",
    intro:
      "Rabi al-Awwal is often when Muslims speak more about the Prophet Muhammad, peace and blessings be upon him. This page keeps the focus beginner-friendly: learn his mercy, character, mission, and daily Sunnah through reliable teachers without being pulled into arguments.",
    summary: [
      "Muslims love the Prophet and learn his life because he is the Messenger of Allah and a model for believers.",
      "Seerah means the life story of the Prophet, peace and blessings be upon him.",
      "Rabi al-Awwal can be a good time to start a reliable seerah class or book.",
      "Avoid polemics and online arguments about commemorations until you have a teacher.",
    ],
    focusNow: [
      "Read a short, reliable introduction to the Prophet's life.",
      "Choose one daily Sunnah of character: truthful speech, mercy, cleanliness, or family kindness.",
      "Ask a teacher for a beginner seerah resource.",
      "If someone argues about Rabi al-Awwal practices, pause and ask a qualified scholar instead of debating.",
    ],
    canWait: [
      "Detailed biography timelines with every battle and date.",
      "Online debates about Mawlid or commemorations.",
      "Trying to copy every Sunnah at once.",
      "Polemical responses to disturbing claims before learning the basics.",
    ],
    sections: [
      {
        heading: "What To Learn First",
        items: [
          "Who the Prophet was and why Muslims love him.",
          "His message of worshipping Allah alone.",
          "His mercy, patience, truthfulness, and concern for people.",
          "How hadith and Sunnah relate to daily Muslim life.",
        ],
      },
      {
        heading: "A Beginner Seerah Path",
        body: "Start with a short overview, then a structured class or book from a reliable teacher. You do not need to memorize every date. Understanding the message, character, and major stages of Makkah and Madinah matters more at first.",
      },
      {
        heading: "If Rabi al-Awwal Debates Come Up",
        body: "Some Muslims differ over specific commemorations and gatherings. A beginner does not need to enter those arguments. You can say that you are focusing on learning the Prophet's life and asking qualified teachers about practice details.",
      },
      {
        heading: "One Practical Sunnah This Month",
        items: [
          "Speak truthfully and gently.",
          "Keep one promise you made.",
          "Send blessings on the Prophet in a simple way you have learned.",
          "Show mercy to someone who is new, tired, or misunderstood.",
        ],
      },
    ],
    scripts: [
      {
        title: "Asking For A Seerah Resource",
        body: "Assalamu alaykum. I am new and want to learn the Prophet's life in a calm, reliable way. Is there a beginner book, class, or teacher you recommend?",
      },
      {
        title: "Avoiding A Debate",
        body: "I am still learning the basics, so I do not want to argue about this. I am focusing on learning the Prophet's life and character through reliable teachers.",
      },
      {
        title: "Personal Goal",
        body: "This month I want to practice one Sunnah of character: kinder speech, honesty, mercy, or patience.",
      },
    ],
    sourceIds: [
      "quran-21-107-mercy-worlds",
      "quran-33-21-excellent-example",
      "quran-68-4-character",
      "yaqeen-seerah",
      "seekersguidance-seerah",
      "new-muslim-academy-prophet-example",
    ],
    relatedLinks: [
      { label: "Prophet Muhammad topic", href: "/topics/prophet-muhammad" },
      { label: "Quran starter path", href: "/quran-starter" },
      {
        label: "Questions and doubts topic",
        href: "/topics/questions-and-doubts",
      },
    ],
    reviewStatus: "review-needed",
  },
  {
    id: "rajab-shaban-preparation",
    slug: "rajab-shaban-preparation",
    title: "Rajab And Sha'ban Preparation Note",
    description:
      "Prepare for Ramadan carefully, with source boundaries around Rajab and Sha'ban practices.",
    badge: "Ramadan prep",
    intro:
      "Rajab and Sha'ban come before Ramadan and often bring many online reminders. This guide helps you prepare without treating weakly sourced claims as established worship.",
    summary: [
      "Rajab is one of the sacred months, but beginners should be careful with special unsourced claims about it.",
      "Sha'ban has authentic reports of extra voluntary fasting from the Prophet, peace and blessings be upon him.",
      "Preparation can be simple: repair sleep, learn fasting basics, make up questions early, and increase worship gradually.",
      "Ask a qualified teacher before adopting a special night, prayer, or promise you only saw online.",
    ],
    focusNow: [
      "Review Ramadan basics before the month starts.",
      "Ask early about medication, illness, travel, menstruation, missed fasts, or fidyah.",
      "Practice one small habit: earlier sleep, Quran listening, charity, or a short dua.",
      "Keep Rajab and Sha'ban claims source-checked and calm.",
    ],
    canWait: [
      "Trying to verify every viral calendar post yourself.",
      "Special prayers or fasts with no reliable source.",
      "Overloading your schedule before Ramadan begins.",
      "Judging other Muslims while you are still learning.",
    ],
    sections: [
      {
        heading: "Rajab: Respect Without Overclaiming",
        body: "Rajab is named among the sacred months in hadith. That is enough for a beginner to treat it with seriousness and good deeds. Do not present a specific Rajab prayer, fast, or promise as established unless a qualified teacher gives you a reliable source.",
      },
      {
        heading: "Sha'ban: Gentle Ramadan Preparation",
        body: "Authentic hadith mention the Prophet fasting often in Sha'ban. If you are able and already comfortable with fasting, you can ask a teacher how voluntary fasting may fit your health and schedule. If not, prepare in other ways.",
      },
      {
        heading: "Practical Preparation",
        items: [
          "Find out how your masjid announces Ramadan.",
          "Review suhoor, iftar, Taraweeh, and Eid basics.",
          "Ask sensitive fasting questions before Ramadan begins.",
          "Choose a realistic Quran, dhikr, or charity goal.",
        ],
      },
      {
        heading: "Source Boundary",
        body: "If a post promises a specific reward for a specific Rajab or Sha'ban act but does not give a reliable source, do not share it as Islamic guidance. You can still do general good deeds without attaching unsourced claims.",
      },
    ],
    scripts: [
      {
        title: "Asking Before Ramadan",
        body: "Assalamu alaykum. Ramadan is coming and I am new. Can I ask early about fasting, medication, travel, menstruation, missed fasts, or any personal issue that may affect me?",
      },
      {
        title: "Checking A Claim",
        body: "I saw a special Rajab or Sha'ban practice online. Is this from a reliable source, or should I treat it as general personal worship only?",
      },
      {
        title: "Small Prep Goal",
        body: "Before Ramadan, I am choosing one habit I can keep: sleep earlier, drink more water at suhoor, read a short Quran portion, or give a small charity.",
      },
    ],
    sourceIds: [
      "sunnah-bukhari-sacred-months",
      "sunnah-bukhari-shaban-fasting",
      "quran-fasting-2-183-185",
      "new-muslim-guide",
      "seekersguidance",
      "yaqeen-ramadan",
    ],
    relatedLinks: [
      { label: "Ramadan guide", href: "/ramadan" },
      { label: "Islamic calendar guide", href: "/seasonal/islamic-calendar" },
      { label: "Fasting topic", href: "/topics/fasting" },
    ],
    reviewStatus: "review-needed",
  },
  {
    id: "year-round-charity-service",
    slug: "year-round-charity-service",
    title: "Year-Round Charity And Service Guide",
    description:
      "Learn how sadaqah, service, and community care can fit your life outside Ramadan and zakat season.",
    badge: "Giving all year",
    intro:
      "Charity is not only a Ramadan topic and not only money. Islam encourages giving, service, mercy, and everyday good deeds throughout the year. This guide helps beginners choose simple acts without financial pressure.",
    summary: [
      "Zakat is an obligation when its conditions apply; sadaqah is voluntary charity.",
      "Service can include time, kindness, skills, food, listening, and community care.",
      "Small, consistent good deeds are better than unsustainable bursts.",
      "Personal zakat, debt, taxes, and fundraising questions need qualified financial and religious review.",
    ],
    focusNow: [
      "Choose one sustainable act of service each month.",
      "Give only what you can afford; do not harm your essentials or dependents.",
      "Support transparent organizations or local needs you can verify.",
      "Ask your masjid where help is needed before assuming.",
    ],
    canWait: [
      "Complex zakat calculations without a qualified review.",
      "Feeling pressured by every fundraiser.",
      "Publicly announcing every donation.",
      "Saving donation records or personal finances in this app.",
    ],
    sections: [
      {
        heading: "Charity Beyond Money",
        body: "Sadaqah can be financial, but service and everyday goodness also matter. For a beginner, the goal is not to give beyond your capacity. Start with something sincere and sustainable.",
      },
      {
        heading: "Simple Service Ideas",
        items: [
          "Bring food to a community iftar or class when appropriate.",
          "Volunteer for setup, cleanup, rides, or welcoming new visitors.",
          "Check on a lonely convert or elder with permission and respect.",
          "Share a reliable resource instead of an unsourced quote image.",
          "Make dua for someone privately and follow it with practical help if you can.",
        ],
      },
      {
        heading: "Choosing Where To Give",
        items: [
          "Look for a clear organization name, purpose, and donation policy.",
          "Prefer official charity pages or local masjid campaigns you can verify.",
          "Ask how zakat funds are handled if the donation is zakat.",
          "Avoid pressure, shame, vague emergency claims, or anonymous payment links.",
        ],
      },
      {
        heading: "When Money Is Tight",
        body: "If you cannot give money, that does not make you less sincere. Offer time, kind speech, practical help, or a small consistent act. If you are struggling financially, ask your masjid or a trusted support service what help is available.",
      },
      {
        heading: "Personal Finance Boundary",
        body: "This guide does not calculate zakat, assess debt, or advise on taxes, investments, or fundraising law. Personal financial cases should go to qualified scholars, zakat advisors, financial professionals, or official agencies as appropriate.",
      },
    ],
    scripts: [
      {
        title: "Asking Where To Help",
        body: "Assalamu alaykum. I am new and would like to help in a simple way. Is there a small volunteer task or community need that would be appropriate?",
      },
      {
        title: "Checking A Fundraiser",
        body: "Before I donate, can you help me verify whether this organization is identifiable and whether the campaign explains how funds are used?",
      },
      {
        title: "Financial Boundary",
        body: "I care about giving, but my budget is tight. I am going to choose a service act I can sustain without harming my essentials.",
      },
    ],
    sourceIds: [
      "quran-charity-2-261",
      "sunnah-muslim-goodness-charity",
      "quran-zakat-9-60",
      "irusa-zakat",
      "launchgood-zakat",
      "new-muslim-academy",
    ],
    relatedLinks: [
      { label: "Zakat beginner guide", href: "/seasonal/zakat" },
      {
        label: "Healthy community signs",
        href: "/guides/healthy-community-signs",
      },
      { label: "Resources", href: "/resources" },
    ],
    reviewStatus: "review-needed",
  },
];

type SeasonalGuideTranslation = Partial<Omit<SeasonalGuide, "id" | "slug">> &
  Pick<SeasonalGuide, "id">;

const localizedGuideCache = new Map<Locale, SeasonalGuide[]>();

export function getSeasonalGuides(locale: Locale = DEFAULT_LOCALE) {
  if (locale === DEFAULT_LOCALE) return seasonalGuides;

  const cached = localizedGuideCache.get(locale);
  if (cached) return cached;

  const translations = readSeasonalGuideTranslations(locale);
  const localized = seasonalGuides.map((guide) => {
    const translated = translations.find((item) => item.id === guide.id);
    return translated ? mergeSeasonalGuide(guide, translated) : guide;
  });

  localizedGuideCache.set(locale, localized);
  return localized;
}

export function getSeasonalGuideBySlug(
  slug: string,
  locale: Locale = DEFAULT_LOCALE,
) {
  return getSeasonalGuides(locale).find((guide) => guide.slug === slug);
}

function readSeasonalGuideTranslations(
  locale: Locale,
): SeasonalGuideTranslation[] {
  const filePath = path.join(
    process.cwd(),
    "locales",
    locale,
    "seasonal-guides.json",
  );

  if (!fs.existsSync(filePath)) return [];

  try {
    const parsed = JSON.parse(fs.readFileSync(filePath, "utf8"));
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function mergeSeasonalGuide(
  guide: SeasonalGuide,
  translation: SeasonalGuideTranslation,
): SeasonalGuide {
  return {
    ...guide,
    ...translation,
    id: guide.id,
    slug: guide.slug,
    sourceIds: guide.sourceIds,
    reviewStatus: guide.reviewStatus,
    summary: translation.summary ?? guide.summary,
    focusNow: translation.focusNow ?? guide.focusNow,
    canWait: translation.canWait ?? guide.canWait,
    sections: translation.sections ?? guide.sections,
    scripts: translation.scripts ?? guide.scripts,
    relatedLinks: translation.relatedLinks ?? guide.relatedLinks,
  };
}
