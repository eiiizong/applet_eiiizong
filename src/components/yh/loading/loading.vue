<template>
  <view :class="getClass" :style="customStyle">
    <view :class="'yh-loading__spinner yh-loading__spinner--' + type" :style="getSpinnerStyle">
      <template v-if="type === 'spinner'">
        <view v-for="(item, index) in array12" :key="index" class="yh-loading__dot" />
      </template>
    </view>
    <view class="yh-loading__text" :style="getTextStyle">
      <slot></slot>
    </view>
  </view>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { bem, addUnit } from '../common/utils'

  const emit = defineEmits(['click'])

  const props = defineProps({
    // 颜色
    color: {
      type: String,
      default: () => ''
    },
    // 类型，可选值为 spinner circular
    type: {
      type: String,
      default: () => 'circular'
    },
    // 加载图标大小，默认单位为 rpx
    size: {
      type: [String, Number],
      default: () => ''
    },
    // 文字大小，默认单位为为 rpx
    textSize: {
      type: [String, Number],
      default: () => ''
    },
    // 文字颜色
    textColor: {
      type: [String],
      default: () => ''
    },
    // 是否垂直排列图标和文字内容
    vertical: {
      type: [Boolean],
      default: () => false
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

  const array12 = Array.from({ length: 12 })

  const getClass = computed(() => {
    let str = ''
    const { vertical, customClass } = props
    str = bem('loading', { vertical })

    if (customClass) {
      str += ` ${customClass}`
    }
    return str
  })

  const getSpinnerStyle = computed(() => {
    let str = ''
    const { color, size } = props
    if (color) {
      str += `color: ${color}; `
    }
    if (size) {
      str += `width: ${addUnit(size)}; `
      str += `height: ${addUnit(size)}; `
    }
    return str
  })

  const getTextStyle = computed(() => {
    let str = ''
    const { textSize, textColor } = props
    if (textSize) {
      str += `font-size: ${addUnit(textSize)}; `
    }
    if (textColor) {
      str += `color: ${textColor}; `
    }
    return str
  })
</script>

<style lang="scss" scoped>
  @use '../common/style/var.scss' as *;

  @keyframes yh-rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  .yh-loading {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: $yh-loading-spinner-color;
    &__spinner {
      position: relative;
      box-sizing: border-box;
      width: $yh-loading-spinner-size;
      // compatible for 0.x, users may set width or height in root element
      max-width: 100%;
      max-height: 100%;
      height: $yh-loading-spinner-size;
      animation: yh-rotate $yh-loading-animation-duration linear infinite;

      &--spinner {
        animation-timing-function: steps(12);
      }

      &--circular {
        border: 1px solid transparent;
        border-top-color: currentColor;
        border-radius: 100%;
      }
    }

    &__text {
      margin-left: $yh--padding-xs;
      font-size: $yh-loading-text-font-size;
      line-height: $yh-loading-text-line-height;
      color: $yh-loading-text-color;

      &:empty {
        display: none;
      }
    }

    &--vertical {
      flex-direction: column;

      .yh-loading__text {
        margin: $yh--padding-xs 0 0;
      }
    }

    &__dot {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      &::before {
        display: block;
        width: 2px;
        height: 25%;
        margin: 0 auto;
        background-color: currentColor;
        border-radius: 40%;
        content: ' ';
      }
    }
  }

  @for $i from 1 through 12 {
    .yh-loading__dot:nth-of-type(#{$i}) {
      transform: rotate($i * 30deg);
      opacity: 1 - calc(0.75 / 12) * ($i - 1);
    }
  }
</style>
