// src/utils/logger.js

function debugLog(...args) {
  const debugEnabled = true; // Set to true to enable logging
  if (debugEnabled) {
    console.log("[Twitter-DeepL]", ...args);
  }
}

module.exports = {
  debugLog,
};
