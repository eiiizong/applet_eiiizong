/**
 * 跳转回上一个小程序，只有当另一个小程序跳转到当前小程序时才会能调用成功。
 * @param {any} [extraData=null] - 需要返回给上一个小程序的数据，上一个小程序可在 App.vue 的 onShow 中获取到这份数据。默认null。
 * @returns {Promise}
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/other/open-miniprogram.html#navigateBackMiniProgram
 * @example
  navigateBackMiniProgram({ data1: 'test' }).then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
 */
const navigateBackMiniProgram = (extraData: any = null): Promise<any> => {
  return new Promise((resolve, reject) => {
    uni.navigateBackMiniProgram({
      extraData,
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

export { navigateBackMiniProgram }
