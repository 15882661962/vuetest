<template>
  <div class="index">
    <top-title :topTitle=TopTitle :isBack="true"></top-title>
    <cash-header></cash-header>
    <cash-list></cash-list>
  </div>
</template>

<script>
import storage from '@/utils/storage.js'
import config from '@/utils/config.js'
import TopTitle from '../../components/TopTitle'
import CashHeader from './components/CashHeader'
import CashList from './components/CashList'
import { cashRecord } from '@/request/api'
export default {
  name: 'Cash',
  components: {
    TopTitle,
    CashHeader,
    CashList
  },
  data () {
    return {
      TopTitle: '提现审批'
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
        status: 1,
        page: 1,
        size: 30
      }
      cashRecord(data).then(
        res => {

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
