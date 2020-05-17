import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import router from './router'
import store from './store/store.js'
import '@assrts/style/border.css'
import '@assrts/style/reset.css'
import '@assrts/style/iconfont.css'
import 'swiper/dist/css/swiper.css'
import 'mint-ui/lib/style.css'
import LyTab from 'ly-tab'
Vue.use(LyTab)
import fastClick from 'fastClick'
Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  mounted(){
    let map = new BMap.Map("allmap");
    let myCity = new BMap.LocalCity();
    myCity.get((result) => {
      if (result) {
        this.$store.state.city = result.name;
      } else {
        this.$store.state.city = "北京";
      }
    })
  }
})
