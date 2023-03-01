/**
 * 打开地图选择位置。
 * @param {number} [latitude] - 目标地纬度。微信小程序（2.9.0+）、H5-Vue3（3.2.10+）。
 * @param {number} [longitude] - 目标地经度。微信小程序（2.9.0+）、H5-Vue3（3.2.10+）
 * @param {string} [keyword] 搜索关键字，仅App平台支持。
 * @support uniapp详细说明： https://uniapp.dcloud.net.cn/api/location/location.html#chooselocation
 * @example
  getLocation().then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
*/
const chooseLocation = (
  latitude: number,
  longitude: number,
  keyword: string
): Promise<UniApp.ChooseLocationSuccess> => {
  return new Promise((resolve, reject) => {
    uni.chooseLocation({
      latitude,
      longitude,
      keyword,
      success(res) {
        resolve(res)
      },
      fail(err) {
        // eslint-disable-next-line no-console
        console.error('uni.chooseLocation 接口调用失败 => ', err)
        reject(err)
      }
    })
  })
}

export { chooseLocation }
