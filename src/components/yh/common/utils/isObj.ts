/**
 *
 * @param {*} value
 * @returns
 */
const isObj = (value: unknown) => {
  const type = typeof value
  return value !== null && (type === 'object' || type === 'function')
}

export { isObj }
