import { Component } from '@angular/core';
import { Region } from '../../models/Region';
import { CountriesService } from '../../services/countries.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-global-stats',
  templateUrl: './global-stats.component.html',
  styleUrl: './global-stats.component.css'
})
export class GlobalStatsComponent {
  regions: Region[] | undefined;
  filterGlobalStatsForm: FormGroup = this.fb.group({
    regionSelect: [''],
    fromSelect: [''],
    toSelect: [''],
  })

  constructor(
    private countriesService: CountriesService,
    private fb: FormBuilder
  ) { }

  submit() {
    const regionSelectControl = this.filterGlobalStatsForm.get('regionSelect');
    const fromSelectControl = this.filterGlobalStatsForm.get('fromSelect');
    const toSelectControl = this.filterGlobalStatsForm.get('toSelect');
    console.log(regionSelectControl?.value, fromSelectControl?.value, toSelectControl?.value);
  }

  getYearList(): number[] {
    return Array.from({ length: new Date().getFullYear() - this.getEarliestDate() + 1 }, (_, index) => this.getEarliestDate() + index);
  }

  private getEarliestDate(): number {
    return 1960;
  }

  ngOnInit() {
    const storedRegions = localStorage.getItem('regionList');

    if(storedRegions) {
      this.regions = JSON.parse(storedRegions);
    }else {
      this.countriesService.getRegions()
      .subscribe(
        (response) => {
          this.regions = response.data.regions;
          localStorage.setItem('regionList', JSON.stringify(response.data.regions));
        }
      )
    }
  }
}
