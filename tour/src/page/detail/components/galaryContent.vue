<template>
  <div class="galary-content">
    <div class="wrapper">
      <div class="imgWrapper" v-for="item of imgList[this.index][this.index]" :key="item.id">
        <img :src="item.imgUrl"/> 
      </div>
    </div>
    <div class="galary" v-show="show" :length="length">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item of imgList[this.index][this.index]" :key="item.id">
          <div class="galary-desc">{{parseInt(item.id)+1}}/{{length}}</div>
          <div class="galary-img">
            <img :src="img.imgUrl" @click="handlePictureClick">
          </div>
          <span class="cancelBtn" @click="handlePictureBackClick">X</span>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
  import { mapState} from 'vuex'
  export default {
    name: 'galaryContent',
    props: {
      imgList: Array
    },
    data() {
      return {
        legth:1,
        swiperOption: {
          loop: false,

        },
        show: false,
      }
    },
    components: {
      galaryContent,
    },
    methods: {
      handlePictureClick() {
        this.length = this.imgList[this.index][this.index].length;
        this.show = true;
      },
      handlePictureBackClick() {
        this.show = false;
      }
    },
    mounted() {
      this.loopGalaryList;
    },
    computed: mapState(['index']),
</script>

<style lang="stylus" scoped>
  .wrapper
  background:#fff

  .imgWrapper
  width:47%
  background:#aaa
  margin:.12rem
  float:left

  .imgWrapper>img
  width:100%

  .galary
  position:absolute
  top:-0.86rem
  right:0
  left:0
  bottom:0
  background:#000
  color:#fff

  .galary-img
  margin-top:4.5rem

  .galary-img>img
    width:100%

  .swiper-pagination
  color:#fff
  bottom:7.5rem

  .cancelBtn
  font-size:.5rem
  position:relative
  left:3.5rem
  bottom:-4rem

</style>
