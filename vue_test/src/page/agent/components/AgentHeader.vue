<template>
  <div class="header">
      <p>玩家总数：{{playercount}}</p>
      <button v-on:click="clear" class="clearbtn">清空积分</button>
    </div>
</template>

<script>
import storage from '@/utils/storage.js'
import config from '@/utils/config.js'
import { emptyScore } from '@/request/api'
export default {
  name: 'AgentHeader',
  props: {
    playercount: Number
  },
  data () {
    return {

    }
  },
  created () {

  },
  computed: {},
  methods: {
    clear () {
      var userInfo = storage.get('userInfo')
      var data = {
        userName: userInfo.userName,
        partnerId: config.partnerId,
        userId: userInfo.id,
        typeId: null//
      }
      emptyScore(data).then(
        res => {

        }
      )
    }
  }
}
</script>

<style scoped>
.header {
  margin-top: 3rem;
  padding-top: .1rem;
  display: flex;
  justify-content: space-between;
}
.header > p {
  position: relative;
  margin: 0.8rem 0;
  padding: 0.3rem 0;
  text-indent: 1rem;
  font-size: .9rem;
}
.header > p:before {
  content: "";
  width: 0.4rem;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #0094ff;
}
.header>button{
  color: #ff6a00;
  border: none;
  background: none;
}
</style>
