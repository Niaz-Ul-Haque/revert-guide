(() => {
  var e = {};
  ((e.id = 126),
    (e.ids = [126]),
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
      5340: (e, r, t) => {
        "use strict";
        (t.r(r),
          t.d(r, {
            GlobalError: () => i.a,
            __next_app__: () => m,
            originalPathname: () => u,
            pages: () => c,
            routeModule: () => x,
            tree: () => d,
          }),
          t(3843),
          t(9475),
          t(6982),
          t(1506),
          t(5866));
        var s = t(3191),
          n = t(8716),
          a = t(7922),
          i = t.n(a),
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
                    "resources",
                    {
                      children: [
                        "__PAGE__",
                        {},
                        {
                          page: [
                            () => Promise.resolve().then(t.bind(t, 3843)),
                            "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\resources\\page.tsx",
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
            "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\resources\\page.tsx",
          ],
          u = "/[locale]/resources/page",
          m = { require: t, loadChunk: () => Promise.resolve() },
          x = new s.AppPageRouteModule({
            definition: {
              kind: n.x.APP_PAGE,
              page: "/[locale]/resources/page",
              pathname: "/[locale]/resources",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      6538: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 2904));
      },
      5829: (e, r, t) => {
        "use strict";
        t.d(r, { AnimateIn: () => a });
        var s = t(326),
          n = t(7577);
        function a({
          children: e,
          className: r = "",
          delay: t = 0,
          animation: a = "fade-up",
          threshold: i = 0.1,
        }) {
          let o = (0, n.useRef)(null),
            [l, d] = (0, n.useState)(!1);
          return s.jsx("div", {
            ref: o,
            className: `${r} ${l ? { "fade-up": "animate-fade-up", "fade-in": "animate-fade-in", "scale-in": "animate-scale-in", "slide-in-right": "animate-slide-in-right" }[a] : "opacity-0"}`,
            style: l && t > 0 ? { animationDelay: `${t}s` } : void 0,
            children: e,
          });
        }
      },
      3630: (e, r, t) => {
        "use strict";
        t.d(r, { Breadcrumb: () => i });
        var s = t(326),
          n = t(434),
          a = t(3082);
        function i({ items: e }) {
          let r = (0, a.T)();
          return 0 === e.length
            ? null
            : s.jsx("nav", {
                "aria-label": r("common.breadcrumb"),
                className: "mb-8",
                children: s.jsx("ol", {
                  className:
                    "mb-0 flex flex-wrap items-center gap-1.5 pl-0 text-sm",
                  children: e.map((r, t) => {
                    let a = t === e.length - 1;
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
                          a || !r.href
                            ? s.jsx("span", {
                                className: "font-medium text-textMuted",
                                "aria-current": a ? "page" : void 0,
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
          StepCard: () => o,
          TopicCard: () => l,
        });
        var s = t(326),
          n = t(434),
          a = t(8487);
        function i({ children: e, className: r = "", href: t }) {
          let a = `block rounded-2xl border border-border/60 bg-white p-6 shadow-card transition-all duration-300 ease-out-expo page-break-avoid ${r}`;
          return t
            ? s.jsx(n.default, {
                href: t,
                className: `${a} no-underline hover:border-primaryGreen/60 hover:shadow-card-hover hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong`,
                children: e,
              })
            : s.jsx("div", { className: a, children: e });
        }
        function o({ title: e, stepNumber: r, timeEstimate: t, href: n }) {
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
        function l({ title: e, description: r, href: t, icon: n }) {
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
          description: r,
          type: t,
          url: n,
          locale: o = "en",
        }) {
          let l = (0, a.Ty)(o),
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
                        className: `inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${d[t]}`,
                        children: l(`resources.types.${t}`),
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
                      l(
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
      2904: (e, r, t) => {
        "use strict";
        t.d(r, { ResourcesPageClient: () => m });
        var s = t(326),
          n = t(7577),
          a = t(434),
          i = t(3630),
          o = t(2262),
          l = t(1365),
          d = t(5829),
          c = t(8487);
        let u = [
          { label: "All", value: "all" },
          { label: "Articles", value: "article" },
          { label: "Videos", value: "video" },
          { label: "Apps", value: "app" },
          { label: "Books", value: "book" },
          { label: "Community", value: "community" },
          { label: "PDF", value: "pdf" },
        ];
        function m({ locale: e, resources: r }) {
          let [t, m] = (0, n.useState)("all"),
            x = (0, n.useMemo)(
              () => ("all" === t ? r : r.filter((e) => e.type === t)),
              [t, r],
            );
          return (0, s.jsxs)("div", {
            className: "mx-auto max-w-5xl px-5 py-10",
            children: [
              s.jsx(i.Breadcrumb, {
                items: [
                  { label: "Home", href: (0, c.FT)(e, "/") },
                  { label: "Resources" },
                ],
              }),
              s.jsx("header", {
                className: "mb-8",
                children: (0, s.jsxs)(d.AnimateIn, {
                  children: [
                    s.jsx("h1", {
                      className:
                        "mb-3 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl",
                      children: "Resources",
                    }),
                    s.jsx("p", {
                      className: "text-lg text-textSecondary",
                      children:
                        "Curated books, videos, apps, and communities to support your journey.",
                    }),
                  ],
                }),
              }),
              s.jsx(d.AnimateIn, {
                delay: 0.1,
                children: (0, s.jsxs)(a.default, {
                  href: (0, c.FT)(e, "/resources/find-masjid"),
                  className:
                    "group mb-10 flex items-center gap-5 rounded-2xl border border-primary/20 bg-gradient-to-r from-surfaceElevated to-white p-6 no-underline shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-elevated focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong",
                  children: [
                    s.jsx("span", {
                      className:
                        "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primaryHover text-white shadow-soft transition-transform duration-300 group-hover:scale-110",
                      children: s.jsx(l.J, { name: "map-pin", size: "lg" }),
                    }),
                    (0, s.jsxs)("div", {
                      className: "min-w-0 flex-1",
                      children: [
                        s.jsx("p", {
                          className:
                            "mb-0.5 text-lg font-bold text-textPrimary",
                          children: "Find a Masjid",
                        }),
                        s.jsx("p", {
                          className: "mb-0 text-sm text-textSecondary",
                          children:
                            "Search for mosques in the Toronto area and connect with your local community.",
                        }),
                      ],
                    }),
                    s.jsx(l.J, {
                      name: "chevron-right",
                      size: "md",
                      className:
                        "shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1",
                    }),
                  ],
                }),
              }),
              s.jsx(d.AnimateIn, {
                delay: 0.15,
                children: s.jsx("div", {
                  className: "mb-8 flex flex-wrap gap-2",
                  role: "group",
                  "aria-label": "Filter resources by category",
                  children: u.map((e) =>
                    s.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => m(e.value),
                        "aria-pressed": t === e.value,
                        className: `rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong ${t === e.value ? "bg-primary text-white shadow-soft" : "border border-border/60 bg-white text-textSecondary hover:border-primaryGreen/50 hover:bg-surfaceElevated hover:text-primary"}`,
                        children: e.label,
                      },
                      e.value,
                    ),
                  ),
                }),
              }),
              s.jsx("div", {
                "aria-live": "polite",
                className: "sr-only",
                children: `${x.length} ${1 === x.length ? "resource shown" : "resources shown"}`,
              }),
              0 === x.length
                ? (0, s.jsxs)("div", {
                    className:
                      "rounded-2xl border border-border/60 bg-surfaceElevated/50 px-6 py-14 text-center",
                    children: [
                      s.jsx("p", {
                        className:
                          "mb-2 font-display text-lg font-semibold text-textPrimary",
                        children: "No resources in this category",
                      }),
                      (0, s.jsxs)("p", {
                        className: "mb-0 text-sm text-textSecondary",
                        children: [
                          "Try selecting a different category or",
                          " ",
                          s.jsx("button", {
                            type: "button",
                            onClick: () => m("all"),
                            className:
                              "font-medium text-primary underline hover:text-primaryHover",
                            children: "view all resources",
                          }),
                          ".",
                        ],
                      }),
                    ],
                  })
                : s.jsx("div", {
                    className: "grid gap-5 sm:grid-cols-2",
                    children: x.map((r) =>
                      s.jsx(
                        o.ResourceCard,
                        {
                          title: r.title,
                          description: r.description,
                          type: r.type,
                          url: r.url,
                          locale: e,
                        },
                        r.id,
                      ),
                    ),
                  }),
            ],
          });
        }
      },
      3843: (e, r, t) => {
        "use strict";
        (t.r(r), t.d(r, { default: () => l, generateMetadata: () => o }));
        var s = t(9510);
        let n = (0, t(8570).createProxy)(
          String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\components\ResourcesPageClient.tsx#ResourcesPageClient`,
        );
        var a = t(4745),
          i = t(3219);
        function o({ params: e }) {
          return (0, i.r)(e.locale, "resources");
        }
        function l({ params: e }) {
          return s.jsx(n, { locale: e.locale, resources: (0, a.tw)(e.locale) });
        }
      },
      4745: (e, r, t) => {
        "use strict";
        t.d(r, {
          $d: () => k,
          Ei: () => y,
          IY: () => m,
          Jz: () => g,
          MB: () => N,
          NI: () => v,
          V3: () => h,
          Zb: () => p,
          aQ: () => j,
          fY: () => b,
          hS: () => u,
          hf: () => f,
          ik: () => S,
          tw: () => w,
        });
        var s = t(2048),
          n = t(5315),
          a = t(9306);
        let i = n.join(process.cwd(), "content");
        function o(e) {
          return JSON.parse(s.readFileSync(e, "utf-8"));
        }
        function l(e) {
          return n.join(i, e);
        }
        function d(e, r) {
          let t = n.join(l(e), r);
          return s.existsSync(t) ? t : n.join(l(a.ZW), r);
        }
        function c(e, r) {
          let t = n.join(l(a.ZW), r),
            i = n.join(l(e), r),
            c = new Set();
          if (s.existsSync(t))
            for (let e of s.readdirSync(t)) e.endsWith(".json") && c.add(e);
          if (s.existsSync(i))
            for (let e of s.readdirSync(i)) e.endsWith(".json") && c.add(e);
          return Array.from(c).map((t) => o(d(e, n.join(r, t))));
        }
        function u(e = a.ZW) {
          return o(d(e, "stages.json"));
        }
        function m(e, r = a.ZW) {
          return u(r).find((r) => r.id === e);
        }
        function x(e = a.ZW) {
          return c(e, "steps");
        }
        function p(e, r = a.ZW) {
          return x(r).find((r) => r.id === e);
        }
        function f(e, r = a.ZW) {
          return x(r).find((r) => r.slug === e);
        }
        function h(e, r = a.ZW) {
          let t = m(e, r);
          return t
            ? t.stepIds.map((e) => p(e, r)).filter((e) => void 0 !== e)
            : [];
        }
        function v(e = a.ZW) {
          return c(e, "topics");
        }
        function b(e, r = a.ZW) {
          return v(r).find((r) => r.id === e);
        }
        function g(e, r = a.ZW) {
          return v(r).find((r) => (r.slug ?? r.id) === e);
        }
        function y(e = a.ZW) {
          return o(d(e, "glossary.json")).sort((e, r) =>
            e.term.localeCompare(r.term),
          );
        }
        function j(e, r = a.ZW) {
          return y(r).find((r) => r.id === e);
        }
        function w(e = a.ZW) {
          return o(d(e, "resources.json"));
        }
        function N(e, r = a.ZW) {
          return w(r).find((r) => r.id === e);
        }
        function k(e, r = a.ZW) {
          return w(r).filter((r) => r.relatedTopicIds.includes(e));
        }
        function S(e = a.ZW) {
          return o(d(e, "masjids.json"));
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
    }));
  var r = require("../../../webpack-runtime.js");
  r.C(e);
  var t = (e) => r((r.s = e)),
    s = r.X(0, [963, 496, 990, 901], () => t(5340));
  module.exports = s;
})();
