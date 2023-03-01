<template>
  <div class="demo-overlay">
    <demo-block title="基础用法" padding>
      <yh-button type="primary" @click="show = true"> 显示遮罩层 </yh-button>
      <yh-overlay :show="show" @click="show = false" />
    </demo-block>

    <demo-block title="嵌入内容" padding>
      <yh-button type="primary" @click="showEmbedded = true"> 嵌入内容 </yh-button>
      <yh-overlay :show="showEmbedded" @click="showEmbedded = false">
        <view class="wrapper">
          <div class="block" @clcik="noop"></div>
        </view>
      </yh-overlay>
    </demo-block>
  </div>
</template>
<script setup lang="ts">
  import DemoBlock from '@/pages/packageDemo/components/demo-block/demo-block.vue'
  import YhOverlay from '@/components/yh/overlay/overlay.vue'
  import YhButton from '@/components/yh/button/button.vue'

  import { ref } from 'vue'

  const show = ref(false)
  const showEmbedded = ref(false)

  const noop = () => {}
</script>

<style lang="scss" scoped>
  .demo-overlay {
    background-color: #f8f8f8;
    .wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

    .block {
      width: 120px;
      height: 120px;
      background-color: #fff;
    }
  }
</style>
