import { getCookie } from '../storage/useCookie'

export async function useApiWrapper<T>(
  endpoint: string,
  mode?: string,
  payload?: T
) {
  return await fetch(`/api${endpoint}`, {
    body: JSON.stringify(payload),
    method: mode,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('tk') !== '' ? getCookie('tk') : ''}`
    },
    mode: 'cors'
  })
}
