(() => {
  var e = {};
  ((e.id = 61),
    (e.ids = [61]),
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
      7904: (e, r, t) => {
        "use strict";
        (t.r(r),
          t.d(r, {
            GlobalError: () => i.a,
            __next_app__: () => p,
            originalPathname: () => m,
            pages: () => c,
            routeModule: () => x,
            tree: () => d,
          }),
          t(296),
          t(9475),
          t(6982),
          t(1506),
          t(5866));
        var a = t(3191),
          s = t(8716),
          n = t(7922),
          i = t.n(n),
          o = t(5231),
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
        t.d(r, l);
        let d = [
            "",
            {
              children: [
                "[locale]",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(t.bind(t, 296)),
                        "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\page.tsx",
                      ],
                    },
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
            "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\page.tsx",
          ],
          m = "/[locale]/page",
          p = { require: t, loadChunk: () => Promise.resolve() },
          x = new a.AppPageRouteModule({
            definition: {
              kind: s.x.APP_PAGE,
              page: "/[locale]/page",
              pathname: "/[locale]",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      1387: (e, r, t) => {
        (Promise.resolve().then(t.bind(t, 5829)),
          Promise.resolve().then(t.t.bind(t, 2481, 23)),
          Promise.resolve().then(t.t.bind(t, 9404, 23)));
      },
      5829: (e, r, t) => {
        "use strict";
        t.d(r, { AnimateIn: () => n });
        var a = t(326),
          s = t(7577);
        function n({
          children: e,
          className: r = "",
          delay: t = 0,
          animation: n = "fade-up",
          threshold: i = 0.1,
        }) {
          let o = (0, s.useRef)(null),
            [l, d] = (0, s.useState)(!1);
          return a.jsx("div", {
            ref: o,
            className: `${r} ${l ? { "fade-up": "animate-fade-up", "fade-in": "animate-fade-in", "scale-in": "animate-scale-in", "slide-in-right": "animate-slide-in-right" }[n] : "opacity-0"}`,
            style: l && t > 0 ? { animationDelay: `${t}s` } : void 0,
            children: e,
          });
        }
      },
      296: (e, r, t) => {
        "use strict";
        (t.r(r), t.d(r, { default: () => x, generateMetadata: () => p }));
        var a = t(9510),
          s = t(7371),
          n = t(7710),
          i = t(5769),
          o = t(2095),
          l = t(6258),
          d = t(9306),
          c = t(3219);
        let m = {
          badge: "Free & Offline-First",
          title: "Welcome to",
          titleHighlight: "the Family",
          subtitle:
            "Your journey begins here, and we are honored to walk alongside you. This guide will help you take your first steps with clarity, warmth, and practical advice.",
          beginJourney: "Begin Your Journey",
          exploreTopics: "Explore Topics",
          pathsTitle: "Where Are You on Your Journey?",
          pathsSubtitle:
            "Everyone starts somewhere different. Pick the path that feels right for you.",
          paths: [
            {
              title: "Just Took Shahada?",
              body: "Congratulations! Start here for your very first steps - from understanding what you just declared to performing Ghusl and embracing your fresh start.",
              href: "/roadmap/day-0-1",
              icon: "star",
              accent:
                "border-l-4 border-l-accentYellow bg-gradient-to-br from-accentYellow/40 to-secondaryGreen/30",
            },
            {
              title: "Been Muslim a Few Weeks?",
              body: "You have taken the leap and now want to build strong foundations. Jump into learning prayer, connecting with community, and building daily habits.",
              href: "/roadmap/week-1",
              icon: "book",
              accent:
                "border-l-4 border-l-primaryGreen bg-gradient-to-br from-primaryGreen/30 to-surfaceElevated",
            },
            {
              title: "Looking for Specific Topics?",
              body: "Explore topics like prayer, fasting, beliefs, and community at your own pace. Browse the glossary or dive into what interests you most right now.",
              href: "/topics",
              icon: "search",
              accent:
                "border-l-4 border-l-primary bg-gradient-to-br from-surfaceElevated to-primaryGreen/20",
            },
          ],
          intro:
            "Revert Guide is a free, step-by-step companion for anyone who has recently embraced Islam. Whether you are just learning to pray or preparing for your first Ramadan, this guide meets you where you are - with practical actions, gentle encouragement, and zero judgment.",
          trust:
            "No ads, no tracking, no accounts required - just support for your journey.",
          quickAccess: "Quick Access",
          quickLinks: [
            {
              title: "Ramadan Guide",
              body: "Prepare for your first fast",
              href: "/ramadan",
              bar: "bg-gradient-to-r from-accentYellow via-secondaryGreen to-primaryGreen",
            },
            {
              title: "Mental Health Tips",
              body: "Support for the inner journey",
              href: "/mental-health",
              bar: "bg-gradient-to-r from-primaryGreen via-primary to-primaryHover",
            },
            {
              title: "Find a Masjid",
              body: "Mosques near Toronto",
              href: "/resources/find-masjid",
              bar: "bg-gradient-to-r from-primary via-primaryGreen to-secondaryGreen",
            },
          ],
        };
        function p({ params: e }) {
          return (0, c.r)(e.locale, "home");
        }
        function x({ params: e }) {
          let r = e.locale;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("section", {
                className: "relative overflow-hidden",
                children: [
                  a.jsx("div", {
                    className:
                      "pointer-events-none absolute inset-0 bg-dots opacity-[0.02]",
                    "aria-hidden": "true",
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "relative mx-auto max-w-4xl px-5 pb-8 pt-16 text-center md:pb-12 md:pt-24",
                    children: [
                      a.jsx(l.b, {
                        animation: "fade-in",
                        children: a.jsx("div", {
                          className:
                            "mx-auto mb-8 flex h-40 w-40 items-center justify-center md:h-48 md:w-48",
                          children: a.jsx(n.default, {
                            src: "/revert-guide-logo.png",
                            alt: "Revert Guide logo",
                            width: 192,
                            height: 192,
                            className: "h-full w-full",
                            priority: !0,
                          }),
                        }),
                      }),
                      a.jsx(l.b, {
                        animation: "fade-up",
                        delay: 0.05,
                        children: (0, a.jsxs)("span", {
                          className:
                            "mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary",
                          children: [
                            a.jsx("span", {
                              className:
                                "h-1.5 w-1.5 animate-pulse-soft rounded-full bg-primary",
                              "aria-hidden": "true",
                            }),
                            m.badge,
                          ],
                        }),
                      }),
                      a.jsx(l.b, {
                        animation: "fade-up",
                        delay: 0.15,
                        children: (0, a.jsxs)("h1", {
                          className:
                            "mb-5 font-display text-4xl font-semibold tracking-tight text-textPrimary md:text-5xl lg:text-6xl",
                          children: [
                            m.title,
                            " ",
                            a.jsx("span", {
                              className: "text-gradient",
                              children: m.titleHighlight,
                            }),
                          ],
                        }),
                      }),
                      a.jsx(l.b, {
                        animation: "fade-up",
                        delay: 0.25,
                        children: a.jsx("p", {
                          className:
                            "mx-auto mb-10 max-w-xl text-lg leading-relaxed text-textSecondary",
                          children: m.subtitle,
                        }),
                      }),
                      a.jsx(l.b, {
                        animation: "fade-up",
                        delay: 0.35,
                        children: (0, a.jsxs)("div", {
                          className:
                            "flex flex-col items-center justify-center gap-3 sm:flex-row",
                          children: [
                            a.jsx(i.z, {
                              href: (0, d.FT)(r, "/roadmap"),
                              className: "px-8 py-4 text-lg",
                              children: m.beginJourney,
                            }),
                            a.jsx(i.z, {
                              href: (0, d.FT)(r, "/topics"),
                              variant: "outline",
                              className: "px-6",
                              children: m.exploreTopics,
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  a.jsx(l.b, {
                    animation: "fade-in",
                    delay: 0.5,
                    children: a.jsx("div", {
                      className:
                        "relative mx-auto mt-8 max-w-3xl px-5 md:mt-12",
                      children: a.jsx("div", {
                        className:
                          "flex items-end justify-center gap-2 sm:gap-4 md:gap-8",
                        "aria-hidden": "true",
                        children: [
                          {
                            src: "/Grandmother female Character Standing.png",
                            className:
                              "h-[100px] w-[60px] sm:h-[140px] sm:w-[80px] md:h-[200px] md:w-[110px]",
                            delay: "0.5s",
                          },
                          {
                            src: "/Adult female Character Standing.png",
                            className:
                              "h-[120px] w-[70px] sm:h-[160px] sm:w-[90px] md:h-[240px] md:w-[130px]",
                            delay: "1s",
                          },
                          {
                            src: "/Kid standing with right hand up.png",
                            className:
                              "h-[80px] w-[50px] sm:h-[110px] sm:w-[70px] md:h-[160px] md:w-[95px]",
                            delay: "2.5s",
                          },
                          {
                            src: "/Adult male Character Standing.png",
                            className:
                              "h-[130px] w-[75px] sm:h-[170px] sm:w-[95px] md:h-[250px] md:w-[135px]",
                            delay: "1.8s",
                          },
                          {
                            src: "/Grandfather male Character Standing.png",
                            className:
                              "h-[110px] w-[65px] sm:h-[150px] sm:w-[85px] md:h-[210px] md:w-[115px]",
                            delay: "3.2s",
                          },
                        ].map((e, r) =>
                          a.jsx(
                            "div",
                            {
                              className: `${e.className} animate-float`,
                              style: { animationDelay: e.delay },
                              children: a.jsx(n.default, {
                                src: e.src,
                                alt: "",
                                fill: !0,
                                className:
                                  "!relative object-contain object-bottom drop-shadow-md",
                                "aria-hidden": "true",
                                priority: 1 === r || 3 === r,
                              }),
                            },
                            e.src,
                          ),
                        ),
                      }),
                    }),
                  }),
                ],
              }),
              a.jsx("div", {
                className: "border-t border-border/30",
                "aria-hidden": "true",
              }),
              (0, a.jsxs)("section", {
                className: "mx-auto max-w-3xl px-5 py-16 md:py-20",
                children: [
                  (0, a.jsxs)(l.b, {
                    className: "text-center",
                    children: [
                      a.jsx("h2", {
                        className:
                          "mb-2 mt-0 font-display text-2xl font-semibold tracking-tight text-textPrimary md:text-3xl",
                        children: m.pathsTitle,
                      }),
                      a.jsx("p", {
                        className: "mx-auto mb-10 max-w-lg text-textSecondary",
                        children: m.pathsSubtitle,
                      }),
                    ],
                  }),
                  a.jsx("div", {
                    className: "flex flex-col gap-4",
                    children: m.paths.map((e, t) =>
                      a.jsx(
                        l.b,
                        {
                          delay: 0.1 + 0.1 * t,
                          children: (0, a.jsxs)(s.default, {
                            href: (0, d.FT)(r, e.href),
                            className: `group flex items-center gap-5 rounded-xl border border-border/60 bg-white px-5 py-5 no-underline shadow-card transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong sm:px-6 ${e.accent.split(" ")[0]} ${e.accent.split(" ")[1]}`,
                            children: [
                              a.jsx("span", {
                                className: `flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-primary ${e.accent.slice(e.accent.indexOf("bg-"))}`,
                                children: a.jsx(o.J, {
                                  name: e.icon,
                                  size: "lg",
                                }),
                              }),
                              (0, a.jsxs)("div", {
                                className: "min-w-0 flex-1",
                                children: [
                                  a.jsx("h3", {
                                    className:
                                      "mb-1 mt-0 text-lg font-semibold text-textPrimary",
                                    children: e.title,
                                  }),
                                  a.jsx("p", {
                                    className:
                                      "mb-0 text-sm leading-relaxed text-textSecondary",
                                    children: e.body,
                                  }),
                                ],
                              }),
                              a.jsx("span", {
                                className:
                                  "shrink-0 text-border transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary",
                                children: a.jsx(o.J, {
                                  name: "chevron-right",
                                  size: "lg",
                                }),
                              }),
                            ],
                          }),
                        },
                        e.href,
                      ),
                    ),
                  }),
                ],
              }),
              a.jsx("div", {
                className: "border-t border-border/30",
                "aria-hidden": "true",
              }),
              a.jsx("section", {
                className: "mx-auto max-w-3xl px-5 py-16 text-center md:py-20",
                children: (0, a.jsxs)(l.b, {
                  children: [
                    a.jsx("div", {
                      className:
                        "mx-auto mb-6 font-display text-6xl leading-none text-primaryGreen/40 md:text-7xl",
                      "aria-hidden": "true",
                      children: "“",
                    }),
                    a.jsx("p", {
                      className:
                        "mb-0 font-display text-xl italic leading-relaxed text-textPrimary md:text-2xl",
                      children: m.intro,
                    }),
                  ],
                }),
              }),
              a.jsx("div", {
                className: "border-t border-border/30",
                "aria-hidden": "true",
              }),
              a.jsx("section", {
                className: "mx-auto max-w-4xl px-5 py-10",
                children: a.jsx(l.b, {
                  children: (0, a.jsxs)("div", {
                    className:
                      "flex items-center justify-center gap-3 border border-dashed border-primaryGreen/40 bg-white px-6 py-4 text-center",
                    children: [
                      a.jsx("span", {
                        className:
                          "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10",
                        children: a.jsx(o.J, {
                          name: "check",
                          size: "md",
                          className: "text-primary",
                        }),
                      }),
                      a.jsx("p", {
                        className:
                          "mb-0 text-sm font-medium text-textSecondary",
                        children: m.trust,
                      }),
                    ],
                  }),
                }),
              }),
              a.jsx("div", {
                className: "border-t border-border/30",
                "aria-hidden": "true",
              }),
              (0, a.jsxs)("section", {
                className: "mx-auto max-w-5xl px-5 py-16 md:py-20",
                children: [
                  a.jsx(l.b, {
                    children: a.jsx("h2", {
                      className:
                        "mb-10 mt-0 text-center font-display text-2xl font-semibold tracking-tight text-textPrimary",
                      children: m.quickAccess,
                    }),
                  }),
                  a.jsx("div", {
                    className: "grid gap-5 sm:grid-cols-3",
                    children: m.quickLinks.map((e, t) =>
                      a.jsx(
                        l.b,
                        {
                          delay: 0.1 + 0.1 * t,
                          children: (0, a.jsxs)(s.default, {
                            href: (0, d.FT)(r, e.href),
                            className:
                              "group block overflow-hidden rounded-2xl border border-border/60 bg-white no-underline shadow-card transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:border-primaryGreen/50 hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong",
                            children: [
                              a.jsx("div", {
                                className: `h-1 w-full ${e.bar}`,
                                "aria-hidden": "true",
                              }),
                              (0, a.jsxs)("div", {
                                className: "p-5",
                                children: [
                                  a.jsx("span", {
                                    className:
                                      "block text-base font-semibold text-textPrimary",
                                    children: e.title,
                                  }),
                                  a.jsx("span", {
                                    className:
                                      "mt-1 block text-sm text-textSecondary",
                                    children: e.body,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                        e.href,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          });
        }
      },
      6258: (e, r, t) => {
        "use strict";
        t.d(r, { b: () => a });
        let a = (0, t(8570).createProxy)(
          String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\components\AnimateIn.tsx#AnimateIn`,
        );
      },
      5769: (e, r, t) => {
        "use strict";
        t.d(r, { z: () => i });
        var a = t(9510),
          s = t(7371);
        let n = {
          primary:
            "bg-primary text-white shadow-[0_2px_8px_rgba(0,0,0,0.12)] hover:bg-[#5B9168] hover:text-white hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-borderStrong",
          secondary:
            "bg-accent text-white shadow-[0_2px_8px_rgba(0,0,0,0.12)] hover:bg-[#7A8B4A] hover:text-white hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-borderStrong",
          outline:
            "border-2 border-primary/30 text-primary bg-transparent hover:bg-primary/10 hover:border-primary/60 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-borderStrong",
        };
        function i(e) {
          let {
              variant: r = "primary",
              children: t,
              className: i = "",
              ...o
            } = e,
            l = `inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-base font-semibold no-underline hover:no-underline transition-all duration-300 ease-out-expo focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${n[r]} ${i}`;
          if ("href" in o && o.href) {
            let { href: e, external: r, ...n } = o;
            return r
              ? (0, a.jsxs)("a", {
                  href: e,
                  className: l,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  ...n,
                  children: [
                    t,
                    a.jsx("svg", {
                      className: "h-4 w-4",
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
                })
              : a.jsx(s.default, { href: e, className: l, ...n, children: t });
          }
          return a.jsx("button", { className: l, ...o, children: t });
        }
      },
      2095: (e, r, t) => {
        "use strict";
        t.d(r, { J: () => i });
        var a = t(9510);
        let s = { sm: "h-4 w-4", md: "h-5 w-5", lg: "h-6 w-6" },
          n = {
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
        function i({ name: e, size: r = "md", className: t = "", label: i }) {
          let o = !i;
          return a.jsx("svg", {
            className: `${s[r]} ${t}`,
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            "aria-hidden": o ? "true" : void 0,
            "aria-label": i,
            role: i ? "img" : void 0,
            focusable: "false",
            children: n[e],
          });
        }
      },
      3219: (e, r, t) => {
        "use strict";
        t.d(r, { r: () => s });
        var a = t(9306);
        function s(e, r) {
          let t = (0, a.Ty)(e);
          return {
            title: t(`metadata.${r}.title`),
            description: t(`metadata.${r}.description`),
          };
        }
      },
      7371: (e, r, t) => {
        "use strict";
        t.d(r, { default: () => s.a });
        var a = t(1812),
          s = t.n(a);
      },
      1812: (e, r, t) => {
        "use strict";
        let { createProxy: a } = t(8570);
        e.exports = a(
          "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\node_modules\\next\\dist\\client\\link.js",
        );
      },
    }));
  var r = require("../../webpack-runtime.js");
  r.C(e);
  var t = (e) => r((r.s = e)),
    a = r.X(0, [963, 496, 990, 710, 901], () => t(7904));
  module.exports = a;
})();
