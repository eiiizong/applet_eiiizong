<template>
  <div class="demo-block" :class="padding ? 'demo-block--padding' : ''" @click="emit('click')">
    <view v-if="title" class="demo-block__title">{{ title }}</view>
    <view class="demo-block__content">
      <slot></slot>
    </view>
  </div>
</template>

<script setup lang="ts">
  const emit = defineEmits(['click'])
  const props = defineProps({
    title: {
      type: [String],
      default: () => ''
    },
    padding: {
      type: [Boolean],
      default: () => false
    }
  })
</script>
<style lang="scss" scoped>
  .demo-block {
    &--padding {
      padding: 0 30rpx;
      .demo-block__title {
        padding-left: 0;
      }
    }
    &__title {
      margin: 0;
      font-weight: 400;
      font-size: 28rpx;
      color: rgba(69, 90, 100, 0.6);
      padding: 30rpx;
    }
    &__content {
      width: 100%;
    }
  }
</style>
