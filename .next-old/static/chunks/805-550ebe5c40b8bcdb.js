"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [805],
  {
    4392: function (e, i, t) {
      t.d(i, {
        z: function () {
          return a;
        },
      });
      var r = t(7437),
        o = t(7648);
      let n = {
        primary:
          "bg-primary text-white shadow-[0_2px_8px_rgba(0,0,0,0.12)] hover:bg-[#5B9168] hover:text-white hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-borderStrong",
        secondary:
          "bg-accent text-white shadow-[0_2px_8px_rgba(0,0,0,0.12)] hover:bg-[#7A8B4A] hover:text-white hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-borderStrong",
        outline:
          "border-2 border-primary/30 text-primary bg-transparent hover:bg-primary/10 hover:border-primary/60 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-borderStrong",
      };
      function a(e) {
        let {
            variant: i = "primary",
            children: t,
            className: a = "",
            ...s
          } = e,
          u = ""
            .concat(
              "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-base font-semibold no-underline hover:no-underline transition-all duration-300 ease-out-expo focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              " ",
            )
            .concat(n[i], " ")
            .concat(a);
        if ("href" in s && s.href) {
          let { href: e, external: i, ...n } = s;
          return i
            ? (0, r.jsxs)("a", {
                href: e,
                className: u,
                target: "_blank",
                rel: "noopener noreferrer",
                ...n,
                children: [
                  t,
                  (0, r.jsx)("svg", {
                    className: "h-4 w-4",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 2,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    children: (0, r.jsx)("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25",
                    }),
                  }),
                ],
              })
            : (0, r.jsx)(o.default, {
                href: e,
                className: u,
                ...n,
                children: t,
              });
        }
        return (0, r.jsx)("button", { className: u, ...s, children: t });
      }
    },
    9140: function (e, i, t) {
      t.d(i, {
        J: function () {
          return a;
        },
      });
      var r = t(7437);
      let o = { sm: "h-4 w-4", md: "h-5 w-5", lg: "h-6 w-6" },
        n = {
          home: (0, r.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
          }),
          book: (0, r.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25",
          }),
          search: (0, r.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
          }),
          "map-pin": (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
              }),
              (0, r.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z",
              }),
            ],
          }),
          menu: (0, r.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",
          }),
          x: (0, r.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M6 18 18 6M6 6l12 12",
          }),
          "external-link": (0, r.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25",
          }),
          "chevron-right": (0, r.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m8.25 4.5 7.5 7.5-7.5 7.5",
          }),
          "chevron-down": (0, r.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m19.5 8.25-7.5 7.5-7.5-7.5",
          }),
          clock: (0, r.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
          }),
          check: (0, r.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m4.5 12.75 6 6 9-13.5",
          }),
          info: (0, r.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z",
          }),
          "alert-triangle": (0, r.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z",
          }),
          "alert-circle": (0, r.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z",
          }),
          lightbulb: (0, r.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
          }),
          globe: (0, r.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418",
          }),
          play: (0, r.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z",
          }),
          "file-text": (0, r.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z",
          }),
          users: (0, r.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z",
          }),
          download: (0, r.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3",
          }),
          star: (0, r.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z",
          }),
        };
      function a(e) {
        let { name: i, size: t = "md", className: a = "", label: s } = e,
          u = !s;
        return (0, r.jsx)("svg", {
          className: "".concat(o[t], " ").concat(a),
          fill: "none",
          viewBox: "0 0 24 24",
          strokeWidth: 1.5,
          stroke: "currentColor",
          "aria-hidden": u ? "true" : void 0,
          "aria-label": s,
          role: s ? "img" : void 0,
          focusable: "false",
          children: n[i],
        });
      }
    },
    6543: function (e, i, t) {
      t.d(i, {
        ZW: function () {
          return a;
        },
        nO: function () {
          return s;
        },
        RF: function () {
          return n;
        },
        eX: function () {
          return p;
        },
        _q: function () {
          return v;
        },
        Ty: function () {
          return m;
        },
        FT: function () {
          return h;
        },
        jR: function () {
          return l;
        },
        b1: function () {
          return f;
        },
      });
      var r = JSON.parse(
          '{"brand":{"name":"Revert Guide","homeAriaLabel":"Revert Guide - Home"},"languageSwitcher":{"ariaLabel":"Language switcher","label":"Language","en":"EN","fr":"FR"},"nav":{"home":"Home","roadmap":"Roadmap","topics":"Topics","glossary":"Glossary","resources":"Resources","allResources":"All Resources","findMasjid":"Find a Masjid","about":"About","aboutUs":"About Us","accessibility":"Accessibility","privacy":"Privacy Policy","terms":"Terms of Use","sources":"Sources","ramadan":"Ramadan Guide","mentalHealth":"Mental Health","mainNavigation":"Main navigation","openMenu":"Open menu","closeMenu":"Close menu","mobileMenu":"Navigation menu"},"footer":{"about":"About","accessibility":"Accessibility","privacy":"Privacy Policy","terms":"Terms of Use","sources":"Sources","description":"A free, offline-first resource for new Muslims. No tracking, no ads, just guidance on your journey.","explore":"Explore","information":"Information","quickLinksAriaLabel":"Quick links","navigationAriaLabel":"Footer navigation","copyright":"Revert Guide. Made with care for new Muslims everywhere."},"common":{"beginJourney":"Begin Your Journey","nextStep":"Next Step","previousStep":"Previous Step","readMore":"Read More","searchPlaceholder":"Search...","loading":"Preparing your next step...","offline":"You are offline. Some features may be limited.","backToRoadmap":"Back to Roadmap","skipToContent":"Skip to content","breadcrumb":"Breadcrumb","search":"Search","clearSearch":"Clear search"},"resources":{"types":{"article":"Article","video":"Video","book":"Book","app":"App","community":"Community","pdf":"PDF"},"visitResource":"Visit Resource","viewResource":"View Resource"},"metadata":{"home":{"title":"Revert Guide - Your Journey Begins Here","description":"An offline-first educational guide for new Muslims with practical, compassionate next steps."},"about":{"title":"About - Revert Guide","description":"Learn about the Revert Guide project, our mission, and our approach to beginner-friendly Islamic guidance."},"accessibility":{"title":"Accessibility Statement - Revert Guide","description":"Revert Guide\'s commitment to accessibility, WCAG 2.1 AA compliance, and inclusive design."},"glossary":{"title":"Glossary - Revert Guide","description":"Search Islamic terms, transliterations, and definitions in the Revert Guide glossary."},"mentalHealth":{"title":"Taking Care of Your Mind - Revert Guide","description":"Emotional support, validation, crisis resources, and practical guidance for new Muslims."},"offline":{"title":"Offline - Revert Guide","description":"Reconnect or open a previously cached page to continue using Revert Guide offline."},"privacy":{"title":"Privacy Policy - Revert Guide","description":"Read the Revert Guide privacy policy and understand our offline-first data practices."},"ramadan":{"title":"Ramadan Guide - Revert Guide","description":"Your first Ramadan as a Muslim, including fasting basics, preparation, and practical support."},"resources":{"title":"Resources - Revert Guide","description":"Curated books, videos, apps, and communities to support your journey."},"findMasjid":{"title":"Find a Masjid - Revert Guide","description":"Search Toronto-area masjids and mosques, even when offline."},"roadmap":{"title":"Your Roadmap - Revert Guide","description":"A step-by-step timeline for your first day, first weeks, and first months as a Muslim."},"sources":{"title":"Sources & Citations - Revert Guide","description":"Browse the Quran, hadith, articles, and books cited throughout Revert Guide."},"terms":{"title":"Terms of Use - Revert Guide","description":"Understand the terms, disclaimers, and usage conditions for Revert Guide."},"topics":{"title":"Topics - Revert Guide","description":"Explore self-contained topic guides about prayer, fasting, beliefs, community, and more."},"notFound":{"title":"Page Not Found - Revert Guide","description":"Return to the roadmap or homepage to continue your journey."}}}',
        ),
        o = JSON.parse(
          '{"brand":{"homeAriaLabel":"Revert Guide - Accueil"},"languageSwitcher":{"ariaLabel":"Selecteur de langue","label":"Langue"},"nav":{"home":"Accueil","roadmap":"Feuille de route","topics":"Sujets","glossary":"Glossaire","resources":"Ressources","allResources":"Toutes les ressources","findMasjid":"Trouver une mosquee","about":"A propos","aboutUs":"A propos de nous","accessibility":"Accessibilite","privacy":"Politique de confidentialite","terms":"Conditions d\'utilisation","sources":"Sources","ramadan":"Guide du Ramadan","mentalHealth":"Sante mentale","mainNavigation":"Navigation principale","openMenu":"Ouvrir le menu","closeMenu":"Fermer le menu","mobileMenu":"Menu de navigation"},"footer":{"about":"A propos","accessibility":"Accessibilite","privacy":"Politique de confidentialite","terms":"Conditions d\'utilisation","sources":"Sources","description":"Une ressource gratuite, hors ligne et pensee pour les nouveaux musulmans. Pas de suivi, pas de publicite, seulement des conseils utiles.","explore":"Explorer","information":"Information","quickLinksAriaLabel":"Liens rapides","navigationAriaLabel":"Navigation de pied de page","copyright":"Revert Guide. Cree avec soin pour les nouveaux musulmans partout."},"common":{"beginJourney":"Commencer votre parcours","nextStep":"Etape suivante","previousStep":"Etape precedente","readMore":"Lire la suite","searchPlaceholder":"Rechercher...","loading":"Preparation de votre prochaine etape...","offline":"Vous etes hors ligne. Certaines fonctionnalites peuvent etre limitees.","backToRoadmap":"Retour a la feuille de route","skipToContent":"Aller au contenu","breadcrumb":"Fil d\'Ariane","search":"Rechercher","clearSearch":"Effacer la recherche"},"resources":{"types":{"article":"Article","video":"Video","book":"Livre","app":"Application","community":"Communaute","pdf":"PDF"},"visitResource":"Visiter la ressource","viewResource":"Voir la ressource"},"metadata":{"home":{"title":"Revert Guide - Votre parcours commence ici","description":"Un guide educatif hors ligne pour les nouveaux musulmans, avec des etapes pratiques et compatissantes."},"about":{"title":"A propos - Revert Guide","description":"Decouvrez le projet Revert Guide, notre mission et notre approche pour accompagner les nouveaux musulmans."},"accessibility":{"title":"Accessibilite - Revert Guide","description":"L\'engagement de Revert Guide envers l\'accessibilite numerique et un design inclusif."},"glossary":{"title":"Glossaire - Revert Guide","description":"Recherchez des termes islamiques, transliterations et definitions dans le glossaire Revert Guide."},"mentalHealth":{"title":"Prendre soin de votre esprit - Revert Guide","description":"Soutien emotionnel, validation et ressources pratiques pour les nouveaux musulmans."},"offline":{"title":"Hors ligne - Revert Guide","description":"Reconnectez-vous ou ouvrez une page deja en cache pour continuer a utiliser Revert Guide."},"privacy":{"title":"Politique de confidentialite - Revert Guide","description":"Consultez la politique de confidentialite de Revert Guide et nos pratiques hors ligne."},"ramadan":{"title":"Guide du Ramadan - Revert Guide","description":"Votre premier Ramadan en tant que musulman, avec des bases, des conseils de preparation et un accompagnement pratique."},"resources":{"title":"Ressources - Revert Guide","description":"Livres, videos, applications et communautes selectionnes pour soutenir votre parcours."},"findMasjid":{"title":"Trouver une mosquee - Revert Guide","description":"Recherchez des mosquees dans la region de Toronto, meme hors ligne."},"roadmap":{"title":"Votre feuille de route - Revert Guide","description":"Un parcours etape par etape pour votre premier jour, vos premieres semaines et vos premiers mois en tant que musulman."},"sources":{"title":"Sources et citations - Revert Guide","description":"Consultez les references du Coran, des hadiths, des articles et des livres cites dans Revert Guide."},"terms":{"title":"Conditions d\'utilisation - Revert Guide","description":"Comprenez les conditions, avertissements et limites d\'utilisation de Revert Guide."},"topics":{"title":"Sujets - Revert Guide","description":"Explorez des guides dedies a la priere, au jeune, aux croyances, a la communaute, et plus encore."},"notFound":{"title":"Page introuvable - Revert Guide","description":"Revenez a la feuille de route ou a l\'accueil pour continuer votre parcours."}}}',
        );
      let n = ["en", "fr", "es", "hi", "ur", "zh", "tl", "pa"],
        a = "en",
        s = "revert-guide-locale",
        u = {
          en: r,
          fr: g(r, o),
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
      function d(e) {
        return n.includes(e);
      }
      function l(e) {
        return e && d(e) ? e : a;
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
      function v(e) {
        return c[e];
      }
      function h(e, i) {
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
      function f(e, i) {
        let t = e.split("/");
        return d(t[1])
          ? ((t[1] = i), t.join("/") || "/".concat(i))
          : h(i, e || "/");
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
    3145: function (e, i, t) {
      t.d(i, {
        default: function () {
          return o.a;
        },
      });
      var r = t(8461),
        o = t.n(r);
    },
    7648: function (e, i, t) {
      t.d(i, {
        default: function () {
          return o.a;
        },
      });
      var r = t(2972),
        o = t.n(r);
    },
    8461: function (e, i, t) {
      (Object.defineProperty(i, "__esModule", { value: !0 }),
        (function (e, i) {
          for (var t in i)
            Object.defineProperty(e, t, { enumerable: !0, get: i[t] });
        })(i, {
          default: function () {
            return u;
          },
          getImageProps: function () {
            return s;
          },
        }));
      let r = t(7043),
        o = t(5346),
        n = t(5878),
        a = r._(t(5084));
      function s(e) {
        let { props: i } = (0, o.getImgProps)(e, {
          defaultLoader: a.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !0,
          },
        });
        for (let [e, t] of Object.entries(i)) void 0 === t && delete i[e];
        return { props: i };
      }
      let u = n.Image;
    },
  },
]);
