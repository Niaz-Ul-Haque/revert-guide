(() => {
  var e = {};
  ((e.id = 537),
    (e.ids = [537]),
    (e.modules = {
      2934: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/action-async-storage.external.js");
      },
      4580: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/request-async-storage.external.js");
      },
      5869: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/static-generation-async-storage.external.js");
      },
      399: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      575: (e, t, r) => {
        "use strict";
        (r.r(t),
          r.d(t, {
            GlobalError: () => o.a,
            __next_app__: () => h,
            originalPathname: () => m,
            pages: () => c,
            routeModule: () => u,
            tree: () => d,
          }),
          r(5888),
          r(9475),
          r(6982),
          r(1506),
          r(5866));
        var a = r(3191),
          n = r(8716),
          s = r(7922),
          o = r.n(s),
          i = r(5231),
          l = {};
        for (let e in i)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "originalPathname",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (l[e] = () => i[e]);
        r.d(t, l);
        let d = [
            "",
            {
              children: [
                "[locale]",
                {
                  children: [
                    "mental-health",
                    {
                      children: [
                        "__PAGE__",
                        {},
                        {
                          page: [
                            () => Promise.resolve().then(r.bind(r, 5888)),
                            "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\mental-health\\page.tsx",
                          ],
                        },
                      ],
                    },
                    {},
                  ],
                },
                {
                  layout: [
                    () => Promise.resolve().then(r.bind(r, 9475)),
                    "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\layout.tsx",
                  ],
                  "not-found": [
                    () => Promise.resolve().then(r.bind(r, 6982)),
                    "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\not-found.tsx",
                  ],
                },
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(r.bind(r, 1506)),
                "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\layout.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(r.t.bind(r, 5866, 23)),
                "next/dist/client/components/not-found-error",
              ],
            },
          ],
          c = [
            "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\mental-health\\page.tsx",
          ],
          m = "/[locale]/mental-health/page",
          h = { require: r, loadChunk: () => Promise.resolve() },
          u = new a.AppPageRouteModule({
            definition: {
              kind: n.x.APP_PAGE,
              page: "/[locale]/mental-health/page",
              pathname: "/[locale]/mental-health",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      6867: (e, t, r) => {
        (Promise.resolve().then(r.bind(r, 5829)),
          Promise.resolve().then(r.bind(r, 3630)),
          Promise.resolve().then(r.t.bind(r, 2481, 23)),
          Promise.resolve().then(r.t.bind(r, 9404, 23)));
      },
      5829: (e, t, r) => {
        "use strict";
        r.d(t, { AnimateIn: () => s });
        var a = r(326),
          n = r(7577);
        function s({
          children: e,
          className: t = "",
          delay: r = 0,
          animation: s = "fade-up",
          threshold: o = 0.1,
        }) {
          let i = (0, n.useRef)(null),
            [l, d] = (0, n.useState)(!1);
          return a.jsx("div", {
            ref: i,
            className: `${t} ${l ? { "fade-up": "animate-fade-up", "fade-in": "animate-fade-in", "scale-in": "animate-scale-in", "slide-in-right": "animate-slide-in-right" }[s] : "opacity-0"}`,
            style: l && r > 0 ? { animationDelay: `${r}s` } : void 0,
            children: e,
          });
        }
      },
      3630: (e, t, r) => {
        "use strict";
        r.d(t, { Breadcrumb: () => o });
        var a = r(326),
          n = r(434),
          s = r(3082);
        function o({ items: e }) {
          let t = (0, s.T)();
          return 0 === e.length
            ? null
            : a.jsx("nav", {
                "aria-label": t("common.breadcrumb"),
                className: "mb-8",
                children: a.jsx("ol", {
                  className:
                    "mb-0 flex flex-wrap items-center gap-1.5 pl-0 text-sm",
                  children: e.map((t, r) => {
                    let s = r === e.length - 1;
                    return (0, a.jsxs)(
                      "li",
                      {
                        className: "mb-0 inline-flex items-center gap-1.5",
                        children: [
                          r > 0 &&
                            a.jsx("svg", {
                              className: "h-3 w-3 text-border",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              strokeWidth: 2.5,
                              stroke: "currentColor",
                              "aria-hidden": "true",
                              children: a.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "m8.25 4.5 7.5 7.5-7.5 7.5",
                              }),
                            }),
                          s || !t.href
                            ? a.jsx("span", {
                                className: "font-medium text-textMuted",
                                "aria-current": s ? "page" : void 0,
                                children: t.label,
                              })
                            : a.jsx(n.default, {
                                href: t.href,
                                className:
                                  "font-medium text-textSecondary no-underline transition-colors duration-200 hover:text-primary",
                                children: t.label,
                              }),
                        ],
                      },
                      t.href ?? t.label,
                    );
                  }),
                }),
              });
        }
      },
      5888: (e, t, r) => {
        "use strict";
        (r.r(t), r.d(t, { default: () => u, generateMetadata: () => h }));
        var a = r(9510),
          n = r(7371),
          s = r(7710),
          o = r(4557),
          i = r(4627),
          l = r(2095),
          d = r(6258),
          c = r(9306),
          m = r(3219);
        function h({ params: e }) {
          return (0, m.r)(e.locale, "mentalHealth");
        }
        function u({ params: e }) {
          let t = e.locale;
          return (0, a.jsxs)("div", {
            className: "mx-auto max-w-4xl px-5 py-10",
            children: [
              a.jsx(o.a, {
                items: [
                  { label: "Home", href: (0, c.FT)(t, "/") },
                  { label: "Taking Care of Your Mind" },
                ],
              }),
              (0, a.jsxs)("header", {
                className: "relative mb-12",
                children: [
                  (0, a.jsxs)(d.b, {
                    animation: "fade-up",
                    children: [
                      a.jsx("h1", {
                        className:
                          "mb-3 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl",
                        children: "Taking Care of Your Mind",
                      }),
                      a.jsx("p", {
                        className:
                          "max-w-2xl text-xl leading-relaxed text-textSecondary",
                        children:
                          "Your emotional well-being matters. This page is here to support you.",
                      }),
                    ],
                  }),
                  a.jsx("div", {
                    className:
                      "pointer-events-none absolute -right-4 top-0 hidden h-[160px] w-[100px] opacity-[0.12] lg:block",
                    "aria-hidden": "true",
                    children: a.jsx(s.default, {
                      src: "/Adult female Character Standing.png",
                      alt: "",
                      fill: !0,
                      className: "object-contain object-right-bottom",
                      "aria-hidden": "true",
                    }),
                  }),
                ],
              }),
              a.jsx(d.b, {
                children: (0, a.jsxs)("section", {
                  className: "mb-10",
                  "aria-labelledby": "validation",
                  children: [
                    a.jsx("h2", {
                      id: "validation",
                      className:
                        "mb-3 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                      children: "Your Feelings Are Valid",
                    }),
                    a.jsx(i.U, {
                      variant: "info",
                      title: "You are not alone",
                      children: a.jsx("p", {
                        children:
                          "Many new Muslims experience feelings of loneliness, doubt, anxiety, identity questions, or family conflict. These feelings do not make you a bad Muslim — they make you human.",
                      }),
                    }),
                    a.jsx("p", {
                      className: "text-base leading-relaxed text-textSecondary",
                      children:
                        "Embracing Islam is one of the most significant decisions you can make. It is a beautiful step, but it is also a major life change that requires emotional adjustment. It is completely normal to feel overwhelmed, conflicted, or uncertain at times. What matters is that you are here, learning and growing. Every convert before you has navigated these same waters, and you will find your footing too.",
                    }),
                  ],
                }),
              }),
              a.jsx(d.b, {
                children: (0, a.jsxs)("section", {
                  className: "mb-10",
                  "aria-labelledby": "islamic-framing",
                  children: [
                    a.jsx("h2", {
                      id: "islamic-framing",
                      className:
                        "mb-3 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                      children: "Faith and Professional Help",
                    }),
                    a.jsx("p", {
                      className:
                        "mb-3 text-base leading-relaxed text-textSecondary",
                      children:
                        "Islam teaches compassion, mercy, and that taking care of your mind is important. Trust in Allah can bring great comfort, but our faith also teaches us to seek practical means of help. Just as we see a doctor for physical illness while praying for healing, it is completely acceptable to see a counsellor for emotional distress while praying for ease.",
                    }),
                    a.jsx("p", {
                      className:
                        "mb-3 text-base leading-relaxed text-textSecondary",
                      children:
                        "The Prophet Muhammad (peace be upon him) and his companions experienced sadness, grief, and stress. Being Muslim does not mean being happy every moment — it means having hope and perseverance even in difficulty.",
                    }),
                    a.jsx(i.U, {
                      variant: "tip",
                      title: "Tie your camel",
                      children: a.jsx("p", {
                        children:
                          'There is a well-known concept in Islam: "Tie your camel, then trust in Allah." This means taking practical steps to address your challenges while also placing your trust in God. Seeking therapy or counselling is one such practical step.',
                      }),
                    }),
                  ],
                }),
              }),
              a.jsx(d.b, {
                children: (0, a.jsxs)("section", {
                  className: "mb-10",
                  "aria-labelledby": "common-experiences",
                  children: [
                    a.jsx("h2", {
                      id: "common-experiences",
                      className:
                        "mb-5 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                      children: "Common Experiences",
                    }),
                    a.jsx("div", {
                      className: "flex flex-col gap-5",
                      children: [
                        {
                          title: "Loneliness",
                          body: "You might feel isolated if you do not have Muslim friends yet, or if your family has distanced themselves. This feeling is temporary, even though it may not seem that way right now.",
                          help: "Join new Muslim classes or community events at your local mosque. Online communities can provide support when in-person connections are not available. Check if your mosque has a convert support group — many do.",
                        },
                        {
                          title: "Family Conflict",
                          body: "Your family may not understand your conversion, and some may react with confusion, concern, or even hostility. This is one of the hardest parts of the journey for many converts.",
                          help: "Maintain loving communication if possible. Give your family time to adjust — you do not have to debate every detail of your faith. Set gentle boundaries to protect your peace. Many converts have navigated this before you, and their experiences can offer guidance and hope.",
                        },
                        {
                          title: "Identity Questions",
                          body: 'You may feel torn between your previous identity and your new life as a Muslim. You might wonder if you are "Muslim enough" or feel like an imposter in religious settings.',
                          help: 'You do not have to abandon your culture or personality to be Muslim. Islam adds to who you are — it does not erase who you were. Embrace the good from your upbringing and blend it with Islamic values. Everyone grows at their own pace, and there is no single "right way" to be Muslim.',
                        },
                        {
                          title: "Doubts in Faith",
                          body: "You might experience doubts about Islam or second-guess your decision. Faith can fluctuate, and questions are a natural part of any spiritual journey.",
                          help: "Islam encourages seeking knowledge. Talk to a knowledgeable mentor, read reliable books, or attend a study circle. Do not bottle up your questions — exploring them with sincerity often strengthens faith over time. Make dua (supplication) for guidance, and be patient with yourself.",
                        },
                      ].map((e, t) =>
                        (0, a.jsxs)(
                          "div",
                          {
                            className:
                              "rounded-2xl border border-border/60 bg-white p-5 shadow-card",
                            children: [
                              a.jsx("h3", {
                                className:
                                  "mb-2 mt-0 font-display text-lg font-semibold text-textPrimary",
                                children: e.title,
                              }),
                              a.jsx("p", {
                                className:
                                  "mb-3 text-base leading-relaxed text-textSecondary",
                                children: e.body,
                              }),
                              (0, a.jsxs)("p", {
                                className:
                                  "mb-0 text-base leading-relaxed text-textSecondary",
                                children: [
                                  a.jsx("strong", {
                                    className: "text-textPrimary",
                                    children: "What can help:",
                                  }),
                                  " ",
                                  e.help,
                                ],
                              }),
                            ],
                          },
                          t,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
              a.jsx(d.b, {
                children: (0, a.jsxs)("section", {
                  className: "mb-10",
                  "aria-labelledby": "self-care",
                  children: [
                    a.jsx("h2", {
                      id: "self-care",
                      className:
                        "mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                      children: "Practical Self-Care Strategies",
                    }),
                    a.jsx("ul", {
                      className:
                        "flex flex-col gap-2.5 pl-0 text-base text-textSecondary",
                      children: [
                        "Maintain basic self-care: adequate sleep, nutritious food, and regular exercise. Physical well-being strongly affects emotional well-being.",
                        "Stay connected — reach out to a friend or mentor regularly. Even a weekly phone call can make a big difference.",
                        "Engage in activities that bring you peace and joy: nature walks, reading, creative hobbies. Healthy recreation is not un-Islamic.",
                        'Use remembrance of Allah (dhikr) and prayer to ease anxiety. Simple phrases like "SubhanAllah" or reciting Al-Fatiha can bring calm in difficult moments.',
                        "Journal your feelings or express them in dua — writing things down or talking to Allah from your heart can relieve emotional pressure.",
                        "Set healthy boundaries with people or situations that drain you emotionally. Protecting your peace is a form of self-care.",
                        'Practice breathing exercises. Dhikr (remembrance) can be meditative — repeating "SubhanAllah" with slow, deep breaths combines spiritual and physical calm.',
                        "Find a supportive community or mentor who understands the conversion journey. You do not have to do this alone.",
                      ].map((e, t) =>
                        (0, a.jsxs)(
                          "li",
                          {
                            className:
                              "flex items-start gap-3 rounded-xl bg-surfaceElevated/50 p-3.5",
                            children: [
                              a.jsx("span", {
                                className:
                                  "mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-primary",
                                "aria-hidden": "true",
                              }),
                              a.jsx("span", {
                                className: "leading-relaxed",
                                children: e,
                              }),
                            ],
                          },
                          t,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
              a.jsx(d.b, {
                children: (0, a.jsxs)("section", {
                  className: "mb-10",
                  "aria-labelledby": "seek-help",
                  children: [
                    a.jsx("h2", {
                      id: "seek-help",
                      className:
                        "mb-3 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                      children: "When to Seek Professional Help",
                    }),
                    a.jsx("p", {
                      className:
                        "mb-4 text-base leading-relaxed text-textSecondary",
                      children:
                        "If you experience any of the following, please reach out to a mental health professional or crisis helpline. This is not a sign of weak faith — getting help is a courageous step toward healing that Islam fully supports.",
                    }),
                    a.jsx("ul", {
                      className:
                        "mb-4 flex flex-col gap-2.5 pl-0 text-base text-textSecondary",
                      children: [
                        "Persistent sadness, hopelessness, or emptiness that does not improve",
                        "Inability to perform daily functions — eating, working, or self-care — due to your emotional state",
                        "Frequent panic attacks or intense anxiety that interferes with daily life",
                        "Thoughts of self-harm or wishing you were not alive",
                        "Feeling completely overwhelmed or unable to cope with daily life",
                        "Using substances to cope with your emotions",
                      ].map((e, t) =>
                        (0, a.jsxs)(
                          "li",
                          {
                            className:
                              "flex items-start gap-3 rounded-xl border border-error/20 bg-error/5 p-3.5",
                            children: [
                              a.jsx(l.J, {
                                name: "alert-circle",
                                size: "sm",
                                className: "mt-0.5 shrink-0 text-error",
                              }),
                              a.jsx("span", { children: e }),
                            ],
                          },
                          t,
                        ),
                      ),
                    }),
                    a.jsx(i.U, {
                      variant: "important",
                      title: "If you are in immediate danger",
                      children: a.jsx("p", {
                        children:
                          "If you are having thoughts of harming yourself, please call 911 or go to your nearest emergency room immediately. Your life is precious and valued.",
                      }),
                    }),
                  ],
                }),
              }),
              a.jsx(d.b, {
                children: a.jsx("section", {
                  className: "mb-10",
                  "aria-labelledby": "disclaimer",
                  children: (0, a.jsxs)("p", {
                    className:
                      "rounded-xl bg-surfaceElevated/50 p-4 text-sm italic leading-relaxed text-textMuted",
                    children: [
                      a.jsx("strong", { children: "Note:" }),
                      " This guide is for general emotional support and education. It is not a substitute for professional therapy or medical advice. If you are experiencing a mental health crisis, please contact a licensed professional or one of the crisis resources listed below.",
                    ],
                  }),
                }),
              }),
              a.jsx(d.b, {
                children: (0, a.jsxs)("section", {
                  className: "mb-10",
                  "aria-labelledby": "resources",
                  children: [
                    a.jsx("h2", {
                      id: "resources",
                      className:
                        "mb-5 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                      children: "Support Resources",
                    }),
                    a.jsx("h3", {
                      className:
                        "mb-3 font-display text-lg font-semibold text-textPrimary",
                      children: "Crisis Helplines",
                    }),
                    a.jsx("div", {
                      className: "mb-8 flex flex-col gap-3",
                      children: [
                        {
                          name: "988 Suicide & Crisis Lifeline",
                          desc: "24/7 support for anyone in distress or crisis.",
                          label: "Call or text:",
                          contact: "988",
                          href: "tel:988",
                        },
                        {
                          name: "Crisis Text Line",
                          desc: "Free, 24/7 text-based crisis support.",
                          label: "Text HOME to",
                          contact: "741741",
                          href: "sms:741741",
                        },
                        {
                          name: "Naseeha Mental Health Helpline",
                          desc: "Confidential support for Muslims, available 24/7.",
                          label: "Call:",
                          contact: "1-866-627-3342",
                          href: "tel:1-866-627-3342",
                        },
                      ].map((e, t) =>
                        (0, a.jsxs)(
                          "div",
                          {
                            className:
                              "rounded-2xl border border-border/60 bg-white p-5 shadow-card transition-shadow duration-300 hover:shadow-soft",
                            children: [
                              a.jsx("p", {
                                className:
                                  "mb-1 text-base font-bold text-textPrimary",
                                children: e.name,
                              }),
                              a.jsx("p", {
                                className:
                                  "mb-2 text-sm leading-relaxed text-textSecondary",
                                children: e.desc,
                              }),
                              (0, a.jsxs)("p", {
                                className:
                                  "mb-0 flex items-center gap-2 text-sm",
                                children: [
                                  a.jsx("span", {
                                    className: "font-medium text-textPrimary",
                                    children: e.label,
                                  }),
                                  a.jsx("a", {
                                    href: e.href,
                                    className:
                                      "font-bold text-primary no-underline transition-colors duration-200 hover:text-primaryHover hover:underline",
                                    children: e.contact,
                                  }),
                                ],
                              }),
                            ],
                          },
                          t,
                        ),
                      ),
                    }),
                    a.jsx("h3", {
                      className:
                        "mb-3 font-display text-lg font-semibold text-textPrimary",
                      children: "Directories & Support",
                    }),
                    (0, a.jsxs)("div", {
                      className: "mb-8 flex flex-col gap-3",
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "rounded-2xl border border-border/60 bg-white p-5 shadow-card transition-shadow duration-300 hover:shadow-soft",
                          children: [
                            a.jsx("p", {
                              className:
                                "mb-1 text-base font-bold text-textPrimary",
                              children: "Khalil Center",
                            }),
                            a.jsx("p", {
                              className:
                                "mb-2 text-sm leading-relaxed text-textSecondary",
                              children:
                                "Faith-sensitive therapy and support groups for Muslims.",
                            }),
                            (0, a.jsxs)("a", {
                              href: "https://khalilcenter.com/",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "inline-flex items-center gap-1 text-sm font-medium text-primary no-underline transition-colors duration-200 hover:text-primaryHover hover:underline",
                              children: [
                                "Visit website",
                                a.jsx(l.J, {
                                  name: "external-link",
                                  size: "sm",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "rounded-2xl border border-border/60 bg-white p-5 shadow-card transition-shadow duration-300 hover:shadow-soft",
                          children: [
                            a.jsx("p", {
                              className:
                                "mb-1 text-base font-bold text-textPrimary",
                              children: "Your Local Imam or Muslim Chaplain",
                            }),
                            a.jsx("p", {
                              className:
                                "mb-0 text-sm leading-relaxed text-textSecondary",
                              children:
                                "Many imams and chaplains are trained to provide spiritual and emotional guidance. Do not hesitate to reach out to one at your local mosque.",
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "rounded-2xl border border-border/60 bg-white p-5 shadow-card transition-shadow duration-300 hover:shadow-soft",
                          children: [
                            a.jsx("p", {
                              className:
                                "mb-1 text-base font-bold text-textPrimary",
                              children: "Local Convert Support Groups",
                            }),
                            a.jsx("p", {
                              className:
                                "mb-0 text-sm leading-relaxed text-textSecondary",
                              children:
                                "Check with your mosque for convert support groups in your area. Many communities have regular gatherings where new Muslims share experiences and support each other.",
                            }),
                          ],
                        }),
                      ],
                    }),
                    a.jsx("h3", {
                      className:
                        "mb-3 font-display text-lg font-semibold text-textPrimary",
                      children: "Further Reading",
                    }),
                    a.jsx("div", {
                      className: "flex flex-col gap-3",
                      children: (0, a.jsxs)("div", {
                        className:
                          "rounded-2xl border border-border/60 bg-white p-5 shadow-card transition-shadow duration-300 hover:shadow-soft",
                        children: [
                          a.jsx("p", {
                            className:
                              "mb-1 text-base font-bold text-textPrimary",
                            children:
                              "Mental Health and the Muslim Convert Experience",
                          }),
                          a.jsx("p", {
                            className:
                              "mb-2 text-sm leading-relaxed text-textSecondary",
                            children:
                              "An in-depth exploration of the unique emotional challenges converts face, with practical coping strategies.",
                          }),
                          (0, a.jsxs)("a", {
                            href: "https://yaqeeninstitute.org/read/paper/new-muslims-and-mental-health",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "inline-flex items-center gap-1 text-sm font-medium text-primary no-underline transition-colors duration-200 hover:text-primaryHover hover:underline",
                            children: [
                              "Read article",
                              a.jsx(l.J, { name: "external-link", size: "sm" }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              a.jsx(d.b, {
                children: (0, a.jsxs)("div", {
                  className:
                    "rounded-2xl border border-primaryGreen/30 bg-surfaceElevated/50 p-6 text-center shadow-card",
                  children: [
                    a.jsx("p", {
                      className: "mb-3 text-sm text-textSecondary",
                      children: "Looking for community support?",
                    }),
                    (0, a.jsxs)(n.default, {
                      href: (0, c.FT)(t, "/topics/community"),
                      className:
                        "inline-flex items-center gap-1.5 rounded-xl bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary no-underline transition-all duration-300 ease-out-expo hover:bg-primary/20 hover:text-primaryHover",
                      children: [
                        "Read: Building Your Muslim Community",
                        a.jsx(l.J, { name: "chevron-right", size: "sm" }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        }
      },
      6258: (e, t, r) => {
        "use strict";
        r.d(t, { b: () => a });
        let a = (0, r(8570).createProxy)(
          String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\components\AnimateIn.tsx#AnimateIn`,
        );
      },
      4557: (e, t, r) => {
        "use strict";
        r.d(t, { a: () => a });
        let a = (0, r(8570).createProxy)(
          String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\components\Breadcrumb.tsx#Breadcrumb`,
        );
      },
      4627: (e, t, r) => {
        "use strict";
        r.d(t, { U: () => s });
        var a = r(9510);
        let n = {
          info: {
            bg: "bg-surfaceElevated/70",
            borderColor: "border-primary/30",
            iconBg: "bg-primary/10",
            iconColor: "text-primary",
            icon: a.jsx("svg", {
              className: "h-5 w-5",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "currentColor",
              "aria-hidden": "true",
              children: a.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z",
              }),
            }),
          },
          tip: {
            bg: "bg-accentYellow/20",
            borderColor: "border-oliveAccent/40",
            iconBg: "bg-accentYellow/40",
            iconColor: "text-accent",
            icon: a.jsx("svg", {
              className: "h-5 w-5",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "currentColor",
              "aria-hidden": "true",
              children: a.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
              }),
            }),
          },
          warning: {
            bg: "bg-accentYellow/15",
            borderColor: "border-warning/30",
            iconBg: "bg-warning/10",
            iconColor: "text-warning",
            role: "alert",
            icon: a.jsx("svg", {
              className: "h-5 w-5",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "currentColor",
              "aria-hidden": "true",
              children: a.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z",
              }),
            }),
          },
          important: {
            bg: "bg-surfaceElevated/60",
            borderColor: "border-error/30",
            iconBg: "bg-error/10",
            iconColor: "text-error",
            role: "alert",
            icon: a.jsx("svg", {
              className: "h-5 w-5",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "currentColor",
              "aria-hidden": "true",
              children: a.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z",
              }),
            }),
          },
        };
        function s({ variant: e = "info", title: t, children: r }) {
          let s = n[e];
          return a.jsx("div", {
            className: `my-6 rounded-2xl border ${s.borderColor} ${s.bg} p-5 backdrop-blur-sm`,
            role: s.role ?? "note",
            children: (0, a.jsxs)("div", {
              className: "flex gap-3",
              children: [
                a.jsx("span", {
                  className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${s.iconBg} ${s.iconColor}`,
                  children: s.icon,
                }),
                (0, a.jsxs)("div", {
                  className: "min-w-0 flex-1",
                  children: [
                    t &&
                      a.jsx("p", {
                        className:
                          "mb-2 text-sm font-semibold text-textPrimary",
                        children: t,
                      }),
                    a.jsx("div", {
                      className:
                        "text-sm leading-relaxed text-textSecondary [&>p:last-child]:mb-0",
                      children: r,
                    }),
                  ],
                }),
              ],
            }),
          });
        }
      },
      2095: (e, t, r) => {
        "use strict";
        r.d(t, { J: () => o });
        var a = r(9510);
        let n = { sm: "h-4 w-4", md: "h-5 w-5", lg: "h-6 w-6" },
          s = {
            home: a.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
            }),
            book: a.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25",
            }),
            search: a.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
            }),
            "map-pin": (0, a.jsxs)(a.Fragment, {
              children: [
                a.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
                }),
                a.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z",
                }),
              ],
            }),
            menu: a.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",
            }),
            x: a.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M6 18 18 6M6 6l12 12",
            }),
            "external-link": a.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25",
            }),
            "chevron-right": a.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "m8.25 4.5 7.5 7.5-7.5 7.5",
            }),
            "chevron-down": a.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "m19.5 8.25-7.5 7.5-7.5-7.5",
            }),
            clock: a.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
            }),
            check: a.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "m4.5 12.75 6 6 9-13.5",
            }),
            info: a.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z",
            }),
            "alert-triangle": a.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z",
            }),
            "alert-circle": a.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z",
            }),
            lightbulb: a.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
            }),
            globe: a.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418",
            }),
            play: a.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z",
            }),
            "file-text": a.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z",
            }),
            users: a.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z",
            }),
            download: a.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3",
            }),
            star: a.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z",
            }),
          };
        function o({ name: e, size: t = "md", className: r = "", label: o }) {
          let i = !o;
          return a.jsx("svg", {
            className: `${n[t]} ${r}`,
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            "aria-hidden": i ? "true" : void 0,
            "aria-label": o,
            role: o ? "img" : void 0,
            focusable: "false",
            children: s[e],
          });
        }
      },
      3219: (e, t, r) => {
        "use strict";
        r.d(t, { r: () => n });
        var a = r(9306);
        function n(e, t) {
          let r = (0, a.Ty)(e);
          return {
            title: r(`metadata.${t}.title`),
            description: r(`metadata.${t}.description`),
          };
        }
      },
      7371: (e, t, r) => {
        "use strict";
        r.d(t, { default: () => n.a });
        var a = r(1812),
          n = r.n(a);
      },
      1812: (e, t, r) => {
        "use strict";
        let { createProxy: a } = r(8570);
        e.exports = a(
          "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\node_modules\\next\\dist\\client\\link.js",
        );
      },
    }));
  var t = require("../../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    a = t.X(0, [963, 496, 990, 710, 901], () => r(575));
  module.exports = a;
})();
