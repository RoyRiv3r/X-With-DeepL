// options.js

import { getSetting, setSetting } from "../utils/storage.js";

document.addEventListener("DOMContentLoaded", async () => {
  const apiKeyInput = document.getElementById("api-key");
  const targetLanguageSelect = document.getElementById("target-language");
  const formalitySelect = document.getElementById("formality");
  const splitSentencesCheckbox = document.getElementById("split-sentences");
  const preserveFormattingCheckbox = document.getElementById(
    "preserve-formatting"
  );
  const removeTwitterTranslateButtonCheckbox = document.getElementById(
    "remove-twitter-translate-button"
  );
  const autoTranslateInStatusCheckbox = document.getElementById(
    "auto-translate-in-status"
  );
  const messageDiv = document.getElementById("message");

  // Helper function to parse stored values to booleans
  function parseBoolean(value) {
    return value === true || value === "true";
  }

  // Load settings
  const apiKey = await getSetting("api_key");
  const targetLanguage = (await getSetting("target_language")) || "EN-US";
  const formality = (await getSetting("formality")) || "default";
  const splitSentences = parseBoolean(await getSetting("split_sentences"));
  const preserveFormatting = parseBoolean(
    await getSetting("preserve_formatting")
  );
  const removeTwitterTranslateButton = parseBoolean(
    await getSetting("remove_twitter_translate_button")
  );
  const autoTranslateInStatus = parseBoolean(
    await getSetting("auto_translate_in_status")
  );

  if (apiKeyInput) apiKeyInput.value = apiKey || "";
  if (targetLanguageSelect) targetLanguageSelect.value = targetLanguage;
  if (formalitySelect) formalitySelect.value = formality;
  if (splitSentencesCheckbox) splitSentencesCheckbox.checked = splitSentences;
  if (preserveFormattingCheckbox)
    preserveFormattingCheckbox.checked = preserveFormatting;
  if (removeTwitterTranslateButtonCheckbox)
    removeTwitterTranslateButtonCheckbox.checked = removeTwitterTranslateButton;
  if (autoTranslateInStatusCheckbox)
    autoTranslateInStatusCheckbox.checked = autoTranslateInStatus;

  // Save settings immediately when checkboxes change
  function saveSetting(key, value) {
    setSetting(key, value);
    // Optionally, display a message
    if (messageDiv) {
      messageDiv.textContent = "Settings saved successfully.";
      messageDiv.style.display = "block";

      setTimeout(() => {
        messageDiv.style.display = "none";
      }, 3000);
    }
  }

  if (splitSentencesCheckbox) {
    splitSentencesCheckbox.addEventListener("change", (e) => {
      saveSetting("split_sentences", e.target.checked);
    });
  }

  if (preserveFormattingCheckbox) {
    preserveFormattingCheckbox.addEventListener("change", (e) => {
      saveSetting("preserve_formatting", e.target.checked);
    });
  }

  if (removeTwitterTranslateButtonCheckbox) {
    removeTwitterTranslateButtonCheckbox.addEventListener("change", (e) => {
      saveSetting("remove_twitter_translate_button", e.target.checked);
    });
  }

  if (autoTranslateInStatusCheckbox) {
    autoTranslateInStatusCheckbox.addEventListener("change", (e) => {
      saveSetting("auto_translate_in_status", e.target.checked);
    });
  }

  // Save settings for non-checkbox inputs on form submit
  const optionsForm = document.getElementById("options-form");
  if (optionsForm) {
    optionsForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      await setSetting("api_key", apiKeyInput.value);
      await setSetting("target_language", targetLanguageSelect.value);
      await setSetting("formality", formalitySelect.value);

      // Display success message
      if (messageDiv) {
        messageDiv.textContent = "Settings saved successfully.";
        messageDiv.style.display = "block";

        setTimeout(() => {
          messageDiv.style.display = "none";
        }, 3000);
      }
    });
  }
});
