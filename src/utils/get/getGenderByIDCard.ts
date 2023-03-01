import { getIsDev } from './getIsDev'

const isDev = getIsDev()

enum Gender {
  male = '男',
  female = '女',
  other = '其他'
}

/**
 * 根据身份证号（使用该方法前先校验身份证号格式是否正确）获取性别
 * @param {String} value 身份证号
 */
const getGenderByIDCard = (value: string): string => {
  // 格式化身份证的值 去除空格 将 X 转化为 x
  value = (value + '').trim().toUpperCase()

  let result: Gender = Gender.other

  if (!value) {
    if (isDev) {
      console.error('身份证号码为空，请检查！')
    }
  } else {
    const len = value.length

    if (len != 15 && len != 18) {
      if (isDev) {
        console.error('身份证号码只能为15位或18位，其它不合法，请检查！')
      }
    }

    if (parseInt(value.slice(-2, -1)) % 2 === 1) {
      result = Gender.male
    } else {
      result = Gender.female
    }
  }

  return result
}

export { getGenderByIDCard }
