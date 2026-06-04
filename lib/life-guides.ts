export interface GuideSection {
  heading: string;
  body?: string;
  items?: string[];
}

export interface GuideScript {
  title: string;
  body: string;
}

export interface GuideScenario {
  title: string;
  response: string;
}

export interface GuideLink {
  label: string;
  href: string;
}

export interface LifeGuide {
  id: string;
  slug: string;
  title: string;
  description: string;
  intro: string;
  summary: string[];
  sourceIds: string[];
  sections: GuideSection[];
  scripts: GuideScript[];
  scenarios: GuideScenario[];
  relatedLinks: GuideLink[];
  reviewStatus: "source-checked" | "review-needed";
}

export const lifeGuides: LifeGuide[] = [
  {
    id: "family-and-friends",
    slug: "family-and-friends",
    title: "Family and Friends Guide",
    description:
      "Plan calm conversations, protect safety, and keep family ties where possible.",
    intro:
      "You do not have to tell everyone immediately. This guide helps you decide who needs to know, what to say first, and how to keep the conversation from becoming a debate.",
    summary: [
      "Tell people when it is safe and useful, not because you feel rushed.",
      "Keep the first conversation short and personal.",
      "Set boundaries without insulting your family or old community.",
      "If disclosure could lead to harm, speak with a trusted professional or local support service first.",
    ],
    sourceIds: [
      "new-muslim-academy-family",
      "yaqeen-becoming-muslim",
      "canada-safety-planning",
      "whyislam",
    ],
    sections: [
      {
        heading: "Before You Tell Someone",
        body: "Start by asking what the person actually needs to know right now. A parent you live with, a spouse, a close friend, and a distant relative may need different levels of detail.\n\nIf you depend on someone for housing, tuition, immigration paperwork, transportation, or basic safety, think carefully before a big announcement. Islam does not require you to put yourself in danger to prove sincerity.",
        items: [
          "Choose one calm person before telling a large group.",
          "Pick a private time, not a family event or stressful moment.",
          "Decide your main point before the conversation starts.",
          "Have a safe place to pause or leave if the conversation becomes hostile.",
        ],
      },
      {
        heading: "What To Say First",
        body: "Lead with your own reasons, not a lecture. Most families are reacting to fear: fear that you changed, fear that they lost you, or fear of things they heard about Islam. A short personal explanation often works better than a long argument.",
        items: [
          "Say that you are still their child, sibling, or friend.",
          "Say that Islam is helping you worship God and live with purpose.",
          "Admit that you are still learning.",
          "Invite questions later if the first conversation stays respectful.",
        ],
      },
      {
        heading: "Boundaries Without Hostility",
        body: "A boundary is not a punishment. It is a clear line that protects your worship, dignity, or safety. You can be gentle and still be firm.",
        items: [
          "You can decline arguments about Islam at the dinner table.",
          "You can leave a conversation if it becomes insulting.",
          "You can ask people not to mock prayer, hijab, halal food, or the Prophet Muhammad, peace be upon him.",
          "You can keep showing kindness while refusing pressure to abandon Islam.",
        ],
      },
      {
        heading: "Holidays, Meals, And Living At Home",
        body: "Family routines may be complicated for a while. Focus on avoiding clear haram food and keeping relationships calm where you can. If a family event includes religious acts from another faith, ask a qualified local imam how to handle your exact situation.",
        items: [
          "Offer to bring a dish you can eat.",
          "Thank people for making space for you.",
          "Avoid turning every meal into a debate about halal details.",
          "If you are pressured to do something religiously confusing, ask a qualified person privately.",
        ],
      },
      {
        heading: "Safety Comes First",
        body: "If someone may hurt you, trap you, monitor your device, take your documents, or make you homeless, do not treat disclosure as a simple conversation. Contact a trusted local professional, crisis line, shelter, counselor, chaplain, or community leader who understands safety planning.",
      },
    ],
    scripts: [
      {
        title: "If They Are Worried",
        body: "I know this is new and maybe scary to hear. I am still me, and I am not asking you to understand everything today. Islam is helping me worship God and live more intentionally. I would like us to keep talking calmly.",
      },
      {
        title: "If They Want A Debate",
        body: "I care about you, but I do not want this to become an argument. I am still learning. I can share a simple resource later, or we can talk when we are both calmer.",
      },
      {
        title: "At A Family Meal",
        body: "Thank you for including me. I am avoiding pork and alcohol now, so I brought something I can eat too. I still want to be here with everyone.",
      },
    ],
    scenarios: [
      {
        title: "A friend says you changed too fast.",
        response:
          "Acknowledge the change, then name what is steady: your care for them, your values, and your desire to grow without cutting people off.",
      },
      {
        title: "A parent asks if you rejected them.",
        response:
          "Reassure them that becoming Muslim is not a rejection of family love. Keep the focus on worshiping God and becoming a better person.",
      },
      {
        title: "Someone threatens your safety.",
        response:
          "End the conversation if you can do so safely. Reach out to local emergency services, a trusted professional, or a safety support organization before continuing.",
      },
    ],
    relatedLinks: [
      {
        label: "Family and identity topic",
        href: "/topics/family-and-identity",
      },
      {
        label: "Questions and doubts topic",
        href: "/topics/questions-and-doubts",
      },
      {
        label: "Family roadmap step",
        href: "/roadmap/week-2-3/family-and-friends",
      },
    ],
    reviewStatus: "review-needed",
  },
  {
    id: "first-masjid-visit",
    slug: "first-masjid-visit",
    title: "First Masjid Visit Guide",
    description:
      "Know what to expect before you walk into a masjid for the first time.",
    intro:
      "Every masjid is different, but most visits are easier when you know who to ask, what to wear, and how to handle uncertainty.",
    summary: [
      "You can contact the masjid before you go.",
      "Dress cleanly and modestly without panicking about cultural clothing.",
      "Ask someone directly for help when you arrive.",
      "Friday prayer is busier than a regular daily prayer.",
    ],
    sourceIds: ["whyislam-mosque-visit", "new-muslim-guide", "icna"],
    sections: [
      {
        heading: "Before You Go",
        body: "Check the masjid website or call ahead if you can. Prayer times, entrances, women's spaces, accessibility, parking, and convert support can vary widely.",
        items: [
          "Look for the prayer time and arrive 10 to 20 minutes early.",
          "Bring socks if you prefer not to be barefoot after removing shoes.",
          "Silence your phone before entering the prayer area.",
          "If you are nervous, ask whether someone can meet you at the door.",
        ],
      },
      {
        heading: "What To Wear",
        body: "Wear clean, modest clothing that lets you bow and prostrate comfortably. You do not need cultural clothing. If you are unsure, choose loose clothing with good coverage and avoid slogans or images that may distract people in prayer.",
      },
      {
        heading: "When You Enter",
        body: "Most masjids have a shoe area near the entrance. Some have separate prayer spaces or entrances for men and women. If you are unsure, pause near the entrance and ask someone for help.",
        items: [
          "Say that it is your first visit and you are a new Muslim or learning.",
          "Ask where to put shoes and where to sit.",
          "Ask where wudu is made if you need it.",
          "Follow the rows during prayer and copy the group if you are still learning.",
        ],
      },
      {
        heading: "Friday Prayer Basics",
        body: "Jumu'ah is the Friday congregational prayer. It usually includes a sermon before the prayer and is often crowded. If your first masjid visit is on Friday, arrive early and expect parking, entrances, and seating to be busier.",
      },
      {
        heading: "Women's Space, Accessibility, And Support",
        body: "Women's spaces differ by masjid. Some are large and active; others are smaller or only open at certain times. Accessibility and parking also vary. It is reasonable to ask before visiting.",
        items: [
          "Is the women's prayer area open for this prayer?",
          "Is there an accessible entrance or elevator?",
          "Where should a first-time visitor park?",
          "Is there a new Muslim class, mentor, or contact person?",
        ],
      },
    ],
    scripts: [
      {
        title: "Calling Or Emailing Ahead",
        body: "Assalamu alaykum. I am a new Muslim and I would like to visit for the first time. Could someone tell me where to enter, whether there is a new Muslim contact, and whether I should come before a specific prayer?",
      },
      {
        title: "At The Door",
        body: "Assalamu alaykum. This is my first time here and I am still learning. Could you show me where to put my shoes and where I should sit?",
      },
      {
        title: "Asking For Convert Support",
        body: "Do you have a new Muslim class or someone who helps beginners learn prayer and basics?",
      },
    ],
    scenarios: [
      {
        title: "No one notices you.",
        response:
          "Do not assume you are unwelcome. People may be rushing to prayer. Ask one person directly for the help you need.",
      },
      {
        title: "Someone corrects you abruptly.",
        response:
          "Take what is useful and do not let one person's tone define Islam or the whole community. Ask a calmer person later if the correction was important.",
      },
      {
        title: "The masjid cannot offer convert support.",
        response:
          "Ask if they know another nearby masjid, chaplain, class, or community group. Support can be local, online, or through a different mosque.",
      },
    ],
    relatedLinks: [
      {
        label: "Masjid and community topic",
        href: "/topics/masjid-and-community",
      },
      { label: "Find a Masjid", href: "/resources/find-masjid" },
      {
        label: "First masjid visit step",
        href: "/roadmap/week-1/first-masjid-visit",
      },
    ],
    reviewStatus: "source-checked",
  },
  {
    id: "work-and-school",
    slug: "work-and-school",
    title: "Work and School Guide",
    description:
      "Handle prayer, fasting, food, and social events with practical language.",
    intro:
      "Most work and school needs are easier when you ask early, keep the request specific, and avoid turning your whole identity into an explanation.",
    summary: [
      "Plan prayer around your actual schedule before asking for changes.",
      "Ask for small, concrete accommodations when needed.",
      "Explain food needs simply.",
      "This guide is not legal advice; check official local rules or a qualified professional for your situation.",
    ],
    sourceIds: ["ohrc-religious-rights", "new-muslim-guide", "seekersguidance"],
    sections: [
      {
        heading: "Start With Your Real Schedule",
        body: "Write down your work hours, class times, break times, commute, and nearby clean spaces. Many prayers can fit into ordinary breaks. When they cannot, a short, specific request is usually easier to understand than a long religious explanation.",
      },
      {
        heading: "Prayer Breaks",
        body: "Prayer itself is short, but wudu, walking to a space, and returning to work take time. Ask for what you actually need: a clean place, a few minutes, or a slight break adjustment.",
        items: [
          "Use existing breaks when possible.",
          "Keep a small prayer mat or clean cloth if useful.",
          "Avoid blocking walkways, classrooms, or unsafe work areas.",
          "Ask an imam if your work conditions make prayer timing unusually difficult.",
        ],
      },
      {
        heading: "Friday Prayer And Ramadan",
        body: "Jumu'ah and Ramadan may need more planning. Ask early before schedules are finalized. For fasting, you may need lighter lunch plans, adjusted break timing, or less physically intense activity if your role allows it.",
      },
      {
        heading: "Food And Social Events",
        body: "You do not need to explain every detail of halal food to every coworker. Simple wording is usually enough.",
        items: [
          "I do not eat pork or drink alcohol.",
          "I eat halal meat, but vegetarian or seafood is usually easiest for group meals.",
          "Please do not worry if it is complicated; I can bring my own food.",
        ],
      },
      {
        heading: "Accommodation And Legal Note",
        body: "In Ontario, official public information describes religion or creed as a protected area and gives examples involving prayer time, religious dress, and holidays. Rules differ by place, school, employer, and country. Revert Guide does not provide legal advice, so use official local sources or a qualified professional for your situation.",
      },
    ],
    scripts: [
      {
        title: "Prayer Break Request",
        body: "I have a religious prayer that takes a few minutes during this part of the day. Could I use my break at this time and pray in a quiet clean space that does not interrupt work?",
      },
      {
        title: "Friday Schedule Request",
        body: "On Fridays, I have a congregational prayer around midday. Could we discuss whether I can adjust my lunch break or make up the time another way?",
      },
      {
        title: "School Conversation",
        body: "I am Muslim and need a few minutes for prayer during the day. Who should I speak with about a suitable space and how to handle this respectfully with my schedule?",
      },
    ],
    scenarios: [
      {
        title: "You are embarrassed to ask.",
        response:
          "Start with one practical need. You do not have to tell your full conversion story to request a schedule conversation.",
      },
      {
        title: "Your manager says no immediately.",
        response:
          "Stay calm and ask who handles accommodation or schedule requests. If needed, consult official local rights information or a qualified advisor.",
      },
      {
        title: "A social event centers on alcohol.",
        response:
          "Attend only if you can maintain your boundaries. Suggest coffee, lunch, or another setting when possible.",
      },
    ],
    relatedLinks: [
      { label: "Prayer topic", href: "/topics/prayer" },
      { label: "Halal living topic", href: "/topics/halal-living" },
      {
        label: "Asking an imam step",
        href: "/roadmap/month-3-6/asking-an-imam",
      },
    ],
    reviewStatus: "review-needed",
  },
  {
    id: "identity-and-culture",
    slug: "identity-and-culture",
    title: "Identity and Culture Guide",
    description:
      "Stay Muslim without feeling forced to become someone else's culture.",
    intro:
      "Islam changes your worship and values, but it does not erase your personality, ethnicity, language, or healthy family background.",
    summary: [
      "You do not need to become Arab, South Asian, African, Turkish, or any other ethnicity to be Muslim.",
      "A name change is generally not required unless the name has a clearly bad or anti-Islamic meaning.",
      "Feeling lonely or in-between cultures is common for converts.",
      "Healthy community helps you grow without pressuring you to perform an identity.",
    ],
    sourceIds: [
      "yaqeen-becoming-muslim",
      "whyislam-name-change",
      "new-muslim-academy",
      "new-muslim-guide",
    ],
    sections: [
      {
        heading: "Islam And Culture",
        body: "Islam is for every people and place. Muslim communities naturally carry culture: food, clothing, language, family customs, humor, and etiquette. Some of that culture is beautiful. Some of it may simply be local habit. You can learn from people without assuming every custom is a religious rule.",
      },
      {
        heading: "Names",
        body: "Many new Muslims keep their birth name. Some choose an additional Muslim name because it feels meaningful. A name change is usually not required unless the name has a meaning that clearly conflicts with Islamic belief or has an ugly meaning. Ask a qualified person if you are unsure about your name's meaning.",
      },
      {
        heading: "Convert Loneliness",
        body: "You may feel too Muslim for old spaces and too new for Muslim spaces. That in-between feeling is real. It does not mean you made the wrong choice. It means your life is reorganizing.",
        items: [
          "Build one or two steady Muslim friendships instead of chasing a crowd.",
          "Keep healthy non-Muslim relationships where your faith is respected.",
          "Find classes that welcome beginner questions.",
          "Take breaks from online spaces that make you feel like you are always behind.",
        ],
      },
      {
        heading: "Pressure To Do Everything At Once",
        body: "Some people may give advice with good intentions but poor timing. You can appreciate their concern while choosing a sustainable pace. Foundations come first: faith, prayer, character, halal basics, and reliable learning.",
      },
      {
        heading: "Healthy Community Signs",
        items: [
          "They explain basics without shaming you.",
          "They help you connect with qualified teachers.",
          "They respect family and safety complexity.",
          "They do not isolate you from everyone who knew you before Islam.",
          "They can say, I do not know, when a question needs a scholar.",
        ],
      },
    ],
    scripts: [
      {
        title: "When Someone Says You Need A New Culture",
        body: "I am happy to learn from Muslim cultures, but I am also learning what Islam itself requires. I want to grow in a way that is sincere and sustainable.",
      },
      {
        title: "When Someone Pressures A Name Change",
        body: "I have learned that changing my name is not automatically required. I may think about it later, but right now I am focusing on prayer and foundations.",
      },
      {
        title: "When You Feel Behind",
        body: "I am new, and I am taking the basics seriously. Please help me with what matters most now instead of giving me too many things at once.",
      },
    ],
    scenarios: [
      {
        title: "You are the only convert in the room.",
        response:
          "Look for one sincere person rather than trying to belong to everyone at once. Being new is not a flaw.",
      },
      {
        title: "People confuse culture with Islam.",
        response:
          "Ask gently: Is this a religious requirement, a recommended practice, or a local custom?",
      },
      {
        title: "Old friends think Islam erased you.",
        response:
          "Show steadiness through character. You can explain that Islam is guiding you, not deleting your history.",
      },
    ],
    relatedLinks: [
      {
        label: "Family and identity topic",
        href: "/topics/family-and-identity",
      },
      { label: "New Muslim basics topic", href: "/topics/new-muslim-basics" },
      { label: "Knowledge roadmap step", href: "/roadmap/month-3-6/knowledge" },
    ],
    reviewStatus: "review-needed",
  },
  {
    id: "relationships-and-marriage-basics",
    slug: "relationships-and-marriage-basics",
    title: "Relationships and Marriage Basics",
    description:
      "Slow down major decisions, ask the right people, and protect safety and dignity.",
    intro:
      "Relationships can become complicated after Shahada, especially if family, dating history, marriage pressure, or a partner's expectations are involved. This guide keeps the first step simple: do not make rushed life decisions alone.",
    summary: [
      "Marriage, divorce, custody, conversion-for-marriage pressure, and family conflict need qualified local guidance.",
      "You do not have to solve every relationship question in your first weeks as a Muslim.",
      "Healthy boundaries are part of dignity, not a sign that you lack faith.",
      "If a relationship involves threats, control, violence, immigration pressure, or financial dependence, speak with a safety professional or trusted local support before acting.",
    ],
    sourceIds: [
      "new-muslim-guide-family",
      "new-muslim-academy-family",
      "seekersguidance",
      "canada-safety-planning",
    ],
    sections: [
      {
        heading: "What Can Wait",
        body: "You can learn prayer, community basics, and halal boundaries without deciding your whole marriage future immediately. If someone is pushing you to marry, divorce, move, change finances, or cut off family quickly, pause and ask for qualified help.",
        items: [
          "Do not marry because you feel you owe someone for helping you become Muslim.",
          "Do not hide major legal, safety, or financial concerns from qualified advisors.",
          "Do not treat online comments as enough for marriage or divorce decisions.",
          "Do not let shame rush you into a choice you do not understand.",
        ],
      },
      {
        heading: "Before A Serious Decision",
        body: "Write the real situation in plain words. Include whether you live together, whether children are involved, whether there is pressure or fear, and whether there are legal documents, immigration issues, debts, or housing risks.",
        items: [
          "Ask what Islam requires, what is recommended, and what can wait.",
          "Ask whether your situation needs a local scholar, counselor, lawyer, or safety service.",
          "If you already have a civil marriage or divorce process, ask both religious and legal professionals what applies.",
          "If you feel unsafe, prioritize safety planning before religious debate.",
        ],
      },
      {
        heading: "How To Ask An Imam",
        body: "A clear question helps the imam or teacher answer responsibly. Say that you are a new Muslim and that you need a practical next step, not a full legal manual.",
        items: [
          "What is the immediate religious priority in my situation?",
          "Does this need a private appointment instead of a quick hallway answer?",
          "Should I also speak with a counselor, lawyer, mediator, or safety service?",
          "Are there details I should not share publicly?",
        ],
      },
      {
        heading: "Boundaries And Safety",
        body: "A relationship is not healthy just because someone uses religious language. Be careful around pressure, isolation, threats, monitoring your phone, controlling money, rushing marriage, or telling you that you cannot ask anyone else for advice.",
      },
      {
        heading: "Not Legal Or Marital Counseling",
        body: "This page is general education. It does not decide whether a marriage is valid, whether a divorce happened, whether a custody plan is safe, or what your legal rights are. Use local qualified help for personal cases.",
      },
    ],
    scripts: [
      {
        title: "Asking For Time",
        body: "I am new and I want to make decisions carefully. I am going to ask a qualified local imam and, if needed, a counselor or legal professional before deciding.",
      },
      {
        title: "Asking An Imam",
        body: "I am a new Muslim and I need guidance about a relationship situation. It may involve marriage, family pressure, or safety. Could I book a private time to explain it responsibly?",
      },
      {
        title: "Setting A Boundary",
        body: "I care about handling this in a halal and respectful way, but I am not comfortable being pressured. I need time and qualified advice.",
      },
    ],
    scenarios: [
      {
        title: "Someone says you must marry quickly now that you are Muslim.",
        response:
          "Pause. Marriage is serious worship and a legal life decision. Ask a qualified local imam and trusted support before agreeing.",
      },
      {
        title: "A partner uses Islam to control who you talk to.",
        response:
          "Healthy advice does not isolate you from qualified help. Speak privately with a trusted imam, counselor, or safety professional.",
      },
      {
        title: "You are already married and your spouse is not Muslim.",
        response:
          "Do not rely on generic content. Ask a qualified local scholar who can review your exact situation with care.",
      },
    ],
    relatedLinks: [
      {
        label: "Family and identity topic",
        href: "/topics/family-and-identity",
      },
      {
        label: "Ask an imam step",
        href: "/roadmap/month-3-6/asking-an-imam",
      },
      { label: "Family guide", href: "/guides/family-and-friends" },
    ],
    reviewStatus: "review-needed",
  },
  {
    id: "loneliness-and-belonging",
    slug: "loneliness-and-belonging",
    title: "Loneliness and Belonging",
    description:
      "Build one steady connection and know when emotional support should become professional help.",
    intro:
      "Many new Muslims feel between worlds for a while. Loneliness does not mean your faith is weak. It means your relationships, routines, and community map are changing.",
    summary: [
      "Belonging usually grows through one or two steady connections, not through being known by everyone.",
      "Keep healthy non-Muslim relationships where your faith is respected.",
      "A small weekly routine can reduce the feeling that every day is a new decision.",
      "If loneliness becomes hopelessness, panic, self-harm thoughts, or inability to function, seek professional or crisis support immediately.",
    ],
    sourceIds: [
      "yaqeen-becoming-muslim",
      "yaqeen-mental-health",
      "khalil-center",
      "naseeha",
      "988-lifeline",
    ],
    sections: [
      {
        heading: "Convert Loneliness Is Real",
        body: "You may feel too Muslim for some old spaces and too new for some Muslim spaces. This feeling can be painful, but it is common enough that it should be named without shame.",
        items: [
          "You are not behind because you do not know every custom.",
          "You are not fake because you still miss parts of your old routine.",
          "You are not alone because one masjid visit felt awkward.",
          "You can build slowly without pretending everything is easy.",
        ],
      },
      {
        heading: "Build One Steady Connection",
        body: "Look for one reliable person before looking for a crowd. A good first connection might be a calm class teacher, a convert mentor, a chaplain, a Muslim coworker, or someone at a masjid who answers basic questions kindly.",
      },
      {
        heading: "Make A Gentle Weekly Routine",
        items: [
          "Attend one prayer, class, or community event when you can.",
          "Send one message to a trustworthy person instead of disappearing.",
          "Keep one healthy non-Muslim relationship active.",
          "Spend some time offline when online arguments make Islam feel heavy.",
        ],
      },
      {
        heading: "When To Seek Professional Help",
        body: "Spiritual support and clinical support can work together. If you feel unsafe, unable to sleep or function, trapped in panic, or at risk of harming yourself, contact emergency services, 988 in the United States, a crisis line, a clinician, or another appropriate local service.",
      },
      {
        heading: "Do Not Measure Belonging By Noise",
        body: "Some people find community quietly. You may not be invited everywhere, and that can hurt. Still, one sincere class, one respectful friend, and one steady dua can be more helpful than many shallow connections.",
      },
    ],
    scripts: [
      {
        title: "Asking For One Connection",
        body: "I am a new Muslim and I am trying to find steady support. Is there one class, mentor, or person you recommend I connect with?",
      },
      {
        title: "Texting When You Feel Isolated",
        body: "I have been feeling lonely and I am trying not to disappear. Could we check in sometime this week, even briefly?",
      },
      {
        title: "Asking For Professional Support",
        body: "I am dealing with loneliness and it is affecting my daily life. Could you help me find a counselor, crisis line, or faith-sensitive mental health support?",
      },
    ],
    scenarios: [
      {
        title: "You went to the masjid and no one greeted you.",
        response:
          "Try not to make that one visit the whole story. People may be busy or shy. Ask one person directly for a new Muslim contact or class.",
      },
      {
        title: "Old friends invite you somewhere uncomfortable.",
        response:
          "Suggest a different setting. You can keep relationships while changing boundaries.",
      },
      {
        title: "Loneliness is turning into despair.",
        response:
          "Treat that as serious. Contact a crisis line, clinician, trusted person, or emergency service right away in your local area.",
      },
    ],
    relatedLinks: [
      { label: "Mental health support", href: "/mental-health" },
      { label: "Community topic", href: "/topics/community" },
      { label: "First masjid visit guide", href: "/guides/first-masjid-visit" },
    ],
    reviewStatus: "review-needed",
  },
  {
    id: "healthy-community-signs",
    slug: "healthy-community-signs",
    title: "Healthy Community Signs",
    description:
      "Recognize support that helps you grow without pressure, isolation, or manipulation.",
    intro:
      "A healthy Muslim community makes the basics easier, not heavier. This guide helps you notice signs of good support and warning signs that require distance or qualified help.",
    summary: [
      "Healthy communities welcome beginner questions and know when to refer you to qualified people.",
      "Good support respects family complexity, safety, privacy, and gradual growth.",
      "Pressure, isolation, secrecy, and shame are warning signs.",
      "One difficult person does not define the whole Muslim community.",
    ],
    sourceIds: [
      "whyislam-mosque-visit",
      "new-muslim-academy",
      "yaqeen-becoming-muslim",
      "canada-safety-planning",
    ],
    sections: [
      {
        heading: "Green Flags",
        items: [
          "They answer simple questions without mocking you.",
          "They can say, I do not know, and refer you to someone qualified.",
          "They help you learn prayer and basics before piling on advanced debates.",
          "They respect privacy and do not turn your conversion story into content.",
          "They care about your safety, family reality, and mental health.",
        ],
      },
      {
        heading: "Warning Signs",
        body: "Be careful if someone says you must only listen to them, pressures you to cut off everyone immediately, rushes marriage or money decisions, asks you to keep harmful secrets, or shames you for needing qualified help.",
      },
      {
        heading: "Beginner Questions Should Be Welcome",
        body: "You should be allowed to ask where to pray, how to make wudu, what a word means, or who can teach you. A beginner-friendly space does not turn every question into embarrassment.",
      },
      {
        heading: "Referral Is A Strength",
        body: "A responsible mentor does not pretend to answer everything. Marriage, divorce, abuse, trauma, detailed fiqh, legal concerns, clinical distress, and financial decisions should be referred to qualified people.",
      },
      {
        heading: "If A Space Feels Unsafe",
        body: "Leave if you can do so safely. Contact a trusted person, another masjid, a community leader, or a professional support service. You are not required to remain in an unhealthy setting to prove sincerity.",
      },
    ],
    scripts: [
      {
        title: "Asking About Source",
        body: "Thank you for explaining. Is this a religious requirement, a recommendation, or a local custom? Who could I ask for a qualified answer?",
      },
      {
        title: "Leaving Pressure",
        body: "I need to slow down and ask someone qualified before making that decision. I am not comfortable being pressured.",
      },
      {
        title: "Finding Another Space",
        body: "This space may not be the right fit for me right now. Do you know another class or masjid that supports new Muslims calmly?",
      },
    ],
    scenarios: [
      {
        title: "Someone shares your conversion story without permission.",
        response:
          "Ask them to stop and remove it if possible. Your privacy matters, even when people are excited for you.",
      },
      {
        title: "People overload you with rules.",
        response:
          "Ask for the beginner priority: what matters this week, what can wait, and who can teach you steadily.",
      },
      {
        title: "A group discourages you from asking other teachers.",
        response:
          "Treat that as a warning sign. Healthy learning can handle qualified second opinions.",
      },
    ],
    relatedLinks: [
      {
        label: "Masjid and community topic",
        href: "/topics/masjid-and-community",
      },
      { label: "Find a Masjid", href: "/resources/find-masjid" },
      {
        label: "Ask an imam step",
        href: "/roadmap/month-3-6/asking-an-imam",
      },
    ],
    reviewStatus: "review-needed",
  },
  {
    id: "halal-living-in-daily-life",
    slug: "halal-living-in-daily-life",
    title: "Halal Living in Daily Life",
    description:
      "Handle food, family meals, social events, and work situations without panic.",
    intro:
      "Halal living is learned one ordinary choice at a time. Start with clear basics, avoid obsessive checking, and ask qualified local help when details become complicated.",
    summary: [
      "Begin with clear food boundaries: avoid pork and alcohol, and choose halal meat when available.",
      "Vegetarian, seafood, dairy, eggs, beans, and simple home meals can make early choices easier.",
      "Ingredient, certification, medicine, and cross-contact details can vary by place and need local guidance.",
      "Halal living should make obedience steadier, not turn daily life into constant panic.",
    ],
    sourceIds: [
      "new-muslim-guide-food-drink",
      "new-muslim-guide",
      "seekersguidance",
    ],
    sections: [
      {
        heading: "Food Basics First",
        body: "Start with choices that are clear and repeatable. You do not need to become an expert in every ingredient during your first grocery trip.",
        items: [
          "Avoid pork and alcohol.",
          "Choose halal-certified meat when available.",
          "Use vegetarian or seafood options for uncertain group meals.",
          "Build a short list of easy meals you can repeat.",
        ],
      },
      {
        heading: "Social Events",
        body: "Tell hosts your needs before the event when possible. Keep it simple and appreciative. A calm sentence often works better than a long debate about halal details.",
      },
      {
        heading: "Family Meals",
        body: "Food can carry emotion and family history. If a family member feels rejected, reassure them while keeping your boundary. Offer to bring a dish, cook together, or choose something everyone can eat.",
      },
      {
        heading: "Work And School",
        body: "For lunches, catered meetings, and travel, choose clear options or bring your own food. If a workplace or school event centers on alcohol, decide ahead of time what level of attendance is appropriate and ask a qualified person if you are unsure.",
      },
      {
        heading: "When Details Need Help",
        body: "Gelatin, enzymes, flavorings, medicines, restaurant kitchens, and certification standards can be confusing. If the issue affects you often, ask a local imam, halal certifier, pharmacist, or qualified teacher as appropriate.",
      },
    ],
    scripts: [
      {
        title: "For A Host",
        body: "Thank you for inviting me. I eat halal now, so I avoid pork and alcohol. Vegetarian or seafood is usually easiest, and I can bring something too.",
      },
      {
        title: "At Work",
        body: "I have a religious dietary restriction and avoid pork and alcohol. If catering is difficult, I am happy to bring my own meal.",
      },
      {
        title: "Asking About Details",
        body: "This ingredient comes up often for me. Could you help me understand the local halal standard without making me obsessive?",
      },
    ],
    scenarios: [
      {
        title: "Your family cooks pork in a shared kitchen.",
        response:
          "Keep the request practical: separate utensils where possible, your own dish, or a simple alternative. Ask locally if the home situation is complex.",
      },
      {
        title: "A friend says one bite does not matter.",
        response:
          "Stay calm and repeat your boundary. You do not need to prove the whole religion at the table.",
      },
      {
        title: "You are checking labels for hours.",
        response:
          "That may be a sign to simplify. Ask a qualified teacher for a beginner standard and consider mental health support if anxiety is taking over.",
      },
    ],
    relatedLinks: [
      { label: "Halal living topic", href: "/topics/halal-living" },
      {
        label: "Halal eating step",
        href: "/roadmap/month-1-2/halal-eating-practical",
      },
      { label: "Work and school guide", href: "/guides/work-and-school" },
    ],
    reviewStatus: "review-needed",
  },
  {
    id: "modesty-and-clothing",
    slug: "modesty-and-clothing",
    title: "Modesty and Clothing",
    description:
      "Take sustainable clothing steps while respecting work, school, family, safety, and climate realities.",
    intro:
      "Modesty is broader than clothing, and clothing changes can still feel very visible. This guide helps you take the topic seriously without turning it into panic or cultural performance.",
    summary: [
      "Learn the purpose of modesty before buying a whole new wardrobe.",
      "Ask a qualified teacher what is required and what details can wait.",
      "Visible changes may affect family, work, school, safety, or weather, so plan wisely.",
      "A cultural clothing style may be beautiful without being required for every Muslim.",
    ],
    sourceIds: [
      "new-muslim-guide-dress-code",
      "seekersguidance",
      "ohrc-religious-rights",
      "canada-safety-planning",
    ],
    sections: [
      {
        heading: "Start Gradually",
        body: "Choose one sustainable step: looser clothing, prayer-ready outfits, longer layers, or better coverage in settings where it is safe. Avoid expensive panic shopping.",
      },
      {
        heading: "Culture Versus Religious Principle",
        body: "Muslim cultures have different clothing styles. Ask whether a detail is a religious requirement, a recommendation, or a local custom. You can respect culture without confusing it for a universal rule.",
      },
      {
        heading: "Work And School Realities",
        body: "Uniforms, safety gear, sports, labs, and school rules may require planning. Official rights information in some places describes religious dress and accommodation, but rules differ by location. This guide is not legal advice.",
      },
      {
        heading: "Family And Safety",
        body: "If visible changes may trigger hostility, threats, homelessness, or surveillance, speak with trusted local support before moving quickly. Safety planning is not a lack of sincerity.",
      },
      {
        heading: "Climate And Comfort",
        body: "Heat, cold, mobility, sensory needs, and health conditions matter. Ask a qualified teacher about your exact situation and choose clothing that lets you pray and function.",
      },
    ],
    scripts: [
      {
        title: "Asking A Teacher",
        body: "I am new and trying to approach modesty correctly. What is required for me, what can wait, and how should I handle my work or family situation?",
      },
      {
        title: "Responding To Pressure",
        body: "I am taking modesty seriously, but I need to learn it properly and take steps I can maintain.",
      },
      {
        title: "At Work Or School",
        body: "I have a religious clothing need and would like to discuss a practical way to meet it while still following safety and role requirements.",
      },
    ],
    scenarios: [
      {
        title: "Someone says your clothes prove you are not sincere.",
        response:
          "Do not let shame set your pace. Ask a qualified, compassionate teacher for priorities and keep growing steadily.",
      },
      {
        title: "Your workplace has uniform rules.",
        response:
          "Clarify what the religious need is, then ask the proper office or advisor about practical options. Get local legal advice if needed.",
      },
      {
        title: "Family reaction may be unsafe.",
        response:
          "Plan with trusted support before making sudden visible changes. Your safety matters.",
      },
    ],
    relatedLinks: [
      { label: "Modesty topic", href: "/topics/modesty" },
      {
        label: "Modesty roadmap step",
        href: "/roadmap/month-1-2/modesty-and-clothing",
      },
      { label: "Work and school guide", href: "/guides/work-and-school" },
    ],
    reviewStatus: "review-needed",
  },
  {
    id: "how-to-ask-for-help",
    slug: "how-to-ask-for-help",
    title: "How to Ask for Help",
    description:
      "Choose the right person, explain the situation clearly, and know when the issue needs urgent support.",
    intro:
      "You do not have to know the right door before asking. This guide helps you decide whether to ask an imam, teacher, counselor, administrator, rights office, or emergency service.",
    summary: [
      "Different questions need different helpers: religious, clinical, legal, safety, administrative, or financial.",
      "A short written summary helps people answer responsibly.",
      "Sensitive matters need private, qualified review instead of hallway answers.",
      "Urgent danger, self-harm risk, abuse, or medical emergencies should go to emergency or crisis support first.",
    ],
    sourceIds: [
      "seekersguidance",
      "new-muslim-academy",
      "whyislam",
      "khalil-center",
      "988-lifeline",
      "ohrc-religious-rights",
    ],
    sections: [
      {
        heading: "Choose The Right Helper",
        items: [
          "Ask an imam or scholar about worship, halal and haram, family religious questions, and spiritual priorities.",
          "Ask a teacher or mentor about learning plans, Arabic terms, classes, and community navigation.",
          "Ask a mental-health professional about anxiety, depression, trauma, panic, grief, or crisis risk.",
          "Ask a masjid administrator about schedules, entrances, classes, parking, accessibility, and contacts.",
          "Ask official rights or legal professionals about work, school, housing, documents, or legal obligations.",
        ],
      },
      {
        heading: "What Details To Include",
        body: "Write what happened, what decision you need to make, where you live, any deadline, and what risks are involved. Keep private details brief unless they change the answer.",
      },
      {
        heading: "Ask For The Next Step",
        body: "Many new Muslims get overwhelmed because they ask for the whole map. Ask for the next responsible step, what can wait, and who should review the issue if it is outside the helper's role.",
      },
      {
        heading: "When To Escalate",
        body: "If someone may harm you, you may harm yourself, you are being abused, a child is unsafe, or there is a medical emergency, contact emergency services or crisis support in your area before waiting for ordinary community advice.",
      },
      {
        heading: "If The First Person Cannot Help",
        body: "That does not mean help does not exist. Ask for a referral to another masjid, scholar, counselor, chaplain, helpline, public office, or qualified professional.",
      },
    ],
    scripts: [
      {
        title: "General Help Request",
        body: "I am a new Muslim and I need help figuring out the right next step. This involves [brief topic]. Who is the right person to ask?",
      },
      {
        title: "Private Appointment",
        body: "This is sensitive and may involve family, safety, or a personal ruling. Could I book a private time or be referred to someone qualified?",
      },
      {
        title: "Administrator Question",
        body: "I am planning to visit for the first time. Could you tell me the entrance, prayer time, accessibility or parking details, and whether there is a new Muslim contact?",
      },
    ],
    scenarios: [
      {
        title: "You are embarrassed by a basic question.",
        response:
          "Say directly that you are new. Responsible teachers expect beginner questions and can usually explain the next step simply.",
      },
      {
        title: "You receive opposite answers.",
        response:
          "Ask a qualified local scholar what applies to your situation and whether the difference is valid, local, or a misunderstanding.",
      },
      {
        title: "You need help tonight.",
        response:
          "Use urgent support: emergency services, a crisis line, a shelter, a hospital, or a trusted person who can be with you now.",
      },
    ],
    relatedLinks: [
      {
        label: "Ask an imam step",
        href: "/roadmap/month-3-6/asking-an-imam",
      },
      { label: "Mental health support", href: "/mental-health" },
      { label: "Find a Masjid", href: "/resources/find-masjid" },
    ],
    reviewStatus: "review-needed",
  },
  {
    id: "guide-for-mentors",
    slug: "guide-for-mentors",
    title: "Guide for Mentors of New Muslims",
    description:
      "Welcome a new Muslim with calm priorities, clear boundaries, and responsible referrals.",
    intro:
      "A mentor does not need to answer everything. The best first support is steady, private, practical, and humble enough to refer sensitive questions to qualified people.",
    summary: [
      "Start with welcome, prayer basics, community connection, and what can wait.",
      "Do not turn a new Muslim's story into public content without clear consent.",
      "Avoid overwhelming them with advanced debates, culture wars, or your personal preferences.",
      "Refer marriage, safety, trauma, clinical distress, legal, financial, and detailed fiqh questions to qualified people.",
    ],
    sourceIds: [
      "new-muslim-academy",
      "whyislam",
      "icna",
      "yaqeen-becoming-muslim",
      "khalil-center",
      "canada-safety-planning",
    ],
    sections: [
      {
        heading: "First Meeting",
        body: "Welcome them warmly, ask what they need today, and keep the conversation calm. A new Muslim may need prayer help, a masjid tour, a reliable class, family support, or simply a safe person to ask basic questions.",
        items: [
          "Ask permission before giving a long list of tasks.",
          "Give one or two next steps, not twenty.",
          "Offer a reliable contact method and realistic response time.",
          "Protect their privacy unless they clearly ask for public support.",
        ],
      },
      {
        heading: "What Not To Overwhelm With",
        body: "Avoid advanced sect debates, online controversy, marriage pressure, political arguments, culture policing, and long lists of optional practices in the first meeting.",
      },
      {
        heading: "Follow-Up Boundaries",
        body: "Support should be reliable without becoming controlling. Do not demand constant updates, monitor private life, or make yourself the only source of guidance.",
      },
      {
        heading: "Referral Points",
        items: [
          "Scholar or imam: personal rulings, marriage, divorce, worship details, and family religious questions.",
          "Clinician or crisis line: trauma, panic, depression, self-harm thoughts, addiction, or ongoing distress.",
          "Safety service: abuse, threats, stalking, homelessness risk, or document control.",
          "Legal or rights professional: workplace, school, housing, custody, immigration, or financial/legal documents.",
          "Masjid administrator: classes, parking, accessibility, schedules, and visitor logistics.",
        ],
      },
      {
        heading: "Respect Privacy And Safety",
        body: "A public Shahada, group chat announcement, photo, or testimonial may feel exciting to the community but unsafe for the person. Ask before sharing anything, and accept no without guilt.",
      },
    ],
    scripts: [
      {
        title: "First Welcome",
        body: "Welcome. I am glad you are here. What would help you most this week: prayer basics, a class, a masjid visit, family support, or someone to answer beginner questions?",
      },
      {
        title: "Setting A Mentor Boundary",
        body: "I can support you with basics and community navigation, but this question needs a qualified imam, counselor, or professional. I can help you find one.",
      },
      {
        title: "Avoiding Overload",
        body: "You do not need to learn everything today. Let us choose one next step and leave the rest for later.",
      },
    ],
    scenarios: [
      {
        title: "The new Muslim asks a marriage or divorce question.",
        response:
          "Do not improvise. Help them book private time with a qualified local imam and, if needed, a counselor or legal professional.",
      },
      {
        title: "They disclose family threats or abuse.",
        response:
          "Prioritize safety. Help them connect with emergency, crisis, shelter, or professional support instead of treating it as a normal religious question.",
      },
      {
        title: "Community members want to celebrate publicly.",
        response:
          "Ask the new Muslim privately whether they consent. If they say no or hesitate, keep it private.",
      },
    ],
    relatedLinks: [
      { label: "First week essentials", href: "/roadmap/week-1" },
      { label: "First masjid visit guide", href: "/guides/first-masjid-visit" },
      { label: "How to ask for help", href: "/guides/how-to-ask-for-help" },
    ],
    reviewStatus: "review-needed",
  },
];

export function getLifeGuideBySlug(slug: string) {
  return lifeGuides.find((guide) => guide.slug === slug);
}
