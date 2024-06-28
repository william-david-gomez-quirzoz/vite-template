import { getLoacaleStorage } from 'core/utils'
import { Http } from './types/http'

const URL = import.meta.env.VITE_API
const headers1 = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'X-Frame-Options': 'DENY',
}

const headers2 = {
  Accept: 'multipart/form-data',
  'Access-Control-Allow-Origin': '*',
  'X-Frame-Options': 'DENY',
}

export const httpFetch: Http = {
  get: async <T>(url: string) => {
    const token = getLoacaleStorage({name: 'state'})?.token
    const response = await fetch(URL + url, {
      method: 'GET',
      headers: {
        ...headers1,
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await response.json()
    return data as T
  },
  getBlob: async <T>(url: string) => {
    const token = getLoacaleStorage({name: 'state'})?.token
    const response = await fetch(URL + url, {
      method: 'GET',
      headers: {
        ...headers1,
        Authorization: `Bearer ${token}`,
      },
    })
    if (response?.status <= 299) {
      const data = await response.blob()
      return { data: data as T, error: null }
    }
    return { data: null, error: { code: 'DOWNLOAD_FILE', } }
  },
  post: async <T>(
    url: string,
    body?: unknown | FormData,
    multiPart: boolean = false,
    noHeaders?: boolean
  ) => {
    const token = getLoacaleStorage({name: 'state'})?.token
    const headers = {
      ...(multiPart ? headers2 : headers1),
      ...(!noHeaders && {
        Authorization: `Bearer ${token}`,
      }),
    }
    const response = await fetch(URL + url, {
      method: 'POST',
      headers: headers,
      body: multiPart ? (body as FormData) : JSON.stringify(body),
    })
    const data = await response.json()
    return data as T
  },
  blob: async <T>(
    url: string,
    body: unknown | FormData,
    multiPart: boolean = false,
    noHeaders?: boolean
  ) => {
    const token = getLoacaleStorage({name: 'state'})?.token
    const headers = {
      ...(multiPart ? headers2 : headers1),
      ...(!noHeaders && {
        Authorization: `Bearer ${token}`,
      }),
    }
    const response = await fetch(URL + url, {
      method: 'POST',
      headers: headers,
      body: multiPart ? (body as FormData) : JSON.stringify(body),
    })
    const data = await response
    return data as T
  },
  put: async <T>(url: string, body?: unknown | FormData, multiPart: boolean = false) => {
    const token = getLoacaleStorage({name: 'state'})?.token
    const headers = {
      ...(multiPart ? headers2 : headers1),
      Authorization: `Bearer ${token}`,
    }
    const response = await fetch(URL + url, {
      method: 'PUT',
      headers: headers,
      body: body ? (multiPart ? (body as FormData) : JSON.stringify(body)) : '',
    })
    const data = await response.json()
    return data as T
  },
  delete: async <T>(url: string) => {
    const token = getLoacaleStorage({name: 'state'})?.token
    const headers = {
      ...headers1,
      Authorization: `Bearer ${token}`,
    }
    const response = await fetch(URL + url, {
      method: 'DELETE',
      headers: headers,
    })
    const data = await response.json()
    return data as T
  },
}
