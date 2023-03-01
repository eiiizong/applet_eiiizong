<template>
  <view class="zdb-table" :class="space ? 'space' : ''">
    <div v-for="(item, index) in renderList" :key="index" class="col">
      <div class="key">{{ item.key }}</div>
      <div class="value">{{ item.value + item.unit }}</div>
    </div>
  </view>
</template>

<script setup lang="ts">
  import type { PropType } from 'vue'

  interface Item {
    key: string
    value: string | number
    unit: string
  }

  const emit = defineEmits(['click'])
  const props = defineProps({
    renderList: {
      type: Array as PropType<Item[]>,
      required: true
    },
    space: {
      type: Boolean,
      default: false
    }
  })
</script>

<style lang="scss" scoped>
  .zdb-table {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    border: 1px solid $color-border;
    &.space {
      margin-top: 40rpx;
    }
    .col {
      width: 50%;
      font-size: 30rpx;
      line-height: 42rpx;
      .key {
        height: 72rpx;
        color: #999999;
        background-color: #f2f2f2;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid $color-border;
      }
      .value {
        height: 72rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid $color-border;
      }
      &:nth-of-type(2n + 1) {
        border-right: 1px solid $color-border;
      }
      &:nth-last-of-type(1),
      &:nth-last-of-type(2) {
        .value {
          border-bottom: 0;
        }
      }
    }
  }
</style>
