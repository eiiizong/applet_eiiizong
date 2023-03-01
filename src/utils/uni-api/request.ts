/**
 * 发起 HTTPS 网络请求
 * @param {string} url - 开发者服务器接口地址
 * @param {string | AnyObject | ArrayBuffer | undefined } [data] - 请求的参数
 * @param {any} [header] - 设置请求的 header，header 中不能设置 Referer
 * @param {'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT'} [method='GET'] - HTTP 请求方法。默认值GET
 * @param {number} [timeout=60000] - 超时时间，单位为ms。默认值60000。
 * @param {string} [dataType='json'] - 返回的数据格式。默认值json。可取值 josn、其他。如果设为 json，会尝试对返回的数据做一次 JSON.parse。
 * @param {string} [responseType='text'] - 响应的数据类型。默认值text。可取值 text、arraybuffer。支付宝小程序不支持。
 * @param {boolean} [sslVerify=true] - 验证 ssl 证书。默认值true。 仅App安卓端支持（HBuilderX 2.3.3+），不支持离线打包。
 * @param {boolean} [withCredentials=false] - 跨域请求时是否携带凭证（cookies）。默认值false。 仅H5支持（HBuilderX 2.6.15+）。
 * @param {boolean} [firstIpv4=false] - DNS解析时优先使用ipv4。默认值false。 仅 App-Android 支持 (HBuilderX 2.8.0+)。
 * @returns { Promise<UniApp.RequestSuccessCallbackResult> }
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/request/request.html#request
 * @example
  request('test').then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
*/

// GeneralCallbackResult
const request = (
  url: string,
  data: string | AnyObject | ArrayBuffer | undefined = {},
  header: any = {},
  method: 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT' = 'GET',
  timeout = 60000,
  dataType = 'json',
  responseType = 'text',
  sslVerify = true,
  withCredentials = false,
  firstIpv4 = false
): Promise<UniApp.RequestSuccessCallbackResult> =>
  new Promise((resolve, reject) =>
    uni.request({
      url,
      data,
      header,
      method,
      timeout,
      dataType,
      responseType,
      sslVerify,
      withCredentials,
      firstIpv4,
      success(res) {
        resolve(res)
      },
      fail(err) {
        // eslint-disable-next-line no-console
        console.error('uni.request 接口调用失败 => ', err)
        reject(err)
      }
    })
  )
export { request }
