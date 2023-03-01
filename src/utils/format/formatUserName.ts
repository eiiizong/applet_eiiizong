/**
 * 格式化姓名 张三 => *三 张三三 => 张*三
 * @param {string} value 姓名
 */
const formatUserName = (value?: string): string => {
  let result = ''
  if (value) {
    value = value.trim()
    const len = value.length

    if (len === 2) {
      result = value.substring(0, 1) + '*'
    } else if (len === 3) {
      result = value.substring(0, 1) + '*' + value.substring(2, 3)
    } else if (len > 3) {
      result = value.substring(0, 1) + '*' + '*' + value.substring(3, len)
    }
  }

  return result
}

export { formatUserName }
