/**
 * 获取当前的地理位置、速度。
 * @param {string} [type='wgs84'] - 默认为wgs84返回gps坐标，gcj02返回国测局坐标，可用于uni.openLocation和map组件坐标，App和H5需配置定位SDK信息才可支持gcj02。
 * @param {boolean} [altitude=false] - 传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度。字节跳动小程序、飞书小程序、支付宝小程序不支持。
 * @param {boolean} [geocode=false] - 默认false，是否解析地址信息。仅App平台支持（安卓需指定 type 为 gcj02 并配置三方定位SDK）。
 * @param {number} [highAccuracyExpireTime=4000] - 高精度定位超时时间(ms)，指定时间内返回最高精度，该值3000ms以上高精度定位才有效果。App (3.2.11+)、H5 (3.2.11+)、微信小程序 (基础库 2.9.0+)。
 * @param {string} [timeout='5'] - 默认为 5，定位超时时间，单位秒。仅飞书小程序支持。
 * @param {number} [cacheTimeout=60] - 定位缓存超时时间，单位秒。默认60；每次定位缓存当前定位数据，并记下时间戳，当下次调用在cacheTimeout之内时，返回缓存数据。仅飞书小程序、支付宝小程序支持。
 * @param {string} [accuracy='high'] - 默认为 high，指定期望精度，支持 high，best。当指定 high 时，期望精度值为100m，当指定 best 时期望精度值为20m。当定位得到的精度不符合条件时，在timeout之前会继续定位，尝试拿到符合要求的定位结果。仅飞书小程序支持。
 * @param {boolean} [isHighAccuracy=false] - 开启高精度定位，默认为 false。 App (3.4.0+)、H5 (3.4.0+)、微信小程序 (基础库 2.9.0+)。
 * @support uniapp详细说明： https://uniapp.dcloud.net.cn/api/location/location.html#getlocation
 * @example
  getLocation().then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
*/
const getLocation = (
  type = 'wgs84',
  altitude = false,
  geocode = false,
  highAccuracyExpireTime = 4000,
  timeout = '5',
  cacheTimeout = 60,
  accuracy = 'high',
  isHighAccuracy = false
): Promise<UniApp.GetLocationSuccess> => {
  return new Promise((resolve, reject) => {
    uni.getLocation({
      type,
      altitude,
      isHighAccuracy,
      highAccuracyExpireTime,
      geocode,
      success(res) {
        resolve(res)
      },
      fail(err) {
        // eslint-disable-next-line no-console
        console.error('uni.getLocation 接口调用失败 => ', err)
        reject(err)
      },
      // @ts-ignore
      timeout,
      cacheTimeout,
      accuracy
    })
  })
}
export { getLocation }
