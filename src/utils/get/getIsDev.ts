/**
 * 获取当前环境是否为开发环境
 */
const getIsDev = () => {
  // @ts-ignore：process未找到错误 => 需要该文件在vscode工作区的根目录下，才不会有错误提示。
  return process.env.VITE_NODE_ENV === 'development'
}

export { getIsDev }
