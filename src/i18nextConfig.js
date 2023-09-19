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

    },
    lng: "en", // Set the default language
    fallbackLng: "en", // Fallback language if a translation is missing
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
    returnNull: false,
  });
