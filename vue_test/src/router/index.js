import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/login/Login'
import IndexRouter from '@/page/index/IndexRouter'
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/indexRouter',
      name: 'IndexRouter',
      redirect: '/indexRouter/index',
      // component: resolve => require(['../page/index/index'], resolve),
      component: IndexRouter,
      meta: {title: '自述文件'},
      children: [
        {
          path: '/indexRouter/index',
          name: 'Index',
          component: resolve => require(['../page/index/index'], resolve)
        },
        {
          path: '/agent',
          name: 'Agent',
          component: resolve => require(['../page/agent/Agent'], resolve)
        },
        {
          path: '/fangka',
          name: 'Fangka',
          component: resolve => require(['../page/fangka/Fangka'], resolve)
        },
        {
          path: '/notice',
          name: 'UpdateNotice',
          component: resolve => require(['../page/update/UpdateNotice'], resolve)
        },
        {
          path: '/group',
          name: 'Group',
          component: resolve => require(['../page/group/Group'], resolve)
        },
        {
          path: '/cash',
          name: 'Cash',
          component: resolve => require(['../page/cash/Cash'], resolve)
        },
        {
          path: '/cashrecord',
          name: 'CashRecord',
          component: resolve => require(['../page/cash/CashRecord'], resolve)
        },
        {
          path: '/gather',
          name: 'Gather',
          component: resolve => require(['../page/gather/Gather'], resolve)
        },
        {
          path: '/rechargeRecord',
          name: 'RechargeRecord',
          component: resolve => require(['../page/recharge/RechargeRecord'], resolve)
        },
        {
          path: '/updatemobile',
          name: 'UpdateMobile',
          component: resolve => require(['../page/update/UpdateMobile'], resolve)
        },
        {
          path: '/updatepassword',
          name: 'UpdatePassword',
          component: resolve => require(['../page/update/UpdatePassword'], resolve)
        }
      ]
    },
    {
      path: '/hall',
      name: 'Hall',
      component: resolve => require(['../page/hall/Hall'], resolve)
    },
    {
      path: '/recharge',
      name: 'Recharge',
      component: resolve => require(['../page/recharge/Recharge'], resolve)
    }
  ]
})
