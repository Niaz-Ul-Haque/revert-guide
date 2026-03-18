(() => {
  var e = {};
  ((e.id = 853),
    (e.ids = [853]),
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
      6456: (e, t, a) => {
        "use strict";
        (a.r(t),
          a.d(t, {
            GlobalError: () => n.a,
            __next_app__: () => m,
            originalPathname: () => u,
            pages: () => d,
            routeModule: () => p,
            tree: () => c,
          }),
          a(5183),
          a(9475),
          a(6982),
          a(1506),
          a(5866));
        var s = a(3191),
          r = a(8716),
          i = a(7922),
          n = a.n(i),
          l = a(5231),
          o = {};
        for (let e in l)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "originalPathname",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (o[e] = () => l[e]);
        a.d(t, o);
        let c = [
            "",
            {
              children: [
                "[locale]",
                {
                  children: [
                    "about",
                    {
                      children: [
                        "__PAGE__",
                        {},
                        {
                          page: [
                            () => Promise.resolve().then(a.bind(a, 5183)),
                            "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\about\\page.tsx",
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
          d = [
            "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\about\\page.tsx",
          ],
          u = "/[locale]/about/page",
          m = { require: a, loadChunk: () => Promise.resolve() },
          p = new s.AppPageRouteModule({
            definition: {
              kind: r.x.APP_PAGE,
              page: "/[locale]/about/page",
              pathname: "/[locale]/about",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: c },
          });
      },
      4631: (e, t, a) => {
        (Promise.resolve().then(a.bind(a, 5829)),
          Promise.resolve().then(a.bind(a, 3630)),
          Promise.resolve().then(a.t.bind(a, 2481, 23)));
      },
      5829: (e, t, a) => {
        "use strict";
        a.d(t, { AnimateIn: () => i });
        var s = a(326),
          r = a(7577);
        function i({
          children: e,
          className: t = "",
          delay: a = 0,
          animation: i = "fade-up",
          threshold: n = 0.1,
        }) {
          let l = (0, r.useRef)(null),
            [o, c] = (0, r.useState)(!1);
          return s.jsx("div", {
            ref: l,
            className: `${t} ${o ? { "fade-up": "animate-fade-up", "fade-in": "animate-fade-in", "scale-in": "animate-scale-in", "slide-in-right": "animate-slide-in-right" }[i] : "opacity-0"}`,
            style: o && a > 0 ? { animationDelay: `${a}s` } : void 0,
            children: e,
          });
        }
      },
      3630: (e, t, a) => {
        "use strict";
        a.d(t, { Breadcrumb: () => n });
        var s = a(326),
          r = a(434),
          i = a(3082);
        function n({ items: e }) {
          let t = (0, i.T)();
          return 0 === e.length
            ? null
            : s.jsx("nav", {
                "aria-label": t("common.breadcrumb"),
                className: "mb-8",
                children: s.jsx("ol", {
                  className:
                    "mb-0 flex flex-wrap items-center gap-1.5 pl-0 text-sm",
                  children: e.map((t, a) => {
                    let i = a === e.length - 1;
                    return (0, s.jsxs)(
                      "li",
                      {
                        className: "mb-0 inline-flex items-center gap-1.5",
                        children: [
                          a > 0 &&
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
                          i || !t.href
                            ? s.jsx("span", {
                                className: "font-medium text-textMuted",
                                "aria-current": i ? "page" : void 0,
                                children: t.label,
                              })
                            : s.jsx(r.default, {
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
      5183: (e, t, a) => {
        "use strict";
        (a.r(t), a.d(t, { default: () => u, generateMetadata: () => d }));
        var s = a(9510),
          r = a(7710),
          i = a(4557),
          n = a(6258),
          l = a(9306),
          o = a(3219);
        let c = {
          title: "About Revert Guide",
          missionTitle: "Our Mission",
          mission:
            "Revert Guide exists to support newly converted Muslims with compassionate, accessible guidance during their first year of Islam. We believe every revert deserves a supportive, non-judgmental space to learn and grow at their own pace. Our goal is to provide the information, encouragement, and practical tools that new Muslims need - all in one place, available offline, and completely free.",
          approachTitle: "Our Approach",
          approachItems: [
            {
              title: "Educational and beginner-focused",
              body: "We explain concepts from scratch, assuming no prior knowledge of Islam.",
            },
            {
              title: "Mainstream Sunni perspective",
              body: "Our content follows widely accepted Islamic scholarship without sectarian bias.",
            },
            {
              title: "Non-political and inclusive",
              body: "We focus on faith and practice, welcoming Muslims of all cultural backgrounds.",
            },
            {
              title: "Essentials over advanced topics",
              body: "We prioritise the fundamentals that new Muslims need most, leaving advanced jurisprudence to scholars.",
            },
            {
              title: "Ad-free and non-commercial",
              body: "No ads, no trackers, no monetisation. This is a service, not a business.",
            },
            {
              title: "Complementary to local guidance",
              body: "We encourage connecting with a local mosque and mentor. This guide supplements, but does not replace, personal relationships.",
            },
          ],
          disclaimerTitle: "Disclaimer",
          disclaimer:
            "This guide provides general educational information about Islam and is not a substitute for personal religious rulings (fatawa). For specific religious questions about your situation, please consult a knowledgeable local scholar or imam. We aim for accuracy, and any errors are unintentional.",
          contactTitle: "Contact",
          contact:
            "If you have questions about Islam, we encourage you to approach a local mosque or mentor for personalised guidance. For feedback on the guide itself, please use the feedback options within the app.",
        };
        function d({ params: e }) {
          return (0, o.r)(e.locale, "about");
        }
        function u({ params: e }) {
          let t = e.locale;
          return (0, s.jsxs)("div", {
            className: "mx-auto max-w-4xl px-5 py-10",
            children: [
              s.jsx(i.a, {
                items: [
                  { label: "Home", href: (0, l.FT)(t, "/") },
                  { label: c.title },
                ],
              }),
              (0, s.jsxs)("div", {
                className: "relative",
                children: [
                  s.jsx(n.b, {
                    children: s.jsx("h1", {
                      className:
                        "mb-10 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl",
                      children: c.title,
                    }),
                  }),
                  s.jsx("div", {
                    className:
                      "pointer-events-none absolute -right-6 top-0 hidden h-48 w-36 opacity-10 lg:block",
                    "aria-hidden": "true",
                    children: s.jsx(r.default, {
                      src: "/Grandfather male Character Standing.png",
                      alt: "",
                      fill: !0,
                      className: "object-contain",
                    }),
                  }),
                ],
              }),
              s.jsx(n.b, {
                children: (0, s.jsxs)("section", {
                  className: "mb-10",
                  "aria-labelledby": "mission",
                  children: [
                    s.jsx("h2", {
                      id: "mission",
                      className:
                        "mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                      children: c.missionTitle,
                    }),
                    s.jsx("p", {
                      className: "text-base leading-relaxed text-textSecondary",
                      children: c.mission,
                    }),
                  ],
                }),
              }),
              s.jsx(n.b, {
                children: (0, s.jsxs)("section", {
                  className: "mb-10",
                  "aria-labelledby": "approach",
                  children: [
                    s.jsx("h2", {
                      id: "approach",
                      className:
                        "mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                      children: c.approachTitle,
                    }),
                    s.jsx("ul", {
                      className:
                        "flex flex-col gap-3 pl-0 text-base text-textSecondary",
                      children: c.approachItems.map((e) =>
                        (0, s.jsxs)(
                          "li",
                          {
                            className:
                              "flex items-start gap-3 rounded-xl bg-surfaceElevated/50 p-4",
                            children: [
                              s.jsx("span", {
                                className:
                                  "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-primary/10",
                                children: s.jsx("span", {
                                  className:
                                    "block h-1.5 w-1.5 rounded-full bg-primary",
                                  "aria-hidden": "true",
                                }),
                              }),
                              (0, s.jsxs)("span", {
                                children: [
                                  s.jsx("strong", {
                                    className: "text-textPrimary",
                                    children: e.title,
                                  }),
                                  " -",
                                  " ",
                                  e.body,
                                ],
                              }),
                            ],
                          },
                          e.title,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
              s.jsx(n.b, {
                children: (0, s.jsxs)("section", {
                  className: "mb-10",
                  "aria-labelledby": "disclaimer",
                  children: [
                    s.jsx("h2", {
                      id: "disclaimer",
                      className:
                        "mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                      children: c.disclaimerTitle,
                    }),
                    s.jsx("p", {
                      className: "text-base leading-relaxed text-textSecondary",
                      children: c.disclaimer,
                    }),
                  ],
                }),
              }),
              s.jsx(n.b, {
                children: (0, s.jsxs)("section", {
                  "aria-labelledby": "contact",
                  children: [
                    s.jsx("h2", {
                      id: "contact",
                      className:
                        "mb-4 font-display text-2xl font-semibold tracking-tight text-textPrimary",
                      children: c.contactTitle,
                    }),
                    s.jsx("p", {
                      className: "text-base leading-relaxed text-textSecondary",
                      children: c.contact,
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
        a.d(t, { b: () => s });
        let s = (0, a(8570).createProxy)(
          String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\components\AnimateIn.tsx#AnimateIn`,
        );
      },
      4557: (e, t, a) => {
        "use strict";
        a.d(t, { a: () => s });
        let s = (0, a(8570).createProxy)(
          String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\components\Breadcrumb.tsx#Breadcrumb`,
        );
      },
      3219: (e, t, a) => {
        "use strict";
        a.d(t, { r: () => r });
        var s = a(9306);
        function r(e, t) {
          let a = (0, s.Ty)(e);
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
    s = t.X(0, [963, 496, 990, 710, 901], () => a(6456));
  module.exports = s;
})();
