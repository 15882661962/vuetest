<template>
  <div class="index">
    <top-title :topTitle=TopTitle :isBack="true"></top-title>
    <record-header></record-header>
    <record-list :recordList=recordList></record-list>
  </div>
</template>

<script>
import storage from '@/utils/storage.js'
import config from '@/utils/config.js'
import TopTitle from '../../components/TopTitle'
import RecordHeader from './components/RecordHeader'
import RecordList from './components/RecordList'
import { cashRecord } from '@/request/api'
export default {
  name: 'CashRecord',
  components: {
    TopTitle,
    RecordHeader,
    RecordList
  },
  data () {
    return {
      TopTitle: '提现记录',
      recordList: []
    }
  },
  created () {
    this.getData()
  },
  computed: {},
  methods: {
    getData () {
      var userInfo = storage.get('userInfo')
      var data = {
        userName: userInfo.userName,
        partnerId: config.partnerId,
        type: 3,
        page: 1,
        size: 30
      }
      cashRecord(data).then(
        res => {
          this.recordList = res.Data
        }
      )
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
