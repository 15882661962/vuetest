<template>
  <div class="user-info rel" id="user_info">
      <div style="padding-left:.6rem;">
        <b class="index-title">代理中心</b>
      </div>
      <span id="exit_login" @click="exit">退出</span>
      <div class="login-info c-bg-w">
        <el-row class="demo-avatar demo-basic">
          <el-col :span="24">
            <div class="demo-basic--circle">
              <div class="block user-img">
                <el-avatar :size="65" :src="headimgUrl"></el-avatar>
              </div>
            </div>
          </el-col>
        </el-row>
        <div class="nick-name">{{userInfo.NickName}}</div>
        <div class="user-type">
          <span>{{userType}}</span>
        </div>
      </div>
    </div>
</template>

<script>
import storage from '@/utils/storage.js'
import config from '@/utils/config.js'
export default {
  name: 'IndexHeader',
  props: {
    userInfo: Object
  },
  data () {
    return {
      headimgUrl: '',
      userType: ''
    }
  },
  mounted () {
    // eslint-disable-next-line no-unused-vars
    let _this = this
    setTimeout(() => {
      this.headimgUrl =
        config.serverIp + 'upload/headimg/' + _this.userInfo.UserId + '.jpg'
      this.userType = config.userTypeName[_this.userInfo.TypeId]
    }, 200)
  },
  methods: {
    exit () {
      storage.remove('userInfo')
      this.$router.push({ path: `/` })
    }
  }
}
</script>

<style scoped>
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
</style>
