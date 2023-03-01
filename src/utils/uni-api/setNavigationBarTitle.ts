/**
 * 动态设置当前页面的标题
 * @param {string} title - 页面标题
 * @support uniapp详细说明：https://uniapp.dcloud.io/api/ui/navigationbar?id=setnavigationbartitle
 * @example
  setNavigationBarTitle('测试标题').then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
 */
const setNavigationBarTitle = (title: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    uni.setNavigationBarTitle({
      title,
      success(res) {
        resolve(res)
      },
      fail(err) {
        console.error('uni.setNavigationBarTitle 接口调用失败 => ', err)
        reject(err)
      },
    })
  })
}
export { setNavigationBarTitle }
