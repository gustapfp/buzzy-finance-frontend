import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "../locales/en/common.json";
import ptCommon from "../locales/pt/common.json";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    supportedLngs: ["en", "pt"],
    ns: ["common"],
    defaultNS: "common",
    resources: {
      en: { common: enCommon },
      pt: { common: ptCommon },
    },
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });
}

export default i18n;
