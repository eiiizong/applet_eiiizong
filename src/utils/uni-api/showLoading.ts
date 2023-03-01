/**
 * 显示 loading 提示框。需主动调用 hideLoading 才能关闭提示框
 * @param {string} [title='加载中'] - 提示的内容。默认值`加载中`。
 * @param {boolean} [mask] - 是否显示透明蒙层，防止触摸穿透。默认值`true`。H5、App、微信小程序、百度小程序支持。
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/ui/prompt?id=showloading
 * @example showLoading()
 */
const showLoading = (title = '加载中', mask = true): Promise<any> =>
  new Promise((resolve, reject) => {
    uni.showLoading({
      title,
      mask,
      success(res) {
        resolve(res)
      },
      fail(err) {
        // eslint-disable-next-line no-console
        console.error('showLoading 接口调用失败 => ', err)
        reject(err)
      }
    })
  })
export { showLoading }
