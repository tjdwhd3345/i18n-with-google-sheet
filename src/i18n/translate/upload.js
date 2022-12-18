// place in translate/upload.js
const fs = require('fs');
const {
  loadSpreadsheet,
  localesPath,
  getPureKey,
  ns,
  lngs,
  sheetId,
  columnKeyToHeader,
  NOT_AVAILABLE_CELL,
} = require('../index');

const headerValues = ['키', '한글', '영어'];

async function addNewSheet(doc, title, sheetId) {
  const sheet = await doc.addSheet({
    sheetId,
    title,
    headerValues,
  });

  return sheet;
}

async function updateTranslationsFromKeyMapToSheet(doc, keyMap) {
  const title = 'Your Sheet Title';
  let sheet = doc.sheetsById[sheetId];
  if (!sheet) {
    sheet = await addNewSheet(doc, title, sheetId);
  }

  const rows = await sheet.getRows();

  // find exsit keys
  const exsitKeys = {};
  const addedRows = [];
  rows.forEach((row) => {
    const key = row[columnKeyToHeader.key];
    if (keyMap[key]) {
      exsitKeys[key] = true;
    }
  });

  for (const [key, translations] of Object.entries(keyMap)) {
    if (!exsitKeys[key]) {
      const row = {
        [columnKeyToHeader.key]: key,
        ...Object.keys(translations).reduce((result, lng) => {
          const header = columnKeyToHeader[lng];
          result[header] = translations[lng];

          return result;
        }, {}),
      };

      addedRows.push(row);
    }
  }

  // upload new keys
  await sheet.addRows(addedRows);
}

function toJson(keyMap) {
  const json = {};

  Object.entries(keyMap).forEach(([__, keysByPlural]) => {
    for (const [keyWithPostfix, translations] of Object.entries(keysByPlural)) {
      json[keyWithPostfix] = {
        ...translations,
      };
    }
  });

  return json;
}

function gatherKeyMap(keyMap, lng, json) {
  for (const [keyWithPostfix, translated] of Object.entries(json)) {
    const key = getPureKey(keyWithPostfix);

    if (!keyMap[key]) {
      keyMap[key] = {};
    }

    const keyMapWithLng = keyMap[key];
    if (!keyMapWithLng[keyWithPostfix]) {
      keyMapWithLng[keyWithPostfix] = lngs.reduce((initObj, lng) => {
        initObj[lng] = NOT_AVAILABLE_CELL;

        return initObj;
      }, {});
    }

    keyMapWithLng[keyWithPostfix][lng] = translated;
  }
}

async function updateSheetFromJson() {
  const doc = await loadSpreadsheet();

  fs.readdir(localesPath, (error, lngs) => {
    if (error) {
      throw error;
    }

    const keyMap = {};

    lngs.forEach((lng) => {
      const localeJsonFilePath = `${localesPath}/${lng}/${ns}.json`;

      // eslint-disable-next-line no-sync
      const json = fs.readFileSync(localeJsonFilePath, 'utf8');

      gatherKeyMap(keyMap, lng, JSON.parse(json));
    });

    updateTranslationsFromKeyMapToSheet(doc, toJson(keyMap));
  });
}

updateSheetFromJson();
