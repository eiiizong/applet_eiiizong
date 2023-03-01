<template>
  <view :style="style" :class="getClass" @click="emit('click')">
    <image
      v-if="!error"
      :src="src"
      :mode="mode"
      :lazy-load="lazyLoad"
      class="yh-image__img"
      :class="imageClass"
      :show-menu-by-longpress="showMenuByLongpress"
      @load="onLoad"
      @error="onError" />

    <view v-if="loading && showLoading" class="yh-image__loading" :class="loadingClass">
      <slot v-if="useLoadingSlot" name="loading"></slot>
      <yh-icon v-else name="photo-o" size="44rpx" />
    </view>
    <view v-if="error && showError" class="yh-image__error" :class="errorClass">
      <slot v-if="useErrorSlot" name="error"></slot>
      <yh-icon v-else name="photo-fail" size="44rpx" />
    </view>
  </view>
</template>

<!-- 添加之后 可以样式穿透 目前未找到setup语法如何编写-->
<script lang="ts">
  export default {
    options: { styleIsolation: 'shared' }
  }
</script>

<script setup lang="ts">
  import YhIcon from '../icon/icon.vue'
  import { computed, ref, onMounted } from 'vue'

  import { bem, isDef, addUnit } from '../common/utils'

  type FIT_MODE_MAP_TYPE = 'none' | 'fill' | 'cover' | 'contain'

  const emit = defineEmits(['click', 'load', 'error'])

  const props = defineProps({
    // 自定义样式
    customStyle: {
      type: String,
      default: () => ''
    },
    // 图片链接
    src: {
      type: String,
      default: () => ''
    },
    // 图片填充模式
    /**
    contain	保持宽高缩放图片，使图片的长边能完全显示出来
    cover	保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边
    fill	拉伸图片，使图片填满元素
    widthFix	缩放模式，宽度不变，高度自动变化，保持原图宽高比不变
    heightFix	缩放模式，高度不变，宽度自动变化，保持原图宽高比不变
    none	保持图片原有尺寸
   */
    fit: {
      type: [String],
      default: () => 'fill'
    },
    // 宽度，默认单位为rpx
    width: {
      type: [String, Number],
      default: () => ''
    },
    // 高度，默认单位为rpx
    height: {
      type: [String, Number],
      default: () => ''
    },
    // 圆角大小默认单位为rpx
    radius: {
      type: [String, Number, Object],
      default: () => null
    },
    // 是否显示为圆形
    round: {
      type: Boolean,
      default: () => false
    },
    // 是否懒加载
    lazyLoad: {
      type: Boolean,
      default: () => false
    },
    // 是否展示图片加载失败提示
    showError: {
      type: Boolean,
      default: () => true
    },
    // 是否展示图片加载中提示
    showLoading: {
      type: Boolean,
      default: () => true
    },
    // 是否使用 error 插槽
    useErrorSlot: {
      type: Boolean,
      default: () => false
    },
    // 是否使用 loading 插槽
    useLoadingSlot: {
      type: Boolean,
      default: () => false
    },
    // 是否开启长按图片显示识别小程序码菜单
    showMenuByLongpress: {
      type: Boolean,
      default: () => false
    },
    // 自定义类名
    customClass: {
      type: String,
      default: () => ''
    },
    // 自定义类名
    imageClass: {
      type: String,
      default: () => ''
    },
    // 自定义类名
    loadingClass: {
      type: String,
      default: () => ''
    },
    // 自定义类名
    errorClass: {
      type: String,
      default: () => ''
    }
  })

  const error = ref(false)
  const loading = ref(true)
  const mode = ref('')
  const style = ref('')

  const FIT_MODE_MAP = {
    none: 'center',
    fill: 'scaleToFill',
    cover: 'aspectFill',
    contain: 'aspectFit'
  }

  // 组件类名
  const getClass = computed(() => {
    let str = ''
    const { round, customClass } = props

    str += bem('image', { round })

    if (customClass) {
      str += ` ${customClass}`
    }

    return str
  })

  const setMode = () => {
    const { fit } = props
    mode.value = FIT_MODE_MAP[fit as FIT_MODE_MAP_TYPE]
  }

  const setStyle = () => {
    const { width, height, radius } = props
    var str = ''
    if (isDef(width)) {
      str += 'width: ' + addUnit(width) + ';'
    }
    if (isDef(height)) {
      str += 'height: ' + addUnit(height) + ';'
    }
    if (isDef(radius)) {
      str += 'overflow: hidden;'
      str += 'border-radius: ' + addUnit(radius as string | number) + ';'
    }
    style.value = str
  }

  const onError = (event: WechatMiniprogram.ImageError) => {
    loading.value = false
    error.value = true
    emit('error', event)
  }

  const onLoad = (event: WechatMiniprogram.ImageLoad) => {
    loading.value = false
    emit('load', event)
  }

  onMounted(() => {
    setMode()
    setStyle()
  })
</script>

<style lang="scss" scoped>
  @use '../common/style/var.scss' as *;

  .yh-image {
    position: relative;
    display: inline-block;
    &--round {
      overflow: hidden;
      border-radius: 50%;
      .yh-image__img {
        border-radius: inherit;
      }
    }
    &__error,
    &__loading,
    &__img {
      display: block;
      width: 100%;
      height: 100%;
    }
    &__error,
    &__loading {
      position: absolute;
      top: 0;
      left: 0;
      display: -webkit-flex;
      display: flex;
      -webkit-flex-direction: column;
      flex-direction: column;
      -webkit-align-items: center;
      align-items: center;
      -webkit-justify-content: center;
      justify-content: center;
      color: $yh-image-placeholder-text-color;
      font-size: $yh-image-placeholder-font-size;
      background-color: $yh-image-placeholder-background-color;
    }
  }
</style>
