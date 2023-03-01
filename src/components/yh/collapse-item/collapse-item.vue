<template>
  <view class="yh-collapse-item" :class="getCollapseItemClass">
    <yh-cell
      :title="title"
      title-class="title-class"
      :icon="icon"
      :value="value"
      :label="label"
      :is-link="isLink"
      :clickable="clickable"
      :border="border && expanded"
      :class="getCellClass"
      right-icon-class="yh-cell__right-icon"
      custom-class="yh-cell"
      hover-class="yh-cell--hover"
      @click="onClick">
      <template #title>
        <slot name="title"></slot>
      </template>
      <template #icon>
        <slot name="icon"></slot>
      </template>
      <template #rightIcon>
        <slot name="rightIcon"></slot>
      </template>
      <slot name="value"></slot>
    </yh-cell>
    <view :class="getItemWrapperClass" :style="{ height: contentHeight }" @transitionend="onTransitionEnd">
      <view class="yh-collapse-item__content" :class="contentClass">
        <slot></slot>
      </view>
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
  import YhCell from '../cell/cell.vue'

  import { computed, ref, getCurrentInstance } from 'vue'
  import { bem } from '../common/utils'

  const ctx = getCurrentInstance()
  console.log(ctx && ctx.parent, 1234)

  const emit = defineEmits(['change', 'close', 'open'])

  const props = defineProps({
    // 标题栏左侧内容
    title: {
      type: [String, Number],
      default: () => ''
    },
    // 唯一标识符，默认为索引值
    name: {
      type: [String, Number],
      default: () => 'index'
    },
    // 标题栏大小，可选值为 large
    size: {
      type: [String],
      default: () => ''
    },
    // 标题栏左侧图标名称或图片链接，可选值见 Icon 组件
    icon: {
      type: [String],
      default: () => ''
    },
    // 标题栏右侧内容
    value: {
      type: [String, Number],
      default: () => ''
    },
    // 标题栏描述信息
    label: {
      type: [String],
      default: () => ''
    },
    // 是否显示内边框
    border: {
      type: Boolean,
      default: () => true
    },
    // 是否展示标题栏右侧箭头并开启点击反馈
    isLink: {
      type: Boolean,
      default: () => true
    },
    // 是否开启点击反馈
    clickable: {
      type: Boolean,
      default: () => false
    },
    // 是否禁用面板
    disabled: {
      type: Boolean,
      default: () => false
    },
    customClass: {
      type: String,
      default: () => ''
    },
    contentClass: {
      type: String,
      default: () => ''
    }
  })

  const contentHeight = ref(0)
  const expanded = ref(false)
  const transition = ref(false)

  const getCollapseItemClass = computed(() => {
    let str = ''
    const { customClass } = props

    // index !== 0 ? 'yh-hairline--top' : ''

    if (customClass) {
      str += ` ${customClass}`
    }
    return str
  })

  const getCellClass = computed(() => {
    let str = ''
    const { disabled } = props
    str += bem('collapse-item__title', { disabled, expanded: expanded.value })
    return str
  })

  const getItemWrapperClass = computed(() => {
    let str = ''
    str += bem('collapse-item__wrapper', { transition: transition.value })
    return str
  })

  const onClick = () => {}

  const onTransitionEnd = () => {}

  const updateExpanded = () => {
    if (ctx) {
      const parent = ctx.parent
      if (!parent) {
        return Promise.resolve()
      }
      const { value, accordion } = parent.props
      const { $children: children = [] } = parent.proxy.$children

      const { name } = props
      const index = children.indexOf(this)
      const currentName = name == null ? index : name
      const expanded = accordion ? value === currentName : (value || []).some((name) => name === currentName)
      const stack = []
      if (expanded !== this.data.expanded) {
        stack.push(this.updateStyle(expanded))
      }
      stack.push(this.set({ index, expanded }))
      return Promise.all(stack)
    } else {
      return Promise.resolve()
    }
  }
</script>

<style lang="scss" scoped>
  @use '../common/style/var.scss' as *;

  .yh-collapse-item {
    &__title {
      .yh-cell__right-icon {
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
        transition: -webkit-transform 0.3s;
        transition: transform 0.3s;
        transition: transform 0.3s, -webkit-transform 0.3s;
        transition: -webkit-transform var(--collapse-item-transition-duration, 0.3s);
        transition: transform var(--collapse-item-transition-duration, 0.3s);
        transition: transform var(--collapse-item-transition-duration, 0.3s),
          -webkit-transform var(--collapse-item-transition-duration, 0.3s);
      }
    }
    &__title--expanded {
      .yh-cell__right-icon {
        -webkit-transform: rotate(-90deg);
        transform: rotate(-90deg);
      }
    }
    &__title--disabled {
      .yh-cell,
      .yh-cell__right-icon {
        color: #c8c9cc !important;
        color: var(--collapse-item-title-disabled-color, #c8c9cc) !important;
      }
      .yh-cell--hover {
        background-color: #fff !important;
        background-color: var(--white, #fff) !important;
      }
    }
    &__wrapper {
      overflow: hidden;
      &--transition {
        transition: height 0.3s ease-in-out;
      }
    }
    &__content {
      padding: 15px;
      padding: var(--collapse-item-content-padding, 15px);
      color: #969799;
      color: var(--collapse-item-content-text-color, #969799);
      font-size: 13px;
      font-size: var(--collapse-item-content-font-size, 13px);
      line-height: 1.5;
      line-height: var(--collapse-item-content-line-height, 1.5);
      background-color: #fff;
      background-color: var(--collapse-item-content-background-color, #fff);
    }
  }
</style>
