import type { CustomUniApp } from './types'

/**
 * 根据参数拼接路由。
 * @param {string} name - 跳转的页面名称 例如：`test`
 * @param {string} [packageName] - 跳转的页面分包名称 例如：`packageA`
 * @param {CustomUniApp.JumpRouteUrParams| null} [params] - 路由参数。例如：`{a: 1}` 或者 `a=1&b=2`
 * @example getJumpRouteUrl('test', 'packageA', { a:1 })
 */
const getJumpRouteUrl = (name: string, packageName: string, params: CustomUniApp.JumpRouteUrParams | null): string => {
  let url = '' // 跳转的路径
  let paramStr = '' // 参数字符串拼接
  if (name) {
    // name 存在 / 表示传入的完整路由:
    if (name.indexOf('/') > -1) {
      url = name
    } else {
      url = `/pages/${name}/${name}`
      // 存在包名
      if (packageName) {
        url = `/pages/${packageName}/${name}/${name}`
      }

      // 存在参数
      if (params) {
        // 对象 Object
        if (Object.prototype.toString.call(params) === '[object Object]') {
          for (const item in params) {
            let value = params[item]
            if (value) {
              if (Object.prototype.toString.call(value) === '[object Object]') {
                value = JSON.stringify(value)
              }
              paramStr += `${item}=${value}&`
            }
          }
        }
        // 字符串 String
        // if (Object.prototype.toString.call(params) === '[object String]') {
        //   paramStr = params
        // }
        // 有参数传入才加入
        if (paramStr) {
          url = `${url}?${paramStr}`
        }
      }
    }
  }
  return url
}
export { getJumpRouteUrl }
