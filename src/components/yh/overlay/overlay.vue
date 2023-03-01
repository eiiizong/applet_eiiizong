<template>
  <YhTransition
    v-if="lockScroll"
    :show="show"
    :custom-class="getClass"
    :custom-style="getStyle"
    :duration="duration"
    @click="emit('click')"
    @touchmove.stop="noop">
    <slot></slot>
  </YhTransition>

  <YhTransition v-else :show="show" :custom-style="getStyle" :duration="duration" @click="emit('click')">
    <slot></slot>
  </YhTransition>
</template>

<!-- 添加之后 可以样式穿透 目前未找到setup语法如何编写-->
<script lang="ts">
  export default {
    options: { styleIsolation: 'shared' }
  }
</script>

<script setup lang="ts">
  import YhTransition from '../transition/transition.vue'

  import { computed } from 'vue'

  const emit = defineEmits(['click'])

  const props = defineProps({
    // 是否展示组件
    show: {
      type: Boolean,
      default: () => false
    },
    // 动画时长，单位为毫秒
    duration: {
      type: [Object],
      default: () => {
        return {
          enter: 300,
          leave: 300
        }
      }
    },
    // 层级
    zIndex: {
      type: Number,
      default: () => 1
    },
    // 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动
    lockScroll: {
      type: Boolean,
      default: () => true
    },
    // 自定义样式
    customStyle: {
      type: String,
      default: () => ''
    },
    // 自定义类名
    customClass: {
      type: String,
      default: () => ''
    }
  })

  const getClass = computed(() => {
    let str = 'yh-overlay '
    const { customClass } = props
    if (customClass) {
      str += customClass
    }
    return str
  })

  const getStyle = computed(() => {
    let str = ''
    const { customStyle, zIndex } = props
    if (customStyle) {
      str += customStyle
    }
    if (zIndex) {
      str += `z-index:${zIndex}; `
    }

    return str
  })

  // for prevent touchmove
  const noop = () => {}
</script>

<style lang="scss" scoped>
  @use '../common/style/var.scss' as *;
  ::v-deep .yh-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $yh-overlay-background-color;
  }
</style>
