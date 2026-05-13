"use client";

import { useTranslation } from "react-i18next";

import BuzzyLogo from "../BuzzyLogo/BuzzyLogo";

export function InConstruction() {
  const { t, i18n } = useTranslation("common");

  return (
    <div className="flex min-h-dvh flex-col bg-charcoal">
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-10">
        <div className="flex w-full max-w-lg flex-col items-center gap-8 text-center">
          <BuzzyLogo className="h-20 w-20 shrink-0 sm:h-24 sm:w-24" />

          <div className="flex flex-col gap-4">
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              <span className="text-[#F5B800]">{t("comingSoon.titleAccent")}</span>
              <span className="text-white"> </span>
              <span className="text-[#E8951F]">{t("comingSoon.titleRest")}</span>
            </h1>
            <p className="font-sans text-base font-normal leading-relaxed text-background-light/85 sm:text-lg">
              {t("comingSoon.subtitle")}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 px-6 pb-8 text-sm text-background-light/70">
        <span>{t("language")}:</span>
        <button
          type="button"
          onClick={() => {
            void i18n.changeLanguage("en");
          }}
          className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1 text-background-light transition hover:bg-white/10"
        >
          {t("english")}
        </button>
        <span className="text-white/30">·</span>
        <button
          type="button"
          onClick={() => {
            void i18n.changeLanguage("pt");
          }}
          className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1 text-background-light transition hover:bg-white/10"
        >
          {t("portuguese")}
        </button>
      </div>
    </div>
  );
}
