/**
 * 移除 tabBar 某一项右上角的文本
 * @param {number} index - tabBar的哪一项，从左边算起。
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/ui/tabbar.html#removeTabBarBadge
 * @example
  removeTabBarBadge(1).then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
 */
const removeTabBarBadge = (index: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    uni.removeTabBarBadge({
      index,
      success(res) {
        resolve(res)
      },
      fail(err) {
        // eslint-disable-next-line no-console
        console.error('removeTabBarBadge 接口调用失败 => ', err)
        reject(err)
      }
    })
  })
}
export { removeTabBarBadge }
