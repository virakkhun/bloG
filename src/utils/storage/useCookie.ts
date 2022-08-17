import jsCookie from 'js-cookie'
import { decryptHelper, encryptHelper } from '../encryption/useEncrypt'

export const saveCookie = (payload: {
  key: string
  text: string
  rememberMe?: boolean
}): void => {
  const encryptedPayload = encryptHelper(payload.text)

  if (payload.rememberMe) {
    jsCookie.set(payload.key, encryptedPayload, {
      expires: 60 * 60 * 24 * 7
    })
  }

  if (!payload.rememberMe) {
    jsCookie.set(payload.key, encryptedPayload)
  }
}

export const getCookie = (key: string) => {
  const value = jsCookie.get(key)
  const decryptedValue = decryptHelper(value !== undefined ? value.toString() : '')

  return decryptedValue ? decryptedValue : ''
}
