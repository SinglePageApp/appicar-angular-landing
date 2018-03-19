import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import Menu from '../../../models/Menu';

@Component({
  selector: 'app-store-menu',
  templateUrl: './store-menu.component.html',
  styleUrls: ['./store-menu.component.css']
})
/**
 * class :: StoreMenuComponent
 *
 * Represents the store's menu and its items.
 */
export class StoreMenuComponent {
  // Component's tag property menu.
  @Input() menu: Menu;
  // Current language.
  public language: string;
  // The current currency.
  public currency: string;

  /**
   * Constructor.
   *
   * @param translate The injected TranslateService instance.
   */
  constructor(private translate: TranslateService) {
    this.currency = 'ARS';
    // Initial language assign.
    this.language = translate.currentLang;
    // On language change, update language property.
    this.translate.onLangChange.subscribe((data) => {
      this.language = data.lang;
    });
  }
}
