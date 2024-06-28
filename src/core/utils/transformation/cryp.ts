import { AES, enc } from 'crypto-js'

const key = import.meta.env.VITE_ENCRYPT_KEY

const decrypt = (text: string) => {
  return AES.decrypt(text, key).toString(enc.Utf8)
}
const encrypt = (text: string) => {
  return AES.encrypt(text, key).toString()
}

export { decrypt, encrypt }