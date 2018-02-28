import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'nav-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.css']
})

export class FlagsComponent {

  translate: TranslateService;

  constructor(translate: TranslateService) {
    this.translate = translate;
  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }

}
