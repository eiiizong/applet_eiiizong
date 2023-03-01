import { Store } from '@/stores/types'
import { login, showModal } from '@/utils/uni-api'
import { requestGetOpenId } from '@/server/api'
import { useJumpLoginPage } from '@/hooks/project'

/**
 * 自定义登录 业务逻辑不一致请自行更改
 * @param {boolean} [isShowNotLoggedInPrompt=true] 用户未登录时 是否进行提示。默认 false 。
 * @param {boolean} [isShowLoading=true] 是否显示加载中动画。默认值 true。
 * @param {boolean} [isShowErrorToast=true] 是否显示接口调用错误提示。默认值 true。
 */
const requestCustomLogin = (
  isShowNotLoggedInPrompt = false,
  isShowLoading = true,
  isShowErrorToast = true
): Promise<Store.UserInfo> => {
  return new Promise((resolve, reject) => {
    login()
      .then((res) => {
        const { code } = res
        if (code) {
          requestGetOpenId(code, isShowLoading, isShowErrorToast)
            .then((res) => {
              const { openid, session_key, wxUserInfo } = res
              // 用户已经登录
              if (wxUserInfo) {
                resolve({
                  ...wxUserInfo,
                  sessionKey: encodeURIComponent(session_key),
                  openId: openid
                })
              } else {
                if (isShowNotLoggedInPrompt) {
                  if (!openid) {
                    showModal('openid 获取失败，请联系管理员！')
                  } else {
                    showModal('检测到您还未进行登录验证，点击确定按钮进行登录验证！', '未登录提示', true)
                      .then(() => {
                        useJumpLoginPage()
                      })
                      .finally(() => {
                        resolve({
                          sessionKey: encodeURIComponent(session_key),
                          openId: openid
                        })
                      })
                  }
                } else {
                  resolve({
                    sessionKey: encodeURIComponent(session_key),
                    openId: openid
                  })
                }
              }
            })
            .catch((err) => {
              reject(err)
            })
        }
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestCustomLogin }
