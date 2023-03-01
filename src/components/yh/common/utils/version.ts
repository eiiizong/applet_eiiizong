import { getSystemInfoSync } from './index'

const compareVersion = (v1:any, v2:any,) => {
  v1 = v1.split('.')
  v2 = v2.split('.')
  const len = Math.max(v1.length, v2.length)

  while (v1.length < len) {
    v1.push('0')
  }
  while (v2.length < len) {
    v2.push('0')
  }

  for (let i = 0; i < len; i++) {
    const num1 = parseInt(v1[i], 10)
    const num2 = parseInt(v2[i], 10)

    if (num1 > num2) {
      return 1
    }
    if (num1 < num2) {
      return -1
    }
  }

  return 0
}

const gte = (version:any) => {
  const system:any = getSystemInfoSync()

  return compareVersion(system.SDKVersion, version) >= 0
}

const canIUseModel = () => {
  return gte('2.9.3')
}

const canIUseFormFieldButton = () => {
  return gte('2.10.3')
}

const canIUseAnimate = () => {
  return gte('2.9.0')
}

const canIUseGroupSetData = () => {
  return gte('2.4.0')
}

const canIUseNextTick = () => {
  return uni.canIUse('nextTick')
}

const canIUseCanvas2d = () => {
  return gte('2.9.0')
}

const canIUseGetUserProfile = () => {
  return !!uni.getUserProfile
}

export {
  canIUseModel,
  canIUseFormFieldButton,
  canIUseAnimate,
  canIUseGroupSetData,
  canIUseNextTick,
  canIUseCanvas2d,
  canIUseGetUserProfile,
}
