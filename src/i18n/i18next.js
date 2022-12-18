// place in plugins/i18next.js
import i18next from 'i18next';
import ko_KR from './locales/ko-KR/translation.json';
import en_US from './locales/en-US/translation.json';

const lngs = ['ko-KR', 'en-US'];
/**
 * Must add new language here
 * @param lng {Language} language
 * @returns {Object} json resource
 */
function loadResource(lng) {
  let module;

  switch (lng) {
    case 'ko-KR': {
      module = ko_KR;
      break;
    }
    case 'en-US': {
      module = en_US;
      break;
    }
    default:
      break;
  }

  return module;
}

function getResources(lngs) {
  const resources = {};

  lngs.forEach((lng) => {
    resources[lng] = {
      translation: loadResource(lng),
    };
  });
  return resources;
}

export function initializeI18next(lng = 'ko-KR') {
  i18next.init({
    lng,
    fallbackLng: 'ko-KR',
    returnEmptyString: false,
    keySeparator: false,
    nsSeparator: false,
    interpolation: {
      prefix: '%{',
      suffix: '}',
    },
    // skipOnVariables: false,
    // returnObjects: true,
    parseMissingKeyHandler(key) {
      /* eslint-disable-next-line no-console */
      console.warn('parseMissingKeyHandler', `'key': '${key}'`);
      const keySeparator = '~~';
      const value = key.includes(keySeparator)
        ? key.split(keySeparator)[1]
        : key;

      return value;
    },
    resources: getResources(lngs),
  });
}

export function changeLanguage(lng) {
  return i18next.changeLanguage(lng);
}

export const i18n = i18next;
