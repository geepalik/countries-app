import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalStatsRequestDto } from '../dto/GlobalStatsRequestDto';
import { CountriesResponseDto } from '../dto/CountriesResponseDto';
import { CountriesStatsMaxGdpResponseDto } from '../dto/CountriesStatsMaxGdpDto';
import { RegionsResponseDto } from '../dto/RegionsResponseDto';
import { GlobalStatsResponseDto } from '../dto/GlobalStatsResponseDto';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private readonly apiUrl = 'http://localhost:8080/nation-api';

  constructor(private http: HttpClient) { }

  getCountriesLanguages(): Observable<CountriesResponseDto>{
    return this.http.get<CountriesResponseDto>(`${this.apiUrl}/countries-languages`);
  }
  
  getCountriesStatsMaxGdp(): Observable<CountriesStatsMaxGdpResponseDto>{
    return this.http.get<CountriesStatsMaxGdpResponseDto>(`${this.apiUrl}/countries-stats-max-gdp`);
  }

  getRegions(): Observable<RegionsResponseDto> {
    return this.http.get<RegionsResponseDto>(`${this.apiUrl}/regions`);
  }

  getGlobalStats(globalStatsRequestDto: GlobalStatsRequestDto): Observable<GlobalStatsResponseDto> {
    const {regionId, from, to, page, limit} = globalStatsRequestDto;
    let queryString = `?regionId=${regionId}&from=${from}&to=${to}`;
    if(page){
      queryString += `&page=${page}`;
    }
    if(limit){
      queryString += `&limit=${limit}`;
    }
    return this.http.get<GlobalStatsResponseDto>(`${this.apiUrl}/global-stats${queryString}`)
  }
}
