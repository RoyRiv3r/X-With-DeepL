// src/utils/storage.js

async function getSetting(key) {
  const result = await browser.storage.sync.get(key);
  return result[key];
}

async function setSetting(key, value) {
  await browser.storage.sync.set({ [key]: value });
}

module.exports = {
  getSetting,
  setSetting,
};
