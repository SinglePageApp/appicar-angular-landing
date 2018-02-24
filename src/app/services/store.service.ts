import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable()
export class StoreService {

  constructor(private apollo: Apollo) { }

  /** GET stores from the server */
  getStores(): any {
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

    return this.apollo.watchQuery<any>({query: query}).valueChanges;
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

}
