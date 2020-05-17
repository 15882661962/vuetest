<template>
  <div class="index">
    <top-title :topTitle=TopTitle :isBack="true"></top-title>
    <div class="input">
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="textarea">
      </el-input>
      <el-button type="primary" class="btn" v-on="edit()">提交</el-button>
    </div>
  </div>
</template>

<script>
import storage from '@/utils/storage.js'
// import config from '@/utils/config.js'
import TopTitle from '../../components/TopTitle'
import { updateContent } from '@/request/api'
export default {
  name: 'UpdateNotice',
  components: {
    TopTitle
  },
  data () {
    return {
      TopTitle: '编辑公告',
      textarea: ''
    }
  },
  created () {
  },
  computed: {},
  methods: {
    edit () {
      var userInfo = storage.get('userInfo')
      var data = {
        partnerId: 9,
        userName: userInfo.userName,
        id: 19,
        content: this.textarea
      }
      updateContent(data).then(
        res => {
          // 提交成功
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
.input{
  margin-top: 3rem;
  padding: .8rem;
}
.btn{
  margin-top: 1rem;
  width: 100%;
}
</style>
