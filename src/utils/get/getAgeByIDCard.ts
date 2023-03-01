import { getIsDev } from './getIsDev'

const isDev = getIsDev()

/**
 * 根据身份证号（使用该方法前先校验身份证号格式是否正确）获取年龄
 * @param {String} value 身份证号码
 */
const getAgeByIDCard = (value: string): string => {
  // 格式化身份证的值 去除空格 将 X 转化为 x
  value = (value + '').trim().toUpperCase()

  let age = ''

  if (value) {
    const len = value.length
    if (len != 15 && len != 18) {
      if (isDev) {
        // eslint-disable-next-line no-console
        console.error('身份证号码只能为15位或18位，其它不合法，请检查！')
      }
    } else {
      let birthday = ''
      // 处理15位的身份证号码从号码中得到生日和性别代码
      if (len === 15) {
        birthday = '19' + value.substring(6, 2) + '/' + value.substring(8, 2) + '/' + value.substring(10, 2)
      }
      // 处理18位的身份证号码从号码中得到生日和性别代码
      if (len === 18) {
        birthday = value.substring(6, 4) + '/' + value.substring(10, 2) + '/' + value.substring(12, 2)
      }

      // 时间字符串里，必须是“/”
      const birthDate = new Date(birthday)
      const nowDate = new Date()

      let _age = nowDate.getFullYear() - birthDate.getFullYear()

      // 再考虑月、天的因素。进行比较。
      // 现在的月份小于生日月份 年龄减1
      // 现在的月份等于生日月份并且现在的号数小于生日月份的号数 年龄减1
      if (
        nowDate.getMonth() < birthDate.getMonth() ||
        (nowDate.getMonth() == birthDate.getMonth() && nowDate.getDate() < birthDate.getDate())
      ) {
        _age--
      }
      age = _age + ''
    }
  } else {
    if (isDev) {
      // eslint-disable-next-line no-console
      console.error('身份证号码为空，请检查！')
    }
  }
  return age
}

export { getAgeByIDCard }
