<template>
  <view class="yh-collapse" :class="getClass">
    <slot></slot>
  </view>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  const emit = defineEmits(['change', 'close', 'open', 'input'])

  const props = defineProps({
    // 当前展开面板的 name
    // 非手风琴模式：(string | number)[]
    // 手风琴模式：string | number
    value: {
      type: [String, Number, Array],
      default: () => ''
    },
    // 是否开启手风琴模式
    accordion: {
      type: Boolean,
      default: () => false
    },
    // 是否显示外边框
    border: {
      type: Boolean,
      default: () => false
    },
    customClass: {
      type: String,
      default: () => ''
    }
  })

  const getClass = computed(() => {
    let str = ''
    const { customClass, border } = props

    if (border) {
      str += `yh-hairline--top-bottom`
    }

    if (customClass) {
      str += ` ${customClass}`
    }
    return str
  })

  const updateExpanded = () => {
    // this.children.forEach((child) => {
    //   child.updateExpanded()
    // })
  }

  const _switch = (name: any, expanded: boolean) => {
    const { accordion, value } = props
    if (!accordion) {
      name = expanded ? (value || []).concat(name) : (value || []).filter((activeName) => activeName !== name)
    } else {
      name = expanded ? name : ''
    }
    emit('change', name)
    emit('input', name)
  }
</script>

<style lang="scss" scoped>
  @use '../common/style/var.scss' as *;
</style>
