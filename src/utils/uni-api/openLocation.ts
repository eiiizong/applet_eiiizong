/**
 * 使用微信内置地图查看位置
 * @param {number} latitude - 纬度，范围为-90~90，负数表示南纬。使用 gcj02 国测局坐标系。
 * @param {number} longitude - 经度，范围为-180~180，负数表示西经。使用 gcj02 国测局坐标系。
 * @param {string} name - 位置名。支付宝必填。
 * @param {string} address - 地址的详细说明。支付宝必填。
 * @param {number} [scale=18] - 缩放比例，范围5~18，默认为18。微信小程序。
 * @support uniapp详细说明： https://uniapp.dcloud.net.cn/api/location/open-location.html#openlocation
 * @example
   openLocation('12.3435','143.4454','测试').then(res => {
     // 接口调用成功
   }).catch(err => {
     // 接口调用失败
   }).finally((res) => {
     // 接口调用完成
   })
 */
const openLocation = (latitude: number, longitude: number, name: string, address: string, scale = 18): Promise<any> => {
  return new Promise((resolve, reject) => {
    uni.openLocation({
      latitude,
      longitude,
      name,
      address,
      scale,
      success(res) {
        resolve(res)
      },
      fail(err) {
        // eslint-disable-next-line no-console
        console.error('uni.openLocation 接口调用失败 => ', err)
        reject(err)
      }
    })
  })
}
export { openLocation }
