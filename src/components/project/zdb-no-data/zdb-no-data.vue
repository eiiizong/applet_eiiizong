<template>
  <div class="zdb-no-data" :class="spaceTop ? 'space-top' : ''">
    <img class="img" :src="imagesNoData" alt="" />
    <div class="tip">{{ tip }}</div>
  </div>
</template>

<script setup lang="ts">
  import imagesNoData from './images/no-data-02.png'

  const props = defineProps({
    /**
     * 文字提示
     */
    tip: {
      type: String,
      default: () => '暂无相关数据'
    },
    /**
     * 是否预留距离顶部的空白距离
     */
    spaceTop: {
      type: Boolean,
      default: () => true
    }
  })
</script>

<style lang="scss" scoped>
  .zdb-no-data {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    .img {
      width: 226rpx;
      height: 190rpx;
      margin: auto;
    }
    .tip {
      font-size: $font-size-base;
      line-height: 1.4;
      color: $color-text-placeholder;
      padding-bottom: $spacing-col-base;
    }
    &.space-top {
      padding-top: $spacing * 4;
    }
  }
</style>
