/**
 * 获取图片信息。
 * 小程序下获取网络图片信息需先配置download域名白名单才能生效。
 * @param {string} src 图片的路径，可以是相对路径，临时文件路径，存储文件路径，网络图片路径
 * @support uniapp详细说明：https://uniapp.dcloud.io/api/media/image?id=getimageinfo
 * @example
  getImageInfo().then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
 */
const getImageInfo = (src: string): Promise<UniApp.GetImageInfoSuccessData> => {
  return new Promise((resolve, reject) => {
    uni.getImageInfo({
      src,
      success(res) {
        resolve(res)
      },
      fail(err) {
        // eslint-disable-next-line no-console
        console.error('getImageInfo 接口调用失败 => ', err)
        reject(err)
      }
    })
  })
}
export { getImageInfo }
