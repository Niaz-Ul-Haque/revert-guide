(() => {
  var e = {};
  ((e.id = 316),
    (e.ids = [316]),
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
      721: (e, r, t) => {
        "use strict";
        (t.r(r),
          t.d(r, {
            GlobalError: () => n.a,
            __next_app__: () => m,
            originalPathname: () => x,
            pages: () => c,
            routeModule: () => u,
            tree: () => o,
          }),
          t(4209),
          t(9475),
          t(6982),
          t(1506),
          t(5866));
        var s = t(3191),
          a = t(8716),
          l = t(7922),
          n = t.n(l),
          i = t(5231),
          d = {};
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
            ].indexOf(e) && (d[e] = () => i[e]);
        t.d(r, d);
        let o = [
            "",
            {
              children: [
                "[locale]",
                {
                  children: [
                    "sources",
                    {
                      children: [
                        "__PAGE__",
                        {},
                        {
                          page: [
                            () => Promise.resolve().then(t.bind(t, 4209)),
                            "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\sources\\page.tsx",
                          ],
                        },
                      ],
                    },
                    {},
                  ],
                },
                {
                  layout: [
                    () => Promise.resolve().then(t.bind(t, 9475)),
                    "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\layout.tsx",
                  ],
                  "not-found": [
                    () => Promise.resolve().then(t.bind(t, 6982)),
                    "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\not-found.tsx",
                  ],
                },
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(t.bind(t, 1506)),
                "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\layout.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(t.t.bind(t, 5866, 23)),
                "next/dist/client/components/not-found-error",
              ],
            },
          ],
          c = [
            "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\sources\\page.tsx",
          ],
          x = "/[locale]/sources/page",
          m = { require: t, loadChunk: () => Promise.resolve() },
          u = new s.AppPageRouteModule({
            definition: {
              kind: a.x.APP_PAGE,
              page: "/[locale]/sources/page",
              pathname: "/[locale]/sources",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: o },
          });
      },
      4048: (e, r, t) => {
        (Promise.resolve().then(t.bind(t, 5829)),
          Promise.resolve().then(t.bind(t, 3630)),
          Promise.resolve().then(t.t.bind(t, 9404, 23)));
      },
      5829: (e, r, t) => {
        "use strict";
        t.d(r, { AnimateIn: () => l });
        var s = t(326),
          a = t(7577);
        function l({
          children: e,
          className: r = "",
          delay: t = 0,
          animation: l = "fade-up",
          threshold: n = 0.1,
        }) {
          let i = (0, a.useRef)(null),
            [d, o] = (0, a.useState)(!1);
          return s.jsx("div", {
            ref: i,
            className: `${r} ${d ? { "fade-up": "animate-fade-up", "fade-in": "animate-fade-in", "scale-in": "animate-scale-in", "slide-in-right": "animate-slide-in-right" }[l] : "opacity-0"}`,
            style: d && t > 0 ? { animationDelay: `${t}s` } : void 0,
            children: e,
          });
        }
      },
      3630: (e, r, t) => {
        "use strict";
        t.d(r, { Breadcrumb: () => n });
        var s = t(326),
          a = t(434),
          l = t(3082);
        function n({ items: e }) {
          let r = (0, l.T)();
          return 0 === e.length
            ? null
            : s.jsx("nav", {
                "aria-label": r("common.breadcrumb"),
                className: "mb-8",
                children: s.jsx("ol", {
                  className:
                    "mb-0 flex flex-wrap items-center gap-1.5 pl-0 text-sm",
                  children: e.map((r, t) => {
                    let l = t === e.length - 1;
                    return (0, s.jsxs)(
                      "li",
                      {
                        className: "mb-0 inline-flex items-center gap-1.5",
                        children: [
                          t > 0 &&
                            s.jsx("svg", {
                              className: "h-3 w-3 text-border",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              strokeWidth: 2.5,
                              stroke: "currentColor",
                              "aria-hidden": "true",
                              children: s.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "m8.25 4.5 7.5 7.5-7.5 7.5",
                              }),
                            }),
                          l || !r.href
                            ? s.jsx("span", {
                                className: "font-medium text-textMuted",
                                "aria-current": l ? "page" : void 0,
                                children: r.label,
                              })
                            : s.jsx(a.default, {
                                href: r.href,
                                className:
                                  "font-medium text-textSecondary no-underline transition-colors duration-200 hover:text-primary",
                                children: r.label,
                              }),
                        ],
                      },
                      r.href ?? r.label,
                    );
                  }),
                }),
              });
        }
      },
      4209: (e, r, t) => {
        "use strict";
        (t.r(r), t.d(r, { default: () => c, generateMetadata: () => o }));
        var s = t(9510),
          a = t(7371),
          l = t(4557),
          n = t(6258),
          i = t(9306),
          d = t(3219);
        function o({ params: e }) {
          return (0, d.r)(e.locale, "sources");
        }
        function c({ params: e }) {
          let r = e.locale,
            t = (e) => (0, i.FT)(r, e);
          return (0, s.jsxs)("div", {
            className: "mx-auto max-w-4xl px-5 py-10",
            children: [
              s.jsx(l.a, {
                items: [
                  { label: "Home", href: t("/") },
                  { label: "Sources & Citations" },
                ],
              }),
              (0, s.jsxs)(n.b, {
                children: [
                  s.jsx("h1", {
                    className:
                      "mb-4 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl",
                    children: "Sources & Citations",
                  }),
                  s.jsx("p", {
                    className:
                      "mb-10 text-base leading-relaxed text-textSecondary",
                    children:
                      "We are committed to accuracy and grounding our content in authentic sources. Every specific claim and quote in this guide is referenced below. We encourage you to read these sources yourself for deeper knowledge.",
                  }),
                ],
              }),
              s.jsx(n.b, {
                children: (0, s.jsxs)("section", {
                  className: "mb-10",
                  "aria-labelledby": "quran-refs",
                  children: [
                    s.jsx("h2", {
                      id: "quran-refs",
                      className:
                        "mb-5 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                      children: "Quranic References",
                    }),
                    (0, s.jsxs)("ol", {
                      className: "flex flex-col gap-3 pl-0",
                      children: [
                        (0, s.jsxs)("li", {
                          className:
                            "rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5 text-sm text-textSecondary",
                          children: [
                            s.jsx("span", {
                              className: "font-bold text-textPrimary",
                              children: "[Q1]",
                            }),
                            ' Quran 2:185 - "Ramadan is the month in which the Quran was sent down as a guide to mankind..." - Referenced in',
                            " ",
                            s.jsx(a.default, {
                              href: t("/ramadan"),
                              className: "text-primary",
                              children: "Ramadan Guide",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("li", {
                          className:
                            "rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5 text-sm text-textSecondary",
                          children: [
                            s.jsx("span", {
                              className: "font-bold text-textPrimary",
                              children: "[Q2]",
                            }),
                            " Quran 1:1-7 (Surah Al-Fatiha) - The opening chapter of the Quran, recited in every unit of prayer. - Referenced in",
                            " ",
                            s.jsx(a.default, {
                              href: t("/topics/prayer"),
                              className: "text-primary",
                              children: "Topics: Prayer",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("li", {
                          className:
                            "rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5 text-sm text-textSecondary",
                          children: [
                            s.jsx("span", {
                              className: "font-bold text-textPrimary",
                              children: "[Q3]",
                            }),
                            ' Quran 112:1-4 (Surah Al-Ikhlas) - "Say, He is Allah, the One..." - Referenced in',
                            " ",
                            s.jsx(a.default, {
                              href: t("/topics/beliefs"),
                              className: "text-primary",
                              children: "Topics: Core Beliefs",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("li", {
                          className:
                            "rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5 text-sm text-textSecondary",
                          children: [
                            s.jsx("span", {
                              className: "font-bold text-textPrimary",
                              children: "[Q4]",
                            }),
                            ' Quran 7:156 - "My mercy encompasses all things." - Referenced in',
                            " ",
                            s.jsx(a.default, {
                              href: t("/topics/beliefs"),
                              className: "text-primary",
                              children: "Topics: Core Beliefs",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("li", {
                          className:
                            "rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5 text-sm text-textSecondary",
                          children: [
                            s.jsx("span", {
                              className: "font-bold text-textPrimary",
                              children: "[Q5]",
                            }),
                            ' Quran 21:107 - "We have not sent you except as a mercy to the worlds." - Referenced in',
                            " ",
                            s.jsx(a.default, {
                              href: t("/topics/beliefs"),
                              className: "text-primary",
                              children: "Topics: Core Beliefs",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("li", {
                          className:
                            "rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5 text-sm text-textSecondary",
                          children: [
                            s.jsx("span", {
                              className: "font-bold text-textPrimary",
                              children: "[Q6]",
                            }),
                            ' Quran 97:1-5 (Surah Al-Qadr) - Describes Laylat al-Qadr as "better than a thousand months." - Referenced in',
                            " ",
                            s.jsx(a.default, {
                              href: t("/ramadan"),
                              className: "text-primary",
                              children: "Ramadan Guide",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              s.jsx(n.b, {
                children: (0, s.jsxs)("section", {
                  className: "mb-10",
                  "aria-labelledby": "hadith-refs",
                  children: [
                    s.jsx("h2", {
                      id: "hadith-refs",
                      className:
                        "mb-5 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                      children: "Hadith References",
                    }),
                    (0, s.jsxs)("ol", {
                      className: "flex flex-col gap-3 pl-0",
                      children: [
                        (0, s.jsxs)("li", {
                          className:
                            "rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5 text-sm text-textSecondary",
                          children: [
                            s.jsx("span", {
                              className: "font-bold text-textPrimary",
                              children: "[H1]",
                            }),
                            ' Sahih Bukhari, Vol. 1, Book 2, Hadith 7 - "Actions are judged by intentions (niyyah)." - Referenced throughout multiple steps',
                          ],
                        }),
                        (0, s.jsxs)("li", {
                          className:
                            "rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5 text-sm text-textSecondary",
                          children: [
                            s.jsx("span", {
                              className: "font-bold text-textPrimary",
                              children: "[H2]",
                            }),
                            ' Sahih Muslim, Book 35, Hadith 6505 - "How wonderful is the affair of the believer..." - Referenced in',
                            " ",
                            s.jsx(a.default, {
                              href: t("/topics/beliefs"),
                              className: "text-primary",
                              children: "Topics: Core Beliefs",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("li", {
                          className:
                            "rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5 text-sm text-textSecondary",
                          children: [
                            s.jsx("span", {
                              className: "font-bold text-textPrimary",
                              children: "[H3]",
                            }),
                            ' Sahih Bukhari, Book 8, Hadith 604 - "Pray as you have seen me pray." - Referenced in',
                            " ",
                            s.jsx(a.default, {
                              href: t("/topics/prayer"),
                              className: "text-primary",
                              children: "Topics: Prayer",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("li", {
                          className:
                            "rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5 text-sm text-textSecondary",
                          children: [
                            s.jsx("span", {
                              className: "font-bold text-textPrimary",
                              children: "[H4]",
                            }),
                            ' Sahih Bukhari - "Allah has ninety-nine names; whoever memorizes them will enter Paradise." - Referenced in',
                            " ",
                            s.jsx(a.default, {
                              href: t("/topics/beliefs"),
                              className: "text-primary",
                              children: "Topics: Core Beliefs",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("li", {
                          className:
                            "rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5 text-sm text-textSecondary",
                          children: [
                            s.jsx("span", {
                              className: "font-bold text-textPrimary",
                              children: "[H5]",
                            }),
                            ' Jami at-Tirmidhi - "Tie your camel, then trust in Allah." - Referenced in',
                            " ",
                            s.jsx(a.default, {
                              href: t("/mental-health"),
                              className: "text-primary",
                              children: "Mental Health Guide",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              s.jsx(n.b, {
                children: (0, s.jsxs)("section", {
                  className: "mb-10",
                  "aria-labelledby": "article-refs",
                  children: [
                    s.jsx("h2", {
                      id: "article-refs",
                      className:
                        "mb-5 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                      children: "Articles",
                    }),
                    (0, s.jsxs)("ol", {
                      className: "flex flex-col gap-3 pl-0",
                      children: [
                        (0, s.jsxs)("li", {
                          className:
                            "rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5 text-sm text-textSecondary",
                          children: [
                            s.jsx("span", {
                              className: "font-bold text-textPrimary",
                              children: "[A1]",
                            }),
                            " ",
                            s.jsx("em", { children: "New Muslim Guide" }),
                            " - newmuslimguide.com - Comprehensive resource covering worship, beliefs, and daily life. - Referenced in Steps 1-3",
                          ],
                        }),
                        (0, s.jsxs)("li", {
                          className:
                            "rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5 text-sm text-textSecondary",
                          children: [
                            s.jsx("span", {
                              className: "font-bold text-textPrimary",
                              children: "[A2]",
                            }),
                            " ",
                            s.jsx("em", {
                              children:
                                "My Prayer (Salah) - A Step-by-Step Guide",
                            }),
                            " - newmuslimguide.com - Illustrated prayer guide. - Referenced in",
                            " ",
                            s.jsx(a.default, {
                              href: t("/roadmap/week-1/prayer"),
                              className: "text-primary",
                              children: "Step: Prayer",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("li", {
                          className:
                            "rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5 text-sm text-textSecondary",
                          children: [
                            s.jsx("span", {
                              className: "font-bold text-textPrimary",
                              children: "[A3]",
                            }),
                            " ",
                            s.jsx("em", {
                              children:
                                "Mental Health and the Muslim Convert Experience",
                            }),
                            " - Yaqeen Institute - Referenced in",
                            " ",
                            s.jsx(a.default, {
                              href: t("/mental-health"),
                              className: "text-primary",
                              children: "Mental Health Guide",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("li", {
                          className:
                            "rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5 text-sm text-textSecondary",
                          children: [
                            s.jsx("span", {
                              className: "font-bold text-textPrimary",
                              children: "[A4]",
                            }),
                            " ",
                            s.jsx("em", { children: "Ramadan Prep Guide" }),
                            " - Yaqeen Institute - Referenced in",
                            " ",
                            s.jsx(a.default, {
                              href: t("/ramadan"),
                              className: "text-primary",
                              children: "Ramadan Guide",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              s.jsx(n.b, {
                children: (0, s.jsxs)("section", {
                  className: "mb-10",
                  "aria-labelledby": "book-refs",
                  children: [
                    s.jsx("h2", {
                      id: "book-refs",
                      className:
                        "mb-5 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                      children: "Books",
                    }),
                    (0, s.jsxs)("ol", {
                      className: "flex flex-col gap-3 pl-0",
                      children: [
                        (0, s.jsxs)("li", {
                          className:
                            "rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5 text-sm text-textSecondary",
                          children: [
                            s.jsx("span", {
                              className: "font-bold text-textPrimary",
                              children: "[B1]",
                            }),
                            " ",
                            s.jsx("em", { children: "The Clear Quran" }),
                            " by Dr. Mustafa Khattab - Modern English Quran translation. - Referenced in",
                            " ",
                            s.jsx(a.default, {
                              href: t("/topics/quran"),
                              className: "text-primary",
                              children: "Topics: Quran",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("li", {
                          className:
                            "rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5 text-sm text-textSecondary",
                          children: [
                            s.jsx("span", {
                              className: "font-bold text-textPrimary",
                              children: "[B2]",
                            }),
                            " ",
                            s.jsx("em", { children: "Welcome to Islam" }),
                            " by Mustafa Umar - Practical new Muslim guide. - Referenced in Steps 1 and 3",
                          ],
                        }),
                        (0, s.jsxs)("li", {
                          className:
                            "rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5 text-sm text-textSecondary",
                          children: [
                            s.jsx("span", {
                              className: "font-bold text-textPrimary",
                              children: "[B3]",
                            }),
                            " ",
                            s.jsx("em", {
                              children: "Being Muslim: A Practical Guide",
                            }),
                            " by Asad Tarsin (Sandala Press) - Handbook for new and returning Muslims. - Referenced in Steps 3, 8",
                          ],
                        }),
                        (0, s.jsxs)("li", {
                          className:
                            "rounded-2xl border border-border/60 bg-surfaceElevated/50 p-5 text-sm text-textSecondary",
                          children: [
                            s.jsx("span", {
                              className: "font-bold text-textPrimary",
                              children: "[B4]",
                            }),
                            " ",
                            s.jsx("em", {
                              children:
                                "Fortress of the Muslim (Hisn al-Muslim)",
                            }),
                            " - Collection of authentic daily supplications. - Referenced in",
                            " ",
                            s.jsx(a.default, {
                              href: t("/topics/prayer"),
                              className: "text-primary",
                              children: "Topics: Prayer",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              s.jsx(n.b, {
                children: s.jsx("section", {
                  "aria-labelledby": "closing",
                  children: s.jsx("p", {
                    className: "text-sm text-textMuted",
                    children:
                      "If you have questions about any of these references or would like to suggest additional sources, please use the feedback options within the app. We welcome contributions that help strengthen the accuracy and depth of this guide.",
                  }),
                }),
              }),
            ],
          });
        }
      },
      6258: (e, r, t) => {
        "use strict";
        t.d(r, { b: () => s });
        let s = (0, t(8570).createProxy)(
          String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\components\AnimateIn.tsx#AnimateIn`,
        );
      },
      4557: (e, r, t) => {
        "use strict";
        t.d(r, { a: () => s });
        let s = (0, t(8570).createProxy)(
          String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\components\Breadcrumb.tsx#Breadcrumb`,
        );
      },
      3219: (e, r, t) => {
        "use strict";
        t.d(r, { r: () => a });
        var s = t(9306);
        function a(e, r) {
          let t = (0, s.Ty)(e);
          return {
            title: t(`metadata.${r}.title`),
            description: t(`metadata.${r}.description`),
          };
        }
      },
      7371: (e, r, t) => {
        "use strict";
        t.d(r, { default: () => a.a });
        var s = t(1812),
          a = t.n(s);
      },
      1812: (e, r, t) => {
        "use strict";
        let { createProxy: s } = t(8570);
        e.exports = s(
          "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\node_modules\\next\\dist\\client\\link.js",
        );
      },
    }));
  var r = require("../../../webpack-runtime.js");
  r.C(e);
  var t = (e) => r((r.s = e)),
    s = r.X(0, [963, 496, 990, 901], () => t(721));
  module.exports = s;
})();
