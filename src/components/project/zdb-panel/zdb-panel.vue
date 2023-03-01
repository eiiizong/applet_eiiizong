<template>
  <view class="zdb-panel">
    <div class="title">
      <div class="left">{{ title }}</div>
      <div v-if="rightText" class="right" @click="emit('click')">
        <span>{{ rightText }}</span>
        <YhIcon name="arrow-right" size="24rpx" />
      </div>
    </div>
    <div class="content" :class="space ? 'space' : ''">
      <slot></slot>
    </div>
  </view>
</template>

<script setup lang="ts">
  import YhIcon from '@/components/yh/icon/icon.vue'

  const emit = defineEmits(['click'])
  const props = defineProps({
    /**
     * 标题
     */
    title: {
      type: String,
      required: true
    },
    /**
     * 右边查看更多
     */
    rightText: {
      type: String,
      default: () => ''
    },
    /**
     * 是否显示content内的间距，默认true
     */
    space: {
      type: Boolean,
      default: () => true
    }
  })
</script>

<style lang="scss" scoped>
  .zdb-panel {
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 32rpx;
      font-weight: 400;
      line-height: 1;
      color: #333333;
      height: 100rpx;
      padding: 0 40rpx;
      .left {
        font-weight: 700;
      }
      .right {
        font-size: 24rpx;
        font-weight: 400;
        line-height: 1;
        color: #999999;
      }
    }
    .content {
      &.space {
        padding: 0 $spacing;
      }
    }
  }
</style>
