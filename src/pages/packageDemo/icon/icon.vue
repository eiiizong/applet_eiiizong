<template>
  <div class="demo-icon">
    <demo-block title="基础用法">
      <YhIcon name="male" size="64rpx" custom-style="margin: 0 32rpx;" />
      <YhIcon name="female" size="64rpx" custom-style="margin: 0 32rpx;" />
    </demo-block>

    <demo-block title="提示信息">
      <YhIcon name="male" size="64rpx" custom-style="margin: 0 32rpx;" dot />
      <YhIcon name="female" size="64rpx" custom-style="margin: 0 32rpx;" info="99+" />
    </demo-block>

    <demo-block title="图标颜色">
      <YhIcon name="male" size="64rpx" custom-style="margin: 0 32rpx;" color="#f0f" />
      <YhIcon name="female" size="64rpx" custom-style="margin: 0 32rpx;" color="#f0f" />
    </demo-block>

    <demo-block title="图标大小">
      <YhIcon name="male" size="64rpx" custom-style="margin: 0 32rpx;" />
      <YhIcon name="male" size="80rpx" custom-style="margin: 0 32rpx;" />
    </demo-block>

    <demo-block title="所有图标">
      <div class="items">
        <template v-for="(item, index) in renderList" :key="index">
          <div class="item">
            <YhIcon :name="item" size="64rpx" />
            <div class="name">{{ item }}</div>
          </div>
        </template>
      </div>
    </demo-block>
  </div>
</template>
<script setup lang="ts">
  import DemoBlock from '@/pages/packageDemo/components/demo-block/demo-block.vue'
  import YhIcon from '@/components/yh/icon/icon.vue'

  const renderList = [
    'photo',
    'photo-fail',
    'photo-o',
    'plus',
    'minus',
    'picker',
    'tick',
    'female',
    'male',
    'delete-fill',
    'loading',
    'close',
    'close-round-fill',
    'close_round',
    'back',
    'back-light',
    'scan',
    'checkbox',
    'checkbox-checked',
    'radio',
    'radio-checked',
    'arrow-right',
    'arrow-left',
    'arrow-down',
    'arrow-up',
    'search',
    'voice',
    'voice-fill',
    'wifi',
    'edit'
  ]
</script>

<style lang="scss" scoped>
  .demo-icon {
    width: 100%;
    background-color: #f8f8f8;
    .items {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      padding: 24rpx;
      .item {
        width: 24%;
        text-align: center;
        margin-bottom: 24rpx;
        background-color: #fff;
        border-radius: 8rpx;
        padding: 16rpx;
        color: $color-primary;
        margin-right: 10rpx;
        .name {
          font-size: 24rpx;
          line-height: 48rpx;
          color: #666;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          color: $color-text;
        }
        &:nth-of-type(4n + 4) {
          margin-right: 0;
        }
      }
    }
  }
</style>
