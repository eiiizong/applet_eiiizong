<template>
  <div class="demo-toast">
    <demo-block title="文字提示" padding>
      <yh-button type="primary" custom-style="margin-right:20rpx;" @click="showToast = true">文字提示</yh-button>
      <yh-button type="primary" @click="showLongToast = true">长文字提示</yh-button>
    </demo-block>

    <demo-block title="加载提示" padding>
      <yh-button type="primary" custom-style="margin-right:20rpx;" @click="showLoadingToast = true">加载提示</yh-button>
      <yh-button type="primary" @click="showCustomLoadingToast = true">自定义加载图标</yh-button>
    </demo-block>

    <demo-block title="成功/失败提示" padding>
      <yh-button type="info" custom-style="margin-right:20rpx;" @click="showSuccessToast = true">成功提示</yh-button>
      <yh-button type="danger" @click="showFailToast = true">失败提示</yh-button>
    </demo-block>

    <demo-block title="动态更新提示" padding>
      <yh-button type="primary" @click="onShowCustomizedToast">动态更新提示</yh-button>
    </demo-block>

    <yh-toast :show="showToast" message="消息提示" @close="showToast = false" />
    <yh-toast :show="showLongToast" message="这是一条长文字提示，超过一定字数就会换行" @close="showLongToast = false" />
    <yh-toast type="loading" :show="showLoadingToast" message="加载中..." @close="showLoadingToast = false" />
    <yh-toast
      type="loading"
      :show="showCustomLoadingToast"
      message="加载中..."
      loading-type="spinner"
      @close="showCustomLoadingToast = false" />
    <yh-toast type="success" :show="showSuccessToast" message="成功文案" @close="showSuccessToast = false" />
    <yh-toast type="fail" :show="showFailToast" message="失败提示" @close="showFailToast = false" />
    <yh-toast
      type="loading"
      :show="showCustomizedToast"
      :duration="0"
      :message="customizedToastText"
      @close="showCustomizedToast = false" />
  </div>
</template>
<script lang="ts" setup>
  import DemoBlock from '@/pages/packageDemo/components/demo-block/demo-block.vue'
  import YhToast from '@/components/yh/toast/toast.vue'
  import YhButton from '@/components/yh/button/button.vue'

  import { ref } from 'vue'
  import Toast from '@/components/yh/toast/toast'
  const showToast = ref(false)

  const showLongToast = ref(false)
  const showLoadingToast = ref(false)
  const showSuccessToast = ref(false)
  const showCustomLoadingToast = ref(false)
  const showFailToast = ref(false)
  const showCustomizedToast = ref(false)
  const customizedToastText = ref('')

  const onShowCustomizedToast = () => {
    const text = (second) => `倒计时 ${second} 秒`
    showCustomizedToast.value = true
    customizedToastText.value = text(3)

    let second = 3
    const timer = setInterval(() => {
      second--
      if (second) {
        customizedToastText.value = text(second)
      } else {
        clearInterval(timer)
        showCustomizedToast.value = false
      }
    }, 1000)
  }
</script>

<style lang="scss" scoped>
  .demo-toast {
    width: 100%;
  }
</style>
