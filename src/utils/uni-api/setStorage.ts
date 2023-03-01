/**
 * 将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口。
 * @param {string} key 本地缓存中的指定的 key
 * @param {any} data 需要存储的内容，只支持原生类型、及能够通过 JSON.stringify 序列化的对象
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/storage/storage.html#setstorage
 * @example
  setStorage('test', 'aaa').then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
*/
const setStorage = (key: string, data: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    uni.setStorage({
      key,
      data,
      success(res) {
        resolve(res)
      },
      fail(err) {
        // eslint-disable-next-line no-console
        console.error('uni.setStorage 接口调用失败 => ', err)
        reject(err)
      }
    })
  })
}
export { setStorage }
