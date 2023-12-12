import { i18n } from './i18n';

describe('I18n', () => {
  test('should translate keys correctly in the default language (en)', () => {
    expect(i18n.t('homepage.welcome')).toBe('Welcome to our website!');
    expect(i18n.t('fail.key')).toBe('fail.key'); 
  });

  test('should translate keys correctly in other languages', () => {
    i18n.setLanguage('es');
    expect(i18n.t('homepage.welcome')).toBe('¡Bienvenido a nuestro sitio web!');

    i18n.setLanguage('fr');
    expect(i18n.t('homepage.welcome')).toBe('Bienvenue sur notre site!');

    i18n.setLanguage('it');
    expect(i18n.t('homepage.welcome')).toBe('Benvenuto nel nostro sito!');
  });

  test('should fallback to the original key if translation not found', () => {
    i18n.setLanguage('en');
    expect(i18n.t('fail.key')).toBe('fail.key');
  });

  test('should traverse translations correctly', () => {
    i18n.setLanguage('en');
    const nestedKey = 'homepage.contact';
    expect(i18n.t(nestedKey)).toBe('Contact us for more information.');
  });
});
