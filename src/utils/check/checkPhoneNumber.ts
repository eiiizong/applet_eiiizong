interface PhoneNumberCheckResult {
  /**
   * 是否校验通过 true 通过 false 未通过
   */
  isOk: boolean
  /**
   * 校验未通过提示信息
   */
  errMsg: string
}

/**
 * 校验11位手机号格式是否正确
 * @param {String} value 手机号
 * @param {String} errorMsgPrefix 错误信息提醒前缀
 */
const checkPhoneNumber = (value: string, errorMsgPrefix = '手机号码'): PhoneNumberCheckResult => {
  const Reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
  // 校验结果
  const checkResult = {
    /**
     * 是否校验通过 true 通过 false 未通过
     */
    isOk: false,
    /**
     * 校验结果提示信息
     */
    errMsg: errorMsgPrefix + '未知错误'
  }
  // 格式化手机号码的值 去除空格
  value = (value + '').trim()

  if (!value) {
    checkResult.isOk = false
    checkResult.errMsg = `${errorMsgPrefix}不能为空，请检查！`
    return checkResult
  }

  if (!Reg.test(value)) {
    checkResult.isOk = false
    checkResult.errMsg = `${errorMsgPrefix}格式错误，请检查！`
  } else {
    checkResult.isOk = true
    checkResult.errMsg = ``
  }

  return checkResult
}

export { checkPhoneNumber }
