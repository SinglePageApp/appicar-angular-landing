import Translatable from './Translatable';

export default abstract class TranslatableText {
  /** The translatable text. */
  protected text: Translatable;

  /**
   * Constructor.
   *
   * @param text The text in translatable form.
   */
  public constructor(text: Translatable) {
    this.text = text;
  }

  /**
   * Gets the text in the given language.
   *
   * @param language The language's code string, i.e: 'en', 'es' or 'it'.
   */
  public getText(language: string): string {
    return this.text[language];
  }

  /**
   * Sets the text in translatable form.
   *
   * @param text The text in translatable form.
   */
  public setText(text: Translatable) {
    this.text = text;
  }
}
