interface NavigationBarAnimation {
  /**
   * 动画变化时间，默认0，单位：毫秒
   */
  duration: number
  /**
   * 动画变化方式，默认 linear
   * - linear: 动画从头到尾的速度是相同的
   * - easeIn: 动画以低速开始
   * - easeOut: 动画以低速结束
   * - easeInOut: 动画以低速开始和结束
   */
  timingFunc: 'linear' | 'easeIn' | 'easeOut' | 'easeInOut'
}

/**
 * 设置页面导航条颜色。如果需要进入页面就设置颜色，请延迟执行，防止被框架内设置颜色逻辑覆盖
 * @param {HBuilderX.ColorString | string} backgroundColor - 背景颜色值，有效值为十六进制颜色
 * @param {'#ffffff'|'#000000'} [frontColor='#ffffff'] - 前景颜色值，包括按钮、标题、状态栏的颜色。默认值#ffffff。仅支持 #ffffff 和 #000000。。App、H5、微信小程序、百度小程序、字节跳动小程序、QQ小程序、快手小程序、京东小程序。
 * @param {NavigationBarAnimation} [animation] - 动画效果。默认值{duration:0,timingFunc:'linear'}。
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/ui/navigationbar?id=setnavigationbarcolor
 * @example
  setNavigationBarColor('#f0f034').then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
 */
const setNavigationBarColor = (
  backgroundColor: HBuilderX.ColorString | string,
  frontColor: '#ffffff' | '#000000' = '#ffffff',
  animation: NavigationBarAnimation = {
    duration: 0,
    timingFunc: 'linear'
  }
): Promise<any> => {
  return new Promise((resolve, reject) => {
    uni.setNavigationBarColor({
      frontColor,
      backgroundColor,
      animation,
      success(res) {
        resolve(res)
      },
      fail(err) {
        // eslint-disable-next-line no-console
        console.error('uni.setNavigationBarColor 接口调用失败 => ', err)
        reject(err)
      }
    })
  })
}
export { setNavigationBarColor }
