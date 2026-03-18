((exports.id = 901),
  (exports.ids = [901]),
  (exports.modules = {
    1003: (e, r, t) => {
      Promise.resolve().then(t.bind(t, 8549));
    },
    6499: (e, r, t) => {
      (Promise.resolve().then(t.bind(t, 725)),
        Promise.resolve().then(t.bind(t, 3082)),
        Promise.resolve().then(t.bind(t, 1440)),
        Promise.resolve().then(t.bind(t, 4823)));
    },
    9930: (e, r, t) => {
      (Promise.resolve().then(t.t.bind(t, 2994, 23)),
        Promise.resolve().then(t.t.bind(t, 6114, 23)),
        Promise.resolve().then(t.t.bind(t, 9727, 23)),
        Promise.resolve().then(t.t.bind(t, 9671, 23)),
        Promise.resolve().then(t.t.bind(t, 1868, 23)),
        Promise.resolve().then(t.t.bind(t, 4759, 23)));
    },
    5304: () => {},
    8549: (e, r, t) => {
      "use strict";
      (t.r(r), t.d(r, { default: () => u }));
      var i = t(326),
        a = t(6226),
        o = t(5047),
        s = t(7862),
        n = t(1365),
        l = t(8487);
      function u() {
        let e = (0, o.usePathname)(),
          r = (0, l.jR)(e.split("/")[1]);
        return (0, i.jsxs)("div", {
          className:
            "mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-5 py-16 text-center",
          children: [
            i.jsx("div", {
              className:
                "mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-primary/10",
              children: i.jsx(a.default, {
                src: "/revert-guide-logo.png",
                alt: "",
                width: 48,
                height: 48,
                "aria-hidden": "true",
              }),
            }),
            i.jsx("h1", {
              className:
                "mb-3 font-display text-3xl font-semibold tracking-tight text-textPrimary",
              children: "Page Not Found",
            }),
            i.jsx("p", {
              className: "mb-8 text-base leading-relaxed text-textSecondary",
              children:
                "This page seems to have wandered off. It may have been moved, removed, or the URL might be incorrect. Let's get you back on track.",
            }),
            (0, i.jsxs)("div", {
              className: "flex flex-col gap-3 sm:flex-row",
              children: [
                (0, i.jsxs)(s.z, {
                  href: (0, l.FT)(r, "/"),
                  variant: "primary",
                  children: [
                    i.jsx(n.J, { name: "home", size: "sm" }),
                    "Return Home",
                  ],
                }),
                i.jsx(s.z, {
                  href: (0, l.FT)(r, "/roadmap"),
                  variant: "outline",
                  children: "Go to Roadmap",
                }),
              ],
            }),
          ],
        });
      }
    },
    7862: (e, r, t) => {
      "use strict";
      t.d(r, { z: () => s });
      var i = t(326),
        a = t(434);
      let o = {
        primary:
          "bg-primary text-white shadow-[0_2px_8px_rgba(0,0,0,0.12)] hover:bg-[#5B9168] hover:text-white hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-borderStrong",
        secondary:
          "bg-accent text-white shadow-[0_2px_8px_rgba(0,0,0,0.12)] hover:bg-[#7A8B4A] hover:text-white hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-borderStrong",
        outline:
          "border-2 border-primary/30 text-primary bg-transparent hover:bg-primary/10 hover:border-primary/60 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-borderStrong",
      };
      function s(e) {
        let {
            variant: r = "primary",
            children: t,
            className: s = "",
            ...n
          } = e,
          l = `inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-base font-semibold no-underline hover:no-underline transition-all duration-300 ease-out-expo focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${o[r]} ${s}`;
        if ("href" in n && n.href) {
          let { href: e, external: r, ...o } = n;
          return r
            ? (0, i.jsxs)("a", {
                href: e,
                className: l,
                target: "_blank",
                rel: "noopener noreferrer",
                ...o,
                children: [
                  t,
                  i.jsx("svg", {
                    className: "h-4 w-4",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 2,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    children: i.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25",
                    }),
                  }),
                ],
              })
            : i.jsx(a.default, { href: e, className: l, ...o, children: t });
        }
        return i.jsx("button", { className: l, ...n, children: t });
      }
    },
    725: (e, r, t) => {
      "use strict";
      t.d(r, { Footer: () => l });
      var i = t(326),
        a = t(434),
        o = t(6226),
        s = t(3082),
        n = t(8487);
      function l() {
        let e = (0, s.b)(),
          r = (0, s.T)(),
          t = [
            { href: (0, n.FT)(e, "/about"), label: r("footer.about") },
            {
              href: (0, n.FT)(e, "/accessibility"),
              label: r("footer.accessibility"),
            },
            { href: (0, n.FT)(e, "/privacy"), label: r("footer.privacy") },
            { href: (0, n.FT)(e, "/terms"), label: r("footer.terms") },
            { href: (0, n.FT)(e, "/sources"), label: r("footer.sources") },
          ],
          l = [
            { href: (0, n.FT)(e, "/roadmap"), label: r("nav.roadmap") },
            { href: (0, n.FT)(e, "/topics"), label: r("nav.topics") },
            { href: (0, n.FT)(e, "/glossary"), label: r("nav.glossary") },
            { href: (0, n.FT)(e, "/resources"), label: r("nav.resources") },
            { href: (0, n.FT)(e, "/ramadan"), label: r("nav.ramadan") },
            {
              href: (0, n.FT)(e, "/mental-health"),
              label: r("nav.mentalHealth"),
            },
          ];
        return (0, i.jsxs)("footer", {
          className:
            "relative overflow-hidden border-t border-border/50 bg-surface",
          children: [
            i.jsx("div", {
              className:
                "pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primaryGreen/10 blur-3xl",
              "aria-hidden": "true",
            }),
            i.jsx("div", {
              className:
                "pointer-events-none absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-accentYellow/10 blur-3xl",
              "aria-hidden": "true",
            }),
            (0, i.jsxs)("div", {
              className: "relative mx-auto max-w-6xl px-5 py-12 md:py-16",
              children: [
                (0, i.jsxs)("div", {
                  className: "grid gap-10 md:grid-cols-12",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "md:col-span-5",
                      children: [
                        (0, i.jsxs)(a.default, {
                          href: (0, n.FT)(e, "/"),
                          className:
                            "mb-4 inline-flex items-center gap-2.5 text-lg font-bold text-primary no-underline hover:text-primaryHover",
                          children: [
                            i.jsx("span", {
                              className:
                                "flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg",
                              children: i.jsx(o.default, {
                                src: "/revert-guide-logo.png",
                                alt: "",
                                width: 32,
                                height: 32,
                                "aria-hidden": "true",
                              }),
                            }),
                            i.jsx("span", {
                              className: "font-display tracking-tight",
                              children: r("brand.name"),
                            }),
                          ],
                        }),
                        i.jsx("p", {
                          className:
                            "mb-4 max-w-sm text-sm leading-relaxed text-textSecondary",
                          children: r("footer.description"),
                        }),
                        i.jsx("div", {
                          className:
                            "mt-2 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 opacity-60 md:h-20 md:w-20",
                          "aria-hidden": "true",
                          children: i.jsx(o.default, {
                            src: "/revert-guide-logo.png",
                            alt: "",
                            width: 40,
                            height: 40,
                            className: "opacity-80",
                            "aria-hidden": "true",
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: "md:col-span-3",
                      children: [
                        i.jsx("p", {
                          className:
                            "mb-4 text-xs font-semibold uppercase tracking-widest text-textMuted",
                          children: r("footer.explore"),
                        }),
                        i.jsx("nav", {
                          "aria-label": r("footer.quickLinksAriaLabel"),
                          children: i.jsx("ul", {
                            className: "flex flex-col gap-2.5 pl-0",
                            children: l.map((e) =>
                              i.jsx(
                                "li",
                                {
                                  className: "mb-0",
                                  children: i.jsx(a.default, {
                                    href: e.href,
                                    className:
                                      "text-sm font-medium text-textSecondary no-underline transition-colors duration-200 hover:text-primary",
                                    children: e.label,
                                  }),
                                },
                                e.href,
                              ),
                            ),
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: "md:col-span-4",
                      children: [
                        i.jsx("p", {
                          className:
                            "mb-4 text-xs font-semibold uppercase tracking-widest text-textMuted",
                          children: r("footer.information"),
                        }),
                        i.jsx("nav", {
                          "aria-label": r("footer.navigationAriaLabel"),
                          children: i.jsx("ul", {
                            className: "flex flex-col gap-2.5 pl-0",
                            children: t.map((e) =>
                              i.jsx(
                                "li",
                                {
                                  className: "mb-0",
                                  children: i.jsx(a.default, {
                                    href: e.href,
                                    className:
                                      "text-sm font-medium text-textSecondary no-underline transition-colors duration-200 hover:text-primary",
                                    children: e.label,
                                  }),
                                },
                                e.href,
                              ),
                            ),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                i.jsx("div", {
                  className: "mt-10 border-t border-border/50 pt-6",
                  children: (0, i.jsxs)("p", {
                    className: "mb-0 text-center text-xs text-textMuted",
                    children: [
                      "\xa9 ",
                      new Date().getFullYear(),
                      " ",
                      r("footer.copyright"),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    1365: (e, r, t) => {
      "use strict";
      t.d(r, { J: () => s });
      var i = t(326);
      let a = { sm: "h-4 w-4", md: "h-5 w-5", lg: "h-6 w-6" },
        o = {
          home: i.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
          }),
          book: i.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25",
          }),
          search: i.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
          }),
          "map-pin": (0, i.jsxs)(i.Fragment, {
            children: [
              i.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
              }),
              i.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z",
              }),
            ],
          }),
          menu: i.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",
          }),
          x: i.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M6 18 18 6M6 6l12 12",
          }),
          "external-link": i.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25",
          }),
          "chevron-right": i.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m8.25 4.5 7.5 7.5-7.5 7.5",
          }),
          "chevron-down": i.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m19.5 8.25-7.5 7.5-7.5-7.5",
          }),
          clock: i.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
          }),
          check: i.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m4.5 12.75 6 6 9-13.5",
          }),
          info: i.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z",
          }),
          "alert-triangle": i.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z",
          }),
          "alert-circle": i.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z",
          }),
          lightbulb: i.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
          }),
          globe: i.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418",
          }),
          play: i.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z",
          }),
          "file-text": i.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z",
          }),
          users: i.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z",
          }),
          download: i.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3",
          }),
          star: i.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z",
          }),
        };
      function s({ name: e, size: r = "md", className: t = "", label: s }) {
        let n = !s;
        return i.jsx("svg", {
          className: `${a[r]} ${t}`,
          fill: "none",
          viewBox: "0 0 24 24",
          strokeWidth: 1.5,
          stroke: "currentColor",
          "aria-hidden": n ? "true" : void 0,
          "aria-label": s,
          role: s ? "img" : void 0,
          focusable: "false",
          children: o[e],
        });
      }
    },
    3082: (e, r, t) => {
      "use strict";
      t.d(r, { LocaleProvider: () => n, T: () => u, b: () => l });
      var i = t(326),
        a = t(7577),
        o = t(8487);
      let s = (0, a.createContext)(null);
      function n({ children: e, locale: r, messages: t }) {
        let o = (0, a.useMemo)(() => ({ locale: r, messages: t }), [r, t]);
        return i.jsx(s.Provider, { value: o, children: e });
      }
      function l() {
        let e = (0, a.useContext)(s);
        if (!e) throw Error("useLocale must be used within LocaleProvider");
        return e.locale;
      }
      function u() {
        let e = (0, a.useContext)(s);
        if (!e)
          throw Error("useTranslations must be used within LocaleProvider");
        return (0, a.useMemo)(() => (0, o.eX)(e.messages), [e.messages]);
      }
    },
    1440: (e, r, t) => {
      "use strict";
      t.d(r, { Navbar: () => p });
      var i = t(326),
        a = t(7577),
        o = t(434),
        s = t(6226),
        n = t(5047),
        l = t(8487),
        u = t(3082);
      function d() {
        let e = (0, n.useRouter)(),
          r = (0, u.b)(),
          t = (0, n.usePathname)(),
          a = (0, u.T)();
        return (0, i.jsxs)("label", {
          className:
            "flex items-center gap-2 rounded-xl border border-border/60 bg-white/85 px-3 py-2 shadow-soft",
          children: [
            i.jsx("span", {
              className:
                "text-xs font-semibold uppercase tracking-wide text-textMuted",
              children: a("languageSwitcher.label"),
            }),
            i.jsx("select", {
              "aria-label": a("languageSwitcher.ariaLabel"),
              value: r,
              onChange: (r) => {
                let i = r.target.value;
                (window.localStorage.setItem(l.nO, i), e.push((0, l.b1)(t, i)));
              },
              className:
                "bg-transparent text-sm font-medium text-textPrimary outline-none",
              children: l.RF.map((e) =>
                i.jsx(
                  "option",
                  { value: e, lang: e, children: (0, l._q)(e) },
                  e,
                ),
              ),
            }),
          ],
        });
      }
      function c({ item: e, isActive: r }) {
        let [t, s] = (0, a.useState)(!1),
          n = (0, a.useRef)(null),
          l = (0, a.useRef)(null),
          u = (0, a.useCallback)(() => {
            l.current = setTimeout(() => s(!1), 150);
          }, []),
          d = (0, a.useCallback)(() => {
            (l.current && (clearTimeout(l.current), (l.current = null)), s(!0));
          }, []);
        return (0, i.jsxs)("li", {
          ref: n,
          className: "relative mb-0 list-none",
          onMouseEnter: d,
          onMouseLeave: u,
          children: [
            (0, i.jsxs)("button", {
              className: `inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium no-underline transition-all duration-200 hover:bg-surfaceElevated hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong ${r ? "text-primary" : "text-textSecondary"}`,
              "aria-expanded": t,
              "aria-haspopup": "true",
              onClick: () => s(!t),
              onKeyDown: function (e) {
                ("Escape" === e.key && s(!1),
                  "ArrowDown" !== e.key || t || (e.preventDefault(), s(!0)));
              },
              children: [
                e.label,
                i.jsx("svg", {
                  className: `h-3.5 w-3.5 transition-transform duration-300 ease-out-expo ${t ? "rotate-180" : ""}`,
                  fill: "none",
                  viewBox: "0 0 24 24",
                  strokeWidth: 2.5,
                  stroke: "currentColor",
                  "aria-hidden": "true",
                  children: i.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "m19.5 8.25-7.5 7.5-7.5-7.5",
                  }),
                }),
              ],
            }),
            t &&
              i.jsx("ul", {
                className:
                  "absolute left-0 top-full z-50 mt-2 mb-0 min-w-[200px] list-none animate-slide-down rounded-xl border border-border/50 bg-white/95 p-2 pl-0 shadow-elevated backdrop-blur-lg",
                onMouseEnter: d,
                onMouseLeave: u,
                children: e.dropdown.map((e) =>
                  i.jsx(
                    "li",
                    {
                      className: "mb-0 list-none",
                      children: i.jsx(o.default, {
                        href: e.href,
                        className:
                          "block rounded-lg px-3 py-2.5 text-sm font-medium text-textSecondary no-underline transition-all duration-200 hover:bg-surfaceElevated hover:text-primary focus-visible:bg-surfaceElevated focus-visible:text-primary focus-visible:outline-none",
                        onClick: () => s(!1),
                        onKeyDown: (e) => {
                          "Escape" === e.key && s(!1);
                        },
                        children: e.label,
                      }),
                    },
                    e.href,
                  ),
                ),
              }),
          ],
        });
      }
      function p() {
        let e = (0, u.b)(),
          r = (0, u.T)(),
          t = (0, n.usePathname)(),
          [p, m] = (0, a.useState)(!1),
          [h, v] = (0, a.useState)(!1),
          f = (0, a.useRef)(null),
          b = [
            { href: (0, l.FT)(e, "/roadmap"), label: r("nav.roadmap") },
            { href: (0, l.FT)(e, "/topics"), label: r("nav.topics") },
            { href: (0, l.FT)(e, "/glossary"), label: r("nav.glossary") },
            {
              href: (0, l.FT)(e, "/resources"),
              label: r("nav.resources"),
              dropdown: [
                {
                  href: (0, l.FT)(e, "/resources"),
                  label: r("nav.allResources"),
                },
                {
                  href: (0, l.FT)(e, "/resources/find-masjid"),
                  label: r("nav.findMasjid"),
                },
              ],
            },
            {
              href: (0, l.FT)(e, "/about"),
              label: r("nav.about"),
              dropdown: [
                { href: (0, l.FT)(e, "/about"), label: r("nav.aboutUs") },
                {
                  href: (0, l.FT)(e, "/accessibility"),
                  label: r("nav.accessibility"),
                },
                { href: (0, l.FT)(e, "/privacy"), label: r("nav.privacy") },
                { href: (0, l.FT)(e, "/terms"), label: r("nav.terms") },
                { href: (0, l.FT)(e, "/sources"), label: r("nav.sources") },
              ],
            },
            {
              href: (0, l.FT)(e, "/resources/find-masjid"),
              label: r("nav.findMasjid"),
              prominent: !0,
            },
          ],
          x = [
            { href: (0, l.FT)(e, "/"), label: r("nav.home") },
            { href: (0, l.FT)(e, "/roadmap"), label: r("nav.roadmap") },
            { href: (0, l.FT)(e, "/topics"), label: r("nav.topics") },
            { href: (0, l.FT)(e, "/glossary"), label: r("nav.glossary") },
            { href: (0, l.FT)(e, "/resources"), label: r("nav.resources") },
            {
              href: (0, l.FT)(e, "/resources/find-masjid"),
              label: r("nav.findMasjid"),
              prominent: !0,
            },
            { href: (0, l.FT)(e, "/ramadan"), label: r("nav.ramadan") },
            {
              href: (0, l.FT)(e, "/mental-health"),
              label: r("nav.mentalHealth"),
            },
            { href: (0, l.FT)(e, "/about"), label: r("nav.about") },
            {
              href: (0, l.FT)(e, "/accessibility"),
              label: r("nav.accessibility"),
            },
            { href: (0, l.FT)(e, "/privacy"), label: r("nav.privacy") },
            { href: (0, l.FT)(e, "/terms"), label: r("nav.terms") },
            { href: (0, l.FT)(e, "/sources"), label: r("nav.sources") },
          ];
        return (0, i.jsxs)("header", {
          className: `sticky top-0 z-40 transition-all duration-300 ${h ? "border-b border-border/40 bg-white/80 shadow-soft backdrop-blur-xl" : "border-b border-transparent bg-white"}`,
          children: [
            (0, i.jsxs)("nav", {
              "aria-label": r("nav.mainNavigation"),
              className:
                "mx-auto flex max-w-6xl items-center justify-between px-5 py-3",
              children: [
                (0, i.jsxs)(o.default, {
                  href: (0, l.FT)(e, "/"),
                  className:
                    "group flex items-center gap-2.5 text-xl font-bold text-primary no-underline hover:text-primaryHover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong",
                  "aria-label": r("brand.homeAriaLabel"),
                  children: [
                    i.jsx("span", {
                      className:
                        "flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl shadow-soft transition-transform duration-300 group-hover:scale-105",
                      children: i.jsx(s.default, {
                        src: "/revert-guide-logo.png",
                        alt: "",
                        width: 40,
                        height: 40,
                        "aria-hidden": "true",
                      }),
                    }),
                    i.jsx("span", {
                      className: "font-display text-lg tracking-tight",
                      children: r("brand.name"),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "hidden items-center gap-3 lg:flex",
                  children: [
                    i.jsx("ul", {
                      className:
                        "mb-0 list-none items-center gap-1 pl-0 lg:flex",
                      children: b.map((e) => {
                        var r, a;
                        let s =
                          ((r = e.href),
                          (a = e.dropdown),
                          t === r || (!!a && a.some((e) => t === e.href)));
                        return e.dropdown
                          ? i.jsx(c, { item: e, isActive: s }, e.label)
                          : e.prominent
                            ? i.jsx(
                                "li",
                                {
                                  className: "mb-0 list-none",
                                  children: (0, i.jsxs)(o.default, {
                                    href: e.href,
                                    className:
                                      "ml-2 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white no-underline shadow-[0_2px_8px_rgba(0,0,0,0.12)] transition-all duration-200 hover:bg-[#5B9168] hover:text-white hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong",
                                    "aria-current":
                                      t === e.href ? "page" : void 0,
                                    children: [
                                      (0, i.jsxs)("svg", {
                                        className: "h-4 w-4",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: 1.5,
                                        stroke: "currentColor",
                                        "aria-hidden": "true",
                                        children: [
                                          i.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
                                          }),
                                          i.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z",
                                          }),
                                        ],
                                      }),
                                      e.label,
                                    ],
                                  }),
                                },
                                e.href,
                              )
                            : i.jsx(
                                "li",
                                {
                                  className: "mb-0 list-none",
                                  children: i.jsx(o.default, {
                                    href: e.href,
                                    className: `relative rounded-lg px-3 py-2 text-sm font-medium no-underline transition-all duration-200 hover:bg-surfaceElevated hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong ${s ? "text-primary bg-surfaceElevated" : "text-textSecondary"}`,
                                    "aria-current":
                                      t === e.href ? "page" : void 0,
                                    children: e.label,
                                  }),
                                },
                                e.href,
                              );
                      }),
                    }),
                    i.jsx(d, {}),
                  ],
                }),
                i.jsx("button", {
                  className:
                    "inline-flex h-11 w-11 items-center justify-center rounded-xl text-textSecondary transition-all duration-200 hover:bg-surfaceElevated hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong lg:hidden",
                  onClick: () => m(!p),
                  "aria-expanded": p,
                  "aria-controls": "mobile-menu",
                  "aria-label": r(p ? "nav.closeMenu" : "nav.openMenu"),
                  children: (0, i.jsxs)("div", {
                    className: "relative h-5 w-5",
                    children: [
                      i.jsx("span", {
                        className: `absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-out-expo ${p ? "top-[9px] rotate-45" : "top-1"}`,
                      }),
                      i.jsx("span", {
                        className: `absolute left-0 top-[9px] block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-out-expo ${p ? "opacity-0 scale-x-0" : "opacity-100"}`,
                      }),
                      i.jsx("span", {
                        className: `absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-out-expo ${p ? "top-[9px] -rotate-45" : "top-[17px]"}`,
                      }),
                    ],
                  }),
                }),
              ],
            }),
            i.jsx("div", {
              className: `fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${p ? "opacity-100" : "pointer-events-none opacity-0"}`,
              "aria-hidden": "true",
              onClick: () => m(!1),
            }),
            (0, i.jsxs)("div", {
              ref: f,
              id: "mobile-menu",
              className: `fixed inset-x-0 top-[57px] z-50 max-h-[calc(100vh-57px)] overflow-y-auto bg-white/95 backdrop-blur-xl transition-all duration-300 ease-out-expo lg:hidden ${p ? "translate-y-0 opacity-100" : "-translate-y-4 pointer-events-none opacity-0"}`,
              role: "dialog",
              "aria-label": r("nav.mobileMenu"),
              children: [
                i.jsx("div", {
                  className: "border-b border-border/40 px-5 py-4",
                  children: i.jsx(d, {}),
                }),
                i.jsx("ul", {
                  className: "space-y-1 px-5 py-4",
                  children: x.map((e, r) => {
                    let a = t === e.href;
                    return i.jsx(
                      "li",
                      {
                        className: p ? "animate-fade-up" : "",
                        style: p ? { animationDelay: `${0.03 * r}s` } : void 0,
                        children: (0, i.jsxs)(o.default, {
                          href: e.href,
                          className: `flex min-h-11 items-center rounded-xl px-4 text-sm font-medium no-underline transition-all duration-200 ${e.prominent ? "mt-2 gap-2.5 bg-primary text-white shadow-soft hover:bg-primaryHover" : a ? "bg-surfaceElevated text-primary" : "text-textSecondary hover:bg-surface hover:text-primary"}`,
                          "aria-current": a ? "page" : void 0,
                          onClick: () => m(!1),
                          children: [
                            e.prominent &&
                              (0, i.jsxs)("svg", {
                                className: "h-4 w-4",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                strokeWidth: 1.5,
                                stroke: "currentColor",
                                "aria-hidden": "true",
                                children: [
                                  i.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
                                  }),
                                  i.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z",
                                  }),
                                ],
                              }),
                            e.label,
                          ],
                        }),
                      },
                      e.href,
                    );
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    4823: (e, r, t) => {
      "use strict";
      t.d(r, { OfflineIndicator: () => s });
      var i = t(326),
        a = t(7577),
        o = t(3082);
      function s() {
        let e = (0, o.T)(),
          [r, t] = (0, a.useState)(!1);
        return r
          ? (0, i.jsxs)("div", {
              role: "status",
              "aria-live": "polite",
              className:
                "fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-2.5 bg-warning/95 px-4 py-2.5 text-sm font-medium text-white backdrop-blur-sm",
              children: [
                (0, i.jsxs)("svg", {
                  "aria-hidden": "true",
                  width: "16",
                  height: "16",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  children: [
                    i.jsx("line", { x1: "1", y1: "1", x2: "23", y2: "23" }),
                    i.jsx("path", {
                      d: "M16.72 11.06A10.94 10.94 0 0 1 19 12.55",
                    }),
                    i.jsx("path", {
                      d: "M5 12.55a10.94 10.94 0 0 1 5.17-2.39",
                    }),
                    i.jsx("path", { d: "M10.71 5.05A16 16 0 0 1 22.56 9" }),
                    i.jsx("path", { d: "M1.42 9a15.91 15.91 0 0 1 4.7-2.88" }),
                    i.jsx("path", { d: "M8.53 16.11a6 6 0 0 1 6.95 0" }),
                    i.jsx("line", {
                      x1: "12",
                      y1: "20",
                      x2: "12.01",
                      y2: "20",
                    }),
                  ],
                }),
                e("common.offline"),
              ],
            })
          : null;
      }
    },
    8487: (e, r, t) => {
      "use strict";
      t.d(r, {
        ZW: () => s,
        nO: () => n,
        RF: () => o,
        eX: () => p,
        _q: () => h,
        Ty: () => m,
        FT: () => v,
        jR: () => c,
        b1: () => f,
      });
      let i = JSON.parse(
          '{"brand":{"name":"Revert Guide","homeAriaLabel":"Revert Guide - Home"},"languageSwitcher":{"ariaLabel":"Language switcher","label":"Language","en":"EN","fr":"FR"},"nav":{"home":"Home","roadmap":"Roadmap","topics":"Topics","glossary":"Glossary","resources":"Resources","allResources":"All Resources","findMasjid":"Find a Masjid","about":"About","aboutUs":"About Us","accessibility":"Accessibility","privacy":"Privacy Policy","terms":"Terms of Use","sources":"Sources","ramadan":"Ramadan Guide","mentalHealth":"Mental Health","mainNavigation":"Main navigation","openMenu":"Open menu","closeMenu":"Close menu","mobileMenu":"Navigation menu"},"footer":{"about":"About","accessibility":"Accessibility","privacy":"Privacy Policy","terms":"Terms of Use","sources":"Sources","description":"A free, offline-first resource for new Muslims. No tracking, no ads, just guidance on your journey.","explore":"Explore","information":"Information","quickLinksAriaLabel":"Quick links","navigationAriaLabel":"Footer navigation","copyright":"Revert Guide. Made with care for new Muslims everywhere."},"common":{"beginJourney":"Begin Your Journey","nextStep":"Next Step","previousStep":"Previous Step","readMore":"Read More","searchPlaceholder":"Search...","loading":"Preparing your next step...","offline":"You are offline. Some features may be limited.","backToRoadmap":"Back to Roadmap","skipToContent":"Skip to content","breadcrumb":"Breadcrumb","search":"Search","clearSearch":"Clear search"},"resources":{"types":{"article":"Article","video":"Video","book":"Book","app":"App","community":"Community","pdf":"PDF"},"visitResource":"Visit Resource","viewResource":"View Resource"},"metadata":{"home":{"title":"Revert Guide - Your Journey Begins Here","description":"An offline-first educational guide for new Muslims with practical, compassionate next steps."},"about":{"title":"About - Revert Guide","description":"Learn about the Revert Guide project, our mission, and our approach to beginner-friendly Islamic guidance."},"accessibility":{"title":"Accessibility Statement - Revert Guide","description":"Revert Guide\'s commitment to accessibility, WCAG 2.1 AA compliance, and inclusive design."},"glossary":{"title":"Glossary - Revert Guide","description":"Search Islamic terms, transliterations, and definitions in the Revert Guide glossary."},"mentalHealth":{"title":"Taking Care of Your Mind - Revert Guide","description":"Emotional support, validation, crisis resources, and practical guidance for new Muslims."},"offline":{"title":"Offline - Revert Guide","description":"Reconnect or open a previously cached page to continue using Revert Guide offline."},"privacy":{"title":"Privacy Policy - Revert Guide","description":"Read the Revert Guide privacy policy and understand our offline-first data practices."},"ramadan":{"title":"Ramadan Guide - Revert Guide","description":"Your first Ramadan as a Muslim, including fasting basics, preparation, and practical support."},"resources":{"title":"Resources - Revert Guide","description":"Curated books, videos, apps, and communities to support your journey."},"findMasjid":{"title":"Find a Masjid - Revert Guide","description":"Search Toronto-area masjids and mosques, even when offline."},"roadmap":{"title":"Your Roadmap - Revert Guide","description":"A step-by-step timeline for your first day, first weeks, and first months as a Muslim."},"sources":{"title":"Sources & Citations - Revert Guide","description":"Browse the Quran, hadith, articles, and books cited throughout Revert Guide."},"terms":{"title":"Terms of Use - Revert Guide","description":"Understand the terms, disclaimers, and usage conditions for Revert Guide."},"topics":{"title":"Topics - Revert Guide","description":"Explore self-contained topic guides about prayer, fasting, beliefs, community, and more."},"notFound":{"title":"Page Not Found - Revert Guide","description":"Return to the roadmap or homepage to continue your journey."}}}',
        ),
        a = JSON.parse(
          '{"brand":{"homeAriaLabel":"Revert Guide - Accueil"},"languageSwitcher":{"ariaLabel":"Selecteur de langue","label":"Langue"},"nav":{"home":"Accueil","roadmap":"Feuille de route","topics":"Sujets","glossary":"Glossaire","resources":"Ressources","allResources":"Toutes les ressources","findMasjid":"Trouver une mosquee","about":"A propos","aboutUs":"A propos de nous","accessibility":"Accessibilite","privacy":"Politique de confidentialite","terms":"Conditions d\'utilisation","sources":"Sources","ramadan":"Guide du Ramadan","mentalHealth":"Sante mentale","mainNavigation":"Navigation principale","openMenu":"Ouvrir le menu","closeMenu":"Fermer le menu","mobileMenu":"Menu de navigation"},"footer":{"about":"A propos","accessibility":"Accessibilite","privacy":"Politique de confidentialite","terms":"Conditions d\'utilisation","sources":"Sources","description":"Une ressource gratuite, hors ligne et pensee pour les nouveaux musulmans. Pas de suivi, pas de publicite, seulement des conseils utiles.","explore":"Explorer","information":"Information","quickLinksAriaLabel":"Liens rapides","navigationAriaLabel":"Navigation de pied de page","copyright":"Revert Guide. Cree avec soin pour les nouveaux musulmans partout."},"common":{"beginJourney":"Commencer votre parcours","nextStep":"Etape suivante","previousStep":"Etape precedente","readMore":"Lire la suite","searchPlaceholder":"Rechercher...","loading":"Preparation de votre prochaine etape...","offline":"Vous etes hors ligne. Certaines fonctionnalites peuvent etre limitees.","backToRoadmap":"Retour a la feuille de route","skipToContent":"Aller au contenu","breadcrumb":"Fil d\'Ariane","search":"Rechercher","clearSearch":"Effacer la recherche"},"resources":{"types":{"article":"Article","video":"Video","book":"Livre","app":"Application","community":"Communaute","pdf":"PDF"},"visitResource":"Visiter la ressource","viewResource":"Voir la ressource"},"metadata":{"home":{"title":"Revert Guide - Votre parcours commence ici","description":"Un guide educatif hors ligne pour les nouveaux musulmans, avec des etapes pratiques et compatissantes."},"about":{"title":"A propos - Revert Guide","description":"Decouvrez le projet Revert Guide, notre mission et notre approche pour accompagner les nouveaux musulmans."},"accessibility":{"title":"Accessibilite - Revert Guide","description":"L\'engagement de Revert Guide envers l\'accessibilite numerique et un design inclusif."},"glossary":{"title":"Glossaire - Revert Guide","description":"Recherchez des termes islamiques, transliterations et definitions dans le glossaire Revert Guide."},"mentalHealth":{"title":"Prendre soin de votre esprit - Revert Guide","description":"Soutien emotionnel, validation et ressources pratiques pour les nouveaux musulmans."},"offline":{"title":"Hors ligne - Revert Guide","description":"Reconnectez-vous ou ouvrez une page deja en cache pour continuer a utiliser Revert Guide."},"privacy":{"title":"Politique de confidentialite - Revert Guide","description":"Consultez la politique de confidentialite de Revert Guide et nos pratiques hors ligne."},"ramadan":{"title":"Guide du Ramadan - Revert Guide","description":"Votre premier Ramadan en tant que musulman, avec des bases, des conseils de preparation et un accompagnement pratique."},"resources":{"title":"Ressources - Revert Guide","description":"Livres, videos, applications et communautes selectionnes pour soutenir votre parcours."},"findMasjid":{"title":"Trouver une mosquee - Revert Guide","description":"Recherchez des mosquees dans la region de Toronto, meme hors ligne."},"roadmap":{"title":"Votre feuille de route - Revert Guide","description":"Un parcours etape par etape pour votre premier jour, vos premieres semaines et vos premiers mois en tant que musulman."},"sources":{"title":"Sources et citations - Revert Guide","description":"Consultez les references du Coran, des hadiths, des articles et des livres cites dans Revert Guide."},"terms":{"title":"Conditions d\'utilisation - Revert Guide","description":"Comprenez les conditions, avertissements et limites d\'utilisation de Revert Guide."},"topics":{"title":"Sujets - Revert Guide","description":"Explorez des guides dedies a la priere, au jeune, aux croyances, a la communaute, et plus encore."},"notFound":{"title":"Page introuvable - Revert Guide","description":"Revenez a la feuille de route ou a l\'accueil pour continuer votre parcours."}}}',
        ),
        o = ["en", "fr", "es", "hi", "ur", "zh", "tl", "pa"],
        s = "en",
        n = "revert-guide-locale",
        l = {
          en: i,
          fr: b(i, a),
          es: b(i, {}),
          hi: b(i, {}),
          ur: b(i, {}),
          zh: b(i, {}),
          tl: b(i, {}),
          pa: b(i, {}),
        },
        u = {
          en: "English",
          fr: "Fran\xe7ais",
          es: "Espa\xf1ol",
          hi: "हिन्दी",
          ur: "اردو",
          zh: "中文",
          tl: "Tagalog",
          pa: "ਪੰਜਾਬੀ",
        };
      function d(e) {
        return o.includes(e);
      }
      function c(e) {
        return e && d(e) ? e : s;
      }
      function p(e) {
        return function (r) {
          let t = r.split(".").reduce((e, r) => {
            if (e && "string" != typeof e) return e[r];
          }, e);
          if (void 0 === t) throw Error(`Missing translation key: ${r}`);
          return t;
        };
      }
      function m(e) {
        return p(l[e]);
      }
      function h(e) {
        return u[e];
      }
      function v(e, r) {
        return !r ||
          r.startsWith("#") ||
          r.startsWith("http://") ||
          r.startsWith("https://") ||
          r.startsWith("mailto:") ||
          r.startsWith("tel:")
          ? r
          : "/" === r
            ? `/${e}`
            : r.startsWith(`/${e}`)
              ? r
              : `/${e}${r.startsWith("/") ? r : `/${r}`}`;
      }
      function f(e, r) {
        let t = e.split("/");
        return d(t[1]) ? ((t[1] = r), t.join("/") || `/${r}`) : v(r, e || "/");
      }
      function b(e, r) {
        if ("string" == typeof e || "string" == typeof r) return r ?? e;
        let t = { ...e };
        for (let [e, i] of Object.entries(r)) {
          let r = t[e];
          if (void 0 === r) {
            t[e] = i;
            continue;
          }
          t[e] = b(r, i);
        }
        return t;
      }
    },
    9475: (e, r, t) => {
      "use strict";
      (t.r(r), t.d(r, { default: () => p, generateStaticParams: () => c }));
      var i = t(9510),
        a = t(8585),
        o = t(8570);
      let s = (0, o.createProxy)(
          String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\components\Navbar.tsx#Navbar`,
        ),
        n = (0, o.createProxy)(
          String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\components\Footer.tsx#Footer`,
        ),
        l = (0, o.createProxy)(
          String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\components\OfflineIndicator.tsx#OfflineIndicator`,
        ),
        u = (0, o.createProxy)(
          String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\components\LocaleProvider.tsx#LocaleProvider`,
        );
      ((0, o.createProxy)(
        String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\components\LocaleProvider.tsx#useLocale`,
      ),
        (0, o.createProxy)(
          String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\components\LocaleProvider.tsx#useTranslations`,
        ));
      var d = t(9306);
      function c() {
        return d.RF.map((e) => ({ locale: e }));
      }
      function p({ children: e, params: r }) {
        (0, d.b8)(r.locale) || (0, a.notFound)();
        let t = (0, d._U)(r.locale),
          o = (0, d.eX)(t);
        return (0, i.jsxs)(u, {
          locale: r.locale,
          messages: t,
          children: [
            i.jsx("a", {
              href: "#main-content",
              className: "skip-link",
              children: o("common.skipToContent"),
            }),
            i.jsx(s, {}),
            i.jsx("main", {
              id: "main-content",
              className: "flex-1",
              children: e,
            }),
            i.jsx(n, {}),
            i.jsx(l, {}),
          ],
        });
      }
    },
    6982: (e, r, t) => {
      "use strict";
      (t.r(r), t.d(r, { default: () => i }));
      let i = (0, t(8570).createProxy)(
        String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\app\[locale]\not-found.tsx#default`,
      );
    },
    1506: (e, r, t) => {
      "use strict";
      (t.r(r),
        t.d(r, { default: () => p, metadata: () => d, viewport: () => c }));
      var i = t(9510),
        a = t(3574),
        o = t.n(a),
        s = t(4315),
        n = t.n(s),
        l = t(7041),
        u = t.n(l);
      t(7272);
      let d = {
          title: "Revert Guide - Your Journey Begins Here",
          description:
            "An offline-first educational guide for new Muslim converts in the Toronto area. Step-by-step onboarding with empathy and practical guidance.",
          keywords: [
            "Islam",
            "convert",
            "revert",
            "Muslim",
            "guide",
            "Toronto",
          ],
          manifest: "/manifest.json",
          icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
          appleWebApp: {
            capable: !0,
            statusBarStyle: "default",
            title: "Revert Guide",
          },
          openGraph: {
            title: "Revert Guide",
            description:
              "Your guided journey into Islam - practical, compassionate, and at your own pace.",
            type: "website",
          },
        },
        c = { themeColor: "#4A7C59" };
      function p({ children: e }) {
        return i.jsx("html", {
          lang: "en",
          className: `${o().variable} ${n().variable} ${u().variable}`,
          children: i.jsx("body", {
            className: "flex min-h-screen flex-col font-sans",
            children: e,
          }),
        });
      }
    },
    9306: (e, r, t) => {
      "use strict";
      t.d(r, {
        ZW: () => s,
        RF: () => o,
        eX: () => d,
        _U: () => u,
        Ty: () => c,
        b8: () => l,
        FT: () => p,
      });
      let i = JSON.parse(
          '{"brand":{"name":"Revert Guide","homeAriaLabel":"Revert Guide - Home"},"languageSwitcher":{"ariaLabel":"Language switcher","label":"Language","en":"EN","fr":"FR"},"nav":{"home":"Home","roadmap":"Roadmap","topics":"Topics","glossary":"Glossary","resources":"Resources","allResources":"All Resources","findMasjid":"Find a Masjid","about":"About","aboutUs":"About Us","accessibility":"Accessibility","privacy":"Privacy Policy","terms":"Terms of Use","sources":"Sources","ramadan":"Ramadan Guide","mentalHealth":"Mental Health","mainNavigation":"Main navigation","openMenu":"Open menu","closeMenu":"Close menu","mobileMenu":"Navigation menu"},"footer":{"about":"About","accessibility":"Accessibility","privacy":"Privacy Policy","terms":"Terms of Use","sources":"Sources","description":"A free, offline-first resource for new Muslims. No tracking, no ads, just guidance on your journey.","explore":"Explore","information":"Information","quickLinksAriaLabel":"Quick links","navigationAriaLabel":"Footer navigation","copyright":"Revert Guide. Made with care for new Muslims everywhere."},"common":{"beginJourney":"Begin Your Journey","nextStep":"Next Step","previousStep":"Previous Step","readMore":"Read More","searchPlaceholder":"Search...","loading":"Preparing your next step...","offline":"You are offline. Some features may be limited.","backToRoadmap":"Back to Roadmap","skipToContent":"Skip to content","breadcrumb":"Breadcrumb","search":"Search","clearSearch":"Clear search"},"resources":{"types":{"article":"Article","video":"Video","book":"Book","app":"App","community":"Community","pdf":"PDF"},"visitResource":"Visit Resource","viewResource":"View Resource"},"metadata":{"home":{"title":"Revert Guide - Your Journey Begins Here","description":"An offline-first educational guide for new Muslims with practical, compassionate next steps."},"about":{"title":"About - Revert Guide","description":"Learn about the Revert Guide project, our mission, and our approach to beginner-friendly Islamic guidance."},"accessibility":{"title":"Accessibility Statement - Revert Guide","description":"Revert Guide\'s commitment to accessibility, WCAG 2.1 AA compliance, and inclusive design."},"glossary":{"title":"Glossary - Revert Guide","description":"Search Islamic terms, transliterations, and definitions in the Revert Guide glossary."},"mentalHealth":{"title":"Taking Care of Your Mind - Revert Guide","description":"Emotional support, validation, crisis resources, and practical guidance for new Muslims."},"offline":{"title":"Offline - Revert Guide","description":"Reconnect or open a previously cached page to continue using Revert Guide offline."},"privacy":{"title":"Privacy Policy - Revert Guide","description":"Read the Revert Guide privacy policy and understand our offline-first data practices."},"ramadan":{"title":"Ramadan Guide - Revert Guide","description":"Your first Ramadan as a Muslim, including fasting basics, preparation, and practical support."},"resources":{"title":"Resources - Revert Guide","description":"Curated books, videos, apps, and communities to support your journey."},"findMasjid":{"title":"Find a Masjid - Revert Guide","description":"Search Toronto-area masjids and mosques, even when offline."},"roadmap":{"title":"Your Roadmap - Revert Guide","description":"A step-by-step timeline for your first day, first weeks, and first months as a Muslim."},"sources":{"title":"Sources & Citations - Revert Guide","description":"Browse the Quran, hadith, articles, and books cited throughout Revert Guide."},"terms":{"title":"Terms of Use - Revert Guide","description":"Understand the terms, disclaimers, and usage conditions for Revert Guide."},"topics":{"title":"Topics - Revert Guide","description":"Explore self-contained topic guides about prayer, fasting, beliefs, community, and more."},"notFound":{"title":"Page Not Found - Revert Guide","description":"Return to the roadmap or homepage to continue your journey."}}}',
        ),
        a = JSON.parse(
          '{"brand":{"homeAriaLabel":"Revert Guide - Accueil"},"languageSwitcher":{"ariaLabel":"Selecteur de langue","label":"Langue"},"nav":{"home":"Accueil","roadmap":"Feuille de route","topics":"Sujets","glossary":"Glossaire","resources":"Ressources","allResources":"Toutes les ressources","findMasjid":"Trouver une mosquee","about":"A propos","aboutUs":"A propos de nous","accessibility":"Accessibilite","privacy":"Politique de confidentialite","terms":"Conditions d\'utilisation","sources":"Sources","ramadan":"Guide du Ramadan","mentalHealth":"Sante mentale","mainNavigation":"Navigation principale","openMenu":"Ouvrir le menu","closeMenu":"Fermer le menu","mobileMenu":"Menu de navigation"},"footer":{"about":"A propos","accessibility":"Accessibilite","privacy":"Politique de confidentialite","terms":"Conditions d\'utilisation","sources":"Sources","description":"Une ressource gratuite, hors ligne et pensee pour les nouveaux musulmans. Pas de suivi, pas de publicite, seulement des conseils utiles.","explore":"Explorer","information":"Information","quickLinksAriaLabel":"Liens rapides","navigationAriaLabel":"Navigation de pied de page","copyright":"Revert Guide. Cree avec soin pour les nouveaux musulmans partout."},"common":{"beginJourney":"Commencer votre parcours","nextStep":"Etape suivante","previousStep":"Etape precedente","readMore":"Lire la suite","searchPlaceholder":"Rechercher...","loading":"Preparation de votre prochaine etape...","offline":"Vous etes hors ligne. Certaines fonctionnalites peuvent etre limitees.","backToRoadmap":"Retour a la feuille de route","skipToContent":"Aller au contenu","breadcrumb":"Fil d\'Ariane","search":"Rechercher","clearSearch":"Effacer la recherche"},"resources":{"types":{"article":"Article","video":"Video","book":"Livre","app":"Application","community":"Communaute","pdf":"PDF"},"visitResource":"Visiter la ressource","viewResource":"Voir la ressource"},"metadata":{"home":{"title":"Revert Guide - Votre parcours commence ici","description":"Un guide educatif hors ligne pour les nouveaux musulmans, avec des etapes pratiques et compatissantes."},"about":{"title":"A propos - Revert Guide","description":"Decouvrez le projet Revert Guide, notre mission et notre approche pour accompagner les nouveaux musulmans."},"accessibility":{"title":"Accessibilite - Revert Guide","description":"L\'engagement de Revert Guide envers l\'accessibilite numerique et un design inclusif."},"glossary":{"title":"Glossaire - Revert Guide","description":"Recherchez des termes islamiques, transliterations et definitions dans le glossaire Revert Guide."},"mentalHealth":{"title":"Prendre soin de votre esprit - Revert Guide","description":"Soutien emotionnel, validation et ressources pratiques pour les nouveaux musulmans."},"offline":{"title":"Hors ligne - Revert Guide","description":"Reconnectez-vous ou ouvrez une page deja en cache pour continuer a utiliser Revert Guide."},"privacy":{"title":"Politique de confidentialite - Revert Guide","description":"Consultez la politique de confidentialite de Revert Guide et nos pratiques hors ligne."},"ramadan":{"title":"Guide du Ramadan - Revert Guide","description":"Votre premier Ramadan en tant que musulman, avec des bases, des conseils de preparation et un accompagnement pratique."},"resources":{"title":"Ressources - Revert Guide","description":"Livres, videos, applications et communautes selectionnes pour soutenir votre parcours."},"findMasjid":{"title":"Trouver une mosquee - Revert Guide","description":"Recherchez des mosquees dans la region de Toronto, meme hors ligne."},"roadmap":{"title":"Votre feuille de route - Revert Guide","description":"Un parcours etape par etape pour votre premier jour, vos premieres semaines et vos premiers mois en tant que musulman."},"sources":{"title":"Sources et citations - Revert Guide","description":"Consultez les references du Coran, des hadiths, des articles et des livres cites dans Revert Guide."},"terms":{"title":"Conditions d\'utilisation - Revert Guide","description":"Comprenez les conditions, avertissements et limites d\'utilisation de Revert Guide."},"topics":{"title":"Sujets - Revert Guide","description":"Explorez des guides dedies a la priere, au jeune, aux croyances, a la communaute, et plus encore."},"notFound":{"title":"Page introuvable - Revert Guide","description":"Revenez a la feuille de route ou a l\'accueil pour continuer votre parcours."}}}',
        ),
        o = ["en", "fr", "es", "hi", "ur", "zh", "tl", "pa"],
        s = "en",
        n = {
          en: i,
          fr: m(i, a),
          es: m(i, {}),
          hi: m(i, {}),
          ur: m(i, {}),
          zh: m(i, {}),
          tl: m(i, {}),
          pa: m(i, {}),
        };
      function l(e) {
        return o.includes(e);
      }
      function u(e) {
        return n[e];
      }
      function d(e) {
        return function (r) {
          let t = r.split(".").reduce((e, r) => {
            if (e && "string" != typeof e) return e[r];
          }, e);
          if (void 0 === t) throw Error(`Missing translation key: ${r}`);
          return t;
        };
      }
      function c(e) {
        return d(n[e]);
      }
      function p(e, r) {
        return !r ||
          r.startsWith("#") ||
          r.startsWith("http://") ||
          r.startsWith("https://") ||
          r.startsWith("mailto:") ||
          r.startsWith("tel:")
          ? r
          : "/" === r
            ? `/${e}`
            : r.startsWith(`/${e}`)
              ? r
              : `/${e}${r.startsWith("/") ? r : `/${r}`}`;
      }
      function m(e, r) {
        if ("string" == typeof e || "string" == typeof r) return r ?? e;
        let t = { ...e };
        for (let [e, i] of Object.entries(r)) {
          let r = t[e];
          if (void 0 === r) {
            t[e] = i;
            continue;
          }
          t[e] = m(r, i);
        }
        return t;
      }
    },
    7272: () => {},
  }));
