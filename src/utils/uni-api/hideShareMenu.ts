/**
 * 小程序的原生菜单中隐藏分享按钮
 * @param {array} [hideShareItems = []] - ['qq']控制是否隐藏"转发"，['qzone']控制是否隐藏"分享到空间"，不带hideShareItems参数默认"转发"、"分享到空间"全隐藏。目前只支持'qq'、'qzone'。
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/plugins/share.html#hideShareMenu
 * @example hideShareMenu()
 */
const hideShareMenu = (hideShareItems: any[] = []): Promise<any> => {
  return new Promise((resolve, reject) => {
    uni.hideShareMenu({
      hideShareItems,
      success(res) {
        resolve(res)
      },
      fail(err) {
        console.error('uni.hideShareMenu 接口调用失败 => ', err)
        reject(err)
      },
    })
  })
}
export { hideShareMenu }
