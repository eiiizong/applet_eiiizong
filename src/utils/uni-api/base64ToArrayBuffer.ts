/**
 * 将 Base64 字符串转成 ArrayBuffer 对象
 * @param {string} str - 要转化成 ArrayBuffer 对象的 Base64 字符串
 * @support uniapp详细说明：https://uniapp.dcloud.io/api/base64ToArrayBuffer?id=base64toarraybuffe
 * @example
   const base64 = 'test'
   const arrayBuffer = base64ToArrayBuffer(base64)
 */
const base64ToArrayBuffer = (str: string): ArrayBuffer => {
  return uni.base64ToArrayBuffer(str)
}
export { base64ToArrayBuffer }
