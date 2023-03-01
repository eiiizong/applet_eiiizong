/**
 * 支付
 * uni.requestPayment是一个统一各平台的客户端支付API，不管是在某家小程序还是在App中，客户端均使用本API调用支付。
 * 本API运行在各端时，会自动转换为各端的原生支付调用API。
 * @param {'alipay' | 'wxpay' | 'baidu' | 'appleiap'} provider - 服务提供商，通过 uni.getProvider 获取。
 * @param {string} orderInfo -订单数据。
 * @param {string} [timeStamp] - 时间戳从1970年1月1日至今的秒数，即当前的时间，微信小程序独有。
 * @param {string} [nonceStr] - 随机字符串，长度为32个字符以下，微信小程序独有 。
 * @param {string} [_package] - 统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=xx，微信小程序独有
 * @param {string} [signType] - 签名算法，暂支持 MD5 ，微信小程序独有。
 * @param {string} [paySign] - 签名，具体签名方案参见小程序支付接口文档，微信小程序独有。
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/plugins/payment.html#requestpayment
 * @example
 * requestPayment('wxpay','')
 */
const requestPayment = (
  provider: 'alipay' | 'wxpay' | 'baidu' | 'appleiap',
  orderInfo: string,
  timeStamp: string,
  nonceStr: string,
  _package: string,
  signType: string,
  paySign: string
): Promise<any> => {
  return new Promise((resolve, reject) => {
    uni.requestPayment({
      provider,
      orderInfo,
      timeStamp,
      nonceStr,
      package: _package,
      signType,
      paySign,
      success(res) {
        resolve(res)
      },
      fail(err) {
        // eslint-disable-next-line no-console
        console.error('requestPayment 接口调用失败 => ', err)
        reject(err)
      }
    })
  })
}
export { requestPayment }
