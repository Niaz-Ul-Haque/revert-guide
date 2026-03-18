(() => {
  var e = {};
  ((e.id = 713),
    (e.ids = [713]),
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
      1968: (e, t, r) => {
        "use strict";
        (r.r(t),
          r.d(t, {
            GlobalError: () => o.a,
            __next_app__: () => u,
            originalPathname: () => p,
            pages: () => d,
            routeModule: () => h,
            tree: () => c,
          }),
          r(8750),
          r(9475),
          r(6982),
          r(1506),
          r(5866));
        var a = r(3191),
          i = r(8716),
          s = r(7922),
          o = r.n(s),
          n = r(5231),
          l = {};
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
            ].indexOf(e) && (l[e] = () => n[e]);
        r.d(t, l);
        let c = [
            "",
            {
              children: [
                "[locale]",
                {
                  children: [
                    "privacy",
                    {
                      children: [
                        "__PAGE__",
                        {},
                        {
                          page: [
                            () => Promise.resolve().then(r.bind(r, 8750)),
                            "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\privacy\\page.tsx",
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
          d = [
            "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\privacy\\page.tsx",
          ],
          p = "/[locale]/privacy/page",
          u = { require: r, loadChunk: () => Promise.resolve() },
          h = new a.AppPageRouteModule({
            definition: {
              kind: i.x.APP_PAGE,
              page: "/[locale]/privacy/page",
              pathname: "/[locale]/privacy",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: c },
          });
      },
      5822: (e, t, r) => {
        (Promise.resolve().then(r.bind(r, 5829)),
          Promise.resolve().then(r.bind(r, 3630)));
      },
      5829: (e, t, r) => {
        "use strict";
        r.d(t, { AnimateIn: () => s });
        var a = r(326),
          i = r(7577);
        function s({
          children: e,
          className: t = "",
          delay: r = 0,
          animation: s = "fade-up",
          threshold: o = 0.1,
        }) {
          let n = (0, i.useRef)(null),
            [l, c] = (0, i.useState)(!1);
          return a.jsx("div", {
            ref: n,
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
          i = r(434),
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
                            : a.jsx(i.default, {
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
      8750: (e, t, r) => {
        "use strict";
        (r.r(t), r.d(t, { default: () => d, generateMetadata: () => c }));
        var a = r(9510),
          i = r(4557),
          s = r(6258),
          o = r(9306),
          n = r(3219);
        let l = {
          title: "Privacy Policy",
          effectiveDate: "Effective as of January 2026",
          sections: [
            {
              id: "collection",
              title: "What We Collect",
              paragraphs: [
                "We do not collect personal data or usage analytics in this version of Revert Guide. No user data, email addresses, names, or activity tracking is gathered.",
                "Future versions may include optional features that collect data. Any such changes will be clearly communicated and reflected in an updated version of this policy.",
              ],
            },
            {
              id: "cookies",
              title: "Cookies",
              paragraphs: [
                "Revert Guide uses a service worker for offline caching. This does not involve tracking cookies. We do not use analytics cookies (such as Google Analytics) or marketing cookies.",
                "The Google Maps feature on the Masjid Finder page may set cookies per Google's own privacy policy. This is beyond our control.",
              ],
            },
            {
              id: "third-parties",
              title: "Third Parties",
              paragraphs: [
                "This site uses Google Maps for the Masjid Finder feature. Google may collect usage data as described in their privacy policy.",
                "No other third-party trackers or analytics services are used. External links are provided for convenience; we are not responsible for the privacy practices of external websites.",
              ],
            },
            {
              id: "children",
              title: "Children's Privacy",
              paragraphs: [
                "This site is not directed to children under 13. We do not knowingly collect information from children under 13.",
              ],
            },
            {
              id: "changes",
              title: "Changes to This Policy",
              paragraphs: [
                "If we update this privacy policy, we will post the updated version on this page and update the effective date at the top. We encourage you to review this policy periodically.",
              ],
            },
            {
              id: "contact",
              title: "Contact",
              paragraphs: [
                "If you have questions about this privacy policy, please use the feedback options within the app.",
              ],
            },
          ],
        };
        function c({ params: e }) {
          return (0, n.r)(e.locale, "privacy");
        }
        function d({ params: e }) {
          let t = e.locale;
          return (0, a.jsxs)("div", {
            className: "mx-auto max-w-4xl px-5 py-10",
            children: [
              a.jsx(i.a, {
                items: [
                  { label: "Home", href: (0, o.FT)(t, "/") },
                  { label: l.title },
                ],
              }),
              (0, a.jsxs)(s.b, {
                children: [
                  a.jsx("h1", {
                    className:
                      "mb-2 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl",
                    children: l.title,
                  }),
                  a.jsx("p", {
                    className: "mb-10 text-sm text-textMuted",
                    children: l.effectiveDate,
                  }),
                ],
              }),
              l.sections.map((e) =>
                a.jsx(
                  s.b,
                  {
                    children: (0, a.jsxs)("section", {
                      className: "mb-10",
                      "aria-labelledby": e.id,
                      children: [
                        a.jsx("h2", {
                          id: e.id,
                          className:
                            "mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                          children: e.title,
                        }),
                        e.paragraphs.map((e) =>
                          a.jsx(
                            "p",
                            {
                              className:
                                "mb-2 text-base leading-relaxed text-textSecondary last:mb-0",
                              children: e,
                            },
                            e,
                          ),
                        ),
                      ],
                    }),
                  },
                  e.id,
                ),
              ),
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
      3219: (e, t, r) => {
        "use strict";
        r.d(t, { r: () => i });
        var a = r(9306);
        function i(e, t) {
          let r = (0, a.Ty)(e);
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
    a = t.X(0, [963, 496, 990, 901], () => r(1968));
  module.exports = a;
})();
