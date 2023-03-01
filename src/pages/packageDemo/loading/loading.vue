<template>
  <div class="demo-loading">
    <demo-block title="加载类型" padding>
      <yh-loading custom-style="margin: 8rpx 32rpx 8rpx 0;" />
      <yh-loading custom-style="margin: 8rpx 32rpx 8rpx 0;" type="spinner" />
    </demo-block>

    <demo-block title="自定义颜色" padding>
      <yh-loading custom-style="margin: 8rpx 32rpx 8rpx 0;" color="#1989fa" />
      <yh-loading custom-style="margin: 8rpx 32rpx 8rpx 0;" color="#1989fa" type="spinner" />
    </demo-block>

    <demo-block title="加载文案" padding>
      <yh-loading custom-style="margin: 8rpx 32rpx 8rpx 0;" size="34px">加载中...</yh-loading>
    </demo-block>

    <demo-block title="垂直排列" padding>
      <yh-loading custom-style="margin: 8rpx 32rpx 8rpx 0;" size="24px" vertical> 加载中... </yh-loading>
    </demo-block>

    <demo-block title="自定义文本颜色" padding>
      <yh-loading custom-style="margin: 8rpx 32rpx 8rpx 0;" size="24px" color="#1989fa" text-color="#1989fa" vertical>
        加载中...
      </yh-loading>
      <yh-loading custom-style="margin: 8rpx 32rpx 8rpx 0;" size="24px" text-color="#1989fa" vertical>
        加载中...
      </yh-loading>
    </demo-block>
    <demo-block title="自定义文本大小" padding>
      <yh-loading
        custom-style="margin: 8rpx 32rpx 8rpx 0;"
        size="24px"
        color="#1989fa"
        text-color="#1989fa"
        text-size="20px"
        vertical>
        加载中...
      </yh-loading>
    </demo-block>
  </div>
</template>
<script setup lang="ts">
  import DemoBlock from '@/pages/packageDemo/components/demo-block/demo-block.vue'
  import YhLoading from '@/components/yh/loading/loading.vue'
</script>

<style lang="scss" scoped>
  .demo-loading {
    width: 100%;
    background-color: #f8f8f8;
  }
</style>
