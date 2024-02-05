export interface GlobalStatsRequestDto {
    regionId: number | undefined;
    from: number | undefined;
    to: number | undefined;
    page?: number;
    limit?: number;
}