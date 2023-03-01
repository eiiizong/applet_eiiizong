<template>
  <YhOverlay
    v-if="overlay"
    :show="show"
    :z-index="zIndex"
    :custom-style="overlayStyle"
    :duration="duration"
    :lock-scroll="lockScroll"
    @click="onClickOverlay" />
  <view v-if="inited" :class="getClass" :style="getStyle">
    <slot></slot>
    <yh-icon
      v-if="closeable"
      :name="closeIcon"
      :custom-style="iconStyle"
      :class="'yh-popup__close-icon yh-popup__close-icon--' + closeIconPosition"
      @click="emit('close')" />
  </view>
</template>

<script setup lang="ts">
  import YhOverlay from '../overlay/overlay.vue'
  import YhIcon from '../icon/icon.vue'

  import { computed, ref, watch } from 'vue'
  import { bem } from '../common/utils'

  const emit = defineEmits([
    // 关闭弹出层时触发
    'close',
    // 点击遮罩层时触发
    'click-overlay',
    // 进入前触发
    'before-enter',
    // 进入中触发
    'enter',
    // 进入后触发
    'after-enter',
    // 离开前触发
    'before-leave',
    // 离开中触发
    'leave',
    // 离开后触发
    'after-leave'
  ])
  const props = defineProps({
    /**
     * 是否显示弹出层，默认false
     */
    show: {
      type: Boolean,
      default: () => false
    },
    /**
     * z-index 层级，默认9999
     */
    zIndex: {
      type: Number,
      default: () => 9999
    },
    /**
     * 是否显示遮罩层，默认true
     */
    overlay: {
      type: Boolean,
      default: () => true
    },
    /**
     * 动画名称
     */
    transition: {
      type: String,
      default: () => ''
    },
    /**
     * 弹出位置，可选值为 top bottom right left center（默认）
     */
    position: {
      type: String,
      default: () => 'center'
    },
    /**
     * 动画时长，单位为毫秒 默认进入300离开300
     */
    duration: {
      type: [Object],
      default: () => {
        return {
          enter: 300,
          leave: 300
        }
      }
    },
    /**
     * 是否显示圆角
     */
    round: {
      type: Boolean,
      default: () => false
    },
    /**
     * 自定义弹出层样式
     */
    customStyle: {
      type: String,
      default: () => ''
    },
    /**
     * icon自定义样式
     */
    iconStyle: {
      type: String,
      default: () => ''
    },
    /**
     * 自定义遮罩层样式
     */
    overlayStyle: {
      type: String,
      default: () => ''
    },
    /**
     * 是否在点击遮罩层后关闭 默认true
     */
    closeOnClickOverlay: {
      type: Boolean,
      default: () => true
    },
    /**
     * 是否显示关闭图标 默认false
     */
    closeable: {
      type: Boolean,
      default: () => false
    },
    /**
     * 关闭图标名称或图片链接 默认 close_round
     */
    closeIcon: {
      type: String,
      default: () => 'close_round'
    },
    /**
     * 关闭图标展示位置 默认top-right
     */
    closeIconPosition: {
      type: String,
      default: () => 'top-right'
    },
    /**
     * 是否为 iPhoneX 留出底部安全距离 默认true
     */
    safeAreaInsetBottom: {
      type: Boolean,
      default: () => true
    },
    /**
     * 是否留出顶部安全距离（状态栏高度）默认false
     */
    safeAreaInsetTop: {
      type: Boolean,
      default: () => false
    },
    /**
     * 是否锁定背景滚动 默认 true
     */
    lockScroll: {
      type: Boolean,
      default: () => true
    },
    customClass: {
      type: String,
      default: () => ''
    },
    enterClass: {
      type: String,
      default: () => ''
    },
    enterActiveClass: {
      type: String,
      default: () => ''
    },
    enterToClass: {
      type: String,
      default: () => ''
    },
    leaveClass: {
      type: String,
      default: () => ''
    },
    leaveActiveClass: {
      type: String,
      default: () => ''
    },
    leaveToClass: {
      type: String,
      default: () => ''
    }
  })

  const onClickOverlay = () => {
    emit('click-overlay')
    const { closeOnClickOverlay } = props
    if (closeOnClickOverlay) {
      emit('close')
    }
  }

  const status = ref('')
  const inited = ref(false)
  const display = ref(false)
  const transitionEnded = ref(true)
  const currentDuration = ref(300)
  const classes = ref(`enter-class enter-active-class enter-to-class leave-class leave-active-class leave-to-class `)

  const getClass = computed(() => {
    let str = ''
    const { round, safeAreaInsetBottom, safeAreaInsetTop, position, customClass } = props

    if (classes.value) {
      str += classes.value
    }

    if (position) {
      str += bem('popup', [position, { round, safe: safeAreaInsetBottom, safeTop: safeAreaInsetTop }])
    }

    if (customClass) {
      str += ` ${customClass}`
    }
    return str
  })

  const getStyle = computed(() => {
    let str = ''
    const { customStyle, zIndex } = props
    if (currentDuration.value) {
      str += `-webkit-transition-duration:${currentDuration.value}ms; `
      str += `transition-duration:${currentDuration.value}ms; `
    }
    if (!display.value) {
      str += `display: none; `
    }
    if (zIndex) {
      str += `z-index: ${zIndex}; `
    }
    if (customStyle) {
      str += customStyle
    }

    return str
  })

  const name = computed(() => {
    let str = ''
    const { transition, position } = props
    str = transition || position

    if (transition === 'none') {
      updateCurrentDuration(0)
    }
    return str
  })

  const nextTick = () => new Promise((resolve) => setTimeout(resolve, 1000 / 30))

  const updateCurrentDuration = (val: number) => {
    currentDuration.value = val
  }

  const getClassNames = (name: string) => {
    const { enterClass, enterActiveClass, enterToClass, leaveActiveClass, leaveClass, leaveToClass } = props
    return {
      enter: `yh-${name}-enter yh-${name}-enter-active ${enterClass} ${enterActiveClass} `,
      'enter-to': `yh-${name}-enter-to yh-${name}-enter-active ${enterToClass} ${enterActiveClass} `,
      leave: `yh-${name}-leave yh-${name}-leave-active ${leaveClass} ${leaveActiveClass} `,
      'leave-to': `yh-${name}-leave-to yh-${name}-leave-active ${leaveToClass} ${leaveActiveClass}  `
    }
  }

  const checkStatus = (new_status: string) => {
    if (new_status !== status.value) {
      throw new Error(`incongruent status: ${new_status}`)
    }
  }

  const onTransitionEnd = () => {
    if (transitionEnded.value) {
      return
    }
    transitionEnded.value = true

    if (status.value === 'enter' || status.value === 'leave') {
      emit(`after-${status.value}`)
    }

    const { show } = props
    if (!show && display.value) {
      display.value = false
      inited.value = false
    }
  }

  const enter = () => {
    const { duration } = props
    const classNames = getClassNames(name.value)
    const current_duration = duration.enter
    status.value = 'enter'
    emit('before-enter')
    Promise.resolve()
      .then(nextTick)
      .then(() => {
        checkStatus('enter')
        emit('enter')
        inited.value = true
        display.value = true
        classes.value = classNames.enter
        currentDuration.value = current_duration
      })
      .then(nextTick)
      .then(() => {
        checkStatus('enter')
        transitionEnded.value = false
        classes.value = classNames['enter-to']
      })
  }

  const leave = () => {
    const { duration } = props
    if (!display.value) {
      return
    }
    const classNames = getClassNames(name.value)
    const current_duration = duration.leave
    status.value = 'leave'
    emit('before-leave')
    Promise.resolve()
      .then(nextTick)
      .then(() => {
        checkStatus('leave')
        emit('leave')
        classes.value = classNames.leave
        currentDuration.value = current_duration
      })
      .then(nextTick)
      .then(() => {
        checkStatus('leave')
        transitionEnded.value = false
        setTimeout(() => onTransitionEnd(), current_duration)
        classes.value = classNames['leave-to']
      })
  }

  watch(
    () => props.show,
    (val) => {
      if (val) {
        enter()
      } else {
        leave()
      }
    },
    { immediate: true }
  )
