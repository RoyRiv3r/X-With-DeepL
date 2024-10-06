// src/utils/logger.js

const { getSetting } = require("./storage.js");

let debugEnabled = false;

(async () => {
  debugEnabled = (await getSetting("debug_enabled")) || false;
})();

function debugLog(...args) {
  if (debugEnabled) {
    console.log("[Twitter-DeepL]", ...args);
  }
}

module.exports = {
  debugLog,
};
