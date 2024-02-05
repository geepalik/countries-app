import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseDto } from '../dto/ResponseDto';
import { GlobalStatsRequestDto } from '../dto/GlobalStatsRequestDto';

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

  getRegions(): Observable<ResponseDto> {
    return this.http.get<ResponseDto>(`${this.apiUrl}/regions`);
  }

  getGlobalStats(globalStatsRequestDto: GlobalStatsRequestDto): Observable<ResponseDto> {
    const {regionId, from, to, page, limit} = globalStatsRequestDto;
    let queryString = `?regionId=${regionId}&from=${from}&to=${to}`;
    if(page){
      queryString += `&page=${page}`;
    }
    if(limit){
      queryString += `&limit=${limit}`;
    }
    return this.http.get<ResponseDto>(`${this.apiUrl}/global-stats${queryString}`)
  }
}
