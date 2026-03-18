(() => {
  var e = {};
  ((e.id = 790),
    (e.ids = [790]),
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
      2048: (e) => {
        "use strict";
        e.exports = require("fs");
      },
      5315: (e) => {
        "use strict";
        e.exports = require("path");
      },
      8035: (e, t, r) => {
        "use strict";
        (r.r(t),
          r.d(t, {
            GlobalError: () => i.a,
            __next_app__: () => h,
            originalPathname: () => m,
            pages: () => c,
            routeModule: () => u,
            tree: () => d,
          }),
          r(9502),
          r(9475),
          r(6982),
          r(1506),
          r(5866));
        var a = r(3191),
          s = r(8716),
          n = r(7922),
          i = r.n(n),
          o = r(5231),
          l = {};
        for (let e in o)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "originalPathname",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (l[e] = () => o[e]);
        r.d(t, l);
        let d = [
            "",
            {
              children: [
                "[locale]",
                {
                  children: [
                    "ramadan",
                    {
                      children: [
                        "__PAGE__",
                        {},
                        {
                          page: [
                            () => Promise.resolve().then(r.bind(r, 9502)),
                            "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\ramadan\\page.tsx",
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
            "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\ramadan\\page.tsx",
          ],
          m = "/[locale]/ramadan/page",
          h = { require: r, loadChunk: () => Promise.resolve() },
          u = new a.AppPageRouteModule({
            definition: {
              kind: s.x.APP_PAGE,
              page: "/[locale]/ramadan/page",
              pathname: "/[locale]/ramadan",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      6296: (e, t, r) => {
        (Promise.resolve().then(r.bind(r, 5829)),
          Promise.resolve().then(r.bind(r, 3630)),
          Promise.resolve().then(r.bind(r, 2262)),
          Promise.resolve().then(r.t.bind(r, 2481, 23)),
          Promise.resolve().then(r.t.bind(r, 9404, 23)));
      },
      5829: (e, t, r) => {
        "use strict";
        r.d(t, { AnimateIn: () => n });
        var a = r(326),
          s = r(7577);
        function n({
          children: e,
          className: t = "",
          delay: r = 0,
          animation: n = "fade-up",
          threshold: i = 0.1,
        }) {
          let o = (0, s.useRef)(null),
            [l, d] = (0, s.useState)(!1);
          return a.jsx("div", {
            ref: o,
            className: `${t} ${l ? { "fade-up": "animate-fade-up", "fade-in": "animate-fade-in", "scale-in": "animate-scale-in", "slide-in-right": "animate-slide-in-right" }[n] : "opacity-0"}`,
            style: l && r > 0 ? { animationDelay: `${r}s` } : void 0,
            children: e,
          });
        }
      },
      3630: (e, t, r) => {
        "use strict";
        r.d(t, { Breadcrumb: () => i });
        var a = r(326),
          s = r(434),
          n = r(3082);
        function i({ items: e }) {
          let t = (0, n.T)();
          return 0 === e.length
            ? null
            : a.jsx("nav", {
                "aria-label": t("common.breadcrumb"),
                className: "mb-8",
                children: a.jsx("ol", {
                  className:
                    "mb-0 flex flex-wrap items-center gap-1.5 pl-0 text-sm",
                  children: e.map((t, r) => {
                    let n = r === e.length - 1;
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
                          n || !t.href
                            ? a.jsx("span", {
                                className: "font-medium text-textMuted",
                                "aria-current": n ? "page" : void 0,
                                children: t.label,
                              })
                            : a.jsx(s.default, {
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
      2262: (e, t, r) => {
        "use strict";
        r.d(t, {
          ResourceCard: () => c,
          StepCard: () => o,
          TopicCard: () => l,
        });
        var a = r(326),
          s = r(434),
          n = r(8487);
        function i({ children: e, className: t = "", href: r }) {
          let n = `block rounded-2xl border border-border/60 bg-white p-6 shadow-card transition-all duration-300 ease-out-expo page-break-avoid ${t}`;
          return r
            ? a.jsx(s.default, {
                href: r,
                className: `${n} no-underline hover:border-primaryGreen/60 hover:shadow-card-hover hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong`,
                children: e,
              })
            : a.jsx("div", { className: n, children: e });
        }
        function o({ title: e, stepNumber: t, timeEstimate: r, href: s }) {
          return a.jsx(i, {
            href: s,
            className: "group",
            children: (0, a.jsxs)("div", {
              className: "flex items-center gap-4",
              children: [
                a.jsx("span", {
                  className:
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primaryHover text-sm font-bold text-white shadow-soft transition-transform duration-300 group-hover:scale-110",
                  "aria-hidden": "true",
                  children: t,
                }),
                (0, a.jsxs)("div", {
                  className: "min-w-0 flex-1",
                  children: [
                    a.jsx("h4", {
                      className:
                        "mb-0 mt-0 text-base font-semibold text-textPrimary",
                      children: e,
                    }),
                    r &&
                      a.jsx("span", {
                        className: "mt-0.5 block text-xs text-textMuted",
                        children: r,
                      }),
                  ],
                }),
                a.jsx("svg", {
                  className:
                    "h-5 w-5 shrink-0 text-border transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  strokeWidth: 1.5,
                  stroke: "currentColor",
                  "aria-hidden": "true",
                  children: a.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "m8.25 4.5 7.5 7.5-7.5 7.5",
                  }),
                }),
              ],
            }),
          });
        }
        function l({ title: e, description: t, href: r, icon: s }) {
          return (0, a.jsxs)(i, {
            href: r,
            className: "group relative overflow-hidden",
            children: [
              a.jsx("div", {
                className:
                  "pointer-events-none absolute inset-0 bg-gradient-to-br from-primaryGreen/0 to-primaryGreen/0 transition-all duration-500 group-hover:from-primaryGreen/5 group-hover:to-transparent",
                "aria-hidden": "true",
              }),
              (0, a.jsxs)("div", {
                className: "relative flex items-start gap-4",
                children: [
                  s &&
                    a.jsx("span", {
                      className:
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surfaceElevated text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white",
                      "aria-hidden": "true",
                      children: s,
                    }),
                  (0, a.jsxs)("div", {
                    className: "min-w-0 flex-1",
                    children: [
                      a.jsx("h3", {
                        className:
                          "mb-1 mt-0 text-lg font-semibold text-textPrimary",
                        children: e,
                      }),
                      a.jsx("p", {
                        className:
                          "mb-0 text-sm leading-relaxed text-textSecondary",
                        children: t,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        let d = {
          article: "bg-primary/10 text-primary",
          video: "bg-accent/10 text-accent",
          book: "bg-primaryGreen/30 text-primaryHover",
          app: "bg-secondaryGreen/30 text-accent",
          community: "bg-surfaceElevated text-primary",
          pdf: "bg-oliveAccent/20 text-accent",
        };
        function c({
          title: e,
          description: t,
          type: r,
          url: s,
          locale: o = "en",
        }) {
          let l = (0, n.Ty)(o),
            c = s.startsWith("http");
          return a.jsx(i, {
            className: "group",
            children: a.jsx("div", {
              className: "flex items-start justify-between gap-3",
              children: (0, a.jsxs)("div", {
                className: "min-w-0 flex-1",
                children: [
                  (0, a.jsxs)("div", {
                    className: "mb-2.5 flex flex-wrap items-center gap-2",
                    children: [
                      a.jsx("h3", {
                        className:
                          "mb-0 mt-0 text-base font-semibold text-textPrimary",
                        children: e,
                      }),
                      a.jsx("span", {
                        className: `inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${d[r]}`,
                        children: l(`resources.types.${r}`),
                      }),
                    ],
                  }),
                  a.jsx("p", {
                    className:
                      "mb-3 text-sm leading-relaxed text-textSecondary",
                    children: t,
                  }),
                  (0, a.jsxs)("a", {
                    href: s,
                    className:
                      "inline-flex items-center gap-1.5 rounded-lg bg-surfaceElevated px-3 py-1.5 text-sm font-medium text-primary no-underline transition-all duration-200 hover:bg-primary/15 hover:text-primaryHover",
                    ...(c
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {}),
                    children: [
                      l(
                        c
                          ? "resources.visitResource"
                          : "resources.viewResource",
                      ),
                      c &&
                        a.jsx("svg", {
                          className: "h-3.5 w-3.5",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: 2,
                          stroke: "currentColor",
                          "aria-hidden": "true",
                          children: a.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25",
                          }),
                        }),
                    ],
                  }),
                ],
              }),
            }),
          });
        }
      },
      9502: (e, t, r) => {
        "use strict";
        (r.r(t), r.d(t, { default: () => x, generateMetadata: () => u }));
        var a = r(9510),
          s = r(7371),
          n = r(7710),
          i = r(4557),
          o = r(4627),
          l = r(5899),
          d = r(6258),
          c = r(4745),
          m = r(9306),
          h = r(3219);
        function u({ params: e }) {
          return (0, h.r)(e.locale, "ramadan");
        }
        function x({ params: e }) {
          let t = e.locale,
            r = (0, c.tw)(t).filter(
              (e) =>
                e.relatedStepIds.includes("fasting") ||
                e.relatedTopicIds.includes("fasting"),
            );
          return (0, a.jsxs)("div", {
            className: "mx-auto max-w-4xl px-5 py-10",
            children: [
              a.jsx(i.a, {
                items: [
                  { label: "Home", href: (0, m.FT)(t, "/") },
                  { label: "Ramadan Guide" },
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
                        children: "Ramadan Guide",
                      }),
                      a.jsx("p", {
                        className:
                          "max-w-2xl text-xl leading-relaxed text-textSecondary",
                        children: "Your first Ramadan as a Muslim.",
                      }),
                    ],
                  }),
                  a.jsx("div", {
                    className:
                      "pointer-events-none absolute -right-4 top-0 hidden h-[160px] w-[100px] opacity-[0.12] lg:block",
                    "aria-hidden": "true",
                    children: a.jsx(n.default, {
                      src: "/Grandmother female Character Standing.png",
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
                  "aria-labelledby": "what-is-ramadan",
                  children: [
                    a.jsx("h2", {
                      id: "what-is-ramadan",
                      className:
                        "mb-3 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                      children: "What Is Ramadan?",
                    }),
                    a.jsx("p", {
                      className: "text-base leading-relaxed text-textSecondary",
                      children:
                        "Ramadan is the ninth month of the Islamic calendar and the holiest month for Muslims worldwide. During Ramadan, Muslims fast from dawn to sunset each day — abstaining from food, drink, and other physical needs. But Ramadan is far more than not eating; it is a time of spiritual reflection, self-improvement, increased prayer, and deepened community bonds. The Quran was first revealed during Ramadan, making it a month of special spiritual significance.",
                    }),
                  ],
                }),
              }),
              a.jsx(d.b, {
                children: (0, a.jsxs)("section", {
                  className: "mb-10",
                  "aria-labelledby": "for-new-muslims",
                  children: [
                    a.jsx("h2", {
                      id: "for-new-muslims",
                      className:
                        "mb-3 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                      children: "For New Muslims",
                    }),
                    a.jsx(o.U, {
                      variant: "tip",
                      title: "You are not alone",
                      children: a.jsx("p", {
                        children:
                          "If this is your first Ramadan, it is completely normal to feel anxious or unsure. Remember that any fasting you can do is valuable, and you can build up gradually. Do not be hard on yourself — even lifelong Muslims find Ramadan challenging at times.",
                      }),
                    }),
                    a.jsx("p", {
                      className: "text-base leading-relaxed text-textSecondary",
                      children:
                        "Seek out a fasting buddy, mentor, or community group to share the experience with. Many mosques have special programs for new Muslims during Ramadan. You are taking on something beautiful, and the Muslim community is here to support you.",
                    }),
                  ],
                }),
              }),
              a.jsx(d.b, {
                children: (0, a.jsxs)("section", {
                  className: "mb-10",
                  "aria-labelledby": "fasting-basics",
                  children: [
                    a.jsx("h2", {
                      id: "fasting-basics",
                      className:
                        "mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                      children: "Fasting Basics",
                    }),
                    a.jsx("div", {
                      className: "flex flex-col gap-3",
                      children: [
                        {
                          term: "Suhoor",
                          desc: "(pre-dawn meal) — Eat a sustaining meal before the Fajr prayer. This is important for energy throughout the day. Foods high in fibre and protein help you stay full longer.",
                        },
                        {
                          term: "Iftar",
                          desc: "(breaking the fast) — Break your fast at sunset, traditionally with dates and water. This is a Sunnah of the Prophet Muhammad (peace be upon him) and a quick way to replenish energy.",
                        },
                        {
                          term: "What to avoid",
                          desc: "— No food, drink, or intimate relations from dawn to sunset. If you accidentally eat or drink, your fast is still valid — simply stop and continue fasting.",
                        },
                        {
                          term: "Who is exempt",
                          desc: "— Those who are sick, travelling, elderly, pregnant, nursing, or menstruating are exempt. Missed days can be made up later.",
                        },
                        {
                          term: "Intention (Niyyah)",
                          desc: "— Make an intention in your heart each night or before dawn that you are fasting for the sake of Allah.",
                        },
                      ].map((e, t) =>
                        (0, a.jsxs)(
                          "div",
                          {
                            className:
                              "flex items-start gap-3 rounded-xl bg-surfaceElevated/50 p-4",
                            children: [
                              a.jsx("span", {
                                className:
                                  "mt-1.5 block h-2 w-2 shrink-0 rounded-full bg-primary",
                                "aria-hidden": "true",
                              }),
                              (0, a.jsxs)("span", {
                                className:
                                  "text-base leading-relaxed text-textSecondary",
                                children: [
                                  a.jsx("strong", {
                                    className: "text-textPrimary",
                                    children: e.term,
                                  }),
                                  " ",
                                  e.desc,
                                ],
                              }),
                            ],
                          },
                          t,
                        ),
                      ),
                    }),
                    (0, a.jsxs)("p", {
                      className: "mt-4 text-sm text-textMuted",
                      children: [
                        "For detailed fasting rules, see",
                        " ",
                        a.jsx(s.default, {
                          href: (0, m.FT)(t, "/topics/fasting"),
                          className:
                            "font-medium text-primary no-underline transition-colors duration-200 hover:text-primaryHover",
                          children: "Fasting and Ramadan",
                        }),
                        " ",
                        "in the Topics section.",
                      ],
                    }),
                  ],
                }),
              }),
              a.jsx(d.b, {
                children: (0, a.jsxs)("section", {
                  className: "mb-10",
                  "aria-labelledby": "preparing",
                  children: [
                    a.jsx("h2", {
                      id: "preparing",
                      className:
                        "mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                      children: "Preparing for Ramadan",
                    }),
                    a.jsx("ul", {
                      className:
                        "flex flex-col gap-2.5 pl-0 text-base text-textSecondary",
                      children: [
                        "Gradually adjust your sleep schedule — you will be waking up before dawn for suhoor.",
                        "Reduce caffeine intake beforehand to avoid withdrawal headaches during fasting hours.",
                        "Plan simple, nutritious suhoor and iftar meals ahead of time.",
                        "If possible, let your employer or school know — many people are understanding about religious observances.",
                        "Learn the key supplications: the intention for fasting and the dua for breaking the fast.",
                        "Set personal goals for the month — read more Quran, give charity, improve a habit, or strengthen a relationship.",
                      ].map((e, t) =>
                        (0, a.jsxs)(
                          "li",
                          {
                            className: "flex items-start gap-3",
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
                  "aria-labelledby": "during-ramadan",
                  children: [
                    a.jsx("h2", {
                      id: "during-ramadan",
                      className:
                        "mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                      children: "During Ramadan",
                    }),
                    a.jsx("h3", {
                      className:
                        "mb-3 mt-4 font-display text-lg font-semibold text-textPrimary",
                      children: "Spiritual Practices",
                    }),
                    a.jsx("ul", {
                      className:
                        "mb-6 flex flex-col gap-2.5 pl-0 text-base text-textSecondary",
                      children: [
                        "Read Quran every day — Ramadan is the month of the Quran, and even a few verses daily makes a difference.",
                        "Increase your prayers, especially Tarawih (night prayers) at the mosque.",
                        "Make dua (supplication) frequently — the prayers of a fasting person hold special significance.",
                        "Give charity (sadaqah) if you are able — generosity is greatly encouraged during this month.",
                      ].map((e, t) =>
                        (0, a.jsxs)(
                          "li",
                          {
                            className: "flex items-start gap-3",
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
                    a.jsx("h3", {
                      className:
                        "mb-3 mt-4 font-display text-lg font-semibold text-textPrimary",
                      children: "Practical Survival Tips",
                    }),
                    a.jsx(o.U, {
                      variant: "tip",
                      title: "Stay hydrated!",
                      children: a.jsx("p", {
                        children:
                          "Drink plenty of water between iftar and suhoor. Dehydration is the most common challenge, especially during long summer fasts.",
                      }),
                    }),
                    a.jsx("ul", {
                      className:
                        "flex flex-col gap-2.5 pl-0 text-base text-textSecondary",
                      children: [
                        "Do not skip suhoor — it gives you energy to get through the day.",
                        "Take a short nap if possible, especially if your nights are shorter due to Tarawih and suhoor.",
                        "Expect an energy dip in the afternoon — schedule demanding tasks for the morning when possible.",
                        "Break your fast with dates and water — this provides quick energy and follows the Sunnah.",
                      ].map((e, t) =>
                        (0, a.jsxs)(
                          "li",
                          {
                            className: "flex items-start gap-3",
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
                  "aria-labelledby": "tarawih",
                  children: [
                    a.jsx("h2", {
                      id: "tarawih",
                      className:
                        "mb-3 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                      children: "Tarawih and Community",
                    }),
                    (0, a.jsxs)("p", {
                      className:
                        "mb-3 text-base leading-relaxed text-textSecondary",
                      children: [
                        a.jsx("strong", {
                          className: "text-textPrimary",
                          children: "Tarawih",
                        }),
                        " are special evening prayers performed during Ramadan, held after",
                        " ",
                        a.jsx("span", {
                          lang: "ar",
                          dir: "rtl",
                          className: "font-arabic",
                          children: "العشاء",
                        }),
                        " ",
                        "(Isha) prayer at the mosque. They can be quite long, but do not worry if you cannot pray the entire session — even partial participation is rewarding. Try to attend at least once to experience the beautiful community atmosphere.",
                      ],
                    }),
                    (0, a.jsxs)("p", {
                      className:
                        "mb-3 text-base leading-relaxed text-textSecondary",
                      children: [
                        a.jsx("strong", {
                          className: "text-textPrimary",
                          children: "Iftar gatherings",
                        }),
                        " at mosques and community centres are a wonderful way to break your fast together with others. You will find generous meals and welcoming faces. These gatherings are one of the most cherished parts of Ramadan and a great way to make new friends.",
                      ],
                    }),
                    a.jsx(o.U, {
                      variant: "info",
                      title: "Community tip",
                      children: a.jsx("p", {
                        children:
                          "Consider finding a fasting buddy or mentor for accountability and support. Sharing the experience with someone else makes the journey much easier.",
                      }),
                    }),
                  ],
                }),
              }),
              a.jsx(d.b, {
                children: (0, a.jsxs)("section", {
                  className:
                    "mb-10 rounded-2xl border border-primaryGreen/30 bg-surfaceElevated/40 p-6",
                  "aria-labelledby": "laylat-al-qadr",
                  children: [
                    a.jsx("h2", {
                      id: "laylat-al-qadr",
                      className:
                        "mb-3 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                      children: "Laylat al-Qadr (Night of Power)",
                    }),
                    (0, a.jsxs)("p", {
                      className:
                        "mb-0 text-base leading-relaxed text-textSecondary",
                      children: [
                        "During the last ten nights of Ramadan, Muslims seek",
                        " ",
                        a.jsx("strong", {
                          className: "text-textPrimary",
                          children: "Laylat al-Qadr",
                        }),
                        ' — the Night of Power. The Quran describes this night as "better than a thousand months." While its exact date is unknown, it is traditionally sought on the odd-numbered nights of the last ten days (21st, 23rd, 25th, 27th, or 29th). Many Muslims increase their worship during these nights through extra prayers, Quran reading, and supplication.',
                      ],
                    }),
                  ],
                }),
              }),
              a.jsx(d.b, {
                children: (0, a.jsxs)("section", {
                  className: "mb-10",
                  "aria-labelledby": "eid",
                  children: [
                    a.jsx("h2", {
                      id: "eid",
                      className:
                        "mb-3 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                      children: "Eid al-Fitr",
                    }),
                    (0, a.jsxs)("p", {
                      className:
                        "mb-4 text-base leading-relaxed text-textSecondary",
                      children: [
                        "At the end of Ramadan, Muslims celebrate",
                        " ",
                        a.jsx("strong", {
                          className: "text-textPrimary",
                          children: "Eid al-Fitr",
                        }),
                        " — a joyful festival marking the completion of the month of fasting. It begins with a special Eid prayer in the morning, usually held in large gatherings at mosques or open spaces.",
                      ],
                    }),
                    a.jsx("ul", {
                      className:
                        "mb-4 flex flex-col gap-2.5 pl-0 text-base text-textSecondary",
                      children: [
                        'Wear your best clothes and greet others with "Eid Mubarak" (Blessed Eid).',
                        "Enjoy festive meals with your community — Eid is a day of celebration and gratitude.",
                        "If you are able, contribute Zakat al-Fitr (a small charitable donation) before the Eid prayer. Ask your mosque for details.",
                      ].map((e, t) =>
                        (0, a.jsxs)(
                          "li",
                          {
                            className: "flex items-start gap-3",
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
                    a.jsx(o.U, {
                      variant: "tip",
                      title: "You earned it!",
                      children: a.jsx("p", {
                        children:
                          "It is okay to feel emotional on Eid, especially if your family is far away or does not understand your journey. Remember — you have a new community to celebrate with. Go to the Eid prayer, enjoy the day, and be proud of what you accomplished.",
                      }),
                    }),
                  ],
                }),
              }),
              r.length > 0 &&
                a.jsx(d.b, {
                  children: (0, a.jsxs)("section", {
                    className: "mb-10",
                    "aria-labelledby": "ramadan-resources",
                    children: [
                      a.jsx("h2", {
                        id: "ramadan-resources",
                        className:
                          "mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                        children: "Resources",
                      }),
                      a.jsx("div", {
                        className: "grid gap-4 sm:grid-cols-2",
                        children: r.map((e) =>
                          a.jsx(
                            l.PI,
                            {
                              title: e.title,
                              description: e.description,
                              type: e.type,
                              url: e.url,
                              locale: t,
                            },
                            e.id,
                          ),
                        ),
                      }),
                      (0, a.jsxs)("p", {
                        className: "mt-4 text-sm text-textMuted",
                        children: [
                          "For more detail, explore the",
                          " ",
                          a.jsx(s.default, {
                            href: (0, m.FT)(t, "/topics/fasting"),
                            className:
                              "font-medium text-primary no-underline transition-colors duration-200 hover:text-primaryHover",
                            children: "Fasting and Ramadan",
                          }),
                          " ",
                          "topic page.",
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
        r.d(t, { U: () => n });
        var a = r(9510);
        let s = {
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
        function n({ variant: e = "info", title: t, children: r }) {
          let n = s[e];
          return a.jsx("div", {
            className: `my-6 rounded-2xl border ${n.borderColor} ${n.bg} p-5 backdrop-blur-sm`,
            role: n.role ?? "note",
            children: (0, a.jsxs)("div", {
              className: "flex gap-3",
              children: [
                a.jsx("span", {
                  className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${n.iconBg} ${n.iconColor}`,
                  children: n.icon,
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
      5899: (e, t, r) => {
        "use strict";
        r.d(t, { PI: () => i, pq: () => s, uX: () => n });
        var a = r(8570);
        ((0, a.createProxy)(
          String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\components\Card.tsx#Card`,
        ),
          (0, a.createProxy)(
            String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\components\Card.tsx#StageCard`,
          ));
        let s = (0, a.createProxy)(
            String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\components\Card.tsx#StepCard`,
          ),
          n = (0, a.createProxy)(
            String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\components\Card.tsx#TopicCard`,
          ),
          i = (0, a.createProxy)(
            String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\components\Card.tsx#ResourceCard`,
          );
      },
      4745: (e, t, r) => {
        "use strict";
        r.d(t, {
          $d: () => N,
          Ei: () => j,
          IY: () => h,
          Jz: () => y,
          MB: () => k,
          NI: () => g,
          V3: () => f,
          Zb: () => x,
          aQ: () => v,
          fY: () => b,
          hS: () => m,
          hf: () => p,
          ik: () => S,
          tw: () => w,
        });
        var a = r(2048),
          s = r(5315),
          n = r(9306);
        let i = s.join(process.cwd(), "content");
        function o(e) {
          return JSON.parse(a.readFileSync(e, "utf-8"));
        }
        function l(e) {
          return s.join(i, e);
        }
        function d(e, t) {
          let r = s.join(l(e), t);
          return a.existsSync(r) ? r : s.join(l(n.ZW), t);
        }
        function c(e, t) {
          let r = s.join(l(n.ZW), t),
            i = s.join(l(e), t),
            c = new Set();
          if (a.existsSync(r))
            for (let e of a.readdirSync(r)) e.endsWith(".json") && c.add(e);
          if (a.existsSync(i))
            for (let e of a.readdirSync(i)) e.endsWith(".json") && c.add(e);
          return Array.from(c).map((r) => o(d(e, s.join(t, r))));
        }
        function m(e = n.ZW) {
          return o(d(e, "stages.json"));
        }
        function h(e, t = n.ZW) {
          return m(t).find((t) => t.id === e);
        }
        function u(e = n.ZW) {
          return c(e, "steps");
        }
        function x(e, t = n.ZW) {
          return u(t).find((t) => t.id === e);
        }
        function p(e, t = n.ZW) {
          return u(t).find((t) => t.slug === e);
        }
        function f(e, t = n.ZW) {
          let r = h(e, t);
          return r
            ? r.stepIds.map((e) => x(e, t)).filter((e) => void 0 !== e)
            : [];
        }
        function g(e = n.ZW) {
          return c(e, "topics");
        }
        function b(e, t = n.ZW) {
          return g(t).find((t) => t.id === e);
        }
        function y(e, t = n.ZW) {
          return g(t).find((t) => (t.slug ?? t.id) === e);
        }
        function j(e = n.ZW) {
          return o(d(e, "glossary.json")).sort((e, t) =>
            e.term.localeCompare(t.term),
          );
        }
        function v(e, t = n.ZW) {
          return j(t).find((t) => t.id === e);
        }
        function w(e = n.ZW) {
          return o(d(e, "resources.json"));
        }
        function k(e, t = n.ZW) {
          return w(t).find((t) => t.id === e);
        }
        function N(e, t = n.ZW) {
          return w(t).filter((t) => t.relatedTopicIds.includes(e));
        }
        function S(e = n.ZW) {
          return o(d(e, "masjids.json"));
        }
      },
      3219: (e, t, r) => {
        "use strict";
        r.d(t, { r: () => s });
        var a = r(9306);
        function s(e, t) {
          let r = (0, a.Ty)(e);
          return {
            title: r(`metadata.${t}.title`),
            description: r(`metadata.${t}.description`),
          };
        }
      },
      7371: (e, t, r) => {
        "use strict";
        r.d(t, { default: () => s.a });
        var a = r(1812),
          s = r.n(a);
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
    a = t.X(0, [963, 496, 990, 710, 901], () => r(8035));
  module.exports = a;
})();
