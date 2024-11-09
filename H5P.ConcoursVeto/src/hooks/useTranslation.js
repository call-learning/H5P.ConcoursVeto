import { useContext } from 'react';
import { TranslationsContext } from '../contexts/TranslationsContext';

export const useTranslations = () => {
  const allTranslations = useContext(TranslationsContext);

  /**
   * Fetches the translation for a given key and replaces arguments if provided.
   * @param {string} key - The translation key.
   * @param {object} args - The arguments to replace in the translation.
   * @returns {string} The translated and formatted text.
   */
  const translate = (key, args = {}) => {
    // Get the translation or fall back to showing the key in brackets
    let text = allTranslations && key in allTranslations ? allTranslations[key] : `[${key}]`;

    // Replace arguments if provided
    Object.keys(args).forEach(arg => {
      text = text.replace(`:${arg}`, args[arg]);
    });

    return text;
  };

  return { translate };
};
