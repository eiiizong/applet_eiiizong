/**
 * @param {String} value 银行卡号
 * 格式化银行卡号 66634343535353535355 => 6*****************5
 */
const formatBankCardNumber = (value: string): string => {
  let result = ''
  value = value.trim()
  if (value) {
    const len = value.length
    result = value.substring(0, 1) + '*'.repeat(len - 2) + value.substring(len - 1, len)
  }
  return result
}

export { formatBankCardNumber }
