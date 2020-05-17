<template>
  <div>
    <p class="tit rel">{{timeLabel}}</p>
    <div class="c-bg-w text-center">
      <div class="item">
        <p class="">广告费总额：</p>
        <span class="f-12">{{gatherData.NewMemberScore}}</span>
      </div>
      <div class="item">
        <p class="">充值总额：</p>
        <span class="f-12">{{gatherData.Recharge}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GatherCount',
  props: {
    gatherData: Object,
    timeLabel: String
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
.item {
  display: flex;
  justify-content: space-between;
  padding: .8rem;
  border-bottom: solid 1px #eee;
}
.item>p{
  margin: 0;
}
.item span{
  color: #18b4ed;
}
</style>
