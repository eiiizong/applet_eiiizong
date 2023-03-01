/**
 * 获取背景图片样式
 * @param {String} value 图片地址
 */
const getStyleBackgroundImage = (value: string): string => {
  return `background-image: url(${value}); `
}

export { getStyleBackgroundImage }
