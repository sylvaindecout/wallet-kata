export interface FinanceApi {
    getConversionRate(from: string, to: string): Promise<number>;
}