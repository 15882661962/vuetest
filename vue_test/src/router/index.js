import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/login/Login'
import Index from '@/page/index/Index'
// eslint-disable-next-line no-unused-vars
import HelloWorld from '@/components/HelloWorld'
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'Login',
      component: Login
    },
    {
      path: '/index',
      // name: 'Index',
      component: Index
    }
  ]
})
