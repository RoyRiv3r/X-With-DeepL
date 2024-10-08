// src/scripts/twitter.js

import { getSetting } from "../utils/storage.js";
import { debugLog } from "../utils/logger.js";
import { DeepLTranslator } from "../translator/translator.js";
// Load localization
let localization = {};

(async () => {
  debugLog("Extension script started");

  const translationState = new WeakMap();
  let translationCache = new Map(); // Global cache for translations
  let observer;
  let removeTwitterTranslateButtonSetting = false; // default value
  let autoTranslateInStatus = false; // default value

  // Declare variables for new settings
  let autoTranslateInQuotes = false; // default value
  let autoTranslateInHome = false; // default value

  // Helper function to parse stored values to booleans
  function parseBoolean(value) {
    return value === true || value === "true";
  }

  // Load translation cache from sessionStorage
  loadTranslationCache();

  // Get settings
  const removeTwitterTranslateButtonValue = await getSetting(
    "remove_twitter_translate_button"
  );
  removeTwitterTranslateButtonSetting = parseBoolean(
    removeTwitterTranslateButtonValue
  );

  const autoTranslateSetting = await getSetting("auto_translate_in_status");
  autoTranslateInStatus = parseBoolean(autoTranslateSetting);

  // Get new settings
  const autoTranslateInQuotesSetting = await getSetting(
    "auto_translate_in_quotes"
  );
  autoTranslateInQuotes = parseBoolean(autoTranslateInQuotesSetting);

  const autoTranslateInHomeSetting = await getSetting("auto_translate_in_home");
  autoTranslateInHome = parseBoolean(autoTranslateInHomeSetting);

  // Fetch translation-related settings
  let targetLanguage = (await getSetting("target_language")) || "EN-US";
  let formality = (await getSetting("formality")) || "default";
  let splitSentences = parseBoolean(await getSetting("split_sentences"))
    ? 1
    : 0;
  let preserveFormatting = parseBoolean(await getSetting("preserve_formatting"))
    ? 1
    : 0;

  debugLog(`Auto-translate setting retrieved: ${autoTranslateInStatus}`);
  debugLog(
    `Remove Twitter Translate Button setting retrieved: ${removeTwitterTranslateButtonSetting}`
  );
  debugLog(`Auto-translate in quotes setting: ${autoTranslateInQuotes}`);
  debugLog(`Auto-translate in home setting: ${autoTranslateInHome}`);

  // Listen for storage changes to update settings dynamically
  browser.storage.onChanged.addListener((changes, area) => {
    if (area === "local") {
      let settingsChanged = false;

      if (changes.auto_translate_in_status) {
        autoTranslateInStatus = parseBoolean(
          changes.auto_translate_in_status.newValue
        );
        debugLog(`Auto-translate setting updated: ${autoTranslateInStatus}`);
      }
      if (changes.remove_twitter_translate_button) {
        removeTwitterTranslateButtonSetting = parseBoolean(
          changes.remove_twitter_translate_button.newValue
        );
        debugLog(
          `Remove Twitter Translate Button setting updated: ${removeTwitterTranslateButtonSetting}`
        );
      }

      if (changes.auto_translate_in_quotes) {
        autoTranslateInQuotes = parseBoolean(
          changes.auto_translate_in_quotes.newValue
        );
        debugLog(
          `Auto-translate in quotes setting updated: ${autoTranslateInQuotes}`
        );
      }
      if (changes.auto_translate_in_home) {
        autoTranslateInHome = parseBoolean(
          changes.auto_translate_in_home.newValue
        );
        debugLog(
          `Auto-translate in home setting updated: ${autoTranslateInHome}`
        );
      }

      // Handle translation-related settings
      if (changes.target_language) {
        targetLanguage = changes.target_language.newValue || "EN-US";
        settingsChanged = true;
      }
      if (changes.formality) {
        formality = changes.formality.newValue || "default";
        settingsChanged = true;
      }
      if (changes.split_sentences) {
        splitSentences = parseBoolean(changes.split_sentences.newValue) ? 1 : 0;
        settingsChanged = true;
      }
      if (changes.preserve_formatting) {
        preserveFormatting = parseBoolean(changes.preserve_formatting.newValue)
          ? 1
          : 0;
        settingsChanged = true;
      }

      if (settingsChanged) {
        // Clear the cache as settings have changed
        translationCache.clear();
        saveTranslationCache();
        debugLog("Translation settings changed, cache cleared.");
      }
    }
  });

  // Detect Twitter's language
  const twitterLang = document.documentElement.lang || "en";
  await loadLocalization(twitterLang);

  // Initialize IntersectionObserver
  const visibilityObserver = new IntersectionObserver(handleVisibilityChange, {
    root: null,
    threshold: 0.1, // Adjust as needed
  });

  // Start observing tweets and notes
  observeContent();

  /**
   * Loads localization strings based on the provided language code.
   * @param {string} langCode - The language code (e.g., 'en', 'fr').
   */
  async function loadLocalization(langCode) {
    try {
      const response = await fetch(
        browser.runtime.getURL("../locales/lang.json")
      );
      if (response.ok) {
        const allLocalizations = await response.json();
        // Try to get the localization for the detected language
        localization = allLocalizations[langCode] || allLocalizations["en"];
      } else {
        console.error("Error loading lang.json:", response.status);
        localization = {};
      }
    } catch (error) {
      console.error("Error loading localization:", error);
      localization = {};
    }
  }

  /**
   * Initializes the MutationObserver to monitor tweets and notes.
   */
  function observeContent() {
    debugLog("Initializing observer for tweets and notes");

    const tweetTextSelector = 'div[data-testid="tweetText"]';
    const noteTextSelector = [
      // Notes on the tweet's page (/status/)
      'div[data-testid="birdwatch-pivot"] > div[dir="ltr"].css-146c3p1',
      // Notes on the /i/birdwatch/ page
      'div.css-175oi2r.r-1471scf.r-18u37iz.r-iphfwy.r-1h8ys4a > div[dir="ltr"].css-146c3p1',
    ].join(", ");

    // Process existing tweets and notes
    document
      .querySelectorAll(`${tweetTextSelector}, ${noteTextSelector}`)
      .forEach(processTextElement);

    observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType !== Node.ELEMENT_NODE) return;

          if (removeTwitterTranslateButtonSetting) {
            // Remove "Translate post" or "Translate note" button if it appears
            if (isTranslatePostButton(node)) {
              node.remove();
            }
          }

          // Process tweets and notes
          if (node.matches(tweetTextSelector) || isNoteTextElement(node)) {
            processTextElement(node);
          }

          // Process nested elements
          node
            .querySelectorAll(
              `${tweetTextSelector}:not([data-deepl-processed]), ${noteTextSelector}:not([data-deepl-processed])`
            )
            .forEach(processTextElement);

          if (removeTwitterTranslateButtonSetting) {
            // Remove "Translate post" or "Translate note" buttons inside nested elements
            node.querySelectorAll('button[role="button"]').forEach((button) => {
              if (isTranslatePostButton(button)) {
                button.remove();
              }
            });
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  /**
   * Processes a text element (tweet or note) by adding the translate button.
   * @param {HTMLElement} textElement - The tweet or note text element.
   */
  function processTextElement(textElement) {
    if (textElement.dataset.deeplProcessed) return;

    const isNote = isNoteTextElement(textElement);
    const container = findContainerElement(textElement, isNote);

    if (!container) {
      debugLog("Container element not found");
      return;
    }

    // Get unique ID
    const uniqueId = getUniqueId(textElement, isNote);

    removeExistingTranslateButtons(container);

    if (removeTwitterTranslateButtonSetting) {
      removeTwitterTranslateButton(container); // Remove Twitter's "Translate post/note" button
    }

    let translateButton = isNote
      ? createTranslateNoteButton()
      : createTranslateTweetButton();

    insertTranslateButton(textElement, translateButton, isNote);

    let state = {
      isTranslated: false,
      originalText: null,
      translatedText: null,
      showMoreElement: null, // To preserve the "Show more" element
      translateButton: translateButton,
      isProcessing: false,
      uniqueId: uniqueId,
    };

    // Check if translation exists in cache
    if (translationCache.has(uniqueId)) {
      state.translatedText = translationCache.get(uniqueId).translatedText;
      state.originalText = translationCache.get(uniqueId).originalText;
    }

    translationState.set(textElement, state);

    textElement.dataset.deeplProcessed = "true";

    translateButton.addEventListener("click", async () => {
      await handleTranslateButtonClick(textElement, translateButton);
    });

    // Observe the textElement for visibility
    if (shouldAutoTranslate()) {
      visibilityObserver.observe(textElement);
    }
  }

  /**
   * Generates a unique identifier for the text element.
   * @param {HTMLElement} textElement - The text element.
   * @param {boolean} isNote - Whether the text element is a note.
   * @returns {string} The unique identifier.
   */
  function getUniqueId(textElement, isNote) {
    // We'll use a hash of the text content and settings as the unique ID
    const textContent = textElement.innerText.trim();

    // Create a string that includes relevant settings
    const settingsString = JSON.stringify({
      targetLanguage,
      formality,
      splitSentences,
      preserveFormatting,
    });

    const combinedString = textContent + settingsString;
    const hash = generateHash(combinedString);
    return (isNote ? "note-" : "tweet-") + hash;
  }

  /**
   * Generates a simple hash code for a given text.
   * @param {string} text - The text to hash.
   * @returns {string} The hash code.
   */
  function generateHash(text) {
    let hash = 0,
      i,
      chr;
    if (text.length === 0) return hash.toString();
    for (i = 0; i < text.length; i++) {
      chr = text.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash.toString();
  }

  // Determines whether to auto-translate based on settings and URL
  function shouldAutoTranslate() {
    const pathname = window.location.pathname;

    if (
      autoTranslateInStatus &&
      pathname.includes("/status/") &&
      !pathname.endsWith("/quotes")
    ) {
      return true;
    }
    if (autoTranslateInQuotes && pathname.endsWith("/quotes")) {
      return true;
    }
    if (autoTranslateInHome && (pathname === "/home" || pathname === "/")) {
      return true;
    }
    return false;
  }

  /**
   * IntersectionObserver callback to handle visibility changes.
   */
  function handleVisibilityChange(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const textElement = entry.target;
        const state = translationState.get(textElement);
        if (state && !state.isTranslated && !state.isProcessing) {
          state.isProcessing = true;
          handleTranslateButtonClick(textElement, state.translateButton);
        }
        observer.unobserve(textElement); // Stop observing after processing
      }
    });
  }

  /**
   * Checks if an element is a note text element.
   * @param {HTMLElement} element - The DOM element to check.
   * @returns {boolean} True if the element is a note text element.
   */
  function isNoteTextElement(element) {
    return (
      // Note on the tweet's page (/status/)
      (element.matches('div[dir="ltr"].css-146c3p1') &&
        element.parentElement &&
        element.parentElement.matches('div[data-testid="birdwatch-pivot"]')) ||
      // Notes on the /i/birdwatch/ page
      (element.matches('div[dir="ltr"].css-146c3p1') &&
        element.parentElement &&
        element.parentElement.matches(
          "div.css-175oi2r.r-1471scf.r-18u37iz.r-iphfwy.r-1h8ys4a"
        ))
    );
  }

  /**
   * Finds the container element for a text element.
   * @param {HTMLElement} textElement - The text element.
   * @param {boolean} isNote - Whether the text element is a note.
   * @returns {HTMLElement|null} The container element or null if not found.
   */
  function findContainerElement(textElement, isNote) {
    if (isNote) {
      if (window.location.pathname.startsWith("/i/birdwatch")) {
        return textElement.closest(
          "div.css-175oi2r.r-1471scf.r-18u37iz.r-iphfwy.r-1h8ys4a"
        );
      } else {
        return textElement.closest('div[data-testid="birdwatch-pivot"]');
      }
    } else {
      return textElement.closest(
        'article[data-testid="tweet"], div[data-testid="tweet"], div[role="article"], div'
      );
    }
  }

  /**
   * Removes existing translate buttons from a container.
   * @param {HTMLElement} container - The container element.
   */
  function removeExistingTranslateButtons(container) {
    const translateButtons = container.querySelectorAll(
      "button.deepl-translate-button"
    );
    translateButtons.forEach((button) => {
      // Remove the button's container div
      if (button.parentElement) {
        button.parentElement.remove();
      } else {
        button.remove();
      }
    });
  }

  function removeTwitterTranslateButton(container) {
    const translateButtons = container.querySelectorAll(
      'button[role="button"]'
    );
    translateButtons.forEach((button) => {
      if (isTranslatePostButton(button)) {
        button.remove();
      }
    });
  }

  function isTranslatePostButton(element) {
    if (element.tagName !== "BUTTON") return false;
    if (element.getAttribute("role") !== "button") return false;
    const span = element.querySelector("span");
    const translatePostText = localization.translatePost || "Translate post";
    const translateNoteText = localization.translateNote || "Translate note";
    return (
      span &&
      (span.innerText.trim() === translatePostText ||
        span.innerText.trim() === translateNoteText)
    );
  }

  /**
   * Inserts the translate button into the DOM.
   * @param {HTMLElement} textElement - The text element.
   * @param {HTMLElement} translateButton - The translate button element.
   * @param {boolean} isNote - Whether the text element is a note.
   */
  function insertTranslateButton(textElement, translateButton, isNote) {
    const buttonContainer = document.createElement("div");
    buttonContainer.style.display = "inline-block";
    buttonContainer.style.width = "auto";
    buttonContainer.style.marginTop = "8px";

    if (isNote && window.location.pathname.startsWith("/i/birdwatch")) {
      // For notes on /i/birdwatch, wrap the button and add a line break
      const container = document.createElement("div");
      container.appendChild(translateButton);

      const lineBreak = document.createElement("br");
      container.appendChild(lineBreak);

      buttonContainer.appendChild(container);

      const containerElement = findContainerElement(textElement, true);
      containerElement.appendChild(buttonContainer);
    } else {
      buttonContainer.appendChild(translateButton);

      const parentNode = textElement.parentNode;

      // Try to find the "Show more" link that follows the textElement
      const showMoreLink = parentNode.querySelector(
        '[data-testid="tweet-text-show-more-link"]'
      );

      if (showMoreLink) {
        // Insert after the "Show more" link
        parentNode.insertBefore(buttonContainer, showMoreLink.nextSibling);
      } else {
        // Insert after the text element
        parentNode.insertBefore(buttonContainer, textElement.nextSibling);
      }
    }
  }

  /**
   * Handles the click event on the translate button.
   * @param {HTMLElement} textElement - The text element.
   * @param {HTMLElement} translateButton - The translate button element.
   */
  async function handleTranslateButtonClick(textElement, translateButton) {
    try {
      const state = translationState.get(textElement);
      if (!state) {
        debugLog("No translation state found for this text element");
        return;
      }

      if (state.isTranslated) {
        debugLog("Restoring original text");
        restoreOriginalText(textElement, state);
        state.isTranslated = false;
        updateButtonText(translateButton, false);
      } else {
        if (!state.translatedText) {
          if (translationCache.has(state.uniqueId)) {
            const cachedData = translationCache.get(state.uniqueId);
            state.translatedText = cachedData.translatedText;
            state.originalText = cachedData.originalText;
          } else {
            const apiKey = await getSetting("api_key");
            if (!apiKey) {
              alert("Please set your DeepL API Key in the extension options.");
              return;
            }

            const translator = new DeepLTranslator(apiKey);

            // Clone the textElement to manipulate it without affecting the DOM
            const clonedTextElement = textElement.cloneNode(true);

            // Remove the "Show more" link from the cloned element
            const showMoreLink = clonedTextElement.querySelector(
              '[data-testid="tweet-text-show-more-link"]'
            );
            if (showMoreLink) {
              showMoreLink.remove();
            }

            // Now capture the original text without the "Show more" link
            state.originalText = clonedTextElement.innerHTML;

            debugLog("Original text to translate:", state.originalText);

            try {
              state.translatedText = await translator.translateText(
                state.originalText,
                {
                  targetLanguage,
                  formality,
                  splitSentences,
                  preserveFormatting,
                }
              );

              debugLog("Translated text:", state.translatedText);

              // Store in cache
              translationCache.set(state.uniqueId, {
                translatedText: state.translatedText,
                originalText: state.originalText,
              });
              // Save cache to sessionStorage
              saveTranslationCache();
            } catch (error) {
              alert(
                `An error occurred while translating the text: Wrong API key or Quota Exceeded.`
              );
              console.error("Translation error:", error);
              state.isProcessing = false;
              return;
            }
          }
        }

        // Update the textElement with the translated text
        updateTextWithTranslation(textElement, state);
        state.isTranslated = true;
        updateButtonText(translateButton, true);
      }
    } catch (error) {
      debugLog("Error in handleTranslateButtonClick:", error);
      console.error("Error in handleTranslateButtonClick:", error);
    } finally {
      const state = translationState.get(textElement);
      if (state) {
        state.isProcessing = false;
      }
    }
  }

  /**
   * Updates the button text based on translation state.
   * @param {HTMLElement} button - The translate button element.
   * @param {boolean} isTranslated - Whether the text is currently translated.
   */
  function updateButtonText(button, isTranslated) {
    const span = button.querySelector("span");
    if (span) {
      if (isTranslated) {
        span.textContent = localization.showOriginal || "Show Original";
      } else {
        span.textContent = button.dataset.originalText;
      }
    }
  }

  /**
   * Restores the original text of the text element.
   * @param {HTMLElement} textElement - The text element.
   * @param {Object} state - The translation state.
   */
  function restoreOriginalText(textElement, state) {
    textElement.innerHTML = state.originalText;

    // Reattach the "Show more" element if it exists
    if (state.showMoreElement) {
      const parentNode = textElement.parentNode;
      parentNode.insertBefore(state.showMoreElement, textElement.nextSibling);
    }
  }

  /**
   * Updates the text element with the translated text.
   * @param {HTMLElement} textElement - The text element.
   * @param {Object} state - The translation state.
   */
  function updateTextWithTranslation(textElement, state) {
    textElement.innerHTML = state.translatedText;

    // Reattach the "Show more" element if it exists
    if (state.showMoreElement) {
      const parentNode = textElement.parentNode;
      parentNode.insertBefore(state.showMoreElement, textElement.nextSibling);
    }
  }

  /**
   * Creates a translate button for tweets.
   * @returns {HTMLElement} The translate button element.
   */
  function createTranslateTweetButton() {
    const buttonText =
      localization.translateWithDeepL || "Translate with DeepL";
    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.classList.add("deepl-translate-button");
    button.dataset.originalText = buttonText;
    applyButtonStyles(button);

    const span = document.createElement("span");
    span.innerText = buttonText;
    applySpanStyles(span);

    button.appendChild(span);

    return button;
  }

  /**
   * Creates a translate button for notes.
   * @returns {HTMLElement} The translate button element.
   */
  function createTranslateNoteButton() {
    const buttonText =
      localization.translateNoteWithDeepL || "Translate note with DeepL";
    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.classList.add("deepl-translate-button");
    button.dataset.originalText = buttonText;
    applyButtonStyles(button);

    const span = document.createElement("span");
    span.innerText = buttonText;
    applySpanStylesNote(span);

    button.appendChild(span);

    return button;
  }

  /**
   * Applies common styles to the translate button element.
   * @param {HTMLElement} button - The button element.
   */
  function applyButtonStyles(button) {
    button.style.display = "inline-flex";
    button.style.alignItems = "center";
    button.style.cursor = "pointer";
    button.style.background = "none";
    button.style.border = "none";
    button.style.padding = "0";
    button.style.margin = "0";
    button.style.font = "inherit";
    button.style.verticalAlign = "baseline";
    button.style.width = "auto";
    button.style.maxWidth = "none";
    button.style.flexShrink = "0";
    button.style.alignSelf = "flex-start";
    button.style.color = "rgb(29, 155, 240)";

    button.addEventListener("mouseover", () => {
      const span = button.querySelector("span");
      if (span) span.style.textDecoration = "underline";
    });
    button.addEventListener("mouseout", () => {
      const span = button.querySelector("span");
      if (span) span.style.textDecoration = "none";
    });
  }

  /**
   * Applies common styles to the span element inside the button.
   * @param {HTMLElement} span - The span element.
   */
  function applySpanStyles(span) {
    span.style.fontFamily =
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
    span.style.fontSize = "15px";
    span.style.lineHeight = "20px";
    span.style.textDecoration = "none";
  }

  /**
   * Applies common styles to the span NOTE element inside the button.
   * @param {HTMLElement} span - The span element.
   */
  function applySpanStylesNote(span) {
    span.style.fontFamily =
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
    span.style.fontSize = "15px";
    span.style.lineHeight = "20px";
    span.style.textDecoration = "none";
    span.style.marginLeft = "10px";
  }

  /**
   * Saves the translation cache to sessionStorage.
   */
  function saveTranslationCache() {
    try {
      const cacheObject = {};
      translationCache.forEach((value, key) => {
        cacheObject[key] = value;
      });
      sessionStorage.setItem(
        "deeplTranslationCache",
        JSON.stringify(cacheObject)
      );
    } catch (error) {
      console.error("Error saving translation cache:", error);
    }
  }

  /**
   * Loads the translation cache from sessionStorage.
   */
  function loadTranslationCache() {
    try {
      const cacheString = sessionStorage.getItem("deeplTranslationCache");
      if (cacheString) {
        const cacheObject = JSON.parse(cacheString);
        translationCache = new Map(Object.entries(cacheObject));
      }
    } catch (error) {
      console.error("Error loading translation cache:", error);
      translationCache = new Map();
    }
  }
})();
