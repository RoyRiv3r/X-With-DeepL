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

  // Get references to the new checkboxes
  const autoTranslateInQuotesCheckbox = document.getElementById(
    "auto-translate-in-quotes"
  );
  const autoTranslateInHomeCheckbox = document.getElementById(
    "auto-translate-in-home"
  );
  const highRateWarningDiv = document.getElementById("high-rate-warning");

  const messageDiv = document.getElementById("message");
  const usageDiv = document.getElementById("usage-data");

  // Helper function to parse stored values to booleans
  function parseBoolean(value, defaultValue = false) {
    if (value === undefined || value === null) {
      return defaultValue;
    }
    return value === true || value === "true";
  }

  // Load settings
  const apiKey = await getSetting("api_key");
  const targetLanguage = (await getSetting("target_language")) || "EN-US";
  const formality = (await getSetting("formality")) || "default";
  const splitSentences = parseBoolean(
    await getSetting("split_sentences"),
    true
  );
  const preserveFormatting = parseBoolean(
    await getSetting("preserve_formatting"),
    true
  );
  const removeTwitterTranslateButton = parseBoolean(
    await getSetting("remove_twitter_translate_button"),
    true
  );
  const autoTranslateInStatus = parseBoolean(
    await getSetting("auto_translate_in_status"),
    false
  );

  // Load settings for the new checkboxes with default values
  const autoTranslateInQuotes = parseBoolean(
    await getSetting("auto_translate_in_quotes"),
    false
  );
  const autoTranslateInHome = parseBoolean(
    await getSetting("auto_translate_in_home"),
    false
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

  if (autoTranslateInQuotesCheckbox)
    autoTranslateInQuotesCheckbox.checked = autoTranslateInQuotes;
  if (autoTranslateInHomeCheckbox)
    autoTranslateInHomeCheckbox.checked = autoTranslateInHome;

  // Function to check if warning should be displayed
  function checkForHighRateWarning() {
    const showWarning =
      autoTranslateInQuotesCheckbox.checked ||
      autoTranslateInHomeCheckbox.checked ||
      autoTranslateInStatusCheckbox.checked;

    if (showWarning) {
      highRateWarningDiv.style.display = "block";
    } else {
      highRateWarningDiv.style.display = "none";
    }
  }

  // Add event listeners to checkboxes
  autoTranslateInQuotesCheckbox.addEventListener(
    "change",
    checkForHighRateWarning
  );
  autoTranslateInHomeCheckbox.addEventListener(
    "change",
    checkForHighRateWarning
  );
  autoTranslateInStatusCheckbox.addEventListener(
    "change",
    checkForHighRateWarning
  );

  // Initialize warning visibility
  checkForHighRateWarning();

  // Fetch and display usage data if API key is present
  if (apiKey && usageDiv) {
    fetchUsageData(apiKey);
  } else if (usageDiv) {
    usageDiv.textContent = "API Key missing, please enter one.";
  }

  // Save settings for all inputs on form submit
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
      await setSetting(
        "auto_translate_in_status",
        autoTranslateInStatusCheckbox.checked
      );
      await setSetting(
        "auto_translate_in_quotes",
        autoTranslateInQuotesCheckbox.checked
      );
      await setSetting(
        "auto_translate_in_home",
        autoTranslateInHomeCheckbox.checked
      );

      // Display success message
      if (messageDiv) {
        messageDiv.textContent =
          "Settings saved successfully.\nPlease refresh the Twitter page.";
        messageDiv.style.display = "block";
        messageDiv.style.whiteSpace = "pre-line";

        setTimeout(() => {
          messageDiv.style.display = "none";
        }, 3000);
      }

      // Fetch and display usage data after saving API key
      if (apiKeyInput && apiKeyInput.value && usageDiv) {
        fetchUsageData(apiKeyInput.value);
      } else if (usageDiv) {
        usageDiv.textContent = "";
      }

      // Check for high rate warning after saving
      checkForHighRateWarning();
    });
  }
});

// Function to fetch usage data from DeepL API
function fetchUsageData(apiKey) {
  const usageDiv = document.getElementById("usage-data");

  if (!usageDiv) {
    console.error("Usage div not found");
    return;
  }

  if (!apiKey) {
    usageDiv.textContent = "Please enter an API key to view usage data.";
    return;
  }

  usageDiv.textContent = "Fetching usage data...";

  // Try the paid API endpoint first
  fetchUsageFromEndpoint("https://api.deepl.com/v2/usage", apiKey)
    .catch((error) => {
      // If error message indicates to use the free endpoint, try the free API
      if (
        error.message.includes("Wrong endpoint") &&
        error.message.includes("https://api-free.deepl.com")
      ) {
        return fetchUsageFromEndpoint(
          "https://api-free.deepl.com/v2/usage",
          apiKey
        );
      } else {
        throw error;
      }
    })
    .then((data) => {
      if (data) {
        displayUsageData(data);
      }
    })
    .catch((error) => {
      console.error("Error fetching usage data:", error);
      const usageDiv = document.getElementById("usage-data");
      if (usageDiv) {
        usageDiv.textContent =
          "Failed to fetch usage data. Please check your API key.";
      }
    });
}

// Helper function to fetch usage data from a specific endpoint
function fetchUsageFromEndpoint(endpoint, apiKey) {
  return fetch(endpoint, {
    headers: {
      Authorization: "DeepL-Auth-Key " + apiKey.trim(),
    },
  })
    .then((response) => {
      if (!response.ok) {
        // Try to parse error message
        return response.json().then((errorData) => {
          const errorMessage = errorData.message || "Unknown error.";
          throw new Error(errorMessage);
        });
      }
      return response.json();
    })
    .then((data) => data);
}

// Function to display usage data on the options page
function displayUsageData(data) {
  const usageDiv = document.getElementById("usage-data");
  if (usageDiv) {
    const { character_count, character_limit } = data;
    const usagePercent =
      character_limit > 0
        ? ((character_count / character_limit) * 100).toFixed(2)
        : "N/A";

    usageDiv.innerHTML = `
      <p>${character_count.toLocaleString()} / ${character_limit.toLocaleString()} characters used (${usagePercent}%)</p>
    `;
  }
}
