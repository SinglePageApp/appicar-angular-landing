import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

import { StoreService } from '../../services/store.service';
import Store from '../../models/Store';
import Translatable from '../../models/Translatable';
import Menu from '../../models/Menu';

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
  public store: Store;
  // The Google Map's current URL to use.
  public mapsURL: SafeResourceUrl;
  // The current language.
  public language: string;

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

    this.translate.onLangChange.subscribe((data) => {
      this.language = data.lang;
    });

    // Get route's parameters.
    this.sub = this.route.params.subscribe(params => {
      this.uri = params['uri'];

      this.storeService.getStore(this.uri).subscribe(({ data }) => {
        this.store = <Store> Object.assign(this.store, data.store);
        this.store.setDescription(Object.assign(new Translatable(''), data.store.description));
        // If the store has a menu, load it.
        if (data.store.menu) {
          const menu = new Menu();
          menu.addJsonItems(data.store.menu.items);
          this.store.setMenu(menu);
        }
        // Google Map's URL sanitization.
        this.mapsURL = this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://www.google.com/maps/embed/v1/search?key=AIzaSyDqpxYbmMQKzjaVZNlvgReQ-Yq7m24Vkds&q=' +
           this.store.getCoords() + '&language=en'
        );
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
