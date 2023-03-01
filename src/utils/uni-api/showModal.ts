/**
 * 显示模态弹窗，可以只有一个确定按钮，也可以同时有确定和取消按钮。类似于一个API整合了 html 中：alert、confirm。
 * @param {!string} content - 提示的内容
 * @param {string} [title='提示'] - 提示的标题，默认值`提示`
 * @param {boolean} [showCancel=false] - 是否显示取消按钮。默认值`false`。
 * @param {boolean} [editable=false] - 是否显示输入框。默认值`false`。
 * @param {string} [placeholderText=''] - 显示输入框时的提示文本。默认值`''`。
 * @param {string} [cancelText='取消'] - 取消按钮的文字。默认值`取消`。
 * @param {string} [cancelColor='#000000'] - 取消按钮的文字颜色。默认值`#000000`。
 * @param {string} [confirmText='确定'] - 确定按钮的文字。默认值`确定`。
 * @param {string} [confirmColor='#576B95'] - 确定按钮的文字颜色。默认值`#576B95`。
 * @returns { Promise }
 * @support  uniapp详细说明： https://uniapp.dcloud.io/api/ui/prompt?id=showmodal
 * @example
  showModal('提示内容').then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
*/
const showModal = (
  content: string,
  title = '提示',
  showCancel = false,
  editable = false,
  placeholderText = '',
  cancelText = '取消',
  cancelColor = '#000000',
  confirmText = '确定',
  confirmColor = '#576B95'
): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    uni.showModal({
      title,
      content,
      showCancel,
      cancelText,
      cancelColor,
      confirmText,
      confirmColor,
      editable,
      placeholderText,
      success(res) {
        if (res.confirm) {
          resolve(true)
        } else if (res.cancel) {
          reject(false)
        } else {
          console.error('uni.showModal 接口调用出现未知错误 => ', res)
          reject(res)
        }
      },
      fail(err) {
        console.error('uni.showModal 接口调用失败 => ', err)
        reject(err)
      },
    })
  })
}

export { showModal }
