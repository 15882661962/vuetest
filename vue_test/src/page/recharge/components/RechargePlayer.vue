<template>
  <div style="margin-top:5px;">
    <div
    style="background-color:#fff;border-bottom:solid 1px #ddd;"
    class="order-list game-list-detail"
    v-for="(item,i) in players" :key="i">
        <div class="d-flex rel">
            <div class="headimg">
              <img :src="item.imgurl">
            </div>
            <div class="des d-flex-item" style="font-size:.8rem; padding-right:.8rem; padding-top:.8rem;">
              <div class="d-flex">
                <div class="d-flex-item">{{item.info}}</div>
                <a class="ico-blue d-flex-item text-right">{{item.GamerCount}}人</a>
              </div>
              <div class="d-flex">
                <p class="d-flex-item">充值：
                  <a href="" class="ico-org">{{item.Total}}</a>
                </p>
                <p class="d-flex-item text-right">推荐人:{{item.SpreadName}}</p>
              </div>
              <div class="d-flex">
                <p class="d-flex-item">余额：{{item.Gold}}</p>
                <p class="d-flex-item text-right">总消耗：
                  <a href="" class="ico-org">{{item.Cost}}</a>
                </p>
              </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RechargePlayer',
  props: {
    players: Array
  },
  data () {
    return {
    }
  },
  created () {

  },
  computed: {},
  methods: {

  }
}
</script>

<style scoped>
.headimg {
    width: 6rem;
    height: 6rem;
    padding: 1rem;
}
.headimg img{
  width: 100%;
  height: 100%;
}
.d-flex{
  display: flex;
}
.rel{
  position: relative;
}
.d-flex-item {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
}
.text-right{
  text-align: right;
}
.ico-org{
  color: #ff6a00;
}
.ico-blue{
  color: #0094ff;
}
</style>
