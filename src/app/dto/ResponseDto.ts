import { Country } from "../models/Country";
import { CountryStats } from "../models/CountryStats";
import { GlobalStats } from "../models/GlobalStats";
import { Region } from "../models/Region";

export interface ResponseDto {
    message: string;
    data: { 
        countries?: Country[], 
        stats?: CountryStats[], 
        regions?: Region[],
        globalStats?: GlobalStats[],
        currentPage?: number,
        totalPages?: number,
    }
}