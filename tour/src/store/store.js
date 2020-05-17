import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    city: '北京',
    index:0
  },
  actions: {
    change(ctx, city) {
      ctx.commit(city)
    },
  },
  mutations: {
    change(state, city) {
      state.city = city;
    }
  }
})
