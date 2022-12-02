import axios from "axios";
import { environment } from "../../environment/environment";

const instanceAxios = axios.create({
    baseURL: environment.serverApi,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
})

export async function methodGet<T = any>(url: string, params: any = null): Promise<T> {
           return instanceAxios.get<any, T, any>(environment.serverApi + url);
}

export async function methodPost<T = any>(url: string, params: any = null): Promise<T> {
    return instanceAxios.post<any, T, any>(environment.serverApi + url, params);
}

export async function methodPut<T = any>(url: string, params: any = null): Promise<T> {
    return instanceAxios.put<any, T, any>(environment.serverApi + url, params);
}

export async function methodDelete<T = any>(url: string, params: any = null): Promise<T> {
    return instanceAxios.delete<any, T, any>(environment.serverApi + url, params);
}

