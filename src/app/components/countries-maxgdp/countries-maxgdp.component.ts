import { Component } from '@angular/core';
import { CountryStats } from '../../models/CountryStats';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countries-maxgdp',
  templateUrl: './countries-maxgdp.component.html',
  styleUrl: './countries-maxgdp.component.css'
})
export class CountriesMaxgdpComponent {
  public countryStats: CountryStats[] | undefined;

  constructor(
    private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService.getCountriesStatsMaxGdp()
    .subscribe(
      (response) => {
        this.countryStats = response.data.stats;
      }
    )
  }

}
