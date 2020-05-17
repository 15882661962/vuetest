<template>
  <router-link to="map" append>
    <div class="map">
      <div class="map-left">
        <div class="map-left-desc">
          <span>上海</span>
          <span class="map-left-address">地址</span>
        </div>
        <div class="map-left-desc">
          四川成都
        </div>
      </div>
      <div class="map-right">
        <div class="desc">
          地图
        </div>
        <div class="icon">
          >
        </div>
      </div>
    </div>
  </router-link>
</template>
<script>export default {
    name: 'detailMap',
    data() {
      
    },
    methods: {
      
    },
    mounted() {
      
    },
}</script>

<style lang="stylus" scoped>
  .map
  height:1.5rem
  font-size:.3rem
  background:#fff

  .map-left
  float:left
  width:80%

  .map-left-desc
  margin-left:.2rem
  margin-top:.2rem
  margin-right:.2rem
  font-weight:bold

  .address
  border:solid #000 .02rem
  color:#aaa

  .map-left-address
  padding:.2rem
  color:#aaa

  .map-right
  float:right
  width:20%
  text-align:center
  position:relative

  .desc
  position:absolute
  top:.6rem
  right:.6rem
  color:#aaa

  .icon
  position:absolute
  top:.6rem
  right:.2rem
</style>
