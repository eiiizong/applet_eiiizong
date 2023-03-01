import { isDef, isNumber } from './index'

/**
 *
 * @param value
 * @returns
 */
const addUnit = (value: string | number) => {
  if (!isDef(value)) {
    return undefined
  }
  value = String(value)
  return isNumber(value) ? `${value}rpx` : value
}

export { addUnit }
