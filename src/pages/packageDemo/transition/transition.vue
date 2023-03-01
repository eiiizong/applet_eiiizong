<template>
  <div class="demo-transition">
    <DemoBlock title="基础用法" padding>
      <yh-cell title="Fade" is-link @click="handleClick('fade')" />
      <yh-cell title="Fade Up" is-link @click="handleClick('fade-up')" />
      <yh-cell title="Fade Down" is-link @click="handleClick('fade-down')" />
      <yh-cell title="Fade Left" is-link @click="handleClick('fade-left')" />
      <yh-cell title="Fade Right" is-link @click="handleClick('fade-right')" />
      <yh-cell title="Slide Up" is-link @click="handleClick('fade-up')" />
      <yh-cell title="Slide Down" is-link @click="handleClick('fade-down')" />
      <yh-cell title="Slide Left" is-link @click="handleClick('fade-left')" />
      <yh-cell title="Slide Right" is-link @click="handleClick('fade-right')" />
      <yh-cell title="Custom" is-link @click="handleClickCustom" />
    </DemoBlock>

    <yh-transition :show="show" :name="name" custom-class="block" />

    <yh-transition
      :show="showCustom"
      name=""
      :duration="{ enter: 300, leave: 1000 }"
      custom-class="block"
      enter-class="yh-enter-class"
      enter-active-class="yh-enter-active-class"
      leave-active-class="yh-leave-active-class"
      leave-to-class="yh-leave-to-class"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @before-leave="onBeforeLeave"
      @leave="onLeave"
      @after-leave="onAfterLeave" />
  </div>
</template>
<!-- 添加之后 可以样式穿透 目前未找到setup语法如何编写-->
<script lang="ts">
  export default {
    options: { styleIsolation: 'shared' }
  }
</script>

<script setup lang="ts">
  import DemoBlock from '@/pages/packageDemo/components/demo-block/demo-block.vue'
  import YhTransition from '@/components/yh/transition/transition.vue'
  import YhCell from '@/components/yh/cell/cell.vue'

  import { ref } from 'vue'

  const show = ref(false)
  const showCustom = ref(false)

  const name = ref('')

  // 点击
  const handleClick = (type: string) => {
    name.value = type
    show.value = true
    setTimeout(() => {
      show.value = false
    }, 500)
  }

  const handleClickCustom = () => {
    showCustom.value = true
    setTimeout(() => {
      showCustom.value = false
    }, 1000)
  }

  const onBeforeEnter = () => {
    console.log('before enter')
  }

  const onEnter = () => {
    console.log('enter')
  }

  const onAfterEnter = () => {
    console.log('after enter')
  }

  const onBeforeLeave = () => {
    console.log('before leave')
  }

  const onLeave = () => {
    console.log('leave')
  }

  const onAfterLeave = () => {
    console.log('after leave')
  }
</script>

<style lang="scss" scoped>
  .demo-transition {
    width: 100%;
    background-color: #f8f8f8;
    ::v-deep {
      .block {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 100px;
        height: 100px;
        margin: -50px 0 0 -50px;
        background-color: #1989fa;
      }

      .yh-enter-active-class,
      .yh-leave-active-class {
        transition-property: background-color, transform;
      }

      .yh-enter-class,
      .yh-leave-to-class {
        background-color: red;
        transform: rotate(-360deg) translate3d(-100%, -100%, 0);
      }
    }
  }
</style>
