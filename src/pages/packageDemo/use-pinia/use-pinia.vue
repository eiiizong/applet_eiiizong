<template>
  <div class="demo">
    <div>用户姓名：{{ userInfo.userName }}</div>
    <button @click="storeUserInfo.updateStoreUserInfo({ userName: '张三' })">设置用户姓名为张三</button>
    <button @click="storeUserInfo.$reset()">初始化userInfo</button>
  </div>
</template>
<script setup lang="ts">
  import { toRefs } from 'vue'
  import { useStoreUserInfo } from '@/stores/modules'

  const storeUserInfo = useStoreUserInfo()
  const { userInfo } = toRefs(storeUserInfo)
</script>

<style lang="scss" scoped>
  .demo {
    width: 100%;
  }
</style>
