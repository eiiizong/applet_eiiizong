const PREFIX = 'yh-'

/**
 *
 * @param name
 * @param mods
 * @returns
 */
const join = (name: string, mods: string[]) => {
  name = PREFIX + name
  mods = mods.map((mod) => {
    return name + '--' + mod
  })
  mods.unshift(name)
  return mods.join(' ')
}

/**
 * 
 * @param mods 
 * @param conf 
 * @returns 
 */
const traversing = (mods: string[], conf: any) => {
  if (!conf) {
    return
  }
  if (typeof conf === 'string' || typeof conf === 'number') {
    mods.push(conf + '')
  } else if (Array.isArray(conf)) {
    conf.forEach((item) => {
      traversing(mods, item)
    })
  } else if (typeof conf === 'object') {
    Object.keys(conf).forEach((key) => {
      conf[key] && mods.push(key)
    })
  }
}

/**
 * 
 */
// const bem: (name: string, conf:any):string
const bem = (name: string, conf:any) => {
  var mods:string[] = []
  traversing(mods, conf)
  return join(name, mods)
}

export { bem }
