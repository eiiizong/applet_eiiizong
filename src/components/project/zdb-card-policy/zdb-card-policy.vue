<template>
  <view class="zdb-card-policy" :class="type === '02' ? 'type-02' : ''" @click="onClick">
    <div class="name">{{ renderData.title }}</div>
    <div class="desc">{{ renderData.description }}</div>
    <div class="info">
      <div class="unit">每日经济网</div>
      <div class="line">|</div>
      <div class="time">{{ renderData.create_time }}</div>
    </div>
  </view>
</template>

<script setup lang="ts">
  import type { PropType } from 'vue'
  import { W017SuccessResultListItem } from '@/server/types/api'

  import { navigateTo, setStorageSync } from '@/utils/uni-api'

  const props = defineProps({
    // 渲染数据
    renderData: {
      type: Object as PropType<W017SuccessResultListItem>,
      required: true
    },
    type: {
      type: String,
      default: '01'
    }
  })

  // 点击事件
  const onClick = () => {
    const { renderData } = props
    setStorageSync('NEWS_DETAILS', renderData)
    navigateTo('news-details', 'packageQuery')
  }
</script>

<style lang="scss" scoped>
  .zdb-card-policy {
    width: 100%;
    position: relative;
    padding: $spacing;
    background-color: #ffffff;
    border-radius: 20rpx;
    overflow: hidden;
    .name {
      font-size: 28rpx;
      line-height: 38rpx;
      max-height: 76rpx;
      font-weight: 500;
      color: #404040;
      @include textOverflow(2);
    }
    .desc {
      font-size: 24rpx;
      line-height: 38rpx;
      max-height: 76rpx;
      color: #777;
      margin-top: 12rpx;
      @include textOverflow(2);
    }
    .info {
      position: relative;
      padding-top: 24rpx;
      display: flex;
      align-items: center;
      color: #b4bcc8;
      font-size: 24rpx;
      line-height: 1;
      .line {
        padding: 0 10rpx;
      }
    }
    &.type-02 {
      border-bottom: 1px solid $color-border;
      border-radius: 0;
      background-color: transparent;
      padding: $spacing 0;
    }
  }
</style>
