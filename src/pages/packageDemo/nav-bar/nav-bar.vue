<template>
  <div class="demo-nav-bar">
    <YhNavBar title="NavBar 导航栏测试测试测测试" left-arrow left-text="返回" @click-left="onClickLeft" />
  </div>
</template>
<script setup lang="ts">
  import DemoBlock from '@/pages/packageDemo/components/demo-block/demo-block.vue'
  import YhNavBar from '@/components/yh/nav-bar/nav-bar.vue'
  import YhIcon from '@/components/yh/icon/icon.vue'

  const onClickLeft = () => {}

  const onClickRight = () => {}
</script>

<style lang="scss" scoped>
  .demo-nav-bar {
    width: 100%;
    background-color: #f8f8f8;
    background-color: #f00;
  }
</style>
