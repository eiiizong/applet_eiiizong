interface IdCardCheckResult {
  isOk: boolean // 是否成功
  errMsg: string // 错误提示信息
}

// 加权因子
const Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]

// 身份证验证位值 .10代表X
const ValideCode = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]

/**
 * 检验18位身份证的校验码是否正确。
 * 校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
 * @param valueArr 身份证号码数组
 */
const isTrueValidateIdCard = (valueArr: string[]) => {
  let sum = 0 // 声明加权求和变量

  if (valueArr[17].toLowerCase() === 'x') {
    valueArr[17] = '10' // 将最后位为x的验证码替换为10方便后续操作
  }

  for (let i = 0; i < 17; i++) {
    sum += Wi[i] * Number(valueArr[i]) // 加权求和
  }
  const valCodePosition = sum % 11 // 得到验证码所位置

  if (valueArr[17] != ValideCode[valCodePosition]) {
    return false
  } else {
    return true
  }
}

/**
 * 校验18位身份证格式是否正确  15位身份证为验证
 * @param {String} value 身份证号码
 * @param {String} errorMsgPrefix 错误信息提醒前缀
 * @returns {IdCardCheckResult}  isOk 校验是否成功  errMsg 校验失败时返回的错误信息
 */
const checkIDCard = (value: string, errorMsgPrefix = '身份证号码'): IdCardCheckResult => {
  // 格式化身份证的值 去除空格 将 X 转化为 x
  value = (value + '').trim().toUpperCase()
  const len = value.length

  // 校验结果
  const checkResult = {
    isOk: false,
    errMsg: errorMsgPrefix + '未知错误'
  }

  // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。
  if (!/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(value)) {
    checkResult.isOk = false
    checkResult.errMsg = `${errorMsgPrefix}格式有误请检查！`
    return checkResult
  }

  // 校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
  // 下面分别分析出生日期和校验位
  if (len === 15) {
    const idCardRegExp15 = /^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/
    const arrSplit = value.match(idCardRegExp15)
    if (arrSplit) {
      const year = '19' + arrSplit[2]
      const month = arrSplit[3]
      const day = arrSplit[4]

      // 检查生日日期是否正确
      const tempData = new Date(`${year}/${month}/${day}`)
      const tempData_year = tempData.getFullYear()
      const tempData_month = tempData.getMonth() + 1
      const tempData_day = tempData.getDate()

      const isCorrect =
        tempData_year === Number(year) && tempData_month === Number(month) && tempData_day === Number(day)

      if (!isCorrect) {
        checkResult.isOk = false
        checkResult.errMsg = `${errorMsgPrefix}出生日期有误请检查！`
        return checkResult
      } else {
        // 将15位身份证转成18位
        // 校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。

        value = value.substring(0, 6) + '19' + value.substring(6, value.length - 6)

        const res = isTrueValidateIdCard(value.split(''))

        if (!res) {
          checkResult.isOk = false
          checkResult.errMsg = `${errorMsgPrefix}格式有误请检查！`
        } else {
          checkResult.isOk = true
          checkResult.errMsg = ''
        }
        return checkResult
      }
    } else {
      checkResult.isOk = false
      checkResult.errMsg = `${errorMsgPrefix}格式出现未知错误请检查！`
      return checkResult
    }
  }
  if (len === 18) {
    const idCardRegExp18 = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/
    const arrSplit = value.match(idCardRegExp18)
    if (arrSplit) {
      // 检查生日日期是否正确
      const year = arrSplit[2]
      const month = arrSplit[3]
      const day = arrSplit[4]

      // 检查生日日期是否正确
      const tempData = new Date(`${year}/${month}/${day}`)
      const tempData_year = tempData.getFullYear()
      const tempData_month = tempData.getMonth() + 1
      const tempData_day = tempData.getDate()

      const isCorrect =
        tempData_year === Number(year) && tempData_month === Number(month) && tempData_day === Number(day)

      if (!isCorrect) {
        checkResult.isOk = false
        checkResult.errMsg = `${errorMsgPrefix}出生日期有误请检查！`
        return checkResult
      } else {
        // 检验18位身份证的校验码是否正确。
        // 校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
        const res = isTrueValidateIdCard(value.split(''))
        if (!res) {
          checkResult.isOk = false
          checkResult.errMsg = `${errorMsgPrefix}格式有误请检查！`
        } else {
          checkResult.isOk = true
          checkResult.errMsg = ''
        }
        return checkResult
      }
    }
  }
  return checkResult
}

export { checkIDCard }
