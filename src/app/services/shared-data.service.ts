import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CountryInfoDto } from '../dto/CountryInfoDto';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private countryInfoSubject = new BehaviorSubject<CountryInfoDto>({languages: []});
  countryInfo$ = this.countryInfoSubject.asObservable();

  setCountryInfo(data: CountryInfoDto) {
    this.countryInfoSubject.next(data);
  }
}
