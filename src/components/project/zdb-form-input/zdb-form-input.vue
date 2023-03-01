<template>
  <view class="zdb-form-input" :class="required ? 'required' : ''">
    <div class="key">{{ label }}</div>
    <div class="value">
      <input
        :value="modelValue"
        :type="type"
        class="input"
        :disabled="disabled"
        :maxlength="disabled ? -1 : maxlength"
        :placeholder="placeholder"
        @input="onInput" />
    </div>
  </view>
</template>

<script setup lang="ts">
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
    type: {
      type: String,
      default: () => 'text'
    },
    /**
     * 输入框名称
     */
    label: {
      type: String,
      required: true
    },
    /**
     * 输入框为空时占位符
     */
    placeholder: {
      type: String,
      default: () => '请输入'
    },
    /**
     * 输入最大字符个数 默认20
     */
    maxlength: {
      type: [String, Number],
      default: () => 20
    },
    /**
     * 是否必须输入 默认 false
     */
    required: {
      type: Boolean,
      default: () => false
    },
    /**
     * 是否禁用 默认 false
     */
    disabled: {
      type: Boolean,
      default: () => false
    }
  })

  // 输入框输入
  const onInput = (event: unknown) => {
    const { detail } = event as WechatMiniprogram.Input
    const { value } = detail
    emit('update:modelValue', value)
  }
</script>

<style lang="scss" scoped>
  $color-key: #3d424d;
  $color-value: #3d424d;
  $input-height: 102rpx;
  $input-font-size: 30rpx;
  $input-line-height: 42rpx;
  .zdb-form-input {
    width: 100%;
  }
  .zdb-form-input {
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
    .input {
      display: block;
      width: 100%;
      height: $input-height;
      font-weight: 500;
      text-align: right;
      color: $color-value;
      padding: calc(($input-height - 2rpx - $input-line-height) / 2) 0;
      font-size: $input-font-size;
      line-height: $input-line-height;
      transition: all 0.3s;
      &[disabled] {
        opacity: 0.6;
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
