<template>
  <div class="home">
    <home-header class="home-header" :city="city"></home-header>
    <home-swiper class="home-swiper" :swiperList="swiperList"></home-swiper>
    <home-catalog class="home-catalog" :iconList="iconList"></home-catalog>
    <home-hot class="home-hot" :hotTrendList="hotTrendList" :hotPriseList="hotPriseList" :hotContentList="hotContentList"></home-hot>
    <home-weekend class="home-weekend" :weekendList="weekendList"></home-weekend>
    <home-guess class="home-guess" :guessList="guessList"></home-guess>
  </div>
</template>
<script>
  import axios from 'axios'
  import homeHeader from './components/homeHeader'
  import homeSwiper from './components/homeSwipwer'
  import homeCatalog from './components/homeCatalog'
  import homeHot from './components/homeHot'
  import homeWeekend from './components/homeWeekend'
  import homeGuess from './components/homeGuess'
  export default {
  name: 'Home',
    components: {
      homeHeader,
      homeSwiper,
      homeCatalog,
      homeHot,
      homeWeekend,
      homeGuess
    },
    data() {
      return {
        city: '',
        guessList: [],
        swiperList: [],
        iconList: [],
        hotTrendList: [],
        hotPriseList: [],
        hotContentList: [],
        weekendList: []
      }
    },
    methods: {
      getHomeData(){
        axios.get('/api/index.json').then(this.getHomeDataSucc)
      },
      getHomeDataSucc(res) {
        res = res.data;
        if (res.data) {
          const data = res.data;
          this.city = data.city;
          this.guessList = data.guessList;
          this.swiperList = data.swiperList;
          this.iconList = data.iconList;
          this.hotTrendList = data.hotTrendList;
          this.hotPriseList = data.hotPriseList;
          this.hotContentList = data.hotContentList;
          this.weekendList = data.weekendList;
        }
      }
    },
    mounted() {
      this.getHomeData();
    },
  }
</script>

<style lang="stylus" scoped>
  .home
  position:relative

  .home-header
  position:fixed
  top:0
  left:0
  z-index:100
  width:100%

  .home-swiper
</style>
