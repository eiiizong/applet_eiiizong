
/**
 * 
 * @param value 
 * @returns 
 */
const isNumber = (value:string) => {
  return /^\d+(\.\d+)?$/.test(value)
}

export { isNumber }
