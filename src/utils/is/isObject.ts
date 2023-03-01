/**
 * 判断数据是否为对象且不为null
 * @param value
 * @returns
 */
const isObject = (value: any) => {
  return Object.prototype.toString.call(value) === '[object Object]'
}

export { isObject }
