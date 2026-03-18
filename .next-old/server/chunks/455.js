"use strict";
((exports.id = 455),
  (exports.ids = [455]),
  (exports.modules = {
    8999: (e, r, t) => {
      t.d(r, { Accordion: () => a });
      var n = t(326),
        o = t(7577);
      function a({ title: e, children: r, defaultExpanded: t = !1 }) {
        let [a, s] = (0, o.useState)(t),
          i = (0, o.useId)(),
          d = `${i}-trigger`,
          l = `${i}-panel`;
        return (0, n.jsxs)("div", {
          className: `rounded-2xl border transition-all duration-300 ${a ? "border-primaryGreen/50 shadow-soft" : "border-border/60"}`,
          children: [
            n.jsx("h3", {
              className: "m-0",
              children: n.jsx("button", {
                id: d,
                className:
                  "flex w-full items-center justify-between gap-3 rounded-2xl px-5 py-4 text-left text-base font-semibold text-textPrimary transition-all duration-200 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-borderStrong",
                "aria-expanded": a,
                "aria-controls": l,
                onClick: () => s(!a),
                children: (0, n.jsxs)("span", {
                  className: "flex items-center gap-3",
                  children: [
                    n.jsx("span", {
                      className: `flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${a ? "bg-primary text-white" : "bg-surfaceElevated text-primary"}`,
                      children: n.jsx("svg", {
                        className: `h-4 w-4 transition-transform duration-300 ease-out-expo ${a ? "rotate-180" : ""}`,
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: 2.5,
                        stroke: "currentColor",
                        "aria-hidden": "true",
                        children: n.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "m19.5 8.25-7.5 7.5-7.5-7.5",
                        }),
                      }),
                    }),
                    e,
                  ],
                }),
              }),
            }),
            n.jsx("div", {
              id: l,
              role: "region",
              "aria-labelledby": d,
              className: "grid transition-all duration-300 ease-out-expo",
              style: {
                gridTemplateRows: a ? "1fr" : "0fr",
                opacity: a ? 1 : 0,
              },
              children: n.jsx("div", {
                className: "overflow-hidden",
                children: n.jsx("div", {
                  className: "border-t border-border/40 px-5 py-4 pl-14",
                  children: r,
                }),
              }),
            }),
          ],
        });
      }
    },
    5829: (e, r, t) => {
      t.d(r, { AnimateIn: () => a });
      var n = t(326),
        o = t(7577);
      function a({
        children: e,
        className: r = "",
        delay: t = 0,
        animation: a = "fade-up",
        threshold: s = 0.1,
      }) {
        let i = (0, o.useRef)(null),
          [d, l] = (0, o.useState)(!1);
        return n.jsx("div", {
          ref: i,
          className: `${r} ${d ? { "fade-up": "animate-fade-up", "fade-in": "animate-fade-in", "scale-in": "animate-scale-in", "slide-in-right": "animate-slide-in-right" }[a] : "opacity-0"}`,
          style: d && t > 0 ? { animationDelay: `${t}s` } : void 0,
          children: e,
        });
      }
    },
    3630: (e, r, t) => {
      t.d(r, { Breadcrumb: () => s });
      var n = t(326),
        o = t(434),
        a = t(3082);
      function s({ items: e }) {
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
                          : n.jsx(o.default, {
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
    2262: (e, r, t) => {
      t.d(r, { ResourceCard: () => c, StepCard: () => i, TopicCard: () => d });
      var n = t(326),
        o = t(434),
        a = t(8487);
      function s({ children: e, className: r = "", href: t }) {
        let a = `block rounded-2xl border border-border/60 bg-white p-6 shadow-card transition-all duration-300 ease-out-expo page-break-avoid ${r}`;
        return t
          ? n.jsx(o.default, {
              href: t,
              className: `${a} no-underline hover:border-primaryGreen/60 hover:shadow-card-hover hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong`,
              children: e,
            })
          : n.jsx("div", { className: a, children: e });
      }
      function i({ title: e, stepNumber: r, timeEstimate: t, href: o }) {
        return n.jsx(s, {
          href: o,
          className: "group",
          children: (0, n.jsxs)("div", {
            className: "flex items-center gap-4",
            children: [
              n.jsx("span", {
                className:
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primaryHover text-sm font-bold text-white shadow-soft transition-transform duration-300 group-hover:scale-110",
                "aria-hidden": "true",
                children: r,
              }),
              (0, n.jsxs)("div", {
                className: "min-w-0 flex-1",
                children: [
                  n.jsx("h4", {
                    className:
                      "mb-0 mt-0 text-base font-semibold text-textPrimary",
                    children: e,
                  }),
                  t &&
                    n.jsx("span", {
                      className: "mt-0.5 block text-xs text-textMuted",
                      children: t,
                    }),
                ],
              }),
              n.jsx("svg", {
                className:
                  "h-5 w-5 shrink-0 text-border transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                children: n.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "m8.25 4.5 7.5 7.5-7.5 7.5",
                }),
              }),
            ],
          }),
        });
      }
      function d({ title: e, description: r, href: t, icon: o }) {
        return (0, n.jsxs)(s, {
          href: t,
          className: "group relative overflow-hidden",
          children: [
            n.jsx("div", {
              className:
                "pointer-events-none absolute inset-0 bg-gradient-to-br from-primaryGreen/0 to-primaryGreen/0 transition-all duration-500 group-hover:from-primaryGreen/5 group-hover:to-transparent",
              "aria-hidden": "true",
            }),
            (0, n.jsxs)("div", {
              className: "relative flex items-start gap-4",
              children: [
                o &&
                  n.jsx("span", {
                    className:
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surfaceElevated text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white",
                    "aria-hidden": "true",
                    children: o,
                  }),
                (0, n.jsxs)("div", {
                  className: "min-w-0 flex-1",
                  children: [
                    n.jsx("h3", {
                      className:
                        "mb-1 mt-0 text-lg font-semibold text-textPrimary",
                      children: e,
                    }),
                    n.jsx("p", {
                      className:
                        "mb-0 text-sm leading-relaxed text-textSecondary",
                      children: r,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      let l = {
        article: "bg-primary/10 text-primary",
        video: "bg-accent/10 text-accent",
        book: "bg-primaryGreen/30 text-primaryHover",
        app: "bg-secondaryGreen/30 text-accent",
        community: "bg-surfaceElevated text-primary",
        pdf: "bg-oliveAccent/20 text-accent",
      };
      function c({
        title: e,
        description: r,
        type: t,
        url: o,
        locale: i = "en",
      }) {
        let d = (0, a.Ty)(i),
          c = o.startsWith("http");
        return n.jsx(s, {
          className: "group",
          children: n.jsx("div", {
            className: "flex items-start justify-between gap-3",
            children: (0, n.jsxs)("div", {
              className: "min-w-0 flex-1",
              children: [
                (0, n.jsxs)("div", {
                  className: "mb-2.5 flex flex-wrap items-center gap-2",
                  children: [
                    n.jsx("h3", {
                      className:
                        "mb-0 mt-0 text-base font-semibold text-textPrimary",
                      children: e,
                    }),
                    n.jsx("span", {
                      className: `inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${l[t]}`,
                      children: d(`resources.types.${t}`),
                    }),
                  ],
                }),
                n.jsx("p", {
                  className: "mb-3 text-sm leading-relaxed text-textSecondary",
                  children: r,
                }),
                (0, n.jsxs)("a", {
                  href: o,
                  className:
                    "inline-flex items-center gap-1.5 rounded-lg bg-surfaceElevated px-3 py-1.5 text-sm font-medium text-primary no-underline transition-all duration-200 hover:bg-primary/15 hover:text-primaryHover",
                  ...(c
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {}),
                  children: [
                    d(c ? "resources.visitResource" : "resources.viewResource"),
                    c &&
                      n.jsx("svg", {
                        className: "h-3.5 w-3.5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: 2,
                        stroke: "currentColor",
                        "aria-hidden": "true",
                        children: n.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25",
                        }),
                      }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
    },
    4486: (e, r, t) => {
      t.d(r, { U: () => n });
      let n = (0, t(8570).createProxy)(
        String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\components\Accordion.tsx#Accordion`,
      );
    },
    6258: (e, r, t) => {
      t.d(r, { b: () => n });
      let n = (0, t(8570).createProxy)(
        String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\components\AnimateIn.tsx#AnimateIn`,
      );
    },
    4557: (e, r, t) => {
      t.d(r, { a: () => n });
      let n = (0, t(8570).createProxy)(
        String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\components\Breadcrumb.tsx#Breadcrumb`,
      );
    },
    5769: (e, r, t) => {
      t.d(r, { z: () => s });
      var n = t(9510),
        o = t(7371);
      let a = {
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
            ...i
          } = e,
          d = `inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-base font-semibold no-underline hover:no-underline transition-all duration-300 ease-out-expo focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${a[r]} ${s}`;
        if ("href" in i && i.href) {
          let { href: e, external: r, ...a } = i;
          return r
            ? (0, n.jsxs)("a", {
                href: e,
                className: d,
                target: "_blank",
                rel: "noopener noreferrer",
                ...a,
                children: [
                  t,
                  n.jsx("svg", {
                    className: "h-4 w-4",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 2,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    children: n.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25",
                    }),
                  }),
                ],
              })
            : n.jsx(o.default, { href: e, className: d, ...a, children: t });
        }
        return n.jsx("button", { className: d, ...i, children: t });
      }
    },
    5899: (e, r, t) => {
      t.d(r, { PI: () => s, pq: () => o, uX: () => a });
      var n = t(8570);
      ((0, n.createProxy)(
        String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\components\Card.tsx#Card`,
      ),
        (0, n.createProxy)(
          String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\components\Card.tsx#StageCard`,
        ));
      let o = (0, n.createProxy)(
          String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\components\Card.tsx#StepCard`,
        ),
        a = (0, n.createProxy)(
          String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\components\Card.tsx#TopicCard`,
        ),
        s = (0, n.createProxy)(
          String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\components\Card.tsx#ResourceCard`,
        );
    },
    2095: (e, r, t) => {
      t.d(r, { J: () => s });
      var n = t(9510);
      let o = { sm: "h-4 w-4", md: "h-5 w-5", lg: "h-6 w-6" },
        a = {
          home: n.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
          }),
          book: n.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25",
          }),
          search: n.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
          }),
          "map-pin": (0, n.jsxs)(n.Fragment, {
            children: [
              n.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
              }),
              n.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z",
              }),
            ],
          }),
          menu: n.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",
          }),
          x: n.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M6 18 18 6M6 6l12 12",
          }),
          "external-link": n.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25",
          }),
          "chevron-right": n.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m8.25 4.5 7.5 7.5-7.5 7.5",
          }),
          "chevron-down": n.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m19.5 8.25-7.5 7.5-7.5-7.5",
          }),
          clock: n.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
          }),
          check: n.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m4.5 12.75 6 6 9-13.5",
          }),
          info: n.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z",
          }),
          "alert-triangle": n.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z",
          }),
          "alert-circle": n.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z",
          }),
          lightbulb: n.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
          }),
          globe: n.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418",
          }),
          play: n.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z",
          }),
          "file-text": n.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z",
          }),
          users: n.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z",
          }),
          download: n.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3",
          }),
          star: n.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z",
          }),
        };
      function s({ name: e, size: r = "md", className: t = "", label: s }) {
        let i = !s;
        return n.jsx("svg", {
          className: `${o[r]} ${t}`,
          fill: "none",
          viewBox: "0 0 24 24",
          strokeWidth: 1.5,
          stroke: "currentColor",
          "aria-hidden": i ? "true" : void 0,
          "aria-label": s,
          role: s ? "img" : void 0,
          focusable: "false",
          children: a[e],
        });
      }
    },
    4745: (e, r, t) => {
      t.d(r, {
        $d: () => L,
        Ei: () => g,
        IY: () => m,
        Jz: () => b,
        MB: () => w,
        NI: () => v,
        V3: () => f,
        Zb: () => h,
        aQ: () => k,
        fY: () => j,
        hS: () => u,
        hf: () => p,
        ik: () => N,
        tw: () => y,
      });
      var n = t(2048),
        o = t(5315),
        a = t(9306);
      let s = o.join(process.cwd(), "content");
      function i(e) {
        return JSON.parse(n.readFileSync(e, "utf-8"));
      }
      function d(e) {
        return o.join(s, e);
      }
      function l(e, r) {
        let t = o.join(d(e), r);
        return n.existsSync(t) ? t : o.join(d(a.ZW), r);
      }
      function c(e, r) {
        let t = o.join(d(a.ZW), r),
          s = o.join(d(e), r),
          c = new Set();
        if (n.existsSync(t))
          for (let e of n.readdirSync(t)) e.endsWith(".json") && c.add(e);
        if (n.existsSync(s))
          for (let e of n.readdirSync(s)) e.endsWith(".json") && c.add(e);
        return Array.from(c).map((t) => i(l(e, o.join(r, t))));
      }
      function u(e = a.ZW) {
        return i(l(e, "stages.json"));
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
      function v(e = a.ZW) {
        return c(e, "topics");
      }
      function j(e, r = a.ZW) {
        return v(r).find((r) => r.id === e);
      }
      function b(e, r = a.ZW) {
        return v(r).find((r) => (r.slug ?? r.id) === e);
      }
      function g(e = a.ZW) {
        return i(l(e, "glossary.json")).sort((e, r) =>
          e.term.localeCompare(r.term),
        );
      }
      function k(e, r = a.ZW) {
        return g(r).find((r) => r.id === e);
      }
      function y(e = a.ZW) {
        return i(l(e, "resources.json"));
      }
      function w(e, r = a.ZW) {
        return y(r).find((r) => r.id === e);
      }
      function L(e, r = a.ZW) {
        return y(r).filter((r) => r.relatedTopicIds.includes(e));
      }
      function N(e = a.ZW) {
        return i(l(e, "masjids.json"));
      }
    },
    7371: (e, r, t) => {
      t.d(r, { default: () => o.a });
      var n = t(1812),
        o = t.n(n);
    },
    1812: (e, r, t) => {
      let { createProxy: n } = t(8570);
      e.exports = n(
        "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\node_modules\\next\\dist\\client\\link.js",
      );
    },
  }));
