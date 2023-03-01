/**
 * 从本地缓存中异步移除指定 key。
 * @param {string} key 本地缓存中的指定的 key
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/storage/storage.html#removeStorage
 * @example
  removeStorage('test').then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
*/
const removeStorage = (key: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    uni.removeStorage({
      key,
      success(res) {
        resolve(res)
      },
      fail(err) {
        console.error('uni.removeStorage 接口调用失败 => ', err)
        reject(err)
      },
    })
  })
}
export { removeStorage }
