<template>
  <div class="demo-calendar">
    <demo-block title="基础用法">
      <div class="cells">
        <div class="cell" data-type="single" data-id="selectSingle" @click="show">
          <div class="left">选择单个日期</div>
          <div class="value">{{ formatFullDate(data.selectSingle) }}</div>
          <YhIcon name="arrow-right" color="#969799" />
        </div>
        <div class="cell" data-type="multiple" data-id="selectMultiple" @click="show">
          <div class="left">选择多个日期</div>
          <div class="value">{{ formatMultiple(data.selectMultiple) }}</div>
          <YhIcon name="arrow-right" color="#969799" />
        </div>
        <div class="cell" data-type="range" data-id="selectRange" @click="show">
          <div class="left">选择日期区间</div>
          <div class="value">{{ formatRange(data.selectRange) }}</div>
          <YhIcon name="arrow-right" color="#969799" />
        </div>
      </div>
    </demo-block>
    <demo-block title="快捷选择">
      <div class="cells">
        <div class="cell" data-type="single" data-id="quickSelect1" @click="show">
          <div class="left">选择单个日期</div>
          <div class="value">{{ formatFullDate(data.quickSelect1) }}</div>
          <YhIcon name="arrow-right" color="#969799" />
        </div>
        <div class="cell" data-type="range" data-id="quickSelect2" @click="show">
          <div class="left">选择日期区间</div>
          <div class="value">{{ formatRange(data.quickSelect2) }}</div>
          <YhIcon name="arrow-right" color="#969799" />
        </div>
      </div>
    </demo-block>
    <demo-block title="自定义日历">
      <div class="cells">
        <div class="cell" data-type="range" data-id="customColor" @click="show">
          <div class="left">自定义颜色</div>
          <div class="value">{{ formatRange(data.customColor) }}</div>
          <YhIcon name="arrow-right" color="#969799" />
        </div>
        <div class="cell" data-type="single" data-id="customRange" @click="show">
          <div class="left">自定义日期范围</div>
          <div class="value">{{ formatFullDate(data.customRange) }}</div>
          <YhIcon name="arrow-right" color="#969799" />
        </div>
        <div class="cell" data-type="range" data-id="customConfirm" @click="show">
          <div class="left">自定义按钮文字</div>
          <div class="value">{{ formatRange(data.customConfirm) }}</div>
          <YhIcon name="arrow-right" color="#969799" />
        </div>
        <div class="cell" data-type="range" data-id="customDayText" @click="show">
          <div class="left">自定义日期文案</div>
          <div class="value">{{ formatRange(data.customDayText) }}</div>
          <YhIcon name="arrow-right" color="#969799" />
        </div>
        <div class="cell" data-type="single" data-id="customPosition" @click="show">
          <div class="left">自定义弹出位置</div>
          <div class="value">{{ formatFullDate(data.customPosition) }}</div>
          <YhIcon name="arrow-right" color="#969799" />
        </div>
        <div class="cell" data-type="range" data-id="maxRange" @click="show">
          <div class="left">日期区间最大范围</div>
          <div class="value">{{ formatRange(data.maxRange) }}</div>
          <YhIcon name="arrow-right" color="#969799" />
        </div>
      </div>
    </demo-block>
    <!-- <demo-block title="平铺展示">
      <yh-calendar
        title="日历"
        :poppable="false"
        :show-confirm="false"
        :min-date="calendarProps.tiledMinDate"
        :max-date="calendarProps.tiledMaxDate"
        :first-day-of-week="firstDayOfWeek"
        class="tiled-calendar"
      />
    </demo-block> -->
    <yh-calendar
      :show="calendarProps.showCalendar"
      :type="calendarProps.type"
      :color="calendarProps.color"
      :round="calendarProps.round"
      :position="calendarProps.position"
      :min-date="calendarProps.minDate"
      :max-date="calendarProps.maxDate"
      :max-range="calendarProps.maxRange"
      :formatter="calendarProps.formatter"
      :show-confirm="calendarProps.showConfirm"
      :confirm-text="calendarProps.confirmText"
      :confirm-disabled-text="calendarProps.confirmDisabledText"
      :first-day-of-week="calendarProps.firstDayOfWeek"
      @confirm="onConfirm"
      @select="onSelect"
      @unselect="onUnselect"
      @open="onOpen"
      @opened="onOpened"
      @close="onClose"
      @closed="onClosed" />
  </div>
