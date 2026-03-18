(() => {
  var e = {};
  ((e.id = 161),
    (e.ids = [161]),
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
      9817: (e, t, a) => {
        "use strict";
        (a.r(t),
          a.d(t, {
            GlobalError: () => l.a,
            __next_app__: () => x,
            originalPathname: () => m,
            pages: () => c,
            routeModule: () => u,
            tree: () => d,
          }),
          a(7403),
          a(9475),
          a(6982),
          a(1506),
          a(5866));
        var i = a(3191),
          s = a(8716),
          r = a(7922),
          l = a.n(r),
          n = a(5231),
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
        a.d(t, o);
        let d = [
            "",
            {
              children: [
                "[locale]",
                {
                  children: [
                    "accessibility",
                    {
                      children: [
                        "__PAGE__",
                        {},
                        {
                          page: [
                            () => Promise.resolve().then(a.bind(a, 7403)),
                            "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\accessibility\\page.tsx",
                          ],
                        },
                      ],
                    },
                    {},
                  ],
                },
                {
                  layout: [
                    () => Promise.resolve().then(a.bind(a, 9475)),
                    "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\layout.tsx",
                  ],
                  "not-found": [
                    () => Promise.resolve().then(a.bind(a, 6982)),
                    "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\not-found.tsx",
                  ],
                },
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(a.bind(a, 1506)),
                "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\layout.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(a.t.bind(a, 5866, 23)),
                "next/dist/client/components/not-found-error",
              ],
            },
          ],
          c = [
            "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\accessibility\\page.tsx",
          ],
          m = "/[locale]/accessibility/page",
          x = { require: a, loadChunk: () => Promise.resolve() },
          u = new i.AppPageRouteModule({
            definition: {
              kind: s.x.APP_PAGE,
              page: "/[locale]/accessibility/page",
              pathname: "/[locale]/accessibility",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      5822: (e, t, a) => {
        (Promise.resolve().then(a.bind(a, 5829)),
          Promise.resolve().then(a.bind(a, 3630)));
      },
      5829: (e, t, a) => {
        "use strict";
        a.d(t, { AnimateIn: () => r });
        var i = a(326),
          s = a(7577);
        function r({
          children: e,
          className: t = "",
          delay: a = 0,
          animation: r = "fade-up",
          threshold: l = 0.1,
        }) {
          let n = (0, s.useRef)(null),
            [o, d] = (0, s.useState)(!1);
          return i.jsx("div", {
            ref: n,
            className: `${t} ${o ? { "fade-up": "animate-fade-up", "fade-in": "animate-fade-in", "scale-in": "animate-scale-in", "slide-in-right": "animate-slide-in-right" }[r] : "opacity-0"}`,
            style: o && a > 0 ? { animationDelay: `${a}s` } : void 0,
            children: e,
          });
        }
      },
      3630: (e, t, a) => {
        "use strict";
        a.d(t, { Breadcrumb: () => l });
        var i = a(326),
          s = a(434),
          r = a(3082);
        function l({ items: e }) {
          let t = (0, r.T)();
          return 0 === e.length
            ? null
            : i.jsx("nav", {
                "aria-label": t("common.breadcrumb"),
                className: "mb-8",
                children: i.jsx("ol", {
                  className:
                    "mb-0 flex flex-wrap items-center gap-1.5 pl-0 text-sm",
                  children: e.map((t, a) => {
                    let r = a === e.length - 1;
                    return (0, i.jsxs)(
                      "li",
                      {
                        className: "mb-0 inline-flex items-center gap-1.5",
                        children: [
                          a > 0 &&
                            i.jsx("svg", {
                              className: "h-3 w-3 text-border",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              strokeWidth: 2.5,
                              stroke: "currentColor",
                              "aria-hidden": "true",
                              children: i.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "m8.25 4.5 7.5 7.5-7.5 7.5",
                              }),
                            }),
                          r || !t.href
                            ? i.jsx("span", {
                                className: "font-medium text-textMuted",
                                "aria-current": r ? "page" : void 0,
                                children: t.label,
                              })
                            : i.jsx(s.default, {
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
      7403: (e, t, a) => {
        "use strict";
        (a.r(t), a.d(t, { default: () => c, generateMetadata: () => d }));
        var i = a(9510),
          s = a(4557),
          r = a(6258),
          l = a(9306),
          n = a(3219);
        let o = {
          title: "Accessibility",
          commitmentTitle: "Our Commitment",
          commitment:
            "We are committed to making Revert Guide accessible to all users, regardless of ability. This site meets WCAG 2.1 Level AA criteria and complies with the Accessibility for Ontarians with Disabilities Act (AODA) requirements. We believe that everyone deserves access to guidance and support on their spiritual journey.",
          standardsTitle: "Standards",
          standards: [
            "Web Content Accessibility Guidelines (WCAG) 2.1 Level AA",
            "Accessibility for Ontarians with Disabilities Act (AODA)",
            "Tested with screen readers including NVDA, JAWS, and VoiceOver",
          ],
          featuresTitle: "Accessibility Features",
          features: [
            "Full keyboard navigation throughout the site - all functionality is reachable via keyboard",
            "Screen reader support with semantic HTML and ARIA attributes",
            "Sufficient colour contrast meeting WCAG AA requirements (4.5:1 for normal text, 3:1 for large text)",
            "Skip-to-content link to bypass navigation",
            'Descriptive link text - no "click here" links',
            "Alternative text on all meaningful images",
            "Offline accessibility - content is cached and available without internet",
            "Responsive design that works on mobile devices and desktop",
            "Clear heading structure for easy navigation",
            "Visible focus indicators on all interactive elements",
            "Logical tab order throughout all pages",
          ],
          limitationsTitle: "Known Limitations",
          limitations:
            "The embedded Google Maps feature on the Find a Masjid page (when available) is provided by Google and may not be fully accessible to screen reader users. However, all location information is available in the accessible text list of masjids on the same page.",
          feedbackTitle: "Feedback",
          feedback:
            "If you encounter any accessibility barriers while using Revert Guide, we want to hear from you. Please use the feedback options within the app to report any issues. We appreciate your input and will work to address accessibility concerns promptly.",
          lastUpdatedTitle: "Last Updated",
          lastUpdated:
            "This accessibility statement was last reviewed on March 2026.",
        };
        function d({ params: e }) {
          return (0, n.r)(e.locale, "accessibility");
        }
        function c({ params: e }) {
          let t = e.locale;
          return (0, i.jsxs)("div", {
            className: "mx-auto max-w-4xl px-5 py-10",
            children: [
              i.jsx(s.a, {
                items: [
                  { label: "Home", href: (0, l.FT)(t, "/") },
                  { label: o.title },
                ],
              }),
              i.jsx(r.b, {
                children: i.jsx("h1", {
                  className:
                    "mb-10 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl",
                  children: o.title,
                }),
              }),
              i.jsx(r.b, {
                children: (0, i.jsxs)("section", {
                  className: "mb-10",
                  "aria-labelledby": "commitment",
                  children: [
                    i.jsx("h2", {
                      id: "commitment",
                      className:
                        "mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                      children: o.commitmentTitle,
                    }),
                    i.jsx("p", {
                      className: "text-base leading-relaxed text-textSecondary",
                      children: o.commitment,
                    }),
                  ],
                }),
              }),
              i.jsx(r.b, {
                children: (0, i.jsxs)("section", {
                  className: "mb-10",
                  "aria-labelledby": "standards",
                  children: [
                    i.jsx("h2", {
                      id: "standards",
                      className:
                        "mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                      children: o.standardsTitle,
                    }),
                    i.jsx("ul", {
                      className:
                        "flex flex-col gap-3 pl-0 text-base text-textSecondary",
                      children: o.standards.map((e) =>
                        (0, i.jsxs)(
                          "li",
                          {
                            className:
                              "flex items-start gap-3 rounded-xl bg-surfaceElevated/50 p-4",
                            children: [
                              i.jsx("span", {
                                className:
                                  "mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary",
                                "aria-hidden": "true",
                              }),
                              i.jsx("span", { children: e }),
                            ],
                          },
                          e,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
              i.jsx(r.b, {
                children: (0, i.jsxs)("section", {
                  className: "mb-10",
                  "aria-labelledby": "features",
                  children: [
                    i.jsx("h2", {
                      id: "features",
                      className:
                        "mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                      children: o.featuresTitle,
                    }),
                    i.jsx("ul", {
                      className:
                        "flex flex-col gap-3 pl-0 text-base text-textSecondary",
                      children: o.features.map((e) =>
                        (0, i.jsxs)(
                          "li",
                          {
                            className:
                              "flex items-start gap-3 rounded-xl bg-surfaceElevated/50 p-4",
                            children: [
                              i.jsx("span", {
                                className:
                                  "mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary",
                                "aria-hidden": "true",
                              }),
                              i.jsx("span", { children: e }),
                            ],
                          },
                          e,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
              i.jsx(r.b, {
                children: (0, i.jsxs)("section", {
                  className: "mb-10",
                  "aria-labelledby": "limitations",
                  children: [
                    i.jsx("h2", {
                      id: "limitations",
                      className:
                        "mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                      children: o.limitationsTitle,
                    }),
                    i.jsx("p", {
                      className: "text-base leading-relaxed text-textSecondary",
                      children: o.limitations,
                    }),
                  ],
                }),
              }),
              i.jsx(r.b, {
                children: (0, i.jsxs)("section", {
                  className: "mb-10",
                  "aria-labelledby": "feedback",
                  children: [
                    i.jsx("h2", {
                      id: "feedback",
                      className:
                        "mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                      children: o.feedbackTitle,
                    }),
                    i.jsx("p", {
                      className: "text-base leading-relaxed text-textSecondary",
                      children: o.feedback,
                    }),
                  ],
                }),
              }),
              i.jsx(r.b, {
                children: (0, i.jsxs)("section", {
                  "aria-labelledby": "last-updated",
                  children: [
                    i.jsx("h2", {
                      id: "last-updated",
                      className:
                        "mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                      children: o.lastUpdatedTitle,
                    }),
                    i.jsx("p", {
                      className: "text-base leading-relaxed text-textSecondary",
                      children: o.lastUpdated,
                    }),
                  ],
                }),
              }),
            ],
          });
        }
      },
      6258: (e, t, a) => {
        "use strict";
        a.d(t, { b: () => i });
        let i = (0, a(8570).createProxy)(
          String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\components\AnimateIn.tsx#AnimateIn`,
        );
      },
      4557: (e, t, a) => {
        "use strict";
        a.d(t, { a: () => i });
        let i = (0, a(8570).createProxy)(
          String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\components\Breadcrumb.tsx#Breadcrumb`,
        );
      },
      3219: (e, t, a) => {
        "use strict";
        a.d(t, { r: () => s });
        var i = a(9306);
        function s(e, t) {
          let a = (0, i.Ty)(e);
          return {
            title: a(`metadata.${t}.title`),
            description: a(`metadata.${t}.description`),
          };
        }
      },
    }));
  var t = require("../../../webpack-runtime.js");
  t.C(e);
  var a = (e) => t((t.s = e)),
    i = t.X(0, [963, 496, 990, 901], () => a(9817));
  module.exports = i;
})();
