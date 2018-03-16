import Translatable from './Translatable';

export default abstract class TranslatableText {
  /** The translatable description. */
  protected description: Translatable;

  /**
   * Constructor.
   *
   * @param description The description in translatable form.
   */
  public constructor(description: Translatable) {
    this.description = description;
  }

  /**
   * Gets the description in the given language.
   *
   * @param language The language's code string, i.e: 'en', 'es' or 'it'.
   */
  public getDescription(language: string): string {
    return this.description[language];
  }

  /**
   * Sets the description in translatable form.
   *
   * @param description The description in translatable form.
   */
  public setDescription(description: Translatable) {
    this.description = description;
  }
}
