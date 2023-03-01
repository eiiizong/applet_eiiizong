<template>
  <view v-if="inited" class="yh-transition" :class="getClass" :style="getStyle" @click="emit('click')">
    <slot></slot>
  </view>
</template>

<script setup lang="ts">
  import { computed, ref, watch } from 'vue'

  const emit = defineEmits(['click', 'before-enter', 'enter', 'after-enter', 'before-leave', 'leave', 'after-leave'])

  const props = defineProps({
    // 自定义样式
    customStyle: {
      type: String,
      default: () => ''
    },
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
    // 动画类型
    // 名称	说明
    // fade	淡入
    // fade-up	上滑淡入
    // fade-down	下滑淡入
    // fade-left	左滑淡入
    // fade-right	右滑淡入
    // slide-up	上滑进入
    // slide-down	下滑进入
    // slide-left	左滑进入
    // slide-right	右滑进入
    name: {
      type: String,
      default: () => 'fade'
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

  const classes = ref(`enter-class enter-active-class enter-to-class leave-class leave-active-class leave-to-class `)
  const status = ref('')
  const inited = ref(false)
  const display = ref(false)
  const transitionEnded = ref(true)
  const currentDuration = ref(300)

  const getStyle = computed(() => {
    let str = ''
    const { customStyle } = props
    if (currentDuration.value) {
      str += `-webkit-transition-duration:${currentDuration.value}ms; `
      str += `transition-duration:${currentDuration.value}ms; `
    }
    if (!display.value) {
      str += `display: none; `
    }
    if (customStyle) {
      str += customStyle
    }

    return str
  })

  const getClass = computed(() => {
    let str = ''
    const { customClass } = props

    if (classes.value) {
      str += `${classes.value}; `
    }

    if (customClass) {
      str += ` ${customClass}`
    }

    return str
  })

  const getClassNames = (name: string) => {
    const { enterClass, enterActiveClass, enterToClass, leaveActiveClass, leaveClass, leaveToClass } = props
    return {
      enter: `yh-${name}-enter yh-${name}-enter-active ${enterClass} ${enterActiveClass} `,
      'enter-to': `yh-${name}-enter-to yh-${name}-enter-active ${enterToClass} ${enterActiveClass} `,
      leave: `yh-${name}-leave yh-${name}-leave-active ${leaveClass} ${leaveActiveClass} `,
      'leave-to': `yh-${name}-leave-to yh-${name}-leave-active ${leaveToClass} ${leaveActiveClass}  `
    }
  }

  const nextTick = () => new Promise((resolve) => setTimeout(resolve, 1000 / 30))

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

  // 进入
  const enter = () => {
    const { duration, name } = props
    const classNames = getClassNames(name)
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

  // 离开
  const leave = () => {
    const { duration, name } = props
    if (!display.value) {
      return
    }
    const classNames = getClassNames(name)
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
  .yh-transition {
    transition-timing-function: ease;
  }
  .yh-fade {
    &-enter-active,
    &-leave-active {
      transition-property: opacity;
    }
    &-enter,
    &-leave-to {
      opacity: 0;
    }
    &-down-enter-active,
    &-down-leave-active,
    &-left-enter-active,
    &-left-leave-active,
    &-right-enter-active,
    &-right-leave-active,
    &-up-enter-active,
    &-up-leave-active {
      transition-property: opacity, -webkit-transform;
      transition-property: opacity, transform;
      transition-property: opacity, transform, -webkit-transform;
    }
    &-up-enter,
    &-up-leave-to {
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
      opacity: 0;
    }
    &-down-enter,
    &-down-leave-to {
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
      opacity: 0;
    }
    &-left-enter,
    &-left-leave-to {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
      opacity: 0;
    }
    &-right-enter,
    &-right-leave-to {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
      opacity: 0;
    }
  }
  .yh-slide {
    &-down-enter-active,
    &-down-leave-active,
    &-left-enter-active,
    &-left-leave-active,
    &-right-enter-active,
    &-right-leave-active,
    &-up-enter-active,
    &-up-leave-active {
      transition-property: -webkit-transform;
      transition-property: transform;
      transition-property: transform, -webkit-transform;
    }
    &-up-enter,
    &-up-leave-to {
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }
    &-down-enter,
    &-down-leave-to {
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
    &-left-enter,
    &-left-leave-to {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
    &-right-enter,
    &-right-leave-to {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
  }
</style>
