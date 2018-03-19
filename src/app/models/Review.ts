import Translatable from './Translatable';
import TranslatableText from './TranslatableText';
import Scorable from './Scorable';

/**
 * class :: Review
 *
 * Represents a client's review about a store.
 */
export default class Review extends Scorable {
  /** The reviewer's id. */
  private clientId: string;
  /** The reviewer's name. */
  private clientName: string;
  /** The reviewer's CDN URL of his picture. */
  private clientPicture: string;

  /**
   * Constructor.
   *
   * @param clientId The reviewer's id.
   * @param clientName The reviewer's name.
   * @param clientPicture The reviewer's CDN URL of his picture.
   * @param date The date when the review was performed.
   * @param points The review's number of points (from 0 to 5).
   */
  public constructor(
    clientId?: string,
    clientName?: string,
    clientPicture?: string,
    description?: Translatable,
    points?: number
  ) {
    super(description || null);
    this.date = new Date();
    this.clientId = clientId || null;
    this.clientName = clientName || null;
    this.clientPicture = clientPicture || null;
    this.setPoints(points || 0);
  }

  /**
   * Gets the reviewer's ID.
   *
   * @returns string The reviewer's ID.
   */
  public getClientId(): string {
    return this.clientId;
  }

  /**
   * Sets the reviewer's ID.
   *
   * @param id The reviewer's ID.
   */
  public setClientId(id: string) {
    this.clientId = id;
  }

  /**
   * Gets the reviewer's name.
   *
   * @returns string The reviewer's name.
   */
  public getClientName(): string {
    return this.clientName;
  }

  /**
   * Sets the reviewer's name.
   *
   * @param name The reviewer's name.
   */
  public setClientName(name: string) {
    this.clientName = name;
  }

  /**
   * Gets the reviewer's CDN URL of his picture.
   *
   * @returns string The reviewer's CDN URL of his picture.
   */
  public getClientPicture(): string {
    return this.clientPicture;
  }

  /**
   * Sets the reviewer's CDN URL of his picture.
   *
   * @param picture An string containing the reviewer's CDN URL of his picture.
   */
  public setClientPicture(picture: string) {
    this.clientPicture = picture;
  }
}
