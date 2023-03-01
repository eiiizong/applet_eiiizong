<template>
  <div class="yh-load-more-wrapper">
    <div v-if="isLoadOver" class="yh-load-more-tip_over">
      <span class="text">没有其他数据了</span>
    </div>
    <div v-else class="yh-load-more-tip">
      <span v-if="platform == 'ios' || platform == 'mac'" class="text">上拉加载更多</span>
      <div v-else class="button-wrapper">
        <YhButton type="primary" block custom-style="border-radius:8rpx; height:80rpx" @click="emit('loadMore')">
          加载更多
        </YhButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import YhButton from '@/components/yh/button/button.vue'

  import { onMounted, ref } from 'vue'
  import { getSystemInfo } from '@/utils/uni-api'

  const emit = defineEmits(['loadMore'])

  const props = defineProps({
    /**
     * 是否加载完成
     */
    isLoadOver: {
      type: Boolean,
      required: true
    }
  })

  /**
   * 设备类型 客户端平台
   */
  const platform = ref('')

  onMounted(() => {
    getSystemInfo().then((res) => {
      platform.value = res.platform
    })
  })
</script>
<style lang="scss" scoped>
  .yh-load-more-wrapper {
    width: 100%;
    font-size: 24rpx;
    font-weight: 400;
    line-height: 44rpx;
    text-align: center;
  }
  .yh-load-more-tip {
    display: flex;
    align-items: center;
    justify-content: center;
    color: $primary;
    .text {
      padding-top: $spacing;
    }
    .button-wrapper {
      width: 100%;
      padding-top: $spacing;
    }
  }
  .yh-load-more-tip_over {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: #d4d4d4;
    position: relative;

    .text {
      position: relative;
      background-color: transparent;
      z-index: 1;
      padding: $spacing;
      padding-bottom: 0;
    }
  }
</style>
