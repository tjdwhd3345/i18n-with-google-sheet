const path = require('path');

const COMMON_EXTENSIONS = '/**/*.{js,vue,html}';

module.exports = {
  input: [`src/components${COMMON_EXTENSIONS}`],
  options: {
    defaultLng: 'ko-KR',
    lngs: ['ko-KR', 'en-US'],
    func: {
      list: ['\\$t', 'this.\\$t', '\\$i18n.t'],
      extensions: ['.js', '.vue', '.html'],
    },
    resource: {
      // loadPath: path.join(__dirname, 'assets/locales/{{lng}}/{{ns}}.json'),
      // savePath: path.join(__dirname, 'assets/locales/{{lng}}/{{ns}}.json'),
      loadPath: path.join(__dirname, 'locales/{{lng}}/{{ns}}.json'),
      savePath: path.join(__dirname, 'locales/{{lng}}/{{ns}}.json'),
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
