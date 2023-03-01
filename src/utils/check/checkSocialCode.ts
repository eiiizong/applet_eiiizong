/**
 * 校验统一社会信用代码
 * @param {string} value 18位统一社会信用代码
 */
const checkSocialCode = (value: string): boolean => {
  const reg = /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/
  value = value.trim()
  return reg.test(value)
}

export { checkSocialCode }
