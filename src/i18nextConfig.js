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
    },
    lng: "en", // Set the default language
    fallbackLng: "en", // Fallback language if a translation is missing
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
    returnNull: false,
  });
