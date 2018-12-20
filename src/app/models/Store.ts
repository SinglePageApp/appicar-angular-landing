import Translatable from './Translatable';
import Menu from './Menu';
import Review from './Review';
import Scorable from './Scorable';

/**
 * class :: Store
 *
 * Represents a commercial store.
 */
export default class Store extends Scorable {
  /** The store's URI parameter of the URL. */
  private URI: string;
  /** The store's name. */
  private name: string;
  /** The store's category, i.e: 'Bar', 'Restaurant', 'Bar / Restaurant', etc. */
  private category: string;
  /** The store's physical address. */
  private address: string;
  /** The city where the store is located. */
  private city: string;
  /** The country where the store is located. */
  private country: string;
  /** If true, the store will be shown in the featured stores section. */
  private featured: boolean;
  /** The latitude coordenate where the store is located. */
  private lat: number;
  /** The longitude coordenate where the store is located. */
  private lng: number;
  /** The store picture's CDN URL. */
  private image: string;
  /** The store's menu. */
  private menu: Menu;
  /** The clients reviews about the store. */
  private reviews: Review[];

  /**
   * Constructor.
   */
  public constructor(description?: Translatable) {
    super(description || new Translatable(''));
    this.date = new Date();
    this.menu = null;
    this.reviews = [];
  }

  public getURI(): string {
    return this.URI;
  }

  public setURI(value: string) {
    this.URI = value;
  }

  public getName(): string {
    return this.name;
  }

  public setName(value: string) {
    this.name = value;
  }

  public getCategory(): string {
    return this.category;
  }

  public setCategory(value: string) {
    this.category = value;
  }

  public getAddress(): string {
    return this.address;
  }

  public setAddress(value: string) {
    this.address = value;
  }

  public getCity(): string {
    return this.city;
  }

  public getDate(): Date {
    return this.date;
  }

  public isFeatured(): boolean {
    return this.featured;
  }

  public setFeatured(value: boolean) {
    this.featured = value;
  }

  public getCoords(): string {
    return this.lat + ',' +  this.lng;
  }

  public getLat(): number {
    return this.lat;
  }

  public setLat(value: number) {
    this.lat = value;
  }

  public getLng(): number {
    return this.lng;
  }

  public setLng(value: number) {
    this.lng = value;
  }

  public getCountry(): string {
    return this.country;
  }

  public setCountry(value: string) {
    this.country = value;
  }

  public getLocation(): string {
    return this.city + ', ' + this.country;
  }

  public getImage(): string {
    return this.image;
  }

  public setImage(value: string) {
    this.image = value;
  }

  /**
   * Checks if the store has a menu loaded.
   *
   * @returns boolean Is true if the store has a menu loaded.
   */
  public hasMenu(): boolean {
    return this.menu != null;
  }

  public getMenu(): Menu {
    return this.menu;
  }

  public setMenu(value: Menu) {
    this.menu = value;
  }

  /**
   * Gets all the clients reviews about the store.
   *
   * @returns Review[] An array containing all the clients reviews about the store.
   */
  public getReviews(): Review[] {
    return this.reviews;
  }

  /**
   * Sets the clients reviews about the store.
   *
   * @param value An array containing the clients reviews about the store.
   */
  public setReviews(reviews: Review[]) {
    this.reviews = reviews;
  }

  /**
   * Checks if a store has reviews loaded.
   *
   * @returns boolean Is true if the store has at least 1 review loaded.
   */
  public hasReviews() {
    return this.reviews.length > 0;
  }

  /**
   * Adds an individual review about the store.
   *
   * @param review The client review about the store.
   */
  public addReview(review: Review) {
    this.reviews.push(review);
  }

  /**
   * Sets the clients reviews about the store from a JSON object.
   *
   * @param reviews A JSON object containing the clients reviews about the store.
   */
  public setJsonReviews(reviews: any) {
    // Clear property before start pushing reviews into it.
    this.reviews = [];
    let review: Review;
    // Loop over all individual reviews in JSON format.
    reviews.forEach(reviewJson => {
      review = Object.assign(new Review(), reviewJson);
      review.setDescription(Object.assign(new Translatable(''), reviewJson.text));
      this.addReview(review);
    });
  }
}
