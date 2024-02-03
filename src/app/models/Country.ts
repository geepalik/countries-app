import { Language } from "./Language";

export interface Country {
    name: string;
    area: number;
    country_code2: string;
    languages: Language[];
}