import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedDataService } from '../../services/shared-data.service';
import { CountryInfoDto } from '../../dto/CountryInfoDto';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrl: './country-info.component.css'
})
export class CountryInfoComponent {

  public countryInfo: CountryInfoDto = { languages: []};
  public countryName: string | null | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sharedDataService: SharedDataService
    ) {}

  navigateBackToCountriesList(){
    this.router.navigate(['countries']);
  }

  ngOnInit() {
    this.countryName = this.route.snapshot.paramMap.get('countryName')
    this.sharedDataService.countryInfo$.subscribe(data => {
      this.countryInfo = data;
    })
  }
}
