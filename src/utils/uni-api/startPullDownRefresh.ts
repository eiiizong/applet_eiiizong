/**
 * 开始下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/ui/pulldown.html#startPullDownRefresh
 * @example startPullDownRefresh()
 */
const startPullDownRefresh = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    uni.startPullDownRefresh({
      success(res) {
        resolve(res)
      },
      fail(err) {
        // eslint-disable-next-line no-console
        console.error('uni.startPullDownRefresh 接口调用失败 => ', err)
        reject(err)
      }
    })
  })
}
export { startPullDownRefresh }
