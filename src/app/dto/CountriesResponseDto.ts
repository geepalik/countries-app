import { Country } from "../models/Country";

export interface CountriesResponseDto {
    message: string;
    data: { 
        countries: Country[], 
    }
}