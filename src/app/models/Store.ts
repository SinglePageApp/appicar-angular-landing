/**
 * class :: Store
 *
 * Represents a commercial store.
*/
export default class Store {
  /** The store's name. */
  private name: string;
  /** The store's creation date. */
  private date: Date;
  /** The store's category, i.e: "Bar", "Restaurant", "Bar / Restaurant", etc. */
  private category: string;
  /** The store's description. Informative text about the specifics of the store. */
  private description: string;
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

  public getName(): string {
    return this.name;
  }
}
