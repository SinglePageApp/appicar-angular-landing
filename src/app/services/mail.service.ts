import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import gql from 'graphql-tag';

/**
 * class :: MailService
 *
 * Service for sending e-mails.
 */
@Injectable()
export class MailService {

  /**
   * Constructor.
   *
   * @param apollo The injected Apollo instance.
   */
  constructor(private apollo: Apollo) {}

  /**
   * Sends an e-mail request to the API server.
   *
   * @param name The sender's name.
   * @param email The sender's e-mail address.
   * @param subject The e-mail's subject.
   * @param message The e-mail's message.
   */
  public send(name: string, email: string, subject: string, message: string): Observable<any> {
    const mutation = gql`
      mutation Mail {
        sendEmail(
          from: "${name} <${email}>"
          subject: "${subject}"
          text: "${message}"
        )
      }
    `;

    return this.apollo.mutate({ mutation: mutation });
  }
}
