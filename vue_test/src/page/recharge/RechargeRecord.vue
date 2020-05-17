<template>
  <div class="index">
    <top-title :topTitle=TopTitle :isBack="true"></top-title>
    <recharge-player :players=players></recharge-player>
  </div>
</template>

<script>
import storage from '@/utils/storage.js'
// import config from '@/utils/config.js'
import { statistics } from '@/request/api'
import TopTitle from '../../components/TopTitle'
import RechargeCount from './components/RechargeCount'
import RechargePlayer from './components/RechargePlayer'
import BottomNav from '../../components/BottomNav'
export default {
  name: 'RechargeRecord',
  components: {
    TopTitle,
    RechargeCount,
    RechargePlayer,
    BottomNav
  },
  data () {
    return {
      TopTitle: '充值记录',
      players: []
    }
  },
  created () {
    this.getData()
  },
  computed: {},
  methods: {
    getData () {
      // var userInfo = storage.get('userInfo')
      var data = {
        userName: 15882661962,
        partnerId: 9,
        userId: 118,
        page: 1,
        sd: '2020-03-02T00:00:00',
        ed: '2020-03-02T23:59:59',
        size: 10
      }
      statistics(data).then(
        res => {
          this.players = res.Data
        }
      )
    },
    exit () {
      storage.remove('userInfo')
      this.$router.push({ path: `/` })
    }
  }
}
</script>

<style scoped>
.index {
  margin: -8px;
  background-color: #efefef;
  padding-bottom: 55px;
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
