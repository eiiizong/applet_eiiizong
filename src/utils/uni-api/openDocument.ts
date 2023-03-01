/**
 * 新开页面打开文档，支持格式：doc, xls, ppt, pdf, docx, xlsx, pptx。
 * @param {string} filePath - 文件路径，可通过 downFile 获得。
 * @param {'doc' | 'xls' | 'ppt' | 'pdf' | 'docx' | 'xlsx' | 'pptx'} [fileType='pdf'] - 文件类型，指定文件类型打开文件。默认值pdf。微信小程序支持的有效值 doc, xls, ppt, pdf, docx, xlsx, pptx。支付宝小程序仅支持pdf。微信小程序、支付宝小程序、京东小程序。
 * @param {boolean} [showMenu=true] - 右上角是否有可以转发分享的功能，默认true。 微信小程序。
 * @support uniapp详细说明： https://uniapp.dcloud.net.cn/api/file/file.html#opendocument
 * @example
  openDocument('test.pdf').then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
 */
const openDocument = (
  filePath: string,
  fileType: 'doc' | 'xls' | 'ppt' | 'pdf' | 'docx' | 'xlsx' | 'pptx' = 'pdf',
  showMenu = true
): Promise<any> => {
  return new Promise((resolve, reject) => {
    uni.openDocument({
      filePath,
      fileType,
      success(res) {
        resolve(res)
      },
      fail(err) {
        // eslint-disable-next-line no-console
        console.error('uni.openDocument 接口调用失败 => ', err)
        reject(err)
      },
      showMenu
    })
  })
}
export { openDocument }
