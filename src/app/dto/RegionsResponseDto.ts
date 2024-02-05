import { Region } from "../models/Region";

export interface RegionsResponseDto {
    message: string;
    data: { 
        regions: Region[], 
    }
}