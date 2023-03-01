/**
 * 开启小程序页面返回询问对话框。
 * @param {string} [message='是否确定返回上一页？'] - 询问对话框内容。默认值 是否确定返回上一页？。
 * @support 微信官方文档详细说明： https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.enableAlertBeforeUnload.html
 * @example enableAlertBeforeUnload()
 */
const enableAlertBeforeUnload = (message = '是否确定返回上一页？'): Promise<UniApp.GeneralCallbackResult> => {
  return new Promise((resolve, reject) => {
    uni.enableAlertBeforeUnload({
      message,
      success(res) {
        resolve(res)
      },
      fail(err) {
        // eslint-disable-next-line no-console
        console.error('enableAlertBeforeUnload 接口调用失败 => ', err)
        reject(err)
      }
    })
  })
}
export { enableAlertBeforeUnload }
