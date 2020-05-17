<template>
  <div class="index">
    <top-title :topTitle=TopTitle :isBack="true"></top-title>
  </div>
</template>

<script>
import storage from '@/utils/storage.js'
import config from '@/utils/config.js'
import TopTitle from '../../components/TopTitle'
import { firstOrDefault } from '@/request/api'
export default {
  name: 'UpdateMobile',
  components: {
    TopTitle
  },
  data () {
    return {
      TopTitle: '绑定',
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
</style>
