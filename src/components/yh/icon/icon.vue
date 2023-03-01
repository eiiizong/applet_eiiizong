<template>
  <view class="yh-icon" :class="getClass" :style="getStyle" @click="emit('click')">
    <Info :dot="dot" :info="info" custom-style="z-index: 1" />
    <image v-if="isImageName" :src="name" mode="aspectFit" class="yh-icon__image" />
  </view>
</template>

<!-- 添加之后 可以样式穿透 -->
<script lang="ts">
  export default {
    options: { styleIsolation: 'shared' }
  }
</script>

<script setup lang="ts">
  import Info from '../info/info.vue'

  import { computed } from 'vue'
  import { addUnit } from '../common/utils'

  const emit = defineEmits(['click'])
  const props = defineProps({
    // 图标名称或图片链接
    name: {
      type: String,
      required: true
    },
    // 是否显示图标右上角小红点
    dot: {
      type: Boolean,
      default: () => false
    },
    // 图标右上角文字提示
    info: {
      type: [String, Number],
      default: () => ''
    },
    // 图标颜色
    color: {
      type: [String],
      default: () => ''
    },
    // 图标大小，如 20px，2em，默认单位为px
    size: {
      type: [String, Number],
      default: () => 'inherit'
    },
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
    // 类名前缀
    classPrefix: {
      type: String,
      default: () => 'yh-iconfont'
    }
  })

  // icon 名称是否为 url 链接
  const isImageName = computed(() => {
    const { name } = props
    let tag = false
    if (name.indexOf('/') > -1) {
      tag = true
    }
    return tag
  })

  // 根据参数获取类名
  const getClass = computed(() => {
    let str = ''
    const { classPrefix, name, customClass } = props
    if (classPrefix) {
      str += classPrefix + ' '
    }
    if (isImageName.value) {
      str += 'yh-icon--image'
    } else {
      str += classPrefix + '-' + name
    }

    if (customClass) {
      str += ` ${customClass}`
    }

    return str
  })

  // 获取style
  const getStyle = computed(() => {
    let str = ''
    const { color, size, customStyle } = props
    if (color) {
      str += `color: ${color}; `
    }

    if (size && addUnit(size)) {
      str += `font-size: ${addUnit(size)}; `
    }

    if (customStyle) {
      str += customStyle
    }

    return str
  })
</script>

<style lang="scss" scoped>
  @use './iconfont/index.scss';
  @use '../common/style/var.scss' as *;

  .yh-icon {
    position: relative;
    display: inline-block;
    &::before {
      display: inline-block;
    }
    &--image {
      width: 1em;
      height: 1em;
    }
    &__image {
      width: 100%;
      height: 100%;
    }
    &__info {
      z-index: 1;
    }
  }
</style>
