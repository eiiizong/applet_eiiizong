<script setup lang="ts">
  import { onLaunch, onShow, onHide, onError } from '@dcloudio/uni-app'
  import { checkAppUpdate } from '@/utils/check'

  onLaunch(() => {
    // console.log('App onLaunch', e)
  })

  onShow(() => {
    // console.log('App Show', e)
    checkAppUpdate()
  })

  onHide(() => {
    // console.log('App Hide')
  })

  onError(() => {
    // console.log('App error', err)
  })
</script>
<style lang="scss">
  // 引入通用样式
  @use '@/assets/styles/index.scss';
  /* 每个页面公共css */
  // @import '@/assets/styles/scss/index.scss';
  // @import '@/assets/iconfont/index.scss'; // iconfont
  @import '@/assets/fonts/Impact/Impact.scss'; // 字体文件
  // @import '@/assets/fonts/YouSheBiaoTiHei/YouSheBiaoTiHei.scss'; // 字体文件
  // @import '@/assets/fonts/PangMenZhengDao/PangMenZhengDao.scss'; // 字体文件
</style>
