import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CountriesMaxgdpComponent } from './components/countries-maxgdp/countries-maxgdp.component';
import { NonexistingrouteComponent } from './components/nonexistingroute/nonexistingroute.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { CountriesComponent } from './components/countries/countries.component';
import { CountryInfoComponent } from './components/country-info/country-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountriesMaxgdpComponent,
    NonexistingrouteComponent,
    SpinnerComponent,
    CountriesComponent,
    CountryInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
