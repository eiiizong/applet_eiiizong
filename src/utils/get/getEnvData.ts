/**
 * 获取当前环境配置的值
 * @param key 键
 * @returns
 */
const getEnvData = (key: string) => {
  // @ts-ignore：process未找到错误 => 需要该文件在vscode工作区的根目录下，才不会有错误提示。
  const value = process.env[key]
  console.log(`geEnvData key=> ${key} value=> ${value}`)
  return value
}

export { getEnvData }
