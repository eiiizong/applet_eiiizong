<template>
  <div class="demo-cell">
    <demo-block title="基础用法">
      <yh-cell-group>
        <yh-cell title="单元格" value="内容" />
        <yh-cell title="单元格" value="内容" label="描述信息" :border="false" />
      </yh-cell-group>
    </demo-block>

    <demo-block title="单元格大小">
      <yh-cell-group>
        <yh-cell title="单元格" value="内容" size="large" />
        <yh-cell title="单元格" value="内容" size="large" use-label-slot :border="false">
          <template #label>
            <view>描述信息</view>
          </template>
        </yh-cell>
      </yh-cell-group>
    </demo-block>

    <demo-block title="展示图标">
      <yh-cell title="单元格" value="内容" icon="male" :border="false" />
    </demo-block>

    <demo-block title="展示箭头">
      <yh-cell title="单元格" is-link />
      <yh-cell title="单元格" value="内容" is-link />
      <yh-cell title="单元格" is-link arrow-direction="down" value="内容" :border="false" />
    </demo-block>

    <demo-block title="页面跳转">
      <yh-cell title="单元格" is-link url="/pages/packageDemo/dashboard/dashboard" />
      <yh-cell title="单元格" is-link url="/pages/packageDemo/dashboard/dashboard" link-type="redirectTo" />
    </demo-block>

    <demo-block title="分组标题">
      <yh-cell-group title="分组 1">
        <yh-cell title="单元格" value="内容" />
      </yh-cell-group>
      <yh-cell-group title="分组 2">
        <yh-cell title="单元格" value="内容" />
      </yh-cell-group>
    </demo-block>

    <demo-block title="使用插槽">
      <yh-cell value="内容" icon="wifi" is-link>
        <template #title>
          <view>
            <view class="title">单元格</view>
            <!-- <yh-tag type="danger">标签</yh-tag> -->
          </view>
        </template>
      </yh-cell>
      <yh-cell title="单元格" :border="false">
        <template #rightIcon>
          <yh-icon name="search" />
        </template>
      </yh-cell>
    </demo-block>

    <demo-block title="垂直居中">
      <yh-cell center title="单元格" value="内容" label="描述信息" />
    </demo-block>
  </div>
</template>
<script setup lang="ts">
  import DemoBlock from '@/pages/packageDemo/components/demo-block/demo-block.vue'
  import YhCellGroup from '@/components/yh/cell-group/cell-group.vue'
  import YhCell from '@/components/yh/cell/cell.vue'
  import YhIcon from '@/components/yh/icon/icon.vue'
</script>

<style lang="scss" scoped>
  .demo-cell {
    width: 100%;
    background-color: #f8f8f8;
  }
</style>
