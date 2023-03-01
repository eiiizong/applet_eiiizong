/**
 * 显示 tabBar
 * @param {boolean} [animation=false] - 是否需要动画效果。默认值`false`。仅微信小程序、支付宝小程序、百度小程序、字节跳动小程序、飞书小程序、QQ小程序、快手小程序、京东小程序支持。
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/ui/tabbar.html#showTabBar
 * @example 
   showTabBar().then(res => {
     // 接口调用成功
   }).catch(err => {
     // 接口调用失败
   }).finally((res) => {
     // 接口调用完成
   })
 */
const showTabBar = (animation = false): Promise<any> => {
  return new Promise((resolve, reject) => {
    uni.showTabBar({
      animation,
      success(res) {
        resolve(res)
      },
      fail(err) {
        // eslint-disable-next-line no-console
        console.error('showTabBar 接口调用失败 => ', err)
        reject(err)
      }
    })
  })
}
export { showTabBar }
