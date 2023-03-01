/**
 * 将本地资源上传到开发者服务器，客户端发起一个 POST 请求，其中 content-type 为 multipart/form-data。如页面通过 uni.chooseImage 等接口获取到一个本地资源的临时文件路径后，可通过此接口将本地资源上传到指定服务器。另外选择和上传非图像、视频文件参考：https://ask.dcloud.net.cn/article/35547。
 * @param {string} url - 开发者服务器地址
 * @param {string} name - 文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容。
 * @param {string} filePath - 要上传文件资源的路径。（files和filePath选其一）
 * @param {'image' | 'video' | 'audio'} [fileType='image'] - 文件类型，image（默认）/video/audio。仅支付宝小程序，且必填。
 * @param {number} [timeout=6000] - 超时时间，单位为ms。H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+)
 * @param {UniApp.UploadFileOptionFiles []|undefined} [files=undefined] -  需要上传的文件列表。使用 files 时，filePath 和 name 不生效。（files和filePath选其一）。
 * @param {File|undefined} [file=undefined] - 要上传的文件对象。仅H5（2.6.15+）支持。
 * @param {any} [header] - HTTP 请求 Header，Header 中不能设置 Referer。
 * @param {any} [formData] - HTTP 请求中其他额外的 form data。
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/request/network-file?id=uploadFile
 * @example 使用示例
   uploadFile('text','text.png' ,'filePath')
   .then((res) => {
     // suceess
   })
   .catch((err) => {
     // error
   })
 */
const uploadFile = (
  url: string,
  name: string,
  filePath: string,
  fileType: 'image' | 'video' | 'audio' = 'image',
  timeout = 6000,
  files: UniApp.UploadFileOptionFiles[] | undefined = undefined,
  file: File | undefined = undefined,
  header: any = {},
  formData: any = {}
): Promise<UniApp.UploadFileSuccessCallbackResult> => {
  return new Promise((resolve, reject) => {
    uni.uploadFile({
      url,
      name,
      fileType,
      files,
      file,
      filePath,
      header,
      formData,
      timeout,
      success(res) {
        resolve(res)
      },
      fail(err) {
        // eslint-disable-next-line no-console
        console.error('uni.uploadFile 接口调用失败 => ', err)
        reject(err)
      }
    })
  })
}

export { uploadFile }
