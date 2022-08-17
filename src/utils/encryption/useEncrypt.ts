import CryptoJS from 'crypto-js'

const key = import.meta.env.VITE_ENC_KEY

export const encryptHelper = (str: string): string => {
  return CryptoJS.AES.encrypt(str, key).toString()
}

export const decryptHelper = (encryptedString: string): string => {
  return CryptoJS.AES.decrypt(
    encryptedString,
    key
  ).toString(CryptoJS.enc.Utf8)
}
