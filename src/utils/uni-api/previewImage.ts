/**
 * 预览图片
 * @param {string|number} current - 当前显示图片的链接。current 为当前显示图片的链接/索引值，不填或填写的值无效则为 urls 的第一张。App平台在 1.9.5至1.9.8之间，current为必填。
 * @param {string[] } urls - 需要预览的图片链接列表。
 * @param {'default' | 'number' | 'none'} [indicator='default'] - 图片指示器样式，默认值为default。可取值："default" - 底部圆点指示器； "number" - 顶部数字指示器； "none" - 不显示指示器。App。
 * @param {boolean} [loop=false] - 是否可循环预览，默认值为false。App。
 * @param {UniApp.LongPressActionsOptions|undefined} [longPressActions=undefined] - 长按图片显示操作菜单，如不填默认为保存相册。App 1.9.5+。
 * @support uniapp详细说明： https://uniapp.dcloud.net.cn/api/media/image.html#unipreviewimageobject
 * @example 
  previewImage().then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
 */
const previewImage = (
  current: string | number,
  urls: string[],
  indicator: 'default' | 'number' | 'none' = 'default',
  loop = false,
  longPressActions: UniApp.LongPressActionsOptions | undefined = undefined
): Promise<any> => {
  return new Promise((resolve, reject) => {
    uni.previewImage({
      urls,
      current,
      indicator,
      loop,
      longPressActions,
      success(res) {
        resolve(res)
      },
      fail(err) {
        // eslint-disable-next-line no-console
        console.error('uni.previewImage 接口调用失败 => ', err)
        reject(err)
      }
    })
  })
}

export { previewImage }
