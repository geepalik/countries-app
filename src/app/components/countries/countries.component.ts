import { Component } from '@angular/core';
import { Country } from '../../models/Country';
import { CountriesService } from '../../services/countries.service';
import { Router } from '@angular/router';
import { Language } from '../../models/Language';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css'
})
export class CountriesComponent {
  public countries: Country[] | undefined;

  constructor(
    private countriesService: CountriesService,
    private router: Router,
    private sharedDataService: SharedDataService
    ) {}

  navigateToCountry(countryName: string, languages: Language[]) {
    this.sharedDataService.setCountryInfo({languages});
    this.router.navigate(['countries', countryName]);
  }

  ngOnInit(): void {
    this.countriesService.getCountriesLanguages()
    .subscribe(
      (response) => {
        this.countries = response.data.countries;
      }
    )
  }
}
