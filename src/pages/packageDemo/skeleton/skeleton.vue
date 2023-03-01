<template>
  <div class="demo-skeleton">
    <demo-block title="基础用法">
      <yh-skeleton title :row="3" :row-width="['100%', '100%', '80%']" />
    </demo-block>
    <demo-block title="显示头像">
      <yh-skeleton title avatar :row="3" />
    </demo-block>

    <demo-block title="展示子组件">
      <yh-skeleton title avatar :row="3" :loading="!show" @click="show = true">
        <view class="demo-preview" @click.stop="change">
          <image class="demo-preview-img" src="https://img.yzcdn.cn/vant/logo.png" />
          <view class="demo-content">
            <view class="demo-content-h3">关于 Vant Weapp</view>
            <view class="domo-content-p">
              Vant Weapp 是移动端 Vue 组件库 Vant 的小程序版本，两者基于相同的视觉规范，提供一致的 API
              接口，助力开发者快速搭建小程序应用。
            </view>
          </view>
        </view>
      </yh-skeleton>
    </demo-block>
  </div>
</template>
<script lang="ts" setup>
  import DemoBlock from '@/pages/packageDemo/components/demo-block/demo-block.vue'
  import YhSkeleton from '@/components/yh/skeleton/skeleton.vue'

  import { ref, onMounted } from 'vue'

  const show = ref(false)

  const change = () => {
    show.value = !show.value
  }

  onMounted(() => {
    setTimeout(() => {
      show.value = true
    }, 3000)
  })
</script>

<style lang="scss" scoped>
  .demo-skeleton {
    width: 100%;
  }
  .demo-preview {
    display: flex;
    padding: 0 16px;
  }

  .demo-content {
    padding-top: 6px;
  }

  .demo-content-h3 {
    margin: 0;
    font-size: 18px;
    line-height: 20px;
  }

  .demo-content-p {
    margin: 13px 0 0;
    font-size: 14px;
    line-height: 20px;
  }

  .demo-preview-img {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    margin-right: 16px;
  }
</style>
