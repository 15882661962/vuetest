<template>
  <div class="header">
    <div class="left" @click="handleBackClick">
      <span class="iconfont">&#xe600;</span>
    </div>
    <div class="middle">
      {{}}
    </div>
    <div class="right">
      <span class="iconfont">&#xe86d;</span>
    </div>
  </div>
</template>
<script>export default {
    name: 'detailHeader',
    data() {
      
    },
    methods: {
      handleBackClick() {
        this.$router.go(-1);
      }
    },
    mounted() {
      
    },
}</script>

<style lang="stylus" scoped>
  .header
  height:.88rem
  background:#fff
  display:flex

  .left
  float:left
  margin-left:.2rem
  color-profile:#23beae

  .middle
  flex:1
  text-align:center
  font-weight:bold

  .right
  float:right
  padding-right:.5rem
  color-profile:#23beae
</style>
