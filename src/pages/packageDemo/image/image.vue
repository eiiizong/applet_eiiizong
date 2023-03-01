<template>
  <div class="demo-image">
    <demo-block title="基础用法" padding>
      <yh-image width="200" height="200" :src="src" />
    </demo-block>

    <demo-block title="填充模式" padding>
      <div class="items">
        <div v-for="(item, index) in fits" :key="index" class="item" span="8">
          <yh-image :fit="item" width="100%" height="27vw" :src="src" />
          <view class="text">{{ item }}</view>
        </div>
      </div>
    </demo-block>

    <demo-block title="圆形图片" padding>
      <div class="items">
        <div v-for="(item, index) in fits" :key="index" class="item" span="8">
          <yh-image round :fit="item" width="100%" height="27vw" :src="src" />
          <view class="text">{{ item }}</view>
        </div>
      </div>
    </demo-block>

    <demo-block title="加载中提示" padding>
      <div class="items">
        <div class="item"><yh-image width="100%" height="27vw" /> <view class="text">默认提示</view></div>
        <div class="item">
          <yh-image width="100%" height="27vw" use-loading-slot>
            <template #loading>
              <yh-loading type="spinner" size="40" vertical />
            </template>
          </yh-image>
          <view class="text">自定义提示</view>
        </div>
      </div>
    </demo-block>

    <demo-block title="加载失败提示" padding>
      <div class="items">
        <div class="item">
          <yh-image width="100%" height="27vw" src="x" />
          <view class="text">默认提示</view>
        </div>
        <div class="item">
          <yh-image width="100%" height="27vw" src="x" use-error-slot>
            <template #error>
              <text>加载失败</text>
            </template>
          </yh-image>
          <view class="text">自定义提示</view>
        </div>
      </div>
    </demo-block>
  </div>
</template>
<script setup lang="ts">
  import DemoBlock from '@/pages/packageDemo/components/demo-block/demo-block.vue'
  import YhLoading from '@/components/yh/loading/loading.vue'
  import YhImage from '@/components/yh/image/image.vue'

  import { ref } from 'vue'

  const fits = ref(['contain', 'cover', 'fill', 'none', 'scale-down'])
  const src = ref('https://img.yzcdn.cn/vant/cat.jpeg')
</script>

<style lang="scss" scoped>
  .demo-image {
    width: 100%;
    background-color: #fff;
    .items {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      .item {
        width: 28%;
        margin-right: 32rpx;
        margin-bottom: 20rpx;
      }
    }
    .text {
      width: 100%;
      margin-top: 5px;
      color: #7d7e80;
      font-size: 14px;
      text-align: center;
    }
  }
</style>
