import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RouterModule, Routes } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { StoreService } from './services/store.service';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HomeStoresComponent } from './components/home-page/home-stores/home-stores.component';
import { HomeServicesComponent } from './components/home-page/home-services/home-services.component';
import { HomeContactComponent } from './components/home-page/home-contact/home-contact.component';
import { HomeReviewsComponent } from './components/home-page/home-reviews/home-reviews.component';
import { HomeHeaderComponent } from './components/home-page/home-header/home-header.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { AboutHeaderComponent } from './components/about-page/about-header/about-header.component';
import { AboutOffersComponent } from './components/about-page/about-offers/about-offers.component';
import { AboutTeamComponent } from './components/about-page/about-team/about-team.component';
import { Error404Component } from './components/error-404/error-404.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { GearsLoadingSpinnerComponent } from './components/loading-spinner';
import { environment } from '../environments/environment';
import { FlagsComponent } from './components/nav/flags/flags.component';
import { LogoComponent } from './components/logo/logo.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: '**', component: Error404Component }
];

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CopyrightComponent,
    AboutPageComponent,
    Error404Component,
    HomePageComponent,
    NavComponent,
    AboutHeaderComponent,
    AboutOffersComponent,
    AboutTeamComponent,
    HomeStoresComponent,
    HomeServicesComponent,
    HomeContactComponent,
    HomeReviewsComponent,
    HomeHeaderComponent,
    SearchboxComponent,
    GearsLoadingSpinnerComponent,
    FlagsComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({ uri: environment.API_URL }),
      cache: new InMemoryCache()
    });
  }
}
