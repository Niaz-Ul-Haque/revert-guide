(() => {
  var e = {};
  ((e.id = 822),
    (e.ids = [822]),
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
      228: (e, r, t) => {
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
          t(7315),
          t(9475),
          t(6982),
          t(1506),
          t(5866));
        var n = t(3191),
          s = t(8716),
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
                        "find-masjid",
                        {
                          children: [
                            "__PAGE__",
                            {},
                            {
                              page: [
                                () => Promise.resolve().then(t.bind(t, 7315)),
                                "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\resources\\find-masjid\\page.tsx",
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
            "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\resources\\find-masjid\\page.tsx",
          ],
          u = "/[locale]/resources/find-masjid/page",
          m = { require: t, loadChunk: () => Promise.resolve() },
          x = new n.AppPageRouteModule({
            definition: {
              kind: s.x.APP_PAGE,
              page: "/[locale]/resources/find-masjid/page",
              pathname: "/[locale]/resources/find-masjid",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      2365: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 6055));
      },
      5829: (e, r, t) => {
        "use strict";
        t.d(r, { AnimateIn: () => a });
        var n = t(326),
          s = t(7577);
        function a({
          children: e,
          className: r = "",
          delay: t = 0,
          animation: a = "fade-up",
          threshold: i = 0.1,
        }) {
          let o = (0, s.useRef)(null),
            [l, d] = (0, s.useState)(!1);
          return n.jsx("div", {
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
        var n = t(326),
          s = t(434),
          a = t(3082);
        function i({ items: e }) {
          let r = (0, a.T)();
          return 0 === e.length
            ? null
            : n.jsx("nav", {
                "aria-label": r("common.breadcrumb"),
                className: "mb-8",
                children: n.jsx("ol", {
                  className:
                    "mb-0 flex flex-wrap items-center gap-1.5 pl-0 text-sm",
                  children: e.map((r, t) => {
                    let a = t === e.length - 1;
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
                          a || !r.href
                            ? n.jsx("span", {
                                className: "font-medium text-textMuted",
                                "aria-current": a ? "page" : void 0,
                                children: r.label,
                              })
                            : n.jsx(s.default, {
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
      6055: (e, r, t) => {
        "use strict";
        t.d(r, { FindMasjidPageClient: () => x });
        var n = t(326),
          s = t(7577),
          a = t(434),
          i = t(3630),
          o = t(3626),
          l = t(1365);
        let d = {
          info: {
            bg: "bg-surfaceElevated/70",
            borderColor: "border-primary/30",
            iconBg: "bg-primary/10",
            iconColor: "text-primary",
            icon: n.jsx("svg", {
              className: "h-5 w-5",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "currentColor",
              "aria-hidden": "true",
              children: n.jsx("path", {
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
            icon: n.jsx("svg", {
              className: "h-5 w-5",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "currentColor",
              "aria-hidden": "true",
              children: n.jsx("path", {
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
            icon: n.jsx("svg", {
              className: "h-5 w-5",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "currentColor",
              "aria-hidden": "true",
              children: n.jsx("path", {
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
            icon: n.jsx("svg", {
              className: "h-5 w-5",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "currentColor",
              "aria-hidden": "true",
              children: n.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z",
              }),
            }),
          },
        };
        function c({ variant: e = "info", title: r, children: t }) {
          let s = d[e];
          return n.jsx("div", {
            className: `my-6 rounded-2xl border ${s.borderColor} ${s.bg} p-5 backdrop-blur-sm`,
            role: s.role ?? "note",
            children: (0, n.jsxs)("div", {
              className: "flex gap-3",
              children: [
                n.jsx("span", {
                  className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${s.iconBg} ${s.iconColor}`,
                  children: s.icon,
                }),
                (0, n.jsxs)("div", {
                  className: "min-w-0 flex-1",
                  children: [
                    r &&
                      n.jsx("p", {
                        className:
                          "mb-2 text-sm font-semibold text-textPrimary",
                        children: r,
                      }),
                    n.jsx("div", {
                      className:
                        "text-sm leading-relaxed text-textSecondary [&>p:last-child]:mb-0",
                      children: t,
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        var u = t(5829),
          m = t(8487);
        function x({ locale: e, masjids: r }) {
          let [t, d] = (0, s.useState)(""),
            [x, h] = (0, s.useState)(!1),
            p = (0, s.useMemo)(() => {
              if (!t.trim()) return r;
              let e = t.toLowerCase();
              return r.filter(
                (r) =>
                  r.name.toLowerCase().includes(e) ||
                  r.city.toLowerCase().includes(e) ||
                  r.postalCode.toLowerCase().includes(e) ||
                  r.address.toLowerCase().includes(e),
              );
            }, [r, t]);
          return (0, n.jsxs)("div", {
            className: "mx-auto max-w-5xl px-5 py-10",
            children: [
              n.jsx(i.Breadcrumb, {
                items: [
                  { label: "Home", href: (0, m.FT)(e, "/") },
                  { label: "Resources", href: (0, m.FT)(e, "/resources") },
                  { label: "Find a Masjid" },
                ],
              }),
              n.jsx("header", {
                className: "mb-8",
                children: (0, n.jsxs)(u.AnimateIn, {
                  children: [
                    n.jsx("h1", {
                      className:
                        "mb-3 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl",
                      children: "Find a Masjid",
                    }),
                    n.jsx("p", {
                      className: "text-lg text-textSecondary",
                      children:
                        "Search for mosques in the Toronto area. Connect with your local community.",
                    }),
                  ],
                }),
              }),
              x &&
                n.jsx(c, {
                  variant: "warning",
                  title: "You are offline",
                  children: n.jsx("p", {
                    children:
                      "The masjid list and search are available offline. Map features require an internet connection.",
                  }),
                }),
              n.jsx(u.AnimateIn, {
                delay: 0.1,
                children: n.jsx("div", {
                  className:
                    "mb-8 flex h-52 items-center justify-center rounded-2xl border-2 border-dashed border-border/60 bg-surfaceElevated/30 text-center sm:h-64",
                  children: (0, n.jsxs)("div", {
                    children: [
                      n.jsx("span", {
                        className:
                          "mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10",
                        children: n.jsx(l.J, {
                          name: "map-pin",
                          size: "lg",
                          className: "text-primary",
                        }),
                      }),
                      n.jsx("p", {
                        className:
                          "mb-1 text-base font-semibold text-textMuted",
                        children: "Map coming soon",
                      }),
                      n.jsx("p", {
                        className: "mb-0 text-sm text-textMuted",
                        children:
                          "An interactive map will be available in a future update.",
                      }),
                    ],
                  }),
                }),
              }),
              n.jsx(u.AnimateIn, {
                delay: 0.15,
                children: n.jsx(o.E, {
                  value: t,
                  onChange: d,
                  placeholder: "Search by name, city, or postal code...",
                  label: "Search masjids",
                  hideLabel: !0,
                  className: "mb-8",
                }),
              }),
              n.jsx("div", {
                "aria-live": "polite",
                className: "sr-only",
                children: t.trim()
                  ? `${p.length} ${1 === p.length ? "masjid found" : "masjids found"}`
                  : "",
              }),
              0 === p.length
                ? (0, n.jsxs)("div", {
                    className:
                      "rounded-2xl border border-border/60 bg-surfaceElevated/50 px-6 py-14 text-center",
                    children: [
                      n.jsx("p", {
                        className:
                          "mb-2 font-display text-lg font-semibold text-textPrimary",
                        children: "No masjids found",
                      }),
                      (0, n.jsxs)("p", {
                        className: "mb-0 text-sm text-textSecondary",
                        children: [
                          "Try a different search term or",
                          " ",
                          n.jsx("button", {
                            type: "button",
                            onClick: () => d(""),
                            className:
                              "font-medium text-primary underline hover:text-primaryHover",
                            children: "clear the search",
                          }),
                          ".",
                        ],
                      }),
                    ],
                  })
                : n.jsx("ul", {
                    className: "flex flex-col gap-4 pl-0",
                    children: p.map((e) =>
                      (0, n.jsxs)(
                        "li",
                        {
                          className:
                            "rounded-2xl border border-border/60 bg-white p-6 shadow-card transition-all duration-300 hover:shadow-soft",
                          children: [
                            n.jsx("h2", {
                              className:
                                "mb-3 mt-0 font-display text-lg font-bold text-textPrimary",
                              children: e.name,
                            }),
                            (0, n.jsxs)("div", {
                              className:
                                "flex flex-col gap-2 text-sm text-textSecondary",
                              children: [
                                (0, n.jsxs)("p", {
                                  className: "mb-0 flex items-start gap-2.5",
                                  children: [
                                    n.jsx(l.J, {
                                      name: "map-pin",
                                      size: "sm",
                                      className:
                                        "mt-0.5 shrink-0 text-primary/60",
                                    }),
                                    (0, n.jsxs)("span", {
                                      children: [
                                        e.address,
                                        ", ",
                                        e.city,
                                        ", ",
                                        e.stateProvince,
                                        " ",
                                        e.postalCode,
                                      ],
                                    }),
                                  ],
                                }),
                                e.phone &&
                                  (0, n.jsxs)("p", {
                                    className: "mb-0 flex items-center gap-2.5",
                                    children: [
                                      n.jsx("svg", {
                                        className:
                                          "h-4 w-4 shrink-0 text-primary/60",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: 1.5,
                                        stroke: "currentColor",
                                        "aria-hidden": "true",
                                        children: n.jsx("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          d: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z",
                                        }),
                                      }),
                                      n.jsx("a", {
                                        href: `tel:${e.phone.replace(/[^\d+]/g, "")}`,
                                        className:
                                          "text-primary no-underline hover:underline",
                                        children: e.phone,
                                      }),
                                    ],
                                  }),
                                e.website &&
                                  (0, n.jsxs)("p", {
                                    className: "mb-0 flex items-center gap-2.5",
                                    children: [
                                      n.jsx(l.J, {
                                        name: "globe",
                                        size: "sm",
                                        className: "shrink-0 text-primary/60",
                                      }),
                                      (0, n.jsxs)("a", {
                                        href: e.website,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className:
                                          "text-primary no-underline hover:underline",
                                        children: [
                                          "Visit website",
                                          (0, n.jsxs)("span", {
                                            className: "sr-only",
                                            children: [" for ", e.name],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                e.notes &&
                                  n.jsx("p", {
                                    className:
                                      "mb-0 mt-1 rounded-lg bg-surfaceElevated/50 px-3 py-1.5 text-xs text-textMuted",
                                    children: e.notes,
                                  }),
                              ],
                            }),
                          ],
                        },
                        e.id,
                      ),
                    ),
                  }),
              n.jsx(u.AnimateIn, {
                className: "mt-10",
                children: (0, n.jsxs)("div", {
                  className:
                    "rounded-2xl border border-primaryGreen/30 bg-surfaceElevated/50 p-6 text-center",
                  children: [
                    n.jsx("p", {
                      className: "mb-3 text-sm text-textSecondary",
                      children:
                        "New to visiting a mosque? Learn what to expect.",
                    }),
                    (0, n.jsxs)(a.default, {
                      href: (0, m.FT)(e, "/topics/community"),
                      className:
                        "inline-flex items-center gap-1.5 rounded-xl bg-primary/10 px-4 py-2 text-sm font-medium text-primary no-underline transition-all duration-200 hover:bg-primary/20 hover:text-primaryHover",
                      children: [
                        "Read: Building Your Muslim Community",
                        n.jsx(l.J, { name: "chevron-right", size: "sm" }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        }
      },
      3626: (e, r, t) => {
        "use strict";
        t.d(r, { E: () => i });
        var n = t(326),
          s = t(7577),
          a = t(3082);
        function i({
          value: e,
          onChange: r,
          placeholder: t,
          label: i,
          hideLabel: o = !1,
          className: l = "",
        }) {
          let d = (0, a.T)(),
            c = (0, s.useRef)(null),
            u = (0, s.useId)(),
            m = `${u}-search`;
          return (0, n.jsxs)("div", {
            className: l,
            children: [
              n.jsx("label", {
                htmlFor: m,
                className: o
                  ? "sr-only"
                  : "mb-2 block text-sm font-medium text-textPrimary",
                children: i ?? d("common.search"),
              }),
              (0, n.jsxs)("div", {
                className: "relative",
                children: [
                  n.jsx("svg", {
                    className:
                      "pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-textMuted",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    children: n.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
                    }),
                  }),
                  n.jsx("input", {
                    ref: c,
                    id: m,
                    type: "search",
                    value: e,
                    onChange: (e) => r(e.target.value),
                    placeholder: t ?? d("common.searchPlaceholder"),
                    className:
                      "w-full rounded-xl border border-border/60 bg-white py-3 pl-12 pr-10 text-base text-textPrimary shadow-inner-glow placeholder:text-textMuted/60 transition-all duration-200 focus:border-primaryGreen focus:shadow-soft focus:outline-2 focus:outline-offset-0 focus:outline-borderStrong",
                  }),
                  e.length > 0 &&
                    n.jsx("button", {
                      type: "button",
                      onClick: function () {
                        (r(""), c.current?.focus());
                      },
                      className:
                        "absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-lg text-textMuted transition-all duration-200 hover:bg-surfaceElevated hover:text-textSecondary focus-visible:outline-2 focus-visible:outline-borderStrong",
                      "aria-label": d("common.clearSearch"),
                      children: n.jsx("svg", {
                        className: "h-4 w-4",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: 2,
                        stroke: "currentColor",
                        "aria-hidden": "true",
                        children: n.jsx("path", {
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
      7315: (e, r, t) => {
        "use strict";
        (t.r(r), t.d(r, { default: () => l, generateMetadata: () => o }));
        var n = t(9510);
        let s = (0, t(8570).createProxy)(
          String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\components\FindMasjidPageClient.tsx#FindMasjidPageClient`,
        );
        var a = t(4745),
          i = t(3219);
        function o({ params: e }) {
          return (0, i.r)(e.locale, "findMasjid");
        }
        function l({ params: e }) {
          return n.jsx(s, { locale: e.locale, masjids: (0, a.ik)(e.locale) });
        }
      },
      4745: (e, r, t) => {
        "use strict";
        t.d(r, {
          $d: () => k,
          Ei: () => v,
          IY: () => m,
          Jz: () => g,
          MB: () => N,
          NI: () => b,
          V3: () => f,
          Zb: () => h,
          aQ: () => y,
          fY: () => j,
          hS: () => u,
          hf: () => p,
          ik: () => C,
          tw: () => w,
        });
        var n = t(2048),
          s = t(5315),
          a = t(9306);
        let i = s.join(process.cwd(), "content");
        function o(e) {
          return JSON.parse(n.readFileSync(e, "utf-8"));
        }
        function l(e) {
          return s.join(i, e);
        }
        function d(e, r) {
          let t = s.join(l(e), r);
          return n.existsSync(t) ? t : s.join(l(a.ZW), r);
        }
        function c(e, r) {
          let t = s.join(l(a.ZW), r),
            i = s.join(l(e), r),
            c = new Set();
          if (n.existsSync(t))
            for (let e of n.readdirSync(t)) e.endsWith(".json") && c.add(e);
          if (n.existsSync(i))
            for (let e of n.readdirSync(i)) e.endsWith(".json") && c.add(e);
          return Array.from(c).map((t) => o(d(e, s.join(r, t))));
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
        function h(e, r = a.ZW) {
          return x(r).find((r) => r.id === e);
        }
        function p(e, r = a.ZW) {
          return x(r).find((r) => r.slug === e);
        }
        function f(e, r = a.ZW) {
          let t = m(e, r);
          return t
            ? t.stepIds.map((e) => h(e, r)).filter((e) => void 0 !== e)
            : [];
        }
        function b(e = a.ZW) {
          return c(e, "topics");
        }
        function j(e, r = a.ZW) {
          return b(r).find((r) => r.id === e);
        }
        function g(e, r = a.ZW) {
          return b(r).find((r) => (r.slug ?? r.id) === e);
        }
        function v(e = a.ZW) {
          return o(d(e, "glossary.json")).sort((e, r) =>
            e.term.localeCompare(r.term),
          );
        }
        function y(e, r = a.ZW) {
          return v(r).find((r) => r.id === e);
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
        function C(e = a.ZW) {
          return o(d(e, "masjids.json"));
        }
      },
      3219: (e, r, t) => {
        "use strict";
        t.d(r, { r: () => s });
        var n = t(9306);
        function s(e, r) {
          let t = (0, n.Ty)(e);
          return {
            title: t(`metadata.${r}.title`),
            description: t(`metadata.${r}.description`),
          };
        }
      },
    }));
  var r = require("../../../../webpack-runtime.js");
  r.C(e);
  var t = (e) => r((r.s = e)),
    n = r.X(0, [963, 496, 990, 901], () => t(228));
  module.exports = n;
})();
