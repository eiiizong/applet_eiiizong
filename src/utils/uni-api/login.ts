/**
 * 登录
 * @param {"weixin" | "qq" | "sinaweibo" | "xiaomi" | "apple" | "univerify" | undefined} [provider=undefined] - 登录服务提供商，默认 undefined。通过 uni.getProvider 获取，如果不设置则弹出登录列表选择界面
 * @param {UniApp.LoginScopes | UniApp.LoginScopes[] | undefined} [scopes='auth_base'] - 授权类型，默认 undefined。支持 auth_base（静默授权）/ auth_user（主动授权） / auth_zhima（芝麻信用）。支付宝小程序。
 * @param {number} [timeout=6000] - 超时时间，单位ms，默认 6000。微信小程序、百度小程序、京东小程序。
 * @support 文档: http://uniapp.dcloud.io/api/plugins/login?id=login
 * @example
  login().then(res => {
    // 登录成功
  }).catch(err => {
    // 登录失败
  }).finally((res) => {
    // 接口调用完成
  })
 */
const login = (
  provider: 'weixin' | 'qq' | 'sinaweibo' | 'xiaomi' | 'apple' | 'univerify' | undefined = undefined,
  scopes: UniApp.LoginScopes | UniApp.LoginScopes[] | undefined = 'auth_base',
  timeout = 6000
): Promise<UniApp.LoginRes> => {
  return new Promise((resolve, reject) => {
    uni.login({
      provider,
      scopes,
      timeout,
      success(res) {
        resolve(res)
      },
      fail(err) {
        // eslint-disable-next-line no-console
        console.error('uni.login 接口调用失败 => ', err)
        reject(err)
      }
    })
  })
}
export { login }
