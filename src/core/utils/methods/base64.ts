export const toBase64 = (file: any) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve((reader.result as string)?.split?.(',')?.[1])
    reader.onerror = (error) => reject(error)
  })

// export const toFile = (base64, type, name = "file") => {
//   return new Promise((resolve, reject) => {
//     fetch(base64)
//       .then((res) => res.blob())
//       .then((blob) => {
//         const file = new File([blob], name, { type: type })
//         resolve(file)
//       })
//       .catch((err) => {
//         reject(err)
//       })
//   })
// }
