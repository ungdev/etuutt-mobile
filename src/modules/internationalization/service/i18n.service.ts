import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { en, fr } from '../../../translations';

i18n.translations = {
  en,
  fr,
};

i18n.locale = Localization.locale;
i18n.fallbacks = true;

export default i18n;
