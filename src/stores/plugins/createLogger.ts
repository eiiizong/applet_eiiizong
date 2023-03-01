import type { PiniaPluginContext } from 'pinia'

const repeat = (str: string, times: number) => {
  return new Array(times + 1).join(str)
}

const pad = (num: number, maxLength: number) => {
  return repeat('0', maxLength - num.toString().length) + num
}

const getFormattedTime = () => {
  const time = new Date()
  return (
    ' @ ' +
    pad(time.getHours(), 2) +
    ':' +
    pad(time.getMinutes(), 2) +
    ':' +
    pad(time.getSeconds(), 2) +
    '.' +
    pad(time.getMilliseconds(), 3)
  )
}

/**
 * store 日志打印
 */
const createLogger = ({ store }: PiniaPluginContext) => {
  store.$subscribe(
    (mutation, state) => {
      const { storeId, type } = mutation
      const message = 'Store ' + storeId + ' ' + type + getFormattedTime()
      // eslint-disable-next-line no-console
      console.groupCollapsed(message)
      // eslint-disable-next-line no-console
      console.log('%c mutation.storeId', 'color: #9E9E9E; font-weight: bold', storeId)
      // eslint-disable-next-line no-console
      console.log('%c mutation.type', 'color: #03A9F4; font-weight: bold', type)
      // eslint-disable-next-line no-console
      console.log('%c next state', 'color: #4CAF50; font-weight: bold', { ...state })
      // eslint-disable-next-line no-console
      console.groupEnd()
    },
    // 在组件销毁后依然监听状态的改变
    { detached: true }
  )
}

export { createLogger }
