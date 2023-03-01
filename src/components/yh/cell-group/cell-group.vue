<template>
  <view v-if="title" class="yh-cell-group__title">
    {{ title }}
  </view>
  <view :class="getClass">
    <slot></slot>
  </view>
</template>

<!-- 添加之后 可以样式穿透 目前未找到setup语法如何编写-->
<script lang="ts">
  export default {
    options: { styleIsolation: 'shared' }
  }
</script>

<script setup lang="ts">
  import { computed } from 'vue'
  const emit = defineEmits(['change', 'close', 'open'])

  const props = defineProps({
    // 分组标题
    title: {
      type: String,
      default: () => ''
    },
    // 是否展示为圆角卡片风格
    inset: {
      type: Boolean,
      value: true
    },
    // 是否显示外边框
    border: {
      type: Boolean,
      value: true
    },
    customClass: {
      type: String,
      default: () => ''
    }
  })

  const getClass = computed(() => {
    let str = ''
    const { border, customClass } = props
    if (border) {
      str += ` yh-hairline--top-bottom`
    }
    if (customClass) {
      str += ` ${customClass}`
    }
    return str
  })
</script>

<style lang="scss" scoped>
  @use '../common/style/var.scss' as *;

  .yh-cell-group {
    &__title {
      padding: $yh-cell-group-title-padding;
      font-size: $yh-cell-group-title-font-size;
      line-height: $yh-cell-group-title-line-height;
      color: $yh-cell-group-title-color;
    }
  }
</style>
