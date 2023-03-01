import type { Store } from '@/stores/types'
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

/**
 * 命名规则：
 * 数据字段如: test
 * 方法名则为： useStoreTest
 * getter方法名则为： getStoreTest
 * actions方法名则为： updateStoreTest
 */
//
/**
 * store 用户信息
 */
const useStoreUserInfo = defineStore('storeUserInfo', () => {
  /**
   * 设置 userInfo 游客无须登录也可以访问
   */
  const userInfo = ref<Store.UserInfo>({
    role: '0'
  })

  /**
   * 获取 userInfo
   */
  const getStoreUserInfo = computed(() => userInfo.value)

  /**
   * 更新 userInfo
   */
  function updateStoreUserInfo(data: Store.UserInfo) {
    userInfo.value = {
      ...userInfo.value,
      ...data
    }
  }

  return { userInfo, getStoreUserInfo, updateStoreUserInfo }
})

export { useStoreUserInfo }
