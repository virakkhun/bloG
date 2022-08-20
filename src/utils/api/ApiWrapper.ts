import { getCookie } from '../storage/useCookie'

const BASE_URL = import.meta.env.VITE_BASE_URL
export async function useApiWrapper<T>(
  endpoint: string,
  mode?: string,
  payload?: T,
  content?: string
) {
  return await fetch(`${BASE_URL}${endpoint}`, {
    body: JSON.stringify(payload),
    method: mode,
    headers: {
      'Content-type':
        content === undefined ? 'application/json' : 'multipart/form-data',
      Authorization: `Bearer ${getCookie('tk') !== '' ? getCookie('tk') : ''}`
    },
    mode: 'cors'
  })
}
