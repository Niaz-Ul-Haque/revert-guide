(() => {
  var e = {};
  ((e.id = 118),
    (e.ids = [118]),
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
      2409: (e, t, r) => {
        "use strict";
        (r.r(t),
          r.d(t, {
            GlobalError: () => i.a,
            __next_app__: () => m,
            originalPathname: () => u,
            pages: () => c,
            routeModule: () => x,
            tree: () => d,
          }),
          r(8724),
          r(9475),
          r(6982),
          r(1506),
          r(5866));
        var s = r(3191),
          n = r(8716),
          a = r(7922),
          i = r.n(a),
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
                    "glossary",
                    {
                      children: [
                        "__PAGE__",
                        {},
                        {
                          page: [
                            () => Promise.resolve().then(r.bind(r, 8724)),
                            "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\glossary\\page.tsx",
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
            "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\glossary\\page.tsx",
          ],
          u = "/[locale]/glossary/page",
          m = { require: r, loadChunk: () => Promise.resolve() },
          x = new s.AppPageRouteModule({
            definition: {
              kind: n.x.APP_PAGE,
              page: "/[locale]/glossary/page",
              pathname: "/[locale]/glossary",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      1382: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 1514));
      },
      5829: (e, t, r) => {
        "use strict";
        r.d(t, { AnimateIn: () => a });
        var s = r(326),
          n = r(7577);
        function a({
          children: e,
          className: t = "",
          delay: r = 0,
          animation: a = "fade-up",
          threshold: i = 0.1,
        }) {
          let o = (0, n.useRef)(null),
            [l, d] = (0, n.useState)(!1);
          return s.jsx("div", {
            ref: o,
            className: `${t} ${l ? { "fade-up": "animate-fade-up", "fade-in": "animate-fade-in", "scale-in": "animate-scale-in", "slide-in-right": "animate-slide-in-right" }[a] : "opacity-0"}`,
            style: l && r > 0 ? { animationDelay: `${r}s` } : void 0,
            children: e,
          });
        }
      },
      3630: (e, t, r) => {
        "use strict";
        r.d(t, { Breadcrumb: () => i });
        var s = r(326),
          n = r(434),
          a = r(3082);
        function i({ items: e }) {
          let t = (0, a.T)();
          return 0 === e.length
            ? null
            : s.jsx("nav", {
                "aria-label": t("common.breadcrumb"),
                className: "mb-8",
                children: s.jsx("ol", {
                  className:
                    "mb-0 flex flex-wrap items-center gap-1.5 pl-0 text-sm",
                  children: e.map((t, r) => {
                    let a = r === e.length - 1;
                    return (0, s.jsxs)(
                      "li",
                      {
                        className: "mb-0 inline-flex items-center gap-1.5",
                        children: [
                          r > 0 &&
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
                          a || !t.href
                            ? s.jsx("span", {
                                className: "font-medium text-textMuted",
                                "aria-current": a ? "page" : void 0,
                                children: t.label,
                              })
                            : s.jsx(n.default, {
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
      1514: (e, t, r) => {
        "use strict";
        r.d(t, { GlossaryPageClient: () => c });
        var s = r(326),
          n = r(7577),
          a = r(3630),
          i = r(3626),
          o = r(5829),
          l = r(8487);
        let d = {
          title: "Glossary",
          description:
            "Quick reference for Islamic terms and concepts. Search and learn at your own pace.",
          searchPlaceholder: "Search terms...",
          searchLabel: "Search glossary",
          emptyTitle: "No terms found",
          emptyPrefix: "Try a different search term or",
          emptyAction: "clear the search",
          seeAlso: "See also:",
        };
        function c({ locale: e, entries: t }) {
          let [r, c] = (0, n.useState)(""),
            u = (0, n.useMemo)(() => {
              if (!r.trim()) return t;
              let e = r.toLowerCase();
              return t.filter(
                (t) =>
                  t.term.toLowerCase().includes(e) ||
                  t.definition.toLowerCase().includes(e) ||
                  (t.transliteration &&
                    t.transliteration.toLowerCase().includes(e)) ||
                  (t.arabicText && t.arabicText.includes(r)),
              );
            }, [t, r]),
            m = (0, n.useMemo)(() => {
              let e = new Map();
              for (let t of [...u].sort((e, t) =>
                e.term.localeCompare(t.term),
              )) {
                let r = t.term[0].toUpperCase(),
                  s = e.get(r) ?? [];
                (s.push(t), e.set(r, s));
              }
              return Array.from(e.entries());
            }, [u]);
          return (0, s.jsxs)("div", {
            className: "mx-auto max-w-4xl px-5 py-10",
            children: [
              s.jsx(a.Breadcrumb, {
                items: [
                  { label: "Home", href: (0, l.FT)(e, "/") },
                  { label: d.title },
                ],
              }),
              s.jsx("header", {
                className: "mb-8",
                children: (0, s.jsxs)(o.AnimateIn, {
                  children: [
                    s.jsx("h1", {
                      className:
                        "mb-3 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl",
                      children: d.title,
                    }),
                    s.jsx("p", {
                      className: "text-lg text-textSecondary",
                      children: d.description,
                    }),
                  ],
                }),
              }),
              s.jsx(o.AnimateIn, {
                delay: 0.1,
                children: s.jsx(i.E, {
                  value: r,
                  onChange: c,
                  placeholder: d.searchPlaceholder,
                  label: d.searchLabel,
                  hideLabel: !0,
                  className: "mb-8",
                }),
              }),
              s.jsx("div", {
                "aria-live": "polite",
                className: "sr-only",
                children: r.trim()
                  ? `${u.length} ${1 === u.length ? "term found" : "terms found"}`
                  : "",
              }),
              0 === m.length
                ? (0, s.jsxs)("div", {
                    className:
                      "rounded-2xl border border-border/60 bg-surfaceElevated/50 px-6 py-14 text-center",
                    children: [
                      s.jsx("p", {
                        className:
                          "mb-2 font-display text-lg font-semibold text-textPrimary",
                        children: d.emptyTitle,
                      }),
                      (0, s.jsxs)("p", {
                        className: "mb-0 text-sm text-textSecondary",
                        children: [
                          d.emptyPrefix,
                          " ",
                          s.jsx("button", {
                            type: "button",
                            onClick: () => c(""),
                            className:
                              "font-medium text-primary underline hover:text-primaryHover",
                            children: d.emptyAction,
                          }),
                          ".",
                        ],
                      }),
                    ],
                  })
                : s.jsx("div", {
                    className: "flex flex-col gap-10",
                    children: m.map(([e, r]) =>
                      (0, s.jsxs)(
                        "section",
                        {
                          "aria-labelledby": `letter-${e}`,
                          children: [
                            s.jsx("h2", {
                              id: `letter-${e}`,
                              className:
                                "mb-5 border-b border-primaryGreen/30 pb-2 font-display text-2xl font-semibold text-primary",
                              children: e,
                            }),
                            s.jsx("dl", {
                              className: "flex flex-col gap-4",
                              children: r.map((e) =>
                                (0, s.jsxs)(
                                  "div",
                                  {
                                    id: e.id,
                                    className:
                                      "scroll-mt-24 rounded-2xl border border-border/60 bg-white p-6 shadow-card transition-all duration-300 hover:shadow-soft",
                                    children: [
                                      (0, s.jsxs)("dt", {
                                        className:
                                          "mb-2 flex flex-wrap items-baseline gap-2",
                                        children: [
                                          s.jsx("span", {
                                            className:
                                              "text-lg font-bold text-textPrimary",
                                            children: e.term,
                                          }),
                                          e.arabicText &&
                                            s.jsx("span", {
                                              className:
                                                "font-arabic text-xl text-textMuted",
                                              lang: "ar",
                                              dir: "rtl",
                                              children: e.arabicText,
                                            }),
                                          e.transliteration &&
                                            (0, s.jsxs)("span", {
                                              className:
                                                "text-sm italic text-textMuted",
                                              children: [
                                                "(",
                                                e.transliteration,
                                                ")",
                                              ],
                                            }),
                                        ],
                                      }),
                                      (0, s.jsxs)("dd", {
                                        className: "mb-0",
                                        children: [
                                          s.jsx("p", {
                                            className:
                                              "mb-2 text-sm leading-relaxed text-textSecondary",
                                            children: e.definition,
                                          }),
                                          e.seeAlso.length > 0 &&
                                            (0, s.jsxs)("div", {
                                              className:
                                                "flex flex-wrap items-center gap-1.5 text-xs text-textMuted",
                                              children: [
                                                s.jsx("span", {
                                                  children: d.seeAlso,
                                                }),
                                                e.seeAlso.map((e) => {
                                                  let r = t.find(
                                                    (t) => t.id === e,
                                                  );
                                                  return s.jsx(
                                                    "a",
                                                    {
                                                      href: `#${e}`,
                                                      className:
                                                        "rounded-lg bg-surfaceElevated px-2 py-0.5 font-medium text-primary no-underline transition-colors hover:bg-primary/15 hover:text-primaryHover",
                                                      onClick: (t) => {
                                                        t.preventDefault();
                                                        let r =
                                                          document.getElementById(
                                                            e,
                                                          );
                                                        r &&
                                                          (c(""),
                                                          requestAnimationFrame(
                                                            () => {
                                                              (r.scrollIntoView(
                                                                {
                                                                  behavior:
                                                                    "smooth",
                                                                  block:
                                                                    "center",
                                                                },
                                                              ),
                                                                r.classList.add(
                                                                  "ring-2",
                                                                  "ring-primary",
                                                                  "ring-offset-2",
                                                                ),
                                                                setTimeout(
                                                                  () => {
                                                                    r.classList.remove(
                                                                      "ring-2",
                                                                      "ring-primary",
                                                                      "ring-offset-2",
                                                                    );
                                                                  },
                                                                  2e3,
                                                                ));
                                                            },
                                                          ));
                                                      },
                                                      children: r?.term ?? e,
                                                    },
                                                    e,
                                                  );
                                                }),
                                              ],
                                            }),
                                        ],
                                      }),
                                    ],
                                  },
                                  e.id,
                                ),
                              ),
                            }),
                          ],
                        },
                        e,
                      ),
                    ),
                  }),
            ],
          });
        }
      },
      3626: (e, t, r) => {
        "use strict";
        r.d(t, { E: () => i });
        var s = r(326),
          n = r(7577),
          a = r(3082);
        function i({
          value: e,
          onChange: t,
          placeholder: r,
          label: i,
          hideLabel: o = !1,
          className: l = "",
        }) {
          let d = (0, a.T)(),
            c = (0, n.useRef)(null),
            u = (0, n.useId)(),
            m = `${u}-search`;
          return (0, s.jsxs)("div", {
            className: l,
            children: [
              s.jsx("label", {
                htmlFor: m,
                className: o
                  ? "sr-only"
                  : "mb-2 block text-sm font-medium text-textPrimary",
                children: i ?? d("common.search"),
              }),
              (0, s.jsxs)("div", {
                className: "relative",
                children: [
                  s.jsx("svg", {
                    className:
                      "pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-textMuted",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    children: s.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
                    }),
                  }),
                  s.jsx("input", {
                    ref: c,
                    id: m,
                    type: "search",
                    value: e,
                    onChange: (e) => t(e.target.value),
                    placeholder: r ?? d("common.searchPlaceholder"),
                    className:
                      "w-full rounded-xl border border-border/60 bg-white py-3 pl-12 pr-10 text-base text-textPrimary shadow-inner-glow placeholder:text-textMuted/60 transition-all duration-200 focus:border-primaryGreen focus:shadow-soft focus:outline-2 focus:outline-offset-0 focus:outline-borderStrong",
                  }),
                  e.length > 0 &&
                    s.jsx("button", {
                      type: "button",
                      onClick: function () {
                        (t(""), c.current?.focus());
                      },
                      className:
                        "absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-lg text-textMuted transition-all duration-200 hover:bg-surfaceElevated hover:text-textSecondary focus-visible:outline-2 focus-visible:outline-borderStrong",
                      "aria-label": d("common.clearSearch"),
                      children: s.jsx("svg", {
                        className: "h-4 w-4",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: 2,
                        stroke: "currentColor",
                        "aria-hidden": "true",
                        children: s.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "M6 18 18 6M6 6l12 12",
                        }),
                      }),
                    }),
                ],
              }),
            ],
          });
        }
      },
      8724: (e, t, r) => {
        "use strict";
        (r.r(t), r.d(t, { default: () => l, generateMetadata: () => o }));
        var s = r(9510);
        let n = (0, r(8570).createProxy)(
          String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\components\GlossaryPageClient.tsx#GlossaryPageClient`,
        );
        var a = r(4745),
          i = r(3219);
        function o({ params: e }) {
          return (0, i.r)(e.locale, "glossary");
        }
        function l({ params: e }) {
          return s.jsx(n, { locale: e.locale, entries: (0, a.Ei)(e.locale) });
        }
      },
      4745: (e, t, r) => {
        "use strict";
        r.d(t, {
          $d: () => k,
          Ei: () => v,
          IY: () => m,
          Jz: () => y,
          MB: () => N,
          NI: () => g,
          V3: () => h,
          Zb: () => p,
          aQ: () => j,
          fY: () => b,
          hS: () => u,
          hf: () => f,
          ik: () => P,
          tw: () => w,
        });
        var s = r(2048),
          n = r(5315),
          a = r(9306);
        let i = n.join(process.cwd(), "content");
        function o(e) {
          return JSON.parse(s.readFileSync(e, "utf-8"));
        }
        function l(e) {
          return n.join(i, e);
        }
        function d(e, t) {
          let r = n.join(l(e), t);
          return s.existsSync(r) ? r : n.join(l(a.ZW), t);
        }
        function c(e, t) {
          let r = n.join(l(a.ZW), t),
            i = n.join(l(e), t),
            c = new Set();
          if (s.existsSync(r))
            for (let e of s.readdirSync(r)) e.endsWith(".json") && c.add(e);
          if (s.existsSync(i))
            for (let e of s.readdirSync(i)) e.endsWith(".json") && c.add(e);
          return Array.from(c).map((r) => o(d(e, n.join(t, r))));
        }
        function u(e = a.ZW) {
          return o(d(e, "stages.json"));
        }
        function m(e, t = a.ZW) {
          return u(t).find((t) => t.id === e);
        }
        function x(e = a.ZW) {
          return c(e, "steps");
        }
        function p(e, t = a.ZW) {
          return x(t).find((t) => t.id === e);
        }
        function f(e, t = a.ZW) {
          return x(t).find((t) => t.slug === e);
        }
        function h(e, t = a.ZW) {
          let r = m(e, t);
          return r
            ? r.stepIds.map((e) => p(e, t)).filter((e) => void 0 !== e)
            : [];
        }
        function g(e = a.ZW) {
          return c(e, "topics");
        }
        function b(e, t = a.ZW) {
          return g(t).find((t) => t.id === e);
        }
        function y(e, t = a.ZW) {
          return g(t).find((t) => (t.slug ?? t.id) === e);
        }
        function v(e = a.ZW) {
          return o(d(e, "glossary.json")).sort((e, t) =>
            e.term.localeCompare(t.term),
          );
        }
        function j(e, t = a.ZW) {
          return v(t).find((t) => t.id === e);
        }
        function w(e = a.ZW) {
          return o(d(e, "resources.json"));
        }
        function N(e, t = a.ZW) {
          return w(t).find((t) => t.id === e);
        }
        function k(e, t = a.ZW) {
          return w(t).filter((t) => t.relatedTopicIds.includes(e));
        }
        function P(e = a.ZW) {
          return o(d(e, "masjids.json"));
        }
      },
      3219: (e, t, r) => {
        "use strict";
        r.d(t, { r: () => n });
        var s = r(9306);
        function n(e, t) {
          let r = (0, s.Ty)(e);
          return {
            title: r(`metadata.${t}.title`),
            description: r(`metadata.${t}.description`),
          };
        }
      },
    }));
  var t = require("../../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    s = t.X(0, [963, 496, 990, 901], () => r(2409));
  module.exports = s;
})();
