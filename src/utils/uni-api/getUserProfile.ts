/**
 * 获取用户信息。每次请求都会弹出授权窗口，用户同意后返回 userInfo。
 * @param {String} [desc='获取您的个人信息用于展示头像'] - 声明获取用户个人信息后的用途，不超过30个字符。默认值`获取您的个人信息用于展示头像`
 * @param {String} [lang='en'] - 指定返回用户信息的语言，默认值`en`。可选值：zh_CN	简体中文、zh_TW	繁体中文、en	英文
 * @returns { Promise }
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/plugins/login.html#getuserprofile
 * @example
  getUserProfile().then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
 */
const getUserProfile = (
  desc = '获取您的个人信息用于展示头像',
  lang: 'en' | 'zh_CN' | 'zh_TW' | undefined = 'en'
): Promise<UniApp.GetUserProfileRes> => {
  return new Promise((resolve, reject) => {
    uni.getUserProfile({
      desc,
      lang,
      success(res) {
        resolve(res)
      },
      fail(err) {
        // eslint-disable-next-line no-console
        console.error('getUserProfile 接口调用失败 => ', err)
        reject(err)
      }
    })
  })
}
export { getUserProfile }
