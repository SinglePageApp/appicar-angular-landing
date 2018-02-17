import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { StoresSectionComponent } from './components/stores-section/stores-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { ReviewsSectionComponent } from './components/reviews-section/reviews-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { CopyrightComponent } from './components/copyright/copyright.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoresSectionComponent,
    ServicesSectionComponent,
    ReviewsSectionComponent,
    ContactSectionComponent,
    FooterComponent,
    CopyrightComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
