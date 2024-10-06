/******/ (() => { // webpackBootstrap
/*!***********************************!*\
  !*** ./src/scripts/background.js ***!
  \***********************************/
// background.js

browser.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (tab.url && (tab.url.includes("twitter.com") || tab.url.includes("x.com"))) {
    browser.pageAction.show(tabId);
  }
});
/******/ })()
;
//# sourceMappingURL=background.js.map