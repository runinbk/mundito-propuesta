"use client";

import { useI18n } from "@/context/i18n";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const { lang, setLang } = useI18n();

  const toggleLanguage = () => {
    setLang(lang === "es" ? "en" : "es");
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="font-bold tracking-widest"
      aria-label={`Switch to ${lang === 'es' ? 'English' : 'Spanish'}`}
    >
      {lang === "es" ? "EN" : "ES"}
    </Button>
  );
}
