/**
 * 
 * @param value 
 * @returns 
 */
const isArray = (value:any) => {
  const res = value && value.constructor === 'Array'
  return res
}

export { isArray }
