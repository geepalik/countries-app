import { GlobalStats } from "../models/GlobalStats";

export interface GlobalStatsResponseDto {
    message: string;
    data: { 
        globalStats: GlobalStats[],
        currentPage: number,
        totalPages: number,
    }
}