import type { LoginSuccessResult, W014SuccessResultListItem } from '@/server/types/api'

// 全局状态管理类型
declare namespace Store {
  /**
   * store 用户信息
   */
  export interface UserInfo extends LoginSuccessResult {
    /**
     * 用户唯一 token
     */
    token?: string
    /**
     * session_key
     */
    sessionKey?: string
  }
  /**
   * store 工作量查询信息
   */
  export interface WorkloadQueryInfo extends W014SuccessResultListItem {
    /**
     * 查询开始日期
     */
    startDate?: string
    /**
     * 查询结束日期
     */
    endDate?: string
    /**
     * 查询对象手机号
     */
    tel?: string
  }
}

export type { Store }
