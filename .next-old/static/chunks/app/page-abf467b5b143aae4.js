(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    7645: function (e, i, t) {
      Promise.resolve().then(t.bind(t, 7340));
    },
    7340: function (e, i, t) {
      "use strict";
      (t.r(i),
        t.d(i, {
          default: function () {
            return u;
          },
        }));
      var r = t(7437),
        o = t(7648),
        n = t(2265),
        s = t(9376),
        a = t(6543);
      function u() {
        let e = (0, s.useRouter)();
        return (
          (0, n.useEffect)(() => {
            let i = (0, a.jR)(window.localStorage.getItem(a.nO));
            e.replace((0, a.FT)(i, "/"));
          }, [e]),
          (0, r.jsxs)("main", {
            className:
              "mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-5 text-center",
            children: [
              (0, r.jsx)("p", {
                className: "mb-4 text-sm text-textSecondary",
                children: "Redirecting to your default language.",
              }),
              (0, r.jsx)("div", {
                className: "flex flex-wrap justify-center gap-3",
                children: a.RF.map((e) =>
                  (0, r.jsx)(
                    o.default,
                    {
                      href: (0, a.FT)(e, "/"),
                      className:
                        "rounded-xl px-4 py-2 text-sm font-semibold no-underline ".concat(
                          e === a.ZW
                            ? "bg-primary text-white"
                            : "border border-border/60 text-textPrimary",
                        ),
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
    6543: function (e, i, t) {
      "use strict";
      t.d(i, {
        ZW: function () {
          return s;
        },
        nO: function () {
          return a;
        },
        RF: function () {
          return n;
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
          return v;
        },
        jR: function () {
          return d;
        },
        b1: function () {
          return h;
        },
      });
      var r = JSON.parse(
          '{"brand":{"name":"Revert Guide","homeAriaLabel":"Revert Guide - Home"},"languageSwitcher":{"ariaLabel":"Language switcher","label":"Language","en":"EN","fr":"FR"},"nav":{"home":"Home","roadmap":"Roadmap","topics":"Topics","glossary":"Glossary","resources":"Resources","allResources":"All Resources","findMasjid":"Find a Masjid","about":"About","aboutUs":"About Us","accessibility":"Accessibility","privacy":"Privacy Policy","terms":"Terms of Use","sources":"Sources","ramadan":"Ramadan Guide","mentalHealth":"Mental Health","mainNavigation":"Main navigation","openMenu":"Open menu","closeMenu":"Close menu","mobileMenu":"Navigation menu"},"footer":{"about":"About","accessibility":"Accessibility","privacy":"Privacy Policy","terms":"Terms of Use","sources":"Sources","description":"A free, offline-first resource for new Muslims. No tracking, no ads, just guidance on your journey.","explore":"Explore","information":"Information","quickLinksAriaLabel":"Quick links","navigationAriaLabel":"Footer navigation","copyright":"Revert Guide. Made with care for new Muslims everywhere."},"common":{"beginJourney":"Begin Your Journey","nextStep":"Next Step","previousStep":"Previous Step","readMore":"Read More","searchPlaceholder":"Search...","loading":"Preparing your next step...","offline":"You are offline. Some features may be limited.","backToRoadmap":"Back to Roadmap","skipToContent":"Skip to content","breadcrumb":"Breadcrumb","search":"Search","clearSearch":"Clear search"},"resources":{"types":{"article":"Article","video":"Video","book":"Book","app":"App","community":"Community","pdf":"PDF"},"visitResource":"Visit Resource","viewResource":"View Resource"},"metadata":{"home":{"title":"Revert Guide - Your Journey Begins Here","description":"An offline-first educational guide for new Muslims with practical, compassionate next steps."},"about":{"title":"About - Revert Guide","description":"Learn about the Revert Guide project, our mission, and our approach to beginner-friendly Islamic guidance."},"accessibility":{"title":"Accessibility Statement - Revert Guide","description":"Revert Guide\'s commitment to accessibility, WCAG 2.1 AA compliance, and inclusive design."},"glossary":{"title":"Glossary - Revert Guide","description":"Search Islamic terms, transliterations, and definitions in the Revert Guide glossary."},"mentalHealth":{"title":"Taking Care of Your Mind - Revert Guide","description":"Emotional support, validation, crisis resources, and practical guidance for new Muslims."},"offline":{"title":"Offline - Revert Guide","description":"Reconnect or open a previously cached page to continue using Revert Guide offline."},"privacy":{"title":"Privacy Policy - Revert Guide","description":"Read the Revert Guide privacy policy and understand our offline-first data practices."},"ramadan":{"title":"Ramadan Guide - Revert Guide","description":"Your first Ramadan as a Muslim, including fasting basics, preparation, and practical support."},"resources":{"title":"Resources - Revert Guide","description":"Curated books, videos, apps, and communities to support your journey."},"findMasjid":{"title":"Find a Masjid - Revert Guide","description":"Search Toronto-area masjids and mosques, even when offline."},"roadmap":{"title":"Your Roadmap - Revert Guide","description":"A step-by-step timeline for your first day, first weeks, and first months as a Muslim."},"sources":{"title":"Sources & Citations - Revert Guide","description":"Browse the Quran, hadith, articles, and books cited throughout Revert Guide."},"terms":{"title":"Terms of Use - Revert Guide","description":"Understand the terms, disclaimers, and usage conditions for Revert Guide."},"topics":{"title":"Topics - Revert Guide","description":"Explore self-contained topic guides about prayer, fasting, beliefs, community, and more."},"notFound":{"title":"Page Not Found - Revert Guide","description":"Return to the roadmap or homepage to continue your journey."}}}',
        ),
        o = JSON.parse(
          '{"brand":{"homeAriaLabel":"Revert Guide - Accueil"},"languageSwitcher":{"ariaLabel":"Selecteur de langue","label":"Langue"},"nav":{"home":"Accueil","roadmap":"Feuille de route","topics":"Sujets","glossary":"Glossaire","resources":"Ressources","allResources":"Toutes les ressources","findMasjid":"Trouver une mosquee","about":"A propos","aboutUs":"A propos de nous","accessibility":"Accessibilite","privacy":"Politique de confidentialite","terms":"Conditions d\'utilisation","sources":"Sources","ramadan":"Guide du Ramadan","mentalHealth":"Sante mentale","mainNavigation":"Navigation principale","openMenu":"Ouvrir le menu","closeMenu":"Fermer le menu","mobileMenu":"Menu de navigation"},"footer":{"about":"A propos","accessibility":"Accessibilite","privacy":"Politique de confidentialite","terms":"Conditions d\'utilisation","sources":"Sources","description":"Une ressource gratuite, hors ligne et pensee pour les nouveaux musulmans. Pas de suivi, pas de publicite, seulement des conseils utiles.","explore":"Explorer","information":"Information","quickLinksAriaLabel":"Liens rapides","navigationAriaLabel":"Navigation de pied de page","copyright":"Revert Guide. Cree avec soin pour les nouveaux musulmans partout."},"common":{"beginJourney":"Commencer votre parcours","nextStep":"Etape suivante","previousStep":"Etape precedente","readMore":"Lire la suite","searchPlaceholder":"Rechercher...","loading":"Preparation de votre prochaine etape...","offline":"Vous etes hors ligne. Certaines fonctionnalites peuvent etre limitees.","backToRoadmap":"Retour a la feuille de route","skipToContent":"Aller au contenu","breadcrumb":"Fil d\'Ariane","search":"Rechercher","clearSearch":"Effacer la recherche"},"resources":{"types":{"article":"Article","video":"Video","book":"Livre","app":"Application","community":"Communaute","pdf":"PDF"},"visitResource":"Visiter la ressource","viewResource":"Voir la ressource"},"metadata":{"home":{"title":"Revert Guide - Votre parcours commence ici","description":"Un guide educatif hors ligne pour les nouveaux musulmans, avec des etapes pratiques et compatissantes."},"about":{"title":"A propos - Revert Guide","description":"Decouvrez le projet Revert Guide, notre mission et notre approche pour accompagner les nouveaux musulmans."},"accessibility":{"title":"Accessibilite - Revert Guide","description":"L\'engagement de Revert Guide envers l\'accessibilite numerique et un design inclusif."},"glossary":{"title":"Glossaire - Revert Guide","description":"Recherchez des termes islamiques, transliterations et definitions dans le glossaire Revert Guide."},"mentalHealth":{"title":"Prendre soin de votre esprit - Revert Guide","description":"Soutien emotionnel, validation et ressources pratiques pour les nouveaux musulmans."},"offline":{"title":"Hors ligne - Revert Guide","description":"Reconnectez-vous ou ouvrez une page deja en cache pour continuer a utiliser Revert Guide."},"privacy":{"title":"Politique de confidentialite - Revert Guide","description":"Consultez la politique de confidentialite de Revert Guide et nos pratiques hors ligne."},"ramadan":{"title":"Guide du Ramadan - Revert Guide","description":"Votre premier Ramadan en tant que musulman, avec des bases, des conseils de preparation et un accompagnement pratique."},"resources":{"title":"Ressources - Revert Guide","description":"Livres, videos, applications et communautes selectionnes pour soutenir votre parcours."},"findMasjid":{"title":"Trouver une mosquee - Revert Guide","description":"Recherchez des mosquees dans la region de Toronto, meme hors ligne."},"roadmap":{"title":"Votre feuille de route - Revert Guide","description":"Un parcours etape par etape pour votre premier jour, vos premieres semaines et vos premiers mois en tant que musulman."},"sources":{"title":"Sources et citations - Revert Guide","description":"Consultez les references du Coran, des hadiths, des articles et des livres cites dans Revert Guide."},"terms":{"title":"Conditions d\'utilisation - Revert Guide","description":"Comprenez les conditions, avertissements et limites d\'utilisation de Revert Guide."},"topics":{"title":"Sujets - Revert Guide","description":"Explorez des guides dedies a la priere, au jeune, aux croyances, a la communaute, et plus encore."},"notFound":{"title":"Page introuvable - Revert Guide","description":"Revenez a la feuille de route ou a l\'accueil pour continuer votre parcours."}}}',
        );
      let n = ["en", "fr", "es", "hi", "ur", "zh", "tl", "pa"],
        s = "en",
        a = "revert-guide-locale",
        u = {
          en: r,
          fr: R(r, o),
          es: R(r, {}),
          hi: R(r, {}),
          ur: R(r, {}),
          zh: R(r, {}),
          tl: R(r, {}),
          pa: R(r, {}),
        },
        c = {
          en: "English",
          fr: "Fran\xe7ais",
          es: "Espa\xf1ol",
          hi: "हिन्दी",
          ur: "اردو",
          zh: "中文",
          tl: "Tagalog",
          pa: "ਪੰਜਾਬੀ",
        };
      function l(e) {
        return n.includes(e);
      }
      function d(e) {
        return e && l(e) ? e : s;
      }
      function p(e) {
        return function (i) {
          let t = i.split(".").reduce((e, i) => {
            if (e && "string" != typeof e) return e[i];
          }, e);
          if (void 0 === t) throw Error("Missing translation key: ".concat(i));
          return t;
        };
      }
      function m(e) {
        return p(u[e]);
      }
      function f(e) {
        return c[e];
      }
      function v(e, i) {
        return !i ||
          i.startsWith("#") ||
          i.startsWith("http://") ||
          i.startsWith("https://") ||
          i.startsWith("mailto:") ||
          i.startsWith("tel:")
          ? i
          : "/" === i
            ? "/".concat(e)
            : i.startsWith("/".concat(e))
              ? i
              : "/".concat(e).concat(i.startsWith("/") ? i : "/".concat(i));
      }
      function h(e, i) {
        let t = e.split("/");
        return l(t[1])
          ? ((t[1] = i), t.join("/") || "/".concat(i))
          : v(i, e || "/");
      }
      function R(e, i) {
        if ("string" == typeof e || "string" == typeof i)
          return null != i ? i : e;
        let t = { ...e };
        for (let [e, r] of Object.entries(i)) {
          let i = t[e];
          if (void 0 === i) {
            t[e] = r;
            continue;
          }
          t[e] = R(i, r);
        }
        return t;
      }
    },
    7648: function (e, i, t) {
      "use strict";
      t.d(i, {
        default: function () {
          return o.a;
        },
      });
      var r = t(2972),
        o = t.n(r);
    },
    9376: function (e, i, t) {
      "use strict";
      var r = t(5475);
      (t.o(r, "usePathname") &&
        t.d(i, {
          usePathname: function () {
            return r.usePathname;
          },
        }),
        t.o(r, "useRouter") &&
          t.d(i, {
            useRouter: function () {
              return r.useRouter;
            },
          }));
    },
  },
  function (e) {
    (e.O(0, [972, 971, 734, 744], function () {
      return e((e.s = 7645));
    }),
      (_N_E = e.O()));
  },
]);
