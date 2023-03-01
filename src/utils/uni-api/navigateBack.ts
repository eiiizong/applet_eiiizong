/**
 * 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages() 获取当前的页面栈，决定需要返回几层。
 * @param {number} [delta=1] - 返回的页面数，如果 delta 大于现有页面数，则返回到首页。。默认值`1`。
 * @param {string} [animationType='pop-out'] - 窗口显示的动画效果。默认值`pop-out`。仅 APP 支持。
 * @param {number} [animationDuration=300] - 窗口动画持续时间，单位为 ms。默认值`300`。仅 APP 支持。
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/router.html#navigateBack
 * @example navigateBack()
 */
const navigateBack = (
  delta = 1,
  animationType:
    | 'auto'
    | 'none'
    | 'pop-out'
    | 'slide-out-right'
    | 'slide-out-left'
    | 'slide-out-top'
    | 'slide-out-bottom'
    | 'fade-out'
    | 'zoom-in'
    | 'zoom-fade-in'
    | undefined = 'pop-out',
  animationDuration = 300
): Promise<any> => {
  return new Promise((resolve, reject) => {
    uni.navigateBack({
      delta,
      animationType,
      animationDuration,
      success(res) {
        resolve(res)
      },
      fail(err) {
        // eslint-disable-next-line no-console
        console.error('navigateBack 接口调用失败 => ', err)
        reject(err)
      }
    })
  })
}

export { navigateBack }
