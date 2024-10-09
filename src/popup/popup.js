document.addEventListener("DOMContentLoaded", () => {
  const openOptionsButton = document.getElementById("open-options-page");

  if (openOptionsButton) {
    openOptionsButton.addEventListener("click", () => {
      if (browser.runtime.openOptionsPage) {
        // Open the options page in a new tab
        browser.runtime.openOptionsPage();
      } else {
        // Fallback if openOptionsPage is not supported
        window.open(browser.runtime.getURL("options/index.html"));
      }
    });
  }
});
