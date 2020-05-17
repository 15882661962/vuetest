<template>
  <div class="swiper">
    <router-link to="galary" append>
      <swiper :options="swiperOption">
        <swiper-slide v-for="item of swiperList" :key="item.id">
          <div class="img-wrapper">
            <img class="swiper-img" :src="item.imgUrl">
          </div>
          <div class="desc-wrapper">
            <span class="left">{{item.date}}</span>
            <span class="middle">{{item.page}}张</span>
            <span class="right">编号：{{item.num}}</span>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </router-link>
  </div>
</template>
<script>export default {
    name: 'detailSwiper',
    props: {
      swiperList: Array
    },
    data() {
      return {
        swiperOption: {
          loop: true,
        }
      }
    },
    methods: {
      
    },
    mounted() {
      
    },
}</script>

<style lang="stylus" scoped>
 
</style>
