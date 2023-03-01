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
 * store 系统信息
 */
const useStoreSystemInfo = defineStore('storeSystemInfo', () => {
  const systemInfo = ref({})

  const getStoreSystemInfo = computed(() => systemInfo.value)

  function updateStoreSystemInfo(data: UniApp.GetSystemInfoResult) {
    systemInfo.value = data
  }

  return { systemInfo, getStoreSystemInfo, updateStoreSystemInfo }
})

export { useStoreSystemInfo }
