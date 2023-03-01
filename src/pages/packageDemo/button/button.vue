<template>
  <div class="demo-button">
    <demo-block title="按钮类型" padding>
      <view class="row">
        <yh-button custom-style="margin-right:20rpx;">默认按钮</yh-button>
        <yh-button type="primary" custom-style="margin-right:20rpx;">主要按钮</yh-button>
        <yh-button type="info">信息按钮</yh-button>
      </view>
      <yh-button type="danger" custom-style="margin-right:20rpx;">危险按钮</yh-button>
      <yh-button type="warning">警告按钮</yh-button>
    </demo-block>

    <demo-block title="朴素按钮" padding>
      <yh-button type="primary" plain custom-style="margin-right:20rpx;">朴素按钮</yh-button>
      <yh-button type="info" plain>朴素按钮</yh-button>
    </demo-block>

    <demo-block title="细边框" padding>
      <yh-button type="primary" plain hairline custom-style="margin-right:20rpx;">细边框按钮</yh-button>
      <yh-button type="info" plain hairline>细边框按钮</yh-button>
    </demo-block>

    <demo-block title="禁用状态" padding>
      <yh-button type="primary" disabled custom-style="margin-right:20rpx;">禁用状态</yh-button>
      <yh-button type="info" disabled>禁用状态</yh-button>
    </demo-block>

    <demo-block title="加载状态" padding>
      <yh-button loading type="primary" custom-style="margin-right:20rpx;" />
      <yh-button loading type="primary" loading-type="spinner" custom-style="margin-right:20rpx;" />
      <yh-button loading type="info" loading-text="加载中..." />
    </demo-block>

    <demo-block title="按钮形状" padding>
      <yh-button type="primary" square custom-style="margin-right:20rpx;">方形按钮</yh-button>
      <yh-button type="info" round>圆形按钮</yh-button>
    </demo-block>

    <demo-block title="图标按钮" padding>
      <yh-button type="primary" icon="search" custom-style="margin-right:20rpx;" />
      <yh-button type="primary" icon="male" custom-style="margin-right:20rpx;">按钮</yh-button>
      <yh-button
        plain
        type="primary"
        icon="https://wx.qlogo.cn/mmhead/Q3auHgzwzM6Zm26cZtBll0wqkWdwen2wJBo9nDY0QOhI3iaedib0Rq5w/0">
        按钮
      </yh-button>
    </demo-block>

    <demo-block title="按钮尺寸" padding>
      <yh-button type="primary" size="large" block custom-style="margin-bottom:20rpx;">大号按钮</yh-button>
      <yh-button type="primary" custom-style="margin-right:20rpx;">普通按钮</yh-button>
      <yh-button type="primary" size="small" custom-style="margin-right:20rpx;">小型按钮</yh-button>
      <yh-button type="primary" size="mini">迷你按钮</yh-button>
    </demo-block>

    <demo-block title="块级元素" padding>
      <yh-button type="primary" custom-style="margin-bottom:20rpx;">普通按钮</yh-button>
      <yh-button type="primary" block>块级元素</yh-button>
    </demo-block>

    <demo-block title="自定义颜色" padding>
      <yh-button color="#7232dd" custom-style="margin-right:20rpx;">单色按钮</yh-button>
      <yh-button color="#7232dd" custom-style="margin-right:20rpx;" plain>单色按钮</yh-button>
      <yh-button color="linear-gradient(to right, #4bb0ff, #6149f6)">渐变色按钮</yh-button>
    </demo-block>

    <demo-block title="微信开放能力" padding>
      <yh-button type="primary" block open-type="contact" custom-style="margin-bottom: 20rpx;" @contact="onContact">
        打开客服会话
      </yh-button>
      <yh-button type="primary" block open-type="share" custom-style="margin-bottom: 20rpx;"> 分享 </yh-button>
      <yh-button
        type="primary"
        block
        open-type="getPhoneNumber"
        custom-style="margin-bottom: 20rpx;"
        @getphonenumber="onGetphonenumber">
        获取用户手机号
      </yh-button>
      <yh-button
        type="primary"
        block
        open-type="getUserInfo"
        get-user-profile-desc="测试描述信息"
        custom-style="margin-bottom: 20rpx;"
        @getuserinfo="onGetuserinfo">
        获取用户信息
      </yh-button>
      <yh-button
        type="primary"
        block
        open-type="launchApp"
        custom-style="margin-bottom: 20rpx;"
        @launchapp="onLaunchapp"
        @error="onError">
        打开APP
      </yh-button>
      <yh-button
        type="primary"
        block
        open-type="openSetting"
        custom-style="margin-bottom: 20rpx;"
        @opensetting="onOpensetting">
        打开授权设置页
      </yh-button>
      <yh-button type="primary" block open-type="feedback" custom-style="margin-bottom: 20rpx;">
        打开“意见反馈”页面
      </yh-button>
      <yh-button
        type="primary"
        block
        open-type="chooseAvatar"
        custom-style="margin-bottom: 20rpx;"
        @chooseavatar="onChooseavatar">
        获取用户头像
      </yh-button>
    </demo-block>
  </div>
</template>
<script setup lang="ts">
  import DemoBlock from '@/pages/packageDemo/components/demo-block/demo-block.vue'
  import YhButton from '@/components/yh/button/button.vue'

  const onGetuserinfo = (event: WechatMiniprogram.ButtonGetUserInfo) => {
    // eslint-disable-next-line
    console.log('onGetuserinfo ===', event)
  }
  const onGetphonenumber = (event: WechatMiniprogram.ButtonGetPhoneNumber) => {
    // eslint-disable-next-line
    console.log('onGetphonenumber ===', event)
  }
  const onChooseavatar = (event: any) => {
    // eslint-disable-next-line
    console.log('onChooseavatar ===', event)
  }
  const onLaunchapp = (event: WechatMiniprogram.ButtonLaunchApp) => {
    // eslint-disable-next-line
    console.log('onLaunchapp ===', event)
  }
  const onError = (event: WechatMiniprogram.ButtonError) => {
    // eslint-disable-next-line
    console.log('launchapp onError ===', event)
  }
  const onOpensetting = (event: WechatMiniprogram.ButtonOpenSetting) => {
    // eslint-disable-next-line
    console.log('onOpensetting ===', event)
  }
  const onContact = (event: WechatMiniprogram.ButtonContact) => {
    // eslint-disable-next-line
    console.log('onContact ===', event)
  }
</script>

<style lang="scss" scoped>
  .demo-button {
    width: 100%;
    background-color: #f8f8f8;
    .row {
      height: 88rpx;
      margin-bottom: 30rpx;
    }
  }
</style>
