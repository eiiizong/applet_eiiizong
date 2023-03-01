/**
 * 格式化身份证号码 510902199507237788 => 5****************8
 * @param {string} value 身份证号码
 */
const formatIDCardNumber = (value: string): string => {
  let result = ''
  value = value.trim()
  if (value) {
    const len = value.length
    result = value.substring(0, 1) + '*'.repeat(len - 2) + value.substring(len - 1, len)
  }
  return result
}

export { formatIDCardNumber }
