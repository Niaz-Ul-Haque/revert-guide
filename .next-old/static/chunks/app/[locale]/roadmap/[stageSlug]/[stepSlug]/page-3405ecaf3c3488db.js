(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [650],
  {
    8192: function (e, r, t) {
      (Promise.resolve().then(t.bind(t, 2540)),
        Promise.resolve().then(t.bind(t, 9608)),
        Promise.resolve().then(t.bind(t, 4092)),
        Promise.resolve().then(t.bind(t, 9835)),
        Promise.resolve().then(t.t.bind(t, 2972, 23)));
    },
    2540: function (e, r, t) {
      "use strict";
      t.d(r, {
        Accordion: function () {
          return o;
        },
      });
      var n = t(7437),
        i = t(2265);
      function o(e) {
        let { title: r, children: t, defaultExpanded: o = !1 } = e,
          [s, a] = (0, i.useState)(o),
          l = (0, i.useId)(),
          d = "".concat(l, "-trigger"),
          c = "".concat(l, "-panel");
        return (0, n.jsxs)("div", {
          className: "rounded-2xl border transition-all duration-300 ".concat(
            s ? "border-primaryGreen/50 shadow-soft" : "border-border/60",
          ),
          children: [
            (0, n.jsx)("h3", {
              className: "m-0",
              children: (0, n.jsx)("button", {
                id: d,
                className:
                  "flex w-full items-center justify-between gap-3 rounded-2xl px-5 py-4 text-left text-base font-semibold text-textPrimary transition-all duration-200 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-borderStrong",
                "aria-expanded": s,
                "aria-controls": c,
                onClick: () => a(!s),
                children: (0, n.jsxs)("span", {
                  className: "flex items-center gap-3",
                  children: [
                    (0, n.jsx)("span", {
                      className:
                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ".concat(
                          s
                            ? "bg-primary text-white"
                            : "bg-surfaceElevated text-primary",
                        ),
                      children: (0, n.jsx)("svg", {
                        className:
                          "h-4 w-4 transition-transform duration-300 ease-out-expo ".concat(
                            s ? "rotate-180" : "",
                          ),
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: 2.5,
                        stroke: "currentColor",
                        "aria-hidden": "true",
                        children: (0, n.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "m19.5 8.25-7.5 7.5-7.5-7.5",
                        }),
                      }),
                    }),
                    r,
                  ],
                }),
              }),
            }),
            (0, n.jsx)("div", {
              id: c,
              role: "region",
              "aria-labelledby": d,
              className: "grid transition-all duration-300 ease-out-expo",
              style: {
                gridTemplateRows: s ? "1fr" : "0fr",
                opacity: s ? 1 : 0,
              },
              children: (0, n.jsx)("div", {
                className: "overflow-hidden",
                children: (0, n.jsx)("div", {
                  className: "border-t border-border/40 px-5 py-4 pl-14",
                  children: t,
                }),
              }),
            }),
          ],
        });
      }
    },
  },
  function (e) {
    (e.O(0, [972, 348, 971, 734, 744], function () {
      return e((e.s = 8192));
    }),
      (_N_E = e.O()));
  },
]);
