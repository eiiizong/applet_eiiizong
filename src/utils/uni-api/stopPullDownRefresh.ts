/**
 * 停止当前页面下拉刷新。
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/ui/pulldown.html#stoppulldownrefresh
 * @example stopPullDownRefresh()
 */
const stopPullDownRefresh = (): void => {
  uni.stopPullDownRefresh()
}

export { stopPullDownRefresh }
