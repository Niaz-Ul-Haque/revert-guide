(() => {
  var e = {};
  ((e.id = 72),
    (e.ids = [72]),
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
      3505: (e, r, t) => {
        "use strict";
        (t.r(r),
          t.d(r, {
            GlobalError: () => i.a,
            __next_app__: () => m,
            originalPathname: () => u,
            pages: () => c,
            routeModule: () => p,
            tree: () => l,
          }),
          t(6163),
          t(9475),
          t(6982),
          t(1506),
          t(5866));
        var n = t(3191),
          a = t(8716),
          s = t(7922),
          i = t.n(s),
          o = t(5231),
          d = {};
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
            ].indexOf(e) && (d[e] = () => o[e]);
        t.d(r, d);
        let l = [
            "",
            {
              children: [
                "[locale]",
                {
                  children: [
                    "roadmap",
                    {
                      children: [
                        "__PAGE__",
                        {},
                        {
                          page: [
                            () => Promise.resolve().then(t.bind(t, 6163)),
                            "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\roadmap\\page.tsx",
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
            "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\roadmap\\page.tsx",
          ],
          u = "/[locale]/roadmap/page",
          m = { require: t, loadChunk: () => Promise.resolve() },
          p = new n.AppPageRouteModule({
            definition: {
              kind: a.x.APP_PAGE,
              page: "/[locale]/roadmap/page",
              pathname: "/[locale]/roadmap",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: l },
          });
      },
      6867: (e, r, t) => {
        (Promise.resolve().then(t.bind(t, 5829)),
          Promise.resolve().then(t.bind(t, 3630)),
          Promise.resolve().then(t.t.bind(t, 2481, 23)),
          Promise.resolve().then(t.t.bind(t, 9404, 23)));
      },
      5829: (e, r, t) => {
        "use strict";
        t.d(r, { AnimateIn: () => s });
        var n = t(326),
          a = t(7577);
        function s({
          children: e,
          className: r = "",
          delay: t = 0,
          animation: s = "fade-up",
          threshold: i = 0.1,
        }) {
          let o = (0, a.useRef)(null),
            [d, l] = (0, a.useState)(!1);
          return n.jsx("div", {
            ref: o,
            className: `${r} ${d ? { "fade-up": "animate-fade-up", "fade-in": "animate-fade-in", "scale-in": "animate-scale-in", "slide-in-right": "animate-slide-in-right" }[s] : "opacity-0"}`,
            style: d && t > 0 ? { animationDelay: `${t}s` } : void 0,
            children: e,
          });
        }
      },
      3630: (e, r, t) => {
        "use strict";
        t.d(r, { Breadcrumb: () => i });
        var n = t(326),
          a = t(434),
          s = t(3082);
        function i({ items: e }) {
          let r = (0, s.T)();
          return 0 === e.length
            ? null
            : n.jsx("nav", {
                "aria-label": r("common.breadcrumb"),
                className: "mb-8",
                children: n.jsx("ol", {
                  className:
                    "mb-0 flex flex-wrap items-center gap-1.5 pl-0 text-sm",
                  children: e.map((r, t) => {
                    let s = t === e.length - 1;
                    return (0, n.jsxs)(
                      "li",
                      {
                        className: "mb-0 inline-flex items-center gap-1.5",
                        children: [
                          t > 0 &&
                            n.jsx("svg", {
                              className: "h-3 w-3 text-border",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              strokeWidth: 2.5,
                              stroke: "currentColor",
                              "aria-hidden": "true",
                              children: n.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "m8.25 4.5 7.5 7.5-7.5 7.5",
                              }),
                            }),
                          s || !r.href
                            ? n.jsx("span", {
                                className: "font-medium text-textMuted",
                                "aria-current": s ? "page" : void 0,
                                children: r.label,
                              })
                            : n.jsx(a.default, {
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
      6163: (e, r, t) => {
        "use strict";
        (t.r(r), t.d(r, { default: () => x, generateMetadata: () => p }));
        var n = t(9510),
          a = t(7710),
          s = t(7371),
          i = t(4745),
          o = t(4557),
          d = t(2095),
          l = t(6258),
          c = t(9306),
          u = t(3219);
        let m = {
          badge: "Your Path Forward",
          title: "Your Roadmap",
          description:
            "A timeline-based guide from your first day as a Muslim through the first six months and beyond. Each stage builds on the last - follow them in order or jump to wherever feels right.",
          stagesLabel: "Journey stages",
          explore: "Explore",
          endingTitle: "There is no wrong place to begin.",
          endingBody:
            "Start where you are and progress at your own pace. Every journey is unique, and yours is no exception.",
        };
        function p({ params: e }) {
          return (0, u.r)(e.locale, "roadmap");
        }
        function x({ params: e }) {
          let r = e.locale,
            t = (0, i.hS)(r);
          return (0, n.jsxs)("div", {
            className: "mx-auto max-w-4xl px-5 py-10",
            children: [
              n.jsx(o.a, {
                items: [
                  { label: "Home", href: (0, c.FT)(r, "/") },
                  { label: m.title },
                ],
              }),
              n.jsx("header", {
                className: "mb-16 text-center",
                children: (0, n.jsxs)(l.b, {
                  children: [
                    n.jsx("div", {
                      className: "mb-5 flex justify-center",
                      "aria-hidden": "true",
                      children: n.jsx(a.default, {
                        src: "/revert-guide-logo.png",
                        alt: "",
                        width: 48,
                        height: 48,
                        className: "animate-float",
                        "aria-hidden": "true",
                      }),
                    }),
                    (0, n.jsxs)("span", {
                      className:
                        "mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary",
                      children: [
                        n.jsx(d.J, { name: "star", size: "sm" }),
                        m.badge,
                      ],
                    }),
                    n.jsx("h1", {
                      className:
                        "mb-4 font-display text-4xl font-semibold tracking-tight text-textPrimary md:text-5xl",
                      children: m.title,
                    }),
                    n.jsx("p", {
                      className: "mx-auto max-w-2xl text-lg text-textSecondary",
                      children: m.description,
                    }),
                  ],
                }),
              }),
              (0, n.jsxs)("div", {
                className: "relative",
                role: "list",
                "aria-label": m.stagesLabel,
                children: [
                  n.jsx("div", {
                    className:
                      "absolute bottom-0 left-6 top-0 w-0.5 bg-gradient-to-b from-primary/40 via-primaryGreen/50 to-secondaryGreen/40 md:left-1/2 md:-translate-x-px",
                    "aria-hidden": "true",
                  }),
                  t.map((e, t) => {
                    let a = t % 2 == 0;
                    return (0, n.jsxs)(
                      "div",
                      {
                        role: "listitem",
                        className: "relative mb-10 last:mb-0",
                        children: [
                          n.jsx("div", {
                            className:
                              "absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-primary to-primaryHover text-sm font-bold text-white shadow-elevated md:left-1/2",
                            "aria-hidden": "true",
                            children: t + 1,
                          }),
                          n.jsx(l.b, {
                            delay: 0.1 * t,
                            animation: a ? "fade-up" : "slide-in-right",
                            className: `pl-16 md:w-[calc(50%-2rem)] ${a ? "md:mr-auto md:pl-0 md:pr-10" : "md:ml-auto md:pl-10 md:pr-0"}`,
                            children: n.jsx(s.default, {
                              href: (0, c.FT)(r, `/roadmap/${e.id}`),
                              className:
                                "group block rounded-2xl border border-border/60 bg-white p-6 shadow-card no-underline transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primaryGreen/60 hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong",
                              children: (0, n.jsxs)("div", {
                                className: "relative overflow-hidden",
                                children: [
                                  n.jsx("div", {
                                    className:
                                      "pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primaryGreen/15 transition-transform duration-500 group-hover:scale-150",
                                    "aria-hidden": "true",
                                  }),
                                  (0, n.jsxs)("div", {
                                    className: "relative",
                                    children: [
                                      n.jsx("h3", {
                                        className:
                                          "mb-2 mt-0 font-display text-xl font-semibold text-textPrimary transition-colors duration-200 group-hover:text-primary",
                                        children: e.title,
                                      }),
                                      n.jsx("p", {
                                        className:
                                          "mb-3 text-sm leading-relaxed text-textSecondary",
                                        children: e.description,
                                      }),
                                      (0, n.jsxs)("div", {
                                        className:
                                          "flex items-center justify-between",
                                        children: [
                                          (0, n.jsxs)("span", {
                                            className:
                                              "inline-flex items-center gap-1.5 rounded-full bg-surfaceElevated px-3 py-1 text-xs font-medium text-textMuted",
                                            children: [
                                              n.jsx(d.J, {
                                                name: "clock",
                                                size: "sm",
                                              }),
                                              e.duration,
                                            ],
                                          }),
                                          (0, n.jsxs)("span", {
                                            className:
                                              "inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100",
                                            children: [
                                              m.explore,
                                              n.jsx(d.J, {
                                                name: "chevron-right",
                                                size: "sm",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      },
                      e.id,
                    );
                  }),
                  (0, n.jsxs)("div", {
                    className: "relative pb-2",
                    children: [
                      n.jsx("div", {
                        className:
                          "absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-accentYellow/80 to-secondaryGreen shadow-elevated md:left-1/2",
                        "aria-hidden": "true",
                        children: n.jsx(d.J, {
                          name: "star",
                          size: "md",
                          className: "text-primary",
                        }),
                      }),
                      n.jsx(l.b, {
                        delay: 0.1 * t.length,
                        className:
                          "pl-16 md:mx-auto md:max-w-md md:pl-0 md:pt-2 md:text-center",
                        children: n.jsx("div", {
                          className:
                            "rounded-2xl border border-primaryGreen/30 bg-surfaceElevated/50 px-6 py-5 shadow-soft backdrop-blur-sm md:mt-8",
                          children: (0, n.jsxs)("p", {
                            className: "mb-0 text-sm text-textSecondary",
                            children: [
                              n.jsx("strong", {
                                className: "text-textPrimary",
                                children: m.endingTitle,
                              }),
                              " ",
                              m.endingBody,
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
      },
      6258: (e, r, t) => {
        "use strict";
        t.d(r, { b: () => n });
        let n = (0, t(8570).createProxy)(
          String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\components\AnimateIn.tsx#AnimateIn`,
        );
      },
      4557: (e, r, t) => {
        "use strict";
        t.d(r, { a: () => n });
        let n = (0, t(8570).createProxy)(
          String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\components\Breadcrumb.tsx#Breadcrumb`,
        );
      },
      2095: (e, r, t) => {
        "use strict";
        t.d(r, { J: () => i });
        var n = t(9510);
        let a = { sm: "h-4 w-4", md: "h-5 w-5", lg: "h-6 w-6" },
          s = {
            home: n.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
            }),
            book: n.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25",
            }),
            search: n.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
            }),
            "map-pin": (0, n.jsxs)(n.Fragment, {
              children: [
                n.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
                }),
                n.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z",
                }),
              ],
            }),
            menu: n.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",
            }),
            x: n.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M6 18 18 6M6 6l12 12",
            }),
            "external-link": n.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25",
            }),
            "chevron-right": n.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "m8.25 4.5 7.5 7.5-7.5 7.5",
            }),
            "chevron-down": n.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "m19.5 8.25-7.5 7.5-7.5-7.5",
            }),
            clock: n.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
            }),
            check: n.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "m4.5 12.75 6 6 9-13.5",
            }),
            info: n.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z",
            }),
            "alert-triangle": n.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z",
            }),
            "alert-circle": n.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z",
            }),
            lightbulb: n.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
            }),
            globe: n.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418",
            }),
            play: n.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z",
            }),
            "file-text": n.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z",
            }),
            users: n.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z",
            }),
            download: n.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3",
            }),
            star: n.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z",
            }),
          };
        function i({ name: e, size: r = "md", className: t = "", label: i }) {
          let o = !i;
          return n.jsx("svg", {
            className: `${a[r]} ${t}`,
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            "aria-hidden": o ? "true" : void 0,
            "aria-label": i,
            role: i ? "img" : void 0,
            focusable: "false",
            children: s[e],
          });
        }
      },
      4745: (e, r, t) => {
        "use strict";
        t.d(r, {
          $d: () => L,
          Ei: () => g,
          IY: () => m,
          Jz: () => b,
          MB: () => w,
          NI: () => v,
          V3: () => f,
          Zb: () => x,
          aQ: () => k,
          fY: () => j,
          hS: () => u,
          hf: () => h,
          ik: () => M,
          tw: () => y,
        });
        var n = t(2048),
          a = t(5315),
          s = t(9306);
        let i = a.join(process.cwd(), "content");
        function o(e) {
          return JSON.parse(n.readFileSync(e, "utf-8"));
        }
        function d(e) {
          return a.join(i, e);
        }
        function l(e, r) {
          let t = a.join(d(e), r);
          return n.existsSync(t) ? t : a.join(d(s.ZW), r);
        }
        function c(e, r) {
          let t = a.join(d(s.ZW), r),
            i = a.join(d(e), r),
            c = new Set();
          if (n.existsSync(t))
            for (let e of n.readdirSync(t)) e.endsWith(".json") && c.add(e);
          if (n.existsSync(i))
            for (let e of n.readdirSync(i)) e.endsWith(".json") && c.add(e);
          return Array.from(c).map((t) => o(l(e, a.join(r, t))));
        }
        function u(e = s.ZW) {
          return o(l(e, "stages.json"));
        }
        function m(e, r = s.ZW) {
          return u(r).find((r) => r.id === e);
        }
        function p(e = s.ZW) {
          return c(e, "steps");
        }
        function x(e, r = s.ZW) {
          return p(r).find((r) => r.id === e);
        }
        function h(e, r = s.ZW) {
          return p(r).find((r) => r.slug === e);
        }
        function f(e, r = s.ZW) {
          let t = m(e, r);
          return t
            ? t.stepIds.map((e) => x(e, r)).filter((e) => void 0 !== e)
            : [];
        }
        function v(e = s.ZW) {
          return c(e, "topics");
        }
        function j(e, r = s.ZW) {
          return v(r).find((r) => r.id === e);
        }
        function b(e, r = s.ZW) {
          return v(r).find((r) => (r.slug ?? r.id) === e);
        }
        function g(e = s.ZW) {
          return o(l(e, "glossary.json")).sort((e, r) =>
            e.term.localeCompare(r.term),
          );
        }
        function k(e, r = s.ZW) {
          return g(r).find((r) => r.id === e);
        }
        function y(e = s.ZW) {
          return o(l(e, "resources.json"));
        }
        function w(e, r = s.ZW) {
          return y(r).find((r) => r.id === e);
        }
        function L(e, r = s.ZW) {
          return y(r).filter((r) => r.relatedTopicIds.includes(e));
        }
        function M(e = s.ZW) {
          return o(l(e, "masjids.json"));
        }
      },
      3219: (e, r, t) => {
        "use strict";
        t.d(r, { r: () => a });
        var n = t(9306);
        function a(e, r) {
          let t = (0, n.Ty)(e);
          return {
            title: t(`metadata.${r}.title`),
            description: t(`metadata.${r}.description`),
          };
        }
      },
      7371: (e, r, t) => {
        "use strict";
        t.d(r, { default: () => a.a });
        var n = t(1812),
          a = t.n(n);
      },
      1812: (e, r, t) => {
        "use strict";
        let { createProxy: n } = t(8570);
        e.exports = n(
          "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\node_modules\\next\\dist\\client\\link.js",
        );
      },
    }));
  var r = require("../../../webpack-runtime.js");
  r.C(e);
  var t = (e) => r((r.s = e)),
    n = r.X(0, [963, 496, 990, 710, 901], () => t(3505));
  module.exports = n;
})();
