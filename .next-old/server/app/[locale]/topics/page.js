(() => {
  var e = {};
  ((e.id = 79),
    (e.ids = [79]),
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
      6998: (e, r, t) => {
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
          t(7255),
          t(9475),
          t(6982),
          t(1506),
          t(5866));
        var s = t(3191),
          n = t(8716),
          o = t(7922),
          i = t.n(o),
          a = t(5231),
          d = {};
        for (let e in a)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "originalPathname",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (d[e] = () => a[e]);
        t.d(r, d);
        let l = [
            "",
            {
              children: [
                "[locale]",
                {
                  children: [
                    "topics",
                    {
                      children: [
                        "__PAGE__",
                        {},
                        {
                          page: [
                            () => Promise.resolve().then(t.bind(t, 7255)),
                            "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\topics\\page.tsx",
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
            "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\topics\\page.tsx",
          ],
          u = "/[locale]/topics/page",
          m = { require: t, loadChunk: () => Promise.resolve() },
          p = new s.AppPageRouteModule({
            definition: {
              kind: n.x.APP_PAGE,
              page: "/[locale]/topics/page",
              pathname: "/[locale]/topics",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: l },
          });
      },
      3439: (e, r, t) => {
        (Promise.resolve().then(t.bind(t, 5829)),
          Promise.resolve().then(t.bind(t, 3630)),
          Promise.resolve().then(t.bind(t, 2262)),
          Promise.resolve().then(t.t.bind(t, 2481, 23)),
          Promise.resolve().then(t.t.bind(t, 9404, 23)));
      },
      5829: (e, r, t) => {
        "use strict";
        t.d(r, { AnimateIn: () => o });
        var s = t(326),
          n = t(7577);
        function o({
          children: e,
          className: r = "",
          delay: t = 0,
          animation: o = "fade-up",
          threshold: i = 0.1,
        }) {
          let a = (0, n.useRef)(null),
            [d, l] = (0, n.useState)(!1);
          return s.jsx("div", {
            ref: a,
            className: `${r} ${d ? { "fade-up": "animate-fade-up", "fade-in": "animate-fade-in", "scale-in": "animate-scale-in", "slide-in-right": "animate-slide-in-right" }[o] : "opacity-0"}`,
            style: d && t > 0 ? { animationDelay: `${t}s` } : void 0,
            children: e,
          });
        }
      },
      3630: (e, r, t) => {
        "use strict";
        t.d(r, { Breadcrumb: () => i });
        var s = t(326),
          n = t(434),
          o = t(3082);
        function i({ items: e }) {
          let r = (0, o.T)();
          return 0 === e.length
            ? null
            : s.jsx("nav", {
                "aria-label": r("common.breadcrumb"),
                className: "mb-8",
                children: s.jsx("ol", {
                  className:
                    "mb-0 flex flex-wrap items-center gap-1.5 pl-0 text-sm",
                  children: e.map((r, t) => {
                    let o = t === e.length - 1;
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
                          o || !r.href
                            ? s.jsx("span", {
                                className: "font-medium text-textMuted",
                                "aria-current": o ? "page" : void 0,
                                children: r.label,
                              })
                            : s.jsx(n.default, {
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
      2262: (e, r, t) => {
        "use strict";
        t.d(r, {
          ResourceCard: () => c,
          StepCard: () => a,
          TopicCard: () => d,
        });
        var s = t(326),
          n = t(434),
          o = t(8487);
        function i({ children: e, className: r = "", href: t }) {
          let o = `block rounded-2xl border border-border/60 bg-white p-6 shadow-card transition-all duration-300 ease-out-expo page-break-avoid ${r}`;
          return t
            ? s.jsx(n.default, {
                href: t,
                className: `${o} no-underline hover:border-primaryGreen/60 hover:shadow-card-hover hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong`,
                children: e,
              })
            : s.jsx("div", { className: o, children: e });
        }
        function a({ title: e, stepNumber: r, timeEstimate: t, href: n }) {
          return s.jsx(i, {
            href: n,
            className: "group",
            children: (0, s.jsxs)("div", {
              className: "flex items-center gap-4",
              children: [
                s.jsx("span", {
                  className:
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primaryHover text-sm font-bold text-white shadow-soft transition-transform duration-300 group-hover:scale-110",
                  "aria-hidden": "true",
                  children: r,
                }),
                (0, s.jsxs)("div", {
                  className: "min-w-0 flex-1",
                  children: [
                    s.jsx("h4", {
                      className:
                        "mb-0 mt-0 text-base font-semibold text-textPrimary",
                      children: e,
                    }),
                    t &&
                      s.jsx("span", {
                        className: "mt-0.5 block text-xs text-textMuted",
                        children: t,
                      }),
                  ],
                }),
                s.jsx("svg", {
                  className:
                    "h-5 w-5 shrink-0 text-border transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  strokeWidth: 1.5,
                  stroke: "currentColor",
                  "aria-hidden": "true",
                  children: s.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "m8.25 4.5 7.5 7.5-7.5 7.5",
                  }),
                }),
              ],
            }),
          });
        }
        function d({ title: e, description: r, href: t, icon: n }) {
          return (0, s.jsxs)(i, {
            href: t,
            className: "group relative overflow-hidden",
            children: [
              s.jsx("div", {
                className:
                  "pointer-events-none absolute inset-0 bg-gradient-to-br from-primaryGreen/0 to-primaryGreen/0 transition-all duration-500 group-hover:from-primaryGreen/5 group-hover:to-transparent",
                "aria-hidden": "true",
              }),
              (0, s.jsxs)("div", {
                className: "relative flex items-start gap-4",
                children: [
                  n &&
                    s.jsx("span", {
                      className:
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surfaceElevated text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white",
                      "aria-hidden": "true",
                      children: n,
                    }),
                  (0, s.jsxs)("div", {
                    className: "min-w-0 flex-1",
                    children: [
                      s.jsx("h3", {
                        className:
                          "mb-1 mt-0 text-lg font-semibold text-textPrimary",
                        children: e,
                      }),
                      s.jsx("p", {
                        className:
                          "mb-0 text-sm leading-relaxed text-textSecondary",
                        children: r,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        let l = {
          article: "bg-primary/10 text-primary",
          video: "bg-accent/10 text-accent",
          book: "bg-primaryGreen/30 text-primaryHover",
          app: "bg-secondaryGreen/30 text-accent",
          community: "bg-surfaceElevated text-primary",
          pdf: "bg-oliveAccent/20 text-accent",
        };
        function c({
          title: e,
          description: r,
          type: t,
          url: n,
          locale: a = "en",
        }) {
          let d = (0, o.Ty)(a),
            c = n.startsWith("http");
          return s.jsx(i, {
            className: "group",
            children: s.jsx("div", {
              className: "flex items-start justify-between gap-3",
              children: (0, s.jsxs)("div", {
                className: "min-w-0 flex-1",
                children: [
                  (0, s.jsxs)("div", {
                    className: "mb-2.5 flex flex-wrap items-center gap-2",
                    children: [
                      s.jsx("h3", {
                        className:
                          "mb-0 mt-0 text-base font-semibold text-textPrimary",
                        children: e,
                      }),
                      s.jsx("span", {
                        className: `inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${l[t]}`,
                        children: d(`resources.types.${t}`),
                      }),
                    ],
                  }),
                  s.jsx("p", {
                    className:
                      "mb-3 text-sm leading-relaxed text-textSecondary",
                    children: r,
                  }),
                  (0, s.jsxs)("a", {
                    href: n,
                    className:
                      "inline-flex items-center gap-1.5 rounded-lg bg-surfaceElevated px-3 py-1.5 text-sm font-medium text-primary no-underline transition-all duration-200 hover:bg-primary/15 hover:text-primaryHover",
                    ...(c
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {}),
                    children: [
                      d(
                        c
                          ? "resources.visitResource"
                          : "resources.viewResource",
                      ),
                      c &&
                        s.jsx("svg", {
                          className: "h-3.5 w-3.5",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: 2,
                          stroke: "currentColor",
                          "aria-hidden": "true",
                          children: s.jsx("path", {
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
      7255: (e, r, t) => {
        "use strict";
        (t.r(r), t.d(r, { default: () => f, generateMetadata: () => h }));
        var s = t(9510),
          n = t(7710),
          o = t(7371),
          i = t(4745),
          a = t(4557),
          d = t(5899),
          l = t(2095),
          c = t(6258),
          u = t(9306),
          m = t(3219);
        let p = {
            prayer: "star",
            purification: "check",
            quran: "book",
            beliefs: "lightbulb",
            fasting: "clock",
            character: "users",
            community: "globe",
          },
          x = {
            title: "Topics",
            description:
              "Explore guides on specific subjects to deepen your understanding. Each topic is self-contained - start with whatever interests you most.",
            gridLabel: "Topic guides",
            footerPrefix: "Looking for a step-by-step path?",
            footerRoadmap: "Follow the Roadmap",
            footerGlossaryPrefix: "Need a quick term lookup?",
            footerGlossary: "Check the Glossary",
          };
        function h({ params: e }) {
          return (0, m.r)(e.locale, "topics");
        }
        function f({ params: e }) {
          let r = e.locale,
            t = (0, i.NI)(r);
          return (0, s.jsxs)("div", {
            className: "mx-auto max-w-5xl px-5 py-10",
            children: [
              s.jsx(a.a, {
                items: [
                  { label: "Home", href: (0, u.FT)(r, "/") },
                  { label: x.title },
                ],
              }),
              (0, s.jsxs)("header", {
                className: "relative mb-14 text-center",
                children: [
                  (0, s.jsxs)(c.b, {
                    children: [
                      s.jsx("h1", {
                        className:
                          "mb-4 font-display text-4xl font-semibold tracking-tight text-textPrimary md:text-5xl",
                        children: x.title,
                      }),
                      s.jsx("p", {
                        className:
                          "mx-auto max-w-2xl text-lg text-textSecondary",
                        children: x.description,
                      }),
                    ],
                  }),
                  s.jsx("div", {
                    className:
                      "pointer-events-none absolute -left-10 top-0 hidden h-36 w-28 opacity-10 lg:block",
                    "aria-hidden": "true",
                    children: s.jsx(n.default, {
                      src: "/Adult male Character Standing.png",
                      alt: "",
                      fill: !0,
                      className: "object-contain",
                    }),
                  }),
                ],
              }),
              s.jsx("div", {
                className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
                role: "list",
                "aria-label": x.gridLabel,
                children: t.map((e, t) =>
                  s.jsx(
                    c.b,
                    {
                      delay: 0.07 * t,
                      className: "h-full",
                      children: s.jsx("div", {
                        role: "listitem",
                        className: "h-full",
                        children: s.jsx(d.uX, {
                          title: e.title,
                          description: e.description,
                          href: (0, u.FT)(r, `/topics/${e.id}`),
                          icon: p[e.id]
                            ? s.jsx(l.J, { name: p[e.id], size: "md" })
                            : void 0,
                        }),
                      }),
                    },
                    e.id,
                  ),
                ),
              }),
              s.jsx(c.b, {
                className: "mx-auto mt-12 max-w-2xl text-center",
                children: (0, s.jsxs)("p", {
                  className: "text-sm text-textSecondary",
                  children: [
                    x.footerPrefix,
                    " ",
                    s.jsx(o.default, {
                      href: (0, u.FT)(r, "/roadmap"),
                      className: "font-medium text-primary",
                      children: x.footerRoadmap,
                    }),
                    ". ",
                    x.footerGlossaryPrefix,
                    " ",
                    s.jsx(o.default, {
                      href: (0, u.FT)(r, "/glossary"),
                      className: "font-medium text-primary",
                      children: x.footerGlossary,
                    }),
                    ".",
                  ],
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
      5899: (e, r, t) => {
        "use strict";
        t.d(r, { PI: () => i, pq: () => n, uX: () => o });
        var s = t(8570);
        ((0, s.createProxy)(
          String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\components\Card.tsx#Card`,
        ),
          (0, s.createProxy)(
            String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\components\Card.tsx#StageCard`,
          ));
        let n = (0, s.createProxy)(
            String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\components\Card.tsx#StepCard`,
          ),
          o = (0, s.createProxy)(
            String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\components\Card.tsx#TopicCard`,
          ),
          i = (0, s.createProxy)(
            String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\components\Card.tsx#ResourceCard`,
          );
      },
      2095: (e, r, t) => {
        "use strict";
        t.d(r, { J: () => i });
        var s = t(9510);
        let n = { sm: "h-4 w-4", md: "h-5 w-5", lg: "h-6 w-6" },
          o = {
            home: s.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
            }),
            book: s.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25",
            }),
            search: s.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
            }),
            "map-pin": (0, s.jsxs)(s.Fragment, {
              children: [
                s.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
                }),
                s.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z",
                }),
              ],
            }),
            menu: s.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",
            }),
            x: s.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M6 18 18 6M6 6l12 12",
            }),
            "external-link": s.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25",
            }),
            "chevron-right": s.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "m8.25 4.5 7.5 7.5-7.5 7.5",
            }),
            "chevron-down": s.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "m19.5 8.25-7.5 7.5-7.5-7.5",
            }),
            clock: s.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
            }),
            check: s.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "m4.5 12.75 6 6 9-13.5",
            }),
            info: s.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z",
            }),
            "alert-triangle": s.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z",
            }),
            "alert-circle": s.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z",
            }),
            lightbulb: s.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
            }),
            globe: s.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418",
            }),
            play: s.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z",
            }),
            "file-text": s.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z",
            }),
            users: s.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z",
            }),
            download: s.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3",
            }),
            star: s.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z",
            }),
          };
        function i({ name: e, size: r = "md", className: t = "", label: i }) {
          let a = !i;
          return s.jsx("svg", {
            className: `${n[r]} ${t}`,
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            "aria-hidden": a ? "true" : void 0,
            "aria-label": i,
            role: i ? "img" : void 0,
            focusable: "false",
            children: o[e],
          });
        }
      },
      4745: (e, r, t) => {
        "use strict";
        t.d(r, {
          $d: () => L,
          Ei: () => k,
          IY: () => m,
          Jz: () => g,
          MB: () => w,
          NI: () => v,
          V3: () => f,
          Zb: () => x,
          aQ: () => b,
          fY: () => j,
          hS: () => u,
          hf: () => h,
          ik: () => N,
          tw: () => y,
        });
        var s = t(2048),
          n = t(5315),
          o = t(9306);
        let i = n.join(process.cwd(), "content");
        function a(e) {
          return JSON.parse(s.readFileSync(e, "utf-8"));
        }
        function d(e) {
          return n.join(i, e);
        }
        function l(e, r) {
          let t = n.join(d(e), r);
          return s.existsSync(t) ? t : n.join(d(o.ZW), r);
        }
        function c(e, r) {
          let t = n.join(d(o.ZW), r),
            i = n.join(d(e), r),
            c = new Set();
          if (s.existsSync(t))
            for (let e of s.readdirSync(t)) e.endsWith(".json") && c.add(e);
          if (s.existsSync(i))
            for (let e of s.readdirSync(i)) e.endsWith(".json") && c.add(e);
          return Array.from(c).map((t) => a(l(e, n.join(r, t))));
        }
        function u(e = o.ZW) {
          return a(l(e, "stages.json"));
        }
        function m(e, r = o.ZW) {
          return u(r).find((r) => r.id === e);
        }
        function p(e = o.ZW) {
          return c(e, "steps");
        }
        function x(e, r = o.ZW) {
          return p(r).find((r) => r.id === e);
        }
        function h(e, r = o.ZW) {
          return p(r).find((r) => r.slug === e);
        }
        function f(e, r = o.ZW) {
          let t = m(e, r);
          return t
            ? t.stepIds.map((e) => x(e, r)).filter((e) => void 0 !== e)
            : [];
        }
        function v(e = o.ZW) {
          return c(e, "topics");
        }
        function j(e, r = o.ZW) {
          return v(r).find((r) => r.id === e);
        }
        function g(e, r = o.ZW) {
          return v(r).find((r) => (r.slug ?? r.id) === e);
        }
        function k(e = o.ZW) {
          return a(l(e, "glossary.json")).sort((e, r) =>
            e.term.localeCompare(r.term),
          );
        }
        function b(e, r = o.ZW) {
          return k(r).find((r) => r.id === e);
        }
        function y(e = o.ZW) {
          return a(l(e, "resources.json"));
        }
        function w(e, r = o.ZW) {
          return y(r).find((r) => r.id === e);
        }
        function L(e, r = o.ZW) {
          return y(r).filter((r) => r.relatedTopicIds.includes(e));
        }
        function N(e = o.ZW) {
          return a(l(e, "masjids.json"));
        }
      },
      3219: (e, r, t) => {
        "use strict";
        t.d(r, { r: () => n });
        var s = t(9306);
        function n(e, r) {
          let t = (0, s.Ty)(e);
          return {
            title: t(`metadata.${r}.title`),
            description: t(`metadata.${r}.description`),
          };
        }
      },
      7371: (e, r, t) => {
        "use strict";
        t.d(r, { default: () => n.a });
        var s = t(1812),
          n = t.n(s);
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
    s = r.X(0, [963, 496, 990, 710, 901], () => t(6998));
  module.exports = s;
})();
