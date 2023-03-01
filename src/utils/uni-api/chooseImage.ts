/**
 * 从本地相册选择图片或使用相机拍照
 * @param {number} [count=9] - 最多可以选择的图片张数 默认值9。count 值在 H5 平台的表现，基于浏览器本身的规范。目前测试的结果来看，只能限制单选/多选，并不能限制数量。并且，在实际的手机浏览器很少有能够支持多选的。
 * @param {string []} [sizeType=['original', 'compressed']] 所选的图片的尺寸 默认['original', 'compressed']。original 原图，compressed 压缩图。App、微信小程序、支付宝小程序、百度小程序。
 * @param {string []} [sourceType=['album', 'camera']] 选择图片的来源。默认['album', 'camera']。album 从相册选图，camera 使用相机。
 * @param {string []} [extension=[]] 根据文件拓展名过滤，每一项都不能是空字符串。默认[]。H5(HBuilder X2.9.9+)。
 * @param {UniApp.ChooseImageCropOptions | undefined} [crop=undefined] 图像裁剪参数，设置后 sizeType 失效。默认undefined。App 3.1.19+。
 * @support  uniapp详细说明： https://uniapp.dcloud.net.cn/api/media/image.html#chooseimage
 * @example
  chooseImage().then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
 */
const chooseImage = (
  count = 9,
  sizeType: string[] = ['original', 'compressed'],
  sourceType: string[] = ['album', 'camera'],
  extension: string[] = [],
  crop: UniApp.ChooseImageCropOptions | undefined = undefined
): Promise<UniApp.ChooseImageSuccessCallbackResult> => {
  return new Promise((resolve, reject) => {
    uni.chooseImage({
      count,
      sizeType,
      sourceType,
      extension,
      crop,
      success(res) {
        resolve(res)
      },
      fail(err) {
        // eslint-disable-next-line no-console
        console.error('uni.chooseImage 接口调用失败 => ', err)
        reject(err)
      }
    })
  })
}

export { chooseImage }
