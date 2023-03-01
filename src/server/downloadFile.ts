import { showModal, showLoading, hideLoading, downloadFile as uniDownloadFile } from '@/utils/uni-api'

const { VITE_API_REQUEST_URL } = process.env

// 字符串中是否含有“http”或者“https”的正则验证表达式
const httpExp = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?/

// 是否已经发生错误 如果发生错误 则不再执行
const isError = false

/**
 * 自定义发起 HTTPS 网络请求 下载
 * @param {string} url 开发者服务器接口地址，已默认加上前缀
 * @param {number} timeout 请求的参数
 * @param {boolean} isShowLoading [true] 请求数据时显示加载中
 * @param {boolean} showErrorToast [true] 是否显示错误提示
 * @example
  request('test').then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
*/
const downloadFile = (url: string, timeout = 60000, isShowLoading = true, showErrorToast = true): Promise<any> => {
  const header = {}

  return new Promise((resolve, reject) => {
    // 没有请求地址时 终止程序
    if (!url) {
      showModal('调用downLoadFile接口参数 url 必须传入，请检查！')
      reject(false)
    }

    // 是否显示数据加载中
    if (isShowLoading && !isError) {
      showLoading()
    }

    // 路径是否带有“http”或者“https”
    const isHttpUrl = httpExp.test(url)

    // 不是以http/https开头的路径
    if (!isHttpUrl) {
      url = VITE_API_REQUEST_URL + url
    }

    uniDownloadFile(url, header, timeout)
      .then((res) => {
        console.log('res===', res)
      })
      .catch((err) => {
        reject(err)
      })
      .finally(() => {
        if (isShowLoading) {
          hideLoading()
        }
      })
  })
}

export { downloadFile }
