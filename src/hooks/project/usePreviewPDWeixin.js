import config from '@/config/index.js'
import { downloadFile, openDocument, showLoading, hideLoading, request, navigateTo } from '~/utils/uni-api/index.js'
/**
 * 预览 pdf
 * @param {string} chi050 必填。文件码值，可通过 downFile 获得
 * @param {string} chi056 默认值：pdf。pdf 名称
 * @param {string} type 默认值：ygsp。请求系统类型
 * @returns {Promise}
 *
 * @example
  previewPDF().then(res => {
  // 接口调用成功
  }).catch(err => {
  // 接口调用失败
  }).finally((res) => {
  // 接口调用完成
  })
 */
const previewPDFH5 = (chi050, chi056 = 'pdf', type = 'ygsp') => {
  showLoading()
  let url = ''
  const isRequestYGFF = type == 'ygsp' ? false : true
  return new Promise((resolve, reject) => {
    const data = {
      chi050,
      chi056,
      isRequestYGFF
    }
    request('/frontRestService/frontBcpDataRestService/createPolicyFilePdf', data, {}, false)
      .then((res) => {
        const { newFileName } = res
        if (newFileName) {
          url = config.requestUrl + '/localPath/pdf/' + newFileName
          hideLoading()
          navigateTo('web-view', 'packageCommon', {
            url: encodeURIComponent(url),
            name: chi056
          })
          return
          downloadFile(url)
            .then((res) => {
              const { tempFilePath } = res
              console.log('downloadFile res', res)
              if (tempFilePath) {
                request(
                  '/frontRestService/frontBcpDataRestService/deletePolicyFilePdf',
                  {
                    newFileName
                  },
                  {},
                  false
                )
                  .then(() => {})
                  .finally(() => {})
              } else {
                hideLoading()
              }
            })
            .catch((err) => {
              hideLoading()
            })
        }
      })
      .catch(() => {
        hideLoading()
      })
  })
}

export { previewPDFH5 }
