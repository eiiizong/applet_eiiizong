/**
 * 动态设置窗口的背景色
 * @param {string} [backgroundColor] - 窗口的背景色，必须为十六进制颜色值。
 * @param {string} [backgroundColorTop] - 顶部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持。
 * @param {string} [backgroundColorBottom] - 底部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持。
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/ui/bgcolor.html#setBackgroundColor
 * @example 
   setBackgroundColor('#ff0000').then(res => {
     // 接口调用成功
   }).catch(err => {
     // 接口调用失败
   }).finally((res) => {
     // 接口调用完成
   })
 */
const setBackgroundColor = (
  backgroundColor: string,
  backgroundColorTop: string,
  backgroundColorBottom: string
): Promise<any> => {
  return new Promise((resolve, reject) => {
    uni.setBackgroundColor({
      backgroundColor,
      backgroundColorTop,
      backgroundColorBottom,
      success(res) {
        resolve(res)
      },
      fail(err) {
        // eslint-disable-next-line no-console
        console.error('setBackgroundColor 接口调用失败 => ', err)
        reject(err)
      }
    })
  })
}
export { setBackgroundColor }
