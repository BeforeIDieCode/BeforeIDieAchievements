import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: require("./locales/en/translation.json"),
      },
      pt: {
        translation: require("./locales/pt/translation.json"),
      },
      fr: {
        translation: require("./locales/fr/translation.json"),
      },
      it: {
        translation: require("./locales/it/translation.json"),
      },
      es: {
        translation: require("./locales/es/translation.json"),
      },
      de: {
        translation: require("./locales/de/translation.json"),
      },
      nl: {
        translation: require("./locales/nl/translation.json"),
      },
      sv: {
        translation: require("./locales/sv/translation.json"),
      },
      no: {
        translation: require("./locales/no/translation.json"),
      },
      da: {
        translation: require("./locales/da/translation.json"),
      },
      fi: {
        translation: require("./locales/fi/translation.json"),
      },
      ru: {
        translation: require("./locales/ru/translation.json"),
      },
      zh: {
        translation: require("./locales/zh/translation.json"),
      },
      ja: {
        translation: require("./locales/ja/translation.json"),
      },
      hi: {
        translation: require("./locales/hi/translation.json"),
      },
      ko: {
        translation: require("./locales/ko/translation.json"),
      },
      ms: {
        translation: require("./locales/ms/translation.json"),
      },
      id: {
        translation: require("./locales/id/translation.json"),
      },
      tl: {
        translation: require("./locales/tl/translation.json"),
      },
      th: {
        translation: require("./locales/th/translation.json"),
      },
      vi: {
        translation: require("./locales/vi/translation.json"),
      },
      tr: {
        translation: require("./locales/tr/translation.json"),
      },
      el: {
        translation: require("./locales/el/translation.json"),
      },
      af: {
        translation: require("./locales/af/translation.json"),
      },
      sw: {
        translation: require("./locales/sw/translation.json"),
      },
      pl: {
        translation: require("./locales/pl/translation.json"),
      },
      ro: {
        translation: require("./locales/ro/translation.json"),
      },
      bg: {
        translation: require("./locales/bg/translation.json"),
      },
      uk: {
        translation: require("./locales/uk/translation.json"),
      },
      cs: {
        translation: require("./locales/cs/translation.json"),
      },
      sk: {
        translation: require("./locales/sk/translation.json"),
      },
      hu: {
        translation: require("./locales/hu/translation.json"),
      },
      sl: {
        translation: require("./locales/sl/translation.json"),
      },
      hr: {
        translation: require("./locales/hr/translation.json"),
      },
      sr: {
        translation: require("./locales/sr/translation.json"),
      },
      bs: {
        translation: require("./locales/bs/translation.json"),
      },
      mk: {
        translation: require("./locales/mk/translation.json"),
      },
      sq: {
        translation: require("./locales/sq/translation.json"),
      },
      lt: {
        translation: require("./locales/lt/translation.json"),
      },
      lv: {
        translation: require("./locales/lv/translation.json"),
      },
      et: {
        translation: require("./locales/et/translation.json"),
      },
      is: {
        translation: require("./locales/is/translation.json"),
      },
      bn: {
        translation: require("./locales/bn/translation.json"),
      },
      ne: {
        translation: require("./locales/ne/translation.json"),
      },
      si: {
        translation: require("./locales/si/translation.json"),
      },
      my: {
        translation: require("./locales/my/translation.json"),
      },
      km: {
        translation: require("./locales/km/translation.json"),
      },
      lo: {
        translation: require("./locales/lo/translation.json"),
      },
      mn: {
        translation: require("./locales/mn/translation.json"),
      },
      dz: {
        translation: require("./locales/dz/translation.json"),
      },
      kk: {
        translation: require("./locales/kk/translation.json"),
      },
      uz: {
        translation: require("./locales/uz/translation.json"),
      },
      ky: {
        translation: require("./locales/ky/translation.json"),
      },
      tg: {
        translation: require("./locales/tg/translation.json"),
      },
      tk: {
        translation: require("./locales/tk/translation.json"),
      },

    },
    lng: "en", // Set the default language
    fallbackLng: "en", // Fallback language if a translation is missing
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
    returnNull: false,
  });
