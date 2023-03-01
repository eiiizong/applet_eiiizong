import { getSystemInfoSync } from './getSystemInfoSync'

const requestAnimationFrame = (cb) => {
  const systemInfo = getSystemInfoSync()
  if (systemInfo.platform === 'devtools') {
    return setTimeout(() => {
      cb()
    }, 1000 / 30)
  }
  return wx
    .createSelectorQuery()
    .selectViewport()
    .boundingClientRect()
    .exec(() => {
      cb()
    })
}

export { requestAnimationFrame }
