class I18n {
  constructor() {
    
    this.currentLanguage = 'en';
    this.translations = {
      en: require('./translations/en.json'),
      es: require('./translations/es.json'),
      fr: require('./translations/fr.json'),
      it: require('./translations/it.json'),
    };
    this.translationsLoaded = true;
    this.delimiter = '.';

  }

  t(key) {
    const keys = key.split(this.delimiter);
    const translations = this.translations[this.currentLanguage];

    return this.traverseTranslations(keys, translations) || key;
  }

  traverseTranslations(keys, translations) {
    const [currentKey, ...restValue] = keys;
    const value = translations[currentKey];
    if (value === undefined) {
      return undefined;
    } else if (restValue.length === 0) {
      return typeof value === 'string' ? value : undefined;
    } else {
      return this.traverseTranslations(restValue, value);
    }
  }

  setLanguage(language) {
    this.currentLanguage = language;
  }
}

export const i18n = new I18n();