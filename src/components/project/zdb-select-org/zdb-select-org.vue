<template>
  <YhPopup round position="bottom" :close-on-click-overlay="false" :show="modelValue">
    <view class="content-wrapper">
      <div class="toolbar-wrapper">
        <div class="title-wrapper">
          <div class="title">{{ title }}</div>
          <div class="close" @click="onClosePopup">
            <YhIcon name="close" size="32rpx" color="#f00" />
          </div>
        </div>
        <div class="scroll-view-wrapper">
          <scroll-view
            scroll-x
            enable-flex
            scroll-with-animation
            class="scroll-view"
            :scroll-into-view="toolbarScrollIntoView">
            <div
              v-for="(item, index) in selectedList"
              :id="'toolbar_' + index"
              :key="item[idKey]"
              class="scroll-view-item"
              :class="index === currentSelectedLevel ? 'active' : ''"
              @click.stop="onClickToolbarScrollViewItem(index)">
              <div class="text">{{ item[renderKey] }}</div>
            </div>
          </scroll-view>
        </div>
      </div>
      <div class="swiper-wrapper">
        <swiper class="swiper" :current="currentSelectedLevel" @change="onChangeSwiper">
          <template v-for="(swiperItme, swiperIndex) in renderSelectedList" :key="swiperIndex">
            <swiper-item class="swiper-item">
              <view class="swiper-item-content">
                <scroll-view
                  v-if="requestStatusList[swiperIndex] && requestStatusList[swiperIndex].isHaveData"
                  scroll-y
                  class="swiper-scroll-view">
                  <template
                    v-for="(swiperScrollViewItme, swiperScrollViewIndex) in swiperItme"
                    :key="swiperScrollViewIndex">
                    <div
                      :id="swiperScrollViewIndex + ''"
                      class="swiper-scroll-view-item"
                      :class="[
                        selectedList[swiperIndex] && selectedList[swiperIndex][idKey] === swiperScrollViewItme[idKey]
                          ? 'active'
                          : ''
                      ]"
                      @click.stop="onCilckSwiperScrollViewItem(swiperIndex, swiperScrollViewIndex)">
                      <span class="text">{{ swiperScrollViewItme[renderKey] }}</span>
                      <div v-show="selectedList[swiperIndex][idKey] === swiperScrollViewItme[idKey]" class="icon">
                        <YhIcon name="tick" size="30rpx" />
                      </div>
                    </div>
                  </template>
                </scroll-view>
                <!-- ????????? -->
                <div v-if="requestStatusList[swiperIndex] && requestStatusList[swiperIndex].isLoading" class="loading">
                  <YhLoading vertical>???????????????</YhLoading>
                </div>
                <!-- ???????????? ???????????????????????? -->
                <div v-if="requestStatusList[swiperIndex] && requestStatusList[swiperIndex].isError" class="error">
                  <p class="tip">{{ requestStatusList[swiperIndex].errMsg }}</p>
                  <YhButton type="primary" size="small" @click.stop="onClickRetry(swiperIndex)"> ?????? </YhButton>
                </div>
              </view>
            </swiper-item>
          </template>
        </swiper>
      </div>
    </view>
  </YhPopup>
</template>

