// src/translator/translator.js

class Translator {
  constructor() {}

  async translateText(text, options) {
    throw new Error("translateText method must be implemented");
  }
}

class DeepLTranslator extends Translator {
  constructor(apiKey) {
    super();
    this.apiKey = apiKey;
    this.urls = [
      "https://api-free.deepl.com/v2/translate",
      "https://api.deepl.com/v2/translate",
    ];
  }

  async translateText(text, options = {}) {
    const {
      targetLanguage = "EN-US",
      formality = "default",
      splitSentences = 0,
      preserveFormatting = 0,
    } = options;

    let lastError;

    for (const url of this.urls) {
      try {
        const params = new URLSearchParams();
        params.append("auth_key", this.apiKey);
        params.append("text", text);
        params.append("target_lang", targetLanguage);
        params.append("formality", formality);
        params.append("split_sentences", splitSentences);
        params.append("preserve_formatting", preserveFormatting);
        params.append("tag_handling", "html");
        params.append("ignore_tags", "img");

        const response = await fetch(url, {
          method: "POST",
          body: params,
        });
        const data = await response.json();
        if (response.ok) {
          return data.translations[0].text;
        } else {
          // Use data.message or data['message'] to access the error message
          lastError = new Error(
            data.message || data["message"] || "Translation failed"
          );
        }
      } catch (error) {
        lastError = error;
      }
    }
    throw lastError;
  }
}

module.exports = {
  Translator,
  DeepLTranslator,
};
