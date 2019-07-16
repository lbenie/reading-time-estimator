import { en } from './en';
import { fr } from './fr';
import { es } from './es';
import { II18n } from './II18n';

const translations: { [key: string]: II18n } = {
  en,
  fr,
  es
};

const hasTranslation = (language: string): boolean =>
  Object.keys(translations).some(x => x === language);

export { translations, hasTranslation };
