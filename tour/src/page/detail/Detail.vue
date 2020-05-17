<template>
  <div class="home">
    <detail-header>

    </detail-header>
    <detail-swiper :swiperList="swiperList">

    </detail-swiper>
    <detail-map>

    </detail-map>
    <router-view :galaryList="galaryList" :imgList="imgList" :addressList="addressList" ></router-view>
  </div>
</template>
<script>
  import axios from 'axios'
  import detailHeader from './components/detailHeader'
  import detailSwiper from './components/detailSwiper'
  import detailMap from './components/detailMap'
  export default {
  name: 'Detail',
    components: {
      detailHeader,
      detailSwiper,
      detailMap
    },
    data() {
      return {
        swiperList:[],
        galaryList: [],
        imgList: [],
        addressList: []
      }
    },
    methods: {
      getDetailData() {
        axios.get('/api/detail.json?id='+this.$route.params.id).then(this.getDetailDataSucc)
      },
      getDetailDataSucc(res) {
        res = res.data;
        if (res.data) {
          const data = res.data;
          this.swiperList = data.swiperList
          this.galaryList = data.galaryList
          this.imgList = data.imgList
          this.addressList = data.addressList
        }
      }
    },
    mounted() {
      this.getDetailData();
    },
  }
</script>

<style lang="stylus" scoped>
</style>
