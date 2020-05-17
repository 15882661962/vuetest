<template>
  <div class="playerList">
    <div class="lists"  v-for="(item,i) in playerList" :key="i">
      <div class="headimg">
        <img :src="item.Imgurl" style="width:100%">
      </div>
      <div class="weui-flex__item info">
        <div class="weui-flex">
          <span class="c-gray">注册时间：{{item.RegistDate}}</span>
          <a v-if="item.TypeId == 16" class="color-blue" href="#/index/players/edit/?userId=' + id + '&nickname=' + name + '&pId=' + userId + '">{{item.TypeName}}</a>
        </div>
        <div class="weui-flex">
          <div class="weui-flex__item">
            <span>{{item.Info}}</span>
          </div>
        </div>
        <div class="weui-flex">
          <span>推荐人：{{item.SpreadName}}</span>
          <span v-if="item.TypeId < 14 && item.TypeId > 10">返点：{{item.Per}}</span>
        </div>
        <div class="weui-flex">
          <span>房卡：{{item.Gold}}</span>
          <span>积分：{{item.SumScore}}</span>
        </div>
        <div class="weui-flex">
          <span class="" >最后游戏时间：{{item.LastGameTime}}</span>
        </div>
        <div class="weui-flex">
           <!-- v-if="loginTypeid < 12" -->
          <a class="color-blue" href="#/index/function/cards/?userId=' + id + '">开发</a>
          <a class="color-blue"> {{item.Fortune}} </a>
          <a class="color-blue" href="#/index/players/updatespread/?userId=' + id + '&nickname=' + name + '&pId=' + userId + '">归属</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from '@/utils/config.js'
export default {
  name: 'AgentList',
  props: {
    players: Array
  },
  data () {
    return {
      playerList: []
    }
  },
  mounted () {
    let _this = this
    setTimeout(() => {
      for (var i = 0; i < _this.players.length; i++) {
        var player = _this.players[i]

        // eslint-disable-next-line eqeqeq
        if (player.Fortune == null || player.Fortune == 100) {
          var fortune = '正常'
        } else {
          // eslint-disable-next-line no-redeclare
          var fortune = (player.Fortune - 100) + '%'
        }

        let playerobj = {
          RegistDate: player.RegistDate.split('T')[0],
          Info: player.NickName + '（ID:' + player.Id + '）',
          Imgurl: 'http://www.7uao.com/upload/headimg/' + player.Id + '.jpg',
          Gold: player.Gold,
          SumScore: player.SumScore,
          SpreadName: player.SpreadName,
          LastGameTime: player.LastGameTime.replace('T', ' ').split('.')[0],
          Per: player.Per ? player.Per * 100 + '%' : 0,
          TypeName: config.userTypeName[player.TypeId],
          Fortune: fortune,
          TypeId: player.TypeId
        }
        this.playerList.push(playerobj)
      }
    }, 200)
  },
  created () {

  },
  computed: {},
  methods: {

  }
}
</script>

<style scoped>
.playerList{
  font-size: .75rem;
}
.lists{
  background-color: #fff;
  border-bottom: solid 1px #ddd;
  display: flex;
  justify-content: space-between;
}
.headimg{
  width:5rem;
  height:5rem;
  margin: auto;
}
.info{
  margin-left:.8rem;
  margin-right:.8rem;
}
.color-blue{
  color: #18b4ed;
}
.weui-flex{
  display: flex;
  justify-content: space-between;
  margin-top: .5em;
  margin-bottom: .5em;
}
.weui-flex__item{
  flex: 1;
}
</style>
