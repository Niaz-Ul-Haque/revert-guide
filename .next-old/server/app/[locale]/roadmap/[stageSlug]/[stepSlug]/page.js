(() => {
  var e = {};
  ((e.id = 650),
    (e.ids = [650]),
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
      7005: (e, t, s) => {
        "use strict";
        (s.r(t),
          s.d(t, {
            GlobalError: () => i.a,
            __next_app__: () => m,
            originalPathname: () => x,
            pages: () => c,
            routeModule: () => h,
            tree: () => d,
          }),
          s(9834),
          s(9475),
          s(6982),
          s(1506),
          s(5866));
        var r = s(3191),
          a = s(8716),
          l = s(7922),
          i = s.n(l),
          n = s(5231),
          o = {};
        for (let e in n)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "originalPathname",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (o[e] = () => n[e]);
        s.d(t, o);
        let d = [
            "",
            {
              children: [
                "[locale]",
                {
                  children: [
                    "roadmap",
                    {
                      children: [
                        "[stageSlug]",
                        {
                          children: [
                            "[stepSlug]",
                            {
                              children: [
                                "__PAGE__",
                                {},
                                {
                                  page: [
                                    () =>
                                      Promise.resolve().then(s.bind(s, 9834)),
                                    "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\roadmap\\[stageSlug]\\[stepSlug]\\page.tsx",
                                  ],
                                },
                              ],
                            },
                            {},
                          ],
                        },
                        {},
                      ],
                    },
                    {},
                  ],
                },
                {
                  layout: [
                    () => Promise.resolve().then(s.bind(s, 9475)),
                    "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\layout.tsx",
                  ],
                  "not-found": [
                    () => Promise.resolve().then(s.bind(s, 6982)),
                    "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\not-found.tsx",
                  ],
                },
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(s.bind(s, 1506)),
                "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\layout.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(s.t.bind(s, 5866, 23)),
                "next/dist/client/components/not-found-error",
              ],
            },
          ],
          c = [
            "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\roadmap\\[stageSlug]\\[stepSlug]\\page.tsx",
          ],
          x = "/[locale]/roadmap/[stageSlug]/[stepSlug]/page",
          m = { require: s, loadChunk: () => Promise.resolve() },
          h = new r.AppPageRouteModule({
            definition: {
              kind: a.x.APP_PAGE,
              page: "/[locale]/roadmap/[stageSlug]/[stepSlug]/page",
              pathname: "/[locale]/roadmap/[stageSlug]/[stepSlug]",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      852: (e, t, s) => {
        (Promise.resolve().then(s.bind(s, 8999)),
          Promise.resolve().then(s.bind(s, 5829)),
          Promise.resolve().then(s.bind(s, 3630)),
          Promise.resolve().then(s.bind(s, 2262)),
          Promise.resolve().then(s.t.bind(s, 9404, 23)));
      },
      9834: (e, t, s) => {
        "use strict";
        (s.r(t),
          s.d(t, {
            default: () => f,
            generateMetadata: () => b,
            generateStaticParams: () => u,
          }));
        var r = s(9510),
          a = s(8585),
          l = s(7371),
          i = s(4557),
          n = s(4486),
          o = s(4627),
          d = s(5899),
          c = s(5769),
          x = s(2095),
          m = s(6258),
          h = s(4745),
          p = s(9306);
        let g = {
          stepLabel: "Step",
          whyThisStepMatters: "Why This Step Matters",
          exactActions: "Exact Actions",
          commonObstacles: "Common Obstacles",
          tinyVersion: "Tiny Version",
          whatUnlocksNext: "What Unlocks Next",
          recommendedResources: "Recommended Resources",
          relatedTopics: "Related Topics",
          navigationAriaLabel: "Step navigation",
          previous: "Previous",
          next: "Next",
        };
        function u({ params: e }) {
          let t = [];
          for (let s of (0, h.hS)(e.locale))
            for (let r of (0, h.V3)(s.id, e.locale))
              t.push({ stageSlug: s.id, stepSlug: r.slug });
          return t;
        }
        function b({ params: e }) {
          let t = (0, h.hf)(e.stepSlug, e.locale);
          return {
            title: t
              ? `${t.title} - Revert Guide`
              : "Step Not Found - Revert Guide",
          };
        }
        function f({ params: e }) {
          let { locale: t, stageSlug: s, stepSlug: u } = e,
            b = (0, h.IY)(s, t);
          b || (0, a.notFound)();
          let f = (0, h.hf)(u, t);
          (f && f.stageId === b.id) || (0, a.notFound)();
          let j = (0, h.hS)(t).flatMap((e) =>
              (0, h.V3)(e.id, t).map((t) => ({ step: t, stageId: e.id })),
            ),
            v = j.findIndex((e) => e.step.id === f.id),
            y = v > 0 ? j[v - 1] : null,
            N = v < j.length - 1 ? j[v + 1] : null,
            w = f.resourceIds
              .map((e) => (0, h.MB)(e, t))
              .filter((e) => void 0 !== e),
            k = f.relatedTopicIds
              .map((e) => (0, h.fY)(e, t))
              .filter((e) => void 0 !== e),
            S = f.relatedGlossaryIds
              .map((e) => (0, h.aQ)(e, t))
              .filter((e) => void 0 !== e);
          return (0, r.jsxs)("div", {
            className: "mx-auto max-w-4xl px-5 py-10",
            children: [
              r.jsx(i.a, {
                items: [
                  { label: "Home", href: (0, p.FT)(t, "/") },
                  { label: "Roadmap", href: (0, p.FT)(t, "/roadmap") },
                  { label: b.title, href: (0, p.FT)(t, `/roadmap/${b.id}`) },
                  { label: f.title },
                ],
              }),
              r.jsx(m.b, {
                children: (0, r.jsxs)("header", {
                  className: "mb-12",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "mb-4 flex flex-wrap items-center gap-3",
                      children: [
                        (0, r.jsxs)("span", {
                          className:
                            "inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-primaryHover px-4 py-1.5 text-xs font-bold text-white shadow-soft",
                          children: [g.stepLabel, " ", v + 1],
                        }),
                        r.jsx("span", {
                          className:
                            "inline-flex items-center gap-1.5 rounded-full bg-surfaceElevated px-3 py-1.5 text-xs font-medium text-textMuted",
                          children: b.title,
                        }),
                        (0, r.jsxs)("span", {
                          className:
                            "inline-flex items-center gap-1.5 text-xs text-textMuted",
                          children: [
                            r.jsx(x.J, { name: "clock", size: "sm" }),
                            f.timeEstimate,
                          ],
                        }),
                      ],
                    }),
                    r.jsx("h1", {
                      className:
                        "mb-0 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl",
                      children: f.title,
                    }),
                  ],
                }),
              }),
              r.jsx(m.b, {
                children: (0, r.jsxs)("section", {
                  className: "mb-12",
                  "aria-labelledby": "why-heading",
                  children: [
                    r.jsx("h2", {
                      id: "why-heading",
                      className:
                        "mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                      children: g.whyThisStepMatters,
                    }),
                    r.jsx("p", {
                      className: "text-base leading-relaxed text-textSecondary",
                      children: f.whyMatters,
                    }),
                  ],
                }),
              }),
              (0, r.jsxs)("section", {
                className: "mb-12",
                "aria-labelledby": "actions-heading",
                children: [
                  r.jsx(m.b, {
                    children: r.jsx("h2", {
                      id: "actions-heading",
                      className:
                        "mb-6 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                      children: g.exactActions,
                    }),
                  }),
                  r.jsx("ol", {
                    className: "flex flex-col gap-6 pl-0",
                    children: f.exactActions.map((e, t) =>
                      r.jsx(
                        m.b,
                        {
                          delay: 0.06 * t,
                          children: (0, r.jsxs)("li", {
                            className: "flex gap-4",
                            children: [
                              r.jsx("span", {
                                className:
                                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primaryHover text-sm font-bold text-white shadow-soft",
                                "aria-hidden": "true",
                                children: t + 1,
                              }),
                              (0, r.jsxs)("div", {
                                className: "min-w-0 flex-1",
                                children: [
                                  r.jsx("p", {
                                    className:
                                      "mb-1 text-base font-semibold text-textPrimary",
                                    children: e.text,
                                  }),
                                  e.subSteps &&
                                    e.subSteps.length > 0 &&
                                    r.jsx("ul", {
                                      className:
                                        "mb-0 mt-3 flex flex-col gap-2 pl-0",
                                      children: e.subSteps.map((e) =>
                                        (0, r.jsxs)(
                                          "li",
                                          {
                                            className:
                                              "flex items-start gap-2.5 text-sm text-textSecondary",
                                            children: [
                                              r.jsx("span", {
                                                className:
                                                  "mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-primaryGreen",
                                                "aria-hidden": "true",
                                              }),
                                              r.jsx("span", { children: e }),
                                            ],
                                          },
                                          e,
                                        ),
                                      ),
                                    }),
                                ],
                              }),
                            ],
                          }),
                        },
                        `${e.text}-${t}`,
                      ),
                    ),
                  }),
                ],
              }),
              f.obstacles.length > 0 &&
                (0, r.jsxs)("section", {
                  className: "mb-12",
                  "aria-labelledby": "obstacles-heading",
                  children: [
                    r.jsx(m.b, {
                      children: r.jsx("h2", {
                        id: "obstacles-heading",
                        className:
                          "mb-5 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                        children: g.commonObstacles,
                      }),
                    }),
                    r.jsx("div", {
                      className: "flex flex-col gap-3",
                      children: f.obstacles.map((e, t) =>
                        r.jsx(
                          m.b,
                          {
                            delay: 0.05 * t,
                            children: r.jsx(n.U, {
                              title: e.problem,
                              children: r.jsx("p", {
                                className:
                                  "mb-0 text-sm leading-relaxed text-textSecondary",
                                children: e.solution,
                              }),
                            }),
                          },
                          `${e.problem}-${t}`,
                        ),
                      ),
                    }),
                  ],
                }),
              r.jsx(m.b, {
                children: r.jsx(o.U, {
                  variant: "tip",
                  title: g.tinyVersion,
                  children: r.jsx("p", { children: f.tinyVersion }),
                }),
              }),
              r.jsx(m.b, {
                children: (0, r.jsxs)("section", {
                  className: "mb-12",
                  "aria-labelledby": "unlocks-heading",
                  children: [
                    r.jsx("h2", {
                      id: "unlocks-heading",
                      className:
                        "mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                      children: g.whatUnlocksNext,
                    }),
                    r.jsx("p", {
                      className: "text-base leading-relaxed text-textSecondary",
                      children: f.unlocksNext,
                    }),
                  ],
                }),
              }),
              w.length > 0 &&
                (0, r.jsxs)("section", {
                  className: "mb-12",
                  "aria-labelledby": "resources-heading",
                  children: [
                    r.jsx(m.b, {
                      children: r.jsx("h2", {
                        id: "resources-heading",
                        className:
                          "mb-5 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                        children: g.recommendedResources,
                      }),
                    }),
                    r.jsx("div", {
                      className: "grid gap-4 sm:grid-cols-2",
                      children: w.map((e, s) =>
                        r.jsx(
                          m.b,
                          {
                            delay: 0.06 * s,
                            children: r.jsx(d.PI, {
                              title: e.title,
                              description: e.description,
                              type: e.type,
                              url: e.url,
                              locale: t,
                            }),
                          },
                          e.id,
                        ),
                      ),
                    }),
                  ],
                }),
              k.length > 0 &&
                r.jsx(m.b, {
                  children: (0, r.jsxs)("section", {
                    className: "mb-12",
                    "aria-labelledby": "related-topics-heading",
                    children: [
                      r.jsx("h2", {
                        id: "related-topics-heading",
                        className:
                          "mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                        children: g.relatedTopics,
                      }),
                      r.jsx("div", {
                        className: "flex flex-wrap gap-2",
                        children: k.map((e) =>
                          (0, r.jsxs)(
                            l.default,
                            {
                              href: (0, p.FT)(t, `/topics/${e.id}`),
                              className:
                                "inline-flex items-center gap-1.5 rounded-xl border border-border/60 bg-white px-4 py-2 text-sm font-medium text-primary no-underline shadow-card transition-all duration-200 hover:border-primaryGreen/50 hover:bg-surfaceElevated hover:shadow-soft",
                              children: [
                                e.title,
                                r.jsx(x.J, {
                                  name: "chevron-right",
                                  size: "sm",
                                }),
                              ],
                            },
                            e.id,
                          ),
                        ),
                      }),
                    ],
                  }),
                }),
              S.length > 0 &&
                r.jsx(m.b, {
                  children: (0, r.jsxs)("section", {
                    className: "mb-12",
                    "aria-labelledby": "glossary-heading",
                    children: [
                      r.jsx("h2", {
                        id: "glossary-heading",
                        className:
                          "mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                        children: "Key Terms",
                      }),
                      r.jsx("div", {
                        className: "flex flex-wrap gap-2",
                        children: S.map((e) =>
                          r.jsx(
                            l.default,
                            {
                              href: (0, p.FT)(t, `/glossary#${e.id}`),
                              className:
                                "inline-flex items-center gap-1.5 rounded-xl border border-border/60 bg-white px-4 py-2 text-sm font-medium text-primary no-underline shadow-card transition-all duration-200 hover:border-primaryGreen/50 hover:bg-surfaceElevated hover:shadow-soft",
                              children: e.term,
                            },
                            e.id,
                          ),
                        ),
                      }),
                    ],
                  }),
                }),
              (0, r.jsxs)("nav", {
                className:
                  "flex flex-col gap-3 border-t border-border/40 pt-10 sm:flex-row sm:justify-between",
                "aria-label": g.navigationAriaLabel,
                children: [
                  y?.step
                    ? (0, r.jsxs)(c.z, {
                        href: (0, p.FT)(
                          t,
                          `/roadmap/${y.stageId}/${y.step.slug}`,
                        ),
                        variant: "outline",
                        className: "flex-1 justify-start",
                        children: [
                          r.jsx(x.J, {
                            name: "chevron-right",
                            size: "sm",
                            className: "rotate-180",
                          }),
                          (0, r.jsxs)("span", {
                            className: "text-left",
                            children: [
                              r.jsx("span", {
                                className:
                                  "block text-xs font-normal text-textMuted",
                                children: g.previous,
                              }),
                              r.jsx("span", {
                                className: "block",
                                children: y.step.title,
                              }),
                            ],
                          }),
                        ],
                      })
                    : r.jsx("div", { className: "flex-1" }),
                  N?.step
                    ? (0, r.jsxs)(c.z, {
                        href: (0, p.FT)(
                          t,
                          `/roadmap/${N.stageId}/${N.step.slug}`,
                        ),
                        variant: "primary",
                        className: "flex-1 justify-end",
                        children: [
                          (0, r.jsxs)("span", {
                            className: "text-right",
                            children: [
                              r.jsx("span", {
                                className:
                                  "block text-xs font-normal opacity-80",
                                children: g.next,
                              }),
                              r.jsx("span", {
                                className: "block",
                                children: N.step.title,
                              }),
                            ],
                          }),
                          r.jsx(x.J, { name: "chevron-right", size: "sm" }),
                        ],
                      })
                    : r.jsx("div", { className: "flex-1" }),
                ],
              }),
            ],
          });
        }
      },
      4627: (e, t, s) => {
        "use strict";
        s.d(t, { U: () => l });
        var r = s(9510);
        let a = {
          info: {
            bg: "bg-surfaceElevated/70",
            borderColor: "border-primary/30",
            iconBg: "bg-primary/10",
            iconColor: "text-primary",
            icon: r.jsx("svg", {
              className: "h-5 w-5",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "currentColor",
              "aria-hidden": "true",
              children: r.jsx("path", {
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
            icon: r.jsx("svg", {
              className: "h-5 w-5",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "currentColor",
              "aria-hidden": "true",
              children: r.jsx("path", {
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
            icon: r.jsx("svg", {
              className: "h-5 w-5",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "currentColor",
              "aria-hidden": "true",
              children: r.jsx("path", {
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
            icon: r.jsx("svg", {
              className: "h-5 w-5",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "currentColor",
              "aria-hidden": "true",
              children: r.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z",
              }),
            }),
          },
        };
        function l({ variant: e = "info", title: t, children: s }) {
          let l = a[e];
          return r.jsx("div", {
            className: `my-6 rounded-2xl border ${l.borderColor} ${l.bg} p-5 backdrop-blur-sm`,
            role: l.role ?? "note",
            children: (0, r.jsxs)("div", {
              className: "flex gap-3",
              children: [
                r.jsx("span", {
                  className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${l.iconBg} ${l.iconColor}`,
                  children: l.icon,
                }),
                (0, r.jsxs)("div", {
                  className: "min-w-0 flex-1",
                  children: [
                    t &&
                      r.jsx("p", {
                        className:
                          "mb-2 text-sm font-semibold text-textPrimary",
                        children: t,
                      }),
                    r.jsx("div", {
                      className:
                        "text-sm leading-relaxed text-textSecondary [&>p:last-child]:mb-0",
                      children: s,
                    }),
                  ],
                }),
              ],
            }),
          });
        }
      },
    }));
  var t = require("../../../../../webpack-runtime.js");
  t.C(e);
  var s = (e) => t((t.s = e)),
    r = t.X(0, [963, 496, 990, 901, 455], () => s(7005));
  module.exports = r;
})();
