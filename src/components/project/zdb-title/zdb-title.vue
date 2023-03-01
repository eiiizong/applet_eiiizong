<template>
  <view class="zdb-title" :class="[space ? 'space' : '']">
    <div class="left">{{ title }}</div>
    <div class="right"></div>
  </view>
</template>

<script setup lang="ts">
  const emit = defineEmits(['click'])
  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    rightText: {
      type: String,
      default: () => '查看更多'
    },
    /**
     * 是否有左右间距 默认 true
     */
    space: {
      type: Boolean,
      default: () => false
    }
  })
</script>

<style lang="scss" scoped>
  .zdb-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 32rpx;
    line-height: 44rpx;
    color: #333333;
    padding: 20rpx 0;
    &.space {
      padding: 20rpx $spacing;
    }
  }
</style>