</script>

<style lang="scss" scoped>
  @use '../common/style/var.scss' as *;
  .yh-popup {
    position: fixed;
    box-sizing: border-box;
    max-height: 100%;
    overflow-y: auto;
    transition-timing-function: ease;
    -webkit-animation: ease both;
    animation: ease both;
    -webkit-overflow-scrolling: touch;
    background-color: $yh-popup-background-color;
    &--top {
      top: 0;
      left: 0;
      width: 100%;
      &.yh-popup--round {
        border-radius: 0 0 20px 20px;
        border-radius: 0 0 $yh-popup-round-border-radius $yh-popup-round-border-radius;
      }
    }
    &--right {
      top: 50%;
      right: 0;
      -webkit-transform: translate3d(0, -50%, 0);
      transform: translate3d(0, -50%, 0);
      &.yh-popup--round {
        border-radius: 20px 0 0 20px;
        border-radius: $yh-popup-round-border-radius 0 0 $yh-popup-round-border-radius;
      }
    }
    &--bottom {
      bottom: 0;
      left: 0;
      width: 100%;
      &.yh-popup--round {
        border-radius: 20px 20px 0 0;
        border-radius: $yh-popup-round-border-radius $yh-popup-round-border-radius 0 0;
      }
      &.yh-popup--safe {
        padding-bottom: env(safe-area-inset-bottom);
      }
    }
    &--center {
      top: 50%;
      left: 50%;
      -webkit-transform: translate3d(-50%, -50%, 0);
      transform: translate3d(-50%, -50%, 0);
      &.yh-popup--round {
        border-radius: $yh-popup-round-border-radius;
      }
    }
    &--left {
      top: 50%;
      left: 0;
      -webkit-transform: translate3d(0, -50%, 0);
      transform: translate3d(0, -50%, 0);
      &.yh-popup--round {
        border-radius: 0 20px 20px 0;
        border-radius: 0 $yh-popup-round-border-radius $yh-popup-round-border-radius 0;
      }
    }
    &--safeTop {
      padding-top: env(safe-area-inset-top);
    }
    &__close-icon {
      position: absolute;
      z-index: $yh-popup-close-icon-z-index;
      color: $yh-popup-close-icon-color;
      font-size: $yh-popup-close-font-size;
      &--top-left {
        top: $yh-popup-close-icon-margin;
        left: $yh-popup-close-icon-margin;
      }
      &--top-right {
        top: $yh-popup-close-icon-margin;
        right: $yh-popup-close-icon-margin;
      }
      &--bottom-left {
        bottom: $yh-popup-close-icon-margin;
        left: $yh-popup-close-icon-margin;
      }
      &--bottom-right {
        bottom: $yh-popup-close-icon-margin;
        right: $yh-popup-close-icon-margin;
      }
      &:active,
      &:hover {
        opacity: 0.6;
      }
    }
  }

  .yh-scale-enter-active,
  .yh-scale-leave-active {
    transition-property: opacity, -webkit-transform;
    transition-property: opacity, transform;
    transition-property: opacity, transform, -webkit-transform;
  }
  .yh-scale-enter,
  .yh-scale-leave-to {
    -webkit-transform: translate3d(-50%, -50%, 0) scale(0.7);
    transform: translate3d(-50%, -50%, 0) scale(0.7);
    opacity: 0;
  }
  .yh-fade-enter-active,
  .yh-fade-leave-active {
    transition-property: opacity;
  }
  .yh-fade-enter,
  .yh-fade-leave-to {
    opacity: 0;
  }
  .yh-center-enter-active,
  .yh-center-leave-active {
    transition-property: opacity;
  }
  .yh-center-enter,
  .yh-center-leave-to {
    opacity: 0;
  }
  .yh-bottom-enter-active,
  .yh-bottom-leave-active,
  .yh-left-enter-active,
  .yh-left-leave-active,
  .yh-right-enter-active,
  .yh-right-leave-active,
  .yh-top-enter-active,
  .yh-top-leave-active {
    transition-property: -webkit-transform;
    transition-property: transform;
    transition-property: transform, -webkit-transform;
  }
  .yh-bottom-enter,
  .yh-bottom-leave-to {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
  .yh-top-enter,
  .yh-top-leave-to {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  .yh-left-enter,
  .yh-left-leave-to {
    -webkit-transform: translate3d(-100%, -50%, 0);
    transform: translate3d(-100%, -50%, 0);
  }
  .yh-right-enter,
  .yh-right-leave-to {
    -webkit-transform: translate3d(100%, -50%, 0);
    transform: translate3d(100%, -50%, 0);
  }
</style>
