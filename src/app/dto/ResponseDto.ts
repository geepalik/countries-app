import { Country } from "../models/Country";
import { CountryStats } from "../models/CountryStats";

export interface ResponseDto {
    message: string;
    data: { countries?: Country[], stats?: CountryStats[] }
}