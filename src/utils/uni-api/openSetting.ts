/**
 * 调起客户端小程序设置界面，返回用户设置的操作结果。
 * @param {boolean} [withSubscriptions=false] - 是否同时获取用户订阅消息的订阅状态。默认不获取false。注意：withSubscriptions 只返回用户勾选过订阅面板中的“总是保持以上选择，不再询问”的订阅消息。
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/other/setting.html#opensetting
 * @example 
  openSetting().then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
 */
const openSetting = (withSubscriptions = false): Promise<any> => {
  return new Promise((resolve, reject) => {
    uni.openSetting({
      withSubscriptions,
      success(res) {
        resolve(res)
      },
      fail(err) {
        // eslint-disable-next-line no-console
        console.error('uni.openSetting 接口调用失败 => ', err)
        reject(err)
      }
    })
  })
}
export { openSetting }
