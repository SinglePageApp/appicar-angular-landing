import Translatable from './Translatable';
import Menu from './Menu';

/**
 * class :: Store
 *
 * Represents a commercial store.
 */
export default class Store {
  /** The store's URI parameter of the URL. */
  private URI: string;
  /** The store's name. */
  private name: string;
  /** The store's creation date. */
  private date: Date;
  /** The store's category, i.e: 'Bar', 'Restaurant', 'Bar / Restaurant', etc. */
  private category: string;
  /** The store's description. Informative text about the specifics of the store. */
  private description: Translatable;
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

  public getDescription(language: string): string {
    return this.description.getText(language);
  }

  public setDescription(value: Translatable) {
    this.description = value;
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

  public getMenu(): Menu {
    return this.menu;
  }

  public setMenu(value: Menu) {
    this.menu = value;
  }
}
