/**
 * 获取当前日期，包括年月日，不包括其他粒度
 * @param {String} fileds 日期粒度 day（默认）、 month、 year
 * @param {String} delimiter 分隔符 默认 -
 */
const getCurrentDate = (fileds = 'day', delimiter = '-'): string => {
  const nowDate = new Date()

  let strArr: string[] = []

  const year: string = nowDate.getFullYear() + ''
  let month: string = nowDate.getMonth() + 1 + ''
  let day: string = nowDate.getDate() + ''

  if (parseInt(month) < 10) {
    month = '0' + month
  }

  if (parseInt(day) < 10) {
    day = '0' + day
  }

  switch (fileds) {
    case 'day':
      strArr = [year, month, day]
      break
    case 'month':
      strArr = [year, month]
      break
    case 'year':
      strArr = [year]
      break
    default:
      strArr = [year, month, day]
      break
  }
  return strArr.join(delimiter)
}

export { getCurrentDate }
