import { getUpdateManager, showModal, clearStorage } from '@/utils/uni-api'
/**
 * 检测小程序是否有更新，提示用户更新重启应用
 * @example checkAppUpdate()
 */
const checkAppUpdate = (): void => {
  const updateManager = getUpdateManager()

  updateManager.onCheckForUpdate((res) => {
    // 请求完新版本信息的回调
    if (res.hasUpdate) {
      clearStorage()
    }
  })

  updateManager.onUpdateReady(() => {
    showModal('新版本已更新，请立即重启应用！').then(() => {
      // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
      updateManager.applyUpdate()
    })
  })
  // 新的版本下载失败
  updateManager.onUpdateFailed(() => {
    showModal('新版本更新失败，请检查网络后重试！')
  })
}
export { checkAppUpdate }
