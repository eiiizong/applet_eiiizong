import { showToast } from './'
/**
 * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。仅仅针对原生tabbar。
 * @param {string} name - 需要跳转的 tabBar 页面的路径名称（需在 pages.json 的 tabBar 字段定义的页面），路径后不能带参数。
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/router.html#switchtab
 * @example
  switchTab('home').then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
*/
const switchTab = (name: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (!name) {
      const errMsg = 'switchTab 方法传入的第一个参数 name 不能为空，请检查！'
      showToast(errMsg).finally(() => {
        reject(errMsg)
      })
    } else {
      const url = `/pages/tabbar/${name}/${name}`
      uni.switchTab({
        url,
        success(res) {
          resolve(res)
        },
        fail(err) {
          // eslint-disable-next-line no-console
          console.error('uni.switchTab 接口调用失败。跳转路径：${url}`=> ', err)
          reject(err)
        }
      })
    }
  })
}

export { switchTab }
