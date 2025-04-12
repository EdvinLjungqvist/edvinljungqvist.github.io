import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        preload: ["en", "sv"],
        debug: process.env.NODE_ENV !== "production",
        saveMissing: process.env.NODE_ENV === "production",
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: "/locales/{{lng}}/{{ns}}.json",
            addPath: "/locales/{{lng}}/{{ns}}.missing.json",
        },
        detection: {
            order: ["querystring", "cookie", "localStorage", "navigator"],
            lookupQuerystring: "lang",
            caches: ["cookie"]
        },
    });

export default i18n;
