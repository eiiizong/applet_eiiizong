/**
 * 本API返回全局唯一的版本更新管理器对象： updateManager，用于管理小程序更新。
 * @support uniapp详细说明： https://uniapp.dcloud.io/api/other/update.html#getupdatemanager
 * @example getUpdateManager()
 */
const getUpdateManager = (): UniApp.UpdateManager => uni.getUpdateManager()

export { getUpdateManager }
