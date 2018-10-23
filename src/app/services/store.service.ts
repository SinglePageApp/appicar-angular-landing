import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import MenuItem from '../models/MenuItem';
import { Observable ,  Subject } from 'rxjs';


/** Limit of stores per request. */
const LIMIT = 24;

@Injectable()
export class StoreService {

  public menuItem: MenuItem;

  private loading: boolean;
  private stores: any;
  private subject: Subject<any>;
  private searchFrom404: boolean;
  /** It holds the count of skips for pagination. */
  private skipCounter: number;
  /** The total number of stores. */
  private numStores: number;

  constructor(private apollo: Apollo) {
    this.skipCounter = 0;
    this.loading = true;
    this.stores = [];
    this.subject = new Subject<any>();
    this.searchFrom404 = false;
    this.numStores = 0;
  }

  /**
   * Gets the total number of stores.
   *
   * @returns integer The total number of stores.
   */
  public getTotalNumber(): number {
    return this.numStores;
  }
  /**
   * Gets the total number of skipped stores by the previous requests.
   *
   * @returns integer The total number of skipped stores.
   */
  public getSkipCount(): number {
    return this.skipCounter;
  }

  /**
   * Resets the skip counter.
   */
  public resetSkipCounter() {
    this.skipCounter = 0;
  }

  /**
   * Tells if a search from SearchboxComponent was perfomed from inside an Error404Component.
   *
   * @returns boolean true if the search was performed from inside an Error404Component.
   */
  public isSearchFrom404() {
    return this.searchFrom404;
  }

  /**
   * Resets the isSearchFrom404() method to its original state.
   */
  public resetSearchFrom404State() {
    this.searchFrom404 = false;
  }

  /**
   * Gets an observable of the store retrieve from the API server.
   *
   * @param URI The stores URI parameter.
   */
  public getStore(URI: string): Observable<any> {
    const query = gql`
      {
        store (URI: "${URI}") {
          name
          description {
            en
            es
            it
          }
          points
          category
          address
          city
          country
          lat
          lng
          image
          menu {
            items {
              food {
                name {
                  en
                  es
                  it
                }
                category
                paymentMethods
                picture
                price {
                  currency
                  value
                }
              }
              drink {
                name {
                  en
                  es
                  it
                }
                category
                paymentMethods
                picture
                price {
                  currency
                  value
                }
              }
            }
          }
          reviews {
            clientId
            clientName
            clientPicture
            date
            points
            text {
              en
              es
              it
            }
          }
        }
      }
    `;

    return this.apollo.watchQuery<any>({query: query}).valueChanges;
  }
  /**
   * Gets observable stores.
   *
   * @returns rxjs/Observable<any> An observable reference of stores.
  */
  public getStores(): Observable<any> {
    return this.subject.asObservable();
  }

  /** GET stores from the server */
  public findStores(): any {
    this.searchFrom404 = false;
    this.loading = true;
    this.menuItem = null;

    const query = gql`
      {
        stores (skip: ${this.skipCounter}, limit: ${LIMIT}) {
          URI
          name
          category
          address
          city
          image
        }
        storesCount
      }
    `;

    this.apollo.watchQuery<any>({query: query}).valueChanges.subscribe(({ data, loading }) => {
      this.loading = false;

      if (this.skipCounter >= LIMIT) {
        this.stores = this.stores.concat(data.stores);
      } else {
        this.stores = data.stores;
      }

      this.numStores = data.storesCount;
      this.skipCounter += LIMIT;

      this.subject.next({
        isLoading: this.loading,
        stores: this.stores,
        menuItem: this.menuItem
      });
    });
  }

  public getFeaturedStores(): any {
    const query = gql`
      {
        featuredStores {
          URI
          name
          category
          address
          city
          image
        }
      }
    `;

    return this.apollo.watchQuery<any>({query: query}).valueChanges;
  }

  /**
   * Gets all the stores from the API server that have the given item in their menues.
   *
   * @param menuItem The menu's item used to do the search.
   * @param language The current language used.
   */
  public findStoresByMenuItem(menuItem: MenuItem, language: string, searchFrom404?: boolean) {
    this.searchFrom404 = searchFrom404 || false;
    this.loading = true;
    this.menuItem = menuItem;

    const query = gql`
      {
        stores (menuItemType: "${menuItem.toString()}", menuItemName: "${menuItem.getCategory()}", language: "${language}") {
          URI
          name
          category
          address
          city
          image
        }
      }
    `;

    this.apollo.watchQuery<any>({query: query}).valueChanges.subscribe(({ data, loading }) => {
      this.loading = false;
      this.stores = data.stores;
      this.subject.next({
        isLoading: this.loading,
        stores: this.stores,
        menuItem: this.menuItem
      });
    });
  }
}
