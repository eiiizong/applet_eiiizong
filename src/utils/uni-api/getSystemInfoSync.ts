/**
 * 获取系统信息的同步接口
 * @support uniapp详细说明：https://uniapp.dcloud.io/api/system/info?id=getsysteminfosync
 *
 * @example
 try {
  const res = getSystemInfoSync();
  console.log(res.model);
  console.log(res.pixelRatio);
  console.log(res.windowWidth);
  console.log(res.windowHeight);
  console.log(res.language);
  console.log(res.version);
  console.log(res.platform);
} catch (e) {
  // error
}
 */
const getSystemInfoSync = () => {
  return uni.getSystemInfoSync()
}
export { getSystemInfoSync }
