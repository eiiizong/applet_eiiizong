import { navigateTo } from '@/utils/uni-api'
/**
 * 跳转至登录页
 */
const useJumpLoginPage = () => {
  navigateTo('login', 'packageCommon')
}
export { useJumpLoginPage }
