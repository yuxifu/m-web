export class ApiResult {
    succeed: boolean;
    url: string;
    status: number;
    statusText: string;
    errorMessage?: string;
    debugInfo?: string;
    data?: any;
}
