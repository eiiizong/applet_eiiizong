<template>
  <div class="yh-nav-bar-wrapper" :style="navBarSwipperStyle">
    <view class="yh-nav-bar" :class="navBarClass" :style="navBarStyle">
      <view class="yh-nav-bar__left" @click="handleClickLeft">
        <block v-if="leftArrow || leftText">
          <yh-icon v-if="leftArrow" size="32rpx" name="back" custom-class="yh-nav-bar__arrow" />
          <view v-if="leftText" class="yh-nav-bar__text">{{ leftText }}</view>
        </block>
        <slot v-else name="left"></slot>
      </view>
      <view class="yh-nav-bar__title">
        <view v-if="title" class="yh-ellipsis">{{ title }}</view>
        <slot v-else name="title"></slot>
      </view>
      <view class="yh-nav-bar__right" @click="emit('click-right')">
        <view v-if="rightText" class="yh-nav-bar__text">{{ rightText }}</view>
        <slot v-else name="right"></slot>
      </view>
    </view>
  </div>
</template>
<!-- 添加之后 可以样式穿透 目前未找到setup语法如何编写-->
<script lang="ts">
  export default {
    options: { styleIsolation: 'shared' }
  }
</script>

<script setup lang="ts">
  import YhIcon from '@/components/yh/icon/icon.vue'

  import type { Ref } from 'vue'
  import { onMounted, ref, computed } from 'vue'
  import { navigateBack } from '@/utils/uni-api'
  import { bem } from '../common/utils'

  const props = defineProps({
    title: {
      type: String,
      default: ''
    },
    customClass: {
      type: String,
      default: ''
    },
    fixed: {
      type: Boolean,
      default: true
    },
    // 左边文本
    leftText: {
      type: String,
      default: ''
    },
    // 右边文本
    rightText: {
      type: String,
      default: ''
    },
    // 左边返回箭头
    leftArrow: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 9
    },
    safeAreaInsetTop: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: '#323233'
    },
    backgroundColor: {
      type: String,
      default: '#fff'
    }
  })

  const emit = defineEmits(['click-left', 'click-right', 'change'])

  const _statusBarHeight: Ref<number | undefined> = ref(0)

  const navBarStyle = computed(() => {
    let str = ''
    const { safeAreaInsetTop, zIndex, color, backgroundColor } = props
    if (safeAreaInsetTop) {
      str += `padding-top: ${_statusBarHeight.value}px; `
      str += `height: ${_statusBarHeight.value ? _statusBarHeight.value + 44 : 44}px; `
    } else {
      str += `height: 44px; `
    }
    if (zIndex) {
      str += `z-index: ${zIndex}; `
    }
    if (color) {
      str += `color: ${color}; `
    }
    if (backgroundColor) {
      str += `background-color: ${backgroundColor}; `
    }
    return str
  })

  const navBarSwipperStyle = computed(() => {
    let str = ''
    const { safeAreaInsetTop } = props
    if (safeAreaInsetTop) {
      str += `height: ${_statusBarHeight.value ? _statusBarHeight.value + 44 : 44}px; `
    } else {
      str += `height: 44px; `
    }
    return str
  })
  const navBarClass = computed(() => {
    let str = ''
    const { border, fixed, customClass } = props

    str = bem('nav-bar', { fixed })
    if (border) {
      str += ` yh-hairline--bottom`
    }
    if (customClass) {
      str += ` ${customClass}`
    }
    return str
  })

  const handleClickLeft = () => {
    const { leftArrow } = props
    if (leftArrow) {
      navigateBack(1)
    }
    emit('click-left')
  }

  onMounted(() => {
    const { statusBarHeight } = uni.getSystemInfoSync()
    _statusBarHeight.value = statusBarHeight
    // 导出导航栏高度
    emit('change', statusBarHeight ? statusBarHeight + 44 : 0)
  })
</script>

<style lang="scss" scoped>
  @use '../common/style/var.scss' as *;

  .yh-nav-bar {
    position: relative;
    text-align: center;
    -webkit-user-select: none;
    user-select: none;
    height: $yh-nav-bar-height;
    line-height: $yh-nav-bar-height;
    padding: 0 190rpx;
    transition: all 0.3s;
    &__text {
      display: inline-block;
      vertical-align: middle;
      margin: 0 0-$yh--padding-md;
      padding: 0 $yh--padding-md;
      color: inherit;
    }
    ::v-deep {
      .yh-nav-bar__arrow {
        vertical-align: middle;
        font-size: $yh-nav-bar-arrow-size;
        color: inherit;
      }
    }
    &__title {
      width: 100%;
      color: inherit;
      font-weight: $yh-nav-bar-title-font-weight;
      line-height: $yh-nav-bar-height;
      font-size: $yh-nav-bar-title-font-size;
    }
    &--fixed {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    }
    &__left,
    &__right {
      position: absolute;
      bottom: 0;
      height: $yh-nav-bar-height;
      font-size: $yh--font-size-md;
    }
    &__left {
      left: $yh--padding-md;
      display: flex;
      align-items: center;
      .yh-nav-bar__text {
        padding: 0;
        margin: 0;
      }
    }
    &__right {
      right: $yh--padding-md;
    }
  }
</style>
