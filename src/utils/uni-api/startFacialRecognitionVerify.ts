import { showModal } from './'

interface StartFacialRecognitionVerifyeSucccessRes {
  /**
   * 错误信息
   */
  errMsg?: string
  /**
   * 错误码
   */
  errCode?: number
  /**
   * 本次认证结果凭据，第三方可以选择根据这个凭据获取相关信息
   */
  verifyResult?: string
}

interface StartFacialRecognitionVerifyeOptions {
  /**
   * 姓名
   */
  name: string
  /**
   * 身份证号码
   */
  idCardNumber: string
  /**
   * 人脸核验的交互方式，默认读数字
   */
  checkAliveType?: 2
  /**
   * 成功返回的回调函数
   */
  success?: (result: StartFacialRecognitionVerifyeSucccessRes) => void
  /**
   * 失败的回调函数
   */
  fail?: (result: any) => void
  /**
   * 结束的回调函数（调用成功、失败都会执行）
   */
  complete?: (result: any) => void
}

declare namespace CustomUniApp {
  export interface Uni {
    startFacialRecognitionVerify(options?: StartFacialRecognitionVerifyeOptions): void
  }
}
declare const uni: CustomUniApp.Uni

/**
 * 请求进行基于生物识别的人脸核身 
 * @param {string} name - 姓名。
 * @param {string} idCardNumber - 身份证号码。
 * @param {boolean} [showErrModal=true] - 是否显示错误提示 默认值true。
 * @support 官方详细说明： https://developers.weixin.qq.com/community/business/doc/000442d352c1202bd498ecb105c00d
 * @example 使用示例
  startFacialRecognitionVerify('张三', '510902199999999999').then(res => {
    // success
  }).catch(err => {
    // error
  })
 */
const startFacialRecognitionVerify = (
  name: string,
  idCardNumber: string,
  showErrModal = true
): Promise<StartFacialRecognitionVerifyeSucccessRes> => {
  const showErrMsg = (errCode: number) => {
    let message = ''
    switch (errCode) {
      case 10001:
        message = '信息填写错误，请重试！'
        break
      case 10002:
        message = '人脸特征检测失败！'
        break
      case 10003:
        message = '身份证号与姓名不匹配！'
        break
      case 10004:
        message = '人脸与身份证信息不匹配！'
        break
      case 10005:
        message = '当前光线过亮！'
        break
      case 10006:
        message = 'appid没有权限！'
        break
      case 10008:
      case 10013:
      case 10014:
      case 10015:
      case 10020:
      case 10029:
      case 10045:
      case 10048:
      case 10071:
      case 10075:
      case 10081:
      case 10083:
      case 10088:
      case 10091:
      case 10094:
      case 10100:
      case 10106:
        message = '系统繁忙！'
        break
      case 10009:
      case 10026:
      case 10032:
      case 10049:
      case 10072:
      case 10076:
      case 10084:
      case 10086:
      case 10089:
      case 10092:
      case 10095:
      case 10107:
        message = '系统未包含该身份证信息！'
        break
      case 10010:
        message = '照片清晰度不足，请重新尝试！'
        break
      case 10012:
        message = '人脸与身份证信息不匹配！'
        break
      case 10018:
        message = '用户信息过期！'
        break
      case 10019:
        message = '用户信息不存在！'
        break
      case 10021:
        message = '重复的请求！'
        break
      case 10027:
        message = '语音识别失败！'
        break
      case 10028:
        message = '唇动检测失败！'
        break
      case 10031:
        message = '该业务接入有误，请稍后重试！'
        break
      case 10042:
        message = '操作过于频繁，请第二天0点后再重试！'
        break
      case 10050:
        message = '证件信息失效！'
        break
      case 10052:
      case 10066:
      case 10069:
        message = '目前使用人数过多，请稍后重试！'
        break
      case 10057:
        message = '检测过程中人脸主体不一致！'
        break
      case 10064:
        message = '用户未绑定银行卡完成实名！'
        break
      case 10065:
        message = '拉取的实名信息证件不是身份证！'
        break
      case 10077:
        message = '服务维护中，请稍后重试！'
        break
      case 10101:
        message = '获取用户设备失败！'
        break
      case 10153:
        message = '为保障安全性，请升级微信最新版本后重试！'
        break
      case 90001:
        message = '设备不支持！'
        break
      case 90002:
      case 90003:
      case 90004:
      case 90005:
      case 90024:
      case 90025:
      case 90100:
        message = '用户取消！'
        break
      case 90006:
        message = '用户中断刷脸！'
        break
      case 90007:
      case 90012:
      case 90020:
      case 90021:
        message = '网络错误！'
        break
      case 90008:
        message = '用户未授予相机权限，退出检测！'
        break
      case 90009:
        message = '用户未授予录音权限，退出检测！'
        break
      case 90010:
        message = '用户同时未授予相机和录音权限，退出检测！'
        break
      case 90011:
      case 90013:
      case 90014:
      case 90017:
        message = '超时请重试！'
        break
      case 90016:
        message = '相机预览失败！'
        break
      case 90018:
      case 90019:
      case 90050:
        message = '系统错误！'
        break
      case 90023:
        message = '没有检测到人脸！'
        break
      default:
        message = '人脸识别出现未知错误，请重试！'
        break
    }
    return message
  }

  return new Promise((resolve, reject) => {
    uni.startFacialRecognitionVerify({
      name,
      idCardNumber,
      checkAliveType: 2,
      success(res) {
        const { errCode, errMsg } = res
        // 识别成功
        if (errCode === 0) {
          resolve(res)
        } else {
          if (errCode) {
            if (showErrModal) {
              if (errMsg) {
                showModal(errMsg, '错误提示', false)
              } else {
                const _errMsg = showErrMsg(errCode)
                showModal(_errMsg, '错误提示', false)
              }
            }
          } else {
            showModal('人脸识别未返回正常的错误码！', '错误提示', false)
          }
          reject(res)
        }
      },
      fail(err) {
        // 点击 关闭按钮 会调用失败
        let errMsg = err.errMsg
        errMsg = errMsg.substring(errMsg.indexOf('fail ') + 'fail '.length)
        if (errMsg.match(RegExp(/cancel/))) {
          errMsg = '您已取消人脸识别！'
        }
        if (showErrModal) {
          showModal(errMsg, '错误提示', false)
        }
        reject(err)
      }
    })
  })
}

export { startFacialRecognitionVerify }
