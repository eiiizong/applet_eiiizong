
/**
 * 
 * @param fn 
 */
const nextTick = (fn:Function) => {
  setTimeout(() => {
    fn()
  }, 1000 / 30)
}

export { nextTick }
