import Item from './Item';

/**
 * class :: MenuItem
 *
 * Represents an individual item from the store's menu.
*/
export default abstract class MenuItem extends Item {
  /** The item's category, i.e: "Pizza", "Snack", "Salad", etc. */
  protected category: string;

  /**
   * Returns a string representation of this object.
   *
   * @returns string A string representation of this object.
  */
  public toString(): string {
    return this.constructor.name.toLowerCase();
  }
  /**
   * Gets the menu item's type action, i.e: food -> "eat", drink -> "drink".
   *
   * @returns string The item's type, i.e: food -> "eat", drink -> "drink".
   * */
  public abstract getAction(): string;

  /**
   * Gets the item's category, i.e: "Pizza", "With alcohol", "Snack", "Salad", etc.
   *
   * @returns string The item's category, i.e: "Pizza", "With alcohol", "Snack", "Salad", etc.
  */
  public getCategory(): string {
    return this.category;
  }

  /**
   * Sets the item's category, i.e: "Pizza", "With alcohol", "Snack", "Salad", etc.
   *
   * @returns string The item's category, i.e: "Pizza", "With alcohol", "Snack", "Salad", etc.
  */
  public setCategory(category: string) {
    this.category = category;
  }

}
