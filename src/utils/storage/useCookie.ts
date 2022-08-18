import jsCookie from 'js-cookie'
import { decryptHelper, encryptHelper } from '../encryption/useEncrypt'

export const saveCookie = (payload: {
  key: string
  text: string
  rememberMe?: boolean
}): void => {
  const encryptedPayload = encryptHelper(payload.text)

  jsCookie.set(payload.key, encryptedPayload, {
    expires: 60 * 60 * 24 * 7
  })
}

export const getCookie = (key: string) => {
  const value = jsCookie.get(key)
  if (value !== undefined && value !== '') {
    return decryptHelper(value.toString())
  }

  return ''
}
