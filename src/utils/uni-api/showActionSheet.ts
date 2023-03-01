import { getIsDev } from '@/utils/get'

interface ShowActionPopover {
  /**
   * 指示区域坐标，使用原生 navigationBar 时一般需要加上 navigationBar 的高度
   */
  top?: number
  /**
   * 指示区域坐标
   */
  left?: number
  /**
   * 指示区域宽度
   */
  width?: number
  /**
   * 指示区域高度
   */
  height?: number
}
/**
 * 显示操作菜单
 * @param {any[]} itemList - 按钮的文字数组。
 * @param {string} [alertText=''] - 警示文案（同菜单标题）。默认值''。微信小程序（仅真机有效）。
 * @param {HBuilderX.ColorString | string} [itemColor='#000000'] - 按钮的文字颜色，字符串格式。默认值`#000000`。App-iOS、字节跳动小程序、飞书小程序不支持。
 * @param {ShowActionPopover|undefined} [popover=undefined] - 大屏设备弹出原生选择按钮框的指示区域，默认居中显示。默认值undefined。App-iPad（2.6.6+）、H5（2.9.2）。
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/ui/prompt?id=showactionsheet
 * @example
  showActionSheet(['A', 'B', 'C']).then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
 */
const showActionSheet = (
  itemList: any[],
  alertText = '',
  itemColor: HBuilderX.ColorString | string = '#000000',
  popover: ShowActionPopover | undefined = undefined
): Promise<UniApp.ShowActionSheetRes> => {
  const isDev = getIsDev()
  return new Promise((resolve, reject) => {
    uni.showActionSheet({
      itemList,
      popover,
      alertText,
      itemColor,
      success(res) {
        resolve(res)
      },
      fail(err) {
        // eslint-disable-next-line no-console
        isDev && console.error('uni.showActionSheet 接口调用失败 => ', err) // 点击取消按钮也会触发
        reject(err)
      }
    })
  })
}
export { showActionSheet }
