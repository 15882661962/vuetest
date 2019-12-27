<template>
  <div class="index">
    <div class="user-info rel" id="user_info">
      <div>
        <b class="index-title">代理中心</b>
      </div>
      <span id="exit_login" @click="exit">退出</span>
      <div class="login-info c-bg-w">
        <el-row class="demo-avatar demo-basic">
          <el-col :span="24">
            <div class="demo-basic--circle">
              <div class="block user-img">
                <el-avatar :size="50" :src="headimgUrl"></el-avatar>
              </div>
            </div>
          </el-col>
        </el-row>
        <div class="nick-name">{{nickName}}</div>
        <div class="user-type">
          <span>{{userType}}</span>
        </div>
      </div>
    </div>
    <div class="quick-entry base-entry" id="_index_item">
      <p>类目</p>
      <el-row class="index-content">
        <el-col :span="8">
          <div class="grid-content">
            <i class="el-icon-s-custom"></i>
            <p>玩家</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <i class="el-icon-s-shop"></i>
            <p>房卡</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <i class="el-icon-close-notification"></i>
            <p>编辑公告</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <i class="el-icon-delete"></i>
            <p>公会</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <i class="el-icon-document-add"></i>
            <p>提现审批</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <i class="el-icon-document-checked"></i>
            <p>提现记录</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <i class="el-icon-set-up"></i>
            <p>汇总</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <i class="el-icon-mobile-phone"></i>
            <p>绑定账号</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <i class="el-icon-unlock"></i>
            <p>修改密码</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-row :gutter="10">
      <el-col :span="24">
        <el-menu default-active="1" class="el-menu-vertical-demo bottom">
          <el-menu-item index="1" to class="bottom-menu">
            <i class="el-icon-s-home"></i>
            <span>首页</span>
          </el-menu-item>
          <el-menu-item index="2" to class="bottom-menu">
            <i class="el-icon-pie-chart"></i>
            <span>游戏统计</span>
          </el-menu-item>
          <el-menu-item index="3" to class="bottom-menu">
            <i class="el-icon-sell"></i>
            <span>充值统计</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import storage from '@/utils/storage.js'
import config from '@/utils/config.js'
import { firstOrDefault } from '@/request/api'
export default {
  name: 'Index',
  data () {
    return {
      headimgUrl: '',
      nickName: '',
      userType: ''
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
          this.headimgUrl =
            config.serverIp + 'upload/headimg/' + res.Data.UserId + '.jpg'
          this.nickName = res.Data.NickName
          this.userType = config.userTypeName[res.Data.TypeId]
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
  height: 10rem;
  padding-top: 0.8rem;
  background-image: -webkit-linear-gradient(top, #0094ff, #18b6ed);
}
.user-img {
  text-align: center;
  margin-top: 30px;
}
.nick-name,
.user-type {
  text-align: center;
  color: #fff;
}
.user-type {
  margin-top: 0.6rem;
}
.user-type > span {
  background: red;
  border-radius: 4rem;
  padding: 0.2rem 0.5rem;
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
}
#_index_item .grid-content p {
  font-size: 1rem;
}
.bottom {
  background: #eee;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  border-top: solid 1px #ccc;
}

.bottom .bottom-menu {
  text-align: center;
  width: 33%;
}
.bottom .bottom-menu > i,
.bottom .bottom-menu > span {
  display: block;
  width: 100%;
  margin-top: 8px;
}
.bottom .bottom-menu > span {
  line-height: 20px;
}
</style>
