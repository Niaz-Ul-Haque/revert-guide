(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [999],
  {
    6625: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 3276));
    },
    3276: function (e, t, n) {
      "use strict";
      (n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        }));
      var a = n(7437),
        r = n(3145),
        i = n(4392),
        o = n(9140),
        s = n(6543);
      function l(e) {
        let { params: t } = e;
        return (0, a.jsxs)("div", {
          className:
            "mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-5 py-16 text-center",
          children: [
            (0, a.jsx)("div", {
              className: "relative mb-8 h-48 w-36",
              children: (0, a.jsx)(r.default, {
                src: "/Adult female Character Standing.png",
                alt: "",
                fill: !0,
                className: "animate-float object-contain",
                "aria-hidden": "true",
              }),
            }),
            (0, a.jsx)("h1", {
              className:
                "mb-3 font-display text-3xl font-semibold tracking-tight text-textPrimary",
              children: "You're Offline",
            }),
            (0, a.jsx)("p", {
              className: "mb-2 text-base leading-relaxed text-textSecondary",
              children:
                "It looks like you are not connected to the internet. The page you requested has not been cached for offline use yet.",
            }),
            (0, a.jsx)("p", {
              className: "mb-8 text-sm text-textMuted",
              children:
                "Pages you have previously visited should still be available. Try navigating to a page you have opened before, or reconnect to the internet and try again.",
            }),
            (0, a.jsxs)("div", {
              className: "flex flex-col gap-3 sm:flex-row",
              children: [
                (0, a.jsxs)(i.z, {
                  href: (0, s.FT)(t.locale, "/"),
                  variant: "primary",
                  children: [
                    (0, a.jsx)(o.J, { name: "home", size: "sm" }),
                    "Go Home",
                  ],
                }),
                (0, a.jsx)("button", {
                  type: "button",
                  onClick: function () {
                    window.location.reload();
                  },
                  className:
                    "inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary/30 bg-transparent px-5 py-3 text-base font-semibold text-primary transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/10 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong",
                  children: "Retry Connection",
                }),
              ],
            }),
          ],
        });
      }
    },
  },
  function (e) {
    (e.O(0, [972, 878, 805, 971, 734, 744], function () {
      return e((e.s = 6625));
    }),
      (_N_E = e.O()));
  },
]);
