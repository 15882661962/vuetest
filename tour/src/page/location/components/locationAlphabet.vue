<template>
  <div class="">
    <ul class="list">
      <li v-for="item of alphabetList" :key="item.id" @click="handleLetterClick">{{item.content}}</li>
      <li>热门城市</li>
      <li>A</li>
    </ul>
    <div class="connect" ref="distance" :style="hidden">
      {{this.content}}
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import BMap from 'BMap'
  export default {
    name: 'locationList',
    props: {
      alphabetList: Array
    },
    data() {
      return {
        hidden: {
          display:'none'
        },
        content:'',
      }
    },
    methods: {
      handleLetterClick(e) {
        this.content = e.target.innerText
        this.$emit("change", this.content)
        for (let i = 0; i < this.alphabetList.length; i++) {
          if (this.content === this.alphabetList[i].content) {
            let distance = 0.6 + ((i + 1) * 0.3)
            const showElement = this.$refs.distance
            showElement.style = "display:block";
            showElement.style = "top:" + distance + "rem";
            setTimeout(function () {
              showElement.style = "display:none";
            }, 300)
          }
        }
      }
    },
    mounted() {
      
    },
}</script>

<style lang="stylus" scoped>
  .list
  position:fixed
  top:1.15rem
  right:0
  z-index:100
  text-align:center
  width:15%
  background:#eff1f5
  padding-bottom:100rem
  opacity:.7
  color:#62cec4

  .list > li
  margin:.1rem 0
  font-weight:bold

  .connect
  position:absolute
  top:1.1rem
  right:1.1rem
  z-index:100
  text-align:center
  background:rgba(80,180,0,.7)
  border-radius:.07rem
  color:#fff
</style>
