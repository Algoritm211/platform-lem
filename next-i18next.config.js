const path = require('path')

module.exports = {
  i18n: {
    // localeDetection: false,
    defaultLocale: 'uk',
    locales: ['ru', 'en', 'uk'],
    localePath: path.resolve('./public/locales'),
  },
}
