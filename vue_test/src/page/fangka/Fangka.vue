<template>
  <div class="index">
    <top-title :topTitle=TopTitle :isBack="true"></top-title>
    <fangka-count :gold=gold></fangka-count>
    <fangka-tab></fangka-tab>
    <fangka-send></fangka-send>
  </div>
</template>

<script>
import storage from '@/utils/storage.js'
// import config from '@/utils/config.js'
import TopTitle from '../../components/TopTitle'
import FangkaCount from './components/FangkaCount'
import FangkaTab from './components/FangkaTab'
import FangkaSend from './components/FangkaSend'
import { firstOrDefault } from '@/request/api'
export default {
  name: 'Fangka',
  components: {
    TopTitle,
    FangkaCount,
    FangkaTab,
    FangkaSend
  },
  data () {
    return {
      TopTitle: '房卡',
      gold: 0
    }
  },
  created () {
    this.getData()
  },
  computed: {},
  methods: {
    getData () {
      var userInfo = storage.get('userInfo')
      firstOrDefault({ userName: userInfo.account, partnerId: 16 }).then(
        res => {
          this.gold = res.Data.Gold
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
