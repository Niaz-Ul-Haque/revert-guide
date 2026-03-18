(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [61],
  {
    6261: function (e, n, t) {
      (Promise.resolve().then(t.bind(t, 9608)),
        Promise.resolve().then(t.t.bind(t, 5878, 23)),
        Promise.resolve().then(t.t.bind(t, 2972, 23)));
    },
    9608: function (e, n, t) {
      "use strict";
      t.d(n, {
        AnimateIn: function () {
          return a;
        },
      });
      var i = t(7437),
        r = t(2265);
      function a(e) {
        let {
            children: n,
            className: t = "",
            delay: a = 0,
            animation: s = "fade-up",
            threshold: c = 0.1,
          } = e,
          o = (0, r.useRef)(null),
          [u, d] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            let e = o.current;
            if (!e) return;
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
              d(!0);
              return;
            }
            let n = new IntersectionObserver(
              (t) => {
                let [i] = t;
                i.isIntersecting && (d(!0), n.unobserve(e));
              },
              { threshold: c, rootMargin: "0px 0px -40px 0px" },
            );
            return (n.observe(e), () => n.disconnect());
          }, [c]),
          (0, i.jsx)("div", {
            ref: o,
            className: ""
              .concat(t, " ")
              .concat(
                u
                  ? {
                      "fade-up": "animate-fade-up",
                      "fade-in": "animate-fade-in",
                      "scale-in": "animate-scale-in",
                      "slide-in-right": "animate-slide-in-right",
                    }[s]
                  : "opacity-0",
              ),
            style: u && a > 0 ? { animationDelay: "".concat(a, "s") } : void 0,
            children: n,
          })
        );
      }
    },
  },
  function (e) {
    (e.O(0, [972, 878, 971, 734, 744], function () {
      return e((e.s = 6261));
    }),
      (_N_E = e.O()));
  },
]);
