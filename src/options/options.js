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
  const messageDiv = document.getElementById("message");

  // Load settings
  const apiKey = await getSetting("api_key");
  const targetLanguage = (await getSetting("target_language")) || "EN-US";
  const formality = (await getSetting("formality")) || "default";
  const splitSentences = (await getSetting("split_sentences")) !== false;
  const preserveFormatting = (await getSetting("preserve_formatting")) || false;
  const removeTwitterTranslateButton =
    (await getSetting("remove_twitter_translate_button")) !== false;

  if (apiKeyInput) apiKeyInput.value = apiKey || "";
  if (targetLanguageSelect) targetLanguageSelect.value = targetLanguage;
  if (formalitySelect) formalitySelect.value = formality;
  if (splitSentencesCheckbox) splitSentencesCheckbox.checked = splitSentences;
  if (preserveFormattingCheckbox)
    preserveFormattingCheckbox.checked = preserveFormatting;
  if (removeTwitterTranslateButtonCheckbox)
    removeTwitterTranslateButtonCheckbox.checked = removeTwitterTranslateButton;

  // Save settings
  const optionsForm = document.getElementById("options-form");
  if (optionsForm) {
    optionsForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      await setSetting("api_key", apiKeyInput.value);
      await setSetting("target_language", targetLanguageSelect.value);
      await setSetting("formality", formalitySelect.value);
      await setSetting("split_sentences", splitSentencesCheckbox.checked);
      await setSetting(
        "preserve_formatting",
        preserveFormattingCheckbox.checked
      );
      await setSetting(
        "remove_twitter_translate_button",
        removeTwitterTranslateButtonCheckbox.checked
      );

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
