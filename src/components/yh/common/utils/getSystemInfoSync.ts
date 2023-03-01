const getSystemInfoSync = () => {
  let systemInfo: any = null
  if (systemInfo === null) {
    systemInfo = uni.getSystemInfoSync()
  }

  return systemInfo
}

export { getSystemInfoSync }
