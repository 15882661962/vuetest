<template>
  <div class="view-title">
      <span v-if="isBack" class="back-to" v-on:click="back"><i class="el-icon-arrow-left"></i>返回</span>
      <p class="">{{topTitle}}</p>
      <!--<span class="other-btn">筛选</span>-->
  </div>
</template>

<script>
export default {
  name: 'TopTitle',
  props: {
    topTitle: String,
    isBack: Boolean
  },
  data () {
    return {

    }
  },
  mounted () {
    let _this = this
    console.log(_this.isBack)
  },
  created () {
  },
  computed: {},
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.view-title{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #0094ff;
}
.view-title .back-to {
    padding-left: 1rem;
    padding-right: 2rem;
    top: 0;
    left: 0;
    display: inline-block;
    height: 40px;
    color: #fff;
    font-size: 1rem;
    position: absolute;
}
.view-title p{
  text-align: center;
  color: #fff;
  margin: 0;
}
.text-center {
    text-align: center;
}
.view-title .other-btn {
    padding-left: 2rem;
    padding-right: 3rem;
    top: 0;
    right: 0;
    height: 40px;
}
</style>
