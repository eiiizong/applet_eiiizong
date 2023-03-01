/**
 * 获取用户的当前设置
 * @param {boolean} [withSubscriptions=false] 是否同时获取用户订阅消息的订阅状态，默认不获取`false`。注意：withSubscriptions 只返回用户勾选过订阅面板中的“总是保持以上选择，不再询问”的订阅消息。（微信小程序 2.10.1 支持）
 * @support uniapp支持情况说明：https://uniapp.dcloud.io/api/other/setting.html#getSetting
 * @example
  getSetting().then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
 */
const getSetting = (
  withSubscriptions: boolean = false
): Promise<UniApp.GetSettingSuccessResult> => {
  return new Promise((resolve, reject) => {
    uni.getSetting({
      withSubscriptions,
      success(res) {
        resolve(res)
      },
      fail(err) {
        console.error('uni.getSetting 接口调用失败 => ', err)
        reject(err)
      },
    })
  })
}
export { getSetting }