</template>
<script lang="ts" setup>
  import DemoBlock from '@/pages/packageDemo/components/demo-block/demo-block.vue'
  import YhCalendar from '@/components/yh/calendar/calendar.vue'
  import YhIcon from '@/components/yh/icon/icon.vue'

  import { reactive } from 'vue'

  const data = reactive({
    maxRange: [],
    selectSingle: null,
    selectRange: [],
    selectMultiple: [],
    quickSelect1: null,
    quickSelect2: [],
    customColor: [],
    customConfirm: [],
    customRange: null,
    customDayText: [],
    customPosition: null
  })

  const calendarProps = reactive({
    type: 'single',
    round: true,
    color: '',
    minDate: Date.now(),
    maxDate: new Date(new Date().getFullYear(), new Date().getMonth() + 6, new Date().getDate()).getTime(),
    maxRange: undefined,
    position: 'bottom',
    formatter: undefined,
    showConfirm: true,
    showCalendar: false,
    tiledMinDate: new Date(2012, 0, 10).getTime(),
    tiledMaxDate: new Date(2012, 2, 20).getTime(),
    confirmText: '确定',
    confirmDisabledText: '确定',
    firstDayOfWeek: 1
  })

  const formatDate = (date) => {
    if (date) {
      date = new Date(date)
      let month = date.getMonth() + 1
      if (month < 10) {
        month = '0' + month
      }
      return month + '/' + date.getDate()
    }
  }

  const formatFullDate = (date) => {
    if (date) {
      date = new Date(date)
      return date.getFullYear() + '/' + formatDate(date)
    }
  }

  const formatMultiple = (dates) => {
    if (dates.length) {
      return '选择了 ' + dates.length + '个日期'
    }
  }

  const formatRange = (dateRange) => {
    if (dateRange.length) {
      return formatDate(dateRange[0]) + ' - ' + formatDate(dateRange[1])
    }
  }

  const onConfirm = (event) => {
    calendarProps.showCalendar = false

    data[calendarProps.id] = Array.isArray(event) ? event.map((date) => date.valueOf()) : event.valueOf()
  }

  const onSelect = (event) => {
    // eslint-disable-next-line
    console.log(event)
  }

  const onUnselect = (event) => {
    // eslint-disable-next-line
    console.log(event)
  }

  const onClose = () => {
    calendarProps.showCalendar = false
  }

  const onOpen = () => {
    // eslint-disable-next-line
    console.log('open')
  }

  const onOpened = () => {
    // eslint-disable-next-line
    console.log('opened')
  }

  const onClosed = () => {
    // eslint-disable-next-line
    console.log('closed')
  }

  const resetSettings = () => {
    calendarProps.round = true
    calendarProps.color = ''
    calendarProps.minDate = Date.now()
    calendarProps.maxDate = new Date(
      new Date().getFullYear(),
      new Date().getMonth() + 6,
      new Date().getDate()
    ).getTime()
    calendarProps.maxRange = undefined
    calendarProps.position = 'bottom'
    calendarProps.formatter = undefined
    calendarProps.confirmText = '确定'
    calendarProps.confirmDisabledText = '确定'
  }
  const dayFormatter = (day) => {
    const month = day.date.getMonth() + 1
    const date = day.date.getDate()

    if (month === 5) {
      if (date === 1) {
        day.topInfo = '劳动节'
      } else if (date === 4) {
        day.topInfo = '五四青年节'
      } else if (date === 11) {
        day.text = '今天'
      }
    }

    if (day.type === 'start') {
      day.bottomInfo = '入店'
    } else if (day.type === 'end') {
      day.bottomInfo = '离店'
    }

    return day
  }
  const show = (event) => {
    resetSettings()
    const { type, id } = event.currentTarget.dataset

    calendarProps.id = id
    calendarProps.type = type
    calendarProps.showCalendar = true

    switch (id) {
      case 'quickSelect1':
      case 'quickSelect2':
        calendarProps.showConfirm = false
        break
      case 'customColor':
        calendarProps.color = '#07c160'
        break
      case 'customConfirm':
        calendarProps.confirmText = '完成'
        calendarProps.confirmDisabledText = '请选择结束时间'
        break
      case 'customRange':
        calendarProps.minDate = new Date(2010, 0, 1).getTime()
        calendarProps.maxDate = new Date(2010, 0, 31).getTime()
        break
      case 'customDayText':
        calendarProps.minDate = new Date(2010, 4, 1).getTime()
        calendarProps.maxDate = new Date(2010, 4, 31).getTime()
        calendarProps.formatter = dayFormatter
        break
      case 'customPosition':
        calendarProps.round = false
        calendarProps.position = 'right'
        break
      case 'maxRange':
        calendarProps.maxRange = 3
        break
    }
  }
</script>

<style lang="scss" scoped>
  .demo-calendar {
    width: 100%;
    background: #f7f8fa;
  }
  .cells {
    background-color: #fff;
    font-size: 28rpx;
    padding: 0 30rpx;
    .cell {
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: 48rpx;
      padding: 20rpx 0;
      border-bottom: 1px solid #ebedf0;
      &:last-child {
        border-bottom: 0;
      }
      .value {
        flex: 1;
        text-align: right;
        padding: 0 10rpx;
        color: #666;
      }
    }
  }
  .tiled-calendar {
    --calendar-height: 500px;
  }
</style>
