export interface Response<T = any> {
    success: boolean;
    data: T;
}