import { decrypt, encrypt } from './cryp'

const getLoacaleStorage = ({ name }: { name: string }) => {
  const value = localStorage.getItem(name)
  try {
    if (value) {
      return JSON.parse(decrypt(value))
    } else {
      return { error: null }
    }
  } catch (e) {
    return { error: e }
  }
}

const setLocaleStorage = ({ body, name }: { name: string; body: Record<string, unknown> }) => {
  const encryptedValue = encrypt(JSON.stringify(body))
  localStorage.setItem(name, encryptedValue)
}

export { getLoacaleStorage, setLocaleStorage }
