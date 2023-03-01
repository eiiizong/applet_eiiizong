<template>
  <view v-if="isShow" :class="getClass" :style="customStyle" @click="emit('click')">
    {{ dot ? '' : info }}
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
  import { bem } from '../common/utils'

  const emit = defineEmits(['click'])

  const props = defineProps({
    // 自定义类名
    customClass: {
      type: String,
      default: () => ''
    },
    // 自定义样式
    customStyle: {
      type: String,
      default: () => ''
    },
    // 是否显示图标右上角小红点 优先级大于info参数
    dot: {
      type: Boolean,
      default: () => false
    },
    // 图标右上角文字提示
    info: {
      type: [String, Number],
      default: () => ''
    }
  })

  // 是否显示组件
  const isShow = computed(() => {
    const { info, dot } = props
    let result = false
    if ((info !== null && info !== '') || dot) {
      result = true
    }
    return result
  })

  // 组件类名
  const getClass = computed(() => {
    let str = ''
    const { dot, customClass } = props

    str += bem('info', { dot })

    if (customClass) {
      str += ` ${customClass}`
    }

    return str
  })
</script>

<style lang="scss" scoped>
  @use '../common/style/var.scss' as *;

  .yh-info {
    position: absolute;
    top: 0;
    right: 0;
    box-sizing: border-box;
    white-space: nowrap;
    text-align: center;
    -webkit-transform: translate(50%, -50%);
    transform: translate(50%, -50%);
    -webkit-transform-origin: 100%;
    transform-origin: 100%;
    min-width: $yh-info-size;
    padding: $yh-info-padding;
    color: $yh-info-color;
    font-weight: $yh-info-font-weight;
    font-size: $yh-info-font-size;
    font-family: $yh-info-font-family;
    line-height: calc($yh-info-size - $yh-info-border-width * 2);
    background-color: $yh-info-background-color;
    border: $yh-info-border-width solid $yh--white;
    border-radius: $yh-info-size;
    &--dot {
      min-width: 0;
      border-radius: 100%;
      width: $yh-info-dot-size;
      height: $yh-info-dot-size;
      background-color: $yh-info-dot-color;
    }
  }
</style>
