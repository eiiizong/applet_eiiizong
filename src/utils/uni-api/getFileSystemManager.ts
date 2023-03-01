/**
 * 获取全局唯一的文件管理器
 * @returns { FileSystemManager } 文件管理器
 * @support uniapp详细说明： https://uniapp.dcloud.net.cn/api/file/getFileSystemManager.html#getfilesystemmanager
 * @example getFileSystemManager()
 */
const getFileSystemManager = () => {
  return uni.getFileSystemManager()
}
export { getFileSystemManager }
