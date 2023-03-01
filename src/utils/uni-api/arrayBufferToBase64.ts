/**
 * 将 ArrayBuffer 对象转成 Base64 字符串
 * @param {ArrayBuffer} arrayBuffer - 要转换成 Base64 字符串的 ArrayBuffer 对象
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/arrayBufferToBase64?id=arraybuffertobase64
 * @example
   const arrayBuffer = new Uint8Array([55, 55, 55])
   const base64 = arrayBufferToBase64(arrayBuffer)
 */
const arrayBufferToBase64 = (arrayBuffer: ArrayBuffer): string => {
  return uni.arrayBufferToBase64(arrayBuffer)
}
export { arrayBufferToBase64 }
