const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'ar'],
    localePath: path.resolve('./public/locales'),
    localeDetection: true,
  },
  react: {
    useSuspense: false,
  },
  detection: {
    order: ['localStorage', 'navigator', 'htmlTag'],
    caches: ['localStorage'],
  },
}
