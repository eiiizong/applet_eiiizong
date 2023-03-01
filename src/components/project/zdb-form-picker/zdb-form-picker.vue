<template>
  <view class="zdb-form-picker" :class="required ? 'required' : ''">
    <div class="key">{{ label }}</div>
    <div class="value">
      <picker
        class="picker"
        :mode="mode"
        :range-key="rangeKey"
        :range="range"
        :value="pickerValue"
        @change="onChangePicker">
        <div class="picker-content">
          <div v-if="modelValue + ''" class="picker-value">{{ valueDesc }}</div>
          <div v-else class="picker-placeholder">{{ placeholder }}</div>
          <YhIcon class="picker-icon" color="#7a7a7a" name="picker" size="28rpx" />
        </div>
      </picker>
    </div>
  </view>
</template>

<script setup lang="ts">
  import YhIcon from '@/components/yh/icon/icon.vue'

  import type { PropType } from 'vue'
  import { computed } from 'vue'

  interface PickerItem {
    [key: string]: string
  }

  const emit = defineEmits(['update:modelValue'])
  const props = defineProps({
    /**
     * 输入框的内容
     */
    modelValue: {
      type: String,
      required: true
    },
    /**
     * input 的类型
     */
    range: {
      type: Array as PropType<PickerItem[]>,
      required: true
    },
    /**
     * 当 range 是一个 Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容
     */
    rangeKey: {
      type: String,
      default: () => 'name'
    },
    /**
     * 当 range 是一个 Object Array 时，通过 range-value 来指定 Object 中 key 的值作为选择器选择的值
     */
    rangeValue: {
      type: String,
      default: () => 'value'
    },
    /**
     * 选择器类型 可选 selector 普通选择器（默认）、multiSelector	多列选择器、time	时间选择器、date	日期选择器、region	省市区选择器
     */
    mode: {
      type: String,
      default: () => 'selector'
    },
    /**
     * 选择框提示名称
     */
    label: {
      type: String,
      required: true
    },
    /**
     * 选择框为空时占位符
     */
    placeholder: {
      type: String,
      default: () => '请输入'
    },
    /**
     * 是否必须输入 默认 false
     */
    required: {
      type: Boolean,
      default: () => false
    }
  })

  // 根据 modelValue 获取的中文
  const valueDesc = computed(() => {
    let value = ''
    const { range, rangeValue, rangeKey, modelValue, mode } = props

    if (mode === 'selector') {
      if (range && range instanceof Array) {
        for (let i = 0, len = range.length; i < len; i++) {
          const item = range[i]
          if (item[rangeValue] === modelValue) {
            value = item[rangeKey]
            break
          }
        }
      }
    }

    return value
  })

  // 表示选择了 range 中的第几个（下标从 0 开始）
  const pickerValue = computed(() => {
    let value = 0
    const { range, rangeValue, modelValue, mode } = props
    if (mode === 'selector') {
      if (range && range instanceof Array) {
        for (let i = 0, len = range.length; i < len; i++) {
          const item = range[i]
          if (item[rangeValue] === modelValue) {
            value = i
            break
          }
        }
      }
    }
    return value
  })

  // 选择
  const onChangePicker = (event: WechatMiniprogram.PickerChange) => {
    const { mode, range, rangeValue } = props

    const { value } = event.detail

    let result = ''
    if (mode === 'selector') {
      if (range && range instanceof Array) {
        for (let i = 0, len = range.length; i < len; i++) {
          const item = range[i]
          if ((value as string) === i + '') {
            result = item[rangeValue]
            break
          }
        }
      }
    }

    if (mode === 'selector') {
      emit('update:modelValue', result)
    }
  }
</script>

<style lang="scss" scoped>
  $color-key: #3d424d;
  $color-value: #3d424d;
  $input-height: 102rpx;
  $input-font-size: 30rpx;
  $input-line-height: 42rpx;

  .zdb-form-picker {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid $color-border;

    .key {
      font-weight: 500;
      color: $color-key;
      padding: calc(($input-height - 2rpx - $input-line-height) / 2) 0;
      position: relative;
      padding-left: 16rpx;
    }
    .value {
      flex: 1;
      overflow: hidden;
      min-height: $input-height;
      display: flex;
      margin-left: 30rpx;
    }
    .picker {
      width: 100%;
      .picker-content {
        width: 100%;
        min-height: $input-height;
        padding: calc(($input-height - 2rpx - $input-line-height) / 2) 0;
        padding-right: 40rpx;
        position: relative;
      }
      .picker-value,
      .picker-placeholder {
        width: 100%;
        text-align: right;
        font-weight: 500;
        transition: all 0.3s;
      }
      .picker-value {
        color: $color-value;
      }
      .picker-placeholder {
        color: #7a7a7a;
      }
      .picker-icon {
        color: #7a7a7a;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
      }
    }
    &.required {
      .key {
        &::before {
          content: '*';
          position: absolute;
          top: 50%;
          left: 0;
          color: #f00;
          transform: translateY(-50%);
          margin-top: -4rpx;
        }
      }
    }
  }
</style>
