<template>
  <div class="index">
    <top-title :topTitle=TopTitle :isBack="true"></top-title>
    <search-input style="margin-top:3rem;"></search-input>
    <div class="inputarea">
      <el-input placeholder="请输入天数" v-model="days" class="input">
        <template slot="prepend" class="inputlabel">时间：</template>
      </el-input>
      <el-input placeholder="请输入倍数" v-model="winMult" style="margin-top:1rem;" class="input">
        <template slot="prepend" class="inputlabel">胜利：</template>
      </el-input>
      <el-input placeholder="请输入倍数" v-model="loseMult" style="margin-top:1rem;" class="input">
        <template slot="prepend" class="inputlabel">失败：</template>
      </el-input>
      <el-button type="primary" class="btn">修改</el-button>
      <p class="tip">注：在设置的时间内，输赢倍数不能超过底分*倍数</p>
    </div>
  </div>
</template>

<script>
import storage from '@/utils/storage.js'
import config from '@/utils/config.js'
import TopTitle from '../../components/TopTitle'
import SearchInput from '../../components/SearchInput'
import { getGroup, updateGroup } from '@/request/api'
export default {
  name: 'Group',
  components: {
    TopTitle,
    SearchInput
  },
  data () {
    return {
      TopTitle: '公会',
      days: '',
      winMult: '',
      loseMult: ''
    }
  },
  created () {
    this.getData()
  },
  computed: {},
  methods: {
    getData () {
      var userInfo = storage.get('userInfo')
      getGroup({ userName: userInfo.userName, partnerId: config.partnerId, groupId: 1 }).then(
        res => {
          this.days = res.Data.Days || 0
          this.winMult = res.Data.WinMult || 0
          this.loseMult = res.Data.LoseMult || 0
        }
      )
    },
    updateControl () {
      var userInfo = storage.get('userInfo')
      var data = {
        partnerId: userInfo.partnerId,
        userName: userInfo.userName,
        groupId: 1,
        days: this.days,
        winMult: this.winMult,
        loseMult: this.loseMult
      }
      updateGroup(data).then(
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
.inputarea{
  padding: .8rem;
}
.input{
  background-color: #fff;
}
.inputlabel{
  border-left:none;
}
.btn{
  width: 100%;
  margin-top: 1rem;
}
.tip{
  font-size: .75rem
}
</style>
