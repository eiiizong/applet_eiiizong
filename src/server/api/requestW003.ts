import { request } from '@/server/request'

/**
 * 白名单申请
 * @param {string} name 借款人
 * @param {boolean} [isShowLoading=true] 是否显示加载中动画 默认值 true
 * @param {boolean} [isShowErrorToast=true] 是否显示错误提示 默认值 true
 */
const requestW003 = (name: string, isShowLoading = true, isShowErrorToast = true): Promise<any> => {
  const data = {
    name
  }

  return new Promise((resolve, reject) => {
    request('wx/wxController!W003.do', data, isShowLoading, isShowErrorToast)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestW003 }
