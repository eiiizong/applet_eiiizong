type Listener = (result: any) => void
/**
 * 取消监听键盘高度变化事件
 * @support uniapp详细说明： https://uniapp.dcloud.net.cn/api/key.html#offKeyboardHeightChange
 * @example
  offKeyboardHeightChange().then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
 */
const offKeyboardHeightChange = (listener: Listener): void => {
  uni.offKeyboardHeightChange(listener)
}
export { offKeyboardHeightChange }
