(() => {
  var e = {};
  ((e.id = 999),
    (e.ids = [999]),
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
      2710: (e, t, r) => {
        "use strict";
        (r.r(t),
          r.d(t, {
            GlobalError: () => n.a,
            __next_app__: () => p,
            originalPathname: () => u,
            pages: () => c,
            routeModule: () => x,
            tree: () => d,
          }),
          r(4748),
          r(9475),
          r(6982),
          r(1506),
          r(5866));
        var o = r(3191),
          s = r(8716),
          a = r(7922),
          n = r.n(a),
          i = r(5231),
          l = {};
        for (let e in i)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "originalPathname",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (l[e] = () => i[e]);
        r.d(t, l);
        let d = [
            "",
            {
              children: [
                "[locale]",
                {
                  children: [
                    "offline",
                    {
                      children: [
                        "__PAGE__",
                        {},
                        {
                          page: [
                            () => Promise.resolve().then(r.bind(r, 4748)),
                            "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\offline\\page.tsx",
                          ],
                        },
                      ],
                    },
                    {},
                  ],
                },
                {
                  layout: [
                    () => Promise.resolve().then(r.bind(r, 9475)),
                    "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\layout.tsx",
                  ],
                  "not-found": [
                    () => Promise.resolve().then(r.bind(r, 6982)),
                    "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\not-found.tsx",
                  ],
                },
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(r.bind(r, 1506)),
                "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\layout.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(r.t.bind(r, 5866, 23)),
                "next/dist/client/components/not-found-error",
              ],
            },
          ],
          c = [
            "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\[locale]\\offline\\page.tsx",
          ],
          u = "/[locale]/offline/page",
          p = { require: r, loadChunk: () => Promise.resolve() },
          x = new o.AppPageRouteModule({
            definition: {
              kind: s.x.APP_PAGE,
              page: "/[locale]/offline/page",
              pathname: "/[locale]/offline",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      9796: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 5569));
      },
      5569: (e, t, r) => {
        "use strict";
        (r.r(t), r.d(t, { default: () => d }));
        var o = r(326),
          s = r(6226),
          a = r(7862),
          n = r(1365),
          i = r(8487);
        let l = {
          title: "You're Offline",
          body: "It looks like you are not connected to the internet. The page you requested has not been cached for offline use yet.",
          note: "Pages you have previously visited should still be available. Try navigating to a page you have opened before, or reconnect to the internet and try again.",
          goHome: "Go Home",
          retry: "Retry Connection",
        };
        function d({ params: e }) {
          return (0, o.jsxs)("div", {
            className:
              "mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-5 py-16 text-center",
            children: [
              o.jsx("div", {
                className: "relative mb-8 h-48 w-36",
                children: o.jsx(s.default, {
                  src: "/Adult female Character Standing.png",
                  alt: "",
                  fill: !0,
                  className: "animate-float object-contain",
                  "aria-hidden": "true",
                }),
              }),
              o.jsx("h1", {
                className:
                  "mb-3 font-display text-3xl font-semibold tracking-tight text-textPrimary",
                children: l.title,
              }),
              o.jsx("p", {
                className: "mb-2 text-base leading-relaxed text-textSecondary",
                children: l.body,
              }),
              o.jsx("p", {
                className: "mb-8 text-sm text-textMuted",
                children: l.note,
              }),
              (0, o.jsxs)("div", {
                className: "flex flex-col gap-3 sm:flex-row",
                children: [
                  (0, o.jsxs)(a.z, {
                    href: (0, i.FT)(e.locale, "/"),
                    variant: "primary",
                    children: [
                      o.jsx(n.J, { name: "home", size: "sm" }),
                      l.goHome,
                    ],
                  }),
                  o.jsx("button", {
                    type: "button",
                    onClick: function () {
                      window.location.reload();
                    },
                    className:
                      "inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary/30 bg-transparent px-5 py-3 text-base font-semibold text-primary transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/10 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-borderStrong",
                    children: l.retry,
                  }),
                ],
              }),
            ],
          });
        }
      },
      4748: (e, t, r) => {
        "use strict";
        (r.r(t), r.d(t, { default: () => o }));
        let o = (0, r(8570).createProxy)(
          String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\app\[locale]\offline\page.tsx#default`,
        );
      },
    }));
  var t = require("../../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    o = t.X(0, [963, 496, 990, 901], () => r(2710));
  module.exports = o;
})();
