import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CountriesMaxgdpComponent } from './components/countries-maxgdp/countries-maxgdp.component';
import { NonexistingrouteComponent } from './components/nonexistingroute/nonexistingroute.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountriesMaxgdpComponent,
    NonexistingrouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
