import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import MenuItem from '../models/MenuItem';
import { Observable } from 'apollo-link';
import { Observable as RxObservable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class StoreService {

  private loading: boolean;
  private stores: any;
  private subject: Subject<any>;

  constructor(private apollo: Apollo) {
    this.loading = true;
    this.stores = [];
    this.subject = new Subject<any>();
  }

  /**
   * Gets observable stores.
   *
   * @returns rxjs/Observable<any> An observable reference of stores.
  */
  public getStores(): RxObservable<any> {
    return this.subject.asObservable();
  }

  /** GET stores from the server */
  public findStores(): any {
    this.loading = true;

    const query = gql`
      {
        stores {
          name
          description
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
        stores: this.stores
      });
    });
  }

  getFeaturedStores(): any {
    const query = gql`
      {
        featuredStores {
          name
          description
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
   */
  findStoresByMenuItem(menuItem: MenuItem) {
    this.loading = true;

    const query = gql`
      {
        stores (menuItemType: "${menuItem.toString()}", menuItemCategory: "${menuItem.getCategory()}") {
          name
          description
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
        stores: this.stores
      });
    });
  }
}
