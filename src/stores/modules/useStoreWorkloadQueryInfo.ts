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
 * store 工作量查询信息
 */
const useStoreWorkloadQueryInfo = defineStore('storeWorkloadQueryInfo', () => {
  /**
   * 设置 workloadQueryInfo
   */
  const workloadQueryInfo = ref<Store.WorkloadQueryInfo>({})

  /**
   * 获取 workloadQueryInfo
   */
  const getWorkloadQueryInfo = computed(() => workloadQueryInfo.value)

  /**
   * 更新 workloadQueryInfo
   */
  function updateWorkloadQueryInfo(data: Store.WorkloadQueryInfo) {
    workloadQueryInfo.value = {
      ...workloadQueryInfo.value,
      ...data
    }
  }

  return { workloadQueryInfo, getWorkloadQueryInfo, updateWorkloadQueryInfo }
})

export { useStoreWorkloadQueryInfo }
