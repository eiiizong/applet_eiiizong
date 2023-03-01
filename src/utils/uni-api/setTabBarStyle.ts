/**
 * 动态设置 tabBar 的整体样式。
 * @param {HBuilderX.ColorString | string} color - tab 上的文字默认颜色。
 * @param { HBuilderX.ColorString | string} selectedColor - tab 上的文字选中时的颜色。
 * @param {HBuilderX.ColorString | string} backgroundColor - tab 的背景色。
 * @param {string} [borderStyle='black'] - tabBar上边框的颜色。默认值`black`。仅支持 black、white。
 * @param {string} [backgroundImage=''] - 图片背景。默认值`''`。支持设置本地图片或创建线性渐变如，优先级高于 backgroundColor，仅 App 2.7.1+ 支持
 * @param {'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat'} [backgroundRepeat='no-repeat'] - 背景图平铺方式。默认值`no-repeat`。repeat：背景图片在垂直方向和水平方向平铺；repeat-x：背景图片在水平方向平铺，垂直方向拉伸；repeat-y：背景图片在垂直方向平铺，水平方向拉伸；no-repeat：背景图片在垂直方向和水平方向都拉伸。 默认使用 no-repeat。仅 App 2.7.1+ 支持
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/ui/tabbar.html#settabbarstyle
 * @example
  setTabBarStyle('#939599','#3882ff','#ffffff').then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
*/
const setTabBarStyle = (
  color: HBuilderX.ColorString | string,
  selectedColor: HBuilderX.ColorString | string,
  backgroundColor: HBuilderX.ColorString | string,
  borderStyle = 'black',
  backgroundImage = '',
  backgroundRepeat: 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat' = 'no-repeat'
): Promise<any> => {
  return new Promise((resolve, reject) => {
    uni.setTabBarStyle({
      color,
      selectedColor,
      backgroundColor,
      backgroundImage,
      backgroundRepeat,
      borderStyle,
      success(res) {
        resolve(res)
      },
      fail(err) {
        // eslint-disable-next-line no-console
        console.error('setTabBarStyle 接口调用失败 => ', err)
        reject(err)
      }
    })
  })
}
export { setTabBarStyle }
