/**
 * 关闭小程序页面返回询问对话框
 * @support 微信官方文档详细说明： https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.disableAlertBeforeUnload.html
 * @example disableAlertBeforeUnload()
 */
const disableAlertBeforeUnload = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    uni.disableAlertBeforeUnload({
      success(res) {
        resolve(res)
      },
      fail(err) {
        // eslint-disable-next-line no-console
        console.error('disableAlertBeforeUnload 接口调用失败 => ', err)
        reject(err)
      }
    })
  })
}
export { disableAlertBeforeUnload }
