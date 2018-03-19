import TranslatableText from "./TranslatableText";

/** Maximum number of points constant. */
const MAX_POINTS = 5;

/**
 * class :: Scorable
 *
 * Represents an object which can be scored.
 */
export default abstract class Scorable extends TranslatableText {
  /** The date when the review was performed. */
  protected date: Date;
  /** The review's number of points (from 0 to 5). */
  protected points: number;

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
    return this.points > 0 ? new Array(this.points) : null;
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
