// background.js

browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    tab.url &&
    (tab.url.includes("twitter.com") || tab.url.includes("x.com"))
  ) {
    browser.pageAction.show(tabId);
  }
});