<script lang="ts" setup>
  import YhPopup from '@/components/yh/popup/popup.vue'
  import YhIcon from '@/components/yh/icon/icon.vue'
  import YhLoading from '@/components/yh/loading/loading.vue'
  import YhButton from '@/components/yh/button/button.vue'

  import { ref, computed, onMounted } from 'vue'
  import { requestW012 } from '@/server/api'
  // import orgList from './json/org'

  const emit = defineEmits(['update:modelValue', 'change'])

  const props = defineProps({
    /**
     * ??????????????????
     */
    modelValue: {
      type: Boolean,
      required: true
    },
    /**
     * ?????? org ???????????? address ????????????
     */
    type: {
      type: String,
      default: () => 'org'
    },
    /**
     * ??????
     */
    title: {
      type: String,
      default: () => '????????????'
    },
    /**
     * ????????????id
     */
    idKey: {
      type: String,
      default: () => 'orgid'
    },
    /**
     * ??????????????????
     */
    renderKey: {
      type: String,
      default: () => 'name'
    },
    /**
     * ??????????????????????????????
     */
    includesKey: {
      type: Array,
      default: () => ['ispeople', 'orgid', 'name', 'userid']
    }
  })

  /**
   *  ???????????????????????????????????????[{},{}]???
   */
  const selectedList = ref<any[]>([])
  /**
   * ????????????????????????????????????{'0':[],'1':[]}???
   */
  const renderAllData = ref<any>({})
  /**
   *  ????????????????????????????????????????????????includesKey??????????????????????????????[[{},{}],[{},{}]]???
   */
  const renderSelectedList = ref<any[]>([])
  /**
   *  ?????????????????????????????????????????????[{},{}]???
   */
  const requestStatusList = ref<any[]>([])
  /**
   * ????????????????????? ???0??????
   */
  const currentSelectedLevel = ref(0)

  const toolbarScrollIntoView = computed(() => {
    let str = 'toolbar_'
    return str + currentSelectedLevel.value
  })

  /**
   * ?????? requestStatusList ??????
   * @param isLoading ?????????????????????
   * @param isError ??????????????????
   * @param errMsg ????????????
   */
  const updateRequestStatusList = (isLoading = true, isError = false, errMsg = '') => {
    const index = currentSelectedLevel.value
    // ????????????
    let defaultRequestStatusObj = {
      isLoading, // ??????????????????
      isError, // ????????????????????????
      errMsg, // ????????????????????????
      isHaveData: false // ????????????????????????
    }

    // ???????????? ???????????????
    if (!isLoading && !isError) {
      defaultRequestStatusObj.isHaveData = true
    }

    requestStatusList.value[index] = { ...defaultRequestStatusObj }

    // console.log('updateRequestStatusList', requestStatusList.value)
  }

  /**
   * ?????? renderSelectedList ???????????????????????????
   * @param data
   */
  const updateRenderSelectedList = (data: any) => {
    const index = currentSelectedLevel.value

    const oldData = renderSelectedList.value

    const newList = []

    // ?????????????????????
    for (let i = 0, len = oldData.length; i < len; i++) {
      const item = oldData[i]
      if (i < index) {
        newList.push(item)
      } else {
        break
      }
    }
    // ??????????????????
    newList.push(data)
    // ????????????
    renderSelectedList.value = [...newList]

    // console.log('updateRenderSelectedList', renderSelectedList.value)
  }

  // ????????????
  const updateRenderAllData = (data: any[]) => {
    const index = currentSelectedLevel.value
    renderAllData.value[index] = [...data]

    // console.log('updateRenderAllData', renderAllData.value)
  }

  // ????????????
  const updateSelectedList = (data: any) => {
    const index = currentSelectedLevel.value

    const oldData = selectedList.value

    const newList = []

    // ?????????????????????
    for (let i = 0, len = oldData.length; i < len; i++) {
      const item = oldData[i]
      if (i < index) {
        newList.push(item)
      } else {
        break
      }
    }
    // ??????????????????
    newList.push(data)
    // ????????????
    selectedList.value = [...newList]

    // console.log('updateSelectedList====', selectedList.value, data)
  }

  // ??????????????????????????????
  const updataBeforeRequestResponse = () => {
    const { idKey, renderKey } = props

    // ??????????????????????????????????????????swiper
    updateRenderSelectedList([])
    // ?????????????????????????????????????????????
    updateSelectedList({
      [idKey]: 'select',
      [renderKey]: '?????????'
    })
    // ????????????????????????????????????????????????????????????????????????
    updateRequestStatusList()
  }

  /**
   * ??????????????????????????????
   * @param allData ???????????????????????????????????????children
   * @param data ??????????????????????????????????????????includesKey????????????
   * @param isError ?????????????????? ??????false
   * @param errMsg ????????????
   */
  const updataAfterRequestResponse = (allData: any[], data: any[], isError = false, errMsg = '') => {
    updateRenderAllData(allData)
    updateRenderSelectedList(data)
    // ????????????????????????
    updateRequestStatusList(false, isError, errMsg)
  }

  // ?????????????????????????????????
  const getDataByIncludesKey = (data: any[]) => {
    const { includesKey } = props

    const arr = []

    for (let i = 0, len = data.length; i < len; i++) {
      const item = data[i]

      let tempObj: any = {}
      for (let key in item) {
        if (includesKey.includes(key)) {
          tempObj[key] = item[key]
        }
      }
      arr.push(tempObj)
    }
    return arr
  }

  /**
   *  ????????????
   */
  const requestData = () => {
    updataBeforeRequestResponse()

    // ??????????????????
    requestW012(false).then((res) => {
      const data = getDataByIncludesKey(res)
      updataAfterRequestResponse(res, data, false)
    })
  }

  // ????????????
  const onClickToolbarScrollViewItem = (index: number) => {
    currentSelectedLevel.value = index
  }

  // ????????????????????????item
  const onCilckSwiperScrollViewItem = (swiperIndex: number, swiperScrollViewIndex: number) => {
    const { idKey } = props
    const index = currentSelectedLevel.value
    const allData = renderAllData.value[index]

    const data = renderSelectedList.value[swiperIndex][swiperScrollViewIndex]

    // ???????????????????????????
    let newList: any[] = []
    let isHaveChildren = false
    for (let i = 0, len = allData.length; i < len; i++) {
      const item = allData[i]

      if (item[idKey] === data[idKey] && item.children && item.children.length > 0) {
        isHaveChildren = true
        newList = [...(item.children || [])]
        break
      }
    }

    // ?????????????????????
    updateSelectedList(data)

    // ?????? ??????????????????
    setTimeout(() => {
      // ?????????????????????
      if (!isHaveChildren) {
        emit('change', selectedList.value)
        emit('update:modelValue', false)
      } else {
        currentSelectedLevel.value = index + 1
        updataBeforeRequestResponse()

        // ?????????????????????
        setTimeout(() => {
          const data = getDataByIncludesKey(newList)
          updataAfterRequestResponse(newList, data, false)
        }, 300)
      }
    }, 300)
  }

  // swiper change
  const onChangeSwiper = (e: WechatMiniprogram.SwiperChange) => {
    const { current } = e.detail
    currentSelectedLevel.value = current
  }

  // ??????????????????
  const onClosePopup = () => {
    emit('update:modelValue', false)
  }

  // ????????????
  const onClickRetry = (index: number) => {
    if (index === 0) {
      requestData()
    }

    // ????????????????????????
  }

  onMounted(() => {
    requestData()
  })
