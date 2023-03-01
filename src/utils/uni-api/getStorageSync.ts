/**
 * 从本地缓存中同步获取指定 key 对应的内容。
 * @param {string} key 本地缓存中的指定的 key
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/storage/storage.html#getStorageSync
 * @example getStorageSync('test')
 */
const getStorageSync = (key: string): any => {
  return uni.getStorageSync(key)
}
export { getStorageSync }
