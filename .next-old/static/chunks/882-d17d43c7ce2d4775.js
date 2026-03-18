"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [882],
  {
    9608: function (e, t, i) {
      i.d(t, {
        AnimateIn: function () {
          return o;
        },
      });
      var r = i(7437),
        n = i(2265);
      function o(e) {
        let {
            children: t,
            className: i = "",
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
            let t = new IntersectionObserver(
              (i) => {
                let [r] = i;
                r.isIntersecting && (l(!0), t.unobserve(e));
              },
              { threshold: a, rootMargin: "0px 0px -40px 0px" },
            );
            return (t.observe(e), () => t.disconnect());
          }, [a]),
          (0, r.jsx)("div", {
            ref: u,
            className: ""
              .concat(i, " ")
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
            children: t,
          })
        );
      }
    },
    4092: function (e, t, i) {
      i.d(t, {
        Breadcrumb: function () {
          return s;
        },
      });
      var r = i(7437),
        n = i(7648),
        o = i(9323);
      function s(e) {
        let { items: t } = e,
          i = (0, o.T)();
        return 0 === t.length
          ? null
          : (0, r.jsx)("nav", {
              "aria-label": i("common.breadcrumb"),
              className: "mb-8",
              children: (0, r.jsx)("ol", {
                className:
                  "mb-0 flex flex-wrap items-center gap-1.5 pl-0 text-sm",
                children: t.map((e, i) => {
                  var o;
                  let s = i === t.length - 1;
                  return (0, r.jsxs)(
                    "li",
                    {
                      className: "mb-0 inline-flex items-center gap-1.5",
                      children: [
                        i > 0 &&
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
    9323: function (e, t, i) {
      i.d(t, {
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
      var r = i(7437),
        n = i(2265),
        o = i(6543);
      let s = (0, n.createContext)(null);
      function a(e) {
        let { children: t, locale: i, messages: o } = e,
          a = (0, n.useMemo)(() => ({ locale: i, messages: o }), [i, o]);
        return (0, r.jsx)(s.Provider, { value: a, children: t });
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
    5435: function (e, t, i) {
      i.d(t, {
        E: function () {
          return s;
        },
      });
      var r = i(7437),
        n = i(2265),
        o = i(9323);
      function s(e) {
        let {
            value: t,
            onChange: i,
            placeholder: s,
            label: a,
            hideLabel: u = !1,
            className: c = "",
          } = e,
          l = (0, o.T)(),
          d = (0, n.useRef)(null),
          p = (0, n.useId)(),
          m = "".concat(p, "-search");
        return (0, r.jsxs)("div", {
          className: c,
          children: [
            (0, r.jsx)("label", {
              htmlFor: m,
              className: u
                ? "sr-only"
                : "mb-2 block text-sm font-medium text-textPrimary",
              children: null != a ? a : l("common.search"),
            }),
            (0, r.jsxs)("div", {
              className: "relative",
              children: [
                (0, r.jsx)("svg", {
                  className:
                    "pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-textMuted",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  strokeWidth: 1.5,
                  stroke: "currentColor",
                  "aria-hidden": "true",
                  children: (0, r.jsx)("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
                  }),
                }),
                (0, r.jsx)("input", {
                  ref: d,
                  id: m,
                  type: "search",
                  value: t,
                  onChange: (e) => i(e.target.value),
                  placeholder: null != s ? s : l("common.searchPlaceholder"),
                  className:
                    "w-full rounded-xl border border-border/60 bg-white py-3 pl-12 pr-10 text-base text-textPrimary shadow-inner-glow placeholder:text-textMuted/60 transition-all duration-200 focus:border-primaryGreen focus:shadow-soft focus:outline-2 focus:outline-offset-0 focus:outline-borderStrong",
                }),
                t.length > 0 &&
                  (0, r.jsx)("button", {
                    type: "button",
                    onClick: function () {
                      var e;
                      (i(""),
                        null === (e = d.current) || void 0 === e || e.focus());
                    },
                    className:
                      "absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-lg text-textMuted transition-all duration-200 hover:bg-surfaceElevated hover:text-textSecondary focus-visible:outline-2 focus-visible:outline-borderStrong",
                    "aria-label": l("common.clearSearch"),
                    children: (0, r.jsx)("svg", {
                      className: "h-4 w-4",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      strokeWidth: 2,
                      stroke: "currentColor",
                      "aria-hidden": "true",
                      children: (0, r.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M6 18 18 6M6 6l12 12",
                      }),
                    }),
                  }),
              ],
            }),
          ],
        });
      }
    },
    6543: function (e, t, i) {
      i.d(t, {
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
          fr: b(r, n),
          es: b(r, {}),
          hi: b(r, {}),
          ur: b(r, {}),
          zh: b(r, {}),
          tl: b(r, {}),
          pa: b(r, {}),
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
        return function (t) {
          let i = t.split(".").reduce((e, t) => {
            if (e && "string" != typeof e) return e[t];
          }, e);
          if (void 0 === i) throw Error("Missing translation key: ".concat(t));
          return i;
        };
      }
      function m(e) {
        return p(u[e]);
      }
      function f(e) {
        return c[e];
      }
      function v(e, t) {
        return !t ||
          t.startsWith("#") ||
          t.startsWith("http://") ||
          t.startsWith("https://") ||
          t.startsWith("mailto:") ||
          t.startsWith("tel:")
          ? t
          : "/" === t
            ? "/".concat(e)
            : t.startsWith("/".concat(e))
              ? t
              : "/".concat(e).concat(t.startsWith("/") ? t : "/".concat(t));
      }
      function h(e, t) {
        let i = e.split("/");
        return l(i[1])
          ? ((i[1] = t), i.join("/") || "/".concat(t))
          : v(t, e || "/");
      }
      function b(e, t) {
        if ("string" == typeof e || "string" == typeof t)
          return null != t ? t : e;
        let i = { ...e };
        for (let [e, r] of Object.entries(t)) {
          let t = i[e];
          if (void 0 === t) {
            i[e] = r;
            continue;
          }
          i[e] = b(t, r);
        }
        return i;
      }
    },
    7648: function (e, t, i) {
      i.d(t, {
        default: function () {
          return n.a;
        },
      });
      var r = i(2972),
        n = i.n(r);
    },
  },
]);
