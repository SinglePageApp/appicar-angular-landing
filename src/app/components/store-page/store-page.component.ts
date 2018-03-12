import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

import { StoreService } from '../../services/store.service';
import Store from '../../models/Store';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css']
})
export class StorePageComponent implements OnInit, OnDestroy {
  // The store's uri parameter.
  private uri: string;
  // Subscriber.
  private sub: any;
  // The current store to display.
  public store: any;

  public description: string;

  public mapsURL: SafeResourceUrl;

  /**
   * Constructor.
   *
   * @param route The injected ActivatedRoute instance.
   * @param storeService The injected StoreService instance.
   */
  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    public translate: TranslateService,
    private storeService: StoreService
  ) {
    this.store = new Store();
  }

  ngOnInit() {
    // Scroll to top.
    window.scrollTo(0, 0);
    // Get route's parameters.
    this.sub = this.route.params.subscribe(params => {
      this.uri = params['uri'];
      this.storeService.getStore(this.uri).subscribe(({ data }) => {
        this.store = <Store> Object.assign(this.store, data.store);
        this.mapsURL = this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://www.google.com/maps/embed/v1/search?key=AIzaSyDqpxYbmMQKzjaVZNlvgReQ-Yq7m24Vkds&q=' +
           this.store.getCoords() + '&language=en'
        );
        this.description = this.store.getDescription(this.translate.currentLang);
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
