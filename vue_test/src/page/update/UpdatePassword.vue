<template>
  <div class="index">
    <top-title :topTitle=TopTitle :isBack="true"></top-title>
    <div class="inputarea">
      <el-input placeholder="请输入手机号" v-model="mobile" class="input">
        <template slot="prepend" class="inputlabel">手机号</template>
      </el-input>
      <el-input placeholder="请输入旧密码" v-model="oldpassword" style="margin-top:1rem;" class="input">
        <template slot="prepend" class="inputlabel">旧密码</template>
      </el-input>
      <el-input placeholder="请输入新密码" v-model="newpassword" style="margin-top:1rem;" class="input">
        <template slot="prepend" class="inputlabel">新密码</template>
      </el-input>
      <el-button type="primary" class="btn" v-on="updatePassword()">确定</el-button>
    </div>
  </div>
</template>

<script>
import storage from '@/utils/storage.js'
import config from '@/utils/config.js'
import TopTitle from '../../components/TopTitle'
import { updatePassword } from '@/request/api'
export default {
  name: 'UpdatePassword',
  components: {
    TopTitle
  },
  data () {
    return {
      TopTitle: '修改密码',
      mobile: '',
      oldpassword: '',
      newpassword: ''
    }
  },
  created () {

  },
  computed: {},
  methods: {
    updatePassword () {
      var userInfo = storage.get('userInfo')
      var data = {
        userName: userInfo.userName,
        partnerId: config.partnerId,
        password: this.newpassword,
        oldPassword: this.oldpassword
      }
      updatePassword(data).then(
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
  margin-top: 3rem;
  padding: .8rem;
}
.input{
  background-color: #fff!important;
}
.inputlabel{
  border-left:none;
}
.btn{
  width: 100%;
  margin-top: 1rem;
}
</style>
