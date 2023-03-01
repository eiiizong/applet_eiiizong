<template>
  <div class="demo">
    <div class="items">
      <template v-for="item in renderData" :key="item.id">
        <div class="item-name">{{ item.title }}</div>
        <div class="item">
          <template v-for="itemCell in item.list" :key="itemCell.id">
            <div v-if="itemCell.isOver" class="cell-link" @click="handleJumpRoute(itemCell.id)">
              <div class="cell-name">{{ itemCell.name }}</div>
              <yh-icon name="arrow-right" />
            </div>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
  import YhIcon from '@/components/yh/icon/icon.vue'
  import { ref } from 'vue'
  import { navigateTo } from '@/utils/uni-api'

  // 渲染数据
  const renderData = ref([
    {
      title: '基础组件',
      list: [
        {
          id: 'button',
          name: 'Button 按钮',
          isOver: true
        },
        {
          id: 'cell',
          name: 'Cell 单元格',
          isOver: true
        },
        {
          id: 'icon',
          name: 'Icon 图标',
          isOver: true
        },
        {
          id: 'image',
          name: 'Image 图片',
          isOver: true
        },
        {
          id: 'popup',
          name: 'Popup 弹出层',
          isOver: true
        },
        {
          id: 'toast',
          name: 'Toast 轻提示'
        },
        {
          id: 'transition',
          name: 'Transition 动画',
          isOver: true
        }
      ]
    },
    {
      title: '表单组件',
      list: [
        {
          id: 'calendar',
          name: 'Calendar 日历'
        }
      ]
    },
    {
      title: '展示组件',
      list: [
        {
          id: 'noticeBar',
          name: 'NoticeBar 通知栏'
        },
        {
          id: 'collapse',
          name: 'Collapse 折叠面板'
        },
        {
          id: 'divider',
          name: 'Divider 分割线'
        },
        {
          id: 'skeleton',
          name: 'Skeleton 骨架屏'
        },
        {
          id: 'sticky',
          name: 'Sticky 粘性布局'
        },
        {
          id: 'tag',
          name: 'Tag 标记'
        }
      ]
    },
    {
      title: '反馈组件',
      list: [
        {
          id: 'actionSheet',
          name: 'ActionSheet 动作面板'
        },
        {
          id: 'dialog',
          name: 'Dialog 弹出框'
        },
        {
          id: 'dropdown-menu',
          name: 'DropdownMenu 下拉菜单'
        },
        {
          id: 'shareSheet',
          name: 'ShareSheet 分享面板'
        },
        {
          id: 'loading',
          name: 'Loading 加载',
          isOver: true
        },
        {
          id: 'overlay',
          name: 'Overlay 遮罩层',
          isOver: true
        }
      ]
    },
    {
      title: '导航组件',
      list: [
        {
          id: 'indexBar',
          name: 'IndexBar 索引栏'
        },
        {
          id: 'nav-bar',
          name: 'NavBar 导航栏',
          isOver: true
        }
      ]
    },
    {
      title: '业务组件',
      list: [
        {
          id: 'area',
          name: 'Area 省市区选择'
        }
      ]
    },
    {
      title: '其他',
      list: [
        {
          id: 'use-pinia',
          name: 'use-pinia'
        }
      ]
    }
  ])

  // 跳转路由
  const handleJumpRoute = (pathName: string) => {
    navigateTo(pathName, 'packageDemo')
  }
</script>

<style lang="scss" scoped>
  .demo {
    width: 100%;
    padding: 30rpx 0;
    background-color: #fff;

    .items {
      padding: 0 30rpx;
      .item-name {
        color: #999;
        font-size: 28rpx;
        line-height: 52rpx;
      }
      .item {
        .cell-link {
          background-color: rgba(#efefef, 0.6);
          padding: 0 30rpx;
          line-height: 80rpx;
          font-size: 30rpx;
          border-radius: 80px;
          font-weight: 500;
          color: #333;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.3s;
          margin-bottom: 30rpx;
          position: relative;
          &:active {
            opacity: 0.8;
            background-color: $primary;
            color: #fff;
            .yhiconfont {
              color: #fff;
            }
          }
        }
        .yhiconfont {
          font-size: 28rpx;
          color: #666;
        }
      }
    }
  }
</style>
