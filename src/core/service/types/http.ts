import { AsyncReturnType } from "./asyncReturn.type"

export interface Http {
    get: <T>(url:string, methodReturn?: 'json' | 'blob') => AsyncReturnType<T>
    getBlob?: <T>(url:string) => AsyncReturnType<T>
    post: <T>(url:string, body?:unknown | FormData, multiPart?: boolean, noHeaders?: boolean) => AsyncReturnType<T>
    put: <T>(url:string, body?:unknown| FormData, multiPart?: boolean) => AsyncReturnType<T>
    delete: <T>(url:string) => AsyncReturnType<T>
    blob?: <T>(url:string, body:unknown | FormData, multiPart?: boolean, noHeaders?: boolean) => AsyncReturnType<T>
}