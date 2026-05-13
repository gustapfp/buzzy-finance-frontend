"use client";

import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("subtitle")}</p>
      <div style={{ marginTop: "1rem" }}>
        <span>{t("language")}: </span>
        <button
          type="button"
          onClick={() => {
            void i18n.changeLanguage("en");
          }}
        >
          {t("english")}
        </button>
        {" · "}
        <button
          type="button"
          onClick={() => {
            void i18n.changeLanguage("pt");
          }}
        >
          {t("portuguese")}
        </button>
      </div>
    </div>
  );
};

export default HomePage;
