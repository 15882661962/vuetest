<template>
  <div style="margin-top:5px;">
    <div class="account">
      <div style="position:relative;">
        <el-input placeholder="玩家ID" v-model="account">
          <template slot="prepend">玩家&nbsp;&nbsp;&nbsp;ID</template>
        </el-input>
         <el-button type="danger" class="checkbtn">核对用户</el-button>
      </div>
      <div>
        <el-input placeholder="赠送数量" v-model="password">
          <template slot="prepend">赠送数量</template>
        </el-input>
      </div>
      <el-button type="success" @click="login" :loading="isBtnLoading" class="login-btn">确定</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FangkaSend',
  props: {
    account: '',
    password: '',
    isBtnLoading: false
  },
  data () {
    return {

    }
  },
  created () {

  },
  computed: {},
  methods: {
    login () {

    }
  }
}
</script>

<style scoped>
.account{
  padding: .8rem;
}
.account>div{
  margin-top: 1rem;
}
.checkbtn{
  position: absolute;
  right: 0;
  top: 0;
  padding: 6px 10px;
  margin: 5px;
}
.login-btn{
  width: 100%;
  margin-top: 1rem;
}
</style>
