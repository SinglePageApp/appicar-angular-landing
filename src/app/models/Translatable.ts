/**
 * class :: Translatable
 *
 * Represents a translatable field.
*/
export default class Translatable {
  private es: string; /** The text description in Engish. */
  private en: string; /** The text description in Spanish. */
  private it: string; /** The text description in Italian. */

  /**
   * Constructor.
   *
   * @param en The text description in Engish.
   * @param es The text description in Spanish.
   * @param it The text description in Italian.
   */
  public constructor(en: string, es?: string, it?: string) {
    this.en = en;
    this.es = es || null;
    this.it = it || null;
  }

  /**
   * Gets the text translated into the given language.
   *
   * @param language The language's code string, i.e: 'en', 'es' or 'it'.
   * @returns string The translated text.
   */
  public getText(language: string) {
    return this[language];
  }

  /**
   * Sets the translated text.
   *
   * @param language The language's code string, i.e: 'en', 'es' or 'it'.
   * @param text The translated text.
   */
  public setText(language: string, text: string) {
    this[language] = text;
  }
}
