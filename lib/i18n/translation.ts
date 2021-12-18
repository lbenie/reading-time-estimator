import { en } from "./en";
import { fr } from "./fr";
import { es } from "./es";
import { cn } from "./cn";
import { ja } from "./ja";
import type { I18n } from "./i18n";
import type { SupportedLanguages } from "./supportedLanguages";

export const translations: Record<SupportedLanguages, I18n> = {
  en,
  fr,
  es,
  cn,
  ja,
};
