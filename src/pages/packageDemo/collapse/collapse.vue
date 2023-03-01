<template>
  <div class="demo-calendar">
    <demo-block title="基础用法">
      <yh-collapse :value="active1" data-key="active1" @change="onChange">
        <yh-collapse-item :title="title1">{{ content1 }}</yh-collapse-item>
        <yh-collapse-item :title="title2">{{ content2 }}</yh-collapse-item>
        <yh-collapse-item :title="title3" disabled>{{ content3 }}</yh-collapse-item>
      </yh-collapse>
    </demo-block>

    <demo-block title="手风琴">
      <yh-collapse :value="active2" data-key="active2" accordion @change="onChange">
        <yh-collapse-item :title="title1">{{ content1 }}</yh-collapse-item>
        <yh-collapse-item :title="title2">{{ content2 }}</yh-collapse-item>
        <yh-collapse-item :title="title3">{{ content3 }}</yh-collapse-item>
      </yh-collapse>
    </demo-block>

    <demo-block title="自定义标题内容">
      <yh-collapse :value="active3" data-key="active3" @change="onChange">
        <yh-collapse-item>
          <template #title>
            <view>
              {{ title1 }}
              <yh-icon name="male" custom-class="yh-icon-question" />
            </view>
          </template>

          {{ content1 }}
        </yh-collapse-item>
        <yh-collapse-item :title="title2" value="内容" icon="male">
          {{ content2 }}
        </yh-collapse-item>
      </yh-collapse>
    </demo-block>
  </div>
</template>
<script setup lang="ts">
  import DemoBlock from '@/pages/packageDemo/components/demo-block/demo-block.vue'

  import YhCollapse from '@/components/yh/collapse/collapse.vue'
  import YhCollapseItem from '@/components/yh/collapse-item/collapse-item.vue'
  import YhIcon from '@/components/yh/icon/icon.vue'

  import { ref } from 'vue'

  /**
 *   active1: [0],
    active2: 0,
    active3: [],
    title1: '有赞微商城',
    title2: '有赞零售',
    title3: '有赞美业',
    content1: '提供多样店铺模板，快速搭建网上商城',
    content2: '网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失',
    content3: '线上拓客，随时预约，贴心顺手的开单收银'
 */
  const active1 = ref([0])
  const active2 = ref(0)
  const active3 = ref([])
  const content1 = ref('提供多样店铺模板，快速搭建网上商城')
  const content2 = ref('网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失')
  const content3 = ref('线上拓客，随时预约，贴心顺手的开单收银')

  const title1 = ref('有赞微商城')
  const title2 = ref('有赞零售')
  const title3 = ref('有赞美业')

  const onChange = (e: boolean) => {
    // eslint-disable-next-line
    console.log(e)
  }
</script>

<style lang="scss" scoped>
  .demo-calendar {
    width: 100%;
    background-color: #f8f8f8;
  }
</style>
