(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [82],
  {
    8678: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 950));
    },
    950: function (e, t, n) {
      "use strict";
      (n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        }));
      var r = n(7437),
        a = n(3145),
        s = n(9376),
        i = n(4392),
        o = n(9140),
        u = n(6543);
      function c() {
        let e = (0, s.usePathname)(),
          t = (0, u.jR)(e.split("/")[1]);
        return (0, r.jsxs)("div", {
          className:
            "mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-5 py-16 text-center",
          children: [
            (0, r.jsx)("div", {
              className:
                "mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-primary/10",
              children: (0, r.jsx)(a.default, {
                src: "/revert-guide-logo.png",
                alt: "",
                width: 48,
                height: 48,
                "aria-hidden": "true",
              }),
            }),
            (0, r.jsx)("h1", {
              className:
                "mb-3 font-display text-3xl font-semibold tracking-tight text-textPrimary",
              children: "Page Not Found",
            }),
            (0, r.jsx)("p", {
              className: "mb-8 text-base leading-relaxed text-textSecondary",
              children:
                "This page seems to have wandered off. It may have been moved, removed, or the URL might be incorrect. Let's get you back on track.",
            }),
            (0, r.jsxs)("div", {
              className: "flex flex-col gap-3 sm:flex-row",
              children: [
                (0, r.jsxs)(i.z, {
                  href: (0, u.FT)(t, "/"),
                  variant: "primary",
                  children: [
                    (0, r.jsx)(o.J, { name: "home", size: "sm" }),
                    "Return Home",
                  ],
                }),
                (0, r.jsx)(i.z, {
                  href: (0, u.FT)(t, "/roadmap"),
                  variant: "outline",
                  children: "Go to Roadmap",
                }),
              ],
            }),
          ],
        });
      }
    },
    9376: function (e, t, n) {
      "use strict";
      var r = n(5475);
      (n.o(r, "usePathname") &&
        n.d(t, {
          usePathname: function () {
            return r.usePathname;
          },
        }),
        n.o(r, "useRouter") &&
          n.d(t, {
            useRouter: function () {
              return r.useRouter;
            },
          }));
    },
  },
  function (e) {
    (e.O(0, [972, 878, 805, 971, 734, 744], function () {
      return e((e.s = 8678));
    }),
      (_N_E = e.O()));
  },
]);
