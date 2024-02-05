import { Component } from '@angular/core';
import { Region } from '../../models/Region';
import { CountriesService } from '../../services/countries.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GlobalStatsRequestDto } from '../../dto/GlobalStatsRequestDto';
import { GlobalStats } from '../../models/GlobalStats';

@Component({
  selector: 'app-global-stats',
  templateUrl: './global-stats.component.html',
  styleUrl: './global-stats.component.css'
})
export class GlobalStatsComponent {
  regions: Region[] | undefined;
  globalStats: GlobalStats[] | undefined;
  currentPage: number | undefined = 1;
  totalPages: number | undefined = 1;
  filterGlobalStatsForm: FormGroup = this.fb.group({
    regionSelect: [''],
    fromSelect: [''],
    toSelect: [''],
  })
  erroMessage: string | undefined;

  constructor(
    private countriesService: CountriesService,
    private fb: FormBuilder
  ) { }

  submit() {
    this.erroMessage = "";
    if(!this.validateForm()){
      this.erroMessage = "You must select one option from each form field";
    }else{
      const regionSelectControl = this.filterGlobalStatsForm.get('regionSelect');
      const fromSelectControl = this.filterGlobalStatsForm.get('fromSelect');
      const toSelectControl = this.filterGlobalStatsForm.get('toSelect');
  
      const globalStatsRequestDto: GlobalStatsRequestDto = {
        regionId: regionSelectControl?.value,
        from: fromSelectControl?.value,
        to: toSelectControl?.value,
      }
  
      this.getGlobalStats(globalStatsRequestDto);
    }
  }

  validateForm(){
    const regionSelectControl = this.filterGlobalStatsForm.get('regionSelect');
    const fromSelectControl = this.filterGlobalStatsForm.get('fromSelect');
    const toSelectControl = this.filterGlobalStatsForm.get('toSelect');

    return regionSelectControl?.value !== "" || 
    fromSelectControl?.value !== "" || 
    toSelectControl?.value !== "";
  }

  goToPage(page: number): void {
    this.erroMessage = "";
    this.currentPage = page;
    const regionSelectControl = this.filterGlobalStatsForm.get('regionSelect');
    const fromSelectControl = this.filterGlobalStatsForm.get('fromSelect');
    const toSelectControl = this.filterGlobalStatsForm.get('toSelect');

    const globalStatsRequestDto: GlobalStatsRequestDto = {
      regionId: regionSelectControl?.value,
      from: fromSelectControl?.value,
      to: toSelectControl?.value,
      page
    }
    this.getGlobalStats(globalStatsRequestDto);
  }

  getYearList(): number[] {
    return Array.from({ length: new Date().getFullYear() - this.getEarliestDate() + 1 }, (_, index) => this.getEarliestDate() + index);
  }

  private getEarliestDate(): number {
    return 1960;
  }

  getPagesList(): number[] {
    return Array.from({ length: this.totalPages } as unknown as Iterable<number>, (_, index) => index + 1);
  }

  ngOnInit() {
    const storedRegions = localStorage.getItem('regionList');

    if(storedRegions) {
      this.regions = JSON.parse(storedRegions);
    }else {
      this.countriesService.getRegions()
      .subscribe({
        next: (response) => {
          this.regions = response.data.regions;
          localStorage.setItem('regionList', JSON.stringify(response.data.regions));
        },
        error: (error) => {
          this.erroMessage = error.error.errors.join(' , ');
        }
      })
    }
  }

  private getGlobalStats(globStatsRequestDto: GlobalStatsRequestDto) {
    this.countriesService.getGlobalStats(globStatsRequestDto)
    .subscribe({
      next: (response) => {
        this.globalStats = response.data.globalStats;
        this.currentPage = response.data.currentPage;
        this.totalPages = response.data.totalPages;
      },
      error: (error) => {
        this.erroMessage = error.error.errors.join(' , ');
      }
    })
  }
}
