(() => {
  var e = {};
  ((e.id = 931),
    (e.ids = [931]),
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
      8822: (e, t, i) => {
        "use strict";
        (i.r(t),
          i.d(t, {
            GlobalError: () => a.a,
            __next_app__: () => p,
            originalPathname: () => d,
            pages: () => c,
            routeModule: () => m,
            tree: () => l,
          }),
          i(908),
          i(1506),
          i(5866));
        var r = i(3191),
          s = i(8716),
          o = i(7922),
          a = i.n(o),
          n = i(5231),
          u = {};
        for (let e in n)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "originalPathname",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (u[e] = () => n[e]);
        i.d(t, u);
        let l = [
            "",
            {
              children: [
                "__PAGE__",
                {},
                {
                  page: [
                    () => Promise.resolve().then(i.bind(i, 908)),
                    "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\page.tsx",
                  ],
                },
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(i.bind(i, 1506)),
                "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\layout.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(i.t.bind(i, 5866, 23)),
                "next/dist/client/components/not-found-error",
              ],
            },
          ],
          c = [
            "C:\\Users\\User\\OneDrive\\Desktop\\Software works\\revert-guide\\app\\page.tsx",
          ],
          d = "/page",
          p = { require: i, loadChunk: () => Promise.resolve() },
          m = new r.AppPageRouteModule({
            definition: {
              kind: s.x.APP_PAGE,
              page: "/page",
              pathname: "/",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: l },
          });
      },
      627: (e, t, i) => {
        Promise.resolve().then(i.bind(i, 8743));
      },
      9930: (e, t, i) => {
        (Promise.resolve().then(i.t.bind(i, 2994, 23)),
          Promise.resolve().then(i.t.bind(i, 6114, 23)),
          Promise.resolve().then(i.t.bind(i, 9727, 23)),
          Promise.resolve().then(i.t.bind(i, 9671, 23)),
          Promise.resolve().then(i.t.bind(i, 1868, 23)),
          Promise.resolve().then(i.t.bind(i, 4759, 23)));
      },
      5304: () => {},
      8743: (e, t, i) => {
        "use strict";
        (i.r(t), i.d(t, { default: () => n }));
        var r = i(326),
          s = i(434);
        i(7577);
        var o = i(5047),
          a = i(8487);
        function n() {
          return (
            (0, o.useRouter)(),
            (0, r.jsxs)("main", {
              className:
                "mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-5 text-center",
              children: [
                r.jsx("p", {
                  className: "mb-4 text-sm text-textSecondary",
                  children: "Redirecting to your default language.",
                }),
                r.jsx("div", {
                  className: "flex flex-wrap justify-center gap-3",
                  children: a.RF.map((e) =>
                    r.jsx(
                      s.default,
                      {
                        href: (0, a.FT)(e, "/"),
                        className: `rounded-xl px-4 py-2 text-sm font-semibold no-underline ${e === a.ZW ? "bg-primary text-white" : "border border-border/60 text-textPrimary"}`,
                        lang: e,
                        children: (0, a._q)(e),
                      },
                      e,
                    ),
                  ),
                }),
              ],
            })
          );
        }
      },
      8487: (e, t, i) => {
        "use strict";
        i.d(t, {
          ZW: () => a,
          nO: () => n,
          RF: () => o,
          eX: () => p,
          _q: () => v,
          Ty: () => m,
          FT: () => f,
          jR: () => d,
          b1: () => h,
        });
        let r = JSON.parse(
            '{"brand":{"name":"Revert Guide","homeAriaLabel":"Revert Guide - Home"},"languageSwitcher":{"ariaLabel":"Language switcher","label":"Language","en":"EN","fr":"FR"},"nav":{"home":"Home","roadmap":"Roadmap","topics":"Topics","glossary":"Glossary","resources":"Resources","allResources":"All Resources","findMasjid":"Find a Masjid","about":"About","aboutUs":"About Us","accessibility":"Accessibility","privacy":"Privacy Policy","terms":"Terms of Use","sources":"Sources","ramadan":"Ramadan Guide","mentalHealth":"Mental Health","mainNavigation":"Main navigation","openMenu":"Open menu","closeMenu":"Close menu","mobileMenu":"Navigation menu"},"footer":{"about":"About","accessibility":"Accessibility","privacy":"Privacy Policy","terms":"Terms of Use","sources":"Sources","description":"A free, offline-first resource for new Muslims. No tracking, no ads, just guidance on your journey.","explore":"Explore","information":"Information","quickLinksAriaLabel":"Quick links","navigationAriaLabel":"Footer navigation","copyright":"Revert Guide. Made with care for new Muslims everywhere."},"common":{"beginJourney":"Begin Your Journey","nextStep":"Next Step","previousStep":"Previous Step","readMore":"Read More","searchPlaceholder":"Search...","loading":"Preparing your next step...","offline":"You are offline. Some features may be limited.","backToRoadmap":"Back to Roadmap","skipToContent":"Skip to content","breadcrumb":"Breadcrumb","search":"Search","clearSearch":"Clear search"},"resources":{"types":{"article":"Article","video":"Video","book":"Book","app":"App","community":"Community","pdf":"PDF"},"visitResource":"Visit Resource","viewResource":"View Resource"},"metadata":{"home":{"title":"Revert Guide - Your Journey Begins Here","description":"An offline-first educational guide for new Muslims with practical, compassionate next steps."},"about":{"title":"About - Revert Guide","description":"Learn about the Revert Guide project, our mission, and our approach to beginner-friendly Islamic guidance."},"accessibility":{"title":"Accessibility Statement - Revert Guide","description":"Revert Guide\'s commitment to accessibility, WCAG 2.1 AA compliance, and inclusive design."},"glossary":{"title":"Glossary - Revert Guide","description":"Search Islamic terms, transliterations, and definitions in the Revert Guide glossary."},"mentalHealth":{"title":"Taking Care of Your Mind - Revert Guide","description":"Emotional support, validation, crisis resources, and practical guidance for new Muslims."},"offline":{"title":"Offline - Revert Guide","description":"Reconnect or open a previously cached page to continue using Revert Guide offline."},"privacy":{"title":"Privacy Policy - Revert Guide","description":"Read the Revert Guide privacy policy and understand our offline-first data practices."},"ramadan":{"title":"Ramadan Guide - Revert Guide","description":"Your first Ramadan as a Muslim, including fasting basics, preparation, and practical support."},"resources":{"title":"Resources - Revert Guide","description":"Curated books, videos, apps, and communities to support your journey."},"findMasjid":{"title":"Find a Masjid - Revert Guide","description":"Search Toronto-area masjids and mosques, even when offline."},"roadmap":{"title":"Your Roadmap - Revert Guide","description":"A step-by-step timeline for your first day, first weeks, and first months as a Muslim."},"sources":{"title":"Sources & Citations - Revert Guide","description":"Browse the Quran, hadith, articles, and books cited throughout Revert Guide."},"terms":{"title":"Terms of Use - Revert Guide","description":"Understand the terms, disclaimers, and usage conditions for Revert Guide."},"topics":{"title":"Topics - Revert Guide","description":"Explore self-contained topic guides about prayer, fasting, beliefs, community, and more."},"notFound":{"title":"Page Not Found - Revert Guide","description":"Return to the roadmap or homepage to continue your journey."}}}',
          ),
          s = JSON.parse(
            '{"brand":{"homeAriaLabel":"Revert Guide - Accueil"},"languageSwitcher":{"ariaLabel":"Selecteur de langue","label":"Langue"},"nav":{"home":"Accueil","roadmap":"Feuille de route","topics":"Sujets","glossary":"Glossaire","resources":"Ressources","allResources":"Toutes les ressources","findMasjid":"Trouver une mosquee","about":"A propos","aboutUs":"A propos de nous","accessibility":"Accessibilite","privacy":"Politique de confidentialite","terms":"Conditions d\'utilisation","sources":"Sources","ramadan":"Guide du Ramadan","mentalHealth":"Sante mentale","mainNavigation":"Navigation principale","openMenu":"Ouvrir le menu","closeMenu":"Fermer le menu","mobileMenu":"Menu de navigation"},"footer":{"about":"A propos","accessibility":"Accessibilite","privacy":"Politique de confidentialite","terms":"Conditions d\'utilisation","sources":"Sources","description":"Une ressource gratuite, hors ligne et pensee pour les nouveaux musulmans. Pas de suivi, pas de publicite, seulement des conseils utiles.","explore":"Explorer","information":"Information","quickLinksAriaLabel":"Liens rapides","navigationAriaLabel":"Navigation de pied de page","copyright":"Revert Guide. Cree avec soin pour les nouveaux musulmans partout."},"common":{"beginJourney":"Commencer votre parcours","nextStep":"Etape suivante","previousStep":"Etape precedente","readMore":"Lire la suite","searchPlaceholder":"Rechercher...","loading":"Preparation de votre prochaine etape...","offline":"Vous etes hors ligne. Certaines fonctionnalites peuvent etre limitees.","backToRoadmap":"Retour a la feuille de route","skipToContent":"Aller au contenu","breadcrumb":"Fil d\'Ariane","search":"Rechercher","clearSearch":"Effacer la recherche"},"resources":{"types":{"article":"Article","video":"Video","book":"Livre","app":"Application","community":"Communaute","pdf":"PDF"},"visitResource":"Visiter la ressource","viewResource":"Voir la ressource"},"metadata":{"home":{"title":"Revert Guide - Votre parcours commence ici","description":"Un guide educatif hors ligne pour les nouveaux musulmans, avec des etapes pratiques et compatissantes."},"about":{"title":"A propos - Revert Guide","description":"Decouvrez le projet Revert Guide, notre mission et notre approche pour accompagner les nouveaux musulmans."},"accessibility":{"title":"Accessibilite - Revert Guide","description":"L\'engagement de Revert Guide envers l\'accessibilite numerique et un design inclusif."},"glossary":{"title":"Glossaire - Revert Guide","description":"Recherchez des termes islamiques, transliterations et definitions dans le glossaire Revert Guide."},"mentalHealth":{"title":"Prendre soin de votre esprit - Revert Guide","description":"Soutien emotionnel, validation et ressources pratiques pour les nouveaux musulmans."},"offline":{"title":"Hors ligne - Revert Guide","description":"Reconnectez-vous ou ouvrez une page deja en cache pour continuer a utiliser Revert Guide."},"privacy":{"title":"Politique de confidentialite - Revert Guide","description":"Consultez la politique de confidentialite de Revert Guide et nos pratiques hors ligne."},"ramadan":{"title":"Guide du Ramadan - Revert Guide","description":"Votre premier Ramadan en tant que musulman, avec des bases, des conseils de preparation et un accompagnement pratique."},"resources":{"title":"Ressources - Revert Guide","description":"Livres, videos, applications et communautes selectionnes pour soutenir votre parcours."},"findMasjid":{"title":"Trouver une mosquee - Revert Guide","description":"Recherchez des mosquees dans la region de Toronto, meme hors ligne."},"roadmap":{"title":"Votre feuille de route - Revert Guide","description":"Un parcours etape par etape pour votre premier jour, vos premieres semaines et vos premiers mois en tant que musulman."},"sources":{"title":"Sources et citations - Revert Guide","description":"Consultez les references du Coran, des hadiths, des articles et des livres cites dans Revert Guide."},"terms":{"title":"Conditions d\'utilisation - Revert Guide","description":"Comprenez les conditions, avertissements et limites d\'utilisation de Revert Guide."},"topics":{"title":"Sujets - Revert Guide","description":"Explorez des guides dedies a la priere, au jeune, aux croyances, a la communaute, et plus encore."},"notFound":{"title":"Page introuvable - Revert Guide","description":"Revenez a la feuille de route ou a l\'accueil pour continuer votre parcours."}}}',
          ),
          o = ["en", "fr", "es", "hi", "ur", "zh", "tl", "pa"],
          a = "en",
          n = "revert-guide-locale",
          u = {
            en: r,
            fr: g(r, s),
            es: g(r, {}),
            hi: g(r, {}),
            ur: g(r, {}),
            zh: g(r, {}),
            tl: g(r, {}),
            pa: g(r, {}),
          },
          l = {
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
          return o.includes(e);
        }
        function d(e) {
          return e && c(e) ? e : a;
        }
        function p(e) {
          return function (t) {
            let i = t.split(".").reduce((e, t) => {
              if (e && "string" != typeof e) return e[t];
            }, e);
            if (void 0 === i) throw Error(`Missing translation key: ${t}`);
            return i;
          };
        }
        function m(e) {
          return p(u[e]);
        }
        function v(e) {
          return l[e];
        }
        function f(e, t) {
          return !t ||
            t.startsWith("#") ||
            t.startsWith("http://") ||
            t.startsWith("https://") ||
            t.startsWith("mailto:") ||
            t.startsWith("tel:")
            ? t
            : "/" === t
              ? `/${e}`
              : t.startsWith(`/${e}`)
                ? t
                : `/${e}${t.startsWith("/") ? t : `/${t}`}`;
        }
        function h(e, t) {
          let i = e.split("/");
          return c(i[1])
            ? ((i[1] = t), i.join("/") || `/${t}`)
            : f(t, e || "/");
        }
        function g(e, t) {
          if ("string" == typeof e || "string" == typeof t) return t ?? e;
          let i = { ...e };
          for (let [e, r] of Object.entries(t)) {
            let t = i[e];
            if (void 0 === t) {
              i[e] = r;
              continue;
            }
            i[e] = g(t, r);
          }
          return i;
        }
      },
      1506: (e, t, i) => {
        "use strict";
        (i.r(t),
          i.d(t, { default: () => p, metadata: () => c, viewport: () => d }));
        var r = i(9510),
          s = i(3574),
          o = i.n(s),
          a = i(4315),
          n = i.n(a),
          u = i(7041),
          l = i.n(u);
        i(7272);
        let c = {
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
          d = { themeColor: "#4A7C59" };
        function p({ children: e }) {
          return r.jsx("html", {
            lang: "en",
            className: `${o().variable} ${n().variable} ${l().variable}`,
            children: r.jsx("body", {
              className: "flex min-h-screen flex-col font-sans",
              children: e,
            }),
          });
        }
      },
      908: (e, t, i) => {
        "use strict";
        (i.r(t), i.d(t, { default: () => r }));
        let r = (0, i(8570).createProxy)(
          String.raw`C:\Users\User\OneDrive\Desktop\Software works\revert-guide\app\page.tsx#default`,
        );
      },
      7272: () => {},
    }));
  var t = require("../webpack-runtime.js");
  t.C(e);
  var i = (e) => t((t.s = e)),
    r = t.X(0, [963, 496], () => i(8822));
  module.exports = r;
})();
