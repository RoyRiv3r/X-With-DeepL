// src/translator/translator.js
import { debugLog } from "../utils/logger.js";

export class Translator {
  constructor() {}

  async translateText(text, options) {
    throw new Error("translateText method must be implemented");
  }
}

export class DeepLTranslator extends Translator {
  constructor(apiKey) {
    super();
    this.apiKey = apiKey;
    this.urls = [
      "https://api-free.deepl.com/v2/translate",
      "https://api.deepl.com/v2/translate",
    ];
  }

  async translateText(htmlContent, options = {}) {
    const {
      targetLanguage = "EN-US",
      formality = "default",
      splitSentences = "1",
      preserveFormatting = "1",
    } = options;

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");

    // Get all text nodes
    const textNodes = [];
    const walker = document.createTreeWalker(
      doc.body,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );

    let node;
    while ((node = walker.nextNode())) {
      if (node.nodeValue.trim() !== "") {
        textNodes.push(node);
      }
    }

    // Extract texts
    const textsToTranslate = textNodes.map((node) => node.nodeValue);

    // Translate texts
    let translatedTexts;
    try {
      translatedTexts = await this.translateTexts(textsToTranslate, {
        targetLanguage,
        formality,
        splitSentences,
        preserveFormatting,
      });
    } catch (error) {
      throw new Error(`Translation failed: ${error.message}`);
    }

    // Replace original text with translated text
    textNodes.forEach((node, index) => {
      node.nodeValue = translatedTexts[index];
    });

    // Handle translatable attributes (optional)
    const attributesToTranslate = getTranslatableAttributes(doc.body);
    if (attributesToTranslate.length > 0) {
      const attributeTexts = attributesToTranslate.map(
        ({ attr }) => attr.value
      );

      // Translate attribute texts
      let translatedAttributeTexts;
      try {
        translatedAttributeTexts = await this.translateTexts(attributeTexts, {
          targetLanguage,
          formality,
          splitSentences,
          preserveFormatting,
        });
      } catch (error) {
        throw new Error(`Translation failed: ${error.message}`);
      }

      // Replace attribute texts
      attributesToTranslate.forEach(({ node, attr }, index) => {
        node.setAttribute(attr.name, translatedAttributeTexts[index]);
      });
    }

    // Serialize back to HTML
    const translatedHtmlContent = doc.body.innerHTML;

    return translatedHtmlContent;
  }

  // Helper function to translate multiple texts with URL fallback
  async translateTexts(texts, options) {
    const { targetLanguage, formality, splitSentences, preserveFormatting } =
      options;

    let lastError;

    for (const url of this.urls) {
      try {
        const params = new URLSearchParams();
        params.append("auth_key", this.apiKey);
        texts.forEach((text) => params.append("text", text));
        params.append("target_lang", targetLanguage);
        params.append("formality", formality);
        params.append("split_sentences", splitSentences);
        params.append("preserve_formatting", preserveFormatting);

        debugLog("Sending request to DeepL API:", {
          url,
          params: params.toString(),
        });

        const response = await fetch(url, {
          method: "POST",
          body: params,
        });

        const data = await response.json();

        debugLog("Received response from DeepL API:", data);

        if (response.ok) {
          return data.translations.map((translation) => translation.text);
        } else {
          lastError = new Error(data.message || "Translation failed");
          debugLog("Translation error:", lastError.message);
          // Optionally handle specific error cases or logging
        }
      } catch (error) {
        lastError = error;
        debugLog("Caught error during translation:", error);
        // Optionally handle specific error cases or logging
      }
    }

    // If all attempts failed, throw the last error
    throw lastError;
  }
}

// Helper function to get translatable attributes
function getTranslatableAttributes(node) {
  const attributes = [];
  if (node.hasAttributes()) {
    for (let attr of node.attributes) {
      if (["alt", "title"].includes(attr.name) && attr.value.trim() !== "") {
        attributes.push({ node, attr });
      }
    }
  }
  for (let child of node.children) {
    attributes.push(...getTranslatableAttributes(child));
  }
  return attributes;
}
