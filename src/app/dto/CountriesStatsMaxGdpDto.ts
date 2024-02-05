import { CountryStats } from "../models/CountryStats";

export interface CountriesStatsMaxGdpResponseDto {
    message: string;
    data: { 
        stats?: CountryStats[], 
    }
}