<template>
  <div class="index">
    <agent-title :topTitle=TopTitle :typeId=typeId></agent-title>
    <agent-header :playercount=playercount></agent-header>
    <search-input v-on:fun="change"></search-input>
    <agent-list :players=players></agent-list>
  </div>
</template>

<script>
import storage from '@/utils/storage.js'
import config from '@/utils/config.js'
import AgentTitle from './components/AgentTitle'
import AgentHeader from './components/AgentHeader'
import SearchInput from '../../components/SearchInput'
import AgentList from './components/AgentList'
import { playerList } from '@/request/api'
export default {
  name: 'Agent',
  components: {
    AgentTitle,
    AgentHeader,
    SearchInput,
    AgentList
  },
  data () {
    return {
      TopTitle: '玩家',
      playercount: 0,
      players: [],
      typeId: ''
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
        userId: userInfo.id,
        seachName: '',
        typeId: this.typeId,
        page: 1,
        size: 8,
        containsCount: true
      }
      playerList(data).then(
        res => {
          this.playercount = res.Data.Count
          this.players = res.Data.List
        }
      )
    },
    change () {

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
