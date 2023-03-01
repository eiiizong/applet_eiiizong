/**
 * 打开另一个小程序。
 * @param {string} appId - 要打开的小程序 appId（百度小程序则填写App Key）。
 * @param {string} [path=''] - 打开的页面路径，如果为空则打开首页。默认''。
 * @param {any} [extraData=null] - 需要传递给目标小程序的数据，目标小程序可在 App.vue 的 onLaunch或onShow 中获取到这份数据。默认null。
 * @param {'release' | 'develop' | 'trial'} [envVersion='release'] - 要打开的小程序版本，默认值`release`。有效值： develop（开发版），trial（体验版），release（正式版）。仅在当前小程序为开发版或体验版时此参数有效。如果当前小程序是正式版，则打开的小程序必定是正式版。
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/other/open-miniprogram.html#navigatetominiprogram
 * @example
  navigateToMiniProgram('12312323', 'pages/index/index?id=123', { data1: 'test' }).then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
 */
const navigateToMiniProgram = (
  appId: string,
  path = '',
  extraData: any = null,
  envVersion: 'release' | 'develop' | 'trial' = 'release'
): Promise<UniApp.NavigateToMiniProgramOptions> => {
  return new Promise((resolve, reject) => {
    uni.navigateToMiniProgram({
      appId,
      path,
      extraData,
      envVersion,
      success(res) {
        resolve(res)
      },
      fail(err) {
        // eslint-disable-next-line no-console
        console.error('uni.navigateToMiniProgram 接口调用失败 => ', err)
        reject(err)
      }
    })
  })
}

export { navigateToMiniProgram }
