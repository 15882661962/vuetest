import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {// 存放数据
    city: '北京',
    index: 0
  },
  actions: {// 异步调取
    change (ctx, city) {
      ctx.commit(city)
    }
  },
  mutations: {// 更改状态
    change (state, city) {
      state.city = city
    }
  }
})
