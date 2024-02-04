import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseDto } from '../dto/ResponseDto';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private readonly apiUrl = 'http://localhost:8080/nation-api';

  constructor(private http: HttpClient) { }

  getCountriesLanguages(): Observable<ResponseDto>{
    return this.http.get<ResponseDto>(`${this.apiUrl}/countries-languages`);
  }
  
  getCountriesStatsMaxGdp(): Observable<ResponseDto>{
    return this.http.get<ResponseDto>(`${this.apiUrl}/countries-stats-max-gdp`);
  }
}
