<template>
  <div class="index">
    <top-title :topTitle=TopTitle :isBack="false"></top-title>
    <date-tab v-on:fun="change"></date-tab>
    <hall-count :totalCount=totalCount :timeLabel=timeLabel></hall-count>
    <hall-game :gameList=gameList v-if ="gameList.length"></hall-game>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
// import storage from '@/utils/storage.js'
import config from '@/utils/config.js'
import time from '@/utils/time.js'
import { userSta } from '@/request/api'
import BottomNav from '../../components/BottomNav'
import TopTitle from '../../components/TopTitle'
import DateTab from '../../components/DateTab'
import HallCount from './components/HallCount'
import HallGame from './components/HallGame'
export default {
  name: 'Index',
  components: {
    TopTitle,
    DateTab,
    HallCount,
    HallGame,
    BottomNav
  },
  data () {
    return {
      TopTitle: '游戏统计',
      timeLabel: '今日',
      startTime: time.getDateStr.CurDate(),
      endTime: time.getDateStr.CurDate(),
      totalCount: {},
      gameList: []
    }
  },
  created () {
    this.getData(this.startTime, this.endTime)
  },
  computed: {},
  methods: {
    getData (st, et) {
      this.gameList = []
      // var userInfo = storage.get('userInfo')
      var data = {
        userName: '15882661962', // userInfo.userName,
        userId: 118, // userInfo.id,
        sd: st + 'T00:00:00',
        ed: et + 'T23:59:59',
        gameIds: '3',
        partnerId: 9
      }
      userSta(data).then(
        res => {
          this.totalCount = {
            registerCount: res.Data.RegistCount,
            totalCount: res.Data.Total
          }
          var gameData = res.Data.Records
          for (var i = 0; i < gameData.length; i++) {
            var obj = {
              gameimg: 'static/img/game_3.png',
              gameName: config.gameName[gameData[i].GameId],
              createCount: gameData[i].Count,
              onlineCount: gameData[i].PlayerCount,
              onlineTable: gameData[i].TableCount
            }
          }
          this.gameList.push(obj)
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
.index-title {
  color: #fff;
}
#exit_login {
  right: 0.8rem;
  top: 0.8rem;
  color: red;
  position: absolute;
  text-decoration: underline;
}
.user-info {
  padding-top: 0.8rem;
  background-image: -webkit-linear-gradient(top, #0094ff, #18b6ed);
}
.user-img {
  text-align: center;
  margin-top: 10px;
}
.user-img span{
  border: solid 2px #fff;
}
.nick-name,
.user-type {
  text-align: center;
  color: #fff;
}
.user-type {
  margin-top: 0.6rem;
  padding-bottom: 2.5rem;
}
.user-type > span {
  background: red;
  border-radius: 4rem;
  padding: 0.2rem 0.5rem;
  font-size: .8rem;
}
#_index .user-info .login-info {
  margin: 10px 30px 0px 30px;
  border-radius: 10px;
  padding-top: 10px;
  box-shadow: 0px 0px 20px #58df56;
  background-image: -webkit-linear-gradient(top, #fff, #f1fff4);
  background-image: linear-gradient(top, #fff, #f1fff4);
}
#_index .user-info .user-photo img {
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50% 50%;
  border: 3px solid #3aca72;
}
#_index .user-info .user-type span {
  padding: 0.1rem 1rem;
  border-radius: 4rem;
  color: #009bfd;
}
#_index .user-info .nick-name {
  margin-bottom: 0.1rem;
  font-size: 2rem;
}
#_index_item {
  margin-top: 1rem;
}
#_index_item > p {
  position: relative;
  margin: 0.8rem 0;
  padding: 0.3rem 0;
  text-indent: 1rem;
}
#_index_item > p:before {
  content: "";
  width: 0.4rem;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #0094ff;
}
#_index_item .index-content {
  background-color: #fff;
}
#_index_item .grid-content {
  text-align: center;
  border: solid 1px #eee;
}
#_index_item .grid-content i {
  padding: 10px;
  color: #18b4ed;
  font-size: 1.5rem;
}
#_index_item .grid-content p {
  font-size: .8rem;
}
</style>
