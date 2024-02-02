import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NonexistingrouteComponent } from './components/nonexistingroute/nonexistingroute.component';
import { CountriesMaxgdpComponent } from './components/countries-maxgdp/countries-maxgdp.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'max-gdp', component: CountriesMaxgdpComponent },
  { path: '**', component: NonexistingrouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
