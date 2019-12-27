<template>
  <div class="login">
    <div class="title">
            <h1 class="title-ti">登陆后台</h1>
            <p class="title-desc">非管理员账号不可登陆</p>
        </div>
        <div class="account">
          <div>
            <el-input placeholder="请输入账号" v-model="account">
              <template slot="prepend">账号</template>
            </el-input>
          </div>
          <div>
            <el-input placeholder="请输入密码" v-model="password" type="password">
              <template slot="prepend">密码</template>
            </el-input>
          </div>
          <el-button type="success" @click="login" :loading="isBtnLoading" class="login-btn">登录</el-button>
        </div>
  </div>
</template>

<script>
import storage from '@/utils/storage.js'
import config from '@/utils/config.js'
import { loginAddress, firstOrDefault } from '@/request/api'
export default {
  name: 'Login',
  data () {
    return {
      account: '',
      password: '',
      isBtnLoading: false
    }
  },
  created () {
    if (storage.get('userInfo')) {
      this.account = storage.get('userInfo').account
      this.password = storage.get('userInfo').password
    }
  },
  computed: {
    btnText () {
      if (this.isBtnLoading) return '登录中...'
      return '登录'
    }
  },
  methods: {
    login () {
      var reg = /^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/
      if (!reg.test(this.account)) {
        this.$alert('请输入正确的账号', '提示', {
          confirmButtonText: '确定',
          callback: active => {
            /*
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            })
            */
          }
        })
        return false
      }
      // eslint-disable-next-line
      if (this.password == '') {
        this.$alert('请输入正确的密码', '提示', {
          confirmButtonText: '确定',
          callback: active => {
            /*
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            })
            */
          }
        })
        return false
      }
      var data = {
        userName: this.account,
        partnerId: 16,
        password: this.password
      }
      // eslint-disable-next-line
      loginAddress(data).then (res => {
        // eslint-disable-next-line
        if (res.Code != 0) {
          this.$alert(res, '提示', {
            confirmButtonText: '确定',
            callback: active => { }
          })
        } else {
          firstOrDefault({userName: res.Data.Data.UserName, partnerId: 16}).then(res => {
            var userInfo = {
              account: res.Data.UserName,
              password: this.password
            }
            storage.set('userInfo', userInfo)
            if (res.Data.TypeId < config.userType.Gamer) {
              this.$router.push({ path: `/index` })
            } else {
              this.$alert('非管理员权限', '提示', {
                confirmButtonText: '确定',
                callback: active => { }
              })
            }
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.title{
  background-color:#f8f8f8;
  margin: -8px;
  padding: 15px;
}
.account>div{
  margin-top: 1rem;
}
.login-btn{
  width: 100%;
  margin-top: 1rem;
}
</style>
