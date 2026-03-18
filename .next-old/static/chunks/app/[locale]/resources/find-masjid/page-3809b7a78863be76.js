(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [822],
  {
    6142: function (e, r, n) {
      Promise.resolve().then(n.bind(n, 365));
    },
    365: function (e, r, n) {
      "use strict";
      n.d(r, {
        FindMasjidPageClient: function () {
          return h;
        },
      });
      var t = n(7437),
        a = n(2265),
        o = n(7648),
        s = n(4092),
        i = n(5435),
        l = n(9140);
      let d = {
        info: {
          bg: "bg-surfaceElevated/70",
          borderColor: "border-primary/30",
          iconBg: "bg-primary/10",
          iconColor: "text-primary",
          icon: (0, t.jsx)("svg", {
            className: "h-5 w-5",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            "aria-hidden": "true",
            children: (0, t.jsx)("path", {
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
          icon: (0, t.jsx)("svg", {
            className: "h-5 w-5",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            "aria-hidden": "true",
            children: (0, t.jsx)("path", {
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
          icon: (0, t.jsx)("svg", {
            className: "h-5 w-5",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            "aria-hidden": "true",
            children: (0, t.jsx)("path", {
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
          icon: (0, t.jsx)("svg", {
            className: "h-5 w-5",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            "aria-hidden": "true",
            children: (0, t.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z",
            }),
          }),
        },
      };
      function c(e) {
        var r;
        let { variant: n = "info", title: a, children: o } = e,
          s = d[n];
        return (0, t.jsx)("div", {
          className: "my-6 rounded-2xl border "
            .concat(s.borderColor, " ")
            .concat(s.bg, " p-5 backdrop-blur-sm"),
          role: null !== (r = s.role) && void 0 !== r ? r : "note",
          children: (0, t.jsxs)("div", {
            className: "flex gap-3",
            children: [
              (0, t.jsx)("span", {
                className:
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl "
                    .concat(s.iconBg, " ")
                    .concat(s.iconColor),
                children: s.icon,
              }),
              (0, t.jsxs)("div", {
                className: "min-w-0 flex-1",
                children: [
                  a &&
                    (0, t.jsx)("p", {
                      className: "mb-2 text-sm font-semibold text-textPrimary",
                      children: a,
                    }),
                  (0, t.jsx)("div", {
                    className:
                      "text-sm leading-relaxed text-textSecondary [&>p:last-child]:mb-0",
                    children: o,
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var m = n(9608),
        x = n(6543);
      function h(e) {
        let { locale: r, masjids: n } = e,
          [d, h] = (0, a.useState)(""),
          [u, p] = (0, a.useState)(!1);
        (0, a.useEffect)(() => {
          function e() {
            p(!1);
          }
          function r() {
            p(!0);
          }
          return (
            p(!navigator.onLine),
            window.addEventListener("online", e),
            window.addEventListener("offline", r),
            () => {
              (window.removeEventListener("online", e),
                window.removeEventListener("offline", r));
            }
          );
        }, []);
        let j = (0, a.useMemo)(() => {
          if (!d.trim()) return n;
          let e = d.toLowerCase();
          return n.filter(
            (r) =>
              r.name.toLowerCase().includes(e) ||
              r.city.toLowerCase().includes(e) ||
              r.postalCode.toLowerCase().includes(e) ||
              r.address.toLowerCase().includes(e),
          );
        }, [n, d]);
        return (0, t.jsxs)("div", {
          className: "mx-auto max-w-5xl px-5 py-10",
          children: [
            (0, t.jsx)(s.Breadcrumb, {
              items: [
                { label: "Home", href: (0, x.FT)(r, "/") },
                { label: "Resources", href: (0, x.FT)(r, "/resources") },
                { label: "Find a Masjid" },
              ],
            }),
            (0, t.jsx)("header", {
              className: "mb-8",
              children: (0, t.jsxs)(m.AnimateIn, {
                children: [
                  (0, t.jsx)("h1", {
                    className:
                      "mb-3 font-display text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl",
                    children: "Find a Masjid",
                  }),
                  (0, t.jsx)("p", {
                    className: "text-lg text-textSecondary",
                    children:
                      "Search for mosques in the Toronto area. Connect with your local community.",
                  }),
                ],
              }),
            }),
            u &&
              (0, t.jsx)(c, {
                variant: "warning",
                title: "You are offline",
                children: (0, t.jsx)("p", {
                  children:
                    "The masjid list and search are available offline. Map features require an internet connection.",
                }),
              }),
            (0, t.jsx)(m.AnimateIn, {
              delay: 0.1,
              children: (0, t.jsx)("div", {
                className:
                  "mb-8 flex h-52 items-center justify-center rounded-2xl border-2 border-dashed border-border/60 bg-surfaceElevated/30 text-center sm:h-64",
                children: (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("span", {
                      className:
                        "mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10",
                      children: (0, t.jsx)(l.J, {
                        name: "map-pin",
                        size: "lg",
                        className: "text-primary",
                      }),
                    }),
                    (0, t.jsx)("p", {
                      className: "mb-1 text-base font-semibold text-textMuted",
                      children: "Map coming soon",
                    }),
                    (0, t.jsx)("p", {
                      className: "mb-0 text-sm text-textMuted",
                      children:
                        "An interactive map will be available in a future update.",
                    }),
                  ],
                }),
              }),
            }),
            (0, t.jsx)(m.AnimateIn, {
              delay: 0.15,
              children: (0, t.jsx)(i.E, {
                value: d,
                onChange: h,
                placeholder: "Search by name, city, or postal code...",
                label: "Search masjids",
                hideLabel: !0,
                className: "mb-8",
              }),
            }),
            (0, t.jsx)("div", {
              "aria-live": "polite",
              className: "sr-only",
              children: d.trim()
                ? ""
                    .concat(j.length, " ")
                    .concat(1 === j.length ? "masjid found" : "masjids found")
                : "",
            }),
            0 === j.length
              ? (0, t.jsxs)("div", {
                  className:
                    "rounded-2xl border border-border/60 bg-surfaceElevated/50 px-6 py-14 text-center",
                  children: [
                    (0, t.jsx)("p", {
                      className:
                        "mb-2 font-display text-lg font-semibold text-textPrimary",
                      children: "No masjids found",
                    }),
                    (0, t.jsxs)("p", {
                      className: "mb-0 text-sm text-textSecondary",
                      children: [
                        "Try a different search term or",
                        " ",
                        (0, t.jsx)("button", {
                          type: "button",
                          onClick: () => h(""),
                          className:
                            "font-medium text-primary underline hover:text-primaryHover",
                          children: "clear the search",
                        }),
                        ".",
                      ],
                    }),
                  ],
                })
              : (0, t.jsx)("ul", {
                  className: "flex flex-col gap-4 pl-0",
                  children: j.map((e) =>
                    (0, t.jsxs)(
                      "li",
                      {
                        className:
                          "rounded-2xl border border-border/60 bg-white p-6 shadow-card transition-all duration-300 hover:shadow-soft",
                        children: [
                          (0, t.jsx)("h2", {
                            className:
                              "mb-3 mt-0 font-display text-lg font-bold text-textPrimary",
                            children: e.name,
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "flex flex-col gap-2 text-sm text-textSecondary",
                            children: [
                              (0, t.jsxs)("p", {
                                className: "mb-0 flex items-start gap-2.5",
                                children: [
                                  (0, t.jsx)(l.J, {
                                    name: "map-pin",
                                    size: "sm",
                                    className:
                                      "mt-0.5 shrink-0 text-primary/60",
                                  }),
                                  (0, t.jsxs)("span", {
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
                                (0, t.jsxs)("p", {
                                  className: "mb-0 flex items-center gap-2.5",
                                  children: [
                                    (0, t.jsx)("svg", {
                                      className:
                                        "h-4 w-4 shrink-0 text-primary/60",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      strokeWidth: 1.5,
                                      stroke: "currentColor",
                                      "aria-hidden": "true",
                                      children: (0, t.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z",
                                      }),
                                    }),
                                    (0, t.jsx)("a", {
                                      href: "tel:".concat(
                                        e.phone.replace(/[^\d+]/g, ""),
                                      ),
                                      className:
                                        "text-primary no-underline hover:underline",
                                      children: e.phone,
                                    }),
                                  ],
                                }),
                              e.website &&
                                (0, t.jsxs)("p", {
                                  className: "mb-0 flex items-center gap-2.5",
                                  children: [
                                    (0, t.jsx)(l.J, {
                                      name: "globe",
                                      size: "sm",
                                      className: "shrink-0 text-primary/60",
                                    }),
                                    (0, t.jsxs)("a", {
                                      href: e.website,
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      className:
                                        "text-primary no-underline hover:underline",
                                      children: [
                                        "Visit website",
                                        (0, t.jsxs)("span", {
                                          className: "sr-only",
                                          children: [" for ", e.name],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              e.notes &&
                                (0, t.jsx)("p", {
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
            (0, t.jsx)(m.AnimateIn, {
              className: "mt-10",
              children: (0, t.jsxs)("div", {
                className:
                  "rounded-2xl border border-primaryGreen/30 bg-surfaceElevated/50 p-6 text-center",
                children: [
                  (0, t.jsx)("p", {
                    className: "mb-3 text-sm text-textSecondary",
                    children: "New to visiting a mosque? Learn what to expect.",
                  }),
                  (0, t.jsxs)(o.default, {
                    href: (0, x.FT)(r, "/topics/community"),
                    className:
                      "inline-flex items-center gap-1.5 rounded-xl bg-primary/10 px-4 py-2 text-sm font-medium text-primary no-underline transition-all duration-200 hover:bg-primary/20 hover:text-primaryHover",
                    children: [
                      "Read: Building Your Muslim Community",
                      (0, t.jsx)(l.J, { name: "chevron-right", size: "sm" }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    9140: function (e, r, n) {
      "use strict";
      n.d(r, {
        J: function () {
          return s;
        },
      });
      var t = n(7437);
      let a = { sm: "h-4 w-4", md: "h-5 w-5", lg: "h-6 w-6" },
        o = {
          home: (0, t.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
          }),
          book: (0, t.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25",
          }),
          search: (0, t.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
          }),
          "map-pin": (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
              }),
              (0, t.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z",
              }),
            ],
          }),
          menu: (0, t.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",
          }),
          x: (0, t.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M6 18 18 6M6 6l12 12",
          }),
          "external-link": (0, t.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25",
          }),
          "chevron-right": (0, t.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m8.25 4.5 7.5 7.5-7.5 7.5",
          }),
          "chevron-down": (0, t.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m19.5 8.25-7.5 7.5-7.5-7.5",
          }),
          clock: (0, t.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
          }),
          check: (0, t.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m4.5 12.75 6 6 9-13.5",
          }),
          info: (0, t.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z",
          }),
          "alert-triangle": (0, t.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z",
          }),
          "alert-circle": (0, t.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z",
          }),
          lightbulb: (0, t.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
          }),
          globe: (0, t.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418",
          }),
          play: (0, t.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z",
          }),
          "file-text": (0, t.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z",
          }),
          users: (0, t.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z",
          }),
          download: (0, t.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3",
          }),
          star: (0, t.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z",
          }),
        };
      function s(e) {
        let { name: r, size: n = "md", className: s = "", label: i } = e,
          l = !i;
        return (0, t.jsx)("svg", {
          className: "".concat(a[n], " ").concat(s),
          fill: "none",
          viewBox: "0 0 24 24",
          strokeWidth: 1.5,
          stroke: "currentColor",
          "aria-hidden": l ? "true" : void 0,
          "aria-label": i,
          role: i ? "img" : void 0,
          focusable: "false",
          children: o[r],
        });
      }
    },
  },
  function (e) {
    (e.O(0, [972, 882, 971, 734, 744], function () {
      return e((e.s = 6142));
    }),
      (_N_E = e.O()));
  },
]);
