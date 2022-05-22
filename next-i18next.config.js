const path = require('path')

module.exports = {
  i18n: {
    // localeDetection: false,
    defaultLocale: 'uk',
    locales: ['uk', 'en', 'ru'],
    localePath: path.resolve('./public/locales'),
  },
}
