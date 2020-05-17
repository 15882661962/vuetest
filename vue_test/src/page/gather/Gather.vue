<template>
  <div class="index">
    <top-title :topTitle=TopTitle :isBack="true"></top-title>
    <date-tab v-on:fun="change"></date-tab>
    <gather-count :gatherData=gatherData :timeLabel=timeLabel></gather-count>
  </div>
</template>

<script>
import storage from '@/utils/storage.js'
import config from '@/utils/config.js'
import time from '@/utils/time.js'
import TopTitle from '../../components/TopTitle'
import DateTab from '../../components/DateTab'
import GatherCount from './components/GatherCount'
import { bigSta } from '@/request/api'
export default {
  name: 'Gather',
  components: {
    TopTitle,
    DateTab,
    GatherCount
  },
  data () {
    return {
      TopTitle: '汇总',
      timeLabel: '今日',
      gatherData: {},
      startTime: time.getDateStr.CurDate(),
      endTime: time.getDateStr.CurDate()
    }
  },
  created () {
    this.getData(this.startTime, this.endTime)
  },
  computed: {},
  methods: {
    getData (st, et) {
      var userInfo = storage.get('userInfo')
      var data = {
        userName: userInfo.userName,
        partnerId: config.partnerId,
        sd: st + 'T00:00:00',
        ed: st + 'T23:59:59'
      }
      bigSta(data).then(
        res => {
          this.gatherData = res.Data
        }
      )
    },
    change (index) {
      switch (Number(index)) {
        case 0:
          this.timeLabel = '今日'
          this.startTime = time.getDateStr.CurDate()
          this.endTime = time.getDateStr.CurDate()
          break
        case 1:
          this.timeLabel = '昨日'
          this.startTime = time.getDateStr.AddDay(-1)
          this.endTime = time.getDateStr.AddDay(-1)
          break
        case 2:
          this.timeLabel = '本周'
          this.startTime = time.getDateStr.getWeekOnDay()
          this.endTime = time.getDateStr.CurDate()
          break
        case 3:
          this.timeLabel = '本月'
          this.startTime = time.getDateStr.getMothOnDay()
          this.endTime = time.getDateStr.CurDate()
          break
        case 4:
          this.timeLabel = '上月'
          var date = time.getDateStr.getPreMonth()
          this.startTime = date[0]
          this.endTime = date[1]
          break
      }
      this.getData(this.startTime, this.endTime)
    }
  }
}
</script>

<style scoped>
.index {
  margin: -8px;
  background-color: #efefef;
}
</style>
