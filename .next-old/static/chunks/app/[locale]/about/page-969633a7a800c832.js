(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [853],
  {
    7803: function (e, i, t) {
      (Promise.resolve().then(t.bind(t, 9608)),
        Promise.resolve().then(t.bind(t, 4092)),
        Promise.resolve().then(t.t.bind(t, 5878, 23)));
    },
    9608: function (e, i, t) {
      "use strict";
      t.d(i, {
        AnimateIn: function () {
          return o;
        },
      });
      var r = t(7437),
        n = t(2265);
      function o(e) {
        let {
            children: i,
            className: t = "",
            delay: o = 0,
            animation: s = "fade-up",
            threshold: a = 0.1,
          } = e,
          u = (0, n.useRef)(null),
          [c, l] = (0, n.useState)(!1);
        return (
          (0, n.useEffect)(() => {
            let e = u.current;
            if (!e) return;
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
              l(!0);
              return;
            }
            let i = new IntersectionObserver(
              (t) => {
                let [r] = t;
                r.isIntersecting && (l(!0), i.unobserve(e));
              },
              { threshold: a, rootMargin: "0px 0px -40px 0px" },
            );
            return (i.observe(e), () => i.disconnect());
          }, [a]),
          (0, r.jsx)("div", {
            ref: u,
            className: ""
              .concat(t, " ")
              .concat(
                c
                  ? {
                      "fade-up": "animate-fade-up",
                      "fade-in": "animate-fade-in",
                      "scale-in": "animate-scale-in",
                      "slide-in-right": "animate-slide-in-right",
                    }[s]
                  : "opacity-0",
              ),
            style: c && o > 0 ? { animationDelay: "".concat(o, "s") } : void 0,
            children: i,
          })
        );
      }
    },
    4092: function (e, i, t) {
      "use strict";
      t.d(i, {
        Breadcrumb: function () {
          return s;
        },
      });
      var r = t(7437),
        n = t(7648),
        o = t(9323);
      function s(e) {
        let { items: i } = e,
          t = (0, o.T)();
        return 0 === i.length
          ? null
          : (0, r.jsx)("nav", {
              "aria-label": t("common.breadcrumb"),
              className: "mb-8",
              children: (0, r.jsx)("ol", {
                className:
                  "mb-0 flex flex-wrap items-center gap-1.5 pl-0 text-sm",
                children: i.map((e, t) => {
                  var o;
                  let s = t === i.length - 1;
                  return (0, r.jsxs)(
                    "li",
                    {
                      className: "mb-0 inline-flex items-center gap-1.5",
                      children: [
                        t > 0 &&
                          (0, r.jsx)("svg", {
                            className: "h-3 w-3 text-border",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: 2.5,
                            stroke: "currentColor",
                            "aria-hidden": "true",
                            children: (0, r.jsx)("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              d: "m8.25 4.5 7.5 7.5-7.5 7.5",
                            }),
                          }),
                        s || !e.href
                          ? (0, r.jsx)("span", {
                              className: "font-medium text-textMuted",
                              "aria-current": s ? "page" : void 0,
                              children: e.label,
                            })
                          : (0, r.jsx)(n.default, {
                              href: e.href,
                              className:
                                "font-medium text-textSecondary no-underline transition-colors duration-200 hover:text-primary",
                              children: e.label,
                            }),
                      ],
                    },
                    null !== (o = e.href) && void 0 !== o ? o : e.label,
                  );
                }),
              }),
            });
      }
    },
    9323: function (e, i, t) {
      "use strict";
      t.d(i, {
        LocaleProvider: function () {
          return a;
        },
        T: function () {
          return c;
        },
        b: function () {
          return u;
        },
      });
      var r = t(7437),
        n = t(2265),
        o = t(6543);
      let s = (0, n.createContext)(null);
      function a(e) {
        let { children: i, locale: t, messages: o } = e,
          a = (0, n.useMemo)(() => ({ locale: t, messages: o }), [t, o]);
        return (0, r.jsx)(s.Provider, { value: a, children: i });
      }
      function u() {
        let e = (0, n.useContext)(s);
        if (!e) throw Error("useLocale must be used within LocaleProvider");
        return e.locale;
      }
      function c() {
        let e = (0, n.useContext)(s);
        if (!e)
          throw Error("useTranslations must be used within LocaleProvider");
        return (0, n.useMemo)(() => (0, o.eX)(e.messages), [e.messages]);
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
          return o;
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
        n = JSON.parse(
          '{"brand":{"homeAriaLabel":"Revert Guide - Accueil"},"languageSwitcher":{"ariaLabel":"Selecteur de langue","label":"Langue"},"nav":{"home":"Accueil","roadmap":"Feuille de route","topics":"Sujets","glossary":"Glossaire","resources":"Ressources","allResources":"Toutes les ressources","findMasjid":"Trouver une mosquee","about":"A propos","aboutUs":"A propos de nous","accessibility":"Accessibilite","privacy":"Politique de confidentialite","terms":"Conditions d\'utilisation","sources":"Sources","ramadan":"Guide du Ramadan","mentalHealth":"Sante mentale","mainNavigation":"Navigation principale","openMenu":"Ouvrir le menu","closeMenu":"Fermer le menu","mobileMenu":"Menu de navigation"},"footer":{"about":"A propos","accessibility":"Accessibilite","privacy":"Politique de confidentialite","terms":"Conditions d\'utilisation","sources":"Sources","description":"Une ressource gratuite, hors ligne et pensee pour les nouveaux musulmans. Pas de suivi, pas de publicite, seulement des conseils utiles.","explore":"Explorer","information":"Information","quickLinksAriaLabel":"Liens rapides","navigationAriaLabel":"Navigation de pied de page","copyright":"Revert Guide. Cree avec soin pour les nouveaux musulmans partout."},"common":{"beginJourney":"Commencer votre parcours","nextStep":"Etape suivante","previousStep":"Etape precedente","readMore":"Lire la suite","searchPlaceholder":"Rechercher...","loading":"Preparation de votre prochaine etape...","offline":"Vous etes hors ligne. Certaines fonctionnalites peuvent etre limitees.","backToRoadmap":"Retour a la feuille de route","skipToContent":"Aller au contenu","breadcrumb":"Fil d\'Ariane","search":"Rechercher","clearSearch":"Effacer la recherche"},"resources":{"types":{"article":"Article","video":"Video","book":"Livre","app":"Application","community":"Communaute","pdf":"PDF"},"visitResource":"Visiter la ressource","viewResource":"Voir la ressource"},"metadata":{"home":{"title":"Revert Guide - Votre parcours commence ici","description":"Un guide educatif hors ligne pour les nouveaux musulmans, avec des etapes pratiques et compatissantes."},"about":{"title":"A propos - Revert Guide","description":"Decouvrez le projet Revert Guide, notre mission et notre approche pour accompagner les nouveaux musulmans."},"accessibility":{"title":"Accessibilite - Revert Guide","description":"L\'engagement de Revert Guide envers l\'accessibilite numerique et un design inclusif."},"glossary":{"title":"Glossaire - Revert Guide","description":"Recherchez des termes islamiques, transliterations et definitions dans le glossaire Revert Guide."},"mentalHealth":{"title":"Prendre soin de votre esprit - Revert Guide","description":"Soutien emotionnel, validation et ressources pratiques pour les nouveaux musulmans."},"offline":{"title":"Hors ligne - Revert Guide","description":"Reconnectez-vous ou ouvrez une page deja en cache pour continuer a utiliser Revert Guide."},"privacy":{"title":"Politique de confidentialite - Revert Guide","description":"Consultez la politique de confidentialite de Revert Guide et nos pratiques hors ligne."},"ramadan":{"title":"Guide du Ramadan - Revert Guide","description":"Votre premier Ramadan en tant que musulman, avec des bases, des conseils de preparation et un accompagnement pratique."},"resources":{"title":"Ressources - Revert Guide","description":"Livres, videos, applications et communautes selectionnes pour soutenir votre parcours."},"findMasjid":{"title":"Trouver une mosquee - Revert Guide","description":"Recherchez des mosquees dans la region de Toronto, meme hors ligne."},"roadmap":{"title":"Votre feuille de route - Revert Guide","description":"Un parcours etape par etape pour votre premier jour, vos premieres semaines et vos premiers mois en tant que musulman."},"sources":{"title":"Sources et citations - Revert Guide","description":"Consultez les references du Coran, des hadiths, des articles et des livres cites dans Revert Guide."},"terms":{"title":"Conditions d\'utilisation - Revert Guide","description":"Comprenez les conditions, avertissements et limites d\'utilisation de Revert Guide."},"topics":{"title":"Sujets - Revert Guide","description":"Explorez des guides dedies a la priere, au jeune, aux croyances, a la communaute, et plus encore."},"notFound":{"title":"Page introuvable - Revert Guide","description":"Revenez a la feuille de route ou a l\'accueil pour continuer votre parcours."}}}',
        );
      let o = ["en", "fr", "es", "hi", "ur", "zh", "tl", "pa"],
        s = "en",
        a = "revert-guide-locale",
        u = {
          en: r,
          fr: g(r, n),
          es: g(r, {}),
          hi: g(r, {}),
          ur: g(r, {}),
          zh: g(r, {}),
          tl: g(r, {}),
          pa: g(r, {}),
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
        return o.includes(e);
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
      function g(e, i) {
        if ("string" == typeof e || "string" == typeof i)
          return null != i ? i : e;
        let t = { ...e };
        for (let [e, r] of Object.entries(i)) {
          let i = t[e];
          if (void 0 === i) {
            t[e] = r;
            continue;
          }
          t[e] = g(i, r);
        }
        return t;
      }
    },
    7648: function (e, i, t) {
      "use strict";
      t.d(i, {
        default: function () {
          return n.a;
        },
      });
      var r = t(2972),
        n = t.n(r);
    },
  },
  function (e) {
    (e.O(0, [972, 878, 971, 734, 744], function () {
      return e((e.s = 7803));
    }),
      (_N_E = e.O()));
  },
]);
