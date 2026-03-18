(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [203],
  {
    2918: function (e, t, r) {
      (Promise.resolve().then(r.bind(r, 8349)),
        Promise.resolve().then(r.bind(r, 9323)),
        Promise.resolve().then(r.bind(r, 172)),
        Promise.resolve().then(r.bind(r, 2070)));
    },
    8349: function (e, t, r) {
      "use strict";
      r.d(t, {
        Footer: function () {
          return l;
        },
      });
      var i = r(7437),
        n = r(7648),
        a = r(3145),
        o = r(9323),
        s = r(6543);
      function l() {
        let e = (0, o.b)(),
          t = (0, o.T)(),
          r = [
            { href: (0, s.FT)(e, "/about"), label: t("footer.about") },
            {
              href: (0, s.FT)(e, "/accessibility"),
              label: t("footer.accessibility"),
            },
            { href: (0, s.FT)(e, "/privacy"), label: t("footer.privacy") },
            { href: (0, s.FT)(e, "/terms"), label: t("footer.terms") },
            { href: (0, s.FT)(e, "/sources"), label: t("footer.sources") },
          ],
          l = [
            { href: (0, s.FT)(e, "/roadmap"), label: t("nav.roadmap") },
            { href: (0, s.FT)(e, "/topics"), label: t("nav.topics") },
            { href: (0, s.FT)(e, "/glossary"), label: t("nav.glossary") },
            { href: (0, s.FT)(e, "/resources"), label: t("nav.resources") },
            { href: (0, s.FT)(e, "/ramadan"), label: t("nav.ramadan") },
            {
              href: (0, s.FT)(e, "/mental-health"),
              label: t("nav.mentalHealth"),
            },
          ];
        return (0, i.jsxs)("footer", {
          className:
            "relative overflow-hidden border-t border-border/50 bg-surface",
          children: [
            (0, i.jsx)("div", {
              className:
                "pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primaryGreen/10 blur-3xl",
              "aria-hidden": "true",
            }),
            (0, i.jsx)("div", {
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
                        (0, i.jsxs)(n.default, {
                          href: (0, s.FT)(e, "/"),
                          className:
                            "mb-4 inline-flex items-center gap-2.5 text-lg font-bold text-primary no-underline hover:text-primaryHover",
                          children: [
                            (0, i.jsx)("span", {
                              className:
                                "flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg",
                              children: (0, i.jsx)(a.default, {
                                src: "/revert-guide-logo.png",
                                alt: "",
                                width: 32,
                                height: 32,
                                "aria-hidden": "true",
                              }),
                            }),
                            (0, i.jsx)("span", {
                              className: "font-display tracking-tight",
                              children: t("brand.name"),
                            }),
                          ],
                        }),
                        (0, i.jsx)("p", {
                          className:
                            "mb-4 max-w-sm text-sm leading-relaxed text-textSecondary",
                          children: t("footer.description"),
                        }),
                        (0, i.jsx)("div", {
                          className:
                            "mt-2 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 opacity-60 md:h-20 md:w-20",
                          "aria-hidden": "true",
                          children: (0, i.jsx)(a.default, {
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
                        (0, i.jsx)("p", {
                          className:
                            "mb-4 text-xs font-semibold uppercase tracking-widest text-textMuted",
                          children: t("footer.explore"),
                        }),
                        (0, i.jsx)("nav", {
                          "aria-label": t("footer.quickLinksAriaLabel"),
                          children: (0, i.jsx)("ul", {
                            className: "flex flex-col gap-2.5 pl-0",
                            children: l.map((e) =>
                              (0, i.jsx)(
                                "li",
                                {
                                  className: "mb-0",
                                  children: (0, i.jsx)(n.default, {
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
                        (0, i.jsx)("p", {
                          className:
                            "mb-4 text-xs font-semibold uppercase tracking-widest text-textMuted",
                          children: t("footer.information"),
                        }),
                        (0, i.jsx)("nav", {
                          "aria-label": t("footer.navigationAriaLabel"),
                          children: (0, i.jsx)("ul", {
                            className: "flex flex-col gap-2.5 pl-0",
                            children: r.map((e) =>
                              (0, i.jsx)(
                                "li",
                                {
                                  className: "mb-0",
                                  children: (0, i.jsx)(n.default, {
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
                (0, i.jsx)("div", {
                  className: "mt-10 border-t border-border/50 pt-6",
                  children: (0, i.jsxs)("p", {
                    className: "mb-0 text-center text-xs text-textMuted",
                    children: [
                      "\xa9 ",
                      new Date().getFullYear(),
                      " ",
                      t("footer.copyright"),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    9323: function (e, t, r) {
      "use strict";
      r.d(t, {
        LocaleProvider: function () {
          return s;
        },
        T: function () {
          return u;
        },
        b: function () {
          return l;
        },
      });
      var i = r(7437),
        n = r(2265),
        a = r(6543);
      let o = (0, n.createContext)(null);
      function s(e) {
        let { children: t, locale: r, messages: a } = e,
          s = (0, n.useMemo)(() => ({ locale: r, messages: a }), [r, a]);
        return (0, i.jsx)(o.Provider, { value: s, children: t });
      }
      function l() {
        let e = (0, n.useContext)(o);
        if (!e) throw Error("useLocale must be used within LocaleProvider");
        return e.locale;
      }
      function u() {
        let e = (0, n.useContext)(o);
        if (!e)
          throw Error("useTranslations must be used within LocaleProvider");
        return (0, n.useMemo)(() => (0, a.eX)(e.messages), [e.messages]);
      }
    },
    172: function (e, t, r) {
      "use strict";
      r.d(t, {
        Navbar: function () {
          return p;
        },
      });
      var i = r(7437),
        n = r(2265),
        a = r(7648),
        o = r(3145),
        s = r(9376),
        l = r(6543),
        u = r(9323);
      function c() {
        let e = (0, s.useRouter)(),
          t = (0, u.b)(),
          r = (0, s.usePathname)(),
          n = (0, u.T)();
        return (0, i.jsxs)("label", {
          className:
            "flex items-center gap-2 rounded-xl border border-border/60 bg-white/85 px-3 py-2 shadow-soft",
          children: [
            (0, i.jsx)("span", {
              className:
                "text-xs font-semibold uppercase tracking-wide text-textMuted",
              children: n("languageSwitcher.label"),
            }),
            (0, i.jsx)("select", {
              "aria-label": n("languageSwitcher.ariaLabel"),
              value: t,
              onChange: (t) => {
                let i = t.target.value;
                (window.localStorage.setItem(l.nO, i), e.push((0, l.b1)(r, i)));
              },
              className:
                "bg-transparent text-sm font-medium text-textPrimary outline-none",
              children: l.RF.map((e) =>
                (0, i.jsx)(
                  "option",
                  { value: e, lang: e, children: (0, l._q)(e) },
                  e,
                ),
              ),
            }),
          ],
        });
      }
      function d(e) {
        let { item: t, isActive: r } = e,
          [o, s] = (0, n.useState)(!1),
          l = (0, n.useRef)(null),
          u = (0, n.useRef)(null),
          c = (0, n.useCallback)(() => {
            u.current = setTimeout(() => s(!1), 150);
          }, []),
          d = (0, n.useCallback)(() => {
            (u.current && (clearTimeout(u.current), (u.current = null)), s(!0));
          }, []);
        return (
          (0, n.useEffect)(
            () => () => {
              u.current && clearTimeout(u.current);
            },
            [],
          ),
          (0, n.useEffect)(() => {
            function e(e) {
              l.current && !l.current.contains(e.target) && s(!1);
            }
            return (
              o && document.addEventListener("mousedown", e),
              () => document.removeEventListener("mousedown", e)
            );
          }, [o]),
          (0, i.jsxs)("li", {
            ref: l,
            className: "relative mb-0 list-none",
            onMouseEnter: d,
            onMouseLeave: c,
            children: [
              (0, i.jsxs)("button", {
                className:
                  "inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium no-underline transition-all duration-200 hover:bg-surfaceElevated hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong ".concat(
                    r ? "text-primary" : "text-textSecondary",
                  ),
                "aria-expanded": o,
                "aria-haspopup": "true",
                onClick: () => s(!o),
                onKeyDown: function (e) {
                  ("Escape" === e.key && s(!1),
                    "ArrowDown" !== e.key || o || (e.preventDefault(), s(!0)));
                },
                children: [
                  t.label,
                  (0, i.jsx)("svg", {
                    className:
                      "h-3.5 w-3.5 transition-transform duration-300 ease-out-expo ".concat(
                        o ? "rotate-180" : "",
                      ),
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 2.5,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    children: (0, i.jsx)("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "m19.5 8.25-7.5 7.5-7.5-7.5",
                    }),
                  }),
                ],
              }),
              o &&
                (0, i.jsx)("ul", {
                  className:
                    "absolute left-0 top-full z-50 mt-2 mb-0 min-w-[200px] list-none animate-slide-down rounded-xl border border-border/50 bg-white/95 p-2 pl-0 shadow-elevated backdrop-blur-lg",
                  onMouseEnter: d,
                  onMouseLeave: c,
                  children: t.dropdown.map((e) =>
                    (0, i.jsx)(
                      "li",
                      {
                        className: "mb-0 list-none",
                        children: (0, i.jsx)(a.default, {
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
          })
        );
      }
      function p() {
        let e = (0, u.b)(),
          t = (0, u.T)(),
          r = (0, s.usePathname)(),
          [p, m] = (0, n.useState)(!1),
          [f, h] = (0, n.useState)(!1),
          v = (0, n.useRef)(null),
          b = [
            { href: (0, l.FT)(e, "/roadmap"), label: t("nav.roadmap") },
            { href: (0, l.FT)(e, "/topics"), label: t("nav.topics") },
            { href: (0, l.FT)(e, "/glossary"), label: t("nav.glossary") },
            {
              href: (0, l.FT)(e, "/resources"),
              label: t("nav.resources"),
              dropdown: [
                {
                  href: (0, l.FT)(e, "/resources"),
                  label: t("nav.allResources"),
                },
                {
                  href: (0, l.FT)(e, "/resources/find-masjid"),
                  label: t("nav.findMasjid"),
                },
              ],
            },
            {
              href: (0, l.FT)(e, "/about"),
              label: t("nav.about"),
              dropdown: [
                { href: (0, l.FT)(e, "/about"), label: t("nav.aboutUs") },
                {
                  href: (0, l.FT)(e, "/accessibility"),
                  label: t("nav.accessibility"),
                },
                { href: (0, l.FT)(e, "/privacy"), label: t("nav.privacy") },
                { href: (0, l.FT)(e, "/terms"), label: t("nav.terms") },
                { href: (0, l.FT)(e, "/sources"), label: t("nav.sources") },
              ],
            },
            {
              href: (0, l.FT)(e, "/resources/find-masjid"),
              label: t("nav.findMasjid"),
              prominent: !0,
            },
          ];
        ((0, n.useEffect)(() => {
          function e() {
            h(window.scrollY > 10);
          }
          return (
            window.addEventListener("scroll", e, { passive: !0 }),
            e(),
            () => window.removeEventListener("scroll", e)
          );
        }, []),
          (0, n.useEffect)(() => {
            m(!1);
          }, [r]),
          (0, n.useEffect)(
            () => (
              p
                ? (document.body.style.overflow = "hidden")
                : (document.body.style.overflow = ""),
              () => {
                document.body.style.overflow = "";
              }
            ),
            [p],
          ));
        let x = [
          { href: (0, l.FT)(e, "/"), label: t("nav.home") },
          { href: (0, l.FT)(e, "/roadmap"), label: t("nav.roadmap") },
          { href: (0, l.FT)(e, "/topics"), label: t("nav.topics") },
          { href: (0, l.FT)(e, "/glossary"), label: t("nav.glossary") },
          { href: (0, l.FT)(e, "/resources"), label: t("nav.resources") },
          {
            href: (0, l.FT)(e, "/resources/find-masjid"),
            label: t("nav.findMasjid"),
            prominent: !0,
          },
          { href: (0, l.FT)(e, "/ramadan"), label: t("nav.ramadan") },
          {
            href: (0, l.FT)(e, "/mental-health"),
            label: t("nav.mentalHealth"),
          },
          { href: (0, l.FT)(e, "/about"), label: t("nav.about") },
          {
            href: (0, l.FT)(e, "/accessibility"),
            label: t("nav.accessibility"),
          },
          { href: (0, l.FT)(e, "/privacy"), label: t("nav.privacy") },
          { href: (0, l.FT)(e, "/terms"), label: t("nav.terms") },
          { href: (0, l.FT)(e, "/sources"), label: t("nav.sources") },
        ];
        return (0, i.jsxs)("header", {
          className: "sticky top-0 z-40 transition-all duration-300 ".concat(
            f
              ? "border-b border-border/40 bg-white/80 shadow-soft backdrop-blur-xl"
              : "border-b border-transparent bg-white",
          ),
          children: [
            (0, i.jsxs)("nav", {
              "aria-label": t("nav.mainNavigation"),
              className:
                "mx-auto flex max-w-6xl items-center justify-between px-5 py-3",
              children: [
                (0, i.jsxs)(a.default, {
                  href: (0, l.FT)(e, "/"),
                  className:
                    "group flex items-center gap-2.5 text-xl font-bold text-primary no-underline hover:text-primaryHover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong",
                  "aria-label": t("brand.homeAriaLabel"),
                  children: [
                    (0, i.jsx)("span", {
                      className:
                        "flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl shadow-soft transition-transform duration-300 group-hover:scale-105",
                      children: (0, i.jsx)(o.default, {
                        src: "/revert-guide-logo.png",
                        alt: "",
                        width: 40,
                        height: 40,
                        "aria-hidden": "true",
                      }),
                    }),
                    (0, i.jsx)("span", {
                      className: "font-display text-lg tracking-tight",
                      children: t("brand.name"),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "hidden items-center gap-3 lg:flex",
                  children: [
                    (0, i.jsx)("ul", {
                      className:
                        "mb-0 list-none items-center gap-1 pl-0 lg:flex",
                      children: b.map((e) => {
                        var t, n;
                        let o =
                          ((t = e.href),
                          (n = e.dropdown),
                          r === t || (!!n && n.some((e) => r === e.href)));
                        return e.dropdown
                          ? (0, i.jsx)(d, { item: e, isActive: o }, e.label)
                          : e.prominent
                            ? (0, i.jsx)(
                                "li",
                                {
                                  className: "mb-0 list-none",
                                  children: (0, i.jsxs)(a.default, {
                                    href: e.href,
                                    className:
                                      "ml-2 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white no-underline shadow-[0_2px_8px_rgba(0,0,0,0.12)] transition-all duration-200 hover:bg-[#5B9168] hover:text-white hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong",
                                    "aria-current":
                                      r === e.href ? "page" : void 0,
                                    children: [
                                      (0, i.jsxs)("svg", {
                                        className: "h-4 w-4",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: 1.5,
                                        stroke: "currentColor",
                                        "aria-hidden": "true",
                                        children: [
                                          (0, i.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
                                          }),
                                          (0, i.jsx)("path", {
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
                            : (0, i.jsx)(
                                "li",
                                {
                                  className: "mb-0 list-none",
                                  children: (0, i.jsx)(a.default, {
                                    href: e.href,
                                    className:
                                      "relative rounded-lg px-3 py-2 text-sm font-medium no-underline transition-all duration-200 hover:bg-surfaceElevated hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong ".concat(
                                        o
                                          ? "text-primary bg-surfaceElevated"
                                          : "text-textSecondary",
                                      ),
                                    "aria-current":
                                      r === e.href ? "page" : void 0,
                                    children: e.label,
                                  }),
                                },
                                e.href,
                              );
                      }),
                    }),
                    (0, i.jsx)(c, {}),
                  ],
                }),
                (0, i.jsx)("button", {
                  className:
                    "inline-flex h-11 w-11 items-center justify-center rounded-xl text-textSecondary transition-all duration-200 hover:bg-surfaceElevated hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong lg:hidden",
                  onClick: () => m(!p),
                  "aria-expanded": p,
                  "aria-controls": "mobile-menu",
                  "aria-label": t(p ? "nav.closeMenu" : "nav.openMenu"),
                  children: (0, i.jsxs)("div", {
                    className: "relative h-5 w-5",
                    children: [
                      (0, i.jsx)("span", {
                        className:
                          "absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-out-expo ".concat(
                            p ? "top-[9px] rotate-45" : "top-1",
                          ),
                      }),
                      (0, i.jsx)("span", {
                        className:
                          "absolute left-0 top-[9px] block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-out-expo ".concat(
                            p ? "opacity-0 scale-x-0" : "opacity-100",
                          ),
                      }),
                      (0, i.jsx)("span", {
                        className:
                          "absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-out-expo ".concat(
                            p ? "top-[9px] -rotate-45" : "top-[17px]",
                          ),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className:
                "fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden ".concat(
                  p ? "opacity-100" : "pointer-events-none opacity-0",
                ),
              "aria-hidden": "true",
              onClick: () => m(!1),
            }),
            (0, i.jsxs)("div", {
              ref: v,
              id: "mobile-menu",
              className:
                "fixed inset-x-0 top-[57px] z-50 max-h-[calc(100vh-57px)] overflow-y-auto bg-white/95 backdrop-blur-xl transition-all duration-300 ease-out-expo lg:hidden ".concat(
                  p
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-4 pointer-events-none opacity-0",
                ),
              role: "dialog",
              "aria-label": t("nav.mobileMenu"),
              children: [
                (0, i.jsx)("div", {
                  className: "border-b border-border/40 px-5 py-4",
                  children: (0, i.jsx)(c, {}),
                }),
                (0, i.jsx)("ul", {
                  className: "space-y-1 px-5 py-4",
                  children: x.map((e, t) => {
                    let n = r === e.href;
                    return (0, i.jsx)(
                      "li",
                      {
                        className: p ? "animate-fade-up" : "",
                        style: p
                          ? { animationDelay: "".concat(0.03 * t, "s") }
                          : void 0,
                        children: (0, i.jsxs)(a.default, {
                          href: e.href,
                          className:
                            "flex min-h-11 items-center rounded-xl px-4 text-sm font-medium no-underline transition-all duration-200 ".concat(
                              e.prominent
                                ? "mt-2 gap-2.5 bg-primary text-white shadow-soft hover:bg-primaryHover"
                                : n
                                  ? "bg-surfaceElevated text-primary"
                                  : "text-textSecondary hover:bg-surface hover:text-primary",
                            ),
                          "aria-current": n ? "page" : void 0,
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
                                  (0, i.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
                                  }),
                                  (0, i.jsx)("path", {
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
    2070: function (e, t, r) {
      "use strict";
      r.d(t, {
        OfflineIndicator: function () {
          return o;
        },
      });
      var i = r(7437),
        n = r(2265),
        a = r(9323);
      function o() {
        let e = (0, a.T)(),
          [t, r] = (0, n.useState)(!1);
        return ((0, n.useEffect)(() => {
          function e() {
            r(!1);
          }
          function t() {
            r(!0);
          }
          return (
            r(!navigator.onLine),
            window.addEventListener("online", e),
            window.addEventListener("offline", t),
            () => {
              (window.removeEventListener("online", e),
                window.removeEventListener("offline", t));
            }
          );
        }, []),
        t)
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
                    (0, i.jsx)("line", {
                      x1: "1",
                      y1: "1",
                      x2: "23",
                      y2: "23",
                    }),
                    (0, i.jsx)("path", {
                      d: "M16.72 11.06A10.94 10.94 0 0 1 19 12.55",
                    }),
                    (0, i.jsx)("path", {
                      d: "M5 12.55a10.94 10.94 0 0 1 5.17-2.39",
                    }),
                    (0, i.jsx)("path", {
                      d: "M10.71 5.05A16 16 0 0 1 22.56 9",
                    }),
                    (0, i.jsx)("path", {
                      d: "M1.42 9a15.91 15.91 0 0 1 4.7-2.88",
                    }),
                    (0, i.jsx)("path", { d: "M8.53 16.11a6 6 0 0 1 6.95 0" }),
                    (0, i.jsx)("line", {
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
    6543: function (e, t, r) {
      "use strict";
      r.d(t, {
        ZW: function () {
          return o;
        },
        nO: function () {
          return s;
        },
        RF: function () {
          return a;
        },
        eX: function () {
          return p;
        },
        _q: function () {
          return f;
        },
        Ty: function () {
          return m;
        },
        FT: function () {
          return h;
        },
        jR: function () {
          return d;
        },
        b1: function () {
          return v;
        },
      });
      var i = JSON.parse(
          '{"brand":{"name":"Revert Guide","homeAriaLabel":"Revert Guide - Home"},"languageSwitcher":{"ariaLabel":"Language switcher","label":"Language","en":"EN","fr":"FR"},"nav":{"home":"Home","roadmap":"Roadmap","topics":"Topics","glossary":"Glossary","resources":"Resources","allResources":"All Resources","findMasjid":"Find a Masjid","about":"About","aboutUs":"About Us","accessibility":"Accessibility","privacy":"Privacy Policy","terms":"Terms of Use","sources":"Sources","ramadan":"Ramadan Guide","mentalHealth":"Mental Health","mainNavigation":"Main navigation","openMenu":"Open menu","closeMenu":"Close menu","mobileMenu":"Navigation menu"},"footer":{"about":"About","accessibility":"Accessibility","privacy":"Privacy Policy","terms":"Terms of Use","sources":"Sources","description":"A free, offline-first resource for new Muslims. No tracking, no ads, just guidance on your journey.","explore":"Explore","information":"Information","quickLinksAriaLabel":"Quick links","navigationAriaLabel":"Footer navigation","copyright":"Revert Guide. Made with care for new Muslims everywhere."},"common":{"beginJourney":"Begin Your Journey","nextStep":"Next Step","previousStep":"Previous Step","readMore":"Read More","searchPlaceholder":"Search...","loading":"Preparing your next step...","offline":"You are offline. Some features may be limited.","backToRoadmap":"Back to Roadmap","skipToContent":"Skip to content","breadcrumb":"Breadcrumb","search":"Search","clearSearch":"Clear search"},"resources":{"types":{"article":"Article","video":"Video","book":"Book","app":"App","community":"Community","pdf":"PDF"},"visitResource":"Visit Resource","viewResource":"View Resource"},"metadata":{"home":{"title":"Revert Guide - Your Journey Begins Here","description":"An offline-first educational guide for new Muslims with practical, compassionate next steps."},"about":{"title":"About - Revert Guide","description":"Learn about the Revert Guide project, our mission, and our approach to beginner-friendly Islamic guidance."},"accessibility":{"title":"Accessibility Statement - Revert Guide","description":"Revert Guide\'s commitment to accessibility, WCAG 2.1 AA compliance, and inclusive design."},"glossary":{"title":"Glossary - Revert Guide","description":"Search Islamic terms, transliterations, and definitions in the Revert Guide glossary."},"mentalHealth":{"title":"Taking Care of Your Mind - Revert Guide","description":"Emotional support, validation, crisis resources, and practical guidance for new Muslims."},"offline":{"title":"Offline - Revert Guide","description":"Reconnect or open a previously cached page to continue using Revert Guide offline."},"privacy":{"title":"Privacy Policy - Revert Guide","description":"Read the Revert Guide privacy policy and understand our offline-first data practices."},"ramadan":{"title":"Ramadan Guide - Revert Guide","description":"Your first Ramadan as a Muslim, including fasting basics, preparation, and practical support."},"resources":{"title":"Resources - Revert Guide","description":"Curated books, videos, apps, and communities to support your journey."},"findMasjid":{"title":"Find a Masjid - Revert Guide","description":"Search Toronto-area masjids and mosques, even when offline."},"roadmap":{"title":"Your Roadmap - Revert Guide","description":"A step-by-step timeline for your first day, first weeks, and first months as a Muslim."},"sources":{"title":"Sources & Citations - Revert Guide","description":"Browse the Quran, hadith, articles, and books cited throughout Revert Guide."},"terms":{"title":"Terms of Use - Revert Guide","description":"Understand the terms, disclaimers, and usage conditions for Revert Guide."},"topics":{"title":"Topics - Revert Guide","description":"Explore self-contained topic guides about prayer, fasting, beliefs, community, and more."},"notFound":{"title":"Page Not Found - Revert Guide","description":"Return to the roadmap or homepage to continue your journey."}}}',
        ),
        n = JSON.parse(
          '{"brand":{"homeAriaLabel":"Revert Guide - Accueil"},"languageSwitcher":{"ariaLabel":"Selecteur de langue","label":"Langue"},"nav":{"home":"Accueil","roadmap":"Feuille de route","topics":"Sujets","glossary":"Glossaire","resources":"Ressources","allResources":"Toutes les ressources","findMasjid":"Trouver une mosquee","about":"A propos","aboutUs":"A propos de nous","accessibility":"Accessibilite","privacy":"Politique de confidentialite","terms":"Conditions d\'utilisation","sources":"Sources","ramadan":"Guide du Ramadan","mentalHealth":"Sante mentale","mainNavigation":"Navigation principale","openMenu":"Ouvrir le menu","closeMenu":"Fermer le menu","mobileMenu":"Menu de navigation"},"footer":{"about":"A propos","accessibility":"Accessibilite","privacy":"Politique de confidentialite","terms":"Conditions d\'utilisation","sources":"Sources","description":"Une ressource gratuite, hors ligne et pensee pour les nouveaux musulmans. Pas de suivi, pas de publicite, seulement des conseils utiles.","explore":"Explorer","information":"Information","quickLinksAriaLabel":"Liens rapides","navigationAriaLabel":"Navigation de pied de page","copyright":"Revert Guide. Cree avec soin pour les nouveaux musulmans partout."},"common":{"beginJourney":"Commencer votre parcours","nextStep":"Etape suivante","previousStep":"Etape precedente","readMore":"Lire la suite","searchPlaceholder":"Rechercher...","loading":"Preparation de votre prochaine etape...","offline":"Vous etes hors ligne. Certaines fonctionnalites peuvent etre limitees.","backToRoadmap":"Retour a la feuille de route","skipToContent":"Aller au contenu","breadcrumb":"Fil d\'Ariane","search":"Rechercher","clearSearch":"Effacer la recherche"},"resources":{"types":{"article":"Article","video":"Video","book":"Livre","app":"Application","community":"Communaute","pdf":"PDF"},"visitResource":"Visiter la ressource","viewResource":"Voir la ressource"},"metadata":{"home":{"title":"Revert Guide - Votre parcours commence ici","description":"Un guide educatif hors ligne pour les nouveaux musulmans, avec des etapes pratiques et compatissantes."},"about":{"title":"A propos - Revert Guide","description":"Decouvrez le projet Revert Guide, notre mission et notre approche pour accompagner les nouveaux musulmans."},"accessibility":{"title":"Accessibilite - Revert Guide","description":"L\'engagement de Revert Guide envers l\'accessibilite numerique et un design inclusif."},"glossary":{"title":"Glossaire - Revert Guide","description":"Recherchez des termes islamiques, transliterations et definitions dans le glossaire Revert Guide."},"mentalHealth":{"title":"Prendre soin de votre esprit - Revert Guide","description":"Soutien emotionnel, validation et ressources pratiques pour les nouveaux musulmans."},"offline":{"title":"Hors ligne - Revert Guide","description":"Reconnectez-vous ou ouvrez une page deja en cache pour continuer a utiliser Revert Guide."},"privacy":{"title":"Politique de confidentialite - Revert Guide","description":"Consultez la politique de confidentialite de Revert Guide et nos pratiques hors ligne."},"ramadan":{"title":"Guide du Ramadan - Revert Guide","description":"Votre premier Ramadan en tant que musulman, avec des bases, des conseils de preparation et un accompagnement pratique."},"resources":{"title":"Ressources - Revert Guide","description":"Livres, videos, applications et communautes selectionnes pour soutenir votre parcours."},"findMasjid":{"title":"Trouver une mosquee - Revert Guide","description":"Recherchez des mosquees dans la region de Toronto, meme hors ligne."},"roadmap":{"title":"Votre feuille de route - Revert Guide","description":"Un parcours etape par etape pour votre premier jour, vos premieres semaines et vos premiers mois en tant que musulman."},"sources":{"title":"Sources et citations - Revert Guide","description":"Consultez les references du Coran, des hadiths, des articles et des livres cites dans Revert Guide."},"terms":{"title":"Conditions d\'utilisation - Revert Guide","description":"Comprenez les conditions, avertissements et limites d\'utilisation de Revert Guide."},"topics":{"title":"Sujets - Revert Guide","description":"Explorez des guides dedies a la priere, au jeune, aux croyances, a la communaute, et plus encore."},"notFound":{"title":"Page introuvable - Revert Guide","description":"Revenez a la feuille de route ou a l\'accueil pour continuer votre parcours."}}}',
        );
      let a = ["en", "fr", "es", "hi", "ur", "zh", "tl", "pa"],
        o = "en",
        s = "revert-guide-locale",
        l = {
          en: i,
          fr: b(i, n),
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
      function c(e) {
        return a.includes(e);
      }
      function d(e) {
        return e && c(e) ? e : o;
      }
      function p(e) {
        return function (t) {
          let r = t.split(".").reduce((e, t) => {
            if (e && "string" != typeof e) return e[t];
          }, e);
          if (void 0 === r) throw Error("Missing translation key: ".concat(t));
          return r;
        };
      }
      function m(e) {
        return p(l[e]);
      }
      function f(e) {
        return u[e];
      }
      function h(e, t) {
        return !t ||
          t.startsWith("#") ||
          t.startsWith("http://") ||
          t.startsWith("https://") ||
          t.startsWith("mailto:") ||
          t.startsWith("tel:")
          ? t
          : "/" === t
            ? "/".concat(e)
            : t.startsWith("/".concat(e))
              ? t
              : "/".concat(e).concat(t.startsWith("/") ? t : "/".concat(t));
      }
      function v(e, t) {
        let r = e.split("/");
        return c(r[1])
          ? ((r[1] = t), r.join("/") || "/".concat(t))
          : h(t, e || "/");
      }
      function b(e, t) {
        if ("string" == typeof e || "string" == typeof t)
          return null != t ? t : e;
        let r = { ...e };
        for (let [e, i] of Object.entries(t)) {
          let t = r[e];
          if (void 0 === t) {
            r[e] = i;
            continue;
          }
          r[e] = b(t, i);
        }
        return r;
      }
    },
    3145: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return n.a;
        },
      });
      var i = r(8461),
        n = r.n(i);
    },
    7648: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return n.a;
        },
      });
      var i = r(2972),
        n = r.n(i);
    },
    9376: function (e, t, r) {
      "use strict";
      var i = r(5475);
      (r.o(i, "usePathname") &&
        r.d(t, {
          usePathname: function () {
            return i.usePathname;
          },
        }),
        r.o(i, "useRouter") &&
          r.d(t, {
            useRouter: function () {
              return i.useRouter;
            },
          }));
    },
    8461: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return l;
          },
          getImageProps: function () {
            return s;
          },
        }));
      let i = r(7043),
        n = r(5346),
        a = r(5878),
        o = i._(r(5084));
      function s(e) {
        let { props: t } = (0, n.getImgProps)(e, {
          defaultLoader: o.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !0,
          },
        });
        for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
        return { props: t };
      }
      let l = a.Image;
    },
  },
  function (e) {
    (e.O(0, [972, 878, 971, 734, 744], function () {
      return e((e.s = 2918));
    }),
      (_N_E = e.O()));
  },
]);
