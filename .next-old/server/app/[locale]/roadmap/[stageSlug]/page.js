(() => {
  var e = {};
  ((e.id = 481),
    (e.ids = [481]),
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
      9274: (e, t, r) => {
        "use strict";
        (r.r(t),
          r.d(t, {
            GlobalError: () => l.a,
            __next_app__: () => m,
            originalPathname: () => x,
            pages: () => c,
            routeModule: () => p,
            tree: () => d,
          }),
          r(3605),
          r(9475),
          r(6982),
          r(1506),
          r(5866));
        var s = r(3191),
          a = r(8716),
          i = r(7922),
          l = r.n(i),
          n = r(5231),
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
        r.d(t, o);
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
                            "__PAGE__",
                            {},
                            {
                              page: [
                                () => Promise.resolve().then(r.bind(r, 3605)),
                                "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\roadmap\\[stageSlug]\\page.tsx",
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
            "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\roadmap\\[stageSlug]\\page.tsx",
          ],
          x = "/[locale]/roadmap/[stageSlug]/page",
          m = { require: r, loadChunk: () => Promise.resolve() },
          p = new s.AppPageRouteModule({
            definition: {
              kind: a.x.APP_PAGE,
              page: "/[locale]/roadmap/[stageSlug]/page",
              pathname: "/[locale]/roadmap/[stageSlug]",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      9213: (e, t, r) => {
        (Promise.resolve().then(r.bind(r, 8999)),
          Promise.resolve().then(r.bind(r, 5829)),
          Promise.resolve().then(r.bind(r, 3630)),
          Promise.resolve().then(r.bind(r, 2262)),
          Promise.resolve().then(r.t.bind(r, 9404, 23)));
      },
      3605: (e, t, r) => {
        "use strict";
        (r.r(t),
          r.d(t, {
            default: () => g,
            generateMetadata: () => h,
            generateStaticParams: () => u,
          }));
        var s = r(9510),
          a = r(8585),
          i = r(4557),
          l = r(5899),
          n = r(4486),
          o = r(5769),
          d = r(2095),
          c = r(6258),
          x = r(4745),
          m = r(9306);
        let p = {
          stageLabel: "Stage",
          overview: "Overview",
          mainGoal: "Main Goal",
          successLooksLike: "Success Looks Like",
          stepsInStage: "Steps in This Stage",
          dontWorryYet: "Don't Worry Yet",
          whatsNext: "What's Next",
          nextStage: "Next Stage",
          continueTo: "Continue to",
          finalStageTitle: "You've reached the final stage!",
          finalStageBody:
            "From here, continue your lifelong journey of growth. Explore the Topics section for deeper learning on specific subjects.",
          exploreTopics: "Explore Topics",
        };
        function u({ params: e }) {
          return (0, x.hS)(e.locale).map((e) => ({ stageSlug: e.id }));
        }
        function h({ params: e }) {
          let t = (0, x.IY)(e.stageSlug, e.locale);
          return {
            title: t
              ? `${t.title} - Revert Guide`
              : "Stage Not Found - Revert Guide",
          };
        }
        function g({ params: e }) {
          let { locale: t, stageSlug: r } = e,
            u = (0, x.hS)(t),
            h = (0, x.IY)(r, t);
          h || (0, a.notFound)();
          let g = (0, x.V3)(h.id, t),
            b = u.findIndex((e) => e.id === h.id),
            f = b < u.length - 1 ? u[b + 1] : null,
            v = 0;
          for (let e = 0; e < b; e += 1) v += u[e].stepIds.length;
          return (0, s.jsxs)("div", {
            className: "mx-auto max-w-4xl px-5 py-10",
            children: [
              s.jsx("div", {
                className:
                  "mx-auto mb-6 h-[3px] w-full rounded-full bg-gradient-to-r from-primary to-secondaryGreen",
                "aria-hidden": "true",
              }),
              s.jsx(i.a, {
                items: [
                  { label: "Home", href: (0, m.FT)(t, "/") },
                  { label: "Roadmap", href: (0, m.FT)(t, "/roadmap") },
                  { label: h.title },
                ],
              }),
              s.jsx(c.b, {
                children: (0, s.jsxs)("header", {
                  className: "mb-12",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "mb-4 flex flex-wrap items-center gap-3",
                      children: [
                        (0, s.jsxs)("span", {
                          className:
                            "inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-primaryHover px-4 py-1.5 text-xs font-bold text-white shadow-soft",
                          children: [p.stageLabel, " ", b + 1],
                        }),
                        (0, s.jsxs)("span", {
                          className:
                            "inline-flex items-center gap-1.5 rounded-full bg-surfaceElevated px-3 py-1.5 text-xs font-medium text-textMuted",
                          children: [
                            s.jsx(d.J, { name: "clock", size: "sm" }),
                            h.duration,
                          ],
                        }),
                      ],
                    }),
                    s.jsx("h1", {
                      className:
                        "mb-3 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl",
                      children: h.title,
                    }),
                    s.jsx("p", {
                      className: "text-lg text-textSecondary",
                      children: h.subtitle,
                    }),
                  ],
                }),
              }),
              s.jsx(c.b, {
                children: (0, s.jsxs)("section", {
                  className: "mb-12",
                  "aria-labelledby": "overview-heading",
                  children: [
                    s.jsx("h2", {
                      id: "overview-heading",
                      className:
                        "mb-5 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                      children: p.overview,
                    }),
                    s.jsx("p", {
                      className: "mb-6 text-base text-textSecondary",
                      children: h.description,
                    }),
                    (0, s.jsxs)("div", {
                      className: "flex flex-col gap-4",
                      children: [
                        (0, s.jsxs)("div", {
                          className:
                            "rounded-xl border border-primaryGreen/20 border-l-4 border-l-primary bg-surfaceElevated/50 p-6",
                          children: [
                            s.jsx("p", {
                              className:
                                "mb-1.5 text-xs font-semibold uppercase tracking-widest text-textMuted",
                              children: p.mainGoal,
                            }),
                            s.jsx("p", {
                              className: "mb-0 font-medium text-textPrimary",
                              children: h.mainGoal,
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "rounded-xl border border-primaryGreen/20 border-l-4 border-l-primary bg-surfaceElevated/50 p-6",
                          children: [
                            s.jsx("p", {
                              className:
                                "mb-1.5 text-xs font-semibold uppercase tracking-widest text-textMuted",
                              children: p.successLooksLike,
                            }),
                            s.jsx("p", {
                              className: "mb-0 font-medium text-textPrimary",
                              children: h.success,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, s.jsxs)("section", {
                className: "mb-12",
                "aria-labelledby": "steps-heading",
                children: [
                  s.jsx(c.b, {
                    children: s.jsx("h2", {
                      id: "steps-heading",
                      className:
                        "mb-5 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                      children: p.stepsInStage,
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    className: "relative flex flex-col gap-3",
                    children: [
                      g.length > 1 &&
                        s.jsx("div", {
                          className:
                            "absolute bottom-5 left-5 top-5 w-0.5 border-l-2 border-dashed border-primaryGreen/40",
                          "aria-hidden": "true",
                        }),
                      g.map((e, r) =>
                        s.jsx(
                          c.b,
                          {
                            delay: 0.06 * r,
                            className: "relative z-10",
                            children: s.jsx(l.pq, {
                              title: e.title,
                              stepNumber: v + r + 1,
                              timeEstimate: e.timeEstimate,
                              href: (0, m.FT)(t, `/roadmap/${h.id}/${e.slug}`),
                            }),
                          },
                          e.id,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
              h.dontWorry.length > 0 &&
                s.jsx(c.b, {
                  children: s.jsx("section", {
                    className: "mb-12",
                    "aria-labelledby": "dontworry-heading",
                    children: s.jsx(n.U, {
                      title: p.dontWorryYet,
                      children: s.jsx("ul", {
                        className: "mb-0 flex flex-col gap-3 pl-0",
                        children: h.dontWorry.map((e) =>
                          (0, s.jsxs)(
                            "li",
                            {
                              className:
                                "flex items-start gap-3 text-sm text-textSecondary",
                              children: [
                                s.jsx("span", {
                                  className:
                                    "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10",
                                  children: s.jsx(d.J, {
                                    name: "check",
                                    size: "sm",
                                    className: "text-primary",
                                  }),
                                }),
                                s.jsx("span", { children: e }),
                              ],
                            },
                            e,
                          ),
                        ),
                      }),
                    }),
                  }),
                }),
              s.jsx(c.b, {
                children: (0, s.jsxs)("section", {
                  "aria-labelledby": "next-heading",
                  children: [
                    (0, s.jsxs)("h2", {
                      id: "next-heading",
                      className:
                        "mb-5 flex items-center gap-2 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                      children: [
                        p.whatsNext,
                        s.jsx("svg", {
                          className: "h-6 w-6 text-primary",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: 2,
                          stroke: "currentColor",
                          "aria-hidden": "true",
                          children: s.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3",
                          }),
                        }),
                      ],
                    }),
                    f
                      ? (0, s.jsxs)("div", {
                          className:
                            "relative overflow-hidden rounded-2xl border border-primaryGreen/30 bg-gradient-to-br from-surfaceElevated to-white p-7",
                          children: [
                            s.jsx("div", {
                              className:
                                "pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primaryGreen/10 blur-2xl",
                              "aria-hidden": "true",
                            }),
                            (0, s.jsxs)("div", {
                              className: "relative",
                              children: [
                                s.jsx("p", {
                                  className:
                                    "mb-1 text-xs font-semibold uppercase tracking-widest text-textMuted",
                                  children: p.nextStage,
                                }),
                                s.jsx("p", {
                                  className:
                                    "mb-1 font-display text-xl font-semibold text-textPrimary",
                                  children: f.title,
                                }),
                                s.jsx("p", {
                                  className: "mb-5 text-sm text-textSecondary",
                                  children: f.description,
                                }),
                                (0, s.jsxs)(o.z, {
                                  href: (0, m.FT)(t, `/roadmap/${f.id}`),
                                  variant: "primary",
                                  children: [p.continueTo, " ", f.title],
                                }),
                              ],
                            }),
                          ],
                        })
                      : (0, s.jsxs)("div", {
                          className:
                            "relative overflow-hidden rounded-2xl border border-primaryGreen/30 bg-gradient-to-br from-surfaceElevated to-white p-7 text-center",
                          children: [
                            s.jsx("div", {
                              className:
                                "pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-accentYellow/15 blur-2xl",
                              "aria-hidden": "true",
                            }),
                            (0, s.jsxs)("div", {
                              className: "relative",
                              children: [
                                s.jsx("p", {
                                  className:
                                    "mb-2 font-display text-xl font-semibold text-textPrimary",
                                  children: p.finalStageTitle,
                                }),
                                s.jsx("p", {
                                  className: "mb-5 text-sm text-textSecondary",
                                  children: p.finalStageBody,
                                }),
                                s.jsx(o.z, {
                                  href: (0, m.FT)(t, "/topics"),
                                  variant: "primary",
                                  children: p.exploreTopics,
                                }),
                              ],
                            }),
                          ],
                        }),
                  ],
                }),
              }),
            ],
          });
        }
      },
    }));
  var t = require("../../../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    s = t.X(0, [963, 496, 990, 901, 455], () => r(9274));
  module.exports = s;
})();
