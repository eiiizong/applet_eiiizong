type Listener = (result: UniApp.OnKeyboardHeightChangeResult) => void

/**
 * 监听键盘高度变化
 * @support uniapp详细说明： https://uniapp.dcloud.net.cn/api/key.html#onKeyboardHeightChange
 * @example
  onKeyboardHeightChange().then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
 */
const onKeyboardHeightChange = (listener: Listener): void => {
  uni.onKeyboardHeightChange(listener)
}
export { onKeyboardHeightChange }
