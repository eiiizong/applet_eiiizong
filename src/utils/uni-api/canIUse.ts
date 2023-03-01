/**
 * 判断应用的 API，回调，参数，组件等是否在当前版本可用
 * @param {string} str - 使用 ${API}.${method}.${param}.${options} 或者 ${component}.${attribute}.${option} 方式来调用
 *
 * ${API} 代表 API 名字
 *
 * ${method} 代表调用方式，有效值为return, success, object, callback
 *
 * ${param} 代表参数或者返回值
 *
 * ${options} 代表参数的可选值
 *
 * ${component} 代表组件名字
 *
 * ${attribute} 代表组件属性
 *
 * ${option} 代表组件属性的可选值
 * @support uniapp详细说明：https://uniapp.dcloud.io/api/caniuse.html#caniuse
 * @example 
   canIUse('request.object.method.GET');
   canIUse('button.open-type.contact');
*/
const canIUse = (str: string): boolean => {
  return uni.canIUse(str)
}
export { canIUse }
