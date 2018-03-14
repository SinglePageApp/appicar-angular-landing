import Translatable from './Translatable';
import TranslatableText from './TranslatableText';

/** Maximum number of points constant. */
const MAX_POINTS = 5;

/**
 * class :: Review
 *
 * Represents a client's review about a store.
 */
export default class Review extends TranslatableText {
  /** The reviewer's id. */
  private clientId: string;
  /** The reviewer's name. */
  private clientName: string;
  /** The reviewer's CDN URL of his picture. */
  private clientPicture: string;
  /** The date when the review was performed. */
  private date: Date;
  /** The review's number of points (from 0 to 5). */
  private points: number;

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
    text?: Translatable,
    points?: number
  ) {
    super(text || null);
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

  public setClientId(value: string) {
    this.clientId = value;
  }

  /**
   * Gets the reviewer's name.
   *
   * @returns string The reviewer's name.
   */
  public getClientName(): string {
    return this.clientName;
  }

  public setClientName(value: string) {
    this.clientName = value;
  }

  /**
   * Gets the reviewer's CDN URL of his picture.
   *
   * @returns string The reviewer's CDN URL of his picture.
   */
  public getClientPicture(): string {
    return this.clientPicture;
  }

  public setClientPicture(value: string) {
    this.clientPicture = value;
  }

  /**
   * Gets the date when the review was performed.
   *
   * @returns Date The date when the review was performed.
   */
  public getDate(): Date {
    return this.date;
  }

  /**
   * Gets the review's number of points (from 0 to 5).
   *
   * @returns number The review's number of points (from 0 to 5).
   */
  public getPoints(): number {
    return this.points;
  }

  /**
   * Sets the review's number of points (from 0 to 5).
   *
   * @param value The review's number of points (an integer from 0 to 5).
   */
  public setPoints(value: number) {
    // Points must be in the range 0-5.
    if (value >= 0 && value < 6) {
      this.points = value;
    } else {
      // tslint:disable-next-line:quotemark
      throw new OutOfRangeError("Review's points must be an integer between 0 and 5.");
    }
  }

  /**
   * Gets an array of length equals to number of points.
   *
   * @returns any An array of number of points length.
   */
  public getStars(): Array<number> {
    return new Array(this.points);
  }

  /**
   * Gets an array of length equals to number of lacking points to max puntuation.
   *
   * @returns any An array of number of points length.
   */
  public getLackingStars(): Array<number> {
    return new Array(MAX_POINTS - this.points);
  }
}

/**
 * class :: OutOfRangeError
 *
 * Represents and error caused by an integer that it's out of the specified range.
 */
class OutOfRangeError extends Error {}
