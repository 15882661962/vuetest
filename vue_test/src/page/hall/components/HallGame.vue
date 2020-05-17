<template>
  <div class="game-counts" style="margin-top:5px;">
    <div
    class="game-list game-list-detail"
    style="padding-left:0;padding-right:0;"
    v-for="(item,i) in gameList" :key="i">
        <div class="weui-flex text-center">
          <div class="item" style="position:relative;">
              <img :src="item.gameimg" class="w-100"/>
              <p class="txt-name">{{item.gameName}}</p>
          </div>
          <div class="item">
              <span>{{item.onlineCount}}</span>
              <p>在线人数</p>
          </div>
          <div class="item">
              <span>{{item.onlineTable}}</span>
              <p>桌数</p>
          </div>
          <div class="item">
              <span data-curId="">{{item.createCount}}</span>
              <p>创局</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HallGame',
  props: {
    gameList: Array
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
    background-color: #fff;
    border-bottom: solid 1px #eee;
}
.item img{
    vertical-align: middle;
    margin-top: 0.5rem;
    width: 100%;
}
.item span{
    color: #ff6a00;
    display: block;
    margin-top: .5rem;
}
.txt-name{
    position: absolute;
    top: 70%;
    margin-top: -0.5rem;
    font-size: 1rem;
    color: #ff6a00;
    font-weight: bold;
    text-align: center;
    width: 100%;
}
</style>
