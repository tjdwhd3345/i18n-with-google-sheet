const path = require('path');

const COMMON_EXTENSIONS = '/**/*.{js,vue,html}';

module.exports = {
  input: [
    `./pages${COMMON_EXTENSIONS}`,
    `./components${COMMON_EXTENSIONS}`,
    `./stories${COMMON_EXTENSIONS}`,
  ],
  options: {
    defaultLng: 'ko-KR',
    lngs: ['ko-KR', 'en-US'],
    func: {
      list: ['i18next.t', 'i18n.t', '$i18n.t'],
      extensions: ['.js', '.vue', '.html'],
    },
    resource: {
      loadPath: path.join(__dirname, 'assets/locales/{{lng}}/{{ns}}.json'),
      savePath: path.join(__dirname, 'assets/locales/{{lng}}/{{ns}}.json'),
    },
    defaultValue(lng, ns, key) {
      const keyAsDefaultValue = ['ko-KR'];
      if (keyAsDefaultValue.includes(lng)) {
        const separator = '~~';
        const value = key.includes(separator) ? key.split(separator)[1] : key;

        return value;
      }

      return '';
    },
    keySeparator: false,
    nsSeparator: false,
    prefix: '%{',
    suffix: '}',
  },
};