</script>

<style lang="scss" scoped>
  $border-radius: 16rpx;
  $toolbar-height: 80rpx;
  $content-height: 700rpx;
  $content-height-vh: 70vh;

  .content-wrapper {
    width: 100%;
    background-color: #fff;
    color: #333;
    font-size: 28rpx;
    border-top-left-radius: $border-radius;
    border-top-right-radius: $border-radius;
  }

  .toolbar-wrapper {
    .title-wrapper {
      text-align: center;
      line-height: 80rpx;
      font-size: 32rpx;
      position: relative;

      .title {
        font-weight: 700;
      }
      .close {
        position: absolute;
        right: $spacing - 20rpx;
        top: 50%;
        padding: 20rpx;
        transform: translateY(-50%);
      }
    }

    .scroll-view-wrapper {
      width: 100%;
      border-bottom: 1px solid $color-border;

      .scroll-view {
        width: 100%;
        flex-wrap: nowrap;
        display: flex;
        height: $toolbar-height;
        box-sizing: border-box;

        .scroll-view-items {
          min-width: 100%;
          display: flex;
          align-items: center;
          height: $toolbar-height;
        }

        .scroll-view-item {
          display: flex;
          font-size: 32rpx;
          padding: 0 32rpx;
          white-space: nowrap;

          .text {
            line-height: $toolbar-height;
            position: relative;
            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

            &::after {
              content: '';
              position: absolute;
              bottom: -4px;
              left: 0;
              width: 100%;
              opacity: 0;
              transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
              height: 2px;
              // border-radius: 1px;
              background-color: $primary;
            }
          }

          &.active {
            color: $primary;

            span {
              font-weight: 700;

              &::after {
                bottom: 0;
                opacity: 1;
              }
            }
          }
        }
      }
    }
  }

  .swiper-wrapper {
    .swiper {
      width: 100%;
      height: $content-height;
      height: $content-height-vh;

      .swiper-item {
        width: 100%;
        height: 100%;

        .swiper-item-content {
          width: 100%;
          height: 100%;

          .swiper-scroll-view {
            width: 100%;
            height: 100%;
            position: relative;
          }
        }
      }

      .swiper-scroll-view-item {
        padding: 0 32rpx;
        line-height: 72rpx;
        color: #333;
        font-size: 28rpx;
        display: flex;
        align-items: center;

        .text {
          flex: 1;
          overflow: hidden;
          @include textOverflow();
        }
        .icon {
          padding-left: 20rpx;
        }

        &.active {
          color: $primary;
        }

        &:first-child {
          padding-top: 20rpx;
        }

        &:last-child {
          padding-bottom: 20rpx;
        }
      }

      .loading {
        @include centerPositionTransform();
        color: $primary;
        text-align: center;
      }

      .error {
        @include centerPositionTransform();
        text-align: center;
        white-space: pre-wrap;

        .tip {
          font-size: 26rpx;
          padding-bottom: 64rpx;
          color: #666;
        }
      }
    }
  }
</style>
