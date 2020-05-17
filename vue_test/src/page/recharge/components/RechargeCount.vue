<template>
  <div>
    <p class="tit rel" data-sdt="" data-edt="">{{timeLabel}}</p>
    <div class="weui-flex c-bg-w text-center" id="_hall_count">
      <div class="item regist-list-detail">
        <span class="f-12">{{costCount}}</span>
        <p class="">房卡消耗</p>
      </div>
      <div class="item game-list-detail" data-gameId="-1">
        <span class="f-12">{{rechargeCount}}</span>
        <p class="">玩家充值</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RechargeCount',
  props: {
    timeLabel: String,
    costCount: Number,
    rechargeCount: Number
  },
  data () {
    return {
      // registCount: 0,
      // createCount: 0
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
.tit:before {
    content: "";
    width: 0.4rem;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #0094ff;
}
.tit {
    margin: 0.8rem 0;
    padding: 0.3rem 0;
    text-indent: 1rem;
}
.f-12 {
    font-size: 1.2rem;
}
.rel {
    position: relative;
}
.c-bg-w {
    background-color: #fff;
}
.text-center {
    text-align: center;
}
.weui-flex {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
}
.item {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
}
.item span{
  color: #ff6a00;
}
</style>
