/**
 * 首页 热门服务自定义数据格式
 */
export interface PopularServiceNavItem {
  /**
   * id
   */
  id: string
  /**
   * 名称
   */
  name: string
  /**
   * 描述
   */
  desc: string
  /**
   * 路由名称
   */
  pathName: string
  /**
   * 路由包名
   */
  packageName: string
  /**
   * 背景图片url
   */
  imgSrc: string
  /**
   * 是否需要登录
   */
  isAuth: boolean
  /**
   * 验证用户角色
   */
  isAuthRole?: boolean
  /**
   * 是否禁用
   */
  disabled: boolean
}
