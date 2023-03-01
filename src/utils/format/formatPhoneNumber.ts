/**
 * 格式化电话号码 13288876677 => 132****6677
 * @param {string} value 电话号码
 */
const formatPhoneNumber = (value: string): string => {
  let result = ''
  value = value.trim()
  if (value) {
    const reg = /(\d{3})\d*(\d{4})/
    result = value.replace(reg, '$1****$2')
  }
  return result
}

export { formatPhoneNumber }
