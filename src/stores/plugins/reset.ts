import type { PiniaPluginContext } from 'pinia'

/**
 * 解决pinia中使用 setup 风格定义的store不能使用 $reset() 方法bug
 */
const reset = ({ store }: PiniaPluginContext) => {
  const initialState = JSON.parse(JSON.stringify(store.$state))
  store.$reset = () => {
    store.$state = JSON.parse(JSON.stringify(initialState))
  }
}

export { reset }
