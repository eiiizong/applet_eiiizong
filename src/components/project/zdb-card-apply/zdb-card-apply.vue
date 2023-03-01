<template>
  <view class="zdb-card-apply">
    <div class="bg">
      <img :src="imageBg" alt="" class="img" />
    </div>
    <div class="con">
      <div class="title">
        <div class="name">{{ renderData.processname }}</div>
        <div class="status" :class="statusClass">{{ renderData.state }}</div>
      </div>
      <div class="cells">
        <div class="cell">
          <div class="key">申报机构：</div>
          <div class="value">{{ renderData.orgname }}</div>
        </div>
        <div class="cell">
          <div class="key">申报时间：</div>
          <div class="value">{{ moment(renderData.aae036).format('YYYY-MM-DD HH:mm:ss') }}</div>
        </div>
      </div>
      <div class="footer">
        <div class="left">如需查看数据详情，登录“蓉易贷”网站端</div>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
  import imageBg from './images/bg.png'

  import moment from 'moment'

  import type { PropType } from 'vue'
  import { computed } from 'vue'
  import type { W009SuccessResultListItem } from '@/server/types/api'

  const emit = defineEmits(['click'])
  const props = defineProps({
    renderData: {
      type: Object as PropType<W009SuccessResultListItem>,
      required: true
    }
  })

  const statusClass = computed(() => {
    let str = ''
    const { cpb102 } = props.renderData

    if (cpb102 === '0') {
      str = 'no-handle'
    } else if (cpb102 === '2') {
      str = 'success'
    } else if (cpb102 === '4') {
      str = 'back'
    } else if (cpb102 === '9') {
      str = 'fail'
    }

    return str
  })
</script>

<style lang="scss" scoped>
  .zdb-card-apply {
    width: 100%;
    position: relative;
    .bg {
      border-radius: 18rpx;
      overflow: hidden;
      border: 1px solid #bbd3ed;
      .img {
        display: block;
        width: 100%;
        height: 286rpx;
      }
    }
    .con {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding: 32rpx;
    }
    .title {
      color: #202429;
      font-size: 32rpx;
      line-height: 44rpx;
      position: relative;
      padding-right: 100rpx;
      .status {
        min-width: 100rpx;
        position: absolute;
        top: 50%;
        right: -32rpx;
        transform: translateY(-50%);
        line-height: 50rpx;
        background-image: linear-gradient(to right, #ffffff 0%, #c3e1ff 50%, #c3e1ff 100%);
        color: $color-primary;
        font-size: 28rpx;
        padding: 0 8rpx;
        text-align: center;
        &.fail {
          background-image: linear-gradient(to right, #f2f2f2 0%, #e8e8e8 100%);
          color: #979797;
        }
        &.success {
          background-image: linear-gradient(to right, #ffffff 0%, #cbefe8 50%, #cbefe8 100%);
          color: #1bbe9e;
        }
        &.back {
          background-image: linear-gradient(to right, #f2f2f2 0%, #e8e8e8 100%);
          color: #979797;
        }
      }
    }
    .cells {
      color: #565f6e;
      font-size: 32rpx;
      padding-top: 24rpx;
      .cell {
        display: flex;
        align-items: center;
        line-height: 56rpx;
      }
    }
    .footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: 32rpx;
      padding-top: 18rpx;
      .left {
        flex: 1;
        overflow: hidden;
        font-size: 24rpx;
        color: #f68a61;
      }
      .right {
        font-size: 26rpx;
        color: #748193;
        display: flex;
        align-items: center;
      }
    }
  }
</style>
