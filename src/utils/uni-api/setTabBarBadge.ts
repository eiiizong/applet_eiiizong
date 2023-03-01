/**
 * 为 tabBar 某一项的右上角添加文本。
 * @param {number} index - tabBar的哪一项，从左边算起。
 * @param {string} text - 显示的文本，不超过 3 个半角字符。
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/ui/tabbar.html#setTabBarBadge
 * @example
  setTabBarBadge(1,'2').then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
 */
const setTabBarBadge = (index: number, text: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    uni.setTabBarBadge({
      index,
      text,
      success(res) {
        resolve(res)
      },
      fail(err) {
        // eslint-disable-next-line no-console
        console.error('setTabBarBadge 接口调用失败 => ', err)
        reject(err)
      }
    })
  })
}
export { setTabBarBadge }
