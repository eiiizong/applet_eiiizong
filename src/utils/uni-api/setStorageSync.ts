/**
 * 将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口。
 * @param {string} key 本地缓存中的指定的 key
 * @param {any} data 需要存储的内容，只支持原生类型、及能够通过 JSON.stringify 序列化的对象
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/storage/storage.html#setStorageSync
 * @example setStorageSync('test', 'aaa')
 */
const setStorageSync = (key: string, data: any) => uni.setStorageSync(key, data)

export { setStorageSync }
