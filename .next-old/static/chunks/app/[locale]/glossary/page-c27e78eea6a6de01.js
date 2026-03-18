(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [118],
  {
    1558: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 6881));
    },
    6881: function (e, t, r) {
      "use strict";
      r.d(t, {
        GlossaryPageClient: function () {
          return d;
        },
      });
      var a = r(7437),
        s = r(2265),
        l = r(4092),
        n = r(5435),
        i = r(9608),
        o = r(6543);
      let c = {
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
      function d(e) {
        let { locale: t, entries: r } = e,
          [d, m] = (0, s.useState)(""),
          x = (0, s.useMemo)(() => {
            if (!d.trim()) return r;
            let e = d.toLowerCase();
            return r.filter(
              (t) =>
                t.term.toLowerCase().includes(e) ||
                t.definition.toLowerCase().includes(e) ||
                (t.transliteration &&
                  t.transliteration.toLowerCase().includes(e)) ||
                (t.arabicText && t.arabicText.includes(d)),
            );
          }, [r, d]),
          h = (0, s.useMemo)(() => {
            let e = new Map();
            for (let r of [...x].sort((e, t) => e.term.localeCompare(t.term))) {
              var t;
              let a = r.term[0].toUpperCase(),
                s = null !== (t = e.get(a)) && void 0 !== t ? t : [];
              (s.push(r), e.set(a, s));
            }
            return Array.from(e.entries());
          }, [x]);
        return (0, a.jsxs)("div", {
          className: "mx-auto max-w-4xl px-5 py-10",
          children: [
            (0, a.jsx)(l.Breadcrumb, {
              items: [
                { label: "Home", href: (0, o.FT)(t, "/") },
                { label: c.title },
              ],
            }),
            (0, a.jsx)("header", {
              className: "mb-8",
              children: (0, a.jsxs)(i.AnimateIn, {
                children: [
                  (0, a.jsx)("h1", {
                    className:
                      "mb-3 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl",
                    children: c.title,
                  }),
                  (0, a.jsx)("p", {
                    className: "text-lg text-textSecondary",
                    children: c.description,
                  }),
                ],
              }),
            }),
            (0, a.jsx)(i.AnimateIn, {
              delay: 0.1,
              children: (0, a.jsx)(n.E, {
                value: d,
                onChange: m,
                placeholder: c.searchPlaceholder,
                label: c.searchLabel,
                hideLabel: !0,
                className: "mb-8",
              }),
            }),
            (0, a.jsx)("div", {
              "aria-live": "polite",
              className: "sr-only",
              children: d.trim()
                ? ""
                    .concat(x.length, " ")
                    .concat(1 === x.length ? "term found" : "terms found")
                : "",
            }),
            0 === h.length
              ? (0, a.jsxs)("div", {
                  className:
                    "rounded-2xl border border-border/60 bg-surfaceElevated/50 px-6 py-14 text-center",
                  children: [
                    (0, a.jsx)("p", {
                      className:
                        "mb-2 font-display text-lg font-semibold text-textPrimary",
                      children: c.emptyTitle,
                    }),
                    (0, a.jsxs)("p", {
                      className: "mb-0 text-sm text-textSecondary",
                      children: [
                        c.emptyPrefix,
                        " ",
                        (0, a.jsx)("button", {
                          type: "button",
                          onClick: () => m(""),
                          className:
                            "font-medium text-primary underline hover:text-primaryHover",
                          children: c.emptyAction,
                        }),
                        ".",
                      ],
                    }),
                  ],
                })
              : (0, a.jsx)("div", {
                  className: "flex flex-col gap-10",
                  children: h.map((e) => {
                    let [t, s] = e;
                    return (0, a.jsxs)(
                      "section",
                      {
                        "aria-labelledby": "letter-".concat(t),
                        children: [
                          (0, a.jsx)("h2", {
                            id: "letter-".concat(t),
                            className:
                              "mb-5 border-b border-primaryGreen/30 pb-2 font-display text-2xl font-semibold text-primary",
                            children: t,
                          }),
                          (0, a.jsx)("dl", {
                            className: "flex flex-col gap-4",
                            children: s.map((e) =>
                              (0, a.jsxs)(
                                "div",
                                {
                                  id: e.id,
                                  className:
                                    "scroll-mt-24 rounded-2xl border border-border/60 bg-white p-6 shadow-card transition-all duration-300 hover:shadow-soft",
                                  children: [
                                    (0, a.jsxs)("dt", {
                                      className:
                                        "mb-2 flex flex-wrap items-baseline gap-2",
                                      children: [
                                        (0, a.jsx)("span", {
                                          className:
                                            "text-lg font-bold text-textPrimary",
                                          children: e.term,
                                        }),
                                        e.arabicText &&
                                          (0, a.jsx)("span", {
                                            className:
                                              "font-arabic text-xl text-textMuted",
                                            lang: "ar",
                                            dir: "rtl",
                                            children: e.arabicText,
                                          }),
                                        e.transliteration &&
                                          (0, a.jsxs)("span", {
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
                                    (0, a.jsxs)("dd", {
                                      className: "mb-0",
                                      children: [
                                        (0, a.jsx)("p", {
                                          className:
                                            "mb-2 text-sm leading-relaxed text-textSecondary",
                                          children: e.definition,
                                        }),
                                        e.seeAlso.length > 0 &&
                                          (0, a.jsxs)("div", {
                                            className:
                                              "flex flex-wrap items-center gap-1.5 text-xs text-textMuted",
                                            children: [
                                              (0, a.jsx)("span", {
                                                children: c.seeAlso,
                                              }),
                                              e.seeAlso.map((e) => {
                                                var t;
                                                let s = r.find(
                                                  (t) => t.id === e,
                                                );
                                                return (0, a.jsx)(
                                                  "a",
                                                  {
                                                    href: "#".concat(e),
                                                    className:
                                                      "rounded-lg bg-surfaceElevated px-2 py-0.5 font-medium text-primary no-underline transition-colors hover:bg-primary/15 hover:text-primaryHover",
                                                    onClick: (t) => {
                                                      t.preventDefault();
                                                      let r =
                                                        document.getElementById(
                                                          e,
                                                        );
                                                      r &&
                                                        (m(""),
                                                        requestAnimationFrame(
                                                          () => {
                                                            (r.scrollIntoView({
                                                              behavior:
                                                                "smooth",
                                                              block: "center",
                                                            }),
                                                              r.classList.add(
                                                                "ring-2",
                                                                "ring-primary",
                                                                "ring-offset-2",
                                                              ),
                                                              setTimeout(() => {
                                                                r.classList.remove(
                                                                  "ring-2",
                                                                  "ring-primary",
                                                                  "ring-offset-2",
                                                                );
                                                              }, 2e3));
                                                          },
                                                        ));
                                                    },
                                                    children:
                                                      null !==
                                                        (t =
                                                          null == s
                                                            ? void 0
                                                            : s.term) &&
                                                      void 0 !== t
                                                        ? t
                                                        : e,
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
                      t,
                    );
                  }),
                }),
          ],
        });
      }
    },
  },
  function (e) {
    (e.O(0, [972, 882, 971, 734, 744], function () {
      return e((e.s = 1558));
    }),
      (_N_E = e.O()));
  },
]);
