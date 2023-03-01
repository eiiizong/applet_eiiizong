/**
 * 拨打电话
 * @param {string} phoneNumber 需要拨打的电话号码
 * @support uniapp详细说明：https://uniapp.dcloud.net.cn/api/system/phone.html#makephonecall
 * @example
  makePhoneCall('13211111111').then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
 */
const makePhoneCall = (phoneNumber: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    uni.makePhoneCall({
      phoneNumber,
      success(res) {
        resolve(res)
      },
      fail(err) {
        console.error('uni.makePhoneCall 接口调用失败 => ', err)
        reject(err)
      },
    })
  })
}
export { makePhoneCall }
