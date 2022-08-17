import { getCookie } from '../storage/useCookie'

const BASE_URL = import.meta.env.VITE_BASE_URL
export async function useApiWrapper<T>(
  endpoint: string,
  mode?: string,
  payload?: T,
) {
  return await fetch(`${BASE_URL}${endpoint}`, {
    body: JSON.stringify(payload),
    method: mode,
    headers: {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${getCookie('tk') !== '' ? getCookie('tk') : ""}`,
    },
  })
}
