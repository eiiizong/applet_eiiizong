interface CheckIsSupportFacialRecognitionSucccessRes {
  /**
   * 错误信息
   */
  errMsg?: string
  /**
   * 错误码
   */
  errCode?: number
}
interface CheckIsSupportFacialRecognitionFailRes {}
interface CheckIsSupportFacialRecognitionOptions {
  /**
   * 人脸核验的交互方式，默认读数字
   */
  checkAliveType?: 2
  /**
   * 成功返回的回调函数
   */
  success?: (result: CheckIsSupportFacialRecognitionSucccessRes) => void
  /**
   * 失败的回调函数
   */
  fail?: (result: CheckIsSupportFacialRecognitionFailRes) => void
  /**
   * 结束的回调函数（调用成功、失败都会执行）
   */
  complete?: (result: any) => void
}

namespace CustomUniApp {
  export interface Uni {
    checkIsSupportFacialRecognition(options?: CheckIsSupportFacialRecognitionOptions): void
  }
}

declare const uni: CustomUniApp.Uni

/**
 * 检查设备是否支持人脸检测
 * @support 官方详细说明： https://developers.weixin.qq.com/community/business/doc/000442d352c1202bd498ecb105c00d
 * @example 
   checkIsSupportFacialRecognition().then(res => {
    // success
  }).catch(err => {
    // error
  });
*/
const checkIsSupportFacialRecognition = (): Promise<CheckIsSupportFacialRecognitionSucccessRes> => {
  return new Promise((resolve, reject) => {
    uni.checkIsSupportFacialRecognition({
      checkAliveType: 2,
      success(res) {
        resolve(res)
      },
      fail(err) {
        reject(err)
      }
    })
  })
}
export { checkIsSupportFacialRecognition }
