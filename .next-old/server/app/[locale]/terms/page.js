(() => {
  var e = {};
  ((e.id = 740),
    (e.ids = [740]),
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
      2613: (e, t, r) => {
        "use strict";
        (r.r(t),
          r.d(t, {
            GlobalError: () => n.a,
            __next_app__: () => m,
            originalPathname: () => u,
            pages: () => c,
            routeModule: () => p,
            tree: () => d,
          }),
          r(978),
          r(9475),
          r(6982),
          r(1506),
          r(5866));
        var s = r(3191),
          i = r(8716),
          a = r(7922),
          n = r.n(a),
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
                    "terms",
                    {
                      children: [
                        "__PAGE__",
                        {},
                        {
                          page: [
                            () => Promise.resolve().then(r.bind(r, 978)),
                            "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\terms\\page.tsx",
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
            "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\terms\\page.tsx",
          ],
          u = "/[locale]/terms/page",
          m = { require: r, loadChunk: () => Promise.resolve() },
          p = new s.AppPageRouteModule({
            definition: {
              kind: i.x.APP_PAGE,
              page: "/[locale]/terms/page",
              pathname: "/[locale]/terms",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      5822: (e, t, r) => {
        (Promise.resolve().then(r.bind(r, 5829)),
          Promise.resolve().then(r.bind(r, 3630)));
      },
      5829: (e, t, r) => {
        "use strict";
        r.d(t, { AnimateIn: () => a });
        var s = r(326),
          i = r(7577);
        function a({
          children: e,
          className: t = "",
          delay: r = 0,
          animation: a = "fade-up",
          threshold: n = 0.1,
        }) {
          let o = (0, i.useRef)(null),
            [l, d] = (0, i.useState)(!1);
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
        r.d(t, { Breadcrumb: () => n });
        var s = r(326),
          i = r(434),
          a = r(3082);
        function n({ items: e }) {
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
                            : s.jsx(i.default, {
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
      978: (e, t, r) => {
        "use strict";
        (r.r(t), r.d(t, { default: () => c, generateMetadata: () => d }));
        var s = r(9510),
          i = r(4557),
          a = r(6258),
          n = r(9306),
          o = r(3219);
        let l = {
          title: "Terms of Use",
          effectiveDate: "Effective as of January 2026",
          sections: [
            {
              id: "acceptance",
              title: "Acceptance of Terms",
              body: "By accessing and using Revert Guide, you agree to be bound by these terms. If you do not agree with any part of these terms, please do not use the site.",
            },
            {
              id: "content-disclaimer",
              title: "Content Disclaimer",
              body: "The content provided on Revert Guide is for educational purposes about Islam and does not constitute formal religious rulings (fatawa) or legal advice. For personal religious decisions, please consult a qualified local scholar or imam. While we aim for accuracy, we do not guarantee that all information is error-free. Use the content at your own discretion.",
            },
            {
              id: "medical-disclaimer",
              title: "Medical & Health Disclaimer",
              body: "Content about mental health or health-related topics on this site is not professional medical or mental health advice. If you are experiencing mental health issues or medical concerns, please consult a licensed professional. Do not use this guide as a substitute for professional medical care.",
            },
            {
              id: "ip",
              title: "Intellectual Property",
              body: "All content, including text, design, logos, and site structure, is the intellectual property of Revert Guide or its contributors. Users may view and share links to the site but may not republish, copy, modify, or distribute content without permission. Personal, non-commercial use is permitted - for example, reading content for yourself or sharing a link with a friend.",
            },
            {
              id: "liability",
              title: "Limitation of Liability",
              body: 'Revert Guide is provided "as is" without warranties, express or implied. We are not liable for any indirect, incidental, or consequential damages arising from your use of the site. Your use of this site is at your own risk.',
            },
            {
              id: "governing-law",
              title: "Governing Law",
              body: "These terms are governed by the laws of the Province of Ontario, Canada. Any disputes arising from the use of this site are subject to the jurisdiction of the courts of Ontario.",
            },
            {
              id: "changes",
              title: "Changes to These Terms",
              body: "We may update these terms at any time by posting revised terms on this page. Continued use of Revert Guide after changes are posted constitutes acceptance of the updated terms.",
            },
            {
              id: "external-links",
              title: "External Links",
              body: "This site contains links to external websites. We are not responsible for the content or practices of those sites. External links are provided for convenience and do not imply endorsement.",
            },
          ],
        };
        function d({ params: e }) {
          return (0, o.r)(e.locale, "terms");
        }
        function c({ params: e }) {
          let t = e.locale;
          return (0, s.jsxs)("div", {
            className: "mx-auto max-w-4xl px-5 py-10",
            children: [
              s.jsx(i.a, {
                items: [
                  { label: "Home", href: (0, n.FT)(t, "/") },
                  { label: l.title },
                ],
              }),
              (0, s.jsxs)(a.b, {
                children: [
                  s.jsx("h1", {
                    className:
                      "mb-2 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl",
                    children: l.title,
                  }),
                  s.jsx("p", {
                    className: "mb-10 text-sm text-textMuted",
                    children: l.effectiveDate,
                  }),
                ],
              }),
              l.sections.map((e) =>
                s.jsx(
                  a.b,
                  {
                    children: (0, s.jsxs)("section", {
                      className: "mb-10",
                      "aria-labelledby": e.id,
                      children: [
                        s.jsx("h2", {
                          id: e.id,
                          className:
                            "mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                          children: e.title,
                        }),
                        s.jsx("p", {
                          className:
                            "text-base leading-relaxed text-textSecondary",
                          children: e.body,
                        }),
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
        r.d(t, { b: () => s });
        let s = (0, r(8570).createProxy)(
          String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\components\AnimateIn.tsx#AnimateIn`,
        );
      },
      4557: (e, t, r) => {
        "use strict";
        r.d(t, { a: () => s });
        let s = (0, r(8570).createProxy)(
          String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\components\Breadcrumb.tsx#Breadcrumb`,
        );
      },
      3219: (e, t, r) => {
        "use strict";
        r.d(t, { r: () => i });
        var s = r(9306);
        function i(e, t) {
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
    s = t.X(0, [963, 496, 990, 901], () => r(2613));
  module.exports = s;
})();
